import { expect, Locator, Page } from "@playwright/test";

export class IpponHomepage {
  readonly page: Page;
  readonly mainTitle: Locator;
  readonly logo: Locator;
  readonly navigation: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator(".logo img");
    this.mainTitle = page.locator("#homepage-banner-page .heading");
    this.navigation = page.locator(".primary-navigation > ul");
  }

  async goto() {
    await this.page.goto("https://au.ippon.tech");
  }

  
}
