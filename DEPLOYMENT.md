# 🚀 Quick Deployment Guide

## ⚡ Fastest Way to Deploy (3 Steps)

### Step 1: Pull Latest Code
```bash
git pull origin main
cd hospital-appointment-frontend
```

### Step 2: Deploy

**Linux/Mac:**
```bash
chmod +x deploy-simple.sh
./deploy-simple.sh
```

**Windows:**
```bash
deploy-simple.bat
```

### Step 3: Enable GitHub Pages (First Time Only)

1. Go to: https://github.com/yashphule/FINAL-YEAR-PROJECT/settings/pages
2. Under **Source**: Select **Deploy from a branch**
3. Branch: **gh-pages**, Folder: **/ (root)**
4. Click **Save**
5. Wait 2-3 minutes
6. Visit: https://yashphule.github.io/FINAL-YEAR-PROJECT

---

## 🔧 If Simple Script Doesn't Work

### Manual Deployment (Works 100% of the time)

```bash
cd hospital-appointment-frontend

# 1. Build
npm install
npm run build

# 2. Go to build folder
cd build

# 3. Create gh-pages branch
git init
git checkout -b gh-pages

# 4. Commit
git add -A
git commit -m "Deploy"

# 5. Push
git push -f https://github.com/yashphule/FINAL-YEAR-PROJECT.git gh-pages

# 6. Go back
cd ../..
```

Then enable GitHub Pages as shown in Step 3 above.

---

## ❓ Common Issues

### "gh-pages not found"
✅ **Solution**: Use `deploy-simple.sh` or `deploy-simple.bat` - they don't need gh-pages package!

### "Permission denied"
✅ **Solution**: 
```bash
chmod +x deploy-simple.sh
```

### "Build failed"
✅ **Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### "404 Page Not Found"
✅ **Solution**:
1. Check GitHub Pages settings (must be **gh-pages** branch)
2. Wait 2-3 minutes after deployment
3. Clear browser cache
4. Try incognito/private mode

### "Git not configured"
✅ **Solution**:
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

---

## 🎯 What Each Method Does

| Method | Pros | Cons |
|--------|------|------|
| **deploy-simple.sh** | ✅ No gh-pages needed<br>✅ Simple<br>✅ Works everywhere | ⚠️ Manual script |
| **npm run deploy** | ✅ One command<br>✅ Clean | ❌ Needs gh-pages package |
| **GitHub Actions** | ✅ Automatic<br>✅ No local work | ⚠️ Needs workflow setup |
| **Manual Git** | ✅ Full control<br>✅ Always works | ⚠️ More steps |

---

## 📞 Still Having Issues?

1. Check the error message carefully
2. Try the **Manual Deployment** method above
3. Check GitHub Actions logs: https://github.com/yashphule/FINAL-YEAR-PROJECT/actions
4. Make sure you're on the `main` branch: `git branch`
5. Make sure you have the latest code: `git pull origin main`

---

## ✅ Success Checklist

- [ ] Code pulled from GitHub
- [ ] Dependencies installed (`npm install`)
- [ ] Build successful (`npm run build`)
- [ ] Deployed to gh-pages branch
- [ ] GitHub Pages enabled in settings
- [ ] Waited 2-3 minutes
- [ ] Site accessible at https://yashphule.github.io/FINAL-YEAR-PROJECT

---

**Need help? Check the main README.md for detailed instructions!**
