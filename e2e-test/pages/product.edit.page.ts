import { Locator, Page } from "@playwright/test";

export class ProductEditPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
}
