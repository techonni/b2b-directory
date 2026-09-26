export function DottedMark({ className = "size-6" }: { className?: string }) {
  const dots = Array.from({ length: 12 }, (_, index) => {
    const angle = ((index * 30 - 90) * Math.PI) / 180;
    return {
      cx: 12 + Math.cos(angle) * 8.1,
      cy: 12 + Math.sin(angle) * 8.1,
    };
  });

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {dots.map((dot) => (
        <circle key={`${dot.cx}-${dot.cy}`} cx={dot.cx} cy={dot.cy} r="1.25" fill="#171717" />
      ))}
    </svg>
  );
}
