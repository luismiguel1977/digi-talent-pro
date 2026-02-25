@echo off
echo ==========================================
echo 🔧 DIGI TALENT PRO - CORREGIR ERRORES ANDROID
echo ==========================================
echo.

echo 1. Limpiando proyecto...
if exist "dist" rmdir /s /q "dist"
if exist "android\app\build" rmdir /s /q "android\app\build"

echo.
echo 2. Reconstruyendo web (con fix de rutas)...
call npm run build
if %errorlevel% neq 0 goto error

echo.
echo 3. Sincronizando Capacitor...
call npx cap sync android
if %errorlevel% neq 0 goto error

echo.
echo ==========================================
echo ✅ CORRECCION APLICADA
echo ==========================================
echo.
echo Ahora sigue estos pasos EXACTOS para generar la APK corregida:
echo.
echo 1. Abre Android Studio
echo 2. Ve al menu Build > Clean Project
echo 3. Ve al menu Build > Rebuild Project
echo 4. Ve al menu Build > Generate Signed Bundle / APK
echo.
echo NOTA IMPORTANTE: Si te pide actualizar Gradle, DILE QUE SI.
echo.
pause
exit /b

:error
echo.
echo ❌ ERROR EN LA CORRECCION
pause