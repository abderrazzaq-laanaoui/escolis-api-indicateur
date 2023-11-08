# escolis-api-indicateur
# Project Name README

This README file provides instructions on how to run the project using Docker Compose. Make sure to follow the prerequisites and create the required `.env` file before running the project.

## Prerequisites

Before running the project, ensure you have the following prerequisites:

1. [Docker](https://www.docker.com/) installed on your machine.
2. Docker Compose installed (usually comes with Docker).

## Environment Configuration

The project requires an environment file named `docker.env`. Create this file in the root of your project and populate it with the following template:

```env
MONGODB_USER=root
MONGODB_PASSWORD=123456
MONGODB_DATABASE=esclois_db
MONGODB_LOCAL_PORT=27017
MONGODB_DOCKER_PORT=27017

NODE_LOCAL_PORT=6868
NODE_DOCKER_PORT=8080

REDIS_LOCAL_PORT=6379
REDIS_DOCKER_PORT=6379
REDIS_PASSWORD=123456
NODE_JWKS_URI=http://localhost:6868/.well-known/jwks.json
```
You can modify the values in this file according to your project requirements.

## Running the Project
To run the project, use the following command in your terminal:

```bash
docker-compose --env-file docker.env up --build -d
```
`--env-file docker.env`  : Specifies the environment file to use for the Docker Compose configuration. \
`up` : Starts the defined services. \
`--build` : Builds images before starting containers. \
`-d` : Runs containers in detached mode, allowing them to run in the background. \

Once the command is executed, the services defined in your `docker-compose.yml` file will be up and running. You can access your application using the appropriate ports and endpoints.
