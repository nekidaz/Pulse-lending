$(document).ready(function () {
  //arrow settings
  $(".carousel__inner").slick({
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icon/arrow-left.png"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icon/arrow-rigth.png"></button>',
  });
  //tabs settings
  $("ul.catalog__tabs").on(
    "click",
    "li:not(catalog__tab__active)",
    function () {
      $(this)
        .addClass("catalog__tab__active")
        .siblings()
        .removeClass("catalog__tab__active")
        .closest("div.container")
        .find("div.catalog__content")
        .removeClass("catalog__content__active")
        .eq($(this).index())
        .addClass("catalog__content__active");
    }
  );
  //catalog settings
  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-item__content")
          .eq(i)
          .toggleClass("catalog-item__content__active");
        $(".catalog-item__list")
          .eq(i)
          .toggleClass("catalog-item__list__active");
      });
    });
  }

  toggleSlide(".catalog-item__link");
  toggleSlide(".catalog-item__back");

  $("[data-modal=consultation]").on("click", function () {
    $(".overlay,#consulting").fadeIn("slow");
  });

  $(".modal__close").on("click", function () {
    $(".overlay,#consulting,#thank,#order").fadeOut("slow");
  });

  $(".button_mini").each(function (i) {
    $(this).on("click", function () {
      $("#order modal__descr").text($("catalog-item__subtitle").eq(i).text());
      $(".overlay,#order").fadeIn("slow");
    });
  });
});
