# Job Saviour - DevOps Flagship Course

A Next.js application for the Job Oriented DevOps Globally Recognized Initiative 2026.

## 🚀 Features

- **Course Information**: Comprehensive DevOps course details with 17 modules
- **Lead Capture**: Automated popup form for lead generation
- **Student Testimonials**: Real student success stories
- **Placement Guarantee**: Information about placement assistance
- **Responsive Design**: Mobile-first, fully responsive UI

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Google Apps Script (for lead capture form)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/JibbranAli/job-saviour-updated.git
cd jobsaviour
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file in the root directory:
```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your_google_apps_script_url_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
jobsaviour/
├── public/
│   └── assets/          # Images and static assets
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # React components
│   ├── data/            # Data files (testimonials, links)
│   └── lib/             # Utility functions
├── next.config.ts       # Next.js configuration
└── package.json         # Dependencies
```

## 🌐 Deployment on Vercel

### Quick Deploy

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/) and sign in
3. Click "Add New Project"
4. Import your repository
5. Add environment variable:
   - **Name**: `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
   - **Value**: Your Google Apps Script Web App URL
6. Click "Deploy"

### Detailed Guide

See [VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md) for complete deployment instructions.

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` | Google Apps Script Web App URL for lead capture | Yes |

## 📚 Documentation

- [Vercel Deployment Guide](./VERCEL_DEPLOYMENT_GUIDE.md) - Complete deployment instructions
- [Google Apps Script Setup](./COMPLETE_GOOGLE_APPS_SCRIPT_SETUP.md) - Lead capture form setup
- [Quick Start Checklist](./QUICK_START_CHECKLIST.md) - Setup checklist

## 🎯 Available Routes

- `/` - Homepage (DevOps course)
- `/fullstack` - Full Stack course page
- `/sde` - SDE course page
- `/professionals` - Professional course page
- `/students` - Students page
- `/thankyou` - Thank you page

## 🛠️ Build

```bash
npm run build
npm start
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔒 Security Notes

- Never commit `.env.local` to version control
- Keep Google Apps Script URLs secure
- Store sensitive data in Vercel environment variables

## 📄 License

Private project - All rights reserved

## 🆘 Support

For issues or questions:
1. Check the documentation files
2. Review Vercel deployment logs
3. Check browser console for errors

---

**Built with Next.js 15 and TypeScript**
