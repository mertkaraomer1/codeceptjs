Feature('login');

Scenario('yanlış kullanıcı adı', ({ I }) => {
    I.amOnpage("https://amazon.com.tr");
    I.waitForElement("//div[@id='nav-singin-tooltip']");
    I.click("//div[@id='nav-singin-tooltip']");
    I.fillFieldI("//input[@id='ap_email']","dddd");
    I.click("//input[@id='continue']");
    I.seeElement("//*[contains(test(),'cannot find')]");


});
Scenario('doğru kullanıcı adı yanlış şifre @testcase2', ({ I }) => {
    I.amOnpage("https://amazon.com.tr");
    I.waitForElement("//div[@id='nav-singin-tooltip']");
    I.click("//div[@id='nav-singin-tooltip']");
    I.waitForElement("//input[@id='ap_email']");
    I.fillField("//input[@id='ap_email']","mert.karaomer@ogr.sakarya.edu.tr");
    I.waitForElement("//input[@id='continue']");
    I.click("//input[@id='continue']");
    I.waitForElement("//input[@id='ap_password']");
    I.fillField("//input[@id='ap_password']","qweer");
    I.waitForElement("//input[@id='signInSubmit']");
    I.click("//input[@id='signInSubmit']");
    I.seeElement("//*[contains(test(),'ımportant Message')]");


});
Scenario('doğru kullanıcı adı doğru şifre @testcase3', ({ I }) => {
    I.amOnpage("https://amazon.com.tr");
    I.waitForElement("//div[@id='nav-singin-tooltip']");
    I.click("//div[@id='nav-singin-tooltip']");
    I.waitForElement("//input[@id='ap_email']");
    I.fillField("//input[@id='ap_email']","mert.karaomer@ogr.sakarya.edu.tr");
    I.waitForElement("//input[@id='continue']");
    I.click("//input[@id='continue']");
    I.waitForElement("//input[@id='ap_password']");
    I.fillField("//input[@id='ap_password']","Mert.4141");
    I.waitForElement("//input[@id='signInSubmit']");
    I.click("//input[@id='signInSubmit']");
    I.seeElement("//*[contains(test(),'Hello Mert')]");


});
