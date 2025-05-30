# Demo Playwright TypeScript

Demonstration of Playwright for web testing by using TypeScript and PNPM.

Sources:

* <https://playwright.dev/docs/intro>

* <https://playwright.dev/docs/writing-tests>

## Install

Run:

```sh
pnpm create playwright
```

Playwright will download all the browsers it needs.

Playwright will create the following files:

```txt
playwright.config.ts
package.json
package-lock.json
tests/
  example.spec.ts
tests-examples/
  demo-todo-app.spec.ts
```

## Update

Update Playwright as needed, and download new browser binaries and dependencies.

```sh
pnpm install --save-dev @playwright/test@latest
pnpm exec playwright install --with-deps
```

## Create file

[tests/example.spec.ts](tests/example.spec.ts)

## Run tests

Run tests:

```sh
pnpm exec playwright test
```

By default tests will be run on all 3 browsers, Chromium, Firefox and WebKit
using 3 workers. This can be configured in the playwright.config file. Tests are
run in headless mode meaning no browser will open up when running the tests.
Results of the tests and test logs will be shown in the terminal.

## Run tests in UI mode

You can run tests in UI Mode, which visually shows what happens with steps. UI mode also comes with many other features such as the locator picker, watch mode, and more.

```sh
pnpm exec playwright test --ui
```

## HTML Test Reports

After your test completes, an HTML Reporter will be generated, which shows you a
full report of your tests allowing you to filter the report by browsers, passed
tests, failed tests, skipped tests and flaky tests. You can click on each test
and explore the test's errors as well as each step of the test. By default, the
HTML report is opened automatically if some of the tests failed.

```sh
pnpm exec playwright show-report
```

