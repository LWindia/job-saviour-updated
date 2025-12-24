# ✅ QUICK START CHECKLIST
## Follow this checklist step by step - Check each box when done

---

## 📋 SETUP CHECKLIST

### Step 1: Google Sheet
- [ ] Created new Google Sheet
- [ ] Named it "Lead Capture Data"
- [ ] Copied the Sheet ID from URL (between `/d/` and `/edit`)
- [ ] Saved the Sheet ID somewhere safe

### Step 2: Google Apps Script
- [ ] Went to https://script.google.com/
- [ ] Clicked "New Project"
- [ ] Deleted default code
- [ ] Copied code from `GOOGLE_APPS_SCRIPT_CODE.js`
- [ ] Pasted code in Apps Script
- [ ] Replaced `YOUR_SHEET_ID_HERE` with my actual Sheet ID
- [ ] Saved the project (Ctrl+S)
- [ ] Named the project "Lead Capture"

### Step 3: Deploy Web App
- [ ] Clicked "Deploy" → "New deployment"
- [ ] Selected "Web app" (gear icon)
- [ ] Set "Execute as" to "Me"
- [ ] Set "Who has access" to "Anyone" ⚠️ IMPORTANT!
- [ ] Clicked "Deploy"
- [ ] Authorized permissions (clicked "Allow")
- [ ] Copied the Web App URL
- [ ] Saved the URL somewhere safe

### Step 4: Environment Variable
- [ ] Created `.env.local` file in project root
- [ ] Added: `NEXT_PUBLIC_GOOGLE_SCRIPT_URL=my_web_app_url_here`
- [ ] Replaced `my_web_app_url_here` with actual URL from Step 3
- [ ] Saved the file

### Step 5: Restart Server
- [ ] Stopped the server (Ctrl+C)
- [ ] Started server again (`npm run dev`)
- [ ] Waited for "Ready" message

### Step 6: Test
- [ ] Opened website in browser
- [ ] Scrolled down 2 times
- [ ] Popup appeared
- [ ] Filled form with test data
- [ ] Clicked "Submit"
- [ ] Checked Google Sheet - data appeared! ✅

---

## 🎯 YOUR VALUES (Fill these in)

**Google Sheet ID:**
```
_____________________________
```

**Web App URL:**
```
_____________________________
```

**Environment Variable (.env.local):**
```
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=_____________________________
```

---

## ❌ IF SOMETHING DOESN'T WORK

1. **Check browser console** (F12 → Console tab)
2. **Check Google Apps Script executions** (Apps Script → Executions)
3. **Verify "Who has access" is "Anyone"**
4. **Make sure server was restarted after creating .env.local**
5. **Double-check the URLs are correct (no extra spaces)**

---

## ✅ SUCCESS = Data appears in Google Sheet!

If you see data in your Google Sheet after submitting the form, you're done! 🎉


