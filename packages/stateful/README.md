[poly]: https://github.com/loopmode/stateful/blob/master/packages/stateful/src/Stateful.js#L16-L20 'PolyType'
[status]: https://github.com/loopmode/stateful/blob/master/packages/stateful/src/Status.js 'Status'
[antd-example]: https://loopmode.github.io/stateful/#/antd 'AntD Example'
[bootstrap-example]: https://loopmode.github.io/stateful/#/bootstrap 'Bootstrap Example'
[semantic-ui-example]: https://loopmode.github.io/stateful/#/semantic-ui 'Semantic UI Example'
[material-ui-example]: https://loopmode.github.io/stateful/#/material-ui 'Material UI Example'
[example-vanilla]: https://loopmode.github.io/stateful/#/vanilla 'Vanilla Example'
[antd-wrapper]: https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/antd.js 'AntD Wrapper'
[bootstrap-wrapper]: https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/bootstrap.js 'Bootstrap Wrapper'
[semantic-ui-wrapper]: https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/semantic-ui.js 'Semantic UI Wrapper'

# @loopmode/stateful

A react component for visual indication of async state.

<img src="https://github.com/loopmode/stateful/raw/master/stateful-success.gif" width="150" height="90" title="pending and success example" alt="success animation" />
<img src="https://github.com/loopmode/stateful/raw/master/stateful-error.gif" width="150" height="90" title="pending and error example" alt="error animation" />

Wrap it around some component that has a callback. If the callback returns a promise when invoked, the wrapped component receives props that indicate the current state of the promise.

See also:

