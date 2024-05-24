var prevScrollpos = window.pageYOffset;

/* Get the header element and it's position */
var headerDiv = document.querySelector("header");
var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  /* if scrolling down, let it scroll out of view as normal */
  if (prevScrollpos <= currentScrollPos ){
      headerDiv.style.top ="-100%";
  }
  /* otherwise if we're scrolling up, fix the nav to the top */
  else{
      headerDiv.style.top = "0";
  }

  prevScrollpos = currentScrollPos;
}