@echo off
set "JAVA_HOME=C:\Program Files\Android\Android Studio\jbr"
set "ANDROID_HOME=C:\Users\PC\AppData\Local\Android\Sdk"
set "PATH=%JAVA_HOME%\bin;%ANDROID_HOME%\platform-tools;%PATH%"

echo ==========================================
echo    GENERADOR APK RELEASE (UNSIGNED)
echo ==========================================
echo.

echo Sincronizando cambios web...
call npm run build
call npx cap copy android
call npx cap sync android

cd android
if not exist "local.properties" (
    echo sdk.dir=C\:\\Users\\PC\\AppData\\Local\\Android\\Sdk > local.properties
)

echo.
echo Limpiando proyecto...
call gradlew.bat clean

echo.
echo Construyendo APK en modo RELEASE (esto puede tardar)...
call gradlew.bat assembleRelease

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] La construccion fallo.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo [EXITO] APK Release generado correctamente en:
echo android\app\build\outputs\apk\release\app-release-unsigned.apk
pause
