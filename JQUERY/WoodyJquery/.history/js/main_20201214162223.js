// backtotop
//create smooth scroll on click

document.getElementById("backToTop").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//hide/show button on scroll up/down
let scrollPos = 0;

window.addEventListener("scroll", function () {
  // detects new state and compares it with the new one
  if (document.body.getBoundingClientRect().top > scrollPos) {
    console.log("scrolling down");

    document.getElementById("backToTop").classList.remove("active");
  } else {
    document.getElementById("backToTop").classList.add("active");
    console.log("scrolling up");
  }
  // saves the new position for iteration.
  scrollPos = document.body.getBoundingClientRect().top;
});

//  hieu ứng slider
var slideIndex = 0;
showSlidesAuto();

function showSlidesAuto(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlidesAuto, 400000); // Change image every 4 seconds
}

//  hieu ung prev , next
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// dropdown
function myFunction() {
  document.getElementById("lang__dropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".lang__current")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//pop up
document.querySelectorAll(".quality_text .play_video").forEach((e) => {
  e.addEventListener("click", function (e) {
    document.querySelector(".popup-video").style.display = "flex";
  });
});
