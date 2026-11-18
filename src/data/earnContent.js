/**
 * Funngro /earn Page Content Registry
 *
 * Concise, high-signal copy distilled from funngro.com/earn for clean
 * scannability across every modular section on the /earn route.
 */

/* --------------------------------------------------------------------------
   Work Categories & Payout Bands
   -------------------------------------------------------------------------- */
export const earnCategories = [
  {
    id: "brand-promotion",
    filter: "Promotion",
    title: "Brand Promotion",
    payout: "₹200 – ₹1,500",
    time: "15–30 mins",
    level: "Beginner",
    brands: ["ICICI", "Kotak", "Paytm"],
    description: "Try apps and share verified brand launches across your circle.",
    icon: "megaphone",
  },
  {
    id: "influencer-briefs",
    filter: "Content",
    title: "Creator Briefs",
    payout: "₹500 – ₹3,000",
    time: "30–60 mins",
    level: "Creators",
    brands: ["Lifelong", "CarDekho", "Novio"],
    description: "Shoot short reels, reviews, and posts for real D2C brands.",
    icon: "video",
  },
  {
    id: "referrals",
    filter: "Referrals",
    title: "Referrals",
    payout: "₹300 – ₹2,000",
    time: "10–20 mins",
    level: "High pay",
    brands: ["LXME", "Mpokket", "Paytm"],
    description: "Invite friends to trusted apps and earn on every verified step.",
    icon: "users",
  },
  {
    id: "sampling-surveys",
    filter: "Surveys",
    title: "Surveys & Sampling",
    payout: "₹100 – ₹800",
    time: "5–15 mins",
    level: "Quick start",
    brands: ["Toluna", "Nielsen", "Lifelong"],
    description: "Share quick youth opinions and test products in minutes.",
    icon: "shield",
  },
];

/* --------------------------------------------------------------------------
   Five Simple Steps (Connected Timeline)
   -------------------------------------------------------------------------- */
export const earnFiveSteps = [
  {
    number: "01",
    kicker: "Sign up",
    title: "Download the app.",
    body: "Sign up with OTP on Play Store or App Store in under two minutes — zero investment.",
    chips: ["Phone or laptop", "UPI ID", "2-min OTP setup"],
  },
  {
    number: "02",
    kicker: "Choose work",
    title: "Pick a brand campaign.",
    body: "Browse 5,000+ live briefs across promotions, reels, referrals, surveys, and sampling.",
    chips: [
      "Promotion ₹200–₹1.5K",
      "Referrals ₹300–₹2K",
      "Reels ₹500–₹3K",
      "Sampling ₹100–₹800",
    ],
  },
  {
    number: "03",
    kicker: "Submit proof",
    title: "Complete & upload proof.",
    body: "Follow the clear brief, submit a photo, screenshot, or link, and get brand-verified.",
    chips: ["Clear brief", "Quick proof upload", "Auto-payout on approval"],
  },
  {
    number: "04",
    kicker: "Get paid",
    title: "Instant UPI payout.",
    body: "Withdraw approved GroMoney directly to Google Pay, PhonePe, Paytm, or your bank.",
    chips: ["First payout in 24h", "Repeat payouts in seconds", "₹0 withdrawal fee"],
  },
  {
    number: "05",
    kicker: "Level up",
    title: "Build influence. Earn bigger.",
    body: "Climb tiers to unlock higher multipliers, lead student Clans, and land internships.",
    chips: ["Starter → Grower → Builder", "Up to 2× multipliers", "Clan Leader roles"],
  },
];

/* --------------------------------------------------------------------------
   Income & Influence Ladder (3 Connected Stages)
   -------------------------------------------------------------------------- */
export const earnStages = [
  {
    id: "starter",
    stage: "Stage 01 · Start",
    roleLabel: "Starter earner",
    title: "Your First Income",
    range: "₹1K–₹3K/mo",
    basePerHour: 110,
    popular: false,
    body: "Complete simple tasks from home and get your first verified UPI payout in 24 hours.",
    perks: ["Daily micro-tasks & surveys", "First payout in 24h", "No experience needed"],
  },
  {
    id: "grower",
    stage: "Stage 02 · Grow",
    roleLabel: "Grower & creator",
    title: "Multiply & Influence",
    range: "₹3K–₹7K/mo",
    basePerHour: 240,
    popular: true,
    body: "Refer friends, create brand content, and unlock 1.5× reward multipliers every week.",
    perks: ["1.5× reward multipliers", "Paid creator briefs", "Priority brand reviews"],
  },
  {
    id: "builder",
    stage: "Stage 03 · Build",
    roleLabel: "Builder & Clan Leader",
    title: "Start Your Own Business",
    range: "₹7K–₹15K+/mo",
    basePerHour: 480,
    popular: false,
    body: "Lead a student Clan, run brand campaigns, and turn spare hours into real leadership.",
    perks: ["Lead 30–600+ member Clans", "2× payout multipliers", "Direct brand internships"],
  },
];

/* --------------------------------------------------------------------------
   7-Step Connected Growth Pathway
   -------------------------------------------------------------------------- */
export const earnProgressionSteps = [
  {
    step: "01",
    tag: "Discover",
    text: "Explore 5,000+ brands and pick tasks that fit your skills.",
  },
  {
    step: "02",
    tag: "First Payout",
    text: "Complete quick surveys and receive your first UPI transfer.",
  },
  {
    step: "03",
    tag: "Grow Network",
    text: "Refer friends to trusted apps and earn recurring bonuses.",
  },
  {
    step: "04",
    tag: "Create Content",
    text: "Produce reels and posts for leading brands from home.",
  },
  {
    step: "05",
    tag: "Unlock Tiers",
    text: "Raise your GroScore to unlock premium high-pay briefs.",
  },
  {
    step: "06",
    tag: "Drive Sales",
    text: "Earn commissions supporting campus launches & brand sales.",
  },
  {
    step: "07",
    tag: "Lead a Clan",
    text: "Manage your own earner squad and run a micro-business.",
  },
];

/* --------------------------------------------------------------------------
   /earn Specific FAQs (Concise Answers)
   -------------------------------------------------------------------------- */
export const earnFaqs = [
  {
    question: "Is Funngro a free online earning app?",
    answer:
      "Yes — 100% free with zero registration, joining, or withdrawal fees. Complete verified brand tasks and cash out directly via UPI.",
  },
  {
    question: "What kind of part-time work is available?",
    answer:
      "Choose from brand promotions, referrals, product sampling, surveys, influencer reels, and content creation tailored for students and young adults.",
  },
  {
    question: "Can I earn without any investment?",
    answer:
      "Yes. You never pay anything to sign up or apply. Just complete approved brand briefs and withdraw your earnings.",
  },
  {
    question: "How fast do UPI payouts arrive?",
    answer:
      "First-time payouts arrive within 24 hours of brand verification, and repeat UPI withdrawals typically process in seconds.",
  },
];
