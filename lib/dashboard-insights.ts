import { classifyPage, formatHourLabel, type PageKind } from "@/lib/analytics-helpers";
import type {
  ClickLocationStat,
  DeviceStat,
  Insight,
  LeadCounts,
  PageRecommendation,
  PageStat,
  PageStatus,
  PlaceStat,
  Priority,
  SourceStat,
} from "@/lib/analytics-types";
import { siteConfig } from "@/lib/site-config";

// The dashboard's "insights" and "recommendations" are worked out from your own tracking data
// using the rules below. Every rule has a minimum number of visitors, so a few visits never
// produce a big claim.

/** A page needs at least this many visitors before we give advice about it. */
const MIN_PAGE_SESSIONS = 5;
/** Site-wide insights wait for this many visitors in the period. */
const MIN_SITE_SESSIONS = 20;

const PRIORITY_ORDER: Record<Priority, number> = { high: 0, medium: 1, low: 2 };

function percentChange(current: number, previous: number) {
  return previous > 0 ? Math.round(((current - previous) / previous) * 100) : null;
}

function plural(count: number, one: string, many = `${one}s`) {
  return `${count} ${count === 1 ? one : many}`;
}

// ---------- Page-by-page advice ----------

function noEnquiryAdvice(kind: PageKind, sessions: number): PageRecommendation {
  const priority: Priority = sessions >= 15 ? "high" : "medium";
  const title = `${plural(sessions, "visitor")}, no enquiries`;

  switch (kind) {
    case "quote":
      return {
        priority,
        title: `${plural(sessions, "person", "people")} opened the quote form but nobody finished it`,
        detail:
          "Shorten the form, or move the photo upload to the very last step. Try it yourself on a phone: if it feels long to you, it feels long to customers.",
      };
    case "contact":
      return {
        priority,
        title: `${plural(sessions, "person", "people")} reached Contact but nobody sent an enquiry`,
        detail:
          "Send yourself a test enquiry from your phone to confirm the form works. Then put the WhatsApp button above the form so people have an easier option.",
      };
    case "home":
      return {
        priority,
        title: `${title} from the homepage`,
        detail:
          "On a phone, check that the WhatsApp button and a quote button are visible on the first screen without scrolling. Add a line like 'Free survey, 5-year guarantee' next to them.",
      };
    case "location":
      return {
        priority,
        title: `${title} on this area page`,
        detail:
          "Add 2 or 3 real photos from jobs in this area and a WhatsApp button at the top. Local proof ('we wrapped a kitchen in your town') turns searchers into enquiries.",
      };
    case "blog":
      return {
        priority,
        title: `${title}: readers aren't offered a next step`,
        detail:
          "Add a 'Get a free quote' button after the first section and again at the end, and link to the matching service page.",
      };
    case "gallery":
      return {
        priority,
        title: `${title}: people look at your work but don't ask about it`,
        detail:
          "Add a 'Want this finish? Get a quote' button under each project, and a WhatsApp button that stays on screen while they scroll.",
      };
    case "cost":
      return {
        priority,
        title: `${title} on the cost guide`,
        detail:
          "People reading prices are close to buying. Add 'Get your exact price' next to the price table and a WhatsApp button for quick questions.",
      };
    case "training":
      return {
        priority: "low",
        title: `${title} on a training page`,
        detail:
          "Training enquiries are rare and high value. Make sure the enquiry button and the price are clear near the top of the page.",
      };
    default:
      return {
        priority,
        title,
        detail:
          "Put the WhatsApp button and a 'From £' price above the fold, with a before/after photo and your 5-year guarantee right under the heading.",
      };
  }
}

type PageInput = Omit<PageStat, "status" | "recommendations">;

