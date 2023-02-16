@regression
Feature: Login Test
  As user I want to login into nop commerce website

  Background:
    Given I am on homepage
    When I click on login link


  Scenario: User should login successfully with vaild credentials
    And I should navigate to login page successfully
    And I enter email "maitrypatel@gmail.com"
    And I enter password "123456"
    And I Click on Login button
    Then I should login successfully

  Scenario Outline:  Verify the error message with invalid credentials
    And  I enter email "<email>"
    And I enter password "<password>"
    And I Click on Login button
    Then I should see the error message "<errormessage>"
    Examples:
      | email              | password  | errormessage                                                                                |
      | mkpatel@gmail.com | 456786565 | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
      | md@gmail.com       | 456464    | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |

