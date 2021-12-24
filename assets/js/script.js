function check()
{
    if(document.getElementById("room").checked){
        var num1 = document.getElementById("txt1").value=1000;
    }
    if(document.getElementById("Food").checked){
        var num2 = document.getElementById("txt2").value=100;
    }
    if(document.getElementById("ac").checked){
        var num3 = document.getElementById("txt3").value=100;
    } 
    if(document.getElementById("park").checked){
        var num4 = document.getElementById("txt4").value=100;
    }
    if(document.getElementById("gst").checked){
        var bill = num1 + num2 + num3 + num4;
        var num5 = document.getElementById("txt5").value= (bill)*18/100;
    } 
}

function checkadd()
{
    var num1 = document.getElementById("txt1").value=1000;
    var num2 = document.getElementById("txt2").value=100;
    var num3 = document.getElementById("txt3").value=100;
    var num4 = document.getElementById("txt4").value=100;
    var num5 = num1 + num2 + num3 + num4;
    var num6 = document.getElementById("txt5").value= (num5)*18/100;

   document.getElementById("amount").value = num5 + num6;
   alert("Your bill is generated Please wait...")
}



    
