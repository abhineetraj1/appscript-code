// Time Tracker
function trackTime(activity, duration) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var timestamp = new Date();
  
  sheet.appendRow([timestamp, activity, duration]);
}
