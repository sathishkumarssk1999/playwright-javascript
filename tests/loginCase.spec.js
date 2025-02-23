const { test, expect } = require('@playwright/test');
//const clipboardy = require('clipboardy');
//const md = require ('../../modules/maildev')
//const rest = require ('../../modules/rest')
//const { parse } = require('node-html-parser');
//require('dotenv').config({path:'dev.env'});

const web = "https://reg.qa.eztoauth.com";
//To validate the Invalid Email and Valid Password
test('TC_011', async ({ page, browser }) => {

    await page.goto(web);
    await page.locator("id=username").fill("sathishkumar");
    await page.locator("id=password").fill("Password@123");
    await page.locator("id=kc-login").dispatchEvent('click');
    await expect(page.locator("id=input-error")).toHaveText("Invalid username or password.");
});

//To validate the Valid Email and Invalid Password
test('TC_012', async ({ page, browser }) => {

    await page.goto(web);
    await page.locator("id=username").fill("sathishkumar.s@grootan.com");
    await page.locator("id=password").fill("Password");
    await page.locator("id=kc-login").dispatchEvent('click');
    await expect(page.locator("id=input-error")).toHaveText("Invalid username or password.");
});

//To validate the both Invalid Email and Invalid password
test('TC_013', async ({ page, browser }) => {

    await page.goto(web);
    await page.locator("id=username").fill("sathishkumar");
    await page.locator("id=password").fill("Password");
    await page.locator("id=kc-login").dispatchEvent('click');
    await expect(page.locator("id=input-error")).toHaveText("Invalid username or password.");
});

//To validate the valid Username / email and Valid password
test('TC_014', async ({ page, browser }) => {

    await page.goto(web);
    await page.locator("id=username").fill("sathishkumar.s@grootan.com");
    await page.locator("id=password").fill("Password@123");
    await page.locator("id=kc-login").dispatchEvent('click');
});
