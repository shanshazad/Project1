//Prevents entire page from reloading on submit
$(document).ready(function() {
  $("#newsletter").on('submit', function(e) {
    e.preventDefault();
  })
})

function checkAll() {
  
 if (document.getElementByID("age").checked
     === false) {
   alert("Please fill out all fields"); 
   //showing alert message } else { 
   
   alert("Thank you for signing up!"); 
 }
} 
