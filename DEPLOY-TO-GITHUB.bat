@echo off
echo ==========================================
echo 🚀 DESPLEGAR DIGI TALENT PRO EN GITHUB
echo ==========================================
echo.
echo Este script te ayudara a subir tu app a GitHub para usarla como PWA.
echo.
echo PASO 1: CREAR REPOSITORIO EN GITHUB
echo -----------------------------------
echo 1. Ve a https://github.com/new
echo 2. Nombre del repositorio: digi-talent-pro (o el que quieras)
echo 3. Publico o Privado: Publico (recomendado para Pages gratis)
echo 4. NO marques "Initialize with a README" ni .gitignore
echo 5. Dale a "Create repository"
echo.
echo PASO 2: CONECTAR Y SUBIR
echo ------------------------
set /p REPO_URL="Pega aqui la URL de tu repositorio (ej: https://github.com/usuario/repo.git): "

if "%REPO_URL%"=="" goto error

echo.
echo Conectando con %REPO_URL%...
git remote add origin %REPO_URL%
git branch -M main
git push -u origin main

echo.
echo PASO 3: PUBLICAR PWA
echo --------------------
echo Subiendo la version web...
call npm run deploy

echo.
echo ==========================================
echo ✅ ¡LISTO!
echo ==========================================
echo Tu app estara disponible en unos minutos en:
echo https://[TU-USUARIO].github.io/[NOMBRE-REPO]/
echo.
echo Abre ese enlace en tu movil y dale a "Instalar aplicacion".
echo.
pause
exit /b

:error
echo.
echo ❌ Debes introducir una URL valida.
pause