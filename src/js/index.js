$(window).scroll(function(){
  var scrolledFromTop = $(window).scrollTop() + $(window).height();
  $(".appear").each(function(){
    var distanceFromTop = $(this).offset().top;
    if(scrolledFromTop >= distanceFromTop+200){
      console.log("hello");
      var delaiAnim = $(this).data("delai");
      $(this).delay(delaiAnim).animate({
        top:0,
        opacity:1
      });
    }
  });
});

$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();
    $('.dropdown-trigger').dropdown();
    $('select').formSelect();
});

$(function () {
   $('#retour').click(function () {
        $('html,body').animate({scrollTop: 0}, "slow");
   });
});

$(function () {
  $('#scroll').click(function () {
    $('html, body').animate({ scrollTop: 700}, "slow");
  });
});

let elem = document.documentElement;
let FSButton = document.getElementById('FullScreenButton'); 
let fs = false;

function Fullscreen() {

    if(fs == true) {
        closeFullscreen();
        FSButton.classList.remove("btn-primary");
        FSButton.classList.add("btn-outline-primary");
        fs = false;
    } else {
        openFullscreen();
        FSButton.classList.add("btn-primary");
        FSButton.classList.remove("btn-outline-primary");
        fs = true;
    }
}

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}


function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}