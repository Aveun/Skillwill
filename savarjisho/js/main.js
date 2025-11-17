// for (let i = 0; i <= 100; i ++) {
//     if (i % 3 === 0 && i % 5 === 0) 
//         console.log("FizzBuzz");
//         else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//     }
// }

const products = [
  { title: "Book", price: 25 },
  { title: "Pen", price: 2 },
  { title: "Bag", price: 40 }
];

for (let i = 0; i < products.length; i++) {
    // დაამატე isExpensive თვისება
    products[i].isExpensive = products[i].price > 20;

    // დაბეჭდე კონსოლში
    console.log(products[i].title + " costs " + products[i].price);
}

console.log(products); // ბოლოს ნახე სრულად ობიექტი
