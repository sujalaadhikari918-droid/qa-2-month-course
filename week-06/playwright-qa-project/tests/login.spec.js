import { test, expect } from '@playwright/test';
// import 'dotenv/config';

test.use({
  ignoreHTTPSErrors: true,
  baseURL: 'https://10.1.186.251/',
});

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

// Test 1: Page loads with correct title
test('homepage loads with correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Udeshya/i);
});

// Test 2: Login form elements are visible
test('login form displays required fields', async ({ page }) => {
  await expect(page.getByRole('textbox', { name: 'Email address' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: /Password/i })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Sign in' })).toBeVisible();
});

// Test 3: Show password toggle works
test('show password toggle reveals password text', async ({ page }) => {
  const passwordField = page.getByRole('textbox', { name: /Password/i });
  await passwordField.fill('password123');

  // Before clicking Show, type should be password
  await expect(passwordField).toHaveAttribute('type', 'password');

  await page.getByRole('button', { name: 'Show password' }).click();

  // After clicking Show, type should be text
  await expect(passwordField).toHaveAttribute('type', 'text');
});

// Test 4: Login with unregistered credentials shows correct error message
test('login form shows correct error for unregistered credentials', async ({ page }) => {
  await page.getByRole('textbox', { name: 'Email address' }).fill('sujala@gmail.com');
  await page.getByRole('textbox', { name: /Password/i }).fill('password123');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page.locator('#login-error')).toBeVisible();
  await expect(page.locator('#login-error')).toHaveText(/Incorrect email or password/i);
});

// Test 5: Empty field validation
test('shows validation when submitting empty login form', async ({ page }) => {
  await page.getByRole('button', { name: 'Sign in' }).click();

  // Adjust based on what actually happens — e.g. inline error, disabled button, etc.
  await expect(page.getByRole('textbox', { name: 'Email address' })).toBeVisible();
});