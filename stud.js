console.log('Hello World!');
console.log("HI! Code");

// alert("Say hey! world");
// prompt("start to count!");

// console.warn(danger);
// console.error("Eror in line 67");


if(10 % 4 === 2){
    console.log("betul");
}

let number = Math.random();
console.log(number);
if(number < 0.71 && number > 0.56){
    console.log("Boleh lanjut");
}else if(number <= 0.55){
    console.log("angka akan dicetak :");
    console.log(number);
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

// if dengan bantuan logic operate !(not) &&(and) ||(or)
if(pw.length >= 8 && pw.indexOf (" ") === -1){
    console.log("Password valid!");
}else{
    console.log("password tidak memenuhi syarat");
}

console.log("Number : ");
console.log(number);
if(number == 0.2 || number == 0.3){
    console.log("Kecil");
}else if(number == 0.4 || number == 0.5){
    console.log("sedang");
}else{
    console.log("besar");
}