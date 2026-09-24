const GITHUB_USERNAME = "harrywardy-cmd";
const LINKEDIN_HANDLE = "harry-ward-b2b9b4319";
const EMAIL = "harrywardy303@gmail.com";

const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

/**
 * Public URL of the site, used for metadata, the sitemap and robots.txt.
 *
 * 1. `NEXT_PUBLIC_SITE_URL` — set this once a custom domain is live.
 * 2. `VERCEL_PROJECT_PRODUCTION_URL` — provided automatically by Vercel.
 * 3. localhost — for local development.
 */
function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Harry Ward",

  url: getSiteUrl(),

  email: EMAIL,

  github: {
    username: GITHUB_USERNAME,
  },

  linkedin: {
    handle: LINKEDIN_HANDLE,
  },

  links: {
    github: GITHUB_URL,
    linkedin: `https://www.linkedin.com/in/${LINKEDIN_HANDLE}`,
    email: `mailto:${EMAIL}`,
  },

  repos: {
    portfolio: `${GITHUB_URL}/portfolio`,
    algorithms: `${GITHUB_URL}/algorithms-datastructures`,
  },
};
