@echo off
echo ==========================================
echo 🚀 ACTUALIZAR PWA EN GITHUB
echo ==========================================
echo.
echo Subiendo cambios...
git add .
git commit -m "Update PWA configuration"
git push origin main

echo.
echo Publicando nueva version...
call npm run deploy

echo.
echo ==========================================
echo ✅ ¡ACTUALIZADO!
echo ==========================================
echo Espera unos minutos y recarga la pagina en tu movil.
echo Ahora deberia aparecer la opcion de instalar.
pause