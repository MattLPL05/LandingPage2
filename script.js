//https://www.w3schools.com/howto/howto_js_accordion.asp

function primaryJSLoader()
{
    var acc = document.getElementsByClassName("accordion");
    var i;

   /* for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        // Toggle between adding and removing the "active" class,
       // to highlight the button that controls the panel 
        this.classList.toggle("active-acc");

        // Toggle between hiding and showing the active panel 
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none"; 
        } else {
        panel.style.display = "block";
        }
    });
    } */

    // code above works with a Display: none, and has no animation
    //code below works with maxHeight, and is fully animated that way

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active-acc");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }

    
}


document.addEventListener("DOMContentLoaded", primaryJSLoader);