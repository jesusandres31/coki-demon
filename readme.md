# Coki Demon 😈

## Private files to upload before running:

- `.env`

## Deploy PM2:

```shell
npm run install:pm2
npm run deploy
```

## Deploy Windows:

- go to `deploy/windows` folder and setup

- run win+r `shell:startup`

- copy direct access of `.vbs` file to `startup` folder

### Utils:

```shell
# check if process is running on a port
netstat -ano | find "<PORT_NUM>"
```

```shell
# kill process by PID
taskkill /PID <PID> /F
```
