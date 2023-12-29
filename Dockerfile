# Use an official Node runtime as a parent image
FROM node:18.16.0

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN yarn install

# Bundle app source
COPY . .

# Build your Nuxt app
RUN yarn run build

EXPOSE 3000

# Define the command to run your app
CMD yarn run preview