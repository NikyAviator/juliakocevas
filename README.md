# juliakocevas

A website for my sister that is an artist.

# Table of Contents

- [Frontend Setup](#frontend-setup)
  - [Create the Vite React Project](#create-the-vite-react-project)
  - [Installing Dependencies](#installing-dependencies)
  - [Running the Project Locally](#running-the-project-locally)
  - [Running the Frontend and Backend](#running-the-frontend-and-backend)
- [Project Structure](#project-structure)
  - [Cleanup and Adding Basic Structure](#cleanup-and-adding-basic-structure)
  - [SCSS Setup](#scss-setup)
- [Docker Setup](#docker-setup)
  - [Building the Frontend Image](#building-the-frontend-image)
  - [Running the Container Locally](#running-the-container-locally)
  - [Pushing Images to Docker Hub](#pushing-images-to-docker-hub)
  - [Pushing Images to Google Container Registry](#pushing-images-to-google-container-registry)
- [Docker Compose](#docker-compose)
- [Kubernetes / K8s](#kubernetes--k8s)
  - [What is Kubernetes?](#what-is-kubernetes)
  - [Key Kubernetes Concepts](#key-kubernetes-concepts)
    - [Cluster](#cluster)
    - [Nodes](#nodes)
    - [Pods](#pods)
    - [Containers](#containers)
    - [Services](#services)
  - [Installing Kubernetes Locally](#installing-kubernetes-locally)
  - [Minikube Commands](#minikube-commands)
  - [Kubectl Commands](#kubectl-commands)
  - [Exposing a Deployment](#exposing-a-deployment)
  - [Kubernetes Service Types](#kubernetes-service-types)
    - [ClusterIP](#clusterip)
    - [NodePort](#nodeport)
    - [LoadBalancer](#loadbalancer)
  - [Scaling](#scaling)
    - [Scaling Up](#scaling-up)
    - [Scaling Down](#scaling-down)
    - [Scaling to Zero (Stopping the App)](#scaling-to-zero-stopping-the-app)
    - [Autoscaling](#autoscaling)
  - [Updating Deployments](#updating-deployments)
    - [Building and Pushing a New Image](#building-and-pushing-a-new-image)
    - [Rolling Out the New Image](#rolling-out-the-new-image)
    - [Checking Deployment Status](#checking-deployment-status)
  - [Rollback a Deployment](#rollback-a-deployment)
  - [Kubernetes Logs & Debugging](#kubernetes-logs--debugging)
  - [Deleting Kubernetes Resources](#deleting-kubernetes-resources)
  - [Declarative Approach](#declarative-approach)
  - [Multiple vs Single Config Files](#multiple-vs-single-config-files)
  - [Managing Data & Volumes with Kubernetes](#managing-data--volumes-with-kubernetes)

## Frontend Setup

### Create the Vite React Project:

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

## Running the Project Locally:

To run the **frontend** locally: cd juliakocevas/frontend/

```
npm run dev
```

### Running the Frontend and Backend:

For **local backend** (serving of the files/media) & **local frontend**.

```
npm run start
```

For **GCP backend** & local **frontend**:

```
npm run start:gcp
```

---

# Project Structure:

### Cleanup and adding basic structure:

_Also, public has been moved to root folder (frontend/public/). This is for your static files._

Delete everything in src/, except:
App.jsx & main.jsx

---

Create folders in src/ :

```
mkdir Components Pages scss
```

### SCSS Setup

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

# Docker Setup:

## Building the Frontend Image:

```
docker build -t juliakocevas-frontend .
```

## Running the Container Locally:

```
docker run --rm -p 8080:80 juliakocevas-frontend
```

[Open on: [localhost/8080](http://localhost:8080) to see]

---

## Pushing Images to Docker Hub:

```
docker login

docker tag your-frontend-app your-dockerhub-username/your-frontend-app:latest

docker push your-dockerhub-username/your-frontend-app:latest
```

To get the image from Docker Hub:

```
docker pull your-dockerhub-username/your-frontend-app:latest
```

Pushing Images to Google Container Registry:

```
docker tag your-dockerhub-username/your-frontend-app:latest gcr.io/[PROJECT_ID]/[IMAGE_NAME]:latest
```

Push your Docker image to GCR:

```
docker push gcr.io/[PROJECT_ID]/[IMAGE_NAME]:latest
```

---

## Pushing Images to Google Container Registry

```
gcloud auth login
gcloud auth configure-docker

docker push gcr.io/your-gcp-project-id/juliakocevas-frontend
```

# Docker Compose:

**(Not working at the moment, working on a fix!)**

To build and start services, in root project folder write in terminal:

```
docker-compose up --build
```

--build: Forces a rebuild of the images before starting the containers.

**Frontend** will be accessible at http://localhost:8080.

**Backend** will be exposed internally and handle API requests on http://localhost:5000/api/artworks.

---

# Kubernetes / K8s

Now we have dockerized our project, let us take things to the next level by orchestrating and taking full control over our project by diving deep together into the world of K8s!

The official website:

```
https://kubernetes.io/
```

## What is Kubernetes / K8s?

The TLDR is: An open-source system for orchestrating container deployments.
It handles things like:

1. Automatic Deployment
2. Scaling & Load Balancing
3. Management (Monitoring and replacement of containers)

We can and we later will write a **Kubernetes Configuration** that Any Cloud provider or Self Hosted can understand and deploy your end state.

Let us now explain a few **key K8s concepts** that can clarify how all this works:

### 1. Cluster

A **Kubernetes cluster** is a collection of machines (physical or virtual) that work together to run and manage containerized applications. It usually consists of:

- One or more Master Nodes (the control plane).
- One or more Worker Nodes (where your workloads run).

All these nodes communicate with each other, ensuring your applications run as expected, can scale, and are kept in a desired state.

### 2. Nodes

A **node** is a single machine (whether physical server or virtual machine) within a Kubernetes cluster. There are generally two types of nodes:

- Master Node – Responsible for managing and controlling the cluster (the control plane).
- Worker Node – Responsible for running your workloads (the containerized applications).

Nodes have specific Kubernetes processes installed (like the kubelet, container runtime, etc.) that allow them to communicate with the cluster and host containers.

### 3. Master Node

The **Master Node** (also referred to as the Control Plane) controls and manages the entire Kubernetes cluster. It makes decisions about scheduling, scaling, and how workloads are orchestrated. Key components on the master node include:

- **API Server**: The front-end to the Kubernetes control plane. It handles requests from users and tools (CLI, dashboard, etc.) and exposes the Kubernetes API.
- **etcd**: A consistent and highly available key-value store where Kubernetes stores all cluster data.
- **Scheduler**: Determines which node a new pod will be assigned to, based on resource availability and other constraints.
- **Controller Manager**: Runs background processes that handle routine tasks (e.g., ensuring the correct number of pods, dealing with node failures, etc.).

### 4. Worker Node

A **Worker Node** actually runs the applications (containers) defined by your Kubernetes configuration. Key components on each worker node include:

- **kubelet**: An agent that ensures containers run in a pod. It communicates with the API Server, receives instructions, and reports back on pod health and status.
- **Container Runtime**: Responsible for running containers (e.g., Docker, containerd, CRI-O).
- **kube-proxy**: Manages network rules on each node, allowing network communication to and from pods (e.g., load balancing, forwarding requests to correct pods).

### 5. Pods

A **Pod** is the smallest deployable unit in Kubernetes. You can think of it as a wrapper around one or more containers that share:

- A network namespace (they share the same IP address).
- Storage volumes (if configured).
- Configuration such as environment variables.

In most cases, you’ll have **one application container per pod**, but you can also have “sidecar” containers that complement the main container (e.g., a logging or monitoring agent).

### 6. Containers

**Containers** are the actual packages of software that contain your application code and all its dependencies. Kubernetes itself doesn’t create containers; instead, it relies on a **container runtime** (such as Docker or containerd) to run them.

You define container images (e.g., with a Dockerfile).
Kubernetes schedules and manages how many container instances (pods) should run and on which worker nodes.

### 7. Services

A Service in Kubernetes is an abstraction that provides a stable endpoint (IP or DNS name) and load-balancing across a set of pods. Because pods are ephemeral—they can come and go, and their IP addresses can change—Services allow you to expose and communicate with your applications reliably.

- ClusterIP: Exposes the Service internally to the cluster.
- NodePort: Exposes the Service on each node’s IP at a static port.
- LoadBalancer: Exposes the Service externally using a cloud provider’s load balancer.

The primary goal is to decouple where pods are running from how other services or external clients find and access them.

### Putting it All Together

1. You (or your CI/CD system) define container images and specify how many replicas (pods) you need.
2. The **Master Node** (control plane) schedules these pods to run on the **Worker Nodes**.
3. Each **Pod** runs one or more **Containers**.
4. You create a **Service** to provide a stable network endpoint to these pods and to load-balance traffic among them.

---

# Installing Kubernetes locally

When learning Kubernetes, it’s often easiest to run everything locally on your computer. On Arch Linux (or EndeavourOS, Manjaro, etc.), there are multiple ways to spin up a local K8s cluster. Below are a few popular options:

1. Minikube – The most commonly used local K8s setup.
2. k3s – A lightweight Kubernetes distribution from Rancher.
3. MicroK8s – A Canonical-developed lightweight K8s option.

We will use Minikube to host the website locally on a cluster on your computer before we host it on any Cloud Provider (GCP in this case).

Always refer to the Arch Wiki & Minikube docs when in doubt about the installation etc:

```
https://wiki.archlinux.org/title/Kubernetes
```

```
https://minikube.sigs.k8s.io/docs/
```

Kubernetes Distributions (Alternatives):

```
https://github.com/mikucat0309/awesome-kubernetes-distro
```

```
https://nubenetes.com/matrix-table/
```

---

### Minikube Commands

minikube docs:

```
https://minikube.sigs.k8s.io/docs/
```

1. Start Minikube

```bash
minikube start
```

- By default, this will try to detect your container runtime (e.g., Docker) or VM driver (e.g., VirtualBox).

- **Optional**: Specify a driver:

```bash
minikube start --driver=docker
```

2. Stop Minikube

```bash
minikube stop
```

3. Delete Minikube Cluster

```bash
minikube delete
```

4. Check status

```bash
minikube status
```

5. More info:

```bash
minikube dashboard
```

---

### Kubectl Commands

Command line tool (kubectl):

```
https://kubernetes.io/docs/reference/kubectl/
```

1. Kubectl help:

```bash
kubectl help
```

2. Kubectl create deployment:

```bash
kubectl create deployment first-app --image=eclair2093/kub-first-app
```

3. Get more info about the deployment:

```bash
kubectl get deployments
```

```bash
kubectl get pods
```

4. Delete deployments:

```bash
kubectl delete deployments first-app
```

5. Images need to be pulled from Docker Hub:

I am first showing a simple NodeJS project with two endpoints, when we have the hang of that we will continue with the images for this project!

```bash
docker tag kub-first-app eclair2093/kub-first-app
```

```bash
docker push eclair2093/kub-first-app
```

---

### Exposing a Deployment with `kubectl expose`

The `kubectl expose` command is used to create a Kubernetes **Service** that exposes a Deployment or Pod to the network. This allows you to access the application from outside the cluster or internally within the cluster.

```bash
kubectl expose deployment first-app --type=LoadBalancer --port=8080
```

#### What does this command do?

1. `kubectl expose`: Creates a Kubernetes Service to expose the specified Deployment (first-app in this case).
2. `deployment first-app`: Specifies the Deployment to expose. The Deployment must already exist in your cluster.
3. `--type=LoadBalancer`: Specifies the Service type. This determines how the application will be accessible (more on this below).
4. `--port=8080`: The port on which the Service will listen for incoming traffic and forward it to the application.

#### Once the command is executed:

- A `Service` named first-app will be created.
- The application will be accessible on port `8080`.
- Depending on the service `--type` specified, the application will be exposed differently (e.g., internal-only, external access via a load balancer, etc.).

---

### Kubernetes Service Types

Kubernetes Services are used to expose applications running in a cluster to different kinds of network access. Here's a summary of the main types of Services:

1. **ClusterIP (Default)**

- **Description**: Exposes the application internally within the cluster. This type is used when you only need other applications within the cluster to communicate with the service.

- **Use Case**: Internal microservices communication.

2. **NodePort**

- **Description**: Exposes the application **externally** on a static port (the same port on all nodes). You can access the service using the `<NodeIP>:<NodePort>` address.

- **Use Case**: Useful for debugging or quick external access without requiring a cloud provider's load balancer.

3. **LoadBalancer**

- **Description**: Exposes the application externally using a cloud provider's load balancer (e.g., AWS ELB, Google Cloud Load Balancer, etc.).

- **Use Case**: Production-grade applications that require external access with high availability and scalability.

4. **ExternalName**

- **Description**: Maps a Service to an external DNS name. Instead of routing traffic to Pods, it redirects traffic to an external resource.

- **Use Case**: When you need to redirect traffic to an external service (e.g., a managed database outside the cluster).

---

#### Imperative Approach:

To check that everything is up and kickin':

```bash
kubectl get pods -A
```

and our services:

```bash
kubectl get services
```

```
NAME         TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
first-app    LoadBalancer   10.110.99.224   <pending>     8080:31070/TCP   11m
kubernetes   ClusterIP      10.96.0.1       <none>        443/TCP          14d
```

To reach our cluster locally we need to map a Port to an IP address with the following command:

Note: When using Minikube, LoadBalancer services will show `<pending>` for `EXTERNAL-IP` because Minikube does not create a cloud load balancer. Instead, you can access the service via `minikube service` to map it to a local port.

```bash
minikube service first-app
```

```
|-----------|-----------|-------------|---------------------------|
| NAMESPACE |   NAME    | TARGET PORT |            URL            |
|-----------|-----------|-------------|---------------------------|
| default   | first-app |        8080 | http://192.168.49.2:31070 |
|-----------|-----------|-------------|---------------------------|
🏃  Starting tunnel for service first-app.
|-----------|-----------|-------------|------------------------|
| NAMESPACE |   NAME    | TARGET PORT |          URL           |
|-----------|-----------|-------------|------------------------|
| default   | first-app |             | http://127.0.0.1:45625 |
|-----------|-----------|-------------|------------------------|
🎉  Opening service default/first-app in default browser...
❗  Because you are using a Docker driver on linux, the terminal needs to be open to run it.
```

---

## Scaling:

#### Scaling Up

A **"replica"** is simply an **instance of a Pod / Container**. 3 Replicas means that the same Pod / Container is running three times.

```bash
kubectl scale deployment/first-app --replicas=3
```

```bash
kubectl get pods
```

Expected output:

```
NAME                         READY   STATUS    RESTARTS      AGE
first-app-74dd54458b-7fqh4   1/1     Running   0             10s
first-app-74dd54458b-clwsz   1/1     Running   0             10s
first-app-74dd54458b-mc27z   1/1     Running   8 (43m ago)   7d1h
```

---

#### Scaling Down

To **scale down** a deployment (e.g., back to 1 replica):

```bash
kubectl scale deployment/first-app --replicas=1
```

Check the Pods again:

```bash
kubectl get pods
```

Expected output:

```
NAME                         READY   STATUS    RESTARTS      AGE
first-app-74dd54458b-mc27z   1/1     Running   8 (73m ago)   7d1h
```

---

#### Scaling to Zero (Stopping the App)

If you need to **stop** the application but keep the Deployment definition:

```bash
kubectl scale deployment/first-app --replicas=0
```

Check the Pods again:

```bash
kubectl get pods
```

Expected output:

```arduino
No resources found in default namespace.
```

The application is now stopped, but you **haven't deleted** the deployment.

---

##### Autoscaling (Optional)

Kubernetes also allows autoscaling based on CPU and memory usage:

```bash
kubectl autoscale deployment first-app --min=1 --max=5 --cpu-percent=80
```

This will automatically scale the deployment **between 1 and 5 replicas**, depending on CPU load.

---

#### Updating deployments

Let's say we now made changes to our code, we want to use the new code and build an image with Docker.

Our current "App" is this right now (saved under my Dockerhub account eclair2093/kub-first-app with the **default tag** of: **latest** ):

```javascript
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from this NodeJS app!</h1>
    <p>Try sending a request to /error and see what happens</p>
  `);
});

app.get('/error', (req, res) => {
  process.exit(1);
});

app.listen(8080);
```

But now we want to change our code a bit and keep track of our different versions:

```javascript
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1> Hello my little gopher!</h1>
    <p>Try sending a request to /error and see what happens. A little error might occur ;)</p>
  `);
});

app.get('/error', (req, res) => {
  process.exit(1);
});

app.listen(8080);
```

The Dockerfile for those who wonder:

```javascript
FROM node:14-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "app.js" ]
```

Now let us build a new image based on this new code and then push it to our repo!

Note! **:2** signifies the tag name/versioning etc!

Build new image:

```bash
docker build -t eclair2093/kub-first-app:3 .
```

Push new image:

```bash
docker push eclair2093/kub-first-app:3
```

Now specify the new image for deployment (it will detect the tag and redownload the new code and restart the containers based upon this new image):

```bash
kubectl set image deployment/first-app kub-first-app=eclair2093/kub-first-app:3
```

Expected output:

```bash
deployment.apps/first-app image updated
```

Check the status of your deployments:

```
kubectl rollout status deployment/first-app
```

Expected output:

```
deployment "first-app" successfully rolled out
```

---

#### Rollback a deployment

What if a new update **breaks** your app? Kubernetes lets you **rollback** to a previous version.

Rollback to the last working version:

```bash
kubectl rollout undo deployment/first-app
```

Check previous versions:

```bash
kubectl rollout history deployment/first-app
```

Rollback to a specific version:

```bash
kubectl rollout undo deployment/first-app --to-revision=2
```

---

#### Kubernetes Logs & Debugging

If something is wrong, we need logs, let us get them!

View logs from a Pod:

```bash
kubectl logs POD_NAME
```

Stream logs (live updates):

```bash
kubectl logs -f POD_NAME
```

Describe a Pod (useful for debugging):

```bash
kubectl describe pod POD_NAME
```

Check why a Pod is crashing:

```bash
kubectl get events --sort-by=.metadata.creationTimestamp
```

---

#### Deleting Kubernetes Resources

Delete a deployment:

```bash
kubectl delete deployment first-app
```

Delete a service:

```bash
kubectl delete service first-app
```

Delete all running pods:

```bash
kubectl delete pods --all
```

---

## Declarative Approach

We are still working on the small app.js app with just some text, just to familiarize us with the declarative Kubernetes approach!

we create two files in this case in my kub-action-01-starting-setup folder:

**deployment.yaml**:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: second-app-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: second-app

  template:
    metadata:
      labels:
        app: second-app # This is the label of the pod
    spec:
      containers:
        - name: second-node # This is the name of the container
          image: eclair2093/kub-first-app:3
```

**service.yaml**:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: backend
spec:
  selector:
    app: second-app # This is the label of the pod
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
  type: LoadBalancer
```

1. To start everything up from a "cold" start:

```bash
minikube start
```

2. Verify Running Pods, Deployments and Services:

```bash
kubectl get all
```

Expected output (nothing running from your end):

```javascript
NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   28d
```

If you see any existing deployment for second-app-deployment, delete it first.
But if you see the above thing that means:

- **service/kubernetes**: This is the default Kubernetes service that is always present in a Kubernetes cluster. It allows internal communication between cluster components.
- **ClusterIP**: 10.96.0.1: This is the internal IP assigned to the Kubernetes API service.
- **EXTERNAL-IP**: <none>: Since this is an internal service, it doesn’t have an external IP.
- **PORT(S)**: 443/TCP: It listens on port 443 (HTTPS) to handle API requests.
- **AGE**: 28d: Your Minikube cluster has been running for 28 days.

---

3. Applying our files (\*.yaml)

You can apply **both** deployment.yaml and service.yaml in one go using the following command:

```bash
kubectl apply -f deployment.yaml -f service.yaml
```

Alternatively, if both files are in the same directory, you can apply all YAML files in that directory with:

```bash
kubectl apply -f .
```

**What Happens?**

- Kubernetes will create/update the deployment and the service at the same time.
- If you have more YAML files in the directory (e.g., ConfigMaps, Secrets), they will also be applied.

After applying, you can check if everything is running properly with:

```bash
kubectl get all
```

The output:

```bash
NAME                                         READY   STATUS    RESTARTS   AGE
pod/second-app-deployment-66f8cc77c5-t4v6c   1/1     Running   0          3m54s

NAME                 TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE
service/backend      LoadBalancer   10.101.170.127   <pending>     80:32666/TCP   3m54s
service/kubernetes   ClusterIP      10.96.0.1        <none>        443/TCP        28d

NAME                                    READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/second-app-deployment   1/1     1            1           3m54s

NAME                                               DESIRED   CURRENT   READY   AGE
replicaset.apps/second-app-deployment-66f8cc77c5   1         1         1       3m54s
```

To now expose the Service to an IP address we write:

```bash
minikube service backend
```

Expected Output:

```
|-----------|---------|-------------|---------------------------|
| NAMESPACE |  NAME   | TARGET PORT |            URL            |
|-----------|---------|-------------|---------------------------|
| default   | backend |          80 | http://192.168.49.2:32666 |
|-----------|---------|-------------|---------------------------|
🏃  Starting tunnel for service backend.
|-----------|---------|-------------|------------------------|
| NAMESPACE |  NAME   | TARGET PORT |          URL           |
|-----------|---------|-------------|------------------------|
| default   | backend |             | http://127.0.0.1:33801 |
|-----------|---------|-------------|------------------------|
🎉  Opening service default/backend in default browser...
❗  Because you are using a Docker driver on linux, the terminal needs to be open to run it.
```

For more info (GUI):

```bash
minikube dashboard
```

---

To **delete** the created resources we can:

```bash
kubectl delete -f=deployment.yaml -f=service.yaml
```

OR

```bash
kubectl delete -f deployment.yaml,service.yaml
```

More Ways to Delete Resources:

If you want to delete **all resources in the current directory** (e.g., all .yaml files):

```bash
kubectl delete -f .
```

Or, if you want to delete **all deployments, services, and pods** in the namespace:

```bash
kubectl delete deployments,services,pods --all
```

---

### Multiple vs Single Config Files

We can merge multiple files into ONE file.

Important note:

The files need to be separated with three "-" dashes.
Also, we put the Service first.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: backend
spec:
  selector:
    app: second-app # This is the label of the pod
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
  type: LoadBalancer
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: second-app-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: second-app

  template:
    metadata:
      labels:
        app: second-app # This is the label of the pod
    spec:
      containers:
        - name: second-node # This is the name of the container
          image: eclair2093/kub-first-app:3
```

### Why Should the Service Be on Top?

While Kubernetes does not enforce a strict order when defining multiple resources in a single YAML file, placing the Service before the Deployment is a best practice. Here's why:

1. Avoids Initial Connection Issues:

- When Kubernetes creates resources in a YAML file, it processes them in order.
- If the Deployment starts first, it will immediately start creating Pods.
- Since the Service is not yet created, any processes inside the container that try to connect to the Service may fail initially.

2. Ensures a Stable Networking Endpoint:

- By defining the Service first, Kubernetes ensures that the DNS record for the Service is created before the Pods start running.
  . This guarantees that the Pods can resolve and communicate with the Service as soon as they start.

3. Dependency Handling:

- While the Deployment depends on the Service (for networking), the Service does not depend on the Deployment.
- This means it is safer to create the Service first and let Kubernetes set up the networking before the Pods start.

---

### Managing Data & Volumes with Kubernetes

We are still diving deeper into K8s theory. In this part we will discuss Data & Volumes in Kubernetes.

The code we will use:

```javascript
const path = require('path');
const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const filePath = path.join(__dirname, 'story', 'text.txt');

app.use(bodyParser.json());

app.get('/story', (req, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to open file.' });
    }
    res.status(200).json({ story: data.toString() });
  });
});

app.post('/story', (req, res) => {
  const newText = req.body.text;
  if (newText.trim().length === 0) {
    return res.status(422).json({ message: 'Text must not be empty!' });
  }
  fs.appendFile(filePath, newText + '\n', (err) => {
    if (err) {
      return res.status(500).json({ message: 'Storing the text failed.' });
    }
    res.status(201).json({ message: 'Text was stored!' });
  });
});

app.get('/error', (req, res) => {
  process.exit(1);
});

app.listen(3000);
```

A simple code that saves text to a "text.txt" file and also retrieves the saved data on the same endpoint.
