(function () {
  let menuItems = document.querySelectorAll(".nav-item");

  menuItems.forEach((mi) => {
    mi.addEventListener(
      "click",
      (evt) => {
        if (!evt.target.parentElement.hasAttribute("id")) return;
        sessionStorage.setItem("menu-id", evt.target.parentElement.getAttribute("id"));
      },
      false
    );
  });

  if (!sessionStorage.length) return;
  let selMenuItem = sessionStorage.getItem("menu-id");
  if (selMenuItem && (selMenuItem !== "null")) {
    const mi = document.getElementById(selMenuItem).firstElementChild;
    // Uncomment below if you have a single-page site.
    // But, it breaks the yellow highlight feature.
    //mi.click(); 
    mi.focus();
    mi.scrollIntoView();
  }
  
})();
