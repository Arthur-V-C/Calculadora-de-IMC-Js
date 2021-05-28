function openNav() {
  if (window.screen.width >= 1000) {
  document.getElementById("mySidenav").style.width = "15%";
  document.getElementById("mySidenav").style.height = "100%";
  }
  else{
    document.getElementById("mySidenav").style.height = "40%";
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.paddingTop = "5%"
  }
}

function closeNav() {
  if (window.screen.width >= 1000) {
  document.getElementById("mySidenav").style.width = "0";
  }
  else{
      document.getElementById("mySidenav").style.height = "0";
      document.getElementById("mySidenav").style.paddingTop = "0";
  }
}