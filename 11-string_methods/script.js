let kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi.";

let sonuc;

sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.length;
sonuc = kursAdi[1];
sonuc = kursAdi.slice(0, 6);
sonuc = kursAdi.slice(10);
sonuc = kursAdi.slice(-10);

sonuc = kursAdi.substring(0, 6);
sonuc = kursAdi.substring(10);

sonuc = kursAdi.replace("Eğitimi", "Kursu");
sonuc = kursAdi.indexOf("Uygulamalı");

sonuc = kursAdi.split(" ");
sonuc = kursAdi.split(" ")[1];

sonuc = kursAdi.includes("Kursu");

console.log(sonuc);
