// let fruits = ["Elma", "Armut", "Muz", "Çilek"];

// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits[3]);
// console.log(fruits.includes("Elma"));
// fruits.push("Kiraz");
// console.log(fruits);
// fruits.splice(fruits.length - 2, 2);

//----------------------------------------------------------

let student1 = ["Yiğit Bilgi", 2010, [70, 60, 80]];
let student2 = ["Ada Bilgi", 2012, [80, 80, 90]];
let student3 = ["Ahmet Turan", 2009, [60, 60, 70]];

let now = new Date();

console.log(
  `${student1[0]} öğrencisinin yaşı ${
    now.getFullYear() - student1[1]
  }'dir. Not ortalaması = ${
    (student1[2][0] + student1[2][1] + student1[2][2]) / 3
  }`
);
console.log(
  `${student2[0]} öğrencisinin yaşı ${
    now.getFullYear() - student2[1]
  }'dir. Not ortalaması = ${
    (student2[2][0] + student2[2][1] + student2[2][2]) / 3
  }`
);
console.log(
  `${student3[0]} öğrencisinin yaşı ${
    now.getFullYear() - student3[1]
  }'dir. Not ortalaması = ${
    (student3[2][0] + student3[2][1] + student3[2][2]) / 3
  }`
);
