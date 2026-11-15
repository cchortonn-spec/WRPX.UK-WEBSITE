/**
 * Google Business Profile reviews — edit this file when your rating,
 * review count, or featured quotes change.
 *
 * profileUrl: link that opens your Google Business reviews.
 * reviewCount: set to your real Google count (or null to hide the number).
 *
 * This one file feeds the reviews box on the home page AND the star rating
 * that Google sees in the page data (lib/schema.ts and app/layout.tsx).
 * Newest reviews first. Quotes are the customers' own words.
 */
export const googleReviews: {
  profileUrl: string;
  rating: number;
  reviewCount: number | null;
  reviews: ReadonlyArray<{ name: string; quote: string }>;
} = {
  profileUrl: "https://share.google/dKrZsbcEILvSQeRVQ",
  rating: 5,
  reviewCount: 20,
  reviews: [
    {
      name: "Charlotte Knock",
      quote:
        "Absolutely amazing service from start to completion, Connor was so easy to contact throughout the process, answered all my (many) initial questions, and got me booked in promptly once I’d settled on what I wanted. Great value for money, loads of styles to choose from, incredibly professional job done in next to no time and assured me that any future issues would be sorted out straight away (can’t see there being any though as it’s been done so well) Looks and feels exactly like real wood and for a fraction of the price. Friendly and professional guys, HIGHLY recommend!",
    },
    {
      name: "Sue West",
      quote:
        "Conner did an amazing job wrapping our kitchen worktop, we were well chuffed, so we decided to have the kitchen tiles wrapped as well and we couldn’t be happier with the results we've got a brand new kitchen! He was professional, friendly, and paid great attention to detail throughout the whole process. Connor worked efficiently, kept everything tidy, and made sure the final result was perfect. I would highly recommend him to anyone looking for high quality work and great service.",
    },
    {
      name: "Toni Palmer",
      quote:
        "Professional service, nice and tidy. Great communication from start to finish. Love the kitchen, thanks so much!",
    },
    {
      name: "Chris James",
      quote:
        "Just had our kitchen wrapped. It took 3 days, very professional and they took away all mess with them.Very punctual very friendly and a great job, very pleased with the result and as long as you have good carcasses and doors this is a no brainer. Great price very happy with the result.",
    },
    {
      name: "Asad Alie",
      quote:
        "Highly recommend WRPX for all types of wrapping. Genuinely one of the best guys offering this service. Initially contacted Connor at WRPX with what we’re looking for and just from Connor’s response alone gave us a lot of confidence. Connor arranged an on site survey, understood exactly what we wanted and offered recommendations backed by years of experience and expertise. We also received samples and their quote all within a few days and it was very competitive. The guys arrived on time and completed the wrapping in our kitchen and bathrooms to a very high standard, attention to detail and kept everything clean and tidy throughout. Amazing value for money and high quality work from Connor and his team at WRPX. Completely transformed our kitchen and bathrooms. We couldn’t be happier with the service offered by WRPX and have already booked them in again for more wrapping.",
    },
    {
      name: "Matthew Godley",
      quote:
        "Top level professional work done to schedule and at a fair price. Will 100% be using again. Saved thousands in fitting a new kitchen.",
    },
    {
      name: "Mandy Hague",
      quote:
        "Transformed the look of our kitchen from green to cream. It's made the kitchen so much brighter. So happy with the end result. Good communication throughout. Thank you so much",
    },
    {
      name: "Amanda Cresswell",
      quote:
        "Stunning transformation of some tired looking wardrobes! Great communication, arrived when they said they would and worked hard to get it completed to an outstanding finish! Thanks so much it’s transformed the bedroom!",
    },
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
