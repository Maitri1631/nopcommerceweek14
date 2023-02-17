Feature: Computer page

  @computer
  Scenario: Verify that user should navigate computer page successfully
    Given I Click on Computer Tab
    And Verify Computer Text

    @sanity
  Scenario: Verify that user should Add them to cart successfully
    Given I Click on Computer Tab
    And I Click on desktop link
    And I click on Product Build your own computer
    And I Select processor "2.2 GHz Intel Pentium Dual-Core E2200"
    And I Select  Ram "2 GB"
    And I Select  HDD "320 GB"
    And I Select OS "Vista Home [+$50.00]"
    And I Select Software "Microsoft Office [+$50.00]"
    And I click on Add to cart button
    Then Verify message The product has been added to your shopping cart

