import { GestiBankFrontPage } from './app.po';

describe('gesti-bank-front App', () => {
  let page: GestiBankFrontPage;

  beforeEach(() => {
    page = new GestiBankFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
