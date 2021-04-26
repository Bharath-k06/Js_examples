function len(){

    let ele = document.getElementById("ip").value;
    document.getElementById("display").innerHTML = ele.length
}

function S_slice(){
    let ele1 = document.getElementById("ip1").value;
    let ele2 = document.getElementById("ip2").value;
    let S = document.getElementById("sample").value;
    document.getElementById("display").innerHTML = S.slice(ele1,ele2);
}
function S_substring(){
    let ele1 = document.getElementById("ip4").value;
    let ele2 = document.getElementById("ip5").value;
    let S = document.getElementById("sample1").value;
    document.getElementById("display").innerHTML = S.substring(ele1,ele2);
}

function S_upper(){
    let ele =document.getElementById("up").value;
    document.getElementById("display").innerHTML = ele.toUpperCase();
} 
