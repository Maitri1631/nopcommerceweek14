$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Register.feature");
formatter.feature({
  "line": 1,
  "name": "Register",
  "description": "",
  "id": "register",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6085696700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should create account successfully",
  "description": "",
  "id": "register;user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enters following users details",
  "rows": [
    {
      "cells": [
        "payal",
        "patel",
        "payalpatel@gmail.com",
        "123456",
        "123456"
      ],
      "line": 8
    },
    {
      "cells": [
        "chandni",
        "patel",
        "chandnipatel@gmail.com",
        "123456",
        "123456"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 62667300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsDef.i_click_on_register_link()"
});
formatter.result({
  "duration": 588437100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepsDef.i_enters_following_users_details(DataTable)"
});
formatter.result({
  "duration": 22036861600,
  "status": "passed"
});
formatter.after({
  "duration": 619507800,
  "status": "passed"
});
});