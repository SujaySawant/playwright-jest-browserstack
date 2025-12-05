// const { chromium } = require('playwright');
const { chromium } = require("@playwright/test");

describe("BStack demo local test with Playwright", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch({ 
      headless: false,
      slowMo: 50 
    });
    page = await browser.newPage();
  });
  
  afterAll(async () => {
    await browser.close();
  });

  test("local test", async () => {
    await page.goto("http://bs-local.com:45454/");
    await page.waitForLoadState('networkidle');

    const title = await page.title();
    expect(title).toContain('BrowserStack Local');
  }, 30000);

  // test("local test with additional validations", async () => {
  //   await page.goto("http://bs-local.com:45454/");
  //   await page.waitForLoadState('networkidle');

  //   // Verify page title
  //   const title = await page.title();
  //   expect(title).toContain('BrowserStack Local');

  //   // Verify page content is loaded
  //   const bodyText = await page.textContent('body');
  //   expect(bodyText).toBeTruthy();
  //   expect(bodyText.length).toBeGreaterThan(0);

  //   // Check if any error messages are present
  //   const errorElements = await page.$$('text=/error|Error|ERROR/');
  //   expect(errorElements.length).toBe(0);
  // }, 30000);

  // test("local test with network status check", async () => {
  //   // Listen for response events to verify successful loading
  //   let responseReceived = false;
  //   page.on('response', response => {
  //     if (response.url().includes('bs-local.com:45454') && response.status() === 200) {
  //       responseReceived = true;
  //     }
  //   });

  //   await page.goto("http://bs-local.com:45454/");
  //   await page.waitForLoadState('networkidle');

  //   const title = await page.title();
  //   expect(title).toContain('BrowserStack Local');
  //   expect(responseReceived).toBe(true);
  // }, 30000);
});