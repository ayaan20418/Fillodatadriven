package com.webapp.steps;

import com.webapp.utility.ExcelHandler;
import com.webapp.utility.FunctionLibrary;

import cucumber.api.DataTable;
import cucumber.api.Scenario;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.List;
import java.util.Map;

import com.webapp.pages.Form;


public class OrangeSteps extends FunctionLibrary {
	Form form;

   Scenario scenerio;
	@Given("the user launches the url")
	public void the_user_launches_the_url() {
		FunctionLibrary.browserFactory();
	}
	
    @When("The user enters the firstname and lastname")
    public void The_user_enters_the_username(DataTable table) {
    	
    	List<String >  credents =table.asList(String.class);
		String crnd1=credents.get(0);
		String crnd2=credents.get(1);
    	form =new Form();
	    form.validatename(crnd1,crnd2);  
	   
     }
    
    @Then("^the user send the username from the testdata_(\\d+)$")
    public void the_user_send_the_username_from_the_testdata_(int arg1) throws Throwable {
    	
    	Map<String,String> TestDataMapIn=ExcelHandler.getTestDataInMap("./resources-testdata/TestData.xlsx", "TestData01", "TestCase_002");
		System.out.println(TestDataMapIn.get("User Name"));   	
		form =new Form();
    	form.usernam(TestDataMapIn.get("User Name")); 
    	
    }
    
    @Then("^the user click marshial status$")
    public void the_user_click_marshial_status() throws Throwable {
		form =new Form();
        form.Marshialradio();
    	
    }

    @Then("^the user click the hobby status$")
    public void the_user_click_the_hobby_status() throws Throwable {

		form =new Form();
		form.Hobbyradio();

    }

    /*Then select the required country

	@Then("^select the required country$")
	public void select_the_required_country() throws Throwable {
		form =new Form();
		form.SelectCountry(6);
	}
*/
    
    @Then("^Enter the contact num of testdata_(\\d+)$")
    public void enter_the_contact_num_of_testdata_(int arg1) throws Throwable {
    	Map<String,String> TestDataMapIn=ExcelHandler.getTestDataInMap("./resources-testdata/TestData.xlsx", "TestData01", "TestCase_002");

		System.out.println(TestDataMapIn.get("Phone Number"));   	
		form =new Form();
    	form.mobil(TestDataMapIn.get("Phone Number"));; 

    }

    @Then("^Enter the mail of user from testdata_(\\d+)$")
    public void enter_the_mail_of_user_from_testdata_(int arg1) throws Throwable {

    	Map<String,String> TestDataMapIn=ExcelHandler.getTestDataInMap("./resources-testdata/TestData.xlsx", "TestData01", "TestCase_002");

		System.out.println(TestDataMapIn.get("Email"));   	
		form =new Form();
		form.MailId(TestDataMapIn.get("Email"));
    }


    
    

}
