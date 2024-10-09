# MyUW App Styles

**`myuw-app-styles` is not currently maintained.**

This HTML import contains custom CSS properties that are consumed by other components in the myuw-web-components space.

## How to use

To use the "UW-Madison White" theme, for example, import the component and add the "uw-madison-white-theme" class to your page's body element, like so:

```html
<!-- import the module -->
<script type="module" src="https://cdn.my.wisc.edu/@myuw-web-components/myuw-app-styles@latest/myuw-app-styles.min.mjs"></script>

<!-- fallback for browsers without ES2015 module support -->
<script nomodule src="https://cdn.my.wisc.edu/@myuw-web-components/myuw-app-styles@latest/myuw-app-styles.min.js"></script>

<body class="uw-madison-white-theme">
    <!-- ... -->
</body>
```

To avoid flashing unstyled text, this component also uses [FontFaceObserver](https://github.com/bramstein/fontfaceobserver) to determine when UW-Madison theme fonts are loaded and updates `<body>` with the attribute `myuw-font-loaded`

_Note:_ The evergreen "latest" version can be used for convenience, but in production settings it is recommended to use the latest [release version](https://github.com/myuw-web-components/myuw-app-styles/releases) specifically, and upgrade only after testing!

## Theming

The default theme is based on UW-Madison red and other colors from the [UW-Madison brand guidelines](https://brand.wisc.edu/web/colors/) for web. You don't have to do anything special to use this theme.

Cross-browser testing provided by:<br/>
<a href="https://www.browserstack.com/"><img width="160" src="https://myuw-web-components.github.io/img/Browserstack-logo.svg" alt="BrowserStack"/></a>
