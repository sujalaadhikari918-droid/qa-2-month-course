#Smoke Testing

--> Testing the basic and critical feature of an application before doing thorough and regression testing

B-->Buld Verification Testing
C-->Confident Testing
D-->Dry-run Testing
S-->Skim Testing
S-->Sanity Testing
H-->Health check of the product
P-->Positive Testing

##Formal Smoke Testing

--> Are we going to accept this build or not?

--> If 15 passed out of 20 basicand critical features, we have to reject the build

--> Acceptable or not, developers are sent the report about test cases

##Informal Smoke Testing

--> No documentation/smoke test cases

##Difference between smoke and sanity testing

Smoke--> Before fix, basica nd critical (important features), quick check that the major features are not broken after a build or deployment, is the application stable enough for testing?, for eg: login page, checkout and payment page

Sanity--> after fix, checking all the features after bug fixing

#Funtional Testing

--> How your features should work?

--> We always first do functional testing

--> Functional tresting can be done by manual testing

--> Component testing-->Integration testing-->System Testing-->Acceptance Testing-->Smoke Testing-->Resgression Testing-->Re-testing

#Sanity Testing

--> We do sanity testing to make sure new functionalities in the application or bug fixes are working perfectly fine or not

--> Subset of regression Testing

--> Usually not automation

--> Documentation always not necessary

--> Both negative and positive testing

--> Usually performed only by testers

--> Narrow and deep testing

--> Once build is stable

--> Focused testing after a small fix or feature change

--> Did this change/fix work correctly?

#Regression Testing

-->    Testing the unchaged feature of an application to make sure that changes like adding a feature, deleting a feature or modification or fixing the defect is not impacting the unchanged feature of application is regression testing

##Unit Regression testing

--> Testing only the changes and modifcation done  by developers

##Regional Regression Testing

--> Testing the changed part and also the impacted areas (After impact analysis meeting)

##Full Regression Testing

--> Testing the chnaged feature and also the rest of the application

##When should we go for full regression testing?

--> When developer has done some changes in most of the modules, do not waste time on finding the impacted areas, go for full regression testing

--> If there has been made changes in the root of projects, then go for regression testing
