import { test, expect } from '@playwright/test';

test('menu contact', async ({ page }) => {
  await page.goto('https://webnorth.com/');
  await page.getByRole('button', { name: 'Acceptér alle' }).click();
  await page.getByRole('button', { name: 'Open Contact dashboard' }).click();
  await page.getByRole('textbox', { name: 'Fornavn*' }).click();
  await page.getByRole('textbox', { name: 'Fornavn*' }).fill('test name');
  await page.getByRole('textbox', { name: 'Telefon' }).click();
  await page.getByRole('textbox', { name: 'Telefon' }).fill('+455588558');
  await page.getByRole('textbox', { name: 'Email*' }).click();
  await page.getByRole('textbox', { name: 'Email*' }).fill('test@test.cc');
  await page.getByRole('textbox', { name: 'Besked*' }).click();
  await page.getByRole('textbox', { name: 'Besked*' }).fill('test');
  await page.getByRole('checkbox', { name: 'GDPR og Privatlivspolitik' }).check();
  await page.getByRole('button', { name: 'Indsend' }).click();
});