# Coki Demon 😈

## Private files to upload before running:

- `.env`

### Run locally:

- npm i
- npm run dev

### Run with Docker:

- docker build -f Dockerfile.dev -t coki_demon .

- docker run -dp 4000:4000 coki_demon

- docker logs coki_demon

## Deploy:

### Linux:

- go to `deploy/linux` folder and use docker-compose

### Windwos:

- go to `deploy/windows` folder and setup

- run win+r `shell:startup`

- copy direct access of `.vbs` fiile
