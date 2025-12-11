import { test, expect } from '@playwright/test';

test('wordpress1', async ({ page }) => {

  await page.goto('https://webnorth.com/wordpress-overview/');
  await page.getByRole('button', { name: 'Acceptér alle' }).click();


  await expect(page.locator('section').filter({ hasText: 'WORDPRESS EKSPERTERWordPress' })).toBeVisible();
  await page.locator('.product-grid-card__overlay-link').first().click();
  await page.goBack();
  await page.locator('div:nth-child(3) > .product-grid-card__overlay-link').click();
  await page.goBack();
  await page.locator('div:nth-child(4) > .product-grid-card__overlay-link').click();
  await page.goBack();
  await page.locator('div:nth-child(5) > .product-grid-card__overlay-link').click();
  await page.goBack();
  await page.locator('div:nth-child(5) > .product-grid-card__overlay-link').click();
  await page.goBack();
  await page.locator('div:nth-child(7) > .product-grid-card__overlay-link').click();
  await page.goBack();
  await page.locator('div:nth-child(4) > .product-grid-card__overlay-link').click();
  await page.goBack();
  await page.locator('div:nth-child(4) > .product-grid-card__overlay-link').click();
  await page.goBack();

  await expect(page.getByRole('heading',  { name: 'Vi udvikler avancerede' })).toBeVisible();

});