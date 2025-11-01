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


//                  <====== array ======>

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
console.log("\n");


//                  <=====Object=====>
const loker = {
    jenis : "Sepatu",
    merk : {
        Indonesia : ["Rebook", "Vantela", "Eiger", "Salomon"],
        Jepang : ["Mizuno", "Yonex"],
        AS : ["Nike", "Adidas"]
    },
    size : [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    isReady: true
};
console.log("Panggil object: ", loker.jenis);
console.log("Merek apa: ", loker.merk.Indonesia[2], loker.merk.Jepang[1]);
console.log("Sizenya berapa: ", loker.size[7]);
console.log("Apakah stocknya ada! ", loker.isReady);

loker["jenis"] = "Shoes";
console.log("\nCek loker: ", loker);
loker.harga = "1000k";
console.log("\nHarga: ", loker.harga);
console.log("\nCek loker: ", loker);

const PeriodikTable= [ 
    {
        asam : "Asam Asetat",
        basah : "Barium hidroksida(Ba(OH)2)",
    }, 
    {
        asam : "Asam Sulfat",
        basah : "Natrium hidroksida",
    }, 
    {
        asam : "Asam fosfat",
        basah : "Kalsium hidroksida",
    },
    {
        netral : "Natrium Klorida atau garam"
    }
]

console.log("\nIsi tabel periodik: ", PeriodikTable);
console.log("Jenis asam / basah: ", PeriodikTable[2].basah);

//                  <===== Looping =====>
/*
for(let i = 0; i < joy.length; i++) {
    let row = joy[i];
    console.log(` Row-#${i + 1}`);
    for(let j = 0; j < row.length; j++) {
        console.log(`   ${row[j]}`);
    }
}


//for of | untuk melakukan looping pada array
for(let row of joy){
    for(let num of row){
        console.log(`Number ${num}`);
    }
}

//for in | untuk melakukan looping pada object
let salaryWork = {
    sales : 55,
    counting : 78,
    medicine : 8,
    security : 65
}

for(let salar in salaryWork){
    console.log(`${salar} gaji : ${salaryWork[salar]}jt `);
}

let sum = 0;
let lary = Object.values(salaryWork);
for(let ary of lary){
    sum += ary;
}
let avg = sum / lary.length;
console.log(`Total gaji keseluruhan: ${sum} Rata-rata gaji: ${avg} jt`);
console.log("\n");

let input = prompt("type! somthing");
if(input.toLowerCase() === "pass"){
    const passw = "Ocean_Fotres";
    let type = prompt("enter the password: ");
    while(type !== passw) {
        type = prompt("Enter the Password: ");
    }
    alert("Congr! passtopsword is corret, the page is open");
}else if(input.toLowerCase() === "next"){
    let nex = prompt("If u want stop, u can say? ");
    while(true){
        nex = prompt(nex);
        if(nex.toUpperCase() === "STOP") break;
    }
    alert("ok");    
}

//
let maximum = parseInt(prompt("Masukan nilai Max: "));
while(!maximum){
    maximum = parseInt(prompt("Masukan nilai maksim: "))
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Isi tebakan pertamamu: "));
let attamps = 1;

while(parseInt(guess) !== targetNum){
    attamps++;
    if(guess > targetNum){
        guess = parseInt(prompt("Isi terlalu tinggi! tebak lagi: "));
    }else{
        guess = parseInt(prompt("Isi terlalu rendah! tabak lagi: "));
    }
}
alert(`Selamat tebakan kamu benar! dengan percobaan ke ${attamps} kali`);
*/


//                  <===== function =====>
let lan = "C";

function typlan(){
    let lan ="Python";
    console.log(lan);
    return lan;
}
typlan();
console.log(lan);
console.log("\n");

// (blok scope funtion) liat type data yang digunakan untuk mendifinisikan variabel
let hig = 175;
if(hig > 170){
    var wid = 30;
    // console.log(wid);
}
console.log(`lebar: ${wid}`);
for(let i = 0; i < 10;i++){
    wid = i;
    // console.log(i);
}
console.log(`Lebar: ${wid}`);
console.log("\n");

// Lexical scope
function apllyjob() {
    let position = "IT support";

    function further() {
        let acquaintance = `Ordal dapat memasukan ${position} dengan cara yang adil:\n`;
        console.log(acquaintance);
    }
    further();
}
apllyjob();

// function expression
const hasilpangkat = function(val) {
    return val * val;
}
console.log(hasilpangkat(9));
console.log("\n");

// function berperan argument
function twiceDice(func) {
    func();
    func();
}

function throwDice() {
    const result = Math.floor(Math.random() * 6) + 1;
    console.log(result);
}
console.log("Lemparkan ke-2 dadu: \n");
twiceDice(throwDice);


//function bernilai balik function
function hasilbalikFunc(){
    const rand = Math.random();
    if(rand < 0.1) {
        return function() {
            console.log("Angka lebih Besar ");
        }
    }else {
        return function() {
            console.log("Angka lebih kecil, coba lagi!");
        }
    }
}
const resul = hasilbalikFunc();
resul();

//Method : ketika menambahkan function pada suatu object property
const myFunc = {
    Perpangkatan : function(x){
        return x * x;
    },
    pembagian : function(x, y) {
        return parseFloat(x / y);
    }
}

//This : memanggil suatu property pada Objc yg sama, untuk mendapatkan nilainya
const me = {
    who: "Qao",
    age: "20",
    introduce: function(){
        return `Perkenalkan nama ${this.who} umur tahun ini: ${this.age}`
    }
}

//try dan Catch : skip eror line
function shout(msg) {
    try {
        console.log(msg.toLowerCase());
    }
    catch(eror){
        console.log(eror);
        console.log("Gunakan string untuk mengisi!");
    }
}
