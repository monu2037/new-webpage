document.addEventListener("DOMContentLoaded", function() {
    var dropdownBtn = document.getElementById("selected-flag");
    var dropdownContent = document.getElementById("flag-list");
  
    dropdownBtn.addEventListener("click", function() {
      dropdownContent.classList.toggle("show");
    });
  
    var flagOptions = dropdownContent.getElementsByTagName("a");
    for (var i = 0; i < flagOptions.length; i++) {
      flagOptions[i].addEventListener("click", function() {
        var countryCode = this.getAttribute("data-country");
        dropdownBtn.querySelector("img").src = "flag.png" + countryCode + "flag.png";
        dropdownContent.classList.remove("show");
      });
    }
  
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  });
  