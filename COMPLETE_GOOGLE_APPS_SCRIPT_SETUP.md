# 🚀 COMPLETE GOOGLE APPS SCRIPT SETUP GUIDE
## 100% Working Solution - Follow Step by Step

---

## 📋 STEP 1: CREATE GOOGLE SHEET (2 minutes)

1. **Go to Google Sheets**: https://sheets.google.com/
2. **Click** "Blank" to create a new spreadsheet
3. **Name it**: "Lead Capture Data" (or any name you want)
4. **Copy the Sheet ID from URL**:
   - Look at the URL in your browser
   - It looks like: `https://docs.google.com/spreadsheets/d/1ABC123xyz.../edit`
   - **Copy the long ID** between `/d/` and `/edit`
   - Example: `1ABC123xyz456DEF789ghi012JKL345mno`
   - **SAVE THIS ID** - you'll need it in Step 3

---

## 📝 STEP 2: CREATE GOOGLE APPS SCRIPT (3 minutes)

1. **Go to Google Apps Script**: https://script.google.com/
2. **Click** "New Project" (top left)
3. **Delete ALL the default code** (select all and delete)
4. **Copy and paste this EXACT code**:

```javascript
// Replace YOUR_SHEET_ID_HERE with your actual Google Sheet ID
const SPREADSHEET_ID = 'YOUR_SHEET_ID_HERE';

function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Open the spreadsheet
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    
    // If this is the first row, add headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Full Name', 'Email', 'WhatsApp Number', 'City']);
    }
    
    // Append the data to the sheet
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.fullName || '',
      data.email || '',
      data.whatsappNumber || '',
      data.city || ''
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

5. **Replace `YOUR_SHEET_ID_HERE`** with your actual Sheet ID from Step 1
   - Example: `const SPREADSHEET_ID = '1ABC123xyz456DEF789ghi012JKL345mno';`
6. **Click "Save"** (floppy disk icon or Ctrl+S)
7. **Name your project**: Click "Untitled project" at top → Type "Lead Capture" → Press Enter

---

## 🔧 STEP 3: DEPLOY AS WEB APP (5 minutes)

1. **Click "Deploy"** button (top right)
2. **Click "New deployment"**
3. **Click the gear icon** ⚙️ next to "Select type"
4. **Select "Web app"**
5. **Fill in these settings**:
   - **Description**: `Lead Capture Form Handler` (optional)
   - **Execute as**: Select **"Me"** (your email)
   - **Who has access**: Select **"Anyone"** (IMPORTANT!)
6. **Click "Deploy"** button
7. **AUTHORIZATION POPUP** will appear:
   - Click **"Review Permissions"**
   - Select your Google account
   - Click **"Advanced"** at bottom
   - Click **"Go to Lead Capture (unsafe)"** (or your project name)
   - Click **"Allow"**
8. **COPY THE WEB APP URL**:
   - You'll see a URL like: `https://script.google.com/macros/s/AKfycby.../exec`
   - **COPY THIS ENTIRE URL** - you'll need it in Step 4
   - Click "Done"

---

## ⚙️ STEP 4: ADD TO YOUR PROJECT (2 minutes)

1. **Go to your project folder** (where your code is)
2. **Create `.env.local` file** in the root folder (same level as `package.json`)
   - If it already exists, just open it
3. **Add this line** (replace with YOUR URL from Step 3):

```
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

**Example:**
```
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycby123xyz456/exec
```

4. **Save the file**

---

## 🔄 STEP 5: RESTART YOUR SERVER (1 minute)

1. **Stop your current server** (if running):
   - Press `Ctrl + C` in the terminal
2. **Start it again**:
   ```bash
   npm run dev
   ```
3. **Wait for it to start** (you'll see "Ready in X seconds")

---

## ✅ STEP 6: TEST IT (2 minutes)

1. **Open your website** in browser (usually http://localhost:3000 or 3001)
2. **Scroll down 2 times** (scroll at least 50px each time)
3. **Popup should appear** with the form
4. **Fill in the form**:
   - Full Name: Test User
   - Email: test@example.com
   - WhatsApp: 1234567890
   - City: Test City
5. **Click "Submit"**
6. **Check your Google Sheet** - you should see the data appear!

---

## 🐛 TROUBLESHOOTING

### ❌ Popup doesn't appear
- **Solution**: Scroll down more (at least 2 times, 50px each)
- Refresh the page and try again
- Check browser console (F12) for errors

### ❌ Data not saving to Google Sheets
- **Check 1**: Is the URL in `.env.local` correct? (copy from Step 3)
- **Check 2**: Did you restart the server after adding `.env.local`?
- **Check 3**: In Google Apps Script, is "Who has access" set to **"Anyone"**?
- **Check 4**: Open Google Apps Script → Click "Executions" (left menu) → Check for errors

### ❌ "Script URL not configured" error
- **Solution**: Make sure `.env.local` file exists and has the correct URL
- Make sure you restarted the server after creating `.env.local`

### ❌ Permission denied error
- **Solution**: Go back to Google Apps Script → Deploy → Manage deployments → Click the 3 dots → Edit → Make sure "Who has access" is "Anyone"

---

## 📸 VISUAL CHECKLIST

Before testing, make sure you have:

- ✅ Google Sheet created with ID copied
- ✅ Google Apps Script created with code pasted
- ✅ Sheet ID replaced in the script
- ✅ Script deployed as Web App
- ✅ "Who has access" set to "Anyone"
- ✅ Web App URL copied
- ✅ `.env.local` file created with the URL
- ✅ Server restarted

---

## 🎯 QUICK REFERENCE

**Files you need:**
- `.env.local` (in project root)
- Google Apps Script (online)
- Google Sheet (online)

**URLs you need:**
- Google Sheet ID: From the sheet URL
- Web App URL: From Apps Script deployment

**Environment Variable:**
```
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your_web_app_url_here
```

---

## 💡 TIPS

1. **Keep the Web App URL safe** - you'll need it if you deploy to production
2. **Test with real data** - submit a few test entries to verify it works
3. **Check Google Sheet regularly** - all submissions go there
4. **If you change the script** - you need to create a "New deployment" (not edit existing)

---

## ✅ YOU'RE DONE!

Once you see data appearing in your Google Sheet, everything is working! 🎉

The popup will automatically:
- Show after 2 scrolls
- Collect form data
- Send it to Google Sheets
- Show success message
- Close after 2 seconds

**No need to do anything else!** The setup is complete and will work forever (unless you change the URLs).