/** Works out a status and a list of recommendations for one page. */
export function buildPageAdvice(
  page: PageInput,
  siteConversion: number
): { status: PageStatus; recommendations: PageRecommendation[] } {
  const sessions = page.sessions;

  if (sessions < MIN_PAGE_SESSIONS) {
    return {
      status: "low_data",
      recommendations: [
        {
          priority: "low",
          title: "Not enough visitors yet",
          detail: `Only ${plural(sessions, "visitor")} so far. Advice appears once a page has ${MIN_PAGE_SESSIONS} or more.`,
        },
      ],
    };
  }

  const kind = classifyPage(page.page_url);
  const recommendations: PageRecommendation[] = [];
  let status: PageStatus = "ok";

  if (page.leads === 0) {
    status = "attention";
    recommendations.push(noEnquiryAdvice(kind, sessions));
  } else if (page.conversion >= Math.max(5, siteConversion * 1.5)) {
    status = "converting";
    recommendations.push({
      priority: "medium",
      title: `Converts well: ${page.conversion}% of visitors enquire`,
      detail:
        "This page is doing its job. Send more visitors to it: link to it from the homepage and your area pages, and use it as the landing page if you run ads.",
    });
  }

  // Quote form: lots of people open it, few finish.
  if (kind === "quote" && sessions >= 8 && page.leads > 0 && page.conversion < 15) {
    status = "attention";
    recommendations.push({
      priority: "high",
      title: `Only ${page.conversion}% of people who open the quote form finish it`,
      detail:
        "Cut the number of questions, show a progress bar, and make the photo upload the last step so people have already committed.",
    });
  }

  // People arrive and leave without doing anything (not worth flagging on a page that already converts).
  if (
    status !== "converting" &&
    page.bounce_rate !== null &&
    page.entries >= 6 &&
    page.bounce_rate >= 75 &&
    kind !== "contact" &&
    kind !== "quote"
  ) {
    status = "attention";
    recommendations.push({
      priority: page.entries >= 20 ? "high" : "medium",
      title: `${page.bounce_rate}% of people who land here leave without doing anything`,
      detail:
        "Add a clear next step in the first screen (see our work, or get a quote). Also test how fast the page loads on mobile data.",
    });
  }

  // Mostly phone visitors on a page that converts below average.
  if (page.mobile_share >= 70 && sessions >= 8 && page.conversion < siteConversion) {
    recommendations.push({
      priority: "medium",
      title: `${page.mobile_share}% of visitors are on a phone`,
      detail:
        "Open this page on your own phone. Are the buttons easy to tap, is the text readable, and is the WhatsApp button visible without scrolling?",
    });
  }

  // Trend.
  if (page.trend !== null && page.views_previous !== null) {
    if (page.trend >= 50 && page.views >= 8 && page.views_previous >= 3) {
      if (status === "ok") status = "growing";
      recommendations.push({
        priority: "low",
        title: `Views up ${page.trend}% on the previous period`,
        detail:
          "This page is picking up. Make sure its photos and prices are current and that there is a clear way to enquire.",
      });
    } else if (page.trend <= -40 && page.views_previous >= 10) {
      recommendations.push({
        priority: "medium",
        title: `Views down ${Math.abs(page.trend)}% on the previous period`,
        detail:
          "In Google Search Console, open 'Page indexing' and check this page is still listed. Also check its title and description still match what people search for.",
      });
    }
  }

  if (recommendations.length === 0) {
    recommendations.push({
      priority: "low",
      title: "Performing normally",
      detail: "No problems spotted on this page. Keep an eye on it as more visitors arrive.",
    });
  }

  recommendations.sort((a, b) => PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]);
  return { status, recommendations };
}

// ---------- Whole-site insights ----------

export type InsightInput = {
  visitors: number;
  enquirers: number;
  conversion: number;
  views: number;
  leads: number;
  leadCounts: LeadCounts;
  previous: { visitors: number; enquiries: number; conversion: number } | null;
  comparisonLabel: string | null;
  sources: SourceStat[];
  devices: DeviceStat[];
  cities: PlaceStat[];
  pages: PageStat[];
  clickLocations: ClickLocationStat[];
  hourly: Array<{ hour: number; views: number }>;
  trackingSince: string | null;
};

const LEAD_LABELS: Record<keyof LeadCounts, string> = {
  whatsapp_click: "WhatsApp",
  phone_click: "phone calls",
  email_click: "email",
  quote_form: "the kitchen quote form",
  contact_form: "the contact form",
};

const LOCATION_LABELS: Record<string, string> = {
  floating: "floating WhatsApp button",
  sticky: "sticky bottom bar",
  header: "header",
  footer: "footer",
  content: "buttons inside the page",
};

