import { test, expect } from "@playwright/test";
import { IpponHomepage } from "../../pages/IpponHomepage";

test.describe("Check that the homepage has all the basic elements", () => {
  let ipponHomepage;
  test.beforeAll(async ({ page }) => {
    ipponHomepage = new IpponHomepage(page);
    await ipponHomepage.goto();
  });
  test.skip("has title ippon @smoke @regression", async ({ page }) => {
    await expect(ipponHomepage.mainTitle).toContainText("Positive");
  });

  test.skip("has navigation items @regression", async ({ page }) => {
    await expect(ipponHomepage.mainTitle).toContainText("Positive");
  });

  test.skip("has title ippon as @regression", async ({ page }) => {
    await expect(ipponHomepage.mainTitle).toContainText("Positive");
  });
});
