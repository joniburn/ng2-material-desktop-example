import { Ng2MaterialDesktopExamplePage } from './app.po';

describe('ng2-material-desktop-example App', function() {
  let page: Ng2MaterialDesktopExamplePage;

  beforeEach(() => {
    page = new Ng2MaterialDesktopExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
