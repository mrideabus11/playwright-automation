import { test, expect } from "@playwright/test"

test("Login demo test 1", async ({ page }) => {
  await page.goto("https://demo.applitools.com/")
  // await page.pause()

  await page.locator("id=username").fill("username")
  await page.locator("id=password").fill("password")

  // Use this to check the count of a locator
  await expect(page.locator("text=Sign in")).toHaveCount(1)

  //Use this to add explicit timeout for a particluat selector
  await page.waitForSelector("text=Sign in", { timeout: 5000 })
  await page.locator("id=log-in").click()
  //   await page.locator("text=Sign in").click() // alternative
})

test.only("Orange HRM demo login test", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  )
  // await page.pause()
  await page.locator(getByRole("textbox", { name: "username" })).fill("Admin")
  await page
    .locator(
      locator("div")
        .filter({ hasText: /^Password$/ })
        .nth(2)
    )
    .fill("admin123")
  page.locator("type=submit").click()
})
