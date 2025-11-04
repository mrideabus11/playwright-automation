import { test } from "@playwright/test"

//will skip the test
test.skip("Test One", async ({ page }) => {
  await page.goto("https://www.saucedemo.com")
})

// will mark the test as failure - used  for documentation purpose to denote certain functionality should fail
test("not yet ready", async ({ page }) => {
  //   page.goto("https://www.google.com")
  test.fail()
})

//test will be aborted
test.fixme("test to be fixed", async ({ page }) => {
  //....
})

//marks the test as slow and triples the test timeout
test("slow test", async () => {
  test.slow()
  //.....
})

//runs this test only
test.only("only test", async ({}) => {
  test.slow()
  //.....
})

//skip conditionally
test("skip this test for firefox", async ({ page, browserName }) => {
  test.skip(browserName === "firefox", "Still working on it!")
})
