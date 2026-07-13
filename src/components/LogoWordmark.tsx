import Link from "next/link";

type LogoWordmarkProps = {
  className?: string;
  variant?: "dark" | "light";
};

export function LogoWordmark({
  className = "",
  variant = "dark",
}: LogoWordmarkProps) {
  const textFill = variant === "light" ? "#ffffff" : "#06142E";

  return (
    <svg
      viewBox="0 0 500 92"
      aria-hidden="true"
      className={className}
      role="img"
    >
      <text
        x="0"
        y="69"
        fontFamily="var(--font-manrope), Manrope, Arial, sans-serif"
        fontSize="68"
        fontWeight="800"
        letterSpacing="-4.5"
      >
        <tspan fill={textFill}>predict</tspan>
        <tspan fill="#176BFF">X</tspan>
        <tspan fill={textFill}>sports</tspan>
      </text>
    </svg>
  );
}

export function LogoLink({
  className = "",
  logoClassName = "",
  variant = "dark",
}: LogoWordmarkProps & { logoClassName?: string }) {
  return (
    <Link
      href="/"
      aria-label="PredictX Sports home"
      className={`group inline-flex min-h-11 items-center rounded-full transition duration-150 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
        variant === "light"
          ? "focus-visible:outline-white"
          : "focus-visible:outline-ink"
      } ${className}`}
    >
      <LogoWordmark
        variant={variant}
        className={`block transition duration-150 group-hover:scale-[1.015] ${logoClassName}`}
      />
    </Link>
  );
}
