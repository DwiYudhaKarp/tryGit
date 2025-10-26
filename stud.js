console.log('Hello World!');
console.log("HI! Code");

// alert("Say hey! world");
// prompt("start to count!");

// console.warn(danger);
// console.error("Eror in line 67");


if(10 % 4 === 2){
    console.log("betul");
}

let age = Math.random();
console.log(age);
if(age < 0.71 && age > 0.56){
    console.log("Boleh lanjut");
}else if(age <= 0.55){
    console.log("angka akan dicetak :");
    console.log(age);
}else{
    console.log("angka lebih dari 0.71")
}

const pw = prompt("-M Password");

if(pw.length >= 6){
    if(pw.indexOf(" ") === -1){
        console.log("Password valid!");
    }else{
        console.log("Password tidak bisa ada spasi");
    }
}else{
    console.log("Password tidak valid! minimal 6 karakter");
}