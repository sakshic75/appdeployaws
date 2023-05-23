import { test, expect } from "@playwright/test";
import {ProductNewPage } from '../../pages/product.new.page';


test("Check the URL for the New Product Page @new", async({page})=>{
    test.setTimeout(0);
    const pageNew = new ProductNewPage(page);

    pageNew.goto();
    await expect(pageNew.page).toHaveURL("http://localhost:3000/new");
    
  });


test("has title Product Name ", async ({ page }) => {
  
  const pageNew = new ProductNewPage(page);

  pageNew.goto();
  await expect(pageNew.mainTitle).toContainText("Product Name");


});

test("has title Product Price ", async ({ page }) => {
  
    const pageNew = new ProductNewPage(page);
  
    pageNew.goto();
    await expect(pageNew.mainTitle).toContain("Product Price");
  
  
  });

  test("has title Write a Description ", async ({ page }) => {
  
    const pageNew = new ProductNewPage(page);
  
    pageNew.goto();
    await expect(pageNew.mainTitle).toContainText("Write a Description");
  
  
  });


  test("Event on clicking Save Product @new", async({page})=>{
    
    const pageNew = new ProductNewPage(page);

    
    pageNew.goto();
    await pageNew.getByRoleButton.click({ force: true });

    await expect(pageNew.page).toHaveURL("http://localhost:3000/products");
    
  });

  test("Check the placeholder for labels @new", async({page})=>{
    
    const pageNew = new ProductNewPage(page);
    pageNew.goto();
    const label = pageNew.getByLabelName2;
    console.log(label);
});

test("get started link @regression", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
 