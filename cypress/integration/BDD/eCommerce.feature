Feature: End to end E-Commerce validation

@Regression
Scenario: E-Commerce products delivery

Given I open ECommerce Page
When I add items to cart
And Validate the total prices
Then Select the country submit and verify

@Smoke
Scenario: Filling the form up to shop

Given I open ECommerce Page
When I fill the form details
| name  | gender |
| Levic | Female |
Then Validate the forms behavior
And Select the shop page 