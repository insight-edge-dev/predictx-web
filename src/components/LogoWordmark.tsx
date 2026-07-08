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
      viewBox="0 0 420 92"
      aria-hidden="true"
      className={className}
      role="img"
    >
      <text
        x="0"
        y="69"
        fill={textFill}
        fontFamily="var(--font-manrope), Manrope, Arial, sans-serif"
        fontSize="68"
        fontWeight="800"
        letterSpacing="-5"
      >
        Predict
      </text>
      <path
        d="M333 8h45l-48 40 51 42h-47l-27-23-28 23h-45l50-42-48-40h46l25 22 26-22Z"
        fill="#176BFF"
      />
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
      aria-label="PredictX home"
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
