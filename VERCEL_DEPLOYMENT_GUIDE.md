# 🚀 Vercel Deployment Guide

This guide will help you deploy your Next.js application to Vercel with all features working correctly.

## ✅ Pre-Deployment Checklist

- [x] All modules added (15, 16, 17)
- [x] Lead capture popup implemented
- [x] Error boundaries configured
- [x] Image optimization configured
- [x] All components working locally

## 📋 Step-by-Step Deployment

### Step 1: Push Code to GitHub

Your code is already on GitHub at: `https://github.com/LWindia/job-saviour-updated.git`

### Step 2: Connect to Vercel

1. Go to [Vercel](https://vercel.com/)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your repository: `job-saviour-updated`
5. Vercel will auto-detect Next.js settings

### Step 3: Configure Build Settings

Vercel should auto-detect these settings:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

**Root Directory**: Leave empty (or set to `jobsaviour` if your repo has nested folders)

### Step 4: Add Environment Variables

**CRITICAL**: Add this environment variable in Vercel:

1. In Vercel project settings, go to **Settings** → **Environment Variables**
2. Click **Add New**
3. Add:
   - **Name**: `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
   - **Value**: Your Google Apps Script Web App URL
   - **Environment**: Select all (Production, Preview, Development)
4. Click **Save**

**Example:**
```
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbyP8z3oQArRGoRQAV4M07DewXUAA997Y0vaU3rF1OerW0n5QK9Klz8wY7xbXc_r-vPOLQ/exec
```

**⚠️ IMPORTANT**: 
- This environment variable MUST be set in Vercel for the Lead Capture Popup to work
- Without it, the popup will show an error when users try to submit
- After adding the variable, you may need to redeploy for it to take effect

### Step 5: Deploy

1. Click **Deploy**
2. Wait for build to complete (usually 2-5 minutes)
3. Your site will be live at: `https://your-project.vercel.app`

## 🔧 Vercel Configuration

### Automatic Configuration

Vercel automatically:
- ✅ Detects Next.js framework
- ✅ Configures build settings
- ✅ Sets up serverless functions
- ✅ Optimizes images
- ✅ Enables edge caching

### Manual Configuration (if needed)

If you need custom settings, create `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

## 🌐 Domain Configuration

### Custom Domain (Optional)

1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions
4. Vercel will automatically configure SSL

## 🔍 Post-Deployment Verification

### Check These Features:

1. **Homepage loads correctly**
   - Visit your Vercel URL
   - Check all sections render

2. **Lead Capture Popup**
   - Scroll down 2 times
   - Popup should appear
   - Fill form and submit
   - Check Google Sheet for data

3. **All Routes Work**
   - `/` - Homepage
   - `/fullstack` - Full Stack course
   - `/sde` - SDE course
   - `/professionals` - Professional course
   - `/students` - Students page

4. **Images Load**
   - Check all images display correctly
   - No broken image links

5. **Forms Work**
   - Apply Now buttons redirect correctly
   - Lead capture form submits

## 🐛 Troubleshooting

### Build Fails

**Error: Module not found**
- Check all imports are correct
- Verify file paths

**Error: Environment variable not found**
- Make sure `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` is set in Vercel
- Redeploy after adding environment variables

**Error: Image optimization failed**
- Check `next.config.ts` has correct remote patterns
- Verify image URLs are accessible

### Runtime Errors

**Popup doesn't appear**
- Check browser console for errors
- Verify environment variable is set
- Check Google Apps Script URL is correct

**Data not saving to Google Sheets**
- Verify Google Apps Script is deployed
- Check "Who has access" is set to "Anyone"
- Check Apps Script execution logs

**404 Errors**
- Check all routes are properly configured
- Verify file structure matches routes

## 📊 Monitoring

### Vercel Analytics (Optional)

1. Go to **Analytics** tab
2. Enable Vercel Analytics
3. Monitor:
   - Page views
   - Performance metrics
   - Error rates

### Google Apps Script Monitoring

1. Go to [Google Apps Script](https://script.google.com/)
2. Open your project
3. Click **Executions** to see:
   - Form submissions
   - Errors
   - Execution times

## 🔄 Continuous Deployment

Vercel automatically:
- ✅ Deploys on every push to `main` branch
- ✅ Creates preview deployments for PRs
- ✅ Rolls back on build failures

### Manual Deployment

If needed, you can:
1. Go to **Deployments** tab
2. Click **Redeploy** on any deployment
3. Or trigger via GitHub push

## 🔐 Security Notes

1. **Environment Variables**: Never commit `.env.local` to GitHub
2. **Google Apps Script**: Keep Web App URL secure
3. **API Keys**: Store in Vercel environment variables only
4. **CORS**: Google Apps Script should allow all origins (set to "Anyone")

## 📝 Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` | Google Apps Script Web App URL | Yes (for popup) |

## ✅ Success Checklist

After deployment, verify:
- [ ] Site loads without errors
- [ ] All pages accessible
- [ ] Images display correctly
- [ ] Lead capture popup works
- [ ] Form submissions save to Google Sheets
- [ ] Apply Now buttons redirect correctly
- [ ] No console errors
- [ ] Mobile responsive

## 🆘 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Check browser console (F12)
3. Check Google Apps Script execution logs
4. Review this guide's troubleshooting section

---

**Your site is ready for production! 🎉**

