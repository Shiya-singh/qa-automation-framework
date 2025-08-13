class HomePage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.locator('#search');
    this.searchButton = page.locator('#search-button');
  }

  async goto() {
    await this.page.goto('https://playwright.dev/');
  }

  async search(text) {
    await this.searchBox.fill(text);
    await this.searchButton.click();
  }
}

module.exports = HomePage;