// Add MyUW brand fonts to the document
const MyuwfontsContainer = document.createElement('template');
MyuwfontsContainer.setAttribute('style', 'display: none;');
MyuwfontsContainer.innerHTML = `
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
`
    

const MyuwDefaultAppTheme = document.createElement('template');
MyuwDefaultAppTheme.innerHTML = `
    <style>
        myuw-app-bar {
            --myuw-app-bar-bg: #c5050c;
            --myuw-app-bar-color: #fff;
            --myuw-app-bar-font: 'Montserrat', Arial, sans-serif;
        }
        myuw-profile {
            --myuw-profile-font: 'Montserrat', Arial, sans-serif;
            --myuw-profile-color: #fff;
        }
    </style>
`;
    
// Add templates to the document 
document.head.appendChild(MyuwfontsContainer.content);
document.head.appendChild(MyuwDefaultAppTheme.content);