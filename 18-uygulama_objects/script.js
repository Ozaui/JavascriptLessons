/* 
    1- Sipariş bilgilerini object içerisinde saklayınız.
    2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)
    3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

    sipariş id: 101
    sipariş tarihi: 31.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 
        ürün id: 5
        ürün başlığı: IPhone 13 Pro
        ürün url: http://abc.com/iphone-13-pro
        ürün fiyatı: 22000

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

    sipariş id: 102
    sipariş tarihi: 30.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

*/

let siparis1 = {
  id: 101,
  siparisTarihi: "31.12.2022",
  OdemeSekli: "Kredi Kartı",
  kargoAdresi: "Yahya kaptan mah. Kocaeli İzmit",
  urunler: {
    urun1: {
      id: 5,
      başlik: "IPhone 13 Pro",
      url: "http://abc.com/iphone-13-pro",
      fiyat: 22000,
    },

    urun2: {
      id: 6,
      başlik: "IPhone 13 Pro Max",
      url: "http://abc.com/iphone-13-pro-max",
      fiyat: 25000,
    },
  },
};
let siparis2 = {
  id: 102,
  siparisTarihi: "30.12.2022",
  OdemeSekli: "Kredi Kartı",
  kargoAdresi: "Yahya kaptan mah. Kocaeli İzmit",
  urunler: {
    urun1: {
      id: 5,
      başlik: "IPhone 13 Pro",
      url: "http://abc.com/iphone-13-pro",
      fiyat: 22000,
    },
  },
};

siparis1Fiyat =
  (siparis1.urunler.urun1.fiyat + siparis1.urunler.urun2.fiyat) * 1.18;
siparis2Fiyat = (siparis2.urunler.urun1.fiyat * 118) / 100;
toplamOdeme = siparis1Fiyat + siparis2Fiyat;

console.log(toplamOdeme);
console.log("Hello ");
