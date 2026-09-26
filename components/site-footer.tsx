import Link from "next/link";
import { curator } from "@/lib/directory";

const links = [
  { href: "/categories", label: "Categories" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
];

export function SiteFooter() {
  return (
    <footer className="mt-28 pb-16">
      <nav className="flex flex-wrap gap-[11px]">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-flex h-[30px] items-center rounded-[4px] bg-[#f5f5f5] px-3 text-[13px] text-[#666666] hover:text-[#171717]"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <p className="mt-14 text-[13px] leading-5 text-[#a0a0a0]">
        © 2026 {curator}. All Rights Reserved.
      </p>
      <p className="mt-2 text-[13px] leading-5 text-[#a0a0a0]">
        Logos and names are trademarks of their respective owners.
      </p>
    </footer>
  );
}
