@Echo off

set PORT=4081 

:: FOR /F "tokens=5 delims= " %%P IN ('netstat -a -n -o ^| findstr :%PORT%') DO @ECHO TaskKill.exe /PID %%P
FOR /F "tokens=5 delims= " %%P IN ('netstat -a -n -o ^| findstr :%PORT%') DO TaskKill.exe /F /PID %%P

cd ../../

git pull

cd deploy/windows
 
:: here your script path 
CScript "C:\Users\Usuario\NodeProjects\ctesf5-node-calendar\calendar-wpp-node-ctesf5\deploy\windows\4081.vbs"

@Echo process successfully started...

pause