# Allflow

Allflow is a set of utilities for writing clean and easy to read JSX. It provides a set of components that can be used in the place of common React patterns the would normally disrupt the flow of the JSX in your codebase.

For example, instead of using a chaining conditional operator like:

```jsx
{
  isTrue && <p>Hello</p>;
}
```

you can use

```jsx
<If is={isTrue}>
  <p>Hello</p>
</If>
```

## Installation

- Install with npm: `npm i allflow`
- Install with yarn: `yarn add allflow`
- Install with pnpm: `pnpm add allflow`

## Usage

## License

Code and documentation copyright 2024 Isaac Poole. Code released under the [MIT License]().
