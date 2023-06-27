// O'zgaruvchilar

// let number = 16;
// const name = "Shahriyor";

//const ni o'zgartirish

// const person = {
//     Name: "Saparboyev",
// };

// person.Name = "Sheyh";
// console.log(person);

//old versions 

// var clientName = "Shahriyor";
// console.log(clientName);

//malumot turlari

//string
// const clienName = "Shahriyor";

//Boolean 
// const isMarried = false;
// const isCircleEarth = true;

//null 
// console.log(clientAge); mavjud bo'lmagan ozgaruvchini chaqirgandagi holat

//underfined - qiymatsiz o'zgaruvchini chaqirganda
// let und;
// console.log(und);

//Object
// const thief = { 
//     //key: value
//     age: 16,
//     jacket: "black", 
//     islong: false,
// }

// console.log(thief.age)

//Array           0       1        2     3   4   5     
// const colors = ["red", "black", "grey", 16, [], {}]; 
// console.log(colors[0])

//Foydalanuvchi bilan muloqot
// alert ("Assalomu aleykum")

// const place = confirm("18 yoshdan kattamisiz?");
// console.log(place);

// const currentPlace = prompt("Qayerdansiz?", "");
// console.log(currentPlace);

// const age = +prompt("Anq yoshingiz nechida?", "");
// console.log(age);

// const favouriteColors = [];

// favouriteColors[0] = prompt("Qaysi ranglarni yoqtirasiz? #1", "");
// favouriteColors[1] = prompt("Qaysi ranglarni yoqtirasiz? #2", "");
// favouriteColors[2] = prompt("Qaysi ranglarni yoqtirasiz? #3", "");

// console.log(favouriteColors);

//Interpolatsiya
// const channel = prompt("What's your favourite youtuber");
// console.log(`https://youtube.com/${channel}`);

// const user = ("Shahriyor");
// const job = ("Front End Developer");

// console.log(`User name is ${user}, he is ${job}`);


//Operatorlar

//incr, decr
let incr = 10;
let decr = 10;

console.log(incr++); //1taga ko'paytiradi
console.log(decr--); //1taga kamaytiradi

console.log(10 % 3); //bo'linma qoldiqi

console.log(5 * 5 == "25"); //5*5 25ekanligini tenglawtiradi va togri bo'lsa true qaytaradi 
console.log(2 * 2 + 5 === "9"); //3ta teng belgisi bo'lsa bu malumot turiga qarab javob qaytaradi 

//&& = va || = yoki 

const isAge = true;
const isClose = true;
const isChecked = false;

console.log(isAge && isClose && isChecked); //&& malumotlarni 1tasi ham hato bo'lsa false qaytaradi
console.log(isAge || isClose || isChecked); // || malutbotlar ichida 1tasi ham togri bolsa true qaytaradi

console.log(2 + 2 * 2 != 8); // != teng emasmi degani !== teng emasligini va malumot turini tekwiradi (2 + 2 * 2 !== "8")

