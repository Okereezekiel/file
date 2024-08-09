let navBar = document.querySelector(".responsive");
let showMenu = document.querySelector(".show-nav");
let hidemenu = document.querySelector(".hidenav");
function show() {
  navBar.style.right = "0%";
  showMenu.style.display = "none";
  hidemenu.style.display = "flex";
}
function hide() {
  console.log("munyr5e5etby7");

  navBar.style.right = "-50%";
  showMenu.style.display = "flex";
  hidemenu.style.display = "none";
}
