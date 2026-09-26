import type { Metadata } from "next";
import { ToolRow } from "@/components/tool-row";
import { reviewedTools } from "@/lib/directory";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Notes on tools in this directory, newest first.",
};

export default function ReviewsPage() {
  const reviews = reviewedTools();

  return (
    <>
      <h1 className="text-[22px] font-semibold leading-7 text-[#171717]">Reviews</h1>
      <p className="mt-4 text-[15px] leading-6 text-[#737373]">
        Notes on tools in this directory, newest first.
      </p>
      {reviews.length === 0 ? (
        <p className="mt-16 text-[15px] leading-6 text-[#737373]">No reviews yet.</p>
      ) : (
        <div className="mt-16 space-y-6">
          {reviews.map((tool) => (
            <ToolRow key={tool.slug} tool={tool} />
          ))}
        </div>
      )}
    </>
  );
}
