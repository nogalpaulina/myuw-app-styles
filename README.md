# MyUW App Styles

This HTML import contains custom CSS properties that are consumed by other components in the myuw-web-components space.

## How to use

Add the app styles script to your document:

```html
<script type="module" src="https://unpkg.com/@myuw-web-components/myuw-app-styles@^1?module"></script>
<script nomodule src="https://unpkg.com/@myuw-web-components/myuw-app-styles@^1"></script>
```

To avoid flashing unstyled text, this component also uses [FontFaceObserver](https://github.com/bramstein/fontfaceobserver) to determine when UW-Madison theme fonts are loaded and updates `<body>` with the attribute `myuw-font-loaded`

## Theming

The default theme is based on UW-Madison red and other colors from the [UW-Madison brand guidelines](https://brand.wisc.edu/web/colors/) for web. You don't have to do anything special to use this theme.

To use the "UW-Madison White" theme, add the "uw-madison-white-theme" class to your page's body element, like so:

```html
<body class="uw-madison-white-theme">
    <!-- ... -->
</body>
```


Cross-browser testing provided by:<br/>
<a href="https://www.browserstack.com/"><img width="160" src="https://myuw-web-components.github.io/img/Browserstack-logo.svg" alt="BrowserStack"/></a>
