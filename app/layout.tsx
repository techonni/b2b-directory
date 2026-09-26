import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "A directory of B2B software",
    template: "%s · Directory",
  },
  description: "A directory of B2B software, curated by Your Name.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className={`${geistSans.className} min-h-full bg-[#fbfbfb] text-[#171717]`}>
        <SiteHeader />
        <div className="mx-auto w-full max-w-[580px] px-5 min-[620px]:px-0">
          <main className="pt-20">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
