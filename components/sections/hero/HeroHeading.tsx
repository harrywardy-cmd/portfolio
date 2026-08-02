export function HeroHeading() {
  return (
    <div className="w-full overflow-hidden">
      <h1
        className="
          w-full
          max-w-full
          break-words
          text-balance
          font-extrabold
          leading-[1.05]
          tracking-[-0.04em]
          text-foreground
          text-[clamp(2.25rem,7vw,4rem)]
        "
      >
        Software Engineer{" "}
        <span className="block">
          building scalable solutions
        </span>
        <span className="block">
          and{" "}
          <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
            AI-powered
          </span>{" "}
          tools.
        </span>
      </h1>
    </div>
  );
}