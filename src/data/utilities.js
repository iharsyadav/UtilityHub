import {
  Calculator,
  Cake,
  Percent,
  KeyRound,
  Palette,
  Hash,
  Eye,
  Plus,
} from "lucide-react";

export const utilities = [
  {
    id: 1,
    title: "BMI Calculator",
    description: "Calculate body mass index instantly.",
    icon: Calculator,
    path: "/utilities/bmi",
    category: "health",
  },

  {
    id: 2,
    title: "Age Calculator",
    description: "Calculate exact age in years, months and days.",
    icon: Cake,
    path: "/utilities/age",
    category: "date",
  },

  {
    id: 3,
    title: "Tip Calculator",
    description: "Split bills and calculate tips easily.",
    icon: Percent,
    path: "/utilities/tip",
    category: "finance",
  },

  {
    id: 4,
    title: "Password Generator",
    description: "Generate strong secure passwords.",
    icon: KeyRound,
    path: "/utilities/password",
    category: "security",
  },

  {
    id: 5,
    title: "Random Color Generator",
    description: "Generate beautiful random colors.",
    icon: Palette,
    path: "/utilities/random-color",
    category: "design",
  },

  {
    id: 6,
    title: "Random Number Generator",
    description: "Generate random numbers instantly.",
    icon: Hash,
    path: "/utilities/random-number",
    category: "generator",
  },

  {
    id: 7,
    title: "Show/Hide Password",
    description: "Toggle password visibility easily.",
    icon: Eye,
    path: "/utilities/show-password",
    category: "security",
  },

  {
    id: 8,
    title: "Counter App",
    description: "Animated counter utility app.",
    icon: Plus,
    path: "/utilities/counter",
    category: "tools",
  },
];