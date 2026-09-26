import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchResults } from "@/components/search-results";

export const metadata: Metadata = {
  title: "Search",
  description: "Search the directory of B2B software.",
};

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <p className="text-[15px] leading-6 text-[#737373]">Searching the directory.</p>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
