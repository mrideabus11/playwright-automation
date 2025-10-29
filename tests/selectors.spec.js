import { test, expect } from "@playwright/test"
import { text } from "stream/consumers"

test("Selectors Demo", async ({ page }) => {
  //Here {page} is called a fixture
  await page.goto("https://www.saucedemo.com")
  await page.pause()

  // using any object property
  await page.click("id=user-name")
  await page.locator("id=user-name").fill("prads") // this is the preferred way
  await page.locator('[id = "user-name"]').fill("subedi") // this is another way

  // Using CSS selector
  // #login-button
  await page.locator("#login-button").click()
  // await page.pause()
  // Using XPath
  await page.locator('xpath=//input[@name="password"]').fill("abc12345")
  await page.locator('//input[@name="password"]').fill("faraday") // alternative

  // using text
  await page.locator("text=LOGIN").click()
  await page.locator('input:has-text("LOGIN")').click() // :has-text le matra ni kaam garcha but uniquely address garna laai input:has-text lekheko
})
