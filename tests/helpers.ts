import { vi } from "vitest";

export function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

/** Replaces global `fetch` with a mock that returns the given responses in order. */
export function mockFetch(...responses: Response[]) {
  const fetchMock = vi.fn<typeof fetch>();

  for (const response of responses) {
    fetchMock.mockResolvedValueOnce(response);
  }

  vi.stubGlobal("fetch", fetchMock);

  return fetchMock;
}

/** Parses the JSON body sent in the nth fetch call. */
export function requestBody(fetchMock: ReturnType<typeof mockFetch>, call = 0) {
  return JSON.parse(fetchMock.mock.calls[call][1]?.body as string);
}
