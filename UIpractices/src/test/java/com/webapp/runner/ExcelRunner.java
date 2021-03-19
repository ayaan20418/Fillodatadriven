package com.webapp.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(

	features = "./src/main/java/com/webapp/features/readexcel.feature",

		glue = { "com/webapp/steps" },

		dryRun = false,

		plugin = { "pretty", "html:target/Html-output", "junit:target/Junit-output/index.xml",
				"json:target/cucumber/cucumber.json" },

		monochrome = true,
		strict=true,
	tags = "@tag1"

)





public class ExcelRunner extends AbstractTestNGCucumberTests{

}
