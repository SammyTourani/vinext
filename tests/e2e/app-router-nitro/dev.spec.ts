import { test, expect } from "@playwright/test";

// Nitro replaces the rsc dev environment with one that has no module runner
// and passes requests it does not serve, such as missing assets, back to
// Vite. @vitejs/plugin-rsc's dev handler must not take those requests, or
// they fail with a 500 in `environment.runner.import()` (#853).

test.describe("App Router on Nitro (vite dev)", () => {
  test("responds 404 to a missing image", async ({ request }) => {
    const response = await request.get("/missing.png", {
      headers: { "sec-fetch-dest": "image" },
    });
    expect(response.status()).toBe(404);
  });
});
