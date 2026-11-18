/**
 * Funngro Site Content & Data Registry
 *
 * Centralizes all external URLs, navigation items, partner brands,
 * earner stories, company milestones, SheLancer benefits, FAQs, and
 * footer links so updates stay consistent across the entire site.
 */

import sarthakImg from "../assets/funngro/sarthak-JEn2W_Kg.jpg";
import anshikaImg from "../assets/funngro/anshika-pAAPWHhq.jpg";
import ashwaniImg from "../assets/funngro/ashwani-SiRn6cf8.jpg";
import sayyamImg from "../assets/funngro/sayyam-mehta-AeEdVr_7.jpg";
import yashrajImg from "../assets/funngro/yashraj-singh-B3L6hm7T.jpg";
import ankushImg from "../assets/funngro/ankush-borana-etwVzPar.jpg";
import sayandeepImg from "../assets/funngro/sayandeep-CCDeXwxb.jpg";
import ujjwalImg from "../assets/funngro/ujjwal-dubey-CJkNhre1.jpg";
import swarnimImg from "../assets/funngro/swarnim-prateek-DTj-8Wo4.jpg";
import naitikImg from "../assets/funngro/naitik-mishra-CG3pxFIL.jpg";

/* --------------------------------------------------------------------------
   App Store & Placeholder Platform Links
   (App Store & Play Store stay active; funngro.com redirects are intentionally
    left as blank `#` placeholders so this revamp never redirects away.)
   -------------------------------------------------------------------------- */
export const appStoreUrl =
  "https://play.google.com/store/apps/details?id=com.wishbanc.funngro";
export const appleStoreUrl =
  "https://apps.apple.com/in/app/funngro/id1579361075";
export const shelancerUrl = "#";
export const partnerUrl = "#";
export const contactSalesUrl = "#";
export const storiesUrl = "#";
export const aboutUrl = "#";

/* --------------------------------------------------------------------------
   Top Navigation Links
   Home and Earn carry a `*` marker to highlight the two full interactive pages.
   -------------------------------------------------------------------------- */
export const navLinks = [
  { label: "Home", href: "/", starred: true },
  { label: "Earn", href: "/earn", starred: true },
  { label: "SheLancer", href: "/#shelancers" },
  { label: "Stories", href: "/#stories" },
  { label: "For Businesses", href: "/#businesses" },
  { label: "About Us", href: "/#about" },
];

/* --------------------------------------------------------------------------
   Partner Brands (Displayed in the Auto-Scrolling BrandsStrip Marquee)
   -------------------------------------------------------------------------- */
export const brandLogos = [
  { name: "Lifelong", category: "D2C", mark: "LL", bg: "#edf1f5", color: "#334155" },
  { name: "ICICI", category: "Banking", mark: "I", bg: "#f9e5e8", color: "#a32235" },
  { name: "Kotak", category: "Banking", mark: "K", bg: "#e8edf8", color: "#1c3f94" },
  { name: "Paytm", category: "Payments", mark: "P", bg: "#e3f2fa", color: "#0a6c9e" },
  { name: "CarDekho", category: "Mobility", mark: "CD", bg: "#fff0dc", color: "#a84f06" },
  { name: "LXME", category: "Fintech", mark: "L", bg: "#f2e9ff", color: "#6a25c9" },
  { name: "Nielsen", category: "Research", mark: "N", bg: "#e7efff", color: "#1d4ed8" },
  { name: "Toluna", category: "Research", mark: "T", bg: "#e4f8ef", color: "#047857" },
  { name: "Mpokket", category: "Fintech", mark: "M", bg: "#ffeae3", color: "#bf3f14" },
  { name: "Novio", category: "D2C", mark: "N", bg: "#eaf6de", color: "#41690f" },
];

/* --------------------------------------------------------------------------
   Verified Earner Stories (Displayed in the Stories Horizontal Carousel)
   -------------------------------------------------------------------------- */
