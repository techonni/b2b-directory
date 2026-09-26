const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function SearchForm({
  defaultQuery = "",
  className = "",
}: {
  defaultQuery?: string;
  className?: string;
}) {
  return (
    <form
      action={`${basePath}/search/`}
      className={`flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2 ${className}`}
    >
      <label htmlFor="q" className="sr-only">
        Search tools
      </label>
      <input
        id="q"
        name="q"
        defaultValue={defaultQuery}
        placeholder="Search tools"
        className="h-[39px] w-full rounded-[4px] bg-[#e5e5e5] px-3 text-[14px] text-[#171717] outline-none placeholder:text-[#737373] sm:w-[250px]"
      />
      <button
        type="submit"
        className="h-[39px] rounded-[4px] bg-[#262626] px-6 text-[14px] font-medium text-white hover:bg-black"
      >
        Search
      </button>
    </form>
  );
}
