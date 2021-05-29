// var card = document.querySelector('.card')
var product_field = document.querySelector('.product_field')
// console.log(card.outerHTML);
// var card_html = '';


// for(var i = 0; i < 5; i++)
// {
//     card_html += card.outerHTML;
//     product_field.innerHTML = card_html;
// }
window.onload = function(){
    $.getJSON("https://spreadsheets.google.com/feeds/list/1xXwsyjeutF4iorZ-4xnXRXz8KD3sULsinxmlOciK1q8/od6/public/values?alt=json",
    function(data){
        data = data['feed']['entry']
        console.log(data)
        showcard(data);
    })
    function showcard(data){
        var out = ''
        for(var i = 0; i < data.length; i++){
            out+=`<div class="card">`
            out+=`<h3 class="name_card">${data[i]['gsx$name']['$t']}</h3>`
            out+=`<img src="${data[i]['gsx$image']['$t']}" alt="" class="img_card">`
            out+=`<p class="price_card">${data[i]['gsx$price']['$t']}</p>`
            out+=`</div>`
        }
        product_field.innerHTML = out;
    }
    
} 