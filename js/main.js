"use-strict";

document.addEventListener("DOMContentLoaded", function(event) {
  // Typing for main page
  var options ={
    strings: ["Hi Jasmine^500",
              "^500It's your special day today!!!^500",
              "^500We wanted to show you how much you really mean to us^500",
              "^500So...^500 we made this for you,^500 hope you like it ♡^500"],
    typeSpeed: 50,
    smartBackspace: true,
    backSpeed: 30,
    onComplete: typeComplete
  }
  var typed = new Typed(".intro-text", options);
});

// Helper Functions
function typeComplete() {
  // Make the rest of the page visible and show 
  document.querySelector("#enterButton").style.visibility = "visible";
  document.querySelector("#enterButton").addEventListener('click', enter);
  document.querySelector("#enterButton").classList.add("animated");
  document.querySelector("#enterButton").classList.add("fadeIn");
}

function enter() {
  document.querySelector('#page1').classList.add("animated");
  document.querySelector('#page1').classList.add("bounceOutLeft");
  setTimeout(function() {
    //your code to be executed after 1 
    document.querySelector('#page1').style.display = "none";
    document.querySelector('#page2').style.display = "block";
    document.querySelector('#page2').classList.add("animated");
    document.querySelector('#page2').classList.add("bounceInRight");

    var grid = document.querySelector('.grid');
    var msnry = new Masonry( grid, {
      columnWidth: 300,
      itemSelector: '.grid-item',
      fitWidth: true,
      gutter: 0
    });
  }, 700);
}



