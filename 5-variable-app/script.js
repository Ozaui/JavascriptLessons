/* 
    1- İki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.

        öğrenci 1: 
            isim                : ada bilgi
            doğum tarihi        : 2012
            matematik notları   : 70, 70, 80

        öğrenci 2: 
            isim                : yiğit bilgi
            doğum tarihi        : 2010
            matematik notları   : 40, 40, 50

    2- Öğrencilerinin yaş bilgilerini değişkende tutunuz.
    3- Öğrencilerinin ders ortalama notunu değişkende saklayınız.
    4- Öğrencilerinin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.
*/

var student1Name = "Ada Bilgi";
var student1DateofBirth = 2012;
var student1MathGrade1 = 70;
var student1MathGrade2 = 70;
var student1MathGrade3 = 80;
var student1MathGPA1 =
  (student1MathGrade1 + student1MathGrade2 + student1MathGrade3) / 3;
var isSuccessful1 = student1MathGPA1 > 50;
console.log("1. öğrencini başarılı mı? " + isSuccessful1);

var student2Name = "Yiğit Bilgi";
var student2DateofBirth = 2010;
var student2MathGrade1 = 40;
var student2MathGrade2 = 40;
var student2MathGrade3 = 50;
var student1MathGPA2 =
  (student2MathGrade1 + student2MathGrade2 + student2MathGrade3) / 3;
var isSuccessful2 = student1MathGPA2 > 50;
console.log("2. öğrencini başarılı mı? " + isSuccessful2);

let year = new Date().getFullYear();
let gun = new Date().getDate();
console.log(gun);

let stundent1Age = year - student1DateofBirth;
console.log(stundent1Age);
let stundent2Age = year - student2DateofBirth;
console.log(stundent2Age);
