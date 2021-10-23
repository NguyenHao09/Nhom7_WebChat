$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
    // $('[data-toggle="tooltip"]').tooltip();   

    
    
    $("#txtten").blur(function(){
        var alo = $( ".tt4" ).tooltip({placement: "left"});
        var ten = $(this).val();
        var regten = /^([A-Z]{1}[a-z]*\s)*([A-Z]{1}[a-z]*){1}$/;
        if(regten.test(ten)){
            $('#er4').css("color", "green"); 
            $('.tt4').tooltip('dispose'); 
            document.getElementById("er4").innerHTML ="✓";
            return true;
        }
        else{
            $('#er4').css("color", "red"); 
            $('.tt4').tooltip('show', alo);  
            document.getElementById("er4").innerHTML = "✘";
            return false;
        }
    });

    // $('#txtphone').blur(function() {
    //     var regphone = /((0)+([0-9]{9})\b)/g;
    //     var phone = $(this).val();
    //     if(phone !==''){
    //         if (regphone.test(phone)) {
    //             $("#erphone").html("(*)");
    //             return true;
    //         }else{
    //             $("#erphone").html("Số điện thoại có 10 chữ số, bắt đầu bằng số 0");
    //             return false;
    //         }
    //     }else{
    //         $("#erphone").html("Bạn chưa điền số điện thoại");
    //         return false;
    //     }
    //     });
});

function ktrausername() {
    var alo = $( ".tt1" ).tooltip({placement: "left"});
    var regusername = /^(.+)@gmail.com$/
    var t = document.getElementById("username").value;
    if (t.length > 0 && t.length <= 30 && regusername.test(t)) {
        //dung
        $('#er1').css("color", "green"); 
        $('.tt1').tooltip('dispose'); 
        document.getElementById("er1").innerHTML ="✓";
        return true;
    }
    else {
        // $('[data-toggle="tooltip1"]').tooltip('show');  
        $('#er1').css("color", "red"); 
        $('.tt1').tooltip('show', alo);  
        document.getElementById("er1").innerHTML = "✘";
        return false;
    }
}



function ktrapw() {
    var alo = $( ".tt2" ).tooltip({placement: "left"});
    var regpw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    var t = document.getElementById("password").value;
    if (regpw.test(t)) {
        //dung
        $('#er2').css("color", "green"); 
        $('.tt2').tooltip('dispose'); 
        document.getElementById("er2").innerHTML ="✓";
        return true;
    }
    else {
        $('#er2').css("color", "red"); 
        $('.tt2').tooltip('show', alo);  
        document.getElementById("er2").innerHTML = "✘";
        return false;
    }
}

function ktrapw2() {
    var rong = "";
    var alo = $( ".tt3" ).tooltip({placement: "left"});
    var t = document.getElementById("password").value;
    var t2 = document.getElementById("confirmpassword").value;
    
    if(t2 == rong){
        document.getElementById("er3").innerHTML = "✘";
        $('#er3').css("color", "red"); 
        $('.tt3').tooltip('show', alo);
        return false;
    }
    else if (t == t2) {
        $('#er3').css("color", "green"); 
        $('.tt3').tooltip('dispose'); 
        document.getElementById("er3").innerHTML ="✓";
        return true;
    }
    else {
        $('#er3').css("color", "red"); 
        $('.tt3').tooltip('show', alo);  
        document.getElementById("er3").innerHTML = "✘";
        return false;
    }
}

function ktraCMND() {
    var alo = $( ".tt5" ).tooltip({placement: "left"});
    var regusername = /^[0-9]{9}$/;
    var t = document.getElementById("txtcmnd").value;
    if (t.length > 0 && t.length <= 30 && regusername.test(t)) {
        //dung
        $('#er5').css("color", "green"); 
        $('.tt5').tooltip('dispose'); 
        document.getElementById("er5").innerHTML ="✓";
        return true;
    }
    else {
        // $('[data-toggle="tooltip1"]').tooltip('show');  
        $('#er5').css("color", "red"); 
        $('.tt5').tooltip('show', alo);  
        document.getElementById("er5").innerHTML = "✘";
        return false;
    }
}