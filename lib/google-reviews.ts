/**
 * Google Business Profile reviews — edit this file when your rating,
 * review count, or featured quotes change.
 *
 * profileUrl: link that opens your Google Business reviews.
 * reviewCount: set to your real Google count (or null to hide the number).
 */
export const googleReviews: {
  profileUrl: string;
  rating: number;
  reviewCount: number | null;
  reviews: ReadonlyArray<{ name: string; quote: string }>;
} = {
  profileUrl: "https://share.google/dKrZsbcEILvSQeRVQ",
  rating: 5,
  reviewCount: 4,
  reviews: [
    {
      name: "Trevor “TNT” Walters",
      quote:
        "We couldn't be happier with the results! Fitted bedroom wardrobes vinyl wrapped — you genuinely wouldn't know they aren't the original factory finish. Connor was professional, punctual, and left everything spotless. Outstanding attention to detail.",
    },
    {
      name: "L Hall",
      quote:
        "Couldn't recommend more — fantastic communication, very punctual, and a fantastic finish. I'm so happy with my new worktops — they make such a difference to my kitchen.",
    },
    {
      name: "Liam Devlin",
      quote:
        "10/10 for Connor and his team at WRPX. Transformed the kitchen and utility into something stylish and modern. Cracking job with top quality workmanship. Would definitely recommend!",
    },
    {
      name: "Mariama Bah",
      quote:
        "Connor did a brilliant job with my kitchen — he turned it into a brand new kitchen. Very polite and professional. I love my new kitchen, thank you!",
    },
  ],
};
