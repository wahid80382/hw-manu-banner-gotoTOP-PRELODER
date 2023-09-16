$(function(){
    // hiden js start
    $(`#hidebtn`).on(`click`,function(){
        $(`#elemant`).hide();
    })
    // show js start
    $(`#showBtn`).on(`click`,function(){
        $(`#elemant`).show(5000);
    })
      // toggle js start
      $(`#toggleBtn`).on(`click`,function(){
        $(`#togglElemant`).toggle(2000);
    })
    // toggle js end
    // fade js start
    $(`#fadeOutBtn`).on(`click`,function(){
        $(`#fadeElemant`).fadeOut(3000);
    })
    $(`#fadeIn`).on(`click`,function(){
        $(`#fadeElemant`).fadeIn();
    })
    $(`#ToggleFade`).on(`click`,function(){
        $(`#toggleFadeEliment`).fadeToggle(1500);
    })
    $(`#fadetoBtn`).on(`click`,function(){
        $(`#fadeToElement`).fadeTo(2000,0.2);
    })
   // Fade js start
    // slide js start
    $(`#slideUp`).on(`click`,function(){
        $(`#slideElimant`).slideUp(3000);
    })
    $(`#slideDown`).on(`click`,function(){
        $(`#slideElimant`).slideDown(3000);
    })
    $(`#stop`).on(`click`,function(){
        $(`#slideToggleElimant`).stop();
    })
    $(`#slideToggle`).on(`click`,function(){
        $(`#slideToggleElimant`).slideToggle();
    })
    // slide js end
    // chaining & stop js start
    $(`#chainingBtn`).on(`click`,function(){
        $(`#chainingElimant`).hide(2000).show(2000).fadeOut(2000).fadeIn(2000).slideUp(2000).slideDown(2000).fadeTo(2000,0.2);
    })
    $(`#stop`).on(`click`,function(){
        $(`#chainingElimant`).stop();
    })
    // animation css start
    $(`#animationBtn`).on(`click`,function(){
        $(`#animationElimant`).animate({
            height:`300px`,
            borderRadius:`50%`,
            backgroundColor:`red`,
        })
    })

    
})
