import { NestedRoutesAppPage } from './app.po';

describe('nested-routes-app App', function() {
  let page: NestedRoutesAppPage;

  beforeEach(() => {
    page = new NestedRoutesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
