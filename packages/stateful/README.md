# @loopmode/stateful

A react component for visual indication of async state.

This component is meant as an unobtrusive, opt-in helper that doesn't require significant changes in your code.
The idea is that you simply wrap it around an existing component in your JSX, without changing or adding any props, and the rest should "just work".

![success gif](https://github.com/loopmode/stateful/raw/master/stateful-success.gif 'Example of loading and success indication')
![error gif](https://github.com/loopmode/stateful/raw/master/stateful-error.gif 'Example of loading and error indication')

## Installation

Using npm:

```
npm install --save @loopmode/stateful
```

Using yarn:

```
yarn add @loopmode/stateful
```

## Usage

```
import Stateful from '@loopmode/stateful';

...
    <Stateful>
        <button onClick={somePromiseHandler}>load</button>
    </Stateful>
...
```

## Supported props

| Prop           | Type     | Default                       | Description                                                                                             |
| -------------- | -------- | ----------------------------- | ------------------------------------------------------------------------------------------------------- |
| callbacks      | PolyType | `['onClick', 'onTouchStart']` | Names of callbacks to intercept and check for promises                                                  |
| pendingProps   | PolyType | `['disabled']`                | Names of props to add for `Status.PENDING`                                                              |
| pendingClasses | PolyType | `[]`                          | Names of CSS classes to add for `Status.PENDING`                                                        |
| busyDelay      | Number   | `0`                           | Duration in milliseconds to wait after `Status.PENDING` and before `Status.BUSY`                        |
| busyProps      | PolyType | `['disabled']`                | Names of props to add for `Status.BUSY`                                                                 |
| busyClasses    | PolyType | `[]`                          | Names of CSS classes to add for `Status.BUSY`                                                           |
| errorProps     | PolyType | `[]`                          | Names of props to add for `Status.ERROR`                                                                |
| errorClasses   | PolyType | `['error']`                   | Names of CSS classes to add for `Status.ERROR`                                                          |
| successProps   | PolyType | `[]`                          | Names of props to add for `Status.SUCCESS`                                                              |
| successClasses | PolyType | `['success']`                 | Names of CSS classes to add for `Status.SUCCESS`                                                        |
| hintDuration   | Number   | `1000`                        | Duration in milliseconds for `Status.SUCCESS` and `Status.ERROR` before returning to the default status |
| delimiter      | String   | `' '`                         | Delimiter for splitting `Poly` props of type `String` into multiple strings                             |

## "PolyType" props

The term "PolyType" isn't the latest thing, it's just something made up for the sakes of this documentation. It means that the prop value can be one of three types:

```
const PolyType = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.func
]);
```

**String**

In most cases, you can stick with the `String` type. It supports both single and multiple values, but in a primitive type that works well with pure components.
Single values are typed as a simple string, while multiple values are delimiter-separated strings. The default delimiter is a space (``), but you can change that using the `delimiter` prop.

```
<Stateful pendingProps="disabled" />
<Stateful pendingProps="disabled pending" />
<Stateful pendingProps="disabled,pending" delimiter="," />
```

**Array**

In some cases, it might be preferrable to provide the props as an array. While this interferes with rendering of pure components when typed inline, in many cases you do have an array that you can pass on directly.

```
<Stateful pendingProps={['disabled']} />
<Stateful pendingProps={['disabled', 'pending']} />
<Stateful pendingProps={myPropsArray} />
```

**Function**

Sometimes, the component you need to wrap just doesn't support a simple boolean flag to get the job done. For example, `react-bootstraps` wants to receive `variant="success"` or `variant="danger"` - the same prop, but with a different value.
In these cases, you can provide a function that receives the current `status` and returns an object with as many properties and values as needed.

```
<Stateful
    pendingProps={() => ({status: 'pending'})}
    successProps={() => ({status: 'success'})}
 />
<Stateful pendingProps={status => {
    console.log({ status });
    return {
        status,
        foo: 'bar',
        bar: 'baz
    }
}} />
```

## Usage with UI libraries and frameworks

Most UI libraries and frameworks come prepared for these situations and provide class names or props to make a button look green or red or busy.
While `@loopmode/stateful` makes it easy to write a custom wrapper for any library you use, it comes with a couple of presets for popular frameworks.
(Suggestions and especially pull requests for more support are highly welcome!)

To use the pre-configured wrapper components, you should import them specifically from `lib/wrapper`.
Ideally, you would do this only once for the local `Stateful` component of a project, configure it there, and import that one across your codebase.

| name        | usage                                                                | implementation                                                                                                          | examples                                                    |
| ----------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| antd        | `import Stateful from '@loopmode/stateful/lib/wrapper/antd';`        | [wrapper/antd.js](https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrapper/antd.js)               | [example](http://loopmode.github.io/stateful/#/antd)        |
| bootstrap   | `import Stateful from '@loopmode/stateful/lib/wrapper/bootstrap';`   | [wrapper/bootstrap.js](https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrapper/bootstrap.js)     | [example](http://loopmode.github.io/stateful/#/bootstrap)   |
| semantic-ui | `import Stateful from '@loopmode/stateful/lib/wrapper/semantic-ui';` | [wrapper/semantic-ui.js](https://github.com/loopmode/stateful/blob/master/packages/stateful/src/wrapper/semantic-ui.js) | [example](http://loopmode.github.io/stateful/#/semantic-ui) |
| material-ui | [see example page](http://loopmode.github.io/stateful/#/material-ui) | -                                                                                                                       | [example](http://loopmode.github.io/stateful/#/material-ui) |
