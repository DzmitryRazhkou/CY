Feature: End to end E-Commerce validation

Scenario: E-Commerce products delivery

Given I open ECommerce Page
When I add items to cartd
And Validate the total prices
Then Select the country submit and verify