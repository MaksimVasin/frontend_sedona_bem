$(function() {
  document.querySelector(".main-menu").classList.remove("main-menu--nojs");
  document.querySelector(".main-menu").classList.remove("main-menu--open");
  $("#nav_toggle").on("click", function(evt) {
      evt.preventDefault();
      $(this).toggleClass("main-menu__toggle--active");
      $(document.querySelector(".main-menu")).toggleClass("main-menu--open");
  });

  $("#search_hotel").on("click", function(evt) {
    evt.preventDefault();
    $(document.querySelector(".search-from__window")).toggleClass("search-from__window--active");
    if(this.innerHTML != "Закрыть") {
      this.innerHTML = "Закрыть";
    }
    else {
      this.innerHTML = "Поиск гостиницы в Седоне";
    }
  });
});