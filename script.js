// ✅ Link hover effect (e.g., About, Education, etc.)
document.querySelectorAll("li a").forEach(link => {
  link.addEventListener("mouseover", function () {
    this.style.color = "rgb(68, 202, 255)";  // Highlight on hover
  });

  link.addEventListener("mouseout", function () {
    this.style.color = "";  // Reset on mouse out
  });
});

// ✅ Social icons hover effect (LinkedIn, GitHub, Instagram)
var iconDivs = document.getElementsByClassName("icon");

for (let i = 0; i < iconDivs.length; i++) {
  iconDivs[i].addEventListener("mouseover", function () {
    const icon = this.querySelector("i");  // Find icon inside
    if (icon) {
      icon.style.color = "rgb(0, 0, 0)";  // Icon turns black
      this.style.backgroundColor = "white";  // Background turns white
    }
  });

  iconDivs[i].addEventListener("mouseout", function () {
    const icon = this.querySelector("i");
    if (icon) {
      icon.style.color = "";  // Reset icon color
      this.style.backgroundColor = "";  // Reset background
    }
  });
}

// ✅ Mobile Menu Toggle (hamburger menu)
function toggleDrawer() {
  document.querySelector(".nav2 ul").classList.toggle("show");  // Show/hide nav
}
