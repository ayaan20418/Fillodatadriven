package com.webapp.steps;

import java.util.Map;

import com.webapp.utility.ExcelHandler;

import cucumber.api.java.en.Given;

public class ReadExcelStep {
	
	
	
	@Given("^I want to read mentioned testdata from the TestCase_(\\d+)$")
	public void i_want_to_read_mentioned_testdata_from_the_TestCase_(int arg1) throws Throwable {

		Map<String,String> TestDataMapIn=ExcelHandler.getTestDataInMap("./resources-testdata/TestData.xlsx", "TestData01", "TestCase_001");
		System.out.println(TestDataMapIn.get("Skill_7"));

	
	
	}


}
