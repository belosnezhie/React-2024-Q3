class SearchQueryStorage {
  private key = 'User_JSFE2023Q4';

  public checkSearchQuery(): boolean {
    if (!localStorage.getItem(this.key)) {
      return false;
    }

    return true;
  }

  public getSearchQuery(): string {
    const searchQuery = localStorage.getItem(this.key);

    if (!searchQuery) {
      return '';
    } else {
      return searchQuery;
    }
  }

  public setSearchQuery(searchQuery: string): void {
    localStorage.setItem(this.key, searchQuery);
  }
}

export const searchQueryStorage = new SearchQueryStorage();
