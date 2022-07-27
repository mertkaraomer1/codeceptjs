Feature('login');

Scenario('yanlış kullanıcı adı', ({ I }) => {
    I.amOnpage("https://amazon.com.tr");
    I.waitForElement("//div[@id='nav-singin-tooltip']");
    I.click("//div[@id='nav-singin-tooltip']");
    I.fillFieldI("//input[@id='ap_email']","dddd");
    I.click("//input[@id='continue']");
    I.seeElement("//*[contains(test(),'cannot find')]");


});
