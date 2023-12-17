let result;

result = 10;
result = isNaN("10a"); // is not a number

let number = 15.125616;
result = number.toPrecision(5); // İlk 5 satırı alır. Yuvarlar
result = number.toFixed(5); // .'dan sonra ilk beş satırı alır. Yuvarlar

result = Math.round(2.4); //Yuvarlar
result = Math.ceil(2.9); //Yukarı yuvarlar
result = Math.floor(2.9); //Aşağı yuvarlar
result = Math.sqrt(25); //Karekök alır.
result = Math.pow(2.3); //Taban ve üst olarak verilir. 2^3
result = Math.abs(-10); //Mutlak değer
result = Math.min(2, 7, 11, 2, 25, 0); //min değeri verir
result = Math.min(2, 7, 11, 2, 25, 0); //min değeri verir
result = Math.random(); //0 ile 1 arasında rastgele sayı verir.

result = (Math.random() * 150).toPrecision(3);

console.log(result);
