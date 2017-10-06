# Typography

* Display 4
* Display 3
* Display 2
* Display 1
* Headline
* Title
* Subheading 2
* Subheading 1
* Body 2
* Body 1
* Caption
* Button

# Usage

```html
<body class="md-typography">
  <h1 class="display4">Big heading</h1>
</body>
```

# Installation
The Roboto font will not be automatically loaded. The developer is responsible for loading all fonts used in their application. The Roboto Font has a few easy ways to get started:

## Roboto Font CDN
Shown below is a sample link markup used to load the Roboto font from a CDN.

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
```

## Install with npm
You can install it by typing the below command in your terminal:

```shell
npm install typeface-roboto --save
```

Then, you can import it in your entrypoint.

### CSS Classes
If you want to set the typographic style of an element, which is not a Material Design component, you can apply the following CSS classes.

CSS Class | Description
--- | ---
`typography` | Sets the font to Roboto
`display4` | Sets font properties as Display 4
`display3` | Sets font properties as Display 3
`display2` | Sets font properties as Display 2
`display1` | Sets font properties as Display 1
`headline` | Sets font properties as Headline
`title` | Sets font properties as Title
`subheading2` | Sets font properties as Subheading 2
`subheading1` | Sets font properties as Subheading 1
`body2` | Sets font properties as Body 2
`body1` | Sets font properties as Body 1
`caption` | Sets font properties as Caption
`button` | Sets font properties as Button

### Sass Variables and Mixins

Mixin | Description
--- | ---
`md-typography-base` | Sets the font to Roboto
`md-typography($style)` | Applies one of the typography styles, including setting the font to Roboto
`md-typography-truncate` | Truncates overflow text to one line with an ellipsis

> **A note about `md-typography-truncate`**, `md-typography-truncate` should only be used if the element is `display: block` or `display: inline-block`.

#### `$style` Values
These styles can be used as the `$style` argument for the`md-typography` mixin.

* `display4`
* `display3`
* `display2`
* `display1`
* `headline`
* `title`
* `subheading2`
* `subheading1`
* `body2`
* `body1`
* `caption`
* `button`
