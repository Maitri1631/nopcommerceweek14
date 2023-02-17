$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer page",
  "description": "",
  "id": "computer-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6241937700,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify that user should Add them to cart successfully",
  "description": "",
  "id": "computer-page;verify-that-user-should-add-them-to-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I Click on Computer Tab",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I Click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Product Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Select processor \"\u003c2.2 GHz Intel Pentium Dual-Core E2200\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Select  Ram \"\u003c2 GB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Select  HDD \"\u003c320 GB\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Select OS \"\u003cVista Home [+$50.00]\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Select Software \"\u003cMicrosoft Office [+$50.00]\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.i_Click_on_Computer_Tab()"
});
formatter.result({
  "duration": 517637900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.i_Click_on_desktop_link()"
});
formatter.result({
  "duration": 351819300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.i_click_on_Product_Build_your_own_computer()"
});
formatter.result({
  "duration": 709824900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c2.2 GHz Intel Pentium Dual-Core E2200\u003e",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 20129108000,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with text: \u003c2.2 GHz Intel Pentium Dual-Core E2200\u003e\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:153)\r\n\tat com.nopcommerce.utils.Utility.selectByVisibleTextFromDropDown(Utility.java:146)\r\n\tat com.nopcommerce.pages.BuildYourOwnComputerPage.SelectProcesser(BuildYourOwnComputerPage.java:64)\r\n\tat com.nopcommerce.cucumber.steps.ComputerSteps.iSelectProcessor(ComputerSteps.java:38)\r\n\tat ✽.And I Select processor \"\u003c2.2 GHz Intel Pentium Dual-Core E2200\u003e\"(Computer.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c2 GB\u003e",
      "offset": 15
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003c320 GB\u003e",
      "offset": 15
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cVista Home [+$50.00]\u003e",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cMicrosoft Office [+$50.00]\u003e",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.i_click_on_Add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.verify_message_The_product_has_been_added_to_your_shopping_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 173857000,
  "error_message": "java.lang.NullPointerException\r\n\tat com.cucumber.listener.Reporter.addScreenCaptureFromPath(Reporter.java:84)\r\n\tat com.nopcommerce.cucumber.Hooks.tearDown(Hooks.java:25)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});