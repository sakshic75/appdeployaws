import { Locator, Page } from "@playwright/test";
import { test, expect } from '@playwright/test';


// Sakshi Page Model ()playwright
export class ProductNewPage {
  

  readonly page: Page;
  readonly mainTitle : Locator;
  readonly getByLabelName  : Locator;
  readonly getByLabelPrice : Locator;
  readonly getByLabelDescription : Locator;
  readonly getByRoleButton  : Locator;
  readonly getByLabelName2 : Locator;
  constructor(page: Page) {
    this.page = page;
    this.mainTitle = page.locator("#__next");
    this.getByLabelName = page.getByLabel("Product Name");
    this.getByLabelPrice = page.getByLabel("Product Price");
    this.getByLabelDescription= page.getByLabel("Description");
    this.getByLabelName2 = page.locator("#name");
    this.getByRoleButton = page.getByRole("button", { name: 'Save Product' });;
   
    
  }

  async goto() {
    //await this.page.goto("http://localhost:3000/new/", {waitUntil: "networkidle"});
    await this.page.goto("http://localhost:3000/new/");
  }
   
  
  

}
