@echo off
echo ==========================================
echo 🚀 ACTUALIZAR PWA (FIX ICONOS)
echo ==========================================
echo.
echo Subiendo Iconos y correcciones...
git add .
git commit -m "Add PWA icons and fix manifest"
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
echo 4. Ahora SI deberia salirte "Instalar aplicacion".
pause