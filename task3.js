// let z='#';
// for(let x=0; x<7; x++){
//     z=z+'#';
// console.log(z);
// }

let string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz 
Master,58\n98,Bill,Doctor’s Assistant,26`;
let z = "  ";
for(let i= 0; i < string.length; i++){
    if(string[i] == "\n"){
    console.log(z);
    }
    else if(string[i] == ","){
    console.log(z);
    }
}
