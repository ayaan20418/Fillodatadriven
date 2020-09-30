package com.webapp.pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.Factory;

import com.webapp.utility.FunctionLibrary;

import cucumber.api.java.en.Then;

public class Form  extends FunctionLibrary {

	public Form() {

		PageFactory.initElements(driver,this);	
	}
	
	@FindBy(id="firstname")
	WebElement first;
	
	@FindBy(id="lastname")
	WebElement last;
	
	@FindBy(id="username")
	WebElement name;
	
	@FindBy(xpath="//input[@type='radio']")
	List<WebElement> radio;
	
	@FindBy(xpath="//label[@class='checkbox-inline']")
	List<WebElement> radios;
	
	@FindBy(xpath ="//select[@class='form-control dropdown-header]")
	WebElement country;
	
	@FindBy(xpath="//input[@type='number']")
	WebElement mobilnum;
	
	@FindBy(id="email")
	WebElement mail;
	
	

public void validatename(String name1,String name2) {
	first.sendKeys(name1);
	last.sendKeys(name2);
}	
		
public void usernam(String uname) {
name.sendKeys(uname);
	
}

public void Marshialradio() {
	
	for(int i=0;i<radio.size();i++) {
		
		radio.get(1).click();
		
	}
}
	
	public void Hobbyradio() {
		for(int i=0;i<radios.size();i++) {		
			radios.get(1).click();			
		}


}
	
	
	public void SelectCountry(int num) {
		

		Select options= new Select(country);
		
		options.selectByIndex(num);
	}
	
	public void mobil(String num) {
		
		mobilnum.sendKeys(num);

	}
	
	public void MailId(String maill) {

	mail.sendKeys(maill);
	}

}
