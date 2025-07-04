import type { Member } from "@/types/member";

export const members: Member[] = [
  {
    name: "nxyy",
    link: "https://nxyy.lol/",
    github: "nxyystore",
    discord_id: "1294487023272595511",
    projects: [
      {
        name: "Protecction",
        description: "A free discord oauth verification bot with extra features.",
        url: "https://0a2.site",
        type: "website" as const,
      },
      {
        name: "honest",
        description: "A multipurpose bot that provides a wide range of features.",
        url: "https://honest.rocks",
        icon: "https://api.honest.rocks/avatar",
        type: "website" as const,
      },
      {
        name: "Hyper Boosts",
        description: "A cheap-ish server boosting service.",
        url: "https://hyperboosts.cc",
        icon: "https://hyperboosts.cc/_next/image?url=%2Flogo.png&w=48&q=75",
        type: "website" as const,
      },
    ],
  },
  {
    name: "pk",
    link: "https://fakecrime.bio/pkrhs",
    discord_id: "657766336709132328",
    projects: [
      {
        name: "Snowify",
        description: "A freemium member farm service.",
        url: "https://discord.gg/joinify",
        type: "website" as const,
      },
    ]
  },
    {
    name: "cam",
    link: "https://fakecrime.bio/camikaze",
    discord_id: "1080114266767634533",
    projects: [
      {
        name: "Quack Boosts",
        description: "A cheap-ish server boosting service.",
        url: "https://discord.gg/quackboosts",
        type: "website" as const,
      },
    ]
  },
  {
    name: "cache",
    link: "https://guns.lol/pb",
    github: "x2dh",
    discord_id: "1243274323402293259",
    projects: [
      {
        name: "Cure/Exhale",
        description: "A free multipurpose bot with various features.",
        url: "https://dsc.gg/curebot",
        type: "website" as const,
      }
    ]
  }
 
].sort((a, b) => {
  const topOrder = ["nxyy", "pk", "cam"];
  if (topOrder.includes(a.name) && topOrder.includes(b.name)) return topOrder.indexOf(a.name) - topOrder.indexOf(b.name);
  if (topOrder.includes(a.name)) return -1;
  if (topOrder.includes(b.name)) return 1;
  return (b.projects?.length || 0) - (a.projects?.length || 0);
});
