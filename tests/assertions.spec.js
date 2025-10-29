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
  //   await expect.soft(page.locator("text=The Kitchen")).toBeHidden() //.soft means soft assertion i.e. the test won't stop if this fails

  // check if an element is enabled or disabled
  await expect(page.locator("text=The Kitchen")).toBeEnabled()
  //   await expect.soft(page.locator("text=The Kitchen")).toBeDisabled()

  // check text
  await expect(page.locator("text=The Kitchen")).toHaveText("The Kitchen")
  //   await expect
  //     .soft(page.locator("text=The Kitchen"))
  //     .not.toHaveText("The Kitchen")

  // check attribute value
  //   await expect
  //     .soft(page.locator("text=The Kitchen"))
  //     .toHaveAttribute("class", /.*css-dpmy2a/)
  await expect(page.locator("text=The Kitchen")).toHaveClass(/.*css-dpmy2a/) //     /.*css=dmpy2a/ is a regex

  // check page url and title
  //   await expect(page).toHaveURL("https://kitchen.applitools.com/")
  await expect(page).toHaveURL(/kitchen.applitools.com/)

  await expect(page).toHaveTitle(/.*Kitchen/) // this is regex
})
