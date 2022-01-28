if (window.width < 800) {
  myFunction();
}
function myFunction() {
  let x = document.getElementById("topnav-links");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById("topnav").style.backgroundColor = "#fff";
    document.getElementById("icon-1").style.color = "#000";
    document.getElementById("icon-2").style.color = "#000";
  } else {
    x.style.display = "block";
    document.getElementById("topnav").style.backgroundColor = "#0000ff"
    document.getElementById("icon-1").style.color = "#fff";
    document.getElementById("icon-2").style.color = "#fff";
  }

}