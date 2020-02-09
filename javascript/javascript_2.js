function validateForm() {
  var nameBlank = document.forms["contact"]["fullname"].value;
  var blankEmail = document.forms["contact"]["email"].value;
  var blankMessage = document.forms["contact"]["message"].value;
  
  if (nameBlank == "") {
    alert("Please enter you name");
    return false;
  }

  if (blankEmail == "") {
      alert("Please enter your email");
      return false;
  }

  if (blankMessage == "") {
      alert("Please enter your message");
      return false;
  }
}