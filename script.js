document.querySelectorAll("li a").forEach(link => {
  link.addEventListener("mouseover", function () {
    this.style.color = "rgb(68, 202, 255)";  // change link color
  });

  link.addEventListener("mouseout", function () {
    this.style.color = "";
  });
});
var iconDivs = document.getElementsByClassName("icon");

for (let i = 0; i < iconDivs.length; i++) {
  iconDivs[i].addEventListener("mouseover", function () {
    // Target the <i> inside the <a> inside this .icon div
    const icon = this.querySelector("i");
    if (icon) {
      icon.style.color = "rgb(0, 0, 0)";
      this.style.backgroundColor = "white"; // Optional: background for div
    }
  });

  iconDivs[i].addEventListener("mouseout", function () {
    const icon = this.querySelector("i");
    if (icon) {
      icon.style.color = ""; // reset
      this.style.backgroundColor = ""; // reset
    }
  });
}

 function toggleDrawer() {
    document.querySelector(".nav2 ul").classList.toggle("show");
  }
