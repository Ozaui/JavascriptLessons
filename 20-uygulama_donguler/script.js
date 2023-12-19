let sayilar = [1, 5, 7, 15, 3, 25, 12, 24];

// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.

// for (let sqrd of sayilar) {
//   console.log(sqrd * sqrd);
// }

// 2- sayilar listesindeki hangi sayılar 5' in katıdır?

// for (let sqrd of sayilar) {
//   if (sqrd % 5 === 0) {
//     console.log(`Bu sayı 5'in katıdır = ${sqrd}.`);
//   } else {
//     console.log(`Bu sayı 5'in katı değildir = ${sqrd}.`);
//   }
// }

// 3- sayilar listesindeki çift sayıların toplamını bulunuz.

// let toplam = 0;
// for (let sqrd of sayilar) {
//   if (sqrd % 2 == 0) {
//     toplam += sqrd;
//   }
// }
// console.log(toplam);

let urunler = [
  "iphone 12",
  "samsung s22",
  "iphone 13",
  "samsung s23",
  "samsung s20",
];

// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.

// for (let product of urunler) {
//   console.log(product.toUpperCase());
// }

// 5- urunler listesinde samsung geçen kaç ürün vardır?

// let toplam = 0;
// for (let urun of urunler) {
//   if (urun.includes("samsung")) {
//     toplam++;
//   }
// }
// console.log(`Samsung ürün adedi = ${toplam}`);

let ogrenciler = [
  { ad: "yiğit", soyad: "bilgi", notlar: [60, 70, 60] },
  { ad: "ada", soyad: "bilgi", notlar: [80, 70, 80] },
  { ad: "çınar", soyad: "turan", notlar: [10, 20, 60] },
];

// ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.

for (let ogrenci of ogrenciler) {
  console.log(
    `${ogrenci.ad} isimli öğrencinin not ortlaması = ${
      (ogrenci.notlar[0] + ogrenci.notlar[1] + ogrenci.notlar[1]) / 3
    }`
  );
}

// tüm öğrencilerin not ortalaması kaçtır?
