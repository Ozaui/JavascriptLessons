// 1- Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.

// let number = 30;
// if (number > 10 && number < 50) {
//   console.log(number);
// }

// 2- Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.

// number = 11;

// if (number > 0 || number % 2 == 1) {
//   console.log(number);
// } else {
//   console.log("tek sayı değil");
// }

// 3- x, y, z sayılarının büyüklük karşılaştırmasını yapınız. (else if 'i araştırınız.)

// let x = 1;
// let y = 2;
// let z = 3;

// if (x > y && x > z) {
//   console.log("En büyük " + x);
// } else if (y > x && y > z) {
//   console.log("En büyük " + y);
// } else {
//   console.log("En büyük " + z);
// }

// 4- 2 vize (40%) ve 1 final(60%) notuna göre hesaplanan ortalama için;

let vize1 = 5;
let vize2 = 5;
let final = 70;
let avg = (vize1 + vize2) * 0.4 + final * 0.6;
console.log(avg);
// a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.

// if (avg >= 50) {
//   console.log("Dersi geçtin");
// } else {
//   console.log("Dersden kaldın");
// }

// b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.

// if (avg >= 50 && final >= 50) {
//   console.log("Dersi geçtin");
// } else {
//   console.log("Dersden kaldın");
// }

// c- Finalden 70 alındığında ortalama 50' nin altında olsa bile dersten geçilsin.
if (avg >= 50 && final >= 50) {
  console.log("Dersi geçtin");
} else if (final >= 70) {
  console.log("Dersi geçtin");
} else {
  console.log("Dersden kaldın");
}
