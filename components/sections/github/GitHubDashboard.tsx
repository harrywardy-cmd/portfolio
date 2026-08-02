import { Container } from "@/components/layout/Container";

import { GitHubContributionGraph } from "./GitHubContributionGraph";
import { GitHubQuickFacts } from "./GitHubQuickFacts";
import { GitHubStats } from "./GitHubStats";

export function GitHubDashboard() {
  return (
    <section
      id="github"
      className="relative py-20 lg:py-24"
    >
      <Container>
        <div className="space-y-12">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              GitHub
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Engineering Dashboard
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A live snapshot of my software engineering journey,
              showcasing my GitHub activity, coding progress,
              current projects, and technical interests.
            </p>
          </div>

          {/* Dashboard */}
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            {/* Stats */}
            <div
              className="
                rounded-3xl
                border
                border-border/60
                bg-card
                p-6
                shadow-sm
              "
            >
              <GitHubStats />
            </div>

            {/* Quick Facts */}
            <GitHubQuickFacts />
          </div>

          {/* Contribution Graph */}
          <GitHubContributionGraph />
        </div>

        {/* Bottom Divider */}
        <div className="mt-20 border-t border-border/60" />
      </Container>
    </section>
  );
}