#Locators

--> It tells playwrigth which element on the page are you talking about.

##Playright should know:

1. Which textbox should i fill?
2. which button should i click?

These are the job of a locator

##Locator priority

1. getByRole()
2. getByLabel()
3. getByPlaceholder()
4. getBtText()
5. getByTestID()
6. CSS
7. XPath

CSS and XPath only if necessary

##getByRole()

page.getByRole('button', {name: 'Login'}).click();

getByRole() --> what kind of element?/button

                   --> what is it'a name?/Login

which means, find the button named login

##Common Roles

1. button
2. textbox
3. link
4. checkbox
5. radio
6. heading
7. combobox

##Why getByRole() is good?

Suppose: <button class = "btn-primary-X82F"

--> A weak locator could depend on: btn-primary-X82F

If developer changes the class, test breaks

But: page.getByRole('button', {name: 'Login'}).click(); describes the element in meaningful way

##getByLabel()

--> Useful for forms:

getByLabel("Email");

getByLabel("Password");

##getByPlaceholder()

--> Sometimes input has a placeholder. For example, [Enter your email]

So, getByLabel('Enter your email') can locate it.

##getByText()

--> getByText('Dashboard').tobeVisible()

--> Verify the text Dashboard is visible

##getByTestId()

--> <button data-testId = "login-button> login</button

Then, getByTestId('login-button')

--> This is useful when normal user-facing locators are not available

##CSS locators

page.locator('#email')

page.locator('.login-button')

##Locator comparision

--> Suppose for a login button

Good --> page.getByRole('button', {name: 'Login'})

Potentially weaker --> page.locator('.btn')

Fragile --> page.locator('div.container>div.nth-child(2)>button')

--> if developer changes the layout, the selector can stop working

#Actions

##Common playwright actions

1. click()
2. fill()
3. check()
4. oncheck()
5. selectoption()
6. press()

##click()

--> await page.getByRole('button', {name: 'Login').click()

locate-act

##fill()

--> await page.getByLabel('Email').fill('sujalaadhikari918@gmail.com);

--> Fill the emaik field with the given email

##check()

-->   await page.getByRole('checkbox', {name: 'Remember. me'}).chec k();

##onCheck()

--> await page.getByRole('checkbox', {name: 'Remember me'}).onCheck();

##press()

--> await page.getByLabel('Search').press();

Find search field and then press enter

##selectOption()

--> For dropdowns: await page.getByLabel('Country').selec tOption('Nepal');

-->Actions must use await

##Assertion

--> Automation test is not complete just because it perfprmed actions. We need to check results too.

--> await expect('Target').assertion()

--> await expect(page.getByText('Dashboard')).tobevVisible()

##tobeVisible

--> I expect the dashboard to be visible

##tohavetext

--> await expect(page.getByRole('heading')).tohavetext('Dashboard')

--> I expect this heading to have the text dashboard

##toContainText()

--> await expect(page.getByRole('heading')).toContainText('Dash')

--> If the actual text is dashboard, it will pass because there is dash in it

##tpHaveURL

--> If successful login should send the user to dashboard, we can write

--> await except(page).toHaveURL()

--> Verify that the URL caontains dashboard 

##tobeEnabled()

--> Checks whether an  element is enabled

--> await expect (page.getByRole('button', {name; 'Submit'})).tobeEnabled()

##toHaveValue

--> Checks the value inside an input

--> await page.getByLabel('Email').fill('test123@gmail.com')

--> await page.getByLabel('Email').toHaveValue('test123@gmail.com')

##toHaveCount

--> Checks how many matching elements exists which is very useful for tables and rows 

--> await expect(page.getBYRole('row')).toHaveCount(5)

--> It expect 5 rows

##Locator + Actions + Assertion pattern

--> await page.getByLabel('Email').fill('test123@gmail.com')

--> await expect(page.getByText('Dashboard')).tobevVisible()

locate-->act-->verify
