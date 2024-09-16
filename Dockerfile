FROM node:18-bookworm



# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./


# Copy the rest of the application code
COPY . .

RUN npm install \ 
&& npx playwright install-deps  \
&& npx playwright install chromium \
&& npx playwright install firefox 


# Expose the port the app runs on
EXPOSE 8080

# Define the command to run the app
CMD ["npx", "playwright", "test"]