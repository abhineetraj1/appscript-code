// Classroom grade book
function updateGrade(studentName, assignmentName, score) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();
  
  for (var i = 1; i < data.length; i++) {
    var name = data[i][0];
    var assignment = data[i][1];
    
    if (name === studentName && assignment === assignmentName) {
      sheet.getRange(i + 1, 3).setValue(score);
      break;
    }
  }
}

function generateGradeReport(studentName) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();
  
  var report = "Grades for " + studentName + ":\n";
  for (var i = 1; i < data.length; i++) {
    var name = data[i][0];
    var assignment = data[i][1];
    var score = data[i][2];
    
    if (name === studentName) {
      report += "Assignment: " + assignment + ", Score: " + score + "\n";
    }
  }
  
  // Send the report via email or display it in a dialog
  Logger.log(report);
}
