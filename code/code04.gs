// Form Workflow
function onFormSubmit(e) {
  var formResponse = e.response;
  var itemResponses = formResponse.getItemResponses();
  
  // Perform actions based on form responses
  // Example:
  var email = itemResponses[0].getResponse();
  var message = "Thank you for your response!";
  GmailApp.sendEmail(email, "Form Submission", message);
}
