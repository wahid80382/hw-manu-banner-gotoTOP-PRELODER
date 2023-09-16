// preloader js start
// $(window).on(`load`,function(){
//   $(`#preloader`).slideUp();
// })



// web js start
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
})



