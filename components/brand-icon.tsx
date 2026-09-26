import { markPaths } from "@/lib/marks";

const slackPaths = [
  {
    fill: "#E01E5A",
    d: "M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z",
  },
  {
    fill: "#36C5F0",
    d: "M47 27c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.5 39.7.6 47 .6c7.3 0 13.2 5.9 13.2 13.2V27H47zm0 6.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H13.9C6.6 60.1.7 54.2.7 46.9c0-7.3 5.9-13.2 13.2-13.2H47z",
  },
  {
    fill: "#2EB67D",
    d: "M99.9 46.9c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.9V46.9zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V13.8C66.9 6.5 72.8.6 80.1.6c7.3 0 13.2 5.9 13.2 13.2v33.1z",
  },
  {
    fill: "#ECB22E",
    d: "M80.1 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8h13.2zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33.1c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H80.1z",
  },
];

export function BrandIcon({
  slug,
  name,
}: {
  slug: string;
  name: string;
}) {
  return (
    <span className="flex size-[60px] shrink-0 items-center justify-center rounded-[4px] bg-[#f5f5f5]">
      <Mark slug={slug} name={name} />
    </span>
  );
}

function Mark({ slug, name }: { slug: string; name: string }) {
  if (slug === "slack") {
    return (
      <svg viewBox="0 0 127 127" className="size-[30px]" aria-hidden="true">
        {slackPaths.map((path) => (
          <path key={path.fill} d={path.d} fill={path.fill} />
        ))}
      </svg>
    );
  }

  const path = markPaths[slug];
  if (!path) {
    return (
      <span className="text-[18px] font-semibold leading-none text-[#171717]" aria-hidden="true">
        {name.slice(0, 1)}
      </span>
    );
  }

  const fill = slug === "salesforce" ? "#00A1E0" : "#171717";

  return (
    <svg viewBox="0 0 24 24" className="size-[30px]" aria-hidden="true">
      <path d={path} fill={fill} />
    </svg>
  );
}
