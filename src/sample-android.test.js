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
  }, 60000);

  // test("add products to cart", async () => {
  //   await page.goto("https://bstackdemo.com/");
  //   await page.waitForLoadState('networkidle');

  //   // Wait for product and get product name
  //   await page.waitForSelector('[id="1"] p', { timeout: 10000 });
  //   const productText = await page.textContent('[id="1"] p');
    
  //   // Click 'Add to cart' button
  //   await page.click('[id="1"] div:nth-child(4)');
    
  //   // Wait for cart to appear
  //   await page.waitForSelector(".float-cart__content", { timeout: 10000 });
    
  //   // Get product name from cart
  //   const productCartText = await page.textContent(
  //     '#__next div div div:nth-child(2) div:nth-child(2) div:nth-child(2) div div:nth-child(3) p:first-child'
  //   );
    
  //   // Verify product was added to cart
  //   expect(productText).toBe(productCartText);
  // }, 60000);

  // test("search functionality", async () => {
  //   await page.goto("https://bstackdemo.com/");
  //   await page.waitForLoadState('networkidle');

  //   // Search for a product
  //   const searchTerm = "iPhone";
  //   await page.waitForSelector('input[placeholder="Search for products"]', { timeout: 10000 });
  //   await page.fill('input[placeholder="Search for products"]', searchTerm);
  //   await page.keyboard.press('Enter');

  //   // Wait for search results
  //   await page.waitForSelector('.shelf-item', { timeout: 10000 });
    
  //   // Verify search results contain the search term
  //   const products = await page.$$eval('.shelf-item p', elements => 
  //     elements.map(el => el.textContent)
  //   );
    
  //   expect(products.length).toBeGreaterThan(0);
  //   expect(products.some(product => 
  //     product.toLowerCase().includes(searchTerm.toLowerCase())
  //   )).toBe(true);
  // }, 30000);

  // test("navigate to product details", async () => {
  //   await page.goto("https://bstackdemo.com/");
  //   await page.waitForLoadState('networkidle');

  //   // Click on first product
  //   await page.waitForSelector('#1', { timeout: 10000 });
  //   await page.click('#1');

  //   // Wait for product details page
  //   await page.waitForSelector('.product-details', { timeout: 10000 });
    
  //   // Verify we're on product details page
  //   const currentUrl = page.url();
  //   expect(currentUrl).toContain('/product');
    
  //   // Verify product details are displayed
  //   const productTitle = await page.textContent('.product-title');
  //   expect(productTitle).toBeTruthy();
  // }, 30000);
});