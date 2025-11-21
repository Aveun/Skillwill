function mySetTimeout(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function makeToy(toyName) {
  console.log(`Toy "${toyName}" მზადდება...`);
}

function deliverToy(toyName) {
  console.log(`Toy "${toyName}" გაგზავნილია!`);
}

async function runToyShop(toyName) {
  makeToy(toyName);

  await mySetTimeout(3000);

  deliverToy(toyName);

  await mySetTimeout(2000);
  
  console.log(`Toy "${toyName}" პროცესი დასრულებულია.`);
}
runToyShop("Car");
