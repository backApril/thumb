var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    EventEmitter = webdriver.EventEmitter;
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('localhost:3000/index/index');
driver.findElement(By.id('fabulous')).click();
driver.wait(until.titleIs('Document'), 10000);
driver.quit();