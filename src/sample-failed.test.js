// const { chromium } = require('playwright');
const { chromium } = require("@playwright/test");

describe("BStack demo test with Playwright", () => {
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
  
  test("login test", async () => {
    await page.goto("https://bstackdemo.com");
    await page.waitForLoadState('networkidle');
    
    const title = await page.title();
    expect(title).toContain('BrowserStack Local');
  }, 60000);
});