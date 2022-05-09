const { By } = require('selenium-webdriver');
const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function openChromeTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:5000');

    driver.manage().setTimeouts({implicit: 0.5 })

    let searchButton = await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/a[1]'));
    await searchButton.click();

    let firstName = await driver.findElement(By.xpath('//*[@id="fname"]'));
    await firstName.sendKeys('Sarah');

    let lastName = await driver.findElement(By.xpath('//*[@id="lname"]'));
    await lastName.sendKeys('Johnson');

    let userName = await driver.findElement(By.xpath('//*[@id="username"]'));
    await userName.sendKeys('sarahj17');

    let bio = await driver.findElement(By.xpath('//*[@id="bio"]'));
    await bio.sendKeys("Hi I'm Sarah Johnson! I love to hang out with friends when I can! :)");

    let email = await driver.findElement(By.xpath('//*[@id="email"]'));
    await email.sendKeys('sjohnson2@gmail.com');

    let password = await driver.findElement(By.xpath('//*[@id="password"]'));
    await password.sendKeys('sjohn123');
    
    let password2 = await driver.findElement(By.xpath('//*[@id="password2"]'));
    await password2.sendKeys('sjohn123');

    await driver.findElement(By.xpath('//*[@id="female"]')).click();

    await driver.findElement(By.xpath('//*[@id="organized"]')).click();

    await driver.findElement(By.xpath('//*[@id="party"]')).click();

    await driver.findElement(By.xpath('//*[@id="gym"]')).click();

    await driver.findElement(By.xpath('//*[@id="horror"]')).click();

    await driver.findElement(By.xpath('//*[@id="mn"]')).click();

    let submitButton = await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/form/button'));
    await submitButton.click(); 

    let goEmail = await driver.findElement(By.xpath('//*[@id="email"]'));
    await goEmail.sendKeys('sjohnson2@gmail.com');

    let goPassword = await driver.findElement(By.xpath('//*[@id="password"]'));
    await goPassword.sendKeys('sjohn123');
    
    let loginButton = await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/form/button'));
    await loginButton.click();
    //clicks on roommates page which displays roommates 
    let roommateButton = await driver.findElement(By.xpath('/html/body/div[1]/nav/ul/li[3]/a'));
    await roommateButton.click();
    //selects females only 
    await driver.findElement(By.xpath('/html/body/div[1]/div[2]/h2[2]/a')).click();

})();