"use client";

import Link from "next/link";
import { useState } from "react";
import { formatFrom, kitchenPricing } from "@/lib/pricing";

type OptionId = "full" | "shaker" | "worktops";

const OPTIONS: Record<
  OptionId,
  {
    label: string;
    price: number;
    result: string;
    href: string;
  }
> = {
  full: {
    label: "Full kitchen",
    price: kitchenPricing.fullKitchen,
    result: `Cupboard doors, frames, plinths and worktops for a typical kitchen of about 10 to 12 doors. Bigger kitchens (15 to 20 doors) start from around £${kitchenPricing.largerKitchen.toLocaleString("en-GB")}.`,
    href: "/kitchen-wrapping-quote/?type=complete",
  },
  shaker: {
    label: "Shaker kitchen",
    price: kitchenPricing.shakerKitchen,
    result:
      "Shaker doors take more time to wrap around the frame detail, so they cost a little more. Includes worktops for about 10 to 12 doors.",
    href: "/kitchen-wrapping-quote/?type=complete&door=shaker",
  },
  worktops: {
    label: "Worktops only",
    price: kitchenPricing.worktopsOnly,
    result:
      "A quick, affordable change. Marble, stone, concrete and wood effects, finished neatly at the edges.",
    href: "/kitchen-wrapping-quote/?type=worktop",
  },
};

/** Simple starting-price picker for the kitchen wrapping cost page. */
export function CostPricePicker() {
  const [selected, setSelected] = useState<OptionId>("full");
  const option = OPTIONS[selected];

  return (
    <div className="cost-picker">
      <div className="cost-picker-options" role="radiogroup" aria-label="Kitchen type">
        {(Object.keys(OPTIONS) as OptionId[]).map((id) => (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={selected === id}
            className={`cost-picker-option${selected === id ? " is-selected" : ""}`}
            onClick={() => setSelected(id)}
          >
            {OPTIONS[id].label}
          </button>
        ))}
      </div>
      <div className="cost-picker-result card-float">
        <p className="cost-picker-price">{formatFrom(option.price)}</p>
        <p className="cost-picker-text">{option.result}</p>
        <Link href={option.href} className="btn-primary inline-block mt-5">
          Get my exact fixed quote
        </Link>
        <p className="cost-picker-note">
          What changes the price: kitchen size, number of doors and drawers, door style, the
          finish you choose and the condition of the surfaces.
        </p>
      </div>
    </div>
  );
}
