import type { Category, Tool } from "./directory-head";
import { curator, categories } from "./directory-head";
import { tools0 } from "./directory-tools0";
import { tools1 } from "./directory-tools1";
import { tools2 } from "./directory-tools2";
import { tools3 } from "./directory-tools3";
import { tools4 } from "./directory-tools4";
import { tools5 } from "./directory-tools5";
import { tools6 } from "./directory-tools6";
import { tools7 } from "./directory-tools7";
import { tools8 } from "./directory-tools8";
export type { Review, Tool, Category } from "./directory-head";
export { curator, categories };

export const tools: Tool[] = [...tools0, ...tools1, ...tools2, ...tools3, ...tools4, ...tools5, ...tools6, ...tools7, ...tools8];

const categoryBySlug = new Map(categories.map((category) => [category.slug, category]));
const toolBySlug = new Map(tools.map((tool) => [tool.slug, tool]));

export function getCategory(slug: string) {
  return categoryBySlug.get(slug);
}

export function getTool(slug: string) {
  return toolBySlug.get(slug);
}

export function toolsInCategory(slug: string) {
  return tools.filter((tool) => tool.categories.includes(slug));
}

export function toolCount(slug: string) {
  return toolsInCategory(slug).length;
}

export function featuredCategories() {
  return categories.filter((category) => category.featured);
}

export function reviewedTools() {
  return tools
    .filter((tool) => tool.review)
    .sort((a, b) => (a.review!.checkedOn < b.review!.checkedOn ? 1 : -1));
}

export function popularTools() {
  const order = [
    "hubspot",
    "salesforce",
    "slack",
    "notion",
    "github",
    "zendesk",
    "asana",
    "stripe",
  ];
  return order.map((slug) => getTool(slug)!);
}

export function searchTools(query: string) {
  const needle = query.trim().toLowerCase();
  if (!needle) return [];
  return tools.filter((tool) => {
    const categoryNames = tool.categories
      .map((slug) => getCategory(slug)?.name ?? "")
      .join(" ");
    return `${tool.name} ${tool.summary} ${categoryNames}`
      .toLowerCase()
      .includes(needle);
  });
}

export function formatChecked(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

export function categoryNames(slugs: string[]) {
  return slugs
    .map((slug) => getCategory(slug))
    .filter((category): category is Category => Boolean(category));
}
