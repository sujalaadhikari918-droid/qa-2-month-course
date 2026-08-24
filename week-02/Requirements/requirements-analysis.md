Requirement analysis

#Application: SauceDemo

#Modules

1. Login
2. Shopping cart
3. C heckout

#Login Module

##Requirement
User should be able to login using valid credentials.

##What should happen?

1. Valid credentials should be accepted
2. User should be authenticated
3. User should be redirected to the products page

##What should not happen?

1. Invalud credetials should not be accepted
2. Empty required fields should not allow login
3. The appication should not crash
4. User should not be redicted to an incorrect page

##Risks

1. Users may be unable to access the application
2. Unauthorized access could occur if invalid credentails are accepted
3. Incorrect error handling may confuse users

##Acceptance criteria

1. Valid username and password are accepted
2. Invalis credentails are rejected
3. Required fields are validated
4. Successful login redirects the user to the product page

#Shopping Cart Module

##Requirement
The user should be able to add and remove products from the shopping cart.

##What should happen?

1. User should be able to add product
2. Added product should update correctly
3. Cart count should update correctly
4. User should be able to remobe the product
5. Correct prpduct information should get displayed

##What should not happen?

1. An unselected product should not appear
2. Incorrect prduct information should not be displayed
3. Cart count shoud not be incorrect
4. Removing one product should not remove another product

##Risks

1. Wrong products may be ordered
2. Cart count may be incorrect
3. Product prices may be incorrect
4. Cart contents may not match user selection

##Acceptance criteria

1. Product can be added to the cart
2. Added products appear correctly
3. Products can be removed
4. Product information remains accurate

#Checkout Module

##Requirement
The user should be able to complete checkout using valid customer information and prodcuts in the cart

##What should happen?

1. User should be able to enter required information
2. Valid information should be accepted
3. User should proceed to checkout overview
4. Corrrect products should be displayed
5. Total should be calculaed correctly
6. User shoud be able to complete the order
7. Confirmation should be displayed

##What should not happen?

1. Checkout should not proceed with missing required information
2. Incorrect products should not appear
3. Incorrect totals should not be displayed
4. An order should not be completed with invalid information

##Risks

1. Incorret order could be placed
2. Incorrect total or price could be displayed
3. User may be unable to complete checkout
4. Incorrect customer information could be submitted

##Acceptance criteria

1. Required customer infromation is validated
2. Valid information allows the user to proceed
3. Cart contents are displayed correctly
4. Prices and totals are calculated correctly
5. User can complete the order
6. Order confirmation is displayed
