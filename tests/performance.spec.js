import { test, expect } from '@playwright/test';

/**
 * Performance tests for Edge Delivery Services
 * Testing for the "keeping it 100" principle
 */
test.describe('Performance', () => {
  test('should load page quickly', async ({ page }) => {
    const startTime = Date.now();
    
    await page.goto('/');
    await page.waitForLoadState('load');
    
    const loadTime = Date.now() - startTime;
    
    // Page should load in under 2 seconds
    expect(loadTime).toBeLessThan(2000);
  });
});

