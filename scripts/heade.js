const buttonI = window.document.querySelector(".list-mobile i");
const navMoba = window.document.getElementById("mobile");

//função nav-bar para mobile
buttonI.addEventListener("click", () => {
  if (navMoba.style.display === "none") {
    navMoba.style.display = "block"
    buttonI.style.transform = "rotate(510deg)";
    buttonI.style.fontSize = "45px";
  } else {
    navMoba.style.display = "none"
    buttonI.style.transform = "rotate(0deg)";
    buttonI.style.fontSize = "30px";
  }
});
