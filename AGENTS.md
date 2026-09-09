# Project Guidelines

- Write styles with SCSS Modules. combine conditional classes with `clsx`.
- Sass APIs are injected globally in Next.js and Storybook. Do not add `@use` to component styles.
- Use `spacing()` for spacing values: `spacing(1)` is `4px`, and `spacing(4)` is `16px`.
- `shadow`, `ring`, and `inner-border` share one `box-shadow` chain and can be combined.
- `inner-border` accepts `left`, `right`, `top`, `bottom`, `x`, `y`, and `all`.
- Use `color-mix()` for opacity instead of creating extra color variables.
- Use `background-color` for solid colors; reserve `background` for images, gradients, or other shorthand values.
- Use the existing typography mixins and the `small-mobile`, `mobile`, `tablet`, and `desktop` breakpoints.

```scss
.card {
  padding: spacing(4);

  @include heading-5;
  @include ring(0 0 0 1px color-mix(in srgb, var(--color-border-primary-muted) 20%, transparent));
  @include shadow(0 4px 12px color-mix(in srgb, var(--color-black) 10%, transparent));
  @include inner-border(left right bottom);

  @include mobile {
    padding: spacing(2);
  }
}
```
