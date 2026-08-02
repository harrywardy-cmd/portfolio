interface ProjectSectionProps {
  title: string;
  children: React.ReactNode;
}

export function ProjectSection({
  title,
  children,
}: ProjectSectionProps) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          {title}
        </h2>

        <div className="mt-2 h-1 w-16 rounded-full bg-primary" />
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        {children}
      </div>
    </section>
  );
}