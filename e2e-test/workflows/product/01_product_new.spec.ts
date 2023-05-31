import { test, expect } from "@playwright/test";
import { ProductNewPage } from "../../pages/product.new.page";

test.describe("Check the functionality of the new product page @new", () => {
  let pageNew: ProductNewPage;
  test.setTimeout(60000);
  test.beforeEach(async ({ page }) => {
    pageNew = new ProductNewPage(page);
    await pageNew.goto();
  });
  test("Check the URL for the New Product Page", async ({ page }) => {
    await expect(pageNew.page).toHaveURL("/new");
  });
  test("has title Product Name @smoke", async ({ page }) => {
    await expect(pageNew.getNameInput).toBeDefined();
  });
  test("has title Product Price @smoke", async ({ page }) => {
    await expect(pageNew.getPriceInput).toBeDefined();
  });
  test("has title Write a Description @smoke", async ({ page }) => {
    await expect(pageNew.getDescriptionInput).toBeDefined();
  });
  test("Check the placeholder for labels ", async ({ page }) => {
    const label = pageNew.getNameInput;
    const placeholder = await label.getAttribute("placeholder");
    expect(placeholder).toBe("name");
  });
  test("Event on clicking Save Product ", async ({ page }) => {
    await pageNew.getNameInput.fill("Apples");
    await pageNew.getPriceInput.fill("2");
    await pageNew.getDescriptionInput.fill("Queensland red apples");
    await pageNew.getSaveButtonProduct.click();
    await expect(pageNew.page).toHaveURL("/products");
  });
});
