interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  return (
    <main className="container mx-auto py-24">
      <h1 className="text-4xl font-bold">{slug}</h1>
    </main>
  );
}