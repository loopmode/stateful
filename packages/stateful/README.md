# @loopmode/stateful

A react component for visual indication of async state.

![success gif](https://github.com/loopmode/stateful/raw/master/stateful-success.gif 'Example of loading and success indication')
![error gif](https://github.com/loopmode/stateful/raw/master/stateful-error.gif 'Example of loading and error indication')

This component is meant as an unobtrusive helper that doesn't require significant changes in your code.
You simply wrap it around an existing component in your JSX, without adding or changing any props - the rest should "just work".

See also:

-   [docs and examples](https://loopmode.github.io/stateful/)
-   [npm page](https://www.npmjs.com/package/@loopmode/stateful)

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

Just wrap it around a component that has a callback. If the callback returns a promise, the wrapped component will receive props that indicate the state of the promise.

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

| Prop           | Type     | Default                           | Description                                                                                             |
| -------------- | -------- | --------------------------------- | ------------------------------------------------------------------------------------------------------- |
| callbacks      | PolyType | `['onClick']`                     | Names of callbacks to intercept and check for promises                                                  |
| pendingProps   | PolyType | `['disabled']`                    | Names of props to add for `Status.PENDING`                                                              |
| pendingClasses | PolyType | `[]`                              | Names of CSS classes to add for `Status.PENDING`                                                        |
| busyProps      | PolyType | `['disabled']`                    | Names of props to add for `Status.BUSY`                                                                 |
| busyClasses    | PolyType | `[]`                              | Names of CSS classes to add for `Status.BUSY`                                                           |
| errorProps     | PolyType | `[]`                              | Names of props to add for `Status.ERROR`                                                                |
| errorClasses   | PolyType | `['error']`                       | Names of CSS classes to add for `Status.ERROR`                                                          |
| successProps   | PolyType | `[]`                              | Names of props to add for `Status.SUCCESS`                                                              |
| successClasses | PolyType | `['success']`                     | Names of CSS classes to add for `Status.SUCCESS`                                                        |
| hintDuration   | Number   | `1000`                            | Duration in milliseconds for `Status.SUCCESS` and `Status.ERROR` before returning to the default status |
| busyDelay      | Number   | `0`                               | Duration in milliseconds to wait after `Status.PENDING` and before `Status.BUSY`                        |
| delimiter      | String   | `' '`                             | Delimiter for splitting `PolyType` props of type `String` into multiple values                          |
| rejectValue    | Function | `value => value instanceof Error` | Whether to indicate `Status.ERROR` for a promise that was actually resolved with a value                |

## "PolyType" props

The term "PolyType" isn't the latest thing, it's just something made up for the sakes of this documentation. It means that the prop value can be one of three types:

```jsx
const PolyType = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.func
]);
```

**String**

In most cases, you can stick with the `String` type. It supports both single and multiple values, but in a primitive type that works well with pure components.
Single values are typed as a simple string, while multiple values are delimiter-separated strings. The default delimiter is a space (``), but you can change that using the `delimiter` prop.

```jsx
<Stateful pendingProps="disabled" />
<Stateful pendingProps="disabled pending" />
<Stateful pendingProps="disabled,pending" delimiter="," />
```

**Array**

In some cases, it might be preferrable to provide the props as an array. While this interferes with rendering of pure components when typed inline, in many cases you do have an array that you can pass on directly.

```jsx
<Stateful pendingProps={['disabled']} />
<Stateful pendingProps={['disabled', 'pending']} />
<Stateful pendingProps={myPropsArray} />
```

**Function**

Sometimes, the component you need to wrap just doesn't support a simple boolean flag to get the job done. For example, `react-bootstraps` wants to receive `variant="success"` or `variant="danger"` - the same prop, but with a different value.
In these cases, you can provide a function that receives the current `status` and returns an object with as many properties and values as needed.

```jsx
<Stateful
    pendingProps={() => ({status: 'pending'})}
    successProps={() => ({status: 'success'})}
 />
<Stateful pendingProps={status => {
    console.log({ status });
    return {
        status,
        foo: 'bar',
        bar: 'baz'
    }
}} />
```

## Internal state: `status`

Internally, we use a variable named `status` to handle the current state. Its value is just an integer, all possible values are defined in [Status](https://github.com/loopmode/stateful/blob/master/packages/stateful/src/Status.js).

When you provide a function value to a PolyType prop, that function will be invoked with the current `status` as its first argument.
You can import the named values via `import { Status } from '@loopmode/stateful'` or `import * as Status from '@loopmode/stateful/lib/Status'` to compare against them.

| status         | value | Description                                                                                                                          |
| -------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Status.IDLE    | `0`   | The default state - no props are added to wrapped children                                                                           |
| Status.PENDING | `1`   | A callback was invoked, and it returned a promise. Wrapped children now receive `pendingProps` and `pendingClasses`                  |
| Status.BUSY    | `2`   | The returned promise has been pending for more than `busyDelay` milliseconds. Wrapped children receive `busyProps` and `busyClasses` |
| Status.SUCCESS | `3`   | The returned promise was resolved. Wrapped children receive `successProps` and `successClasses` for `successDuration` milliseconds   |
| Status.ERROR   | `4`   | The returned promise was rejected. Wrapped children receive `errorProps` and `errorClasses` for `errorDuration` milliseconds         |

## Usage with UI libraries and frameworks

Most UI libraries and frameworks come prepared for these situations and provide class names or props to make a button look green or red or busy.
While `@loopmode/stateful` makes it easy to write a custom wrapper for any library you use, it comes with a couple of presets for popular frameworks.
(Suggestions and especially pull requests for more support are highly welcome!)

To use the pre-configured wrapper components, you should import them specifically from `lib/wrapper`.
Ideally, you would do this only once for the local `Stateful` component of a project, configure it there, and import that one across your codebase.

| name        | examples                                                    | implementation                                                                                                            | usage                                                                 |
| ----------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| antd        | [example](http://loopmode.github.io/stateful/#/antd)        | [wrappers/antd.js](https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/antd.js)               | `import Stateful from '@loopmode/stateful/lib/wrappers/antd';`        |
| bootstrap   | [example](http://loopmode.github.io/stateful/#/bootstrap)   | [wrappers/bootstrap.js](https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/bootstrap.js)     | `import Stateful from '@loopmode/stateful/lib/wrappers/bootstrap';`   |
| semantic-ui | [example](http://loopmode.github.io/stateful/#/semantic-ui) | [wrappers/semantic-ui.js](https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrappers/semantic-ui.js) | `import Stateful from '@loopmode/stateful/lib/wrappers/semantic-ui';` |
| material-ui | [example](http://loopmode.github.io/stateful/#/material-ui) | -                                                                                                                         | -                                                                     |
