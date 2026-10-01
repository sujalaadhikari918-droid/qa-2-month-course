import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  baseURL: 'https://10.1.186.251/',
});

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});


// 1. Empty email
test('login validation - email is required', async ({ page }) => {

  await page.getByRole('textbox', { name: 'Email address' }).fill('');
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page.getByRole('textbox', { name: 'Email address' }))
    .toHaveJSProperty('validationMessage', 'Please fill out this field.');

});


// 2. Empty password
test('login validation - password is required', async ({ page }) => {

  await page.getByRole('textbox', { name: 'Email address' })
    .fill('test@gmail.com');

  await page.getByRole('textbox', { name: 'Password' }).fill('');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page.getByRole('textbox', { name: 'Password' }))
    .toHaveJSProperty('validationMessage', 'Please fill out this field.');

});


// 3. Both email and password empty
test('login validation - both fields are empty', async ({ page }) => {

  await page.getByRole('textbox', { name: 'Email address' }).fill('');
  await page.getByRole('textbox', { name: 'Password' }).fill('');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page.getByRole('textbox', { name: 'Email address' }))
    .toHaveJSProperty('validationMessage', 'Please fill out this field.');

});


// 4. Invalid email format
test('login validation - invalid email format', async ({ page }) => {

  await page.getByRole('textbox', { name: 'Email address' })
    .fill('abc.com');

  await page.getByRole('textbox', { name: 'Password' })
    .fill('Password123');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page.locator('input:invalid')).toHaveCount(1);

});


// 5. Unregistered / incorrect credentials
test('login validation - incorrect credentials', async ({ page }) => {

  await page.getByRole('textbox', { name: 'Email address' })
    .fill('wronguser@gmail.com');

  await page.getByRole('textbox', { name: 'Password' })
    .fill('WrongPassword123');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(
    page.locator('#login-error')
  ).toContainText('Incorrect email or password');

});


// 6. Email with spaces
test('login validation - email contains invalid spaces', async ({ page }) => {

  await page.getByRole('textbox', { name: 'Email address' })
    .fill('test @gmail.com');

  await page.getByRole('textbox', { name: 'Password' })
    .fill('Password123');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page.locator('input:invalid')).toHaveCount(1);

});


// 7. Password field should be masked
test('login validation - password is masked', async ({ page }) => {

  const password = page.getByRole('textbox', { name: 'Password' });

  await password.fill('Password123');

  await expect(password).toHaveAttribute('type', 'password');

});


// 8. Valid login
test('login validation - valid credentials allow login', async ({ page }) => {

  await page.getByRole('textbox', { name: 'Email address' })
    .fill('sujalaadhikari918@gmail.com');

  await page.getByRole('textbox', { name: 'Password' })
    .fill('Kathmandu$$123');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).not.toHaveURL('https://10.1.186.251/');

});