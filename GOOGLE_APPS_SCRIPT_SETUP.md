# Google Apps Script Setup Guide

Follow these steps to set up your Google Sheets database and Email system. This completely replaces the need for a separate backend server!

### Step 1: Create the Google Sheet
1. Go to [Google Sheets](https://sheets.google.com) and create a new blank spreadsheet.
2. Name it something like "CP EVAL PRO Leads".
3. Add these headers to the first row (A1 to G1): 
   `Timestamp` | `Name` | `Email` | `Phone` | `Practice` | `Case Volume` | `Message`

### Step 2: Add the Apps Script Code
1. In your Google Sheet, click on **Extensions > Apps Script** in the top menu.
2. Delete any code in the editor and paste the following:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming JSON data from the React frontend
    var data = JSON.parse(e.postData.contents);
    
    var timestamp = new Date().toISOString();
    
    // 1. Append to Google Sheet
    sheet.appendRow([
      timestamp,
      data.name || "N/A",
      data.email || "N/A",
      data.phone || "N/A",
      data.practice || "N/A",
      data.caseVolume || "N/A",
      data.message || "N/A"
    ]);
    
    // 2. Send Email Notification
    var targetEmail = "contact@cpevalpro.com";
    var subject = "New Lead from Website: " + (data.name || "N/A");
    var htmlBody = "<h2>New Contact Form Submission</h2>" +
                   "<p><strong>Name:</strong> " + (data.name || "N/A") + "</p>" +
                   "<p><strong>Email:</strong> " + (data.email || "N/A") + "</p>" +
                   "<p><strong>Phone:</strong> " + (data.phone || "N/A") + "</p>" +
                   "<p><strong>Practice:</strong> " + (data.practice || "N/A") + "</p>" +
                   "<p><strong>Case Volume:</strong> " + (data.caseVolume || "N/A") + "</p>" +
                   "<p><strong>Message:</strong></p>" +
                   "<p>" + (data.message || "N/A") + "</p>" +
                   "<p><small>Submitted at: " + timestamp + "</small></p>";
                   
    MailApp.sendEmail({
      to: targetEmail,
      subject: subject,
      htmlBody: htmlBody
    });
    
    // Return success to the frontend
    var output = ContentService.createTextOutput(JSON.stringify({ "status": "success" }));
    output.setMimeType(ContentService.MimeType.JSON);
    return output;
    
  } catch (error) {
    var errOutput = ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }));
    errOutput.setMimeType(ContentService.MimeType.JSON);
    return errOutput;
  }
}
```

3. Click the **Save** icon (floppy disk).

### Step 3: Deploy the Script
1. Click the blue **Deploy** button in the top right corner and select **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in the deployment details:
   * **Description:** Version 1 Contact Form
   * **Execute as:** `Me` (This is who the email will be sent *from*)
   * **Who has access:** `Anyone` (Crucial: Must be set to 'Anyone' so your website can send data to it)
4. Click **Deploy**.
5. You will be prompted to "Authorize Access". Follow the prompts (Select your Google Account -> Click 'Advanced' -> Click 'Go to script [unsafe]' -> Click 'Allow').
6. Copy the **Web app URL** generated at the end. It will look like: 
   `https://script.google.com/macros/s/xxxxxxxxxxxxx/exec`

### Step 4: Add the URL to your project
1. Over in your Vercel dashboard (or in your local `frontend/.env`), set this variable:
   * **Name:** `REACT_APP_GOOGLE_SCRIPT_URL`
   * **Value:** `[Paste the URL you copied from Step 3]`
2. Your React frontend is already updated to use this URL! You can safely delete the `/backend` folder from your repository now.
