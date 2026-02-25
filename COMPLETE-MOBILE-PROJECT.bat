@echo off
echo ==========================================
echo 🚀 DIGI TALENT PRO - GENERADOR DE APK
echo ==========================================
echo.

echo 1. Instalando dependencias...
call npm install
if %errorlevel% neq 0 goto error

echo.
echo 2. Construyendo la web...
call npm run build
if %errorlevel% neq 0 goto error

echo.
echo 3. Configurando Android...
if not exist "android" (
    call npx cap add android
)
call npx cap sync
if %errorlevel% neq 0 goto error

echo.
echo ==========================================
echo ✅ PROYECTO LISTO
echo ==========================================
echo.
echo Para generar la APK final:
echo 1. Abre Android Studio
echo 2. Abre la carpeta "android" que esta dentro de DigiTalentPro-App
echo 3. Ve al menu: Build > Generate Signed Bundle / APK
echo.
pause
exit /b

:error
echo.
echo ❌ OCURRIO UN ERROR
echo Asegurate de tener Node.js instalado.
pause