-   [docs and examples](https://loopmode.github.io/stateful/)
-   [npm page](https://www.npmjs.com/package/@loopmode/stateful)
-   [github page](https://github.com/loopmode/stateful/tree/master/packages/stateful)

_Note: This is a rewrite of `@loopmode/async-state` using hooks. Thus, it requires **react@16.8.0** or higher._
_If you need the functionality for older react versions, check out [@loopmode/async-state](https://www.npmjs.com/package/@loopmode/async-state)_

## Installation

Using npm:

```bash
npm install --save @loopmode/stateful
```

Using yarn:

```bash
yarn add @loopmode/stateful
```

## Usage

In the example below, we use `<Stateful>` without any props.

The default values are used, and the button

-   has a `disabled` prop when clicked, until the promise is resolved or rejected
-   has a `busy` CSS class after `busyDelay` milliseconds (default `0` - right away)
-   has a `success` CSS class for `successDuration` milliseconds (default `1000`) when the promise is resolved
-   has an `error` CSS class for `errorDuration` milliseconds (default `1000`) when the promise is rejected

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Stateful from '@loopmode/stateful';

function handleClick() {
    return fetch('https://jsonplaceholder.typicode.com/users');
}
const Demo = () => (
    <Stateful>
        <button onClick={handleClick}>load</button>
    </Stateful>
);
ReactDOM.render(<Demo />, document.getElementById('root'));
```

## Supported props

Common

| Prop                | Type             | Default value                     | Description                                                                                                                 |
| ------------------- | ---------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **_general props_** |                  |                                   |                                                                                                                             |
| callbacks           | [PolyType][poly] | `['onClick']`                     | Names of callbacks to intercept and check for promises                                                                      |
| hintDuration        | Number           | `1000`                            | Duration in milliseconds for both `Status.SUCCESS` and `Status.ERROR` - outweighed by `successDuration` and `errorDuration` |
| delimiter           | String           | `' '`                             | Delimiter for splitting `PolyType` props of type `String` into multiple values                                              |
| rejectValue         | Function         | `value => value instanceof Error` | Whether to indicate `Status.ERROR` for a promise that was actually resolved with a value                                    |
| **_for pending_**   |                  |                                   |                                                                                                                             |
| pendingProps        | [PolyType][poly] | `['disabled']`                    | Names of props to add for `Status.PENDING`                                                                                  |
| pendingClasses      | [PolyType][poly] | `[]`                              | Names of CSS classes to add for `Status.PENDING`                                                                            |
| **_for busy_**      |                  |                                   |                                                                                                                             |
| busyProps           | [PolyType][poly] | `['disabled']`                    | Names of props to add for `Status.BUSY`                                                                                     |
| busyClasses         | [PolyType][poly] | `[]`                              | Names of CSS classes to add for `Status.BUSY`                                                                               |
| busyDelay           | Number           | `0`                               | Duration in milliseconds to wait after `Status.PENDING` and before `Status.BUSY`                                            |
| **_for error_**     |                  |                                   |                                                                                                                             |
| errorProps          | [PolyType][poly] | `[]`                              | Names of props to add for `Status.ERROR`                                                                                    |
| errorClasses        | [PolyType][poly] | `['error']`                       | Names of CSS classes to add for `Status.ERROR`                                                                              |
| errorDuration       | Number           | `undefined`                       | Duration in milliseconds for `Status.ERROR` - outweighs `hintDuration`                                                      |
| **_for success_**   |                  |                                   |                                                                                                                             |
| successProps        | [PolyType][poly] | `[]`                              | Names of props to add for `Status.SUCCESS`                                                                                  |
| successClasses      | [PolyType][poly] | `['success']`                     | Names of CSS classes to add for `Status.SUCCESS`                                                                            |
| successDuration     | Number           | `undefined`                       | Duration in milliseconds for `Status.SUCCESS` - outweighs `hintDuration`                                                    |

### PolyType props

The values of [PolyType][poly] props may be of type String, Array or Function. Here are some examples:

```jsx
import Stateful, { Status } from '@loopmode/stateful';

// String
<Stateful pendingProps="disabled" />
<Stateful pendingProps="disabled pending" />
<Stateful pendingProps="disabled,pending" delimiter="," />

// Array
<Stateful pendingProps={['disabled']} />
<Stateful pendingProps={['disabled', 'pending']} />
<Stateful pendingProps={myPropsArray} />

// Function
<Stateful pendingProps={() => ({ variant: 'loading' })} />
<Stateful pendingProps={(status) => ({ isLoading: status === Status.BUSY })} />
```

## Status value

When you provide a function to a [PolyType][poly] prop, it will be invoked with the current `status` and should return a props object.

| status                   | value | Description                                                                                                                          |
| ------------------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [Status.IDLE][status]    | `0`   | The default state - no props are added to wrapped children                                                                           |
| [Status.PENDING][status] | `1`   | A callback was invoked, and it returned a promise. Wrapped children now receive `pendingProps` and `pendingClasses`                  |
| [Status.BUSY][status]    | `2`   | The returned promise has been pending for more than `busyDelay` milliseconds. Wrapped children receive `busyProps` and `busyClasses` |
| [Status.SUCCESS][status] | `3`   | The returned promise was resolved. Wrapped children receive `successProps` and `successClasses` for `successDuration` milliseconds   |
| [Status.ERROR][status]   | `4`   | The returned promise was rejected. Wrapped children receive `errorProps` and `errorClasses` for `errorDuration` milliseconds         |

```jsx
import { Status } from '@loopmode/stateful';
// or:
// import * as Status from '@loopmode/stateful/lib/Status';
console.log({ Status });
```

## Usage with UI libraries

Most UI libraries and frameworks come prepared for these situations and provide class names or props to make a button look green or red or busy.
While `@loopmode/stateful` makes it easy to write a custom wrapper for any library you use, it comes with a couple of presets for popular frameworks.
(Suggestions and especially pull requests for more support are highly welcome!)

To use the pre-configured wrapper components, you should import them specifically from `lib/wrapper`.
Ideally, you would do this only once for the local `Stateful` component of a project, configure it there, and import that one across your codebase.

| name        | examples                       | implementation                                 | usage                                                                 |
| ----------- | ------------------------------ | ---------------------------------------------- | --------------------------------------------------------------------- |
| antd        | [example][antd-example]        | [wrappers/antd.js][antd-wrapper]               | `import Stateful from '@loopmode/stateful/lib/wrappers/antd';`        |
| bootstrap   | [example][bootstrap-example]   | [wrappers/bootstrap.js][bootstrap-wrapper]     | `import Stateful from '@loopmode/stateful/lib/wrappers/bootstrap';`   |
| semantic-ui | [example][semantic-ui-example] | [wrappers/semantic-ui.js][semantic-ui-wrapper] | `import Stateful from '@loopmode/stateful/lib/wrappers/semantic-ui';` |
| material-ui | [example][material-ui-example] | -                                              | -                                                                     |

### Recommended usage

You might be able to use one of the pre-configured library wrappers, but chances are you'll need your own wrapper.

Typically, you should create a local `components/Stateful` component, configure it once for the needs of your project:

```jsx
// src/components/Stateful/index.js

import React from 'react';
import DefaultStateful from '@loopmode/stateful';

const CustomStateful = props => {
    return (
        <DefaultStateful
            // whatever suits your project
            pendingProps="disabled"
            pendingClasses="loading"
            errorProps={null}
            errorClasses="danger"
            successProps={null}
            successClasses="success"
            busyDelay={250}
            {...props}
        />
    );
};

export default CustomStateful;
```

Check out [the default wrappers](https://github.com/loopmode/stateful/tree/master/packages/stateful/src/wrappers) for some examples using this approach.
