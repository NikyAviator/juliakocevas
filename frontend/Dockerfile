# Step 1: Build the React app
FROM node:21 as build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./
RUN npm install

# Copy the rest of the files
COPY . .

# Build the frontend
RUN npm run build

# Step 2: Serve the React app
FROM nginx:alpine

# Copy the build files to the nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]