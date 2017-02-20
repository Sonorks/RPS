import { RPSPage } from './app.po';

describe('rps App', function() {
  let page: RPSPage;

  beforeEach(() => {
    page = new RPSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
