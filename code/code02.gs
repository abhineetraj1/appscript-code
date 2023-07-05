// Document Merger
function mergeDocuments() {
  var sourceDocs = [
    "DOC_ID_1",
    "DOC_ID_2",
    "DOC_ID_3"
  ]; // Replace with the IDs of the source documents
  var destinationDocId = "DESTINATION_DOC_ID"; // Replace with the ID of the destination document

  var destinationDoc = DocumentApp.openById(destinationDocId);

  for (var i = 0; i < sourceDocs.length; i++) {
    var sourceDoc = DocumentApp.openById(sourceDocs[i]);
    var sourceBody = sourceDoc.getBody();
    var numElements = sourceBody.getNumChildren();
    for (var j = 0; j < numElements; j++) {
      var element = sourceBody.getChild(j).copy();
      destinationDoc.getBody().appendElement(element);
    }
  }
}