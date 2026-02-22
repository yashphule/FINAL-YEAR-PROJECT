#!/bin/bash

echo "🚀 Simple GitHub Pages Deployment"
echo "=================================="

# Build the project
echo "📦 Building project..."
npm run build

if [ ! -d "build" ]; then
  echo "❌ Build failed! No build directory found."
  exit 1
fi

echo "✅ Build successful!"

# Navigate to build directory
cd build

# Initialize git if needed
if [ ! -d ".git" ]; then
  git init
  git checkout -b gh-pages
else
  git checkout gh-pages 2>/dev/null || git checkout -b gh-pages
fi

# Add all files
git add -A

# Commit
git commit -m "Deploy to GitHub Pages - $(date)"

# Push to gh-pages branch
echo "📤 Pushing to GitHub Pages..."
git push -f https://github.com/yashphule/FINAL-YEAR-PROJECT.git gh-pages

cd ..

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your site will be available at:"
echo "   https://yashphule.github.io/FINAL-YEAR-PROJECT"
echo ""
echo "⏳ Wait 2-3 minutes for GitHub to process the deployment"
