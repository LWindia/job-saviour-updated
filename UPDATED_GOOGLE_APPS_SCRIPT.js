// ============================================
// UPDATED GOOGLE APPS SCRIPT CODE
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
      sheet.appendRow([
        'Timestamp', 
        'Full Name', 
        'Email', 
        'WhatsApp Number', 
        'City', 
        'Current Status',
        'Source Form'
      ]);
      
      // Format the header row
      const headerRange = sheet.getRange(1, 1, 1, 7);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#f0f0f0');
      
      // Auto-resize columns
      sheet.autoResizeColumns(1, 7);
    }
    
    // Determine the source form based on the data
    let sourceForm = 'Unknown';
    if (data.currentStatus === 'student' || data.currentStatus === 'professional') {
      // Check if it came from popup or contact form
      // If no additional context, we'll mark it as 'Form Submission'
      sourceForm = 'Form Submission';
    }
    
    // You can add logic to differentiate between popup and contact form
    // For example, if you want to track which form was used:
    if (data.formSource) {
      sourceForm = data.formSource; // 'popup' or 'contact'
    } else {
      sourceForm = 'Form Submission'; // Default for both forms
    }
    
    // Append the data to the sheet
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.fullName || '',
      data.email || '',
      data.whatsappNumber || '',
      data.city || '',
      data.currentStatus || '',
      sourceForm
    ]);
    
    // Optional: Add data validation and formatting
    const lastRow = sheet.getLastRow();
    
    // Format the timestamp column
    const timestampCell = sheet.getRange(lastRow, 1);
    timestampCell.setNumberFormat('yyyy-mm-dd hh:mm:ss');
    
    // Format the email column
    const emailCell = sheet.getRange(lastRow, 3);
    emailCell.setFontColor('#0066cc');
    
    // Format the WhatsApp number column
    const phoneCell = sheet.getRange(lastRow, 4);
    phoneCell.setNumberFormat('0000000000');
    
    // Color code based on current status
    const statusCell = sheet.getRange(lastRow, 6);
    if (data.currentStatus === 'student') {
      statusCell.setBackground('#e8f5e8'); // Light green for students
    } else if (data.currentStatus === 'professional') {
      statusCell.setBackground('#e8f0ff'); // Light blue for professionals
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Data saved successfully',
        rowNumber: lastRow,
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error for debugging
    console.error('Error in doPost:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString(),
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Function to get form statistics
function getFormStats() {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    const data = sheet.getDataRange().getValues();
    
    if (data.length <= 1) {
      return {
        totalSubmissions: 0,
        students: 0,
        professionals: 0
      };
    }
    
    let students = 0;
    let professionals = 0;
    
    // Skip header row (index 0)
    for (let i = 1; i < data.length; i++) {
      const status = data[i][5]; // Current Status column
      if (status === 'student') {
        students++;
      } else if (status === 'professional') {
        professionals++;
      }
    }
    
    return {
      totalSubmissions: data.length - 1,
      students: students,
      professionals: professionals,
      lastUpdated: new Date().toISOString()
    };
    
  } catch (error) {
    console.error('Error in getFormStats:', error);
    return {
      error: error.toString()
    };
  }
}

// Optional: Function to clean and validate data
function cleanPhoneNumber(phone) {
  if (!phone) return '';
  
  // Remove any non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // If it starts with 91, remove it (assuming Indian numbers)
  if (cleaned.startsWith('91') && cleaned.length === 12) {
    return cleaned.substring(2);
  }
  
  return cleaned;
}

// Optional: Function to validate email
function isValidEmail(email) {
  if (!email) return false;
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Optional: Test function to verify the script works
function testFormSubmission() {
  const testData = {
    timestamp: new Date().toISOString(),
    fullName: 'Test User',
    email: 'test@example.com',
    whatsappNumber: '9876543210',
    city: 'Test City',
    currentStatus: 'student',
    formSource: 'test'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log('Test result: ' + result.getContent());
  
  // Also test stats function
  const stats = getFormStats();
  Logger.log('Form stats: ' + JSON.stringify(stats));
}

// Optional: Function to setup the sheet with proper formatting
function setupSheet() {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    
    // Clear existing content
    sheet.clear();
    
    // Add headers
    const headers = [
      'Timestamp', 
      'Full Name', 
      'Email', 
      'WhatsApp Number', 
      'City', 
      'Current Status',
      'Source Form'
    ];
    
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Format headers
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#ff0000');
    headerRange.setFontColor('#ffffff');
    headerRange.setHorizontalAlignment('center');
    
    // Set column widths
    sheet.setColumnWidth(1, 150); // Timestamp
    sheet.setColumnWidth(2, 120); // Full Name
    sheet.setColumnWidth(3, 180); // Email
    sheet.setColumnWidth(4, 120); // WhatsApp Number
    sheet.setColumnWidth(5, 100); // City
    sheet.setColumnWidth(6, 120); // Current Status
    sheet.setColumnWidth(7, 120); // Source Form
    
    // Freeze header row
    sheet.setFrozenRows(1);
    
    Logger.log('Sheet setup completed successfully');
    
  } catch (error) {
    Logger.log('Error setting up sheet: ' + error.toString());
  }
}