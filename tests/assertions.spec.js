import test, { page, expect } from "@playwright/test"

test("Assertions Demo", async ({ page }) => {
  await page.goto("https://kitchen.applitools.com/")
  await page.pause()

  //ASSERTIONS
  // check if the element is present or not
  await expect(page.locator("text=The Kitchen")).toHaveCount(1)
  //this works but is discouraged -- use this if you plan to use a conditional block
  await page.$("text=The Kitchen")

  // check if the element is visible or not
  await expect(page.locator("text=The Kitchen")).toBeVisible()
  await expect.soft(page.locator("text=The Kitchen")).toBeHidden()

  // check if an element is enabled or disabled
  await expect(page.locator("text=The Kitchen")).toBeEnabled()
  await expect.soft(page.locator("text=The Kitchen")).toBeDisabled()
})
