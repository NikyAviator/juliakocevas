# juliakocevas

A website for my sister than is an artist.

**Let's start with the frontend:**

## Create the vite react project:

1. npm init vite@latest . (creates project in same folder)

## Installing Dependencies:

Dependencies:

```
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome bootstrap react react-bootstrap react-icons react-router-dom react-dom
```

Dev Dependencies:

```
npm install --save-dev @vitejs/plugin-react eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh sass vite
```

OPTIONAL: X. npm install reactstrap (https://reactstrap.github.io/?path=/story/home-installation--page) X. npm install mdb-ui-kit (https://mdbootstrap.com/docs/standard/getting-started/installation/)

## To run:

To run: cd juliakocevas/frontend/

```
npm run dev
```

---

# Customize:

### Cleanup and adding basic structure:

_Also, public has been moved to root folder (frontend/public/). This is for your static files._

Delete everything in src/, except:
App.jsx & main.jsx

---

Create folders in src/ :

```
mkdir Components Pages scss
```

The styles.scss file:

```
// https://getbootstrap.com/docs/5.3/getting-started/vite/
// Custom.scss
// Option A: Include all of Bootstrap
$body-bg: #e4b15f; // Set your desired background color

@import '../../node_modules/bootstrap/scss/bootstrap';
// Include any default variable overrides here (though functions won't be available)

// Then add additional custom code here Like Google Fonts:
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&family=Roboto+Condensed:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap');

// Import your own SCSS files
@import './sticky-footer.scss';
@import '../Components/Accordion/Accordion.scss';
@import '../Components/random-color/randomcolor.scss';
@import '../Components/star-rating/starrating.scss';
@import './nikyinfo.scss';
@import './nikytextinfo.scss';
@import './downloadcvbutton.scss';

```

import './scss/styles.scss';

touch sticky-footer.scss

```
#root {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
#root main {
  flex: 1 0 auto; /* This tells the browser to make the main content grow and shrink as needed, but not to shrink less than its base size */
}
#root footer {
  flex-shrink: 0; /* This tells the browser that the footer should not shrink if there is not enough space */
}
```

# How to run for local:

## cd to root project folder and:

For local backend (serving of the files) and local frontend.

```
npm run start
```

For GCP backend and local frontend:

```
npm run start:gcp
```

# Docker:

The frontend:

```
docker build -t juliakocevas-frontend .
```

Run the container: (Removed on close):

```
docker run --rm -p 8080:80 juliakocevas-frontend
```

[Open on: [localhost/8080](http://localhost:8080) to see]

---

To update the image on Docker Hub:

```
docker login

docker tag your-frontend-app your-dockerhub-username/your-frontend-app:latest

docker push your-dockerhub-username/your-frontend-app:latest
```

To get the image from Docker Hub:

```
docker pull your-dockerhub-username/your-frontend-app:latest
```

Tag your Docker Image to Google Container Registry (GCR):

```
docker tag your-dockerhub-username/your-frontend-app:latest gcr.io/[PROJECT_ID]/[IMAGE_NAME]:latest
```

Push your Docker image to GCR:

```
docker push gcr.io/[PROJECT_ID]/[IMAGE_NAME]:latest
```

# Docker compose:

To build and start services, in root project folder write in terminal:

```
docker-compose up --build
```

--build: Forces a rebuild of the images before starting the containers.

### Frontend will be accessible at http://localhost:8080.

### Backend will be exposed internally and handle API requests on http://localhost:5000.
