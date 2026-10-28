import { test, expect } from "@playwright/test";
import { HomePage } from "../tests/pages/Homepage";

test.describe("Home Page - Product Catalog", () => {
  test("should display product items on load", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(homePage.productCards.first()).toBeVisible();
  });
});
