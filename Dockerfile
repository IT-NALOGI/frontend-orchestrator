# Use a base image with Node.js pre-installed
FROM node:14-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build

# Use a lightweight Nginx image to serve the static files
FROM nginx:alpine

# Copy the built files from the builder stage to the Nginx server's public directory
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 3005

# Command to start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
