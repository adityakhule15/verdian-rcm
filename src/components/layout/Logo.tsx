import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";

export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center transition-opacity hover:opacity-95",
        tone === "dark" && "rounded-md bg-white px-2.5 py-1.5",
        className,
      )}
      aria-label={`${site.name} — home`}
    >
      <Image
        src="/logo.png"
        alt={site.name}
        width={900}
        height={96}
        className="h-8 w-auto sm:h-9"
        priority
      />
    </Link>
  );
}
