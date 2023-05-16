import { test, expect } from "@playwright/test";
import { IpponHomepage } from "../../pages/IpponHomepage";

test.describe("Check that the homepage has all the basic elements", () => {
  let ipponHomepage;
  test.beforeAll(async ({ page }) => {
    ipponHomepage = new IpponHomepage(page);
    await ipponHomepage.goto();
  });
  test("has title ippon @smoke @regression", async ({ page }) => {
    await expect(ipponHomepage.mainTitle).toContainText("Positive");
  });

  test("has navigation items @regression", async ({ page }) => {
    await expect(ipponHomepage.mainTitle).toContainText("Positive");
  });

  test("has title ippon as @regression", async ({ page }) => {
    await expect(ipponHomepage.mainTitle).toContainText("Positive");
  });
});
