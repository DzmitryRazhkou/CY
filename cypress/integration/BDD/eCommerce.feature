Feature: End to end ECommerce validation

Scenario: ECommerce products delivery

Given I open ECommerce Page
When I add items to cart
And Validate the total prices
Then Select the country submit and verify