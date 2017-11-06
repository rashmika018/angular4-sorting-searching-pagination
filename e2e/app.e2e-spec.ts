import { angular4SortingSearchingPagination } from './app.po';

describe('angular4-sorting-searching-pagination App', () => {
  let page: angular4SortingSearchingPagination;

  beforeEach(() => {
    page = new angular4SortingSearchingPagination();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
