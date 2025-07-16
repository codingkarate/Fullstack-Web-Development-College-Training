const order = {
  id: "ORD123",
  customer: {
    name: "John",
    address: {
      city: "Kolkata",
      pin: 700001,
    },
  },
};

// const {
//     customer: {
//         name,
//         address: { city, pin }
//     }
// } = order;

// console.log(city)

// const product = {
//   name: "John",
//   price: 5000,
//   discount(percent) {
//     return product.price - (this.price * percent) / 100;
//   },
// }

// console.log(product.discount(10));

// const car1 = {
//   brand: "Suzuki"
// }

// function startEngine(){
//   return `${this.brand} car`
// }

// car1.start = startEngine;
// console.log(car1.start());

// const sym1 = Symbol("id1");
// const sym2 = Symbol("id2");

// console.log(typeof(sym1));

const obj1 = {
  a:1,
}
const obj2 = {
  a:2,
}
const obj3 = {
  a:3,
}

const merged = {
  a1: obj1.a,
  a2: obj2.a,
  a3: obj3.a
};

console.log(merged)

console.log(...obj1, ...obj2, ...obj3);