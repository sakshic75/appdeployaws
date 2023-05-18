import { Page } from "@playwright/test";

export class ProductNewPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
}
