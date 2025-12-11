import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://webnorth.com/cases/');
  await page.getByRole('button', { name: 'Acceptér alle' }).click();
  await page.getByRole('button', { name: 'View posts from WordPress' }).click();
  await expect(page.getByRole('link', { name: 'Arne Jacobsen Designs corporate website WordPress' })).toBeVisible();
  await page.getByRole('button', { name: 'View posts from WooCommerce' }).click();
  await expect(page.getByRole('link', { name: 'Imagine5 WooCommerce' })).toBeVisible();
  await page.getByRole('button', { name: 'View posts from Service &' }).click();
  await expect(page.getByRole('link', { name: 'Zealand Service & Hosting' })).toBeVisible();
  await page.getByRole('link', { name: 'Uni-Tankers preboarding sider' }).click();
  await expect(page).toHaveTitle(/Preboarding/);
  await page.goBack();
});