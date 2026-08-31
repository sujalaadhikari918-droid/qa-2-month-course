
# Week 3 – Functional, Smoke, Sanity, Regression & Negative Testing

## Overview

Week 3 focused on learning how to execute manual testing in a structured and professional manner. The main goal was to understand how different testing approaches are used during the software development and testing lifecycle and how to identify defects through positive, negative, and regression testing.

During this week, I practiced testing the **Connectia** application and worked with smoke testing, functional testing, negative testing, regression testing, bug reporting, and test execution reporting.

---

## Weekly Goal

- Understand the purpose and differences between Smoke, Functional, Sanity, Regression, and Negative Testing.
- Learn how to execute test cases systematically.
- Practice testing both valid and invalid inputs.
- Identify defects and document them using bug reports.
- Perform regression testing after application changes and bug fixes.
- Prepare a test execution summary based on actual test results.

---

## Topics Covered

### 1. Smoke Testing

Smoke testing is a quick and high-level check performed to verify that the critical functionality of an application is working and that the build is stable enough for further testing.

I created and executed a smoke checklist covering critical Connectia functionality such as:

- Application launch
- Registration
- Login
- Home page
- Profile
- Edit Profile
- Navigation
- Logout
- Session/access behavior

**Deliverable:**

- Smoke Testing Checklist

---

### 2. Functional Testing

Functional testing was performed to verify that application features behave according to their expected functionality.

The testing focused on the functionality that was available and implemented in the Connectia application.

Areas tested included:

- Registration
- Login
- Home
- Profile
- Edit Profile
- Navigation
- Logout

Test cases were executed and their results were recorded as:

- PASS
- FAIL
- BLOCKED

**Deliverable:**

- Functional Test Cases
- Functional test execution results

---

### 3. Negative Testing

Negative testing was performed to verify how the application handles invalid, unexpected, or incorrect inputs and user actions.

Examples of negative testing included:

- Empty fields
- Invalid email formats
- Incorrect credentials
- Mismatched passwords
- Duplicate registration data
- Special characters
- Very long inputs
- Repeated button clicks
- Accessing protected pages after logout

The purpose was to verify that the application validates incorrect input and handles unexpected situations appropriately.

**Deliverable:**

- Negative Test Cases
- Negative Test Execution Results

---

### 4. Regression Testing

Regression testing was performed after changes and bug fixes were introduced to Connectia.

Previously working functionality was retested to ensure that the changes did not introduce new defects or break existing features.

The regression testing focused on important application flows such as:

- Registration
- Login
- Home
- Profile
- Edit Profile
- Navigation
- Logout
- Session behavior

**Deliverable:**

- Regression Checks
- Regression Test Execution Results

---

### 5. Bug Reporting

Defects identified during testing were documented using structured bug reports.

Bug reports included information such as:

- Bug ID
- Bug title
- Module
- Environment
- Steps to reproduce
- Expected result
- Actual result
- Severity
- Priority
- Bug status
- Retest result

Identified issues were communicated for resolution and the fixed functionality was retested.

---

## Testing Process

The following testing process was followed during Week 3:

1. Review the available application functionality.
2. Prepare smoke testing checklist.
3. Execute critical smoke tests.
4. Execute functional test cases.
5. Perform negative testing using invalid and unexpected inputs.
6. Identify and document defects.
7. Retest fixed defects.
8. Perform regression testing after application changes.
9. Record PASS, FAIL, and BLOCKED results.
10. Prepare the final test execution summary.
