import { NewAngular2redditPage } from './app.po';

describe('new-angular2reddit App', () => {
  let page: NewAngular2redditPage;

  beforeEach(() => {
    page = new NewAngular2redditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
