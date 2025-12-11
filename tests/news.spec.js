import { test, expect } from '@playwright/test';


test('homepage', async ({ page }) => {
await page.goto('https://webnorth.com/nyheder/');
await page.getByRole('button', { name: 'Acceptér alle' }).click();

await page.getByRole('button', { name: 'View posts from Nyheder' }).click();
await expect(page.getByRole('link', { name: 'PHP 7.4 vs 8.0 Nyheder' })).toBeVisible();
await page.getByRole('button', { name: 'View posts from Indblik' }).click();
await expect(page.getByRole('link', { name: 'WCEU 2025 er netop overstået' })).toBeVisible();
await page.getByRole('button', { name: 'View posts from Personlige' }).click();
await expect(page.getByRole('link', { name: 'Derfor betaler jeg gerne for' })).toBeVisible();
await page.getByRole('button', { name: 'View all posts' }).click();
await page.getByRole('link', { name: 'WordPress 6.9 er ude. Her er' }).click();
await expect(page).toHaveTitle(/WordPress 6.9/);
await page.locator('#main').getByRole('link', { name: 'Nyheder' }).nth(0).click();

});