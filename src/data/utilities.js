import {
  Calculator,
  Cake,
  Percent,
  KeyRound,
  Palette,
  Hash,
  Eye,
  Plus,
  Layers,
} from "lucide-react";

export const utilities = [
  {
    id: 1,
    title: "Generator Playground",
    description: "Create and preview custom design generators.",
    icon: Layers,
    path: "/utilities/generator",
    category: "design",
  },
  {
    id: 2,
    title: "Shadow Playground",
    description: "Create and preview custom design generators.",
    icon: Layers,
    path: "/utilities/clay",
    category: "design",
  },
  {
    id: 3,
    title: "Glassmorphism Generator",
    description: "Generate custom glassmorphism CSS.",
    icon: Layers,
    path: "/utilities/glassmorphism",
    category: "design",
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

  {
    id: 9,
    title: "Tip Calculator",
    description: "Split bills and calculate tips easily.",
    icon: Percent,
    path: "/utilities/tip",
    category: "finance",
  },

  {
    id: 10,
    title: "BMI Calculator",
    description: "Calculate body mass index instantly.",
    icon: Calculator,
    path: "/utilities/bmi",
    category: "health",
  },
  {
    id: 11,
    title: "Age Calculator",
    description: "Calculate exact age in years, months and days.",
    icon: Cake,
    path: "/utilities/age",
    category: "date",
  },
];
