import { test, expect } from "@playwright/test";

test("Able to visit Home page via sidebar", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("Home").click();

  await expect(page).toHaveURL(/.*home/);

  await expect(page.getByLabel("Home")).toHaveClass(/.*active/);
});

test("Able to visit Search page via sidebar", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("Search").click();

  await expect(page).toHaveURL(/.*search/);

  await expect(page.getByLabel("Search")).toHaveClass(/.*active/);
});

test("Able to visit Watchlist page via sidebar", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("Watchlist").click();

  await expect(page).toHaveURL(/.*watchlist/);

  await expect(page.getByLabel("Watchlist")).toHaveClass(/.*active/);
});
