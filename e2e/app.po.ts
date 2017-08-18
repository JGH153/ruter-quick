import { browser, by, element } from 'protractor';

export class RuterQuickPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rq-root h1')).getText();
  }
}
