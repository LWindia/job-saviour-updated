// ============================================
// COPY THIS ENTIRE CODE TO GOOGLE APPS SCRIPT
// ============================================
// 
// STEP 1: Replace YOUR_SHEET_ID_HERE with your Google Sheet ID
// STEP 2: Copy all code below
// STEP 3: Paste in Google Apps Script (script.google.com)
// STEP 4: Save and Deploy as Web App

// Replace this with your Google Sheet ID (from the sheet URL)
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


