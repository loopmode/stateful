# @loopmode/stateful

A react component for visually indicating the state of asynchronous operations.

This component is meant as an unobtrusive, opt-in helper that doesn't require significant changes in your code.
The idea is that you simply wrap it around an existing component in your JSX, without changing or adding any props, and the rest should "just work".

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
        <button onClick={this.handleClick}>load</button>
    </Stateful>
...
```

## Explanation

Consider you have a react component that performs some async operation, like loading or submitting data. Typically, you have some component that triggers the action, like a button with an `onClick` handler. That handler will typically perform something that results in a promise.

That is already everything you need to make use of this library - a component with a callback that results in promise.

_Note: The callback must actually return the promise for this to work. This means your function must either be `async` or `return` a promise explicitly._

### Example: initial component

This is our example component. It has a `load` button that fetches some data, the data is set to the state, then rendered.

```
import React, { Component } from 'react';
export default class ListLoader extends Component {
    state = {
        data: []
    };
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>load</button>
                <ul>
                    {this.state.data.map(item => (
                        <li key={item.id}>
                            <h3>{item.name}</h3>
                            <p>{item.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    handleClick = () => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => this.setState({ data }));
    };
}
```

Now if the response was slow to return, for example due to some heavy API operations or simply a slow connection, apparently nothing would happen after clicking the button. The user might wonder whether he actually clicked "correctly" and even click again.
So you, as a developer, would start putting some kind of `isLoading` flag into the state, you would disable the button while `state.isLoading`, you might add a loading animation to make it look nicer than just a disabled button, etc.

Using `@loopmode/stateful`, you don't have to do any of that.

#### 1. Preparation

As mentioned earlier, the callback function _must_ return a promise for this to work. If we used an `async` function, that would be a given. In our case, we have manual promise handling - so we must ensure that we **return the promise**:

```
...
handleClick = () => {
    // notice how we explicitly return the promise
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => this.setState({ data }));
};
...
```

#### 2. Usage

We can now simply put a `<Stateful>` wrapper around the button, and we're done.

```
import Stateful from '@loopmode/Stateful;
...
    <Stateful>
        <button onClick={this.handleClick}>load</button>
    </Stateful>
...
```

That's it. In the default configuration, our button will be disabled and have a `pending` CSS class while the promise is pending. After the promise is resolved or rejected, our button will have a `success` or `error` class for 1 second. You could define some CSS rules to make `button.success` look green or `button.error` look red.

## Usage with UI libraries and frameworks

Most UI libraries and frameworks come prepared for these situations and provide class names or props to make a button look green or red or busy.
While `@loopmode/stateful` makes it easy to write a custom wrapper for any library you use, it comes with a couple of presets for popular frameworks.
(Suggestions and especially pull requests for more support are highly welcome!)

To use the pre-configured components, you should import the specific components from `lib` instead of the default.

### Semantic UI

#### Button

The `semantic-ui-react` buttons provide `positive`, `negative` and `loading` flags. They do not need CSS classes.

```
import Stateful from '@loopmode/stateful/lib/semantic-ui'
```

Under the hood, this is the `Stateful` configuration:

```
export const StatefulButton = props => (
    <Stateful
        pendingClasses={null}
        successClasses={null}
        errorClasses={null}
        pendingProps="disabled"
        busyProps="loading disabled"
        successProps="positive"
        errorProps="negative"
        {...props}
    />
);
```

#### Form

The `semantic-ui-react` form provides `loading`, `success` and `error` flags.

```
import Stateful from '@loopmode/stateful/lib/semantic-ui'
```

Under the hood, this is the `Stateful` configuration:

```
export const StatefulForm = props => (
    <Stateful
        callbacks="onSubmit"
        pendingClasses={null}
        busyClasses={null}
        successClasses={null}
        errorClasses={null}
        pendingProps="disabled"
        busyProps="loading disabled"
        successProps="success"
        errorProps="error"
        hintDuration={5000}
        {...props}
    />
);
```
