import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BrandIcon } from "@/components/brand-icon";
import { ToolRow } from "@/components/tool-row";
import {
  categoryNames,
  formatChecked,
  getTool,
  tools,
} from "@/lib/directory";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return { title: "Tool" };
  return { title: tool.name, description: tool.summary };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const categories = categoryNames(tool.categories);
  const review = tool.review;
  const alternatives = (review?.alternatives ?? [])
    .map((alternative) => getTool(alternative))
    .filter((alternative) => alternative !== undefined);

  const sections = review
    ? [
        ["What it does", review.whatItDoes],
        ["Who it's for", review.whoItsFor],
        ["Strengths", review.strengths],
        ["Weaknesses", review.weaknesses],
        ["Verdict", review.verdict],
      ]
    : [];

  return (
    <>
      <BrandIcon slug={tool.slug} name={tool.name} />
      <h1 className="mt-6 text-[22px] font-semibold leading-7 text-[#171717]">{tool.name}</h1>
      <p className="mt-3 text-[15px] leading-6 text-[#737373]">{tool.summary}</p>

      <h2 className="mt-16 text-[13px] leading-5 text-[#737373]">Details</h2>
      <p className="mt-6 text-[15px] font-semibold leading-6 text-[#171717]">
        Categories:{" "}
        {categories.map((category, index) => (
          <span key={category.slug}>
            {index > 0 ? ", " : null}
            <Link href={`/categories/${category.slug}`} className="hover:underline">
              {category.name}
            </Link>
          </span>
        ))}
      </p>
      {review ? (
        <>
          <p className="mt-4 text-[15px] leading-6 text-[#737373]">{review.pricing}</p>
          <p className="mt-4 text-[14px] leading-5 text-[#737373]">
            Checked on {formatChecked(review.checkedOn)}.
          </p>
        </>
      ) : (
        <p className="mt-4 text-[15px] leading-6 text-[#737373]">
          This tool is listed in the directory. A full note has not been added yet.
        </p>
      )}
      <div className="mt-6 flex flex-col gap-3">
        {tool.pricingUrl ? (
          <a
            href={tool.pricingUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[15px] font-medium leading-5 text-[#171717] hover:underline"
          >
            Pricing page →
          </a>
        ) : null}
        <a
          href={tool.website}
          target="_blank"
          rel="noreferrer"
          className="text-[15px] font-medium leading-5 text-[#171717] hover:underline"
        >
          Official site →
        </a>
      </div>

      {sections.map(([label, copy]) => (
        <section key={label} className="mt-12">
          <h2 className="text-[13px] leading-5 text-[#737373]">{label}</h2>
          <p className="mt-4 text-[15px] leading-6 text-[#737373]">{copy}</p>
        </section>
      ))}

      {alternatives.length > 0 ? (
        <section className="mt-12">
          <h2 className="text-[13px] leading-5 text-[#737373]">Alternatives</h2>
          <div className="mt-6 space-y-6">
            {alternatives.map((alternative) => (
              <ToolRow key={alternative.slug} tool={alternative} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
