// backtotop
getId("backToTop").addEventListener("click", function (event) {
  event.preventDefault(); // chặn xử lý mặc định của trình duyệt khi xảy ra event
  window.scrollTo({ top: 0, behavior: "smooth" }); // scroll cho smooth
});

//hide/show button back to top
/*var scrollPosition = 0;
window.addEventListener("scroll", function () {
  
  // so sánh giá trị position của e ( khoảng cách to top)
  if (document.body.getBoundingClientRect().top > scrollPosition) {
    getId("backToTop").classList.remove("active");
  } else {
    getId("backToTop").classList.add("active");
  }
  // luu vi tri moi
  scrollPosition = document.body.getBoundingClientRect().top;
});  */

// let menus = document.querySelectorAll(selectors: ".menu li a");
// let sections = [];
// menus.forEach(callbackfn: function(e,index){
//     let nameSection = e.getAttribute( qualifiedName: "href").replace(searchValue: "#", replaceValue: "");
//     let section = document.querySelector(selectors: ".homepage > ." + nameSection );
//     sections.push(section);

//     e.addEventListener(type: "click", listener: function (event){
//         event.preventDefault();
//         let nameSection = this.getAttribute("href").replace(searchValue: "#", replaceValue: "");
//         console.log(nameSection);

//     })
// });

// cach 2
var btt = document.querySelector("#backToTop");
window.addEventListener("scroll",function(){
  var scrollToTop = window.pageYOffset;
  let sliderH = document.querySelector("#slider").clientHeight;
    console.log(sliderH);
  if(scrollToTop > sliderH){
    btt.classList.add("active");
    document.querySelector("header").classList.add("bg_scroll");
  }else{
    btt.classList.remove("active");
    document.querySelector("header").classList.remove("bg_scroll");
  }
})




//  hieu ứng slider
var slideIndex = 0;
showSlidesAuto();

// tạo hàm show slide tự động
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
  setTimeout(showSlidesAuto, 4000); // 4 seconds
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
  // ve xem lai forEach, sử dụng cho những class giống nhau
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
var videoIframe = document.querySelector("#popup-video");
document.querySelectorAll(".play_video").forEach((e) => {
  e.addEventListener("click", function (e) {
    var videoSrc = this.getAttribute("data-video-src").toString();
    console.log(videoSrc);
    videoIframe.src = "https://www.youtube.com/embed/" + videoSrc;
    //  videoIframe.src = `https://www.youtube.com/embed/${videoIframe}`;
    document.querySelector(".popup-video").style.display = "flex";
  });
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".popup-video").style.display = "none";
});

// scroll section
document.querySelectorAll(".menu a").forEach((e) => {
  //e.preventDefault();
  e.addEventListener("click", function (event) {
    event.preventDefault();
    let id_element = this.getAttribute("data-id");
    console.log(id_element);
    var posSec = document.querySelector("#" + id_element).offsetTop;
    console.log(posSec);
    let headerH = document.querySelector("header").clientHeight;
    console.log(headerH);

    var posDiv = document.querySelector("#" + id_element).offsetWidth;
    console.log(posDiv);

   
    window.scrollTo({ top: posSec - headerH, behavior: "smooth" });
  });
});

// scroll and active



// viet cho gon
function getId(idName) {
  return document.getElementById(idName);
}
function getClass(className) {
  return document.getElementsByClassName(className);
}
