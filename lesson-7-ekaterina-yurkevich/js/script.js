// 1)

let food = [
    { name: " ORANGE", price: 500, isFruit: true },
    { name: "burger", price: 100, isFruit: false },
    { name: "watermelon", price: 210, isFruit: false },
    { name: "toast", price: 350, isFruit: false },
    { name: "apple ", price: 140, isFruit: true },
    { name: " bAn ana", price: 380, isFruit: true }
];

function getFruitsUpper200(arr) {
    let filteredArr = [];
    arr.forEach(item => {
        if ((item.price > 200) && (item.isFruit)) {
            filteredArr.push(item.name.trim().replace(" ", "").toLowerCase());
        };
    });
    return filteredArr;
};

console.log(getFruitsUpper200(food));

function getFruitsUpper200Second(arr) {
    let filteredArr = arr.filter(item => {
        return ((item.price > 200) && (item.isFruit));
    }).map(item => item.name.trim().replace(" ", "").toLowerCase());
    return filteredArr;
};

console.log(getFruitsUpper200Second(food));

function getFruitsUpper200Third(arr) {
    let filteredArr = arr.reduce((acc, item) => {
        if ((item.price > 200) && (item.isFruit)) {
            acc.push(item.name.trim().replace(" ", "").toLowerCase());
        };
        return acc;
    }, []);
    return filteredArr;
};

console.log(getFruitsUpper200Third(food));

// 2)

let salary = [1000, 500, 1200, 230];

function getSortArrSalary(arr) {
    let newArr = arr.sort((a, b) => a - b).reverse();

    (Array.isArray(newArr)) ? console.log("Это массив"): console.log("Это не массив");
    return newArr;
};

console.log(getSortArrSalary(salary));

// 3)

let serials = ["How i met your mom", "Friends", "Big bang theory"];

let stringOfSerials = serials.join(', ');

console.log(stringOfSerials);

// 4)

let anotherFood = [
    { name: " ORANGE", price: 500, isFruit: true },
    { name: "burger", price: 100, isFruit: false },
    { name: "watermelon", price: 210, isFruit: false },
    { name: "toast", price: 350, isFruit: false },
    { name: "apple ", price: 140, isFruit: true },
    { name: " bAn ana", price: 380, isFruit: true }
];

function getSumOfProducts(arr) {
    let sum = arr.reduce((acc, item) => {
        return acc + item.price;
    }, 0);
    return sum;
};

let sumOfProducts = getSumOfProducts(anotherFood);

console.log("Total cost of products", sumOfProducts);

function getSumOfProductsSecond(arr) {
    let sum = 0;
    arr.forEach(item => {
        sum += item.price;
    });
    return sum;
};

let sumOfProductsSecond = getSumOfProductsSecond(anotherFood);

console.log("Total cost of products", sumOfProductsSecond);
