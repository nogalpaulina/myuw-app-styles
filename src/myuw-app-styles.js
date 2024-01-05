import FontFaceObserver from 'fontfaceobserver';
import defaultAppThemeTpl from './default-app-theme.html';
import fontsTpl from './fonts.html';

// Add MyUW brand fonts to the document
const fonts = document.createElement('template');
fonts.setAttribute('style', 'display: none;');
fonts.innerHTML = fontsTpl;
// Prepare stylesheet of custom CSS properties
const defaultAppTheme = document.createElement('template');
defaultAppTheme.innerHTML = defaultAppThemeTpl;

// Add templates to the document
document.head.appendChild(fonts.content);
document.head.appendChild(defaultAppTheme.content);

// Set up font observer
let myuwFontFace = new FontFaceObserver('Red Hat Text', {});

myuwFontFace.load().then(res => {
    document.body.setAttribute('myuw-font-loaded', true);
}).catch(error => {
    document.body.setAttribute('myuw-font-loaded', true);
    throw new Error(error);
});
