// Team Task Tracker
function addTask(task, assignee) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var timestamp = new Date();
  
  sheet.appendRow([timestamp, task, assignee]);
}

function updateTaskStatus(rowNumber, status) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  sheet.getRange(rowNumber, 4).setValue(status);
}
