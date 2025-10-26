console.log("HI! Code");

// alert("Say hey! world");
// prompt("start to count!");
// console.warn(danger);
// console.error("Eror in line 67");

/*
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
*/

/*
const pw = prompt("-M Password");
decision nested
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

const role = prompt("Masukan role anda: ");
if(role == "admin" || role !== "spv"){
    console.log("Akses terbuka");
}else{
    console.log("tidak dapat mengkases!");
}
*/

/*
const mounth = prompt("Masukan Bulan: ");

switch(mounth){
    case "January":
        console.log("bulan Januari");
    break;
    case "February":
        console.log("bulan Februari");
    break;
    case "August":
        console.log("bulan Agustus");
    break;
    case "September":
        console.log("bulan September");
    break;
    case "October":
        console.log("bulan Oktober");
    break;
    default:
        console.log("tidak valid");
}
*/


/*
//Triangle star pattern
let n =5;
for(let i = 1; i <= n; i++){
    let str = " * ";
    console.log(str.repeat(i));
}
console.log(" ");

for(let i = 1; i <= n; i++){
    let str = "* ";
    let spc = " ";
    console.log(spc.repeat(n - i) + str.repeat(i));
}

console.log(" ");

for(let i = n; i >= 1; i--){
    let str ="* ";
    let spc = " ";
    console.log(spc.repeat(n - i) + str.repeat(i));
}

console.log(" ");

for(let i = n; i >= 1; i--){
    let str = "*";
    console.log(str.repeat(i));
}
*/


//array 
//  - push():       menambahkan item pada akhir Array
//  - pop():        menghapus item dari paling akhir Array
//  - shift():      menghapus item dari awal Array
//  - unshift():    menambahkan item pada awal Array

// - concat():      menggabungkan array
// - includes():    mencari suatu nilai di array
// - indexOf()
// - join():        membuat suatu string dari sebuah array
// - reverse():     membalikan urutan nilai dari array
// - slice():       menyalin sebagian nilai dari array
// - splice():      mengghapus / mengubah elemen 
// - sort():        mengurutkan nilai pada array

//push() pop(), concat()
const array1 = [];
const array2 = [];
array1.push("a", "b", "c", "bland", "d", "asin", "melt", "");
console.log("tambah item dari index akhir array: ", array1);
array2.push("f", "g", "h", "i", "j", "b", "s");
console.log("tambah item dari index awal array: ", array2);
console.log("menghapus item dari index awal array: ");
array2.pop();
console.log(array2);

array = array1.concat(array2);
console.log("\ngabungkan k-2 array: ", array);

//indexOf()
console.log("\nCari index item: ");
console.log(array.indexOf("c"));
console.log("Cari index item: ", array.indexOf("b", 2));                            //indexOf(parameter1, parameter2). parameter 1: nilai array; parameter2: nilai-index array keberapa.

//includes()
console.log("Memeriksa item dalam array(true /false): ");
console.log(array.includes("asin"));

//sort()
console.log("\nMengurutkan sesuai karakter awal(abjad / angka): ");
console.log(array.sort());

const arr = [32, 11, 1.0, 1.3, 1.5, 6.7, 5];
console.log("\nMengurutkan sesuai karakter awal(abjad / angka): ",arr.sort());

//splice()
console.log("\nsambungkan / menggantikan nilai index dalam array: ");
array.splice(4, 0, "crimy");                                                        //parameter1: nilai-index yang ingin digantikan; parameter2: berapa banyak-index yang ingin digantikan; parameter3 : nilai-index baru.
console.log(array);

console.log("\nsambungkan / menggantikan nilai index dalam array: ");
array.splice(5, 3, "shorr");
console.log(array);
console.log("banyak-index yang ingin digantikan: ", array.splice(5, 3, "shorr"));

//reverse()
console.log("\nMembalikan nilai Array: ");
array.reverse();
console.log(array);

//join()
console.log("\nmembuat nilai string(,): ");
console.log(array.join());
console.log("membuat nilai string: ", array.join(" "));
console.log("membuat nilai string: ", array.join("$ "));

//slice()
console.log("\nMenyalin sebagian dari array: ")
console.log(array.slice());
console.log("Menyalin sebagian dari array: ", array.slice(4, 7));                    //parameter1: menghapus sisi < index beserta nilainya;; parameter2: menghapus sisi >= index beserta nilainya;
console.log("Menyalin sebagian dari array: ", array.slice(3, -1));


const joy = [[9, 8, 7],
             [6, 5, 4],
             [3, 2, 1]
            ]
console.log("Cari nilai pada multidimensi / nestedarray: ",joy[2][2]);