// @ts-check

import { test, expect } from '@playwright/test';

test.describe('example', () => {

    test('has title', async ({ page }) => {

        // Go to the page URL. Playwright waits for page to reach the load state.
        await page.goto('https://playwright.dev/');

        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Playwright/);

    });

    test('get started link', async ({ page }) => {

        await page.goto('https://playwright.dev/');

        // Click the get started link.
        await page.getByRole('link', { name: 'Get started' }).click();

        // Expects page to have a heading with the name of Installation.
        await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

    });

});
