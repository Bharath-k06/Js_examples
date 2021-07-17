function disp(){
    let name=document.getElementById("er").value;
    try{
        if(name == "")
         throw "Empty";
         if(!isNaN(name))
         throw "number is not accepted";
    }
    catch(error){
        document.getElementById("err1").innerHTML="Error in Name : "+error;
    }
    finally{
        document.getElementById("er").value=" ";
    }
}

function disp1(){
    let n=document.getElementById("es").value;
    try{
        if(n == "")
         throw "Empty";
         if(isNaN(n))
         throw "Enter a number";
         n=Number(n);
         if(n<18)
         throw "Age should not be less than 18";

    }
    catch(error){
        document.getElementById("err2").innerHTML="Error in Age : "+error;
    }
    finally{
        document.getElementById("es").value=" ";
    }
}