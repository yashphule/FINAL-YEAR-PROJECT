@echo off
echo 🚀 Simple GitHub Pages Deployment
echo ==================================

echo 📦 Building project...
call npm run build

if not exist "build" (
  echo ❌ Build failed! No build directory found.
  exit /b 1
)

echo ✅ Build successful!

cd build

if not exist ".git" (
  git init
  git checkout -b gh-pages
) else (
  git checkout gh-pages 2>nul || git checkout -b gh-pages
)

git add -A
git commit -m "Deploy to GitHub Pages - %date% %time%"

echo 📤 Pushing to GitHub Pages...
git push -f https://github.com/yashphule/FINAL-YEAR-PROJECT.git gh-pages

cd ..

echo.
echo ✅ Deployment complete!
echo 🌐 Your site will be available at:
echo    https://yashphule.github.io/FINAL-YEAR-PROJECT
echo.
echo ⏳ Wait 2-3 minutes for GitHub to process the deployment
pause
