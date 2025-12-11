import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://webnorth.com/team/');
  await page.getByRole('button', { name: 'Acceptér alle' }).click();
  await page.getByRole('link', { name: 'CEO & CTO Simon Strande' }).click();
  await page.getByRole('link', { name: 'Close sidebar' }).nth(1).click();
  await page.getByRole('link', { name: 'QA-ingeniør Stavri Gega' }).click();
  await page.getByRole('link', { name: 'Close sidebar' }).nth(1).click();
  await page.getByRole('link', { name: 'QA-ingeniør Stavri Gega' }).click();
  await page.getByRole('link', { name: 'Close sidebar' }).nth(1).click();
  await page.getByRole('button', { name: 'Skift til listevisning' }).click();
  await page.getByRole('link', { name: 'Læs mere' }).first().click();
  await page.getByRole('link', { name: 'Close sidebar' }).nth(1).click();
  await page.getByRole('button', { name: 'Skift til listevisning' }).click();
  await page.getByRole('button', { name: 'Skift til gittervisning' }).click();
});