import { site } from "../../site.config.mjs";
export type Lang = "en" | "zh";
export const two = (en: string, zh: string) => ({ en, zh });
export const routes = (lang: Lang, slug = "") =>
  site.base + (lang === "zh" ? "zh/" : "") + (slug ? slug + "/" : "");
const published = two("Product information public", "已公开产品资料");
const released = two("Released", "已发布");
const app = two("App source undisclosed", "应用源码未公开");
const ios = two("iPhone & iPad", "iPhone 与 iPad");
export const projects = [
  {
    id: "health2you",
    name: "Health2You",
    section: "products",
    art: "health",
    status: released,
    code: two("Production app source private", "正式应用源码未公开"),
    platform: two("iPhone & Apple Watch", "iPhone 与 Apple Watch"),
    category: two("Daily rhythms", "日常节律"),
    description: two(
      "Read your sleep and daily rhythms from Apple Health, on your own device.",
      "在自己的设备上，借助 Apple 健康数据了解睡眠与日常节律。",
    ),
    details: two(
      "Health2You brings sleep timing, daylight, activity and recovery context into a daily rhythm summary. Look back over seven or thirty days, or follow a gentle ten-day rhythm plan. A companion Watch app puts recent context on your wrist.",
      "Health2You 汇集睡眠时间、日照、活动与恢复线索，呈现每日节律摘要。可回看七天或三十天的变化，或跟随十天节律计划。配套手表应用让你抬腕查看近期情况。",
    ),
    limits: two(
      "Version 1.3.1 is listed on the US App Store. Apple Health data is processed on your devices. The public engineering repository provides legal and support resources.",
      "美国 App Store 已上架 1.3.1 版。Apple 健康数据在设备上处理，公开工程仓库提供法律及支持资料。",
    ),
    repo: "Project_Health2You",
    publicSite: "https://ka1y0.github.io/Project_Health2You/",
    store: "https://apps.apple.com/us/app/health2you/id6786253596",
  },
  {
    id: "rill",
    name: "Rill",
    section: "products",
    art: "rill",
    status: released,
    code: app,
    platform: ios,
    category: two("Conversation", "对话"),
    description: two(
      "A quieter place to talk with your own AI models.",
      "在安静的界面里，与你选择的 AI 模型交谈。",
    ),
    details: two(
      "Rill brings text, images and multiple models into private conversation groups. Branch from an earlier prompt to try a different direction while keeping the original conversation intact.",
      "Rill 将文字、图片和多个模型放进私密会话组。你可以从较早的提示开启另一条对话分支，同时保留原有思路。",
    ),
    limits: two(
      "Keys and history stay on your device. A fixed local demo works offline. Live conversations use a provider you configure, which may charge separately. Rill — AI Chat version 1.1.1 is available on the US App Store.",
      "密钥与历史记录保存在设备上。固定示例可以离线体验，真实对话使用你配置的服务商，可能单独收费。Rill — AI Chat 1.1.1 版已在美国 App Store 上架。",
    ),
    repo: "Project_Rill",
    store: "https://apps.apple.com/us/app/rill-ai-chat/id6819230842",
    publicSite: "https://ka1y0.github.io/Project_Rill/",
  },
  {
    id: "etta",
    name: "Etta",
    section: "products",
    art: "etta",
    status: published,
    code: app,
    platform: ios,
    category: two("Translation", "翻译"),
    description: two(
      "A translation app for iPhone and iPad.",
      "为 iPhone 与 iPad 制作的翻译应用。",
    ),
    details: two(
      "Etta is the studio’s translation project for iPhone and iPad. Its public product record identifies the app and its supported device families.",
      "Etta 是工作室面向 iPhone 与 iPad 的翻译项目。公开产品资料说明了应用的定位与设备范围。",
    ),
    limits: two(
      "The available materials are the bilingual product introduction and the source for that information site. Distribution details have yet to be announced there.",
      "目前可查阅双语产品介绍及该信息网站的源码。公开资料尚未说明应用分发方式。",
    ),
    repo: "Project_Etta",
    publicSite: "https://ka1y0.github.io/Project_Etta/",
  },
  {
    id: "lume",
    name: "Lume",
    section: "products",
    art: "lume",
    status: published,
    code: app,
    platform: two("Platform unannounced", "平台尚未公布"),
    category: two("Photography", "摄影"),
    description: two(
      "A camera project from Chips Studio.",
      "Chips Studio 的相机项目。",
    ),
    details: two(
      "Lume is the studio’s camera project. Its public information page introduces the project in English and Simplified Chinese.",
      "Lume 是工作室的相机项目，公开资料页提供英文与简体中文的项目介绍。",
    ),
    limits: two(
      "The studio has published an information site. Platform specifications and a downloadable build have yet to be announced there.",
      "工作室已经公开项目信息网站；其中尚未公布平台规格与可下载版本。",
    ),
    repo: "Project_Lume",
    publicSite: "https://ka1y0.github.io/Project_Lume/",
  },
  {
    id: "project-diary",
    name: "Project Diary",
    section: "lab",
    art: "diary",
    status: two("Prototype · alpha", "原型 · Alpha"),
    code: two("Open source · MIT", "开源 · MIT"),
    platform: two("iPad & Apple Pencil", "iPad 与 Apple Pencil"),
    category: two("Handwriting", "手写交互"),
    description: two(
      "What if a notebook could write back in the margins?",
      "如果手写本能在页边回应你呢？",
    ),
    details: two(
      "A full-screen writing surface pairs PencilKit handwriting with gesture controls, procedural paper and animated replies. Opening a page puts the pen first. The experiment asks how an AI response can sit beside a handwritten thought.",
      "全屏书写页面结合 PencilKit 笔迹、手势、程序生成的纸张质感与动态回复。打开页面便能落笔。这项实验关注 AI 如何在手写思绪旁留下回应。",
    ),
    limits: two(
      "The v0.1.0-alpha release includes an iPad demonstration. The offline mock chooses synthetic prompts. Optional providers support live responses. This early prototype is unsuitable for irreplaceable records.",
      "v0.1.0-alpha 预发布提供 iPad 演示。离线模拟模式选取合成提示，也可选配模型服务来获得真实回应。此早期原型不适合保存不可替代的记录。",
    ),
    repo: "Project_Diary",
    publicSite: "",
  },
];
export function links(p: (typeof projects)[number], l: Lang) {
  const lang = l === "zh" ? "zh-Hans/" : "";
  const link = (en: string, zh: string, url: string) => ({
    label: two(en, zh)[l],
    url,
  });
  return [
    ...(p.store
      ? [link("View on the App Store", "前往 App Store", p.store)]
      : []),
    ...(p.id === "health2you"
      ? [
          link("Privacy", "隐私政策", p.publicSite + "privacy.html"),
          link("Support", "支持", p.publicSite + "support.html"),
        ]
      : []),
    ...(p.publicSite
      ? [
          link(
            "Product website",
            "产品官网",
            p.publicSite + (p.id === "health2you" ? "" : lang),
          ),
        ]
      : []),
    ...(p.id === "rill"
      ? [
          ["Privacy", "隐私政策", "privacy"],
          ["Support", "支持", "support"],
          ["Terms", "条款", "terms"],
          ["AI services", "AI 服务", "ai-services"],
        ].map(([a, b, c]) => link(a, b, p.publicSite + lang + c + ".html"))
      : []),
    ...(p.id === "project-diary"
      ? [
          link(
            "Alpha release & demo",
            "Alpha 预发布与演示",
            "https://github.com/Ka1y0/Project_Diary/releases/tag/v0.1.0-alpha",
          ),
        ]
      : []),
    link("Public repository", "公开仓库", "https://github.com/Ka1y0/" + p.repo),
  ];
}
export const slugs = [
  "",
  "products",
  "lab",
  "about",
  ...projects.map((p) => p.section + "/" + p.id),
];
export const index = projects.map((p) => ({
  ...p,
  verified: site.verified,
  canonical: site.origin + routes("en", p.section + "/" + p.id),
  resources: links(p, "en"),
}));
