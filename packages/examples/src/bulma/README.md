# Bulma and Prismjs

See https://github.com/loopmode/bulma-prism

This is a workaround solution for using both [bulma](https://github.com/jgthms/bulma) and [prism](https://github.com/PrismJS/prism) stylesheets.

There are collisions in global selectors between the two libraries, see https://github.com/jgthms/bulma/issues/1708 and https://github.com/PrismJS/prism/issues/1324

This here is one possible workaround.

It's a patch for the sass version of bulma installed from npm.

It changes two selectors: `.number` becomes `.number:not(.token)`, and `tag:not(body)` becomes `tag:not(body):not(.token)`.

However, it's just a workaround and comes at a great cost (duplication).

It's based on `bulma@0.9.1`.

## Usage

Copy this folder to your project and import bulma from there.

Instead of this:
```scss
@import "~bulma/bulma.sass";
```

You do something like this:
```scss
@import "./bulma/bulma.sass";
```