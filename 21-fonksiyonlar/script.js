function hi(msg) {
  console.log(msg);
}

hi("selam");
hi("naber");
hi("selam");
hi();

function ageCalculate(birthYear) {
  return new Date().getFullYear() - birthYear;
}

function retiredCalculate(birthYear, name) {
  let age = ageCalculate(birthYear);
  if (age < 60) {
    console.log(`${name} are retired`);
  } else {
    console.log(`${name} are not retired`);
  }
}
console.log(ageCalculate(2001));
retiredCalculate(ageCalculate(2001), "Özay");
