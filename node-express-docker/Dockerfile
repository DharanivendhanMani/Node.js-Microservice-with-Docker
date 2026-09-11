# 1. Use an official, lightweight Node runtime as a parent image
FROM node:22-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy dependency definitions first to leverage Docker cache layers
COPY package*.json ./

# 4. Install production dependencies
RUN npm ci --only=production

# 5. Copy the remaining application source files
COPY . .

# 6. Inform Docker that the container listens on port 3000 at runtime
EXPOSE 3000

# 7. Define the execution command to spin up your microservice
CMD ["npm", "start"]
