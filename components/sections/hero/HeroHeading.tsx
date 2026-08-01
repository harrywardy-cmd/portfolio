export function HeroHeading() {
  return (
    <div>
      <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-[-0.05em] text-foreground lg:text-6xl">
        Software Engineer
        <br />
        building scalable solutions
        <br />
        and{" "}
        <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
          AI-powered
        </span>{" "}
        tools.
      </h1>
    </div>
  );
}