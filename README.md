# MyUW App Styles

This HTML import contains custom CSS properties that are consumed by other components in the myuw-web-components space. 

## How to use

Add the app styles script to your document:

```html
<script src="https://unpkg.com/@myuw-web-components/myuw-app-styles/myuw-app-styles.js"></script>
```

To avoid flashing unstyled text, this component also uses [FontFaceObserver(https://github.com/bramstein/fontfaceobserver) to determine when UW-Madison theme fonts are loaded and interacts with the `<myuw-app-bar>` accordingly.
