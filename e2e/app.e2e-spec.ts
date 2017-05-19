import { TemplateTestPage } from './app.po';

describe('template-test App', () => {
  let page: TemplateTestPage;

  beforeEach(() => {
    page = new TemplateTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
