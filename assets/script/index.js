function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* function changeSeason(sheet){
  document.getElementById('pagestyle').setAttribute('href', sheet);
}
  
document.querySelector(".winter").addEventListener('click', function(){
  document.getElementById('pagestyle').setAttribute('href', "/assets/css/winter.css");
}) 

let seasons = document.querySelectorAll(".seasons"); 
seasons.forEach(season in seasons).addEventListener('click', (data) =>{
  document.getElementById('pagestyle').setAttribute('href', data);
}); */



document.querySelector("#winter").addEventListener('click', (sheet) => {
  sheet = '/assets/css/winter.css';
  document.getElementById('pagestyle').setAttribute('href', sheet);
})

document.querySelector("#autumn").addEventListener('click', (sheet) => {
  sheet = '/assets/css/autumn.css';
  document.getElementById('pagestyle').setAttribute('href', sheet);
})

document.querySelector("#spring").addEventListener('click', (sheet) => {
  sheet = '/assets/css/spring.css';
  document.getElementById('pagestyle').setAttribute('href', sheet);
})

document.querySelector("#summer").addEventListener('click', (sheet) => {
  sheet = '/assets/css/summer.css';
  document.getElementById('pagestyle').setAttribute('href', sheet);
})

var solutionLinks = document.querySelectorAll(".solutionLink");

for (var i = 0; i < solutionLinks.length; i++) {
  solutionLinks[i].addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("hidden");
  });
}


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
}


document.querySelector("#sunmoon").addEventListener('click', (sheet) => {
  sheet = '/assets/css/portfolio.css';
  document.getElementById('pagestyle').setAttribute('href', sheet);
})