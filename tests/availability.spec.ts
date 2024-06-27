import { test, expect } from '@playwright/test';

const PANTOMIMA_URL = 'https://pantomimafull.com/actuaciones/'
const TICKET_URL = 'https://entradas.gruposmedia.com/entradas/comprarEvento?idEvento=7924'
test('website is NOT updated', async ({ page }) => {
  await page.goto(PANTOMIMA_URL);
  const container = page.locator('.post-content')
  await expect(container).toContainText("22 Alicante  — Teatro Principal — PRÓXIMAMENTE");
});

test('tickets are not available', async ({ page }) => {
  await page.goto(TICKET_URL);
  const title = page.getByRole('heading', { name: 'Event is not available for' })
  await expect(title).toContainText("Event is not available for sale");
}); 