export function buildInsights(input: InsightInput): Insight[] {
  const insights: Insight[] = [];
  const add = (insight: Insight) => insights.push(insight);
  const enough = input.visitors >= MIN_SITE_SESSIONS;

  // 1. Not enough data yet: say so honestly.
  if (!enough) {
    add({
      id: "baseline",
      kind: "info",
      priority: "low",
      title: "Building your baseline",
      evidence: `${plural(input.visitors, "visitor")} tracked in this period.`,
      action: `Insights get sharper after about ${MIN_SITE_SESSIONS} visitors, usually within a few days. Until then, treat the numbers as a first look, not a verdict.`,
    });
  }

  // 2. Enquiries: up, down, or none at all.
  if (enough && input.leads === 0) {
    add({
      id: "no-enquiries",
      kind: "warning",
      priority: "high",
      title: `No enquiries from ${input.visitors} visitors`,
      evidence: "Nobody has used WhatsApp, phone, email or a form in this period.",
      action:
        "Test every route today: tap the WhatsApp button, the phone number, and send a test form on your phone. If they all work, the problem is the pages or the traffic, so check the page advice below.",
    });
  } else if (input.previous && input.previous.enquiries >= 3) {
    const change = percentChange(input.leads, input.previous.enquiries);
    if (change !== null && change >= 25) {
      add({
        id: "enquiries-up",
        kind: "win",
        priority: "medium",
        title: `Enquiries are up ${change}%`,
        evidence: `${input.leads} now vs ${input.previous.enquiries} ${input.comparisonLabel ?? "before"}.`,
        action:
          "Work out what changed (a post, an ad, a new page) and do more of it. Reply to every new enquiry quickly while momentum is high.",
      });
    } else if (change !== null && change <= -25) {
      add({
        id: "enquiries-down",
        kind: "warning",
        priority: "high",
        title: `Enquiries are down ${Math.abs(change)}%`,
        evidence: `${input.leads} now vs ${input.previous.enquiries} ${input.comparisonLabel ?? "before"}.`,
        action:
          "Check whether visitors dropped too (see the visitors number above). If visitors are steady, a button or form may have broken, so test them on your phone.",
      });
    }
  }

  // 3. Which way people contact you.
  if (input.leads >= 5) {
    const ranked = (Object.keys(input.leadCounts) as Array<keyof LeadCounts>)
      .map((type) => ({ type, count: input.leadCounts[type] }))
      .sort((a, b) => b.count - a.count);
    const top = ranked[0];
    const share = Math.round((top.count / input.leads) * 100);
    if (top.count >= 3 && share >= 40) {
      const advice: Record<keyof LeadCounts, string> = {
        whatsapp_click:
          "Keep the WhatsApp button visible on every page, and reply within minutes. Speed wins jobs.",
        phone_click:
          "Make sure calls are answered, or that voicemail clearly says you'll ring back. Missed calls are lost jobs.",
        email_click: "Check your inbox often, and set up an auto-reply that confirms you got the message.",
        quote_form:
          "The quote form is working. Check your lead emails daily and contact people the same day.",
        contact_form: "Check your lead emails daily and contact people the same day.",
      };
      add({
        id: "top-channel",
        kind: "info",
        priority: "low",
        title: `${LEAD_LABELS[top.type][0].toUpperCase()}${LEAD_LABELS[top.type].slice(1)} is how most people contact you (${share}%)`,
        evidence: `${top.count} of ${input.leads} enquiries in this period.`,
        action: advice[top.type],
      });
    }
  }

  // 4. Best and worst traffic sources.
  const sourcesWithData = input.sources.filter((source) => source.sessions >= 8);
  const bestSource = [...sourcesWithData]
    .filter((source) => source.enquirers >= 2)
    .sort((a, b) => b.conversion - a.conversion)[0];
  if (enough && bestSource) {
    const isDirect = bestSource.source === "direct";
    const niceName = isDirect
      ? "People who type your address or use a saved link"
      : bestSource.source.charAt(0).toUpperCase() + bestSource.source.slice(1);
    add({
      id: "best-source",
      kind: "win",
      priority: "medium",
      title: isDirect ? `${niceName} are your best visitors` : `${niceName} sends your best visitors`,
      evidence: `${bestSource.conversion}% of ${isDirect ? "these" : "its"} ${bestSource.sessions} visitors enquired (site average ${input.conversion}%).`,
      action: isDirect
        ? "These people already know you (often from a van, a card or word of mouth). Keep your web address on everything you hand out, and ask happy customers to share it."
        : `Put more effort into ${niceName}: post there more, or if it's an ad channel, give it a bigger share of the budget.`,
    });
  }

  const wasteful = sourcesWithData
    .filter(
      (source) =>
        source.enquirers === 0 &&
        source.sessions >= 15 &&
        source.sessions >= input.visitors * 0.15
    )
    .sort((a, b) => b.sessions - a.sessions)[0];
  if (enough && wasteful) {
    const paid = wasteful.source.includes("paid");
    add({
      id: "wasteful-source",
      kind: "warning",
      priority: paid ? "high" : "medium",
      title: `${wasteful.source} sends visitors but nobody enquires`,
      evidence: `${wasteful.sessions} visitors, 0 enquiries.`,
      action: paid
        ? "This is paid traffic that isn't converting. Pause it or change the targeting and the page it points to."
        : "Link to a specific service page from there instead of the homepage, with a clear 'get a quote' button.",
    });
  }

  // 5. Phones vs computers.
  const mobile = input.devices.find((device) => device.device === "mobile");
  const desktop = input.devices.find((device) => device.device === "desktop");
  if (enough && mobile && desktop && mobile.sessions >= 15 && desktop.sessions >= 15) {
    if (desktop.conversion > 0 && mobile.conversion < desktop.conversion * 0.6) {
      add({
        id: "mobile-gap",
        kind: "warning",
        priority: "high",
        title: "Phone visitors enquire much less than computer visitors",
        evidence: `${mobile.conversion}% on phones vs ${desktop.conversion}% on computers.`,
        action:
          "Go through the main pages on your phone as if you were a customer. Look for buttons that are hard to tap, text that's too small, or anything that blocks the screen.",
      });
    }
  }
  if (enough && mobile) {
    const mobileShare = Math.round((mobile.sessions / Math.max(input.visitors, 1)) * 100);
    if (mobileShare >= 60) {
      add({
        id: "mobile-heavy",
        kind: "opportunity",
        priority: "low",
        title: `${mobileShare}% of your visitors are on a phone`,
        evidence: `${mobile.sessions} of ${input.visitors} visitors.`,
        action:
          "Design for thumbs first: big tap targets, the WhatsApp button always reachable, and photos that load quickly on mobile data.",
      });
    }
  }

  // 6. Busiest hours.
  const totalHourViews = input.hourly.reduce((sum, hour) => sum + hour.views, 0);
  if (totalHourViews >= 30) {
    let bestStart = 0;
    let bestTotal = -1;
    for (let hour = 0; hour < 24; hour += 1) {
      const total =
        input.hourly[hour].views +
        input.hourly[(hour + 1) % 24].views +
        input.hourly[(hour + 2) % 24].views;
      if (total > bestTotal) {
        bestTotal = total;
        bestStart = hour;
      }
    }
    add({
      id: "peak-hours",
      kind: "info",
      priority: "low",
      title: `Your visitors are busiest ${formatHourLabel(bestStart)} to ${formatHourLabel((bestStart + 3) % 24)}`,
      evidence: `${Math.round((bestTotal / totalHourViews) * 100)}% of page views happen in those 3 hours (UK time).`,
      action:
        "Schedule social posts and ads to go live about an hour before, and be ready to answer WhatsApp during that window.",
    });
  }

  // 7. Which button gets used.
  const clickTotal = input.clickLocations.reduce((sum, location) => sum + location.total, 0);
  if (clickTotal >= 8) {
    const topLocation = [...input.clickLocations].sort((a, b) => b.total - a.total)[0];
    const share = Math.round((topLocation.total / clickTotal) * 100);
    if (share >= 40) {
      add({
        id: "top-button",
        kind: "info",
        priority: "low",
        title: `The ${LOCATION_LABELS[topLocation.location] ?? topLocation.location} gets ${share}% of contact clicks`,
        evidence: `${topLocation.total} of ${clickTotal} clicks on WhatsApp, phone and email.`,
        action:
          "Keep that button exactly where it is, and make sure it's visible on every page. Don't remove or hide it when redesigning.",
      });
    }
  }

  // 8. Best page and biggest gap.
  const bestPage = [...input.pages]
    .filter((page) => page.leads >= 2)
    .sort((a, b) => b.leads - a.leads || b.conversion - a.conversion)[0];
  if (bestPage) {
    add({
      id: "best-page",
      kind: "win",
      priority: "medium",
      title: `${bestPage.page_title} is your top enquiry page`,
      evidence: `${plural(bestPage.leads, "enquiry", "enquiries")} from ${plural(bestPage.sessions, "visitor")} (${bestPage.conversion}%).`,
      action:
        "Copy what works on this page (the layout of the buttons, the photos, the wording) onto your weaker pages.",
      page_url: bestPage.page_url,
      page_title: bestPage.page_title,
    });
  }

  const biggestGap = [...input.pages]
    .filter((page) => page.status === "attention" && page.sessions >= 10 && page.leads === 0)
    .sort((a, b) => b.sessions - a.sessions)[0];
  if (biggestGap) {
    add({
      id: "biggest-gap",
      kind: "warning",
      priority: "high",
      title: `${biggestGap.page_title} gets traffic but no enquiries`,
      evidence: `${plural(biggestGap.sessions, "visitor")}, 0 enquiries.`,
      action: biggestGap.recommendations[0]?.detail ?? "See the page advice below.",
      page_url: biggestGap.page_url,
      page_title: biggestGap.page_title,
    });
  }

  // 9. People from towns you don't have a page for.
  const coveredAreas = new Set(siteConfig.areas.map((area) => area.toLowerCase()));
  const uncovered = input.cities.find(
    (city) =>
      city.sessions >= 3 && city.country === "GB" && !coveredAreas.has(city.label.toLowerCase())
  );
  if (uncovered) {
    add({
      id: "new-area",
      kind: "opportunity",
      priority: "medium",
      title: `People in ${uncovered.label} are finding you`,
      evidence: `${plural(uncovered.sessions, "visitor")} from ${uncovered.label}, and there's no ${uncovered.label} page yet.`,
      action: `Create a 'Kitchen wrapping ${uncovered.label}' page with local photos. Area pages are how you show up when someone searches for a wrapper near them.`,
    });
  }

  insights.sort((a, b) => PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]);
  return insights.slice(0, 9);
}
