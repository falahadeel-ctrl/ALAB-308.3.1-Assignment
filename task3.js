let string=`ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let cell1="";
let cell2="";
let cell3="";
let cell4="";
let comma = 0;

for(let i =0;i<string.length; i++){
    let text= string[i];
    if(text==","){
  comma++;
    }else if(text=="\n"){
        console.log(cell1,cell2,cell3,cell4)
cell1="";
cell2="";
cell3="";
cell4="";
comma=0;
    }else
        if(comma == 0){
    cell1=cell1+text;
        }else if(comma == 1){
    cell2=cell2+text;
        }else if(comma == 2){
    cell3=cell3+text;
        }else {
    cell4=cell4+text;
        }
        if(i+1==string.length){
    console.log(cell1,cell2,cell3,cell4);
}
}



