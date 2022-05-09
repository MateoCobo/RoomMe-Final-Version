const { By } = require('selenium-webdriver');
const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function openChromeTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:5000');

    driver.manage().setTimeouts({implicit: 0.5 })

    let login = await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/a[2]'));
    await login.click();

    let goEmail = await driver.findElement(By.xpath('//*[@id="email"]'));
    await goEmail.sendKeys('sjohnson2@gmail.com');

    let goPassword = await driver.findElement(By.xpath('//*[@id="password"]'));
    await goPassword.sendKeys('sjohn123');
    
    let loginButton = await driver.findElement(By.xpath('/html/body/div[1]/div/div/div/form/button'));
    await loginButton.click();

    //clicks on a specific dorm page which displays information about said dorm
    let blueRidge = await driver.findElement(By.xpath('//*[@id="blueridge"]')).click();

})();