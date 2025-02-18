import { type Navigation } from "@/types";

export const LANGUAGES = [
  { label: "English", code: "en" },
  { label: "Việt Nam", code: "vi" },
];

export const MENU_WITH = 400;

export const navItems: Navigation = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "menu",
    children: [
      {
        title: "food",
        children: [
          {
            title: "rice",
            path: "/rice",
          },
          {
            title: "noodle",
            path: "/noodle",
          },
        ],
      },
      {
        title: "drink",
        children: [
          {
            title: "pepsi",
            children: [
              { title: "pepsi zero", path: "pepsi-zero" },
              { title: "pepsi origin", path: "pepsi-origin" },
            ],
          },
          {
            title: "coca",
            path: "coca",
          },
        ],
      },
    ],
  },
];
