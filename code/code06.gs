// Expense tracker
function addExpense(date, category, amount) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  sheet.appendRow([date, category, amount]);
}

function generateExpenseReport() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();
  
  var report = "";
  for (var i = 1; i < data.length; i++) {
    var date = data[i][0];
    var category = data[i][1];
    var amount = data[i][2];
    
    report += "Date: " + date + ", Category: " + category + ", Amount: " + amount + "\n";
  }
  
  // Send the report via email or display it in a dialog
  Logger.log(report);
}
