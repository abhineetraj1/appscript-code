// Automated data backup
function backupFiles() {
  var sourceFolderId = "SOURCE_FOLDER_ID"; // Replace with the ID of the source folder
  var destinationFolderId = "DESTINATION_FOLDER_ID"; // Replace with the ID of the destination folder
  
  var sourceFolder = DriveApp.getFolderById(sourceFolderId);
  var destinationFolder = DriveApp.getFolderById(destinationFolderId);
  
  var files = sourceFolder.getFiles();
  
  while (files.hasNext()) {
    var file = files.next();
    file.makeCopy(file.getName(), destinationFolder);
  }
}