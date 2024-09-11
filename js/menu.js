/****
 *   open and close menu
 */
var OPEN = document.getElementById("menu"),
  CLOSE = document.getElementById("close"),
  CLOSE_2 = document.getElementById("menuBg");

function OpenMenu() {
  document.getElementById("MenuContent").style.display = "block";
  document.getElementById("menuBg").style.display = "block";
}
function CloseMenu() {
  document.getElementById("MenuContent").style.display = "none";
  document.getElementById("menuBg").style.display = "none";
}
OPEN.addEventListener("click", OpenMenu);
CLOSE.addEventListener("click", CloseMenu);
CLOSE_2.addEventListener("click", CloseMenu);

