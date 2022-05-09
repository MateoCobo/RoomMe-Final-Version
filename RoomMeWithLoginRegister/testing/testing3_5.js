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
    await firstName.sendKeys('john');

    let lastName = await driver.findElement(By.xpath('//*[@id="lname"]'));
    await lastName.sendKeys('doe');

    let userName = await driver.findElement(By.xpath('//*[@id="username"]'));
    await userName.sendKeys('JD2');

    let bio = await driver.findElement(By.xpath('//*[@id="bio"]'));
    await bio.sendKeys("Hi I'm John Doe!");

    let email = await driver.findElement(By.xpath('//*[@id="email"]'));
    await email.sendKeys('johndoe2billion@gmail.com');

    let password = await driver.findElement(By.xpath('//*[@id="password"]'));
    await password.sendKeys('johndoe');
    
    let password2 = await driver.findElement(By.xpath('//*[@id="password2"]'));
    //await password2.sendKeys('johndoe');

    await driver.findElement(By.xpath('//*[@id="male"]')).click();

    //await driver.findElement(By.xpath('//*[@id="female"]')).click();

    await driver.findElement(By.xpath('//*[@id="gaming"]')).click();

    //await driver.findElement(By.xpath('//*[@id="organized"]')).click();

    //await driver.findElement(By.xpath('//*[@id="party"]')).click();

    //await driver.findElement(By.xpath('//*[@id="Cooking"]')).click();

    await driver.findElement(By.xpath('//*[@id="gym"]')).click();

    await driver.findElement(By.xpath('//*[@id="anime"]')).click();

    //await driver.findElement(By.xpath('//*[@id="horror"]')).click();

    await driver.findElement(By.xpath('//*[@id="comedy"]')).click();

    await driver.findElement(By.xpath('//*[@id="mn"]')).click();

    let submitButton = await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/form/button'));
    await submitButton.click(); 
      

})();