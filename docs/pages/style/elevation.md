# Elevation

Shadows provide important visual cues about objects’ depth and directional movement. They are the only visual cue indicating the amount of separation between surfaces. An object’s elevation determines the appearance of its shadow. The elevation values are mapped out in a "z-space" and range from `0` to `24`.

## Usage

```html
<div class="shadow-z2">
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
</div>
```

### CSS Classes

If you want to set the elevation of an element, which is not a Material Design component, you can apply the following CSS classes.

CSS Class | Description
--- | ---
`elevation--z<N>` | Sets the elevation to the (N)dp, where 1 <= N <= 24

### Sass Mixins, Variables, and Functions

Mixin | Description
--- | ---
`md-elevation($z-value)` | Sets the elevation to the z-space for that given elevation
