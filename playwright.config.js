// playwright.config.js
module.exports = {
  reporter: [['list'], ['html', { outputFolder: 'reports', open: 'never' }]],
  use: {
    headless: false,
    screenshot: 'on',
    video: 'retain-on-failure'
  }
};