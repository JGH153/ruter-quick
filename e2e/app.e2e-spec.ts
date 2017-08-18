import { RuterQuickPage } from './app.po';

describe('ruter-quick App', () => {
  let page: RuterQuickPage;

  beforeEach(() => {
    page = new RuterQuickPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to rq!');
  });
});
