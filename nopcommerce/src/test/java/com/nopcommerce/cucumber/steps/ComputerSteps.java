package com.nopcommerce.cucumber.steps;

import com.nopcommerce.pages.BuildYourOwnComputerPage;
import com.nopcommerce.pages.ComputerPage;
import com.nopcommerce.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class ComputerSteps {
    @Given("^I Click on Computer Tab$")
    public void i_Click_on_Computer_Tab() {
            new HomePage().clickOnComputers();
    }

    @And("^Verify Computer Text$")
    public void verify_Computer_Text() {
        String expectedCompuetText= "Computers";
        Assert.assertEquals(expectedCompuetText, new HomePage().VerifyComputersText());
    }

    @And("^I Click on desktop link$")
    public void i_Click_on_desktop_link() {
            new ComputerPage().ClickonDesktop();
        String expectedDesktopLink ="Desktops";
        Assert.assertEquals(expectedDesktopLink, new ComputerPage().VerifyDesktoplink());
    }

    @And("^I click on Product Build your own computer$")
    public void i_click_on_Product_Build_your_own_computer() {
            new BuildYourOwnComputerPage().ClickonProduct();
    }

    @And("^I Select processor \"([^\"]*)\"$")
    public void iSelectProcessor(String processor)  {
       new BuildYourOwnComputerPage().SelectProcesser(processor);
    }


    @And("^I Select  Ram \"([^\"]*)\"$")
    public void iSelectRam(String ram)  {
       new BuildYourOwnComputerPage().SelectRAM(ram);
    }


    @And("^I Select  HDD \"([^\"]*)\"$")
    public void iSelectHDD(String hdd)  {
       new BuildYourOwnComputerPage().ClickonHDD(hdd);
    }

    @And("^I Select OS \"([^\"]*)\"$")
    public void iSelectOS(String os)  {
       new BuildYourOwnComputerPage().ClickonOS(os);
    }

    @And("^I Select Software \"([^\"]*)\"$")
    public void iSelectSoftware(String software)  {
       new BuildYourOwnComputerPage().ClickonSoftware(software);
    }

    @And("^I click on Add to cart button$")
    public void i_click_on_Add_to_cart_button() {
        new BuildYourOwnComputerPage().ClickonADdToCart();
    }

    @Then("^Verify message The product has been added to your shopping cart$")
    public void verify_message_The_product_has_been_added_to_your_shopping_cart() {
        String ExpectValidationmsg="The product has been added to your shopping cart";
        Assert.assertEquals(ExpectValidationmsg, new BuildYourOwnComputerPage().VerifyValidationMsg());
    }



}
