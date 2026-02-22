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

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yashphule/FINAL-YEAR-PROJECT.git
cd FINAL-YEAR-PROJECT/hospital-appointment-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)

The project is configured with GitHub Actions for automatic deployment. Every push to the `main` branch will automatically deploy to GitHub Pages.

### Manual Deployment

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Deploy:
```bash
npm run deploy
```

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Your site will be published at `https://yashphule.github.io/FINAL-YEAR-PROJECT`

## 📁 Project Structure

```
hospital-appointment-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   └── Footer.js
│   ├── pages/
│   │   ├── Home.js
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
└── package.json
```

## 🎨 Technologies Used

- **React** - Frontend framework
- **React Router** - Navigation
- **CSS3** - Styling with gradients and animations
- **Axios** - HTTP client
- **GitHub Pages** - Hosting

## 🐛 Troubleshooting

### ESLint Warnings

If you see ESLint warnings, they won't prevent the build. The `.env` file is configured to suppress them in development.

### Build Errors

If you encounter build errors:
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Try `npm run build` again

### Deployment Issues

If deployment fails:
1. Check GitHub Actions logs in the **Actions** tab
2. Ensure GitHub Pages is enabled in repository settings
3. Verify the `homepage` URL in `package.json` matches your repository

## 👨‍💻 Author

**Yash Phule**
- GitHub: [@yashphule](https://github.com/yashphule)

## 📄 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- React Documentation
- GitHub Pages
- All contributors and supporters

---

Made with ❤️ for Final Year Project