export const stories = [
  {
    name: "Sarthak",
    age: 16,
    city: "Delhi",
    tier: "Full-Time Intern",
    quote:
      "100 rejection emails. Never quit. Now I work with the founders on Funngro's product.",
    earned: "₹3,90,000+",
    suffix: "total earned",
    portrait: sarthakImg,
    alt: "Sarthak, Full-Time Intern at Funngro from Delhi",
  },
  {
    name: "Anshika",
    city: "Haryana",
    tier: "Clan Director",
    quote:
      "Thought earning apps were fake. First instant withdrawal changed everything.",
    earned: "₹2,25,000+",
    suffix: "total earned",
    portrait: anshikaImg,
    alt: "Anshika, Clan Director at Funngro from Haryana",
  },
  {
    name: "Ashwani",
    city: "Delhi",
    tier: "Intern",
    quote:
      "Thought it was fake — turned out the mistake was mine. Now I've earned ₹66K+.",
    earned: "₹66,000+",
    suffix: "total earned",
    portrait: ashwaniImg,
    alt: "Ashwani, Intern at Funngro from Delhi",
  },
  {
    name: "Sayyam Mehta",
    city: "Surat",
    tier: "Clan Director",
    quote:
      "Joined unsure. First live meeting changed my path. Now I lead Clan Leaders.",
    earned: "₹63,000+",
    suffix: "total earned",
    portrait: sayyamImg,
    alt: "Sayyam Mehta, Clan Director at Funngro from Surat",
  },
  {
    name: "Yash Raj Singh",
    city: "West Bengal",
    tier: "Clan Leader · Intern",
    quote:
      "Bought a smartphone with my own money. Even gifted one to my mom.",
    earned: "₹60,000+",
    suffix: "total earned",
    portrait: yashrajImg,
    alt: "Yash Raj Singh, Clan Leader and Intern from West Bengal",
  },
  {
    name: "Ankush Borana",
    city: "Karnataka",
    tier: "Clan Leader",
    quote:
      "Discovered Funngro on Shark Tank India. Beginner to leader in a year.",
    earned: "₹20,000+",
    suffix: "· 160+ projects",
    portrait: ankushImg,
    alt: "Ankush Borana, Clan Leader from Karnataka",
  },
  {
    name: "Sayandeep",
    city: "West Bengal",
    tier: "Clan Leader · Expert Team",
    quote:
      "Started as a New Year resolution. Now I guide new users every day.",
    earned: "₹12,000+",
    suffix: "· 165+ projects",
    portrait: sayandeepImg,
    alt: "Sayandeep, Clan Leader from West Bengal",
  },
  {
    name: "Ujjwal Dubey",
    city: "Delhi",
    tier: "Clan Leader · Intern",
    quote:
      "From Class 12 curiosity to managing two clans with 600+ members.",
    earned: "80+",
    suffix: "projects in 2 months",
    portrait: ujjwalImg,
    alt: "Ujjwal Dubey, Clan Leader and Intern from Delhi",
  },
  {
    name: "Swarnim Prateek",
    city: "Faridabad",
    tier: "Clan Leader",
    quote:
      "Didn't know anything. Now I manage my own college expenses.",
    earned: "170+",
    suffix: "projects completed",
    portrait: swarnimImg,
    alt: "Swarnim Prateek, Clan Leader from Faridabad",
  },
  {
    name: "Naitik Mishra",
    age: 16,
    city: "Prayagraj",
    tier: "Clan Leader",
    quote: "Took initiative. Got promoted. Growing step by step.",
    earned: "Leads 30+",
    suffix: "clan earners",
    portrait: naitikImg,
    alt: "Naitik Mishra, Clan Leader from Prayagraj",
  },
];

/* --------------------------------------------------------------------------
   Company Journey Timeline & Snapshot Facts (Journey Section)
   -------------------------------------------------------------------------- */
