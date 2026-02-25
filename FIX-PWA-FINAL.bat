@echo off
echo ==========================================
echo 🚀 REPARACION FINAL PWA
echo ==========================================
echo.
echo Moviendo archivos a public/ para que Vite los incluya...
echo (Ya se hizo en el paso anterior)

echo.
echo Subiendo cambios a GitHub...
git add .
git commit -m "Move PWA assets to public folder for Vite build"
git push origin main

echo.
echo Publicando nueva version...
call npm run deploy

echo.
echo ==========================================
echo ✅ ¡REPARADO!
echo ==========================================
echo IMPORTANTE:
echo 1. Espera 2 minutos.
echo 2. Abre la web en tu movil.
echo 3. Borra la cache de nuevo.
echo 4. Ahora SI que SI debe salir "Instalar aplicacion".
pause