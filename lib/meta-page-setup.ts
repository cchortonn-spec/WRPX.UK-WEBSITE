const META_GRAPH_API = "https://graph.facebook.com/v20.0";

export type MetaManagedPage = {
  id: string;
  name: string;
};

type GraphError = {
  message?: string;
  type?: string;
  code?: number;
};

async function parseGraphResponse<T>(response: Response): Promise<T> {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = (data as { error?: GraphError })?.error;
    throw new Error(error?.message ?? `Meta API error HTTP ${response.status}`);
  }
  return data as T;
}

function getAccessToken() {
  // Page-level operations (subscribed_apps, leadgen) require a Page Access Token
  // with leads_retrieval + pages_manage_metadata permissions.
  // This is separate from the WhatsApp System User token.
  const token =
    process.env.META_PAGE_ACCESS_TOKEN?.trim() ||
    process.env.WHATSAPP_ACCESS_TOKEN?.trim();
  if (!token) {
    throw new Error(
      "META_PAGE_ACCESS_TOKEN is not configured. See .env.example for setup instructions."
    );
  }
  return token;
}

export async function fetchManagedPages(): Promise<MetaManagedPage[]> {
  const token = getAccessToken();
  const data = await parseGraphResponse<{
    data?: Array<{ id: string; name: string }>;
  }>(
    await fetch(
      `${META_GRAPH_API}/me/accounts?fields=id,name&access_token=${encodeURIComponent(token)}`
    )
  );

  return (data.data ?? []).map((page) => ({
    id: page.id,
    name: page.name,
  }));
}

export async function getPageLeadgenSubscription(pageId: string): Promise<boolean> {
  const token = getAccessToken();
  const data = await parseGraphResponse<{
    data?: Array<{ subscribed_fields?: string[] }>;
  }>(
    await fetch(
      `${META_GRAPH_API}/${pageId}/subscribed_apps?access_token=${encodeURIComponent(token)}`
    )
  );

  for (const app of data.data ?? []) {
    if (app.subscribed_fields?.includes("leadgen")) {
      return true;
    }
  }

  return false;
}

export async function subscribePageToLeadgen(pageId: string): Promise<void> {
  const token = getAccessToken();
  const url = `${META_GRAPH_API}/${pageId}/subscribed_apps?subscribed_fields=leadgen&access_token=${encodeURIComponent(token)}`;

  const data = await parseGraphResponse<{ success?: boolean }>(
    await fetch(url, { method: "POST" })
  );

  if (!data.success) {
    throw new Error("Meta did not confirm page subscription");
  }
}
