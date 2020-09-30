@Regression
Feature: To test all the functionality of OrangeHRM Demo App

  @Login
  Scenario: To test login feature from OrangeHRM App
    Given the user launches the url
    When The user enters the firstname and lastname
    |imtiaz|basha|
    Then the user send the username from the testdata_01
    And the user click marshial status
    And the user click the hobby status
    Then Enter the contact num of testdata_01
    And Enter the mail of user from testdata_01