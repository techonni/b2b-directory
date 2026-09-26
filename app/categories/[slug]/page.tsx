import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ToolRow } from "@/components/tool-row";
import { categories, getCategory, toolsInCategory } from "@/lib/directory";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Category" };
  return { title: category.name, description: category.description };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const listed = toolsInCategory(slug);

  return (
    <>
      <h1 className="text-[22px] font-semibold leading-7 text-[#171717]">{category.name}</h1>
      <p className="mt-4 max-w-[560px] text-[15px] leading-6 text-[#737373]">
        {category.description}
      </p>
      <div className="mt-20 space-y-6">
        {listed.map((tool) => (
          <ToolRow key={tool.slug} tool={tool} />
        ))}
      </div>
      <Link
        href="/categories"
        className="mt-8 block text-[15px] font-medium leading-5 text-[#171717] hover:underline"
      >
        See all categories →
      </Link>
    </>
  );
}
