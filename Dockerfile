FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Expose port for service
EXPOSE 5000

# Copy package.json to image to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code to image
COPY . .

# Build app and start server from script
CMD ["/usr/src/app/run"]