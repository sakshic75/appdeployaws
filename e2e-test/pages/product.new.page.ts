import { Locator, Page } from "@playwright/test";
import { test, expect } from "@playwright/test";

// Sakshi Page Model ()playwright
export class ProductNewPage {
  readonly page: Page;
  readonly getNameInput: Locator;
  readonly getPriceInput: Locator;
  readonly getDescriptionInput: Locator;
  readonly getSaveButtonProduct: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getNameInput = page.locator("#name");
    this.getPriceInput = page.locator("#price");
    this.getDescriptionInput = page.locator("#description");
    this.getSaveButtonProduct = page.locator(".button-submit-new-product");
  }

  async goto() {
    //await this.page.goto("http://localhost:3000/new/", {waitUntil: "networkidle"});
    await this.page.goto("/new/", {waitUntil:"load"});
  }
}
