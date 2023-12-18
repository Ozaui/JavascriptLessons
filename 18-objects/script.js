let user = {
  name: "Özay",
  last: "Yıldız",
  age: "22",
  adress: {
    city: "Isparta",
    home: "Merkez",
    No: 12,
  },
  hobies: ["cinema", "sport"],
};
let user2 = {
  name: "Melih",
  last: "Yıldız",
  age: "22",
  adress: {
    city: "Isparta",
    home: "Merkez",
    No: 12,
  },
  hobies: ["cinema", "sport"],
};

let users = [user, user2];
let result;

result = user.name;
result = user.adress.No;
result = user.hobies[0];

console.log(result);
