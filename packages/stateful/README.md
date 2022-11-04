# @loopmode/stateful

Unobtrusive react wrapper component that takes care of state micro-magement.

Check out some examples at [https://loopmode.github.io/stateful/](https://loopmode.github.io/stateful/).

## Installation

```sh
yarn add @loopmode/stateful

# or
npm install --save-dev @loopmode/stateful
```

## Usage

Wrap components in a `<Stateful>` parent, and the wrapped components will receive "stateful props":

```tsx
import { Stateful } from "@loopmode/stateful";

export default function Example() {
  const callback = async () => {
    const stuff = await fetch("https://yourproject.com/api");
    console.log(`Do something with stuff`, stuff);
  };

  return (
    <div>
      <Stateful pendingClass="btn-loading">
        <button className="btn btn-primary" onClick={callback}>
          Successfull operation
        </button>
      </Stateful>
    </div>
  );
}
```

### What it does

The default monitored callback is `onClick` (Can be changed via `monitor` prop, e.g. `<Stateful monitor="onSubmit">`).
If that callback returns a promise, then a series of states will be handled internally:

- `pending` - as soon as the promise was created and until status becomes `busy`.
  - This state can be omitted completely by setting `busyDelay={0}`
- `busy` - after status has been `pending` for `busyDelay` milliseconds
- `success` - after the promise was resolved, and for `successDuration` milliseconds
- `error` - after the promise was rejected, and for `errorDuration` milliseconds
- `idle` - the initial state, after `successDuration`/`errorDuration`/`hintDuration` milliseconds have passed since the promise was settled

Your wrapped children will receive props and/or classNames based on the current state or `Status`:

- Each status has corresponding options for props and classes, for example you can specify `busyClasses` and/or `busyProps`
  - Classes will be merged into the existing classes of your component
  - Props will simply be applied, overriding any previous values
- Props will typically be a boolean flag, e.g. if you define `busyProps="disabled"`, the wrapped children will receive `disabled={true}` while status is `busy`
  - You can provide more complex configuration than strings to achieve different kinds of values
- You can provide multiple values in various ways: `busyClasses="disabled is-loading default-cursor"`, `busyClasses={["disabled", "is-loading default-cursor"]}` or `busyClasses={() => (['disabled', 'is-loading default-cursor'])}`

## Motivation

Imagine a button that triggers some operation on the server.  
How many times have you manually written handling for the pending state of such operations?  
Setting a boolean flag here, setting it back after success or error there, maybe setting up some more more flags to indicate success or error, adding some timers to revert those flags...

<img src="https://github.com/loopmode/stateful/raw/master/stateful-success.gif" width="150" height="90" title="success example" alt="success example" />

<img src="https://github.com/loopmode/stateful/raw/master/stateful-error.gif" width="150" height="90" title="error example" alt="error example" />

### Good UX

In the philosophy of this project, good button UX goes something like this:

- On click
  - Disable the button (to prevent multiple requests while the first one is still pending)
  - Display an animation on the button (to give visual feedback to the user)
- On success:
  - Reset disabled state (to make the button operational again)
  - Display success state by adding classes or props to the button (for visual feedback)
    - Set a timeout that resets the indicator state after a moment
- On error: Same as on success, but make the button e.g. red instead of green

Probably the button should be disabled immediately after the click to prevent multiple overlapping requests, but maybe the animation itself ("busy state") should be delayed for a while, as to avoid spinners flashing up briefly on fast networks or short operations.

### UX vs DX

However, good UX like that might come at the cost of bad developer experience. Also, readability and maintainability if your codebase might suffer greatly, unless you have a good abstraction.

If you start implementing this in your components ad-hoc, you'll probably end up with a cluttered and noisy codebase.
Reading the code and understanding the business case will become hard, simply because there's all that UX stuff like multiple boolean flags and timers all over the place.

### Solution

Use this library and you'll get good button UX for free :)
