import { test, expect } from '@playwright/test';

async function openAndClose(page, locator) {
  const popupPromise = page.waitForEvent('popup');
  await locator.click();
  const popup = await popupPromise;
  await popup.close();
}

test('homepage', async ({ page }) => {

  await page.goto('https://webnorth.com/');
  await page.getByRole('button', { name: 'Acceptér alle' }).click();

  await expect(page.locator('.hero__content')).toBeVisible();


  await expect(page.locator('.module-service-grid').first()).toBeVisible();

  await page.locator('.service-grid__overlay-link').first().click();
  await page.goBack();
  await page.locator('div:nth-child(2) > .service-grid__overlay-link').click();
  await page.goBack();
  await page.locator('div:nth-child(3) > .service-grid__overlay-link').click();
  await page.goBack();


  await expect(page.locator('section').filter({ hasText: 'Det siger kunderne om' })).toBeVisible();

  await page.getByText('KUNDE Imagine5 Det er nu et å').click();
  await page.getByText('KUNDE Imagine5 Det er nu et å').click();
  await page.getByText('Kunde Pravda Webnorth har væ').click();
  await page.getByText('Kunde Pravda Webnorth har væ').click();
  await page.getByText('Kunde Erik Magnussen Design').click();
  await page.getByText('Kunde Erik Magnussen Design').click();
  await page.getByText('Kunde Einar Willumsen').click();
  await page.getByText('Kunde Einar Willumsen').click();
  await page.getByText('Kunde Zealand Webnorth er en').click();
  await page.getByText('Kunde Zealand Webnorth er en').click();
  await page.getByText('Kunde Made a Mano Webnorth').click();
  await page.getByText('Kunde Made a Mano Webnorth').click();


  await expect(page.locator('div').filter({ hasText: 'WordPress spørgsmål? Ring' }).nth(2)).toBeVisible();

  await page.locator('.person.person--clickable > .person__image > .person__image-hover').click();
  await page.locator('.person.person--clickable > .person__image').click();


  await expect(page.locator('section').filter({ hasText: 'Udvalgte referencer' })).toBeVisible();

  await page.getByRole('link', { name: 'Arne Jacobsen Designs corporate website WordPress' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Gehl WordPress' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Imagine5 WooCommerce' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Boligforeningen AAB WordPress' }).click();
  await page.goBack();


  await expect(page.locator('section').filter({ hasText: 'KUNDERSe et udvalg af vores' })).toBeVisible();

  await openAndClose(page, page.getByRole('link', { name: 'Klienthttps://arnejacobsen.' }));
  await openAndClose(page, page.getByRole('link', { name: 'Klienthttps://atlab.at/' }));
  await openAndClose(page, page.getByRole('link', { name: 'Klienthttps://aab.dk/' }));
  await openAndClose(page, page.getByRole('link', { name: 'Klienthttps://cctravel.dk/' }));


  await expect(page.locator('div').filter({ hasText: 'WORDPRESS SOM VÆRKTØ' }).nth(4)).toBeVisible();
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


  await expect(page.getByRole('heading', { name: 'Hos Webnorth værdsætter vi' })).toBeVisible();

});

test('main menu', async ({ page }) => {
  
  await page.goto('https://webnorth.com/');
  await page.getByRole('button', { name: 'Acceptér alle' }).click();
  await page.getByRole('link', { name: 'Logo - Gå til forsiden' }).click();
  await page.getByRole('link', { name: 'WordPress' }).first().click();
  await page.getByRole('link', { name: 'Bureausamarbejde' }).click();
  await page.getByRole('link', { name: 'Service & Hosting' }).hover();
  await page.getByRole('link', { name: 'WordPress' }).nth(1).click();
  await page.getByRole('link', { name: 'Service & Hosting' }).hover();
  await page.getByRole('link', { name: 'WooCommerce' }).click();
  await page.getByLabel('Primary Menu').getByRole('link', { name: 'Cases' }).click();
  await page.getByRole('link', { name: 'Nyheder' }).click();
  await page.getByRole('link', { name: 'Om', exact: true }).hover();
  await page.getByRole('link', { name: 'Om os' }).click();
  await page.getByRole('link', { name: 'Om', exact: true }).hover();
  await page.getByRole('link', { name: 'Team', exact: true }).click();
  await page.getByRole('link', { name: 'Om', exact: true }).hover();
  await page.getByRole('link', { name: 'Karriere' }).click();
  await page.getByRole('link', { name: 'Kontakt' }).click();
  await page.getByRole('link', { name: 'en', exact: true }).click();
  await page.getByRole('link', { name: 'da', exact: true }).click();

});

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