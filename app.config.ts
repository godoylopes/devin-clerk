export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "flsfl",
  description: "s,f,sf",
  emoji: "🧩",
  accent: "#0d9488",
  upcomingFeatures: [
    {
      title: "Personal profile",
      description: "Set a display name and a short bio for your account.",
    },
    {
      title: "Quick notes",
      description: "Create and save short notes from your dashboard.",
    },
    {
      title: "Note tags",
      description: "Tag your notes and filter the list by tag.",
    },
    {
      title: "Share by link",
      description: "Generate a public read-only link to any note.",
    },
    {
      title: "Weekly digest",
      description: "Get a weekly email summarizing your activity.",
    },
  ] satisfies Feature[],
};

export const clerkAppearance = {
  variables: { colorPrimary: appConfig.accent },
};
