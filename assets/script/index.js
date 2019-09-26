// Nav function
function navFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.querySelector("nav").addEventListener('click', navFunction);

// Change season 
let Seasons = function (id, sheet){
  document.querySelector(id).addEventListener('click', () => {
    document.getElementById('pagestyle').setAttribute('href', sheet);
  })
}; 

let winter = new Seasons('#winter', '/assets/css/winter.css'); 
let autumn = new Seasons('#autumn', '/assets/css/autumn.css'); 
let spring = new Seasons('#spring', '/assets/css/spring.css'); 
let summer = new Seasons('#summer', '/assets/css/summer.css'); 


// Toggle change seasons 
var solutionLinks = document.querySelectorAll(".solutionLink");

for (var i = 0; i < solutionLinks.length; i++) {
  solutionLinks[i].addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("hidden");
  });
}

// Change season automatic 
function getSeason() {
  let currentDate = new Date();
  let month = currentDate.getMonth();

  switch (month){
    case 2:
    case 3:
    case 4:
    document.getElementById('pagestyle').setAttribute('href', '/assets/css/spring.css');
      break;

    case 5:
    case 6:
    case 7:
    document.getElementById('pagestyle').setAttribute('href', '/assets/css/summer.css');
      break;

    case 8:
    case 9:
    case 10:
    document.getElementById('pagestyle').setAttribute('href', '/assets/css/autumn.css');
      break;

    case 11:
    case 0:
    case 1:
    document.getElementById('pagestyle').setAttribute('href', '/assets/css/winter.css');
      break;
  }
};
