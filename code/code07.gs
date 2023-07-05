// Data validation tool
function validateData() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();
  
  for (var i = 1; i < data.length; i++) {
    var value = data[i][0]; // Assuming validation is performed on the first column
    
    // Perform validation checks
    if (value === "") {
      sheet.getRange(i + 1, 1).setBackground("red"); // Highlight empty cells in red
    } else if (value < 0) {
      sheet.getRange(i + 1, 1).setBackground("orange"); // Highlight negative values in orange
    }
  }
}