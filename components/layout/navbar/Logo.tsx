import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <div className="text-5xl font-black tracking-tight">
        <span className="text-blue-500">H</span>
        <span className="text-sky-400">W</span>
      </div>

      <span className="text-xl font-semibold text-white">
        Harry Ward
      </span>
    </Link>
  );
}