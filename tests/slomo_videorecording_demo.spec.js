import { test, expect, chromium } from "@playwright/test"
import { dir } from "console"
import { serialize } from "v8"

test("Slomo and video recording on test level using browser context", async () => {
  const browser = await chromium.launch({
    slowMo: 500,
    headless: false,
  })

  const context = await browser.newContext({
    recordVideo: {
      dir: "Video/",
      size: {
        width: 800,
        height: 600,
      },
    },
  })

  const page = await context.newPage()

  await page.goto("https://admin-demo.nopcommerce.com/login")
  await page.pause()
  await page.locator('//input[@type="email"]').fill("admin@yourstore.com")
  await page.locator('//input[@type="password"]').fill("admin")
  await page.locator('button:text("LOG IN")').click()

  await page.pause()

  await context.close()
})
