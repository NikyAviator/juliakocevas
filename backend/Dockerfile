# Step 1: Use Node.js official image
FROM node:22.9.0

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Expose the backend port
EXPOSE 5000

# Set the environment variables (You can override this in docker-compose)
ENV PORT=5000

# Start the backend server
CMD ["node", "servergcp.js"]
