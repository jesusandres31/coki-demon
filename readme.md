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
netstat -ano | find "4081"
```

```shell
# kill process by PID
taskkill /PID <PID> /F
```

# DEBUG:

whatsapp web js Cache.js:34 const version = index Html.match(/manifest-([\d\\.]+)\.json/) TypeError: Cannot read properties of null (reading '1')
https://github.com/pedroslopez/whatsapp-web.js/issues/2383
I'm using LocalAuth managed to make it run again by deleting ".wwebjs_auth" and ".wwebjs_cache" folders, then logged in again... It's just a workaround not a fix.
