# Base image
FROM node:16-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Install Nest CLI globally
RUN yarn global add @nestjs/cli
# Copy other files and directories to the working directory
COPY . .

# Build the Nestjs app
RUN yarn build

# Expose the app port
EXPOSE 3001

# Start the Nestjs app
CMD ["yarn", "start:prod"]

