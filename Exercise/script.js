const func = ()=>{
  let ele =document.getElementById("sel").value;
   if(ele == 'c'){
    let val = document.getElementById("ip").value;
    let ele1 = Math.ceil(val);
    document.getElementById("dis").innerHTML = ele1;
  }
  else if(ele == 'i'){
    let val = document.getElementById("ip").value;
    let x = Math.sign(val);
    document.getElementById("dis").innerHTML = x;
  }
  else if(ele == 'r'){
    let val =document.getElementById("ip").value;
    let x = Math.sqrt(val);
    document.getElementById("dis").innerHTML =x;
  }

  else if(ele = 's'){
    let val = document.getElementById("ip").value;
    let ele1 = Math.pow(val,3);
    document.getElementById("dis").innerHTML = ele1;
  }
}
const pi = () =>{
  document.getElementById("dis").innerHTML = Math.PI;
}


const D_fun = () => {
  let id = document.getElementById("sel1").value;
  if(id == 'D'){
    let val = new Date()
    document.getElementById("dis1").innerHTML = val.toDateString(); 
  }
  if(id == 'T'){
    let val = new Date()
    document.getElementById("dis1").innerHTML = val.getHours() + ":" + val.getMinutes() + ":" + val.getSeconds();
  }
  if(id == 'I'){
    let val = new Date()
    document.getElementById("dis1").innerHTML = val.toISOString();
  }
  if(id == 'U'){
    let val = new Date()
    document.getElementById("dis1").innerHTML = val.toUTCString();
  }
}


const N_fun = ()=>{
  let x = document.getElementById("ip3").value;
  let val = new Number(x);
  document.getElementById("dis2").innerHTML = val.toFixed();

}
const N_fun1 = ()=>{
  let x = document.getElementById("ip3").value;

  let val = new Number(x);
  document.getElementById("dis2").innerHTML = val.toPrecision(3);

}
const N_fun2 = ()=>{
  let x = document.getElementById("ip3").value;
  let val = new Number(x);
  document.getElementById("dis2").innerHTML = val.toExponential();

}
const N_fun3 = ()=>{
  let x = document.getElementById("ip3").value;
  let val = new Number(x);
  document.getElementById("dis2").innerHTML = val.valueOf();

}
const N_dis = ()=>{
  document.getElementById("n").disabled = false;
}
const N_en = ()=>{
  document.getElementById("ip3").value = " ";
}