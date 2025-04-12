FROM node:18

WORKDIR /usr/src/app

# Copy package.json and lock file first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Run migrations and start the app
CMD npm run migrate && npm run dev
