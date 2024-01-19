# Etimo Homepage

This is the homepage of Etimo AB.

https://etimo.se/

## Installation

```
yarn
```

## Development

```
yarn start
```

Serves on http://localhost:8000

## Production

To build for production:

```
yarn build
```

## Docker

If you want to serve this site (production build) using Docker, simply run:

```
docker-compose up -d
```

Serves on http://localhost:8000

## Deployment

This project will automatically deploy to Netlify when the master branch is updated.

## Node version

When deployed, the project will run on the node version specified in the .node-version
file. If you run locally you can switch which node version using:

nvm use <node-version>
