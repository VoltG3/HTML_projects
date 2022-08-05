
  var slides = null;
  var dots = null;

  var slideIndex = 0;

// -------------------------------------------------------------------------------- [ BEFORE ]
function slideBefore() { 

    slides = countSlides();
    dots = countDots();
    slideIndex = countIndex();
  

    let tmp = slideIndex;
    if(tmp == 1){ slideIndex = slideIndex} else { slideIndex -= 2;}

    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  } 

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// ---------------------------------------------------------------------------------- [ NEXT ]
function slideNext() {

  slides = countSlides();
  dots = countDots();
  slideIndex = countIndex();

  for (i = 0; i < dots.length; i++) {             
  dots[i].className = dots[i].className.replace(" active", "");
} 

slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
setTimeout(slideNext, 3000) // Change image every 4000 = 2 seconds 
}

// --------------------------------------------------------------------------------- [ AFTER ]
function slideAfter() { 

  slides = countSlides();
  dots = countDots();
  slideIndex = countIndex();

  for (i = 0; i < dots.length; i++) {             
  dots[i].className = dots[i].className.replace(" active", "");
} 

slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";

}

// ------------------------------------------------------------------------------ [ SEQUENCE ]
function countSlides() { 
  slides = document.getElementsByClassName("mySlides");   // count of img
  return slides;
}

function countDots() { 
  dots = document.getElementsByClassName("dot");          // count of dot
  return dots; 
}

function countIndex() {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  } slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 } 

  return slideIndex;
}




