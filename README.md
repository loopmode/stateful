# @loopmode/stateful-workspace

This repository contains the `@loopmode/stateful` package and its development workspace.

## Installation

Clone this repository. Then, execute `yarn` or `yarn install` in the root to install the dependencies.
Please note that quite a lot of dependencies will be installed because the examples showcase the usage with e.g. `semantic-ui-react` or `react-bootstrap`.

## Usage

This repository contains the main package in `packages/stateful`, but there is also an examples application in `packages/examples` as well as some helper packages.
Its use-case is development and testing of the `@loopmode/stateful` library.

### Scripts

The top-level package scripts utilize some helpers (like `lerna` or `npm-run-all`) to orchestrate scripts that are actually defined in the nested packages (`packages/*`).

#### `yarn build`

Builds the main package.

Running `yarn build` transpiles `packages/stateful/src` to `packages/stateful/lib`.

#### `yarn watch`

Builds and watches the main package.

Running `yarn watch` performs `yarn build` and repeats the operation whenever a file in `packages/stateful/src` is changed.

#### `yarn examples`

Starts the development server of the `packages/examples` application.

Running `yarn examples` launches the examples app on port 3000. If that port is already in use, it will offer to start on the next available port.

#### `yarn start`

The main development script - starts watching the main package and launches the examples application development server.
It simply executes `yarn watch` and `yarn examples` in parallel.

#### `yarn lint`

Performs an `eslint` and `prettier` scan on the codebase.

Use `yarn lint --fix` to automatically fix formatting isses like whitespaces, tabs or indentation.
