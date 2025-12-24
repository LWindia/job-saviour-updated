# ✅ Deployment Checklist

## Before Deploying to Vercel

### 1. ✅ Code is on GitHub
- [x] Repository: `https://github.com/LWindia/job-saviour-updated.git`
- [x] All files committed and pushed
- [x] LeadCapturePopup added to all pages

### 2. ⚠️ CRITICAL: Add Environment Variable in Vercel

**This is the MOST IMPORTANT step!**

1. Go to Vercel Dashboard: https://vercel.com/dashboard
2. Select your project (or create new project)
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**
5. Enter:
   - **Name**: `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
   - **Value**: `https://script.google.com/macros/s/AKfycbyP8z3oQArRGoRQAV4M07DewXUAA997Y0vaU3rF1OerW0n5QK9Klz8wY7xbXc_r-vPOLQ/exec`
   - **Environment**: ✅ Production, ✅ Preview, ✅ Development (select all three)
6. Click **Save**

### 3. Deploy Steps

1. **Import Project in Vercel**:
   - Click "Add New Project"
   - Import from GitHub: `LWindia/job-saviour-updated`
   - Vercel will auto-detect Next.js

2. **Build Settings** (Auto-detected):
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Add Environment Variable** (Step 2 above - DO THIS!)

4. **Deploy**:
   - Click "Deploy"
   - Wait 2-5 minutes
   - Your site will be live!

### 4. After Deployment

- [ ] Test the Lead Capture Popup on the live site
- [ ] Scroll down to trigger the popup
- [ ] Fill the form and submit
- [ ] Check Google Sheet to verify data is being saved

## Troubleshooting

### Popup not showing?
- Check browser console for errors
- Verify environment variable is set in Vercel
- Make sure you redeployed after adding the variable

### Form submission failing?
- Verify `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` is set correctly in Vercel
- Check Google Apps Script is deployed and accessible
- Verify Google Sheet permissions

### Build failing?
- Check Vercel build logs
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

## Quick Reference

**Environment Variable Name**: `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`

**Environment Variable Value**: 
```
https://script.google.com/macros/s/AKfycbyP8z3oQArRGoRQAV4M07DewXUAA997Y0vaU3rF1OerW0n5QK9Klz8wY7xbXc_r-vPOLQ/exec
```

**Where to add**: Vercel Dashboard → Project → Settings → Environment Variables

**Important**: Must select all environments (Production, Preview, Development)

