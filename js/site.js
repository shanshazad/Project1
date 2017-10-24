//Prevents entire page from reloading on submit
$(document).ready(function() {
$("#newsletter").on('submit', function(e) {
e.preventDefault();
})
})
function checkAll() {
/*Resets output from previous check
  
Check if age checkbox is checked.
If checked, alert() a thank you for signup
otherwise alert)() for fill out of all fields
*/

if (document.getElementById("age").checked === false) {
alert("Please fill out all fields"); // replaced innertHTML to alert as required
}
else {
alert("Thank you for signing up!"); // replaced innertHTML to alert as required
}
}   
