import type { Metadata } from "next";
import Link from "next/link";
import { categories, toolCount } from "@/lib/directory";

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse the directory by the job the software does.",
};

export default function CategoriesPage() {
  return (
    <>
      <h1 className="text-[22px] font-semibold leading-7 text-[#171717]">Categories</h1>
      <p className="mt-4 text-[15px] leading-6 text-[#737373]">
        Browse the directory by the job the software does.
      </p>
      <div className="mt-16 space-y-10">
        {categories.map((category) => {
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
      </div>
    </>
  );
}
