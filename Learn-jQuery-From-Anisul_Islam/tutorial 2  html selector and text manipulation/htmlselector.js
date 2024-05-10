$(".my-div h1").text("h1 >> Hello Bangladesh ");//using text() function 

$(".p1").text(" Hello Paragraph");//change p tag text 

$(".p2").append(" Hello Paragraph");//using append function

$(".p3").prepend("I am Prepend");//using prepend 

$(".Heading").html("<span style='color:red;'>Hello Heading</span>");//using html function

//Creating html Element Using jQuery 
var Creating_para = $("<p></p>").text("Shahriar Rahman Shakil");
// $("#name").before(Creating_para);
$("#name").after(Creating_para);

