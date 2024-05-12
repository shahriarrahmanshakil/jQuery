$("#logbtn").click(function(){
    var pass1 = $("#mypass1").val();
    var pass2 = $("#mypass2").val();

    if(pass1 != "" && pass2 != ""){
        if(pass1 == pass2){
            alert("login Successfull")
        }else{
            document.write('login failed')
        }
    }else{
        alert("Please Enter your password");
    };
})