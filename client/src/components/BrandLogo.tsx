import { cn } from "@/lib/utils";
import logo from "@assets/chrizantalogo_1772688493063.png";

type BrandLogoProps = {
  variant?: "navbar" | "main";
  tone?: "default" | "light";
  className?: string;
};

export default function BrandLogo({
  variant = "navbar",
  tone = "default",
  className,
}: BrandLogoProps) {
  const isMain = variant === "main";

  return (
    <img
      src={logo}
      alt="Chrizanta Caterers Logo"
      loading={isMain ? "lazy" : "eager"}
      decoding="async"
      className={cn(
        "w-auto object-contain shrink-0",
        isMain ? "h-24 sm:h-32" : "h-12 sm:h-[66px]",
        tone === "light" ? "brightness-110 saturate-105" : "",
        className,
      )}
    />
  );
}
