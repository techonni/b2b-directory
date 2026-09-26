import Link from "next/link";
import { BrandIcon } from "@/components/brand-icon";
import type { Tool } from "@/lib/directory";

export function ToolRow({ tool }: { tool: Tool }) {
  return (
    <Link href={`/tools/${tool.slug}`} className="group flex items-center gap-4">
      <BrandIcon slug={tool.slug} name={tool.name} />
      <span className="min-w-0">
        <span className="block text-[15px] font-medium leading-5 text-[#171717] group-hover:underline">
          {tool.name} →
        </span>
        <span className="mt-0.5 block text-[14px] leading-5 text-[#737373]">
          {tool.summary}
        </span>
      </span>
    </Link>
  );
}
