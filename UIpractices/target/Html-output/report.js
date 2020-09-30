$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/main/java/com/webapp/features/login.feature");
formatter.feature({
  "line": 2,
  "name": "To test all the functionality of OrangeHRM Demo App",
  "description": "",
  "id": "to-test-all-the-functionality-of-orangehrm-demo-app",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "To test login feature from OrangeHRM App",
  "description": "",
  "id": "to-test-all-the-functionality-of-orangehrm-demo-app;to-test-login-feature-from-orangehrm-app",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user launches the url",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The user enters the firstname and lastname",
  "rows": [
    {
      "cells": [
        "imtiaz",
        "basha"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the user send the username from the testdata_01",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the user click marshial status",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user click the hobby status",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter the contact num of testdata_01",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Enter the mail of user from testdata_01",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeSteps.the_user_launches_the_url()"
});
formatter.result({
  "duration": 24243443200,
  "status": "passed"
});
formatter.match({
  "location": "OrangeSteps.The_user_enters_the_username(DataTable)"
});
formatter.result({
  "duration": 6362726400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 45
    }
  ],
  "location": "OrangeSteps.the_user_send_the_username_from_the_testdata_(int)"
});
formatter.result({
  "duration": 21534163000,
  "status": "passed"
});
formatter.match({
  "location": "OrangeSteps.the_user_click_marshial_status()"
});
formatter.result({
  "duration": 1758195700,
  "status": "passed"
});
formatter.match({
  "location": "OrangeSteps.the_user_click_the_hobby_status()"
});
formatter.result({
  "duration": 2678171200,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003clabel class\u003d\"checkbox-inline\"\u003e...\u003c/label\u003e is not clickable at point (435, 24). Other element would receive the click: \u003ca href\u003d\"/Students/...\"\u003eForm\u003c/a\u003e\n  (Session info: chrome\u003d85.0.4183.121)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-GAOM8LM\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\BASHA\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58706}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 14862b99f4b9413e2029adad281b2130\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.webapp.pages.Form.Hobbyradio(Form.java:69)\r\n\tat com.webapp.steps.OrangeSteps.the_user_click_the_hobby_status(OrangeSteps.java:59)\r\n\tat ✽.And the user click the hobby status(./src/main/java/com/webapp/features/login.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 34
    }
  ],
  "location": "OrangeSteps.enter_the_contact_num_of_testdata_(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 37
    }
  ],
  "location": "OrangeSteps.enter_the_mail_of_user_from_testdata_(int)"
});
formatter.result({
  "status": "skipped"
});
});