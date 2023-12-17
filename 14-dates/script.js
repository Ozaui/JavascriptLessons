let simdi = new Date();
let dogumGünü = new Date(1990, 5 /*Haziran*/, 15);

let result = simdi; //Tüm tarih bilgileri

//Get Methods
result = simdi.getDate(); // Gün bilgisi
result = simdi.getDay(); // number değer verir.  0 = pazar 6 = cumartesi
result = simdi.getMonth(); // Ay bilgisi // index bilgisi
result = simdi.getFullYear(); // Yıl bilgisi
simdi.setHours(15); //Saat bilgisi değişti. (0 - 23)
result = simdi.getHours(); // Saat bilgisi

//Set Methods
simdi.setDate(15); // Gün bilgisi değişti (1 - 31)
simdi.setMonth(7); // Ay bilgisi değişti // index bilgisi (0 - 11)
simdi.setFullYear(2025); // Yıl bilgisi değişti
simdi.setHours(15); //Saat bilgisi değişti. (0 - 23)

console.log(result);