export const journeyMilestones = [
  {
    when: "FY22",
    title: "Founded.",
    body: "Two founders. An MVP users doubled in 30 days.",
    icon: "rocket",
  },
  {
    when: "DEC 2022",
    title: "Shark Tank India · Season 2.",
    body: "National broadcast. Investment offer from Amit Jain.",
    icon: "tv",
  },
  {
    when: "2023",
    title: "One million users.",
    body: "Pure referral growth and zero ad spend.",
    icon: "users",
  },
  {
    when: "Q4 FY25",
    title: "First profitable quarter.",
    body: "3M users. Ranked #9 education app on Google Play.",
    icon: "trend",
  },
  {
    when: "FY26",
    title: "Scale with profit.",
    body: "70 Lakh+ young Indians earning. 5,000+ brands. 10 of 12 months profitable.",
    icon: "crown",
  },
];

export const journeyFacts = [
  { label: "Founded", value: "FY22 · Mumbai" },
  { label: "Backed on", value: "Shark Tank India S2" },
  { label: "FY26", value: "10 of 12 months profitable" },
];

/* --------------------------------------------------------------------------
   SheLancer Community Benefits
   -------------------------------------------------------------------------- */
export const sheLancerBenefits = [
  {
    icon: "shield",
    title: "Safe & verified",
    copy: "Every project is checked before it goes live.",
  },
  {
    icon: "trend",
    title: "Grow at your pace",
    copy: "Start small, build skills and unlock bigger briefs.",
  },
  {
    icon: "users",
    title: "A community of women",
    copy: "Women-only clans, campaigns and moderators.",
  },
  {
    icon: "bolt",
    title: "Hours that fit you",
    copy: "No fixed schedules and no minimum hours.",
  },
];

/* --------------------------------------------------------------------------
   Frequently Asked Questions
   -------------------------------------------------------------------------- */
export const faqs = [
  {
    question: "Is Funngro free to join?",
    answer:
      "Yes. You never pay to sign up, apply for a task or withdraw approved earnings. Funngro is free for young earners.",
  },
  {
    question: "Who can earn on Funngro?",
    answer:
      "Funngro is built for young people aged 14 to 25. Some individual campaigns may have their own age or eligibility requirements.",
  },
  {
    question: "How do I get paid?",
    answer:
      "Once a brand approves your work, withdraw your earnings to your UPI ID or bank account. Payouts usually arrive within 24 hours.",
  },
  {
    question: "How much can I earn?",
    answer:
      "It depends on the tasks you choose and how often you complete them. Earnings vary by campaign and are not guaranteed.",
  },
  {
    question: "Can my business run a campaign?",
    answer:
      "Yes. Partner with Funngro to run campaigns, content, referral, sampling or survey tasks with a verified community of young earners. You pay for approved work.",
  },
  {
    question: "Is Funngro safe for young people?",
    answer:
      "Funngro verifies brands before they post, reviews submissions and reports, and never charges a joining fee. Parents can review the platform before a young earner signs up.",
  },
];

/* --------------------------------------------------------------------------
   Footer Navigation Columns & Social Profiles
   -------------------------------------------------------------------------- */
export const footerColumns = [
  {
    title: "Earn",
    links: [
      { label: "Earn with Funngro", href: "/earn" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "SheLancers", href: "/#shelancers" },
      { label: "Inside the app", href: "/#app" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our story", href: "/#about" },
      { label: "Earner stories", href: "/#stories" },
      { label: "For brands", href: "/#businesses" },
      { label: "About Funngro", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQs", href: "/#faq" },
      { label: "Trust & safety", href: "#" },
      { label: "Contact", href: "mailto:hello@funngro.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "#" },
      { label: "Terms & conditions", href: "#" },
    ],
  },
];

export const socialLinks = [
  { label: "Funngro on Instagram", href: "https://www.instagram.com/fun.n.gro", icon: "instagram" },
  { label: "Funngro on LinkedIn", href: "https://www.linkedin.com/company/funngro/", icon: "linkedin" },
  { label: "Funngro on YouTube", href: "https://www.youtube.com/@funngro_India", icon: "youtube" },
  { label: "Funngro on X", href: "https://x.com/funngroofficial", icon: "x" },
  { label: "Funngro on Facebook", href: "https://www.facebook.com/funngro/", icon: "facebook" },
];
