//https://www.w3schools.com/howto/howto_js_accordion.asp




function AccordeonHandler()
{
  //accordeon
  const acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active-acc");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}


function WindowScrolling()
{
   //progress scroll (on top of the nav bar)
   window.onscroll = function() {ScrollInteract()};

   function ScrollInteract() {
     const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
     const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
     const scrolled = (winScroll / height) * 100;
     document.getElementById("le-bar").style.width = scrolled + "%";
     
     const ReturnFrame = document.querySelector(".returnToTop-button-container");

     if(scrolled > 10)
     {
       ReturnFrame.style.visibility = "visible";
     }
     else {
       ReturnFrame.style.visibility = "hidden";
     }
   }
}

function GalleryImageHandler()
{
    const Pics = document.getElementsByClassName("gallery-image-container-inner");
    const Piclogs = Array.from(Pics)


    const gallerycontainer = document.getElementsByClassName("gallery-image-fullscreen-container");
    const gallerycontainerArray = Array.from(gallerycontainer);

    Piclogs.forEach(element => {
      //console.log(element);
      element.addEventListener(`click`, event => {
        //console.log("e");
        try {
          const collectedPicture = element.getElementsByClassName("gallery-image");
          const picture = Array.from(collectedPicture);
          //Gets the fullscreen image path
          const imgcontainer = document.querySelector(".gallery-image-fullscreen-picture")
          const imgsourse = imgcontainer.querySelector("img").getAttribute("src");
          const picturesourse = picture[0].getAttribute("src");
  
          //makes the thing visible
          gallerycontainerArray[0].style.display = "block";
          //replaces the old picture with the new picture
          //console.log(imgsourse);
          //imgsourse = picturesourse;
          imgcontainer.querySelector("img").setAttribute("src", picturesourse);
          //console.log(imgsourse);
        }
        catch(error){
          console.error(error);
      }
      });
    });

    //for closing the gallery fullscreen picture

    const Picsbac = document.getElementsByClassName("gallery-image-fullscreen-background");
    const Piclogs2 = Array.from(Picsbac)

    Piclogs2.forEach(element => {
      //console.log(element);
      element.addEventListener(`click`, event => {
        //console.log("e2");
        gallerycontainerArray[0].style.display = "none";
      });
    });


    //for handling gallery categories
    const galleryCategory = document.getElementsByClassName("gallery-category");
    const galleryCategoryArrr = Array.from(galleryCategory)
    const starshipCat =  document.getElementsByClassName("starships-category");
    const starshipcatArr = Array.from(starshipCat)
    const sightCat = document.getElementsByClassName("sights-category");
    const sightCatArr = Array.from(sightCat)

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


function mobileButtoned()
{
  const mobileButton = document.querySelector(".nav-mobile-menu");
  if(!mobileButton) {
      return
  }

  mobileButton.addEventListener("click", function() {
      const menuPanel = document.querySelector(".nav-buttons-mobile");
      console.log("e");
      menuPanel.classList.toggle("nav-buttons-mobile-active");
  })
}

function ReturnerToTop()
{
  const ReturnButton = document.querySelector(".returnToTop-button");

  if(!ReturnButton) {
    return
  }

  ReturnButton.addEventListener("click", function() {
      window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })
}





document.addEventListener("DOMContentLoaded", ReturnerToTop);
document.addEventListener("DOMContentLoaded", mobileButtoned);
document.addEventListener("DOMContentLoaded", GalleryImageHandler);
document.addEventListener("DOMContentLoaded", WindowScrolling);
document.addEventListener("DOMContentLoaded", AccordeonHandler);