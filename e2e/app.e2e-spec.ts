import { SpablogPage } from './app.po';

describe('spablog App', function() {
  let page: SpablogPage;

  beforeEach(() => {
    page = new SpablogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
