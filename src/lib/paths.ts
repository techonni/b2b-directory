export function href(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (path === "/" || path === "") return `${base}/`;
  const clean = path.replace(/^\//, "").replace(/\/$/, "");
  return `${base}/${clean}/`;
}
