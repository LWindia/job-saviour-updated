# Lead Capture Popup Setup Guide

This guide will help you set up the lead capture popup that collects student information and stores it in Google Sheets.

## Features

- ✅ Appears after 2 scrolls
- ✅ Collects: Name, Contact Number, Email ID
- ✅ Matches website theme (Red/Black/White)
- ✅ Stores data in Google Sheets via Google Apps Script
- ✅ Only shows once per session

## Setup Instructions

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Name it "Lead Capture Data" or similar
4. Copy the Sheet ID from the URL:
   - The URL looks like: `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit`
   - Copy the part between `/d/` and `/edit`

### Step 2: Set Up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Delete the default code and paste the code from `google-apps-script.js`
4. Replace `YOUR_SPREADSHEET_ID_HERE` with your actual Sheet ID from Step 1
5. Save the project (Ctrl+S or Cmd+S)
6. Name your project (e.g., "Lead Capture Handler")

### Step 3: Deploy as Web App

1. Click "Deploy" in the top right
2. Select "New deployment"
3. Click the gear icon ⚙️ next to "Select type"
4. Choose "Web app"
5. Configure:
   - **Description**: "Lead Capture Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
6. Click "Deploy"
7. Authorize the script when prompted:
   - Click "Review Permissions"
   - Choose your Google account
   - Click "Advanced" → "Go to [Project Name] (unsafe)"
   - Click "Allow"
8. Copy the **Web App URL** (it will look like: `https://script.google.com/macros/s/.../exec`)

### Step 4: Configure Environment Variable

1. Create a `.env.local` file in the root of your project (if it doesn't exist)
2. Add the following line:
   ```
   NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
3. Replace the URL with the one you copied in Step 3
4. Restart your development server:
   ```bash
   npm run dev
   ```

### Step 5: Test the Popup

1. Open your website in a browser
2. Scroll down 2 times
3. The popup should appear
4. Fill in the form and submit
5. Check your Google Sheet - the data should appear there!

## Troubleshooting

### Popup doesn't appear
- Make sure you scroll at least 2 times (50px+ each scroll)
- Check browser console for errors (F12)
- The popup only shows once per session - refresh the page to test again

### Data not saving to Google Sheets
- Verify the Google Script URL is correct in `.env.local`
- Check that the script is deployed and accessible
- Make sure "Who has access" is set to "Anyone"
- Check the Apps Script execution log for errors

### CORS Errors
- The script uses `no-cors` mode, so you won't see response data
- If data appears in Google Sheets, it's working correctly
- Check the Apps Script execution log to verify submissions

## Customization

### Change Scroll Count
Edit `src/components/customComponents/LeadCapturePopup.tsx`:
```typescript
// Change from 2 to your desired number
if (scrollEvents >= 2 && !hasShown && !isOpen) {
```

### Change Popup Theme
The popup uses your website's red theme (`#ff0000`). To customize:
- Edit the `DialogContent` className in `LeadCapturePopup.tsx`
- Change `border-[#ff0000]` to your preferred color
- Update button colors from `bg-[#ff0000]` to your color

### Disable Session Storage
To show the popup every time (not just once per session):
- Remove the `sessionStorage` checks in the component
- Remove the `hasShown` state management

## Security Notes

- The Google Apps Script URL is public (in the frontend)
- Anyone can submit data to your sheet
- Consider adding:
  - Rate limiting in the Apps Script
  - CAPTCHA verification
  - Server-side validation

## Support

If you encounter issues, check:
1. Browser console for errors
2. Google Apps Script execution log
3. Network tab for failed requests


