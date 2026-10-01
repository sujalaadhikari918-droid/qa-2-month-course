// import {test, expect} from '@playwright/test';

// test("open website", async ({page}) => {
//     await page.goto("https://example.com");
// });


// import {test, expect} from '@playwright/test';

// test("open website", async ({page}) => {
//     await page.goto("https://example.com");
// });

// test("open website again", async ({page}) => {
//     await page.goto("https://example.com");
// });


// import {test, expect} from '@playwright/test';

// test("open website", async ({page}) => {
//     await page.goto("https://example.com");
// });

// test("open website again", async ({page}) => {
//     await page.goto("https://example1.com");
// });


// import { test, expect } from '@playwright/test';

// test.use({
//     ignoreHTTPSErrors: true
// });

// test("open website", async ({ page }) => {
//     await page.goto("https://10.1.186.251/");
// });


import { test, expect } from '@playwright/test';


test("open website", async ({ page }) => {
    await page.goto("https://google.com");
    await expect(page).toHaveTitle(/Google/);
});


 