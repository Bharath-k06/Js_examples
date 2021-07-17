var rdmz=document.querySelector(".randomize");
           var story=document.querySelector(".story");

          let str="Once upon a time there lived a person called :insertname:. He/She was very :insertch: . She used to live in :insertpl: with her :insertg:";
           function randomArrayvalue(array){
               return array[Math.floor(Math.random() * array.length)];
           }
           var insertname=["smith","jhon","clara","Purnima"];
           var insertch=["honest","brave","stubborn","kind"];
           var insertpl=["Mumbai","Vasco","Chennai","Amsterdam"];
           var insertg=["father","mother","sister"];

           rdmz.addEventListener("click",func);
           
           function func(){
                var name=randomArrayvalue(insertname);
                var character=randomArrayvalue(insertch);
                var plc=randomArrayvalue(insertpl);
                var guard=randomArrayvalue(insertg);
                 
                

                var newstr=str;
                var newstr=newstr.replace(':insertch:',character);
                var newstr=newstr.replace(':insertpl:',plc);
                var newstr=newstr.replace(':insertg:',guard);
                 
                 
                  var nme=document.getElementById("name").value;
                if(nme!=''){
                  var newstr=newstr.replace(':insertname:',nme);
                }
                else{
                  var newstr=newstr.replace(':insertname:',name);
                }
                
                story.textContent=newstr;
                story.style.visibility='visible';
               
           }
