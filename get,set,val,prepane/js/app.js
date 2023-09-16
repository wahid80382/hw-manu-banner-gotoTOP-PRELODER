$(function(){
    $(`#btn`).on(`click`,function(){
        $(`#setText`).text(`Wahidul Islam`)
    })
    $(`#btn`).on(`click`,function(){
        $(`#setHtml`).html(`Hallo World`)
    })
    $(`#nameAge`).on(`click`,function(){
        let name = $(`#getValname`).val();
        $(`#value`).text(nameAge);
        let age = $(`#getValAge`).val();
        $(`#agevalue`).text(age);              
    })
    $(`#afterclick`).on(`click`,function(){
        $(`#aftercheck`).after(`</br><input type="text"><button id="delinput">-</button>`);        
    })
    $(`#delinput`).on(`click`,function(){
        alert();
        // $(`#aftercheck`).remove(`<input type="text">`);        
    })
})
