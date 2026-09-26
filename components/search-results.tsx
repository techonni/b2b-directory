"use client";

import { useSearchParams } from "next/navigation";
import { SearchForm } from "@/components/search-form";
import { ToolRow } from "@/components/tool-row";
import { searchTools } from "@/lib/directory";

export function SearchResults() {
  const params = useSearchParams();
  const query = params.get("q")?.trim() ?? "";
  const results = searchTools(query);

  return (
    <>
      <h1 className="text-[22px] font-semibold leading-7 text-[#171717]">Search</h1>
      <SearchForm defaultQuery={query} className="mt-8" />
      {query === "" ? (
        <p className="mt-10 text-[15px] leading-6 text-[#737373]">
          Type a tool name to search the directory.
        </p>
      ) : results.length === 0 ? (
        <p className="mt-10 text-[15px] leading-6 text-[#737373]">
          No tools matched “{query}”.
        </p>
      ) : (
        <div className="mt-10 space-y-6">
          {results.map((tool) => (
            <ToolRow key={tool.slug} tool={tool} />
          ))}
        </div>
      )}
    </>
  );
}
