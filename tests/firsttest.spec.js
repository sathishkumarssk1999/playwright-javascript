const {test, expect} = require('@playwright/test')

test('firs test', async ({ page }) => {

  await page.goto('https://letcode.in/');

  await page.waitForTimeout(2000);

  // To click on workspace tab
  //await page.locator("//*[text()='Work-Space']").click();
  await page.locator("#testing").click()

  //await page.locator("//*[text()='Log in']").click();
  await page.locator("text='Log in'").click()

  //await page.locator("//input[@name='email']").fill("sample@gmail.com");
  await page.locator("[name='email']").fill("sample@gmail.com");

  //await page.locator("//input[@name='password']").fill("admin@123");
  await page.locator("[name='password']").fill("admin@123");

  await page.locator("text='LOGIN'").click();
  // wait for 5 seconds
  await page.waitForTimeout(20000);
 // await page.pause();

})
