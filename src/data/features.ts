export type FeatureIconName =
  | "BrainCircuit"
  | "NotebookPen"
  | "Radio"
  | "Globe"
  | "TrendingUp"
  | "MapPinned";

export type FeatureAccent = "lavender" | "surface" | "sage";

export type FeatureInfographic =
  | "aiPrediction"
  | "expertPicks"
  | "liveScores"
  | "worldCup"
  | "rankings"
  | "venueIntel";

export type Feature = {
  icon: FeatureIconName;
  category: string;
  title: string;
  description: string;
  highlights: string[];
  infographic: FeatureInfographic;
  accentColor: FeatureAccent;
};

export const features: Feature[] = [
  {
    icon: "BrainCircuit",
    category: "AI model",
    title: "AI Match Predictions",
    description:
      "7-factor cricket and 6-factor football models with win %, probability bars, and confidence signals.",
    highlights: ["73%+ AI accuracy", "Confidence badges", "Factor analysis"],
    infographic: "aiPrediction",
    accentColor: "lavender",
  },
  {
    icon: "NotebookPen",
    category: "Analyst desk",
    title: "Expert Analyst Picks",
    description:
      "Written predictions from PredictX analysts appear beside AI picks and update before match time.",
    highlights: ["Human context", "Pre-match notes", "Model comparison"],
    infographic: "expertPicks",
    accentColor: "surface",
  },
  {
    icon: "Radio",
    category: "Live signal",
    title: "Live Scores",
    description:
      "Real-time scorecards with batting, bowling, overs, and partnerships as the match unfolds.",
    highlights: ["Live updates", "Scorecards", "Momentum shifts"],
    infographic: "liveScores",
    accentColor: "sage",
  },
  {
    icon: "Globe",
    category: "Tournament hub",
    title: "World Cup 2026 Hub",
    description:
      "All 48 teams, 12 groups, and 104 matches with standings and knockout projections in one place.",
    highlights: ["Group tables", "Fixture hub", "Knockout paths"],
    infographic: "worldCup",
    accentColor: "surface",
  },
  {
    icon: "TrendingUp",
    category: "Rankings",
    title: "ICC Rankings",
    description:
      "T20I, ODI, and Test rankings for teams and players with ratings, points, and trend movement.",
    highlights: ["Team ratings", "Player ranks", "Trend arrows"],
    infographic: "rankings",
    accentColor: "sage",
  },
  {
    icon: "MapPinned",
    category: "Venue intelligence",
    title: "Player & Venue Intel",
    description:
      "Career stats, venue scoring history, toss impact, and chase win rates for every matchup.",
    highlights: ["Venue history", "Player form", "Chase patterns"],
    infographic: "venueIntel",
    accentColor: "lavender",
  },
];
