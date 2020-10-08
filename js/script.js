// to validate that first name field is not blank
function validateForm() {
var x = document.forms["Project"]["firstname"].value;
  if (x == "") {
    alert("First name and last name must be filled out");
    return false;
  }
 // to validate that last name field is not blank
var x = document.forms["Project"]["lastname"].value;
  if (x == "") {
    alert("last name must be filled out");
    return false;
  }
var x = document.forms["Project"]["lastname"].value;
  if (x == "") {
    alert("last name must be filled out");
    return false;
  }
}