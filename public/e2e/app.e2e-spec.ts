import { DeepGemsPage } from './app.po';

describe('deep-gems App', function() {
  let page: DeepGemsPage;

  beforeEach(() => {
    page = new DeepGemsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
