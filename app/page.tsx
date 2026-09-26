import Link from "next/link";
import { SearchForm } from "@/components/search-form";
import { SubscribeForm } from "@/components/subscribe-form";
import { ToolRow } from "@/components/tool-row";
import { avatarSrc } from "@/lib/avatar";
import {
  curator,
  featuredCategories,
  popularTools,
  reviewedTools,
  toolCount,
} from "@/lib/directory";

export default function HomePage() {
  const latest = reviewedTools().slice(0, 3);

  return (
    <>
      <img
        src={avatarSrc}
        alt={curator}
        width={100}
        height={100}
        className="size-[100px] rounded-[8px] object-cover"
      />
      <h1 className="mt-6 max-w-[542px] text-[22px] font-semibold leading-7 tracking-[-0.011em] text-[#171717]">
        A directory of B2B software, curated by {curator}.
      </h1>
      <p className="mt-3 text-[14px] leading-5 text-[#666666]">
        I make stuff on the internet.
      </p>

      <SearchForm className="mt-24" />

      <section className="mt-[72px]">
        <h2 className="text-[13px] leading-5 text-[#737373]">Categories</h2>
        <div className="mt-8 space-y-10">
          {featuredCategories().map((category) => {
            const count = toolCount(category.slug);
            return (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group block"
              >
                <span className="block text-[15px] font-medium leading-5 text-[#171717] group-hover:underline">
                  {category.name} →
                </span>
                <span className="mt-1 block text-[14px] leading-5 text-[#737373]">
                  {category.blurb} {count} {count === 1 ? "tool" : "tools"}.
                </span>
              </Link>
            );
          })}
          <Link
            href="/categories"
            className="block text-[15px] font-medium leading-5 text-[#171717] hover:underline"
          >
            See all categories →
          </Link>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-[13px] leading-5 text-[#737373]">Popular tools</h2>
        <div className="mt-6 space-y-6">
          {popularTools().map((tool) => (
            <ToolRow key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-[13px] leading-5 text-[#737373]">Latest reviews</h2>
        <div className="mt-6 space-y-6">
          {latest.map((tool) => (
            <ToolRow key={tool.slug} tool={tool} />
          ))}
        </div>
        <Link
          href="/reviews"
          className="mt-8 block text-[15px] font-medium leading-5 text-[#171717] hover:underline"
        >
          See all reviews →
        </Link>
      </section>

      <section className="mt-16">
        <h2 className="text-[15px] font-medium leading-5 text-[#171717]">Directory notes</h2>
        <p className="mt-3 max-w-[520px] text-[14px] leading-5 text-[#737373]">
          Occasional notes on tools added to this directory. Nothing on this form is sent
          anywhere.
        </p>
        <SubscribeForm />
        <Link
          href="/reviews"
          className="mt-5 block text-[15px] font-medium leading-5 text-[#171717] hover:underline"
        >
          Read the latest reviews →
        </Link>
      </section>
    </>
  );
}
