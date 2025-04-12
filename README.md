## Author: Davit Hakobyan
### Homework 1

# First you should clone my project

# Installation

First you should install dependencies. To do this, run the following command in your terminal:
```bash
  npm install
```

# Configure Environment Variables

You should create a `.env` file in the root directory of the project.  \
You can use the `.env.example` file as a template. 


# Database Configuration
You should create a database in PostgreSQL. \
You can use the following command to create a database:
```bash
  createdb -U postgres nutsdb
```

# Migrate Database

If you have a conflict with migration you can remove my migrations and create new one. \
You can use the following command to create a new migration:
```bash
  npm run migrate:create create-messages-table
```

Then you can run the following command to migrate the database:
```bash
  npm run migrate
```

Maybe you can have a problem related to migration where there is a conflict related migration timestamp. \
You can drop migration table and retry migration script again
```bash
  DROP TABLE "pgmigrations";
```

# Run the Project

You can run the project using the following command:
```bash
  npm run dev
```

# Testing

You should start your nats server before running tests. \
You can use the following command to start the nats server:
```bash
  nats-server
```

To publish a test message, you can use the following command:
```bash
   nats pub messages "Some message from Davit_Hakobyan :)"
```

# About Project

I created 3 layer architecture. \
You can see lots of logs in my project usually in a real project there is no this much logs, but I wrote it for you to easily test my project. \
When you publish a message you can see the published message in my logs. \
When it stores to db you will see that it shows table which I used to show it is storing to db

I've also a db folder where my `schema.sql` file is used to create a table. \
You can also see that I've db.mjs which is used to connect to db. \
Also there is file which name is `initDb.js` which is used to initialize db schema. \


# Docker You can run the project using docker. \
You can use the following command to build the docker image:
```bash
  docker build -t nuts-service .
```

Then you can run the docker container using the following command:
```bash
  docker run -p 3000:3000 nuts-service
```

Please be ensure that you are running available port. \
You can change the port in the `docker-compose.yml` file.