const { By } = require('selenium-webdriver');
const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function openChromeTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:5000/commonwealth');

    driver.manage().setTimeouts({implicit: 0.5 })

    let email = await driver.findElement(By.xpath('//*[@id="email"]'));
    await email.sendKeys('johndoe2billion@gmail.com');

    let password = await driver.findElement(By.xpath('//*[@id="password"]'));
    await password.sendKeys('johndoe');

    let loginButton = await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/form/button'));
    await loginButton.click();
    
    driver.findElement(By.xpath('//*[@id="commonwealth"]/a')).click();
})();