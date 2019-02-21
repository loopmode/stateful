# @loopmode/stateful-workspace

This repository contains the `@loopmode/stateful` package and its development workspace.

The main package is `packages/stateful`, but there is also a `create-react-app`-based application with examples in `packages/examples`.

## Installation

Clone this repository. Then, execute `yarn` or `yarn install` in the root to install the dependencies.

## Usage

### Scripts

#### `yarn build`

Builds the main package.

Running `yarn build` transpiles `packages/stateful/src` to `packages/stateful/lib`.

#### `yarn watch`

Builds and watches the main package.

Running `yarn watch` performs `yarn build` and repeat the operation whenever a file in `packages/stateful/src` is changed.

#### `yarn examples`

Starts the development server of the `packages/examples` application.

Running `yarn examples` launches the examples app on port 3000. If that port is already in use, it will offer to start on the next available port.

#### `yarn start`

The main development script - starts watching the main package and launches the examples application in parallel.

Running `yarn start` simply runs `yarn watch` and `yarn examples` in parallel.

#### `yarn lint`

Performs an `eslint` and `prettier` scan on the codebase.

Use `yarn lint --fix` to automatically fix formatting isses like whitespaces, tabs or indentation.
