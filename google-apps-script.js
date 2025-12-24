/**
 * Google Apps Script for Lead Capture Form
 * 
 * Instructions:
 * 1. Go to https://script.google.com/
 * 2. Create a new project
 * 3. Paste this code
 * 4. Create a Google Sheet and note its ID (from the URL)
 * 5. Update the SPREADSHEET_ID below with your sheet ID
 * 6. Deploy as a web app:
 *    - Click "Deploy" > "New deployment"
 *    - Choose "Web app" as the type
 *    - Set "Execute as" to "Me"
 *    - Set "Who has access" to "Anyone"
 *    - Click "Deploy"
 * 7. Copy the Web App URL and use it as NEXT_PUBLIC_GOOGLE_SCRIPT_URL in your .env.local file
 */

// Replace this with your Google Sheet ID
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';

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

// Optional: Test function to verify the script works
function test() {
  const testData = {
    timestamp: new Date().toISOString(),
    fullName: 'Test User',
    email: 'test@example.com',
    whatsappNumber: '1234567890',
    city: 'Test City'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}

