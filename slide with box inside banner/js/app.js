$(function () {

  $(window).on(`scroll`, function () {
    let scrolToTop = $(window).scrollTop();
    if (scrolToTop > 80) {
      $(`#manu`).addClass(`drop`)
    } else {
      $(`#manu`).removeClass(`drop`)
    }
  })

  $(window).on(`scroll`, function () {
    let backToTop = $(window).scrollTop();
    if (backToTop > 80) {
      $(`#backToTop`).addClass(`active`);
    } else {
      $(`#backToTop`).removeClass(`active`);
    }
  })

  $(`#backToTop`).on(`click`, function () {
    $(`html,body`).animate({
      scrollTop: 0
    })
  })

  $('.banner_slider').slick({
    autoplay:true,
    dots:true,
    dotsClass:`slider_dots`,
   
  })
   
})



