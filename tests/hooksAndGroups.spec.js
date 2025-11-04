import { test, expect } from "@playwright/test"

test("test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com")
  await page.pause()
  await page.locator('[data-test="username"]').fill("standard_user")
  await page.locator('[data-test="password"]').fill("secret_sauce")
  await page.locator('[data-test="login-button"]').click()
})

test.only("Homepage", async ({ page }) => {
  //here .only is an annotation
  await page.goto("https://www.saucedemo.com")
  await page.locator('[data-test="username"]').fill("standard_user")
  await page.locator('[data-test="password"]').fill("secret_sauce")
  await page.locator('[data-test="login-button"]').click()
  await page.waitForURL("https://www.saucedemo.com/inventory.html")

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
  await page.locator('[data-test="item-1-title-link"]').click()
  await page.locator('[data-test="add-to-cart"]').click()
  await page.close()
})

test("logout", async ({ oage }) => {
  await page.goto("https://www.saucedemo.com")
  await page.locator('[data-test="username"]').fill("standard_user")
  await page.locator('[data-test="password"]').fill("secret_sauce")
  await page.locator('[data-test="login-button"]').click()
  await page.waitForURL("https://www.saucedemo.com/inventory.html")
  await page.getByRole("button", { name: "Open Menu" }).click()
  await page.locator('[data-test="logout-sidebar-link"]').click()
})
