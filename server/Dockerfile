FROM node:16
# Set the working directory in the image

WORKDIR /app
# Copy the package.json and package-lock.json files to the image
COPY package*.json ./

# Install the required packages
RUN yarn 

# Copy the application code to the image
COPY . .

EXPOSE 8000
# Set the command to run when the container starts
CMD [ "yarn", "start" ]