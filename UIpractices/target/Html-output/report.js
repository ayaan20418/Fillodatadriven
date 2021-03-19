$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/main/java/com/webapp/features/readexcel.feature");
formatter.feature({
  "line": 1,
  "name": "This process is to read excel using cucumber",
  "description": "",
  "id": "this-process-is-to-read-excel-using-cucumber",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "To read particular data",
  "description": "",
  "id": "this-process-is-to-read-excel-using-cucumber;to-read-particular-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I want to read mentioned testdata from the TestCase_001",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "001",
      "offset": 52
    }
  ],
  "location": "ReadExcelStep.i_want_to_read_mentioned_testdata_from_the_TestCase_(int)"
});
formatter.result({
  "duration": 1571081400,
  "status": "passed"
});
});