import { test, expect } from "@playwright/test";

test("Able to see Initial page", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/99 Hotstar/);

  await expect(page.getByRole("button", { name: "Get started" })).toBeVisible();
});

test("Able to see Home page", async ({ page }) => {
  await page.goto("/home");

  await expect(page).toHaveURL(/.*home/);

  await expect(page.getByLabel("Home")).toHaveClass(/.*active/);

  await expect(
    page.getByRole("heading", { name: "Movies and TV Shows" }),
  ).toBeVisible();

  await expect(page.getByRole("link", { name: "Hotstar" })).toBeVisible();
  await expect(page.getByLabel("Home")).toBeVisible();
  await expect(page.getByLabel("Search")).toBeVisible();
  await expect(page.getByLabel("Watchlist")).toBeVisible();
});

test("Able to see Search page", async ({ page }) => {
  await page.goto("/search");

  await expect(page).toHaveURL(/.*search/);

  await expect(page.getByLabel("Search")).toHaveClass(/.*active/);

  await expect(page.getByText("Let's watch some stuff")).toBeVisible();

  await expect(page.getByRole("heading", { name: "Search" })).toBeVisible();

  await expect(page.getByPlaceholder("Any Movies or TV Shows")).toBeVisible();

  await expect(page.getByLabel("TV Shows")).toBeVisible();
  await expect(page.getByLabel("Movies")).toBeVisible();
  await expect(page.getByLabel("All")).toBeVisible();
});

test("Able to see Watchlist page", async ({ page }) => {
  await page.goto("/watchlist");

  await expect(page).toHaveURL(/.*watchlist/);

  await expect(page.getByLabel("Watchlist")).toHaveClass(/.*active/);

  await expect(page.getByRole("heading", { name: "Watchlist" })).toBeVisible();

  await expect(page.getByText("You don't have anything to")).toBeVisible();
});
