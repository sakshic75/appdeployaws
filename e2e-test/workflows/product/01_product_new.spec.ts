import { test, expect } from "@playwright/test";
import {ProductNewPage } from '../../pages/product.new.page';


test("has title Product Name ", async ({ page }) => {
  
  const pageNew = new ProductNewPage(page);

  pageNew.goto();
  await expect(pageNew.mainTitle).toContainText("Product Name");


});

test("has title Product Price ", async ({ page }) => {
  
    const pageNew = new ProductNewPage(page);
  
    pageNew.goto();
    await expect(pageNew.mainTitle).toContainText("Product Price");
  
  
  });

  test("has title Write a Description ", async ({ page }) => {
  
    const pageNew = new ProductNewPage(page);
  
    pageNew.goto();
    await expect(pageNew.mainTitle).toContainText("Write a Description");
  
  
  });


  test("Event on clicking Save Product @new", async({page})=>{
    const pageNew = new ProductNewPage(page);

    const messageInput = pageNew.page.locator("input#name");
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "name")
    console.log('Before entering data: ' + await messageInput.inputValue());
    await messageInput.type("Banana");
    console.log('After entering data: ' + await messageInput.inputValue())
 
 




  });

  



test("get started link @regression", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
 