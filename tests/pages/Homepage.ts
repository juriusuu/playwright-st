import { Page, Locator } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly productCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder("Search");
    this.productCards = page.locator(".card");
  }

  async goto() {
    await this.page.goto("/");
  }

  async searchProduct(name: string) {
    await this.searchInput.fill(name);
    await this.searchInput.press("Enter");
  }
}
