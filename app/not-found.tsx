import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1 className="text-[22px] font-semibold leading-7 text-[#171717]">
        This page is not in the directory.
      </h1>
      <p className="mt-4 text-[15px] leading-6 text-[#737373]">
        The link may be old, or the tool was never listed.
      </p>
      <Link
        href="/"
        className="mt-8 block text-[15px] font-medium leading-5 text-[#171717] hover:underline"
      >
        Back to the directory →
      </Link>
    </>
  );
}
