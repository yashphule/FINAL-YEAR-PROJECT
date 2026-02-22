# HealthMate - Hospital Appointment System

A modern, responsive hospital appointment booking system built with React.

## 🌟 Features

- **User-Friendly Interface**: Clean and intuitive design
- **Appointment Booking**: Easy online appointment scheduling
- **Doctor Profiles**: Browse and select from expert doctors
- **Responsive Design**: Works seamlessly on all devices
- **Modern UI**: Beautiful gradient designs and smooth animations

## 🚀 Live Demo

Visit: [https://yashphule.github.io/FINAL-YEAR-PROJECT](https://yashphule.github.io/FINAL-YEAR-PROJECT)

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

## 🛠️ Installation & Running Locally

1. **Clone the repository:**
```bash
git clone https://github.com/yashphule/FINAL-YEAR-PROJECT.git
cd FINAL-YEAR-PROJECT/hospital-appointment-frontend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment to GitHub Pages

### **Method 1: Simple Script (NO gh-pages package needed) ⭐ RECOMMENDED**

This method works even if `gh-pages` package fails to install.

**For Linux/Mac:**
```bash
cd hospital-appointment-frontend
chmod +x deploy-simple.sh
./deploy-simple.sh
```

**For Windows:**
```bash
cd hospital-appointment-frontend
deploy-simple.bat
```

### **Method 2: Using gh-pages Package**

If you have `gh-pages` installed:

```bash
cd hospital-appointment-frontend
npm install
npm run deploy
```

If `gh-pages` is not installed:
```bash
npm install --save-dev gh-pages
npm run deploy
```

### **Method 3: Manual Git Commands**

```bash
cd hospital-appointment-frontend

# Build the project
npm run build

# Navigate to build folder
cd build

# Initialize git and create gh-pages branch
git init
git checkout -b gh-pages

# Add and commit files
git add -A
git commit -m "Deploy to GitHub Pages"

# Push to GitHub
git push -f https://github.com/yashphule/FINAL-YEAR-PROJECT.git gh-pages

# Go back to project root
cd ../..
```

### **Method 4: GitHub Actions (Automatic)**

The project includes a GitHub Actions workflow that automatically deploys on every push to `main` branch. Just push your changes and it will deploy automatically!

## ⚙️ Enable GitHub Pages

After deploying with any method above:

1. Go to: https://github.com/yashphule/FINAL-YEAR-PROJECT/settings/pages
2. Under **Source**, select:
   - **Deploy from a branch**
   - Branch: **gh-pages**
   - Folder: **/ (root)**
3. Click **Save**
4. Wait 2-3 minutes for deployment
5. Visit: https://yashphule.github.io/FINAL-YEAR-PROJECT

## 📁 Project Structure

```
hospital-appointment-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js       # Navigation header
│   │   ├── Hero.js         # Landing section
│   │   └── Footer.js       # Footer component
│   ├── pages/
│   │   ├── Home.js         # Home page
│   │   ├── AppointmentForm.js
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   ├── DoctorDashboard.js
│   │   └── PatientDashboard.js
│   ├── styles/
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   └── Footer.css
│   ├── App.js
│   └── index.js
├── package.json
├── deploy-simple.sh       # Simple deployment (Linux/Mac)
├── deploy-simple.bat      # Simple deployment (Windows)
└── deploy.sh              # Deployment with gh-pages
```

## 🎨 Technologies Used

- **React 18** - Frontend framework
- **React Router v6** - Navigation
- **CSS3** - Styling with gradients and animations
- **Axios** - HTTP client
- **GitHub Pages** - Hosting

## 🐛 Troubleshooting

### Cannot Install gh-pages

If `npm install gh-pages` fails, use **Method 1** (Simple Script) which doesn't require the gh-pages package.

### Build Errors

If you encounter build errors:
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install

# Try building again
npm run build
```

### Deployment Fails

**Solution 1: Use the simple script**
```bash
./deploy-simple.sh    # Linux/Mac
deploy-simple.bat     # Windows
```

**Solution 2: Check Git configuration**
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**Solution 3: Check GitHub Actions logs**
Visit: https://github.com/yashphule/FINAL-YEAR-PROJECT/actions

### ESLint Warnings

ESLint warnings won't prevent the build. The `.env` file suppresses them in development.

### Page Shows 404

If you see a 404 error:
1. Wait 2-3 minutes after deployment
2. Check GitHub Pages settings are correct
3. Verify the `homepage` URL in `package.json` matches your repository
4. Clear browser cache and try again
5. Make sure you selected **gh-pages** branch in settings

### Permission Denied on Scripts

**Linux/Mac:**
```bash
chmod +x deploy-simple.sh
chmod +x deploy.sh
```

**Windows:**
Right-click the `.bat` file → Run as Administrator

## 📝 Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm run deploy` - Deploy to GitHub Pages (requires gh-pages)
- `npm test` - Run tests

## 👨‍💻 Author

**Yash Phule**
- GitHub: [@yashphule](https://github.com/yashphule)
- Email: yashphule741@gmail.com

## 📄 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- React Documentation
- GitHub Pages
- Create React App
- All contributors and supporters

---

**Made with ❤️ for Final Year Project**

### Quick Commands Reference

```bash
# Development
npm start                    # Start dev server
npm run build               # Build for production

# Deployment (Choose ONE method)
./deploy-simple.sh          # Simple method (Linux/Mac) ⭐
deploy-simple.bat           # Simple method (Windows) ⭐
npm run deploy              # Using gh-pages package
./deploy.sh                 # Full deployment script

# Troubleshooting
rm -rf node_modules         # Remove dependencies
npm install                 # Reinstall dependencies
git pull origin main        # Get latest changes
```

## 🎯 Recommended Deployment Steps

1. **Pull latest changes:**
   ```bash
   git pull origin main
   ```

2. **Navigate to frontend:**
   ```bash
   cd hospital-appointment-frontend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Deploy (choose based on your OS):**
   ```bash
   # Linux/Mac
   chmod +x deploy-simple.sh
   ./deploy-simple.sh
   
   # Windows
   deploy-simple.bat
   ```

5. **Enable GitHub Pages** (first time only):
   - Go to repository Settings → Pages
   - Select branch: **gh-pages**
   - Click Save

6. **Wait 2-3 minutes** and visit your site! 🎉
