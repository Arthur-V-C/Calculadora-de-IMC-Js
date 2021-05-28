function openNav() {
  if (window.screen.width >= 1000) {
  document.getElementById("mySidenav").style.width = "15%";
  }
  else{
    document.getElementById("mySidenav").style.height = "15%";
  }
}

function closeNav() {
  if (window.screen.width >= 1000) {
  document.getElementById("mySidenav").style.width = "0";
  }
  else{
      document.getElementById("mySidenav").style.height = "0";
  }
}
