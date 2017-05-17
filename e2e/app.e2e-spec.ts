import { DeadDbAppPage } from './app.po';

describe('dead-db-app App', function() {
  let page: DeadDbAppPage;

  beforeEach(() => {
    page = new DeadDbAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
