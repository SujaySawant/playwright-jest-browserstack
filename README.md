# Playwright Jest BrowserStack

Automated testing with Playwright, Jest, and BrowserStack for cross-browser and device testing.

## Overview

This project demonstrates how to run automated tests using:
- **Playwright** - Modern web automation framework
- **Jest** - JavaScript testing framework
- **BrowserStack** - Cloud-based testing platform for browsers and devices

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- BrowserStack account
- Environment variables configured

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd playwright-jest-browserstack
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with your BrowserStack credentials:
```
BROWSERSTACK_USERNAME=your_username
BROWSERSTACK_ACCESS_KEY=your_access_key
```

## Configuration

Update `browserstack.yml` with your BrowserStack project details:
- `userName`: Your BrowserStack username
- `accessKey`: Your BrowserStack access key
- `projectName`: Name of your project
- `buildName`: Name of the test build
- `buildIdentifier`: Unique identifier for the build

## Project Structure

```
├── src/                              # Test files
│   ├── sample.test.js               # Basic sample test
│   ├── sample-local.test.js         # Local testing sample
│   ├── sample-failed.test.js        # Failed test example
│   └── sample-android.test.js       # Android device testing
├── browserstack.yml                  # BrowserStack configuration
├── jest.config.js                    # Jest configuration
├── package.json                      # Project dependencies
├── .gitignore                        # Git ignore rules
└── README.md                         # This file
```

## Running Tests

### Run all sample tests
```bash
npm run sample-test
```

### Run local testing sample
```bash
npm run sample-local-test
```

### Run failed test example
```bash
npm run sample-failed-test
```

### Run Android device tests
```bash
npm run sample-android-test
```

### Run multiple tests
```bash
npm run sample-and-failed-test
```

## Key Features

- Cross-browser testing on BrowserStack cloud infrastructure
- Local testing support for applications behind firewalls
- Android device testing capabilities
- Jest test runner integration with Playwright
- Detailed test reports and results tracking

## BrowserStack SDK

This project uses the `browserstack-node-sdk` which provides:
- Automatic test session management
- Real-time test logs and video recording
- Test result reporting and organization

## Environment Configuration

The following npm scripts are available:

| Script | Description |
|--------|-------------|
| `sample-test` | Run basic Playwright test |
| `sample-local-test` | Run test on local server |
| `sample-failed-test` | Run test that demonstrates failure handling |
| `sample-android-test` | Run test on Android device |
| `sample-and-failed-test` | Run multiple tests together |

## Documentation

For more information:
- [Playwright Documentation](https://playwright.dev/)
- [Jest Documentation](https://jestjs.io/)
- [BrowserStack Documentation](https://www.browserstack.com/docs)
- [BrowserStack Automate Guide](https://www.browserstack.com/docs/automate)

## License

MIT

## Support

For issues or questions, please refer to the official documentation or contact BrowserStack support.
