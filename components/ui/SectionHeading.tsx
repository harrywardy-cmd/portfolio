interface Props {
  title: string;
  subtitle?: string;
}

export function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}