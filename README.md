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

### **Method 1: Automatic Script (Recommended)**

```bash
cd hospital-appointment-frontend
chmod +x deploy.sh
./deploy.sh
```

### **Method 2: Manual Commands**

```bash
cd hospital-appointment-frontend
npm install
npm run build
npm run deploy
```

### **Method 3: GitHub Actions (Automatic)**

The project includes a GitHub Actions workflow that automatically deploys on every push to `main` branch.

## ⚙️ Enable GitHub Pages

After deploying, enable GitHub Pages:

1. Go to: https://github.com/yashphule/FINAL-YEAR-PROJECT/settings/pages
2. Under **Source**, select:
   - **Deploy from a branch** (if using manual deployment)
   - Branch: **gh-pages**, Folder: **/ (root)**
   - OR **GitHub Actions** (if using automatic deployment)
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
└── deploy.sh              # Deployment script
```

## 🎨 Technologies Used

- **React 18** - Frontend framework
- **React Router v6** - Navigation
- **CSS3** - Styling with gradients and animations
- **Axios** - HTTP client
- **GitHub Pages** - Hosting

## 🐛 Troubleshooting

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

If deployment fails:
1. Check you have `gh-pages` installed: `npm install --save-dev gh-pages`
2. Ensure you're on the `main` branch
3. Check GitHub Actions logs: https://github.com/yashphule/FINAL-YEAR-PROJECT/actions
4. Try manual deployment using the script above

### ESLint Warnings

ESLint warnings won't prevent the build. The `.env` file suppresses them in development.

### Page Shows 404

If you see a 404 error:
1. Wait 2-3 minutes after deployment
2. Check GitHub Pages settings are correct
3. Verify the `homepage` URL in `package.json` matches your repository
4. Clear browser cache and try again

## 📝 Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm run deploy` - Deploy to GitHub Pages
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

# Deployment
npm run deploy              # Deploy to GitHub Pages
./deploy.sh                 # Run deployment script

# Troubleshooting
rm -rf node_modules         # Remove dependencies
npm install                 # Reinstall dependencies
```
