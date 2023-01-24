document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    var button = document.getElementById("myButton");
  
    // Add an event listener for the click event
    button.addEventListener("click", function() {
        image1.classList.add("faded");
        image2.classList.add("faded");
        setTimeout(function() {
            window.location.href = "contents.html";
        }, 1000);
    });
  });
  