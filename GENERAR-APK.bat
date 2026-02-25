@echo off
set "JAVA_HOME=C:\Program Files\Android\Android Studio\jbr"
set "ANDROID_HOME=C:\Users\PC\AppData\Local\Android\Sdk"
set "PATH=%JAVA_HOME%\bin;%ANDROID_HOME%\platform-tools;%PATH%"

echo ==========================================
echo       GENERADOR AUTOMATICO DE APK
echo ==========================================
echo JAVA_HOME=%JAVA_HOME%
echo ANDROID_HOME=%ANDROID_HOME%
echo.

echo Sincronizando cambios web...
call npm run build
call npx cap copy android

cd android
if not exist "local.properties" (
    echo sdk.dir=C\:\\Users\\PC\\AppData\\Local\\Android\\Sdk > local.properties
)

echo Limpiando proyecto y construyendo APK (esto puede tardar unos minutos)...
call gradlew.bat clean
call gradlew.bat assembleDebug

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] La construccion fallo. Revisa los mensajes arriba.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo [EXITO] APK generado correctamente en:
echo android\app\build\outputs\apk\debug\app-debug.apk
pause
