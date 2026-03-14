# Updated Google Apps Script Setup Guide

## 🚀 Quick Setup Steps

### 1. Open Google Apps Script
- Go to [script.google.com](https://script.google.com/)
- Click "New Project"

### 2. Replace Default Code
- Delete all existing code in the editor
- Copy and paste the entire code from `UPDATED_GOOGLE_APPS_SCRIPT.js`

### 3. Update Spreadsheet ID
- Create a new Google Sheet or use existing one
- Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)
- Replace `YOUR_SHEET_ID_HERE` with your actual Sheet ID

### 4. Save and Deploy
- Click "Save" (Ctrl+S)
- Give your project a name (e.g., "Lead Capture Form Handler")
- Click "Deploy" → "New deployment"
- Choose "Web app" as the type
- Set "Execute as" to "Me"
- Set "Who has access" to "Anyone"
- Click "Deploy"
- Copy the Web App URL

### 5. Update Environment Variable
- Add the Web App URL to your `.env` file:
```
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your_web_app_url_here
```

## 📊 New Features in Updated Script

### Enhanced Data Structure
The script now handles these fields:
- **Timestamp**: Automatically formatted
- **Full Name**: Text field
- **Email**: Formatted with blue color
- **WhatsApp Number**: Formatted as number
- **City**: Text field
- **Current Status**: Color-coded (Green for Student, Blue for Professional)
- **Source Form**: Tracks which form was used

### Automatic Formatting
- **Headers**: Red background with white text
- **Students**: Light green background
- **Professionals**: Light blue background
- **Emails**: Blue text color
- **Timestamps**: Proper date/time format

### Data Validation
- Phone number cleaning (removes non-digits)
- Email validation
- Automatic column resizing
- Frozen header row

## 🛠️ Optional Setup Functions

### Setup Sheet Formatting
Run this function once to format your sheet:
```javascript
setupSheet()
```

### Test the Script
Run this function to test if everything works:
```javascript
testFormSubmission()
```

### Get Form Statistics
Run this to see submission stats:
```javascript
getFormStats()
```

## 📋 Expected Google Sheet Structure

| Timestamp | Full Name | Email | WhatsApp Number | City | Current Status | Source Form |
|-----------|-----------|-------|-----------------|------|----------------|-------------|
| 2024-12-30 10:30:00 | John Doe | john@email.com | 9876543210 | Mumbai | student | Form Submission |
| 2024-12-30 10:35:00 | Jane Smith | jane@email.com | 9876543211 | Delhi | professional | Form Submission |

## 🎨 Visual Features

### Color Coding
- **Header Row**: Red background (#ff0000) with white text
- **Student Entries**: Light green background (#e8f5e8)
- **Professional Entries**: Light blue background (#e8f0ff)
- **Email Addresses**: Blue text (#0066cc)

### Column Formatting
- **Timestamp**: Auto-formatted as YYYY-MM-DD HH:MM:SS
- **WhatsApp Number**: Formatted as 10-digit number
- **Columns**: Auto-resized for optimal viewing

## 🔧 Troubleshooting

### Common Issues

1. **Permission Error**
   - Make sure "Execute as" is set to "Me"
   - Ensure "Who has access" is set to "Anyone"

2. **Sheet Not Found**
   - Double-check your SPREADSHEET_ID
   - Make sure the sheet exists and is accessible

3. **CORS Errors**
   - The forms use `mode: 'no-cors'` to avoid CORS issues
   - Data will be saved even if you can't read the response

### Testing the Script

1. **Run Test Function**:
   - In Apps Script editor, select `testFormSubmission` function
   - Click "Run" button
   - Check the logs for results

2. **Check Sheet**:
   - Open your Google Sheet
   - Look for test data entry
   - Verify formatting is applied

3. **Test from Website**:
   - Fill out the form on your website
   - Check if data appears in the sheet
   - Verify color coding works

## 📈 Monitoring and Analytics

### Built-in Statistics
The script includes a `getFormStats()` function that returns:
```json
{
  "totalSubmissions": 150,
  "students": 90,
  "professionals": 60,
  "lastUpdated": "2024-12-30T10:30:00.000Z"
}
```

### Data Insights
- Track student vs professional ratio
- Monitor submission trends over time
- Identify peak submission periods

## 🔒 Security Best Practices

1. **Limit Access**: Only give necessary permissions
2. **Regular Backups**: Export sheet data regularly
3. **Monitor Usage**: Check Apps Script execution logs
4. **Data Validation**: Script includes basic validation

## ✅ Verification Checklist

- [ ] Google Apps Script project created
- [ ] Code copied and SPREADSHEET_ID updated
- [ ] Project saved with descriptive name
- [ ] Web app deployed with correct permissions
- [ ] Environment variable updated in `.env` file
- [ ] Test submission completed successfully
- [ ] Sheet formatting appears correctly
- [ ] Color coding works for student/professional entries

Your updated Google Apps Script is now ready to handle both forms with the new Current Status field!