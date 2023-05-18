import { Page } from "@playwright/test";

// Sakshi Page Model ()playwright
export class ProductNewPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
}
