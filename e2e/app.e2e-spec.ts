import { TryD3Page } from './app.po';

describe('try-d3 App', function() {
  let page: TryD3Page;

  beforeEach(() => {
    page = new TryD3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
