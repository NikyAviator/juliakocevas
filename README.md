# juliakocevas

A website made in React for my sister

## VITE project with backend and frontend map:

Front end map:
cd into and:

1. npm init vite@latest . (skapar i samma map)
2. npm install react-router-dom
3. npm install bootstrap (https://getbootstrap.com/) (använd inte JS delen i bootstrap, det krockar med våra ramverk)
4. npm install react-bootstrap
5. npm install react-icons --save
6. npm install sass (installerar sass kompliatorn)

start frontend without backend being connected:
npm run dev -> in frontend map (starts the frontend)

OPTIONAL:
X. npm install reactstrap (https://reactstrap.github.io/?path=/story/home-installation--page)
X. npm install mdb-ui-kit (https://mdbootstrap.com/docs/standard/getting-started/installation/)

Back end map:
cd into and:
npm init -y
touch .gitignore add node_modules/ for backend!

1. npm install express
2. npm install nodemon
3. npm install (chose DB)

# Basic project done.

## Cleanup:

1. I src mappen: ta bort allt förutom main.jsx
2. index.html : ta bort fav icon (<link href="favicon.svg">)
3. main.jsx : ta bort import './index.css'
   Add additional files:

4. skapa: App.jsx =>

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ALLA komponenter;

```
export default function App(){
  return <Router>
    <header><Header /></header>
    <main>
        <Routes>
           <Route path="/" element={<StartPage />} />
           <Route path="/about-us" element={<AboutUsPage />} />
           <Route path="/products" element={<ProductsPage />} />
        </Routes>
    </main>
    <footer><Footer /></footer>
</Router>
}
```

5. Skapa filerna i src mappen: Header.jsx, Footer.jsx, StartPage.jsx, AboutUsPage.jsx, ProductsPage.jsx etc.

Import of components:
(sidenote: HOW TO IMPORT CORRECTLY tex i Header komponent:
import Container from 'react-bootstrap/Container'; <= CORRECT WAY)

# ADDING BOOTSTRAP:

1. npm install bootstrap (https://getbootstrap.com/) (använd inte JS delen i bootstrap, det krockar med våra ramverk)
2. npm install sass (installerar sass kompliatorn)
3. npm install react-bootstrap

OPTIONAL:
X. npm install reactstrap (https://reactstrap.github.io/?path=/story/home-installation--page)
X. npm install mdb-ui-kit (https://mdbootstrap.com/docs/standard/getting-started/installation/)

### Konfiguera bootstrap/filer:

1. skapa 'public' folder i root folder. (här skall bilder, json, statiska filer, filmer etc va)
2. skapa 'scss' folder i src folder.
3. skapa 'main.scss' i scss foldern. Importera den i App() => import "./scss/main.scss";
4. 'main.scss' är "connectorn" dvs, där skall alla imports vara, vi börjar med att importera bootstraps sass-baserade källkod så vi kan manipulera/ändra den:
   (main.scss) :

//Import Bootastrap
@import "../../node_modules/bootstrap/scss/bootstrap";
(kan gå dit genom att trycka CTRL + click, vi kan leta efter variables för att ändra dem).

Om vi override bootstrap variables:

1. //Bootstrap variable overrides (måste komma innan import bootstrap!):
   $body-bg: black; (tex)
$body-color: white; (tex)

2. //Import Bootastrap
   @import "../../node_modules/bootstrap/scss/bootstrap";

3. //Import our own scss (could be several files)
   @import "./sticky-footer";
   @import "./body";

# Sticky footer:

1. Skapa ny fil i scss mappen: sticky-footer.scss
2. I sticky-footer.scss:

```
#root {   <- ID ROOT för allt är monterat där!
display: flex;
min-height: 100vh;
flex-direction: column;
}
#root main {
flex: 1;
}
```

3. import the file in our main.scss
