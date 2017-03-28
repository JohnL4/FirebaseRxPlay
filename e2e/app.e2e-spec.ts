import { FirebaseRxPlayPage } from './app.po';

describe('firebase-rx-play App', () => {
  let page: FirebaseRxPlayPage;

  beforeEach(() => {
    page = new FirebaseRxPlayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
