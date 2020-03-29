function makeid(){
    var IdLength=document.getElementById('IdLength');
    
    var UserInput=IdLength.value.replace(/[^0-9.]/g, "");
    
    IdLength.value=UserInput;
    var Results=document.getElementById('results');
    var text = "";
    var shuffle = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    
    if(IdLength!==''){
        for( var i=0; i < IdLength.value; i++ ){
            text += shuffle.charAt(Math.floor(Math.random() * shuffle.length));
        }
        Results.innerHTML=text;
    }
    }
    