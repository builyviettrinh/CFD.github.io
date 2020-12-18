// backtotop

getId("backToTop").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//hide/show button on scroll up/down
let scrollPos = 0;

window.addEventListener("scroll", function () {
  // detects new state and compares it with the new one
  if (document.body.getBoundingClientRect().top > scrollPos) {
    console.log("scrolling down");

    getId("backToTop").classList.remove("active");
  } else {
    getId("backToTop").classList.add("active");
    console.log("scrolling up");
  }
  // luu vi tri moi
  scrollPos = document.body.getBoundingClientRect().top;
});

//  hieu ứng slider
var slideIndex = 0;
showSlidesAuto();

function showSlidesAuto(n) {
  var i;
  var slides = getClass("mySlides");
  var dots = getClass("dot");
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
  setTimeout(showSlidesAuto, 40000); // Change image every 4 seconds
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
  var slides = getClass("mySlides");
  var dots = getClass("dot");
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
getId("current").addEventListener("click", function () {
  getId("lang__dropdown").classList.toggle("show");
});

window.onclick = function (event) {
  if (!event.target.matches("#current")) {
    var dropdowns = getClass("dropdown-content");
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
document.querySelectorAll(".play_video").forEach((e) => {
  e.addEventListener("click", function (e) {
    let videoSrc = this.getAttribute("data-video-src");
    document.querySelector(".popup-video").style.display = "flex";
  });
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".popup-video").style.display = "none";
});

// viet cho gon
function getId(id) {
  return document.getElementById(id);
}
function getClass(className) {
  return document.getElementsByClassName(className);
}
