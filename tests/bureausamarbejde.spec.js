import { test, expect } from '@playwright/test';

async function openAndClose(page, locator) {
  const popupPromise = page.waitForEvent('popup');
  await locator.click();
  const popup = await popupPromise;
  await popup.close();
}


test('bureausamarbejde', async ({ page }) => {
  await page.goto('https://webnorth.com/bureausamarbejde/');
  await page.getByRole('button', { name: 'Acceptér alle' }).click();

  await expect(page.getByRole('heading', { name: 'Et teknisk samarbejde, der lø' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'Hos Webnorth samarbejder vi' }).nth(3)).toBeVisible();

  await page.getByRole('link', { name: 'Værdi' }).click();
  await expect(page.locator('#approach-category-vaerdi > .bento-grid-slider-wrap > .swiper > .swiper-wrapper')).toBeVisible();
  await page.locator('#main').getByRole('link', { name: 'Services' }).click();
  await expect(page.locator('#approach-category-services > .bento-grid-slider-wrap > .swiper > .swiper-wrapper')).toBeVisible();
  await page.locator('.swiper-pagination > span:nth-child(2)').click();
  await page.locator('#approach-category-services > .swiper-pagination > span').first().click();
  await page.getByRole('link', { name: 'Fokus' }).click();
  await expect(page.locator('.swiper-wrapper').first()).toBeVisible();

  await expect(page.locator('section').filter({ hasText: 'KUNDERSe et udvalg af vores' })).toBeVisible();

  await openAndClose(page, page.getByRole('link', { name: 'Klienthttps://arnejacobsen.' }));
  await openAndClose(page, page.getByRole('link', { name: 'Klienthttps://atlab.at/' }));
  await openAndClose(page, page.getByRole('link', { name: 'Klienthttps://aab.dk/' }));
  await openAndClose(page, page.getByRole('link', { name: 'Klienthttps://cctravel.dk/' }));
  
  await expect(page.getByRole('heading', { name: 'Webnorth har en stærk kultur' })).toBeVisible();

});