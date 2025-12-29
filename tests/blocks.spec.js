import { test, expect } from '@playwright/test';

/**
 * Tests for Edge Delivery Services blocks
 */
test.describe('Blocks', () => {
  test.describe('Hero Block', () => {
    test('should have proper styling', async ({ page }) => {
      await page.goto('/');
      
      const heroBlock = page.locator('.hero');
      await expect(heroBlock).toBeVisible();
      
      // Take screenshot for visual regression
      await expect(heroBlock).toHaveScreenshot('hero-block.png');
    });
  });
});

