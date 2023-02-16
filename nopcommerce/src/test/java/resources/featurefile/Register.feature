Feature: Register

  @Register
  Scenario: User should create account successfully
    Given I am on homepage
    When I click on register link
    And I enters following users details
      | payal | patel | payalpatel@gmail.com | 123456 | 123456 |
      | chandni | patel | chandnipatel@gmail.com | 123456 | 123456 |