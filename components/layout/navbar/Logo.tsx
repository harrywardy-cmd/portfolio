import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 transition-all duration-300 hover:opacity-90"
      aria-label="Harry Ward Home"
    >
      {/* Logo */}
      <div className="text-5xl font-black leading-none tracking-tight">
        <span className="text-primary transition-colors duration-300">
          H
        </span>
        <span className="text-sky-400 transition-colors duration-300 dark:text-sky-400">
          W
        </span>
      </div>

      {/* Name */}
      <div className="flex flex-col">
        <span className="text-xl font-semibold tracking-tight text-foreground transition-colors duration-300">
          Harry Ward
        </span>

        <span className="hidden text-sm text-muted-foreground lg:block">
          Software Engineer
        </span>
      </div>
    </Link>
  );
}