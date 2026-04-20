//https://www.w3schools.com/howto/howto_js_accordion.asp

function primaryJSLoader()
{

    //accordeon
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

      //progress scroll (on top of the nav bar)
      window.onscroll = function() {myFunction()};

      function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("le-bar").style.width = scrolled + "%";
      }


      //gallery image handling

    var Pics = document.getElementsByClassName("gallery-image-container-inner");
    var Piclogs = Array.from(Pics)


    var gallerycontainer = document.getElementsByClassName("gallery-image-fullscreen-container");
    var gallerycontainerArray = Array.from(gallerycontainer);

    Piclogs.forEach(element => {
      //console.log(element);
      element.addEventListener(`click`, event => {
        //console.log("e");
        var collectedPicture = element.getElementsByClassName("gallery-image");
        var picture = Array.from(collectedPicture);
        //Gets the fullscreen image path
        var imgcontainer = document.querySelector(".gallery-image-fullscreen-picture")
        var imgsourse = imgcontainer.querySelector("img").getAttribute("src");
        var picturesourse = picture[0].getAttribute("src");

        //makes the thing visible
        gallerycontainerArray[0].style.display = "block";
        //replaces the old picture with the new picture
        //console.log(imgsourse);
        //imgsourse = picturesourse;
        imgcontainer.querySelector("img").setAttribute("src", picturesourse);
        //console.log(imgsourse);
        
        

      });
    });

    //for closing the gallery fullscreen picture

    var Picsbac = document.getElementsByClassName("gallery-image-fullscreen-background");
    var Piclogs2 = Array.from(Picsbac)

    Piclogs2.forEach(element => {
      //console.log(element);
      element.addEventListener(`click`, event => {
        //console.log("e2");
        gallerycontainerArray[0].style.display = "none";
      });
    });


    //for handling gallery categories
    var galleryCategory = document.getElementsByClassName("gallery-category");
    var galleryCategoryArrr = Array.from(galleryCategory)
    var starshipCat =  document.getElementsByClassName("starships-category");
    var starshipcatArr = Array.from(starshipCat)
    var sightCat = document.getElementsByClassName("sights-category");
    var sightCatArr = Array.from(sightCat)

    galleryCategoryArrr.forEach(element => {
      //console.log(element);
      
      element.addEventListener(`click`, event => {  
        
        RemoveCategoryEffect();
        event.target.classList.toggle('gallery-category-active');
       
        AjustCategoryImages();
        //element.classList.remove("gallery-category-active");

      });
    });

    function RemoveCategoryEffect() //rerun the disabling on effects on all buttons
    {
      galleryCategoryArrr.forEach(element => {
        if(element.classList.contains("gallery-category-active"))
        {
          element.classList.remove("gallery-category-active")
        }
        
      });
    }

    function AjustCategoryImages() //rerun the code to make sure images appear properly
    {
      galleryCategoryArrr.forEach(element => {
        if(element.classList.contains("gallery-category-all") && element.classList.contains("gallery-category-active"))
        {
          starshipcatArr.forEach(elementInner => {
            elementInner.style.display = "block";
          });
          sightCatArr.forEach(elementInner => {
            elementInner.style.display = "block";
          });
        }

        if(element.classList.contains("gallery-category-ships") && element.classList.contains("gallery-category-active"))
        {
          starshipcatArr.forEach(elementInner => {
            elementInner.style.display = "block";
          });
          sightCatArr.forEach(elementInner => {
            elementInner.style.display = "none";
          });
        }

        if(element.classList.contains("gallery-category-sights") && element.classList.contains("gallery-category-active"))
        {
          starshipcatArr.forEach(elementInner => {
            elementInner.style.display = "none";
          });
          sightCatArr.forEach(elementInner => {
            elementInner.style.display = "block";
          });
        }
        
      });
    }
}



document.addEventListener("DOMContentLoaded", primaryJSLoader);