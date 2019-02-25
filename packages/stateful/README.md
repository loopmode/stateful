# @loopmode/stateful

A react component for visual indication of async state.

![success gif](https://github.com/loopmode/stateful/raw/master/stateful-success.gif 'Example of loading and success indication')
![error gif](https://github.com/loopmode/stateful/raw/master/stateful-error.gif 'Example of loading and error indication')

This is an unobtrusive wrapper component that doesn't require any significant changes in your existing code.

See also:

-   [docs and examples](https://loopmode.github.io/stateful/)
-   [npm page](https://www.npmjs.com/package/@loopmode/stateful)

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

In the example above, we used `<Stateful>` without any props, falling back to the default configuration.

The wrapped button will

-   have a `disabled` prop when clicked, and until the promise is resolved or rejected
-   have a `busy` CSS class right away - after `busyDelay` milliseconds (default `0`)
-   have a `success` CSS class for `successDuration` milliseconds (default `1000`) when the promise is resolved
-   have an `error` CSS class for `errorDuration` milliseconds (default `1000`) when the promise is rejected

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

The term "PolyType" isn't the latest thing, it's just something I made up for the sakes of this documentation, see details below.

```jsx
const PolyType = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.func
]);
```

### PolyType: String

In most cases, you can stick with the `String` type. It supports both single and multiple values, but in a primitive type that works well with pure components.
Single values are typed as a simple string, while multiple values are delimiter-separated strings. The default delimiter is a space (``), but you can change that using the `delimiter` prop.

```jsx
<Stateful pendingProps="disabled" />
<Stateful pendingProps="disabled pending" />
<Stateful pendingProps="disabled,pending" delimiter="," />
```

### PolyType: Array

In some cases, it might be preferrable to provide the props as an array. While this interferes with rendering of pure components when typed inline, in many cases you do have an array that you can pass on directly.

```jsx
<Stateful pendingProps={['disabled']} />
<Stateful pendingProps={['disabled', 'pending']} />
<Stateful pendingProps={myPropsArray} />
```

### PolyType: Function

Sometimes, the component you need to wrap just doesn't support a simple boolean flag to get the job done. For example, `react-bootstraps` wants to receive `variant="success"` or `variant="danger"` - the same prop, but with a different value.
In these cases, you can provide a function that receives the current `status` and returns an object with as many properties and values as needed.

```jsx
<Stateful
    pendingProps={() => ({ status: 'pending' })}
    successProps={() => ({ status: 'success' })}
/>
```

## Internal state: `status`

Internally, we use a variable named `status` to handle the current state. Its value is just an integer, all possible values are defined in [Status](https://github.com/loopmode/stateful/blob/master/packages/stateful/src/Status.js).

| status         | value | Description                                                                                                                          |
| -------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Status.IDLE    | `0`   | The default state - no props are added to wrapped children                                                                           |
| Status.PENDING | `1`   | A callback was invoked, and it returned a promise. Wrapped children now receive `pendingProps` and `pendingClasses`                  |
| Status.BUSY    | `2`   | The returned promise has been pending for more than `busyDelay` milliseconds. Wrapped children receive `busyProps` and `busyClasses` |
| Status.SUCCESS | `3`   | The returned promise was resolved. Wrapped children receive `successProps` and `successClasses` for `successDuration` milliseconds   |
| Status.ERROR   | `4`   | The returned promise was rejected. Wrapped children receive `errorProps` and `errorClasses` for `errorDuration` milliseconds         |

When you provide a function value to a PolyType prop, that function will be invoked with the current `status` as its first argument.
You can import the named values via `import { Status } from '@loopmode/stateful'` or `import * as Status from '@loopmode/stateful/lib/Status'` to compare against them.

```jsx
import Stateful, {Status} from '@loopmode/stateful';
...
<Stateful
    pendingProps={status => {
        return {
            status,
            foo: 'bar',
            bar: 'baz',
            baz: status === Status.SUCCESS
        };
    }}
/>
```

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

### Recommended usage

You might be able to use one of the pre-configured library wrappers, but chances are you'll need your own wrapper.
Typically, you should create a local `components/Stateful` component, configure it once for the needs of your project, and pass along the rest of the props.

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

This makes it easy to use the component, but it still leaves you lots of flexibility.
You can still pass props, but you don't have to.

This is how you would then use it:

```jsx
import Page from 'components/Page';
import UpdateForm from 'components/Form/UpdateForm';
import Button from 'components/Button';
import Stateful from 'components/Stateful';

const UpdatePage = props => (
    <Page>
        <h2>Update details</h2>
        <UpdateForm data={props.formData} onChange={props.onFormChange} />
        <Stateful busyDelay={500}>
            <Button onClick={props.onFormSubmit} children="Create" />
        </Stateful>
    </Page>
);

export default UpdatePage;
```

Check out [the default wrappers](https://github.com/loopmode/stateful/tree/master/packages/stateful/src/wrappers) for some examples using this approach.
