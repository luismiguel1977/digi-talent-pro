@echo off
set "JAVA_1=C:\Program Files\Android\Android Studio\jbr\bin\java.exe"
set "JAVA_2=C:\Program Files\Android\Android Studio\jre\bin\java.exe"
set "JAVA_3=C:\Program Files\Java\jdk-17\bin\java.exe"
set "JAVA_4=C:\Program Files\Java\jdk-11\bin\java.exe"

if exist "%JAVA_1%" (
    echo FOUND_JBR
    echo %JAVA_1%
    goto end
)
if exist "%JAVA_2%" (
    echo FOUND_JRE
    echo %JAVA_2%
    goto end
)
if exist "%JAVA_3%" (
    echo FOUND_JDK17
    echo %JAVA_3%
    goto end
)
if exist "%JAVA_4%" (
    echo FOUND_JDK11
    echo %JAVA_4%
    goto end
)

echo NOT_FOUND

:end
