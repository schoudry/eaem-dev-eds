# Playwright Tests for Edge Delivery Services

This directory contains end-to-end tests for the Edge Delivery Services project using Playwright.

## Test Files

- **`homepage.spec.js`** - Tests for the homepage including Core Web Vitals
- **`blocks.spec.js`** - Tests for all EDS blocks (hero, cards, header, footer, etc.)
- **`performance.spec.js`** - Performance tests ensuring fast load times and optimization
- **`accessibility.spec.js`** - Accessibility tests for WCAG compliance

## Running Tests

### Install Dependencies

First, install Playwright and browsers:

```bash
npm install
npx playwright install
```

### Run All Tests

```bash
npm test
```

### Run Tests in UI Mode

```bash
npm run test:ui
```

### Run Tests in Headed Mode (See Browser)

```bash
npm run test:headed
```

### Run Specific Test File

```bash
npx playwright test tests/homepage.spec.js
```

### Debug Tests

```bash
npm run test:debug
```

### Generate Tests with Codegen

```bash
npm run test:codegen http://localhost:3000
```

## Test Configuration

Tests are configured in `playwright.config.js` with:

- **Multiple browsers**: Chrome, Firefox, Safari, Mobile Chrome, Mobile Safari
- **Auto-start dev server**: Automatically runs `aem up` before tests
- **Screenshots on failure**: Saved to `test-results/`
- **Video recordings**: Saved on failure for debugging
- **HTML reports**: Generated in `playwright-report/`

## Environment Variables

You can customize test behavior with environment variables:

```bash
# Use different base URL
BASE_URL=https://main--repo--owner.aem.page npm test

# Skip auto-starting the dev server
SKIP_SERVER=true npm test

# Run on CI
CI=true npm test
```

## Writing New Tests

### Basic Structure

```javascript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test('should do something', async ({ page }) => {
    await page.goto('/');
    
    // Your test code here
    await expect(page.locator('.selector')).toBeVisible();
  });
});
```

### Best Practices for EDS Testing

1. **Test Block Rendering**: Ensure blocks load and display correctly
2. **Check Performance**: Verify fast load times (<2s)
3. **Validate Accessibility**: Check semantic HTML and ARIA
4. **Test Responsiveness**: Use mobile viewports
5. **Verify Core Web Vitals**: LCP, FID, CLS
6. **Check Image Optimization**: WebP format, lazy loading

## Visual Regression Testing

To enable visual regression tests:

```javascript
await expect(page.locator('.hero')).toHaveScreenshot('hero-block.png');
```

First run will create baseline screenshots. Subsequent runs compare against baseline.

## Useful Commands

```bash
# Update snapshots
npx playwright test --update-snapshots

# Run only failed tests
npx playwright test --last-failed

# Run tests in specific browser
npx playwright test --project=chromium

# Show test report
npx playwright show-report
```

## CI/CD Integration

For GitHub Actions, add to `.github/workflows/test.yml`:

```yaml
name: Playwright Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - name: Install dependencies
        run: npm ci
      - name: Install Playwright
        run: npx playwright install --with-deps
      - name: Run tests
        run: npm test
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Edge Delivery Services Documentation](https://www.aem.live/docs/)
- [Keeping it 100 - Web Performance](https://www.aem.live/developer/keeping-it-100)

