    //using js
// document.querySelector("button").addEventListener("click", function(){
//             document.querySelector("h1").innerHTML="Hello Event Listneer";
// })

    //using jQuery
// $("button").click(function(){
//     $("h1").text("Hello jQuery");
// })


$("button").click(function(){
    $("h1").toggleClass("style");
})

    // using js
// var totalbutton = document.querySelectorAll(".mybutton").length;
// for(let i = 0; i < totalbutton; i++){
//     document.querySelectorAll(".mybutton")[i].addEventListener("click", function(){
//         var value = this.innerHTML;
//         document.querySelector("h1").innerHTML = "I am " + value;
//     })
// }


// using jQuery 
$(".mybutton").click(function(){
    var value = this.innerHTML
    $("h1").text("I am" + value)
})
