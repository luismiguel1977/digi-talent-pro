@echo off
set "JAVA_HOME=C:\Program Files\Android\Android Studio\jbr"
set "ANDROID_HOME=C:\Users\PC\AppData\Local\Android\Sdk"
set "PATH=%JAVA_HOME%\bin;%ANDROID_HOME%\platform-tools;%PATH%"

echo Setup Environment:
echo JAVA_HOME=%JAVA_HOME%
echo ANDROID_HOME=%ANDROID_HOME%

cd android
if not exist "local.properties" (
    echo sdk.dir=C\:\\Users\\PC\\AppData\\Local\\Android\\Sdk > local.properties
)

echo Starting Gradle Build...
call gradlew.bat assembleDebug > build_log.txt 2>&1

if %ERRORLEVEL% NEQ 0 (
    echo BUILD FAILED!
    type build_log.txt
    exit /b %ERRORLEVEL%
)

echo BUILD SUCCESS!
echo APK location: android\app\build\outputs\apk\debug\app-debug.apk
