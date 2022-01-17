$(document).ready(function(){
    $('.sidenav').sidenav();
  });

  //Collapsable
  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
        
  //carousel 
  $(document).ready(function(){
    $('.carousel').carousel();
  });
  // nav bar links 
  var navbar = document.getElementById("navbar");
  var about = document.getElementById("about");
  var aboutC =document.getElementById("aboutC");
  var works = document.getElementById("works");
  var contact = document.getElementById("contact");
  var contactC = document.getElementById("contactC");
  var workC = document.getElementById("workC");
  var list = document.querySelector("#aboutC")

  about.addEventListener("click", function() {
    document.querySelector("#aboutC").className += "active";
  $('.collapsible').collapsible();
  });

  works.addEventListener("click", function() {
    document.querySelector("#workC").className += "active";
  $('.collapsible').collapsible();
  });

  contact.addEventListener("click", function() {
    document.querySelector("#contactC").className += "active";
  $('.collapsible').collapsible();
  });
