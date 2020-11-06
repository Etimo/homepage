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
docker build -t etimo-homepage .
docker run --rm -p 8000:80 --name etimo-homepage etimo-homepage
```

Serves on http://localhost:8000 (or whatever public port you choose in the run command).

## Deployment

This project will automatically deploy to Netlify when the master branch is updated.
