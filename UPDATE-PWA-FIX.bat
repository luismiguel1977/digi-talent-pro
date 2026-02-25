@echo off
echo ==========================================
echo 🚀 ACTUALIZAR PWA (FIX INSTALACION)
echo ==========================================
echo.
echo Subiendo Service Worker y correcciones...
git add .
git commit -m "Add Service Worker for A2HS support"
git push origin main

echo.
echo Publicando nueva version...
call npm run deploy

echo.
echo ==========================================
echo ✅ ¡ACTUALIZADO!
echo ==========================================
echo IMPORTANTE:
echo 1. Cierra la web en tu movil.
echo 2. Borra la cache de Chrome o abre una pestana de incognito.
echo 3. Abre la web de nuevo.
echo 4. Usala un poco (navega entre pantallas).
echo 5. Ahora deberia salirte "Instalar aplicacion".
pause