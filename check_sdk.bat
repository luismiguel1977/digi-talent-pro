@echo off
if exist "C:\Users\PC\AppData\Local\Android\Sdk" (
    echo FOUND_SDK
) else (
    echo NOT_FOUND
)
