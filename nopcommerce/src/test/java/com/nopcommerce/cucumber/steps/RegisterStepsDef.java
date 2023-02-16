package com.nopcommerce.cucumber.steps;

import com.nopcommerce.pages.HomePage;
import com.nopcommerce.pages.LoginPage;
import com.nopcommerce.pages.RegisterPage;
import cucumber.api.DataTable;
import cucumber.api.java.en.When;

import java.util.List;


public class RegisterStepsDef {
    @When("^I click on register link$")
    public void i_click_on_register_link() throws Throwable {
        new HomePage().clickOnRegisterLink();
    }

    @When("^I enters following users details$")
    public void i_enters_following_users_details(DataTable dataTable) throws InterruptedException {
        List<List<String>> data = dataTable.raw();//3
        for (int i = 0; i < data.size(); i++) {// loop will run 3 times

            new RegisterPage().registerr(data.get(i).get(0), data.get(i).get(1), data.get(i).get(2), data.get(i).get(3), data.get(i).get(4));
            new HomePage().clickOnRegisterLink();
        }
    }
}
