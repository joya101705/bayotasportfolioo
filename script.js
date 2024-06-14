function myFunction() {
    var x = document.getElementById("myTopnav");
    var title = x.getElementsByTagName("h2")[0];
    if (x.className === "topnav") {
      x.className += " responsive";
      title.style.display = "none"; // Hide the title
      x.style.justifyContent = "center"; // Center align items
    } else {
      x.className = "topnav";
      title.style.display = "block"; // Show the title
      x.style.justifyContent = "space-between"; // Revert to default alignment
    }
  }