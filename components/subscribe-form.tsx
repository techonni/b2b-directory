"use client";

import { useState } from "react";

export function SubscribeForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="mt-4 text-[14px] leading-5 text-[#737373]">
        Noted in this browser. Nothing was sent.
      </p>
    );
  }

  return (
    <form
      className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2"
      onSubmit={(event) => {
        event.preventDefault();
        setDone(true);
      }}
    >
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Enter your email address"
        className="h-[39px] w-full rounded-[4px] bg-[#e5e5e5] px-3 text-[14px] text-[#171717] outline-none placeholder:text-[#737373] sm:w-[250px]"
      />
      <button
        type="submit"
        className="h-[39px] rounded-[4px] bg-[#262626] px-6 text-[14px] font-medium text-white hover:bg-black"
      >
        Subscribe
      </button>
    </form>
  );
}
