"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DottedMark } from "@/components/dotted-mark";

const links = [
  { href: "/categories", label: "Categories" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
];

function isCurrent(pathname: string, href: string) {
  if (href === "/categories") return pathname.startsWith("/categories");
  if (href === "/reviews") {
    return pathname.startsWith("/reviews") || pathname.startsWith("/tools");
  }
  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="px-6 py-6 sm:px-8">
      <div className="flex items-center justify-between">
        <Link href="/" aria-label="Directory home" className="text-[#171717]">
          <DottedMark />
        </Link>
        <nav className="flex items-center gap-6 text-[14px] leading-5">
          {links.map((link) => {
            const current = isCurrent(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={current ? "page" : undefined}
                className={current ? "text-[#0f4bf1]" : "text-[#171717] hover:opacity-70"}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
