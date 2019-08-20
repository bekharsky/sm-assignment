# Supermetrics Code Assignment

## Description

Node.js application made with functional approach.

## Deployment

Runs on Node.js LTS CLI or within Docker container.

#### Setup steps

**1. Run from CLI:**

Intall needed packages:

`npm i`

Run:

`npm start`

Development mode:

`npm run dev`

**2. Docker setup:**

Both [Docker](https://docs.docker.com/install/)
and [Docker Compose](https://docs.docker.com/compose/install/) are need to be installed.

Verbose mode:

`docker-compose up`

Detached state:

`docker-compose up -d`

Shutdown:

`docker-compose down`

## Run application

Point your browser at [http://localhost:3000](http://localhost:3000) to see the application interface.

## Alternative view

Also JSON mode is available. [http://localhost:3000/stats/year](/stats/year) to get the total posts split by week and [http://localhost:3000/stats/monthly?month=5](/stats/monthly?month=5) to get all the available metrics by a given month. Param `month` represents month number as in JavaScript (from 0 to 11).

## Testing

Done with Jest.

`npm run test`

## Docs

Done with JSDoc.

`npm run doc`

Docs will appear in `docs` directory at the project root.

## Notes

Weeks are calculated by the nearest thursday (ISO) as mentioned in [https://www.cl.cam.ac.uk/~mgk25/iso-time.html](https://www.cl.cam.ac.uk/~mgk25/iso-time.html)
