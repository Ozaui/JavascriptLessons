// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.

function words(text, number) {
  for (let i = 0; i < number; i++) {
    console.log(text);
  }
}
words("Naber canım", 5);

// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.

function rectangleCalculete(shortEdge, longEdge) {
  let area = shortEdge * longEdge;
  let circumference = shortEdge * 2 + longEdge * 2;
  console.log(`Alanı : ${area}`);
  console.log(`Çevresi : ${circumference}`);
}
rectangleCalculete(10, 20);

// 3- Yazı tura uygulamasını fonksiyon kullanarak yapınız.

function headsorTails() {
  side = Math.floor(Math.random() * 2 + 1);
  if (side == 1) {
    console.log(`Yazı geldi`);
  } else {
    console.log(`Tura geldi`);
  }
}
headsorTails();

// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.

function tamBolen(number) {
  let numbers = [];
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      numbers.push(i);
    }
  }
  return numbers;
}
console.log(tamBolen(15));

// 5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.
