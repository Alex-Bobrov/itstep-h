// #1
console.log("Task 1");

let square = 25;

let perimeter = (Math.sqrt(square)) * 4;

console.log("Периметр =", perimeter);


// #2
console.log("Task 2");

let a = 3;
let b = 3;
let c = 3;

if (a == b && a == c || b == a && b == c) {
    console.log("Треугольник равносторонний")
} else if (a == b && a !== c || b == c && b != a || c == a && c != b) {
    console.log("Треугольник  равнобедренный");
} else if (a != b && a != c && b != c) {
    console.log("Треугольник разносторонний");
} 


// #3
console.log("Task 3");

let a1 = 3;
let b1 = 10;
let c1 = 4;

if (a1 < b1 + c1 && b1 < c1 + a1 && c1 < b1 + a1) {
    console.log("Треугольник существует");
} else {
    console.log("Треугольник не существует");
}

// #5
console.log("Task 5");

let numberA = 3;
let numberB = 2;

if ((numberA + numberB) % 2 == 0) {
    console.log(numberA * numberB)
} else {
    console.log(numberA / numberB);
}


// #6
console.log("Task 6");

let age = 25;

if (age <= 17) {
    console.log("Молодой")
} else if (age >= 18 && age <= 69) {
    console.log("Взрослый")
} else {
    console.log("Пожилой");
}


// #12
console.log("Task 12");

let sum = 0, i = 1;
while (i <= 20) {
    if (i % 5 == 0) {
        sum += i;

    }
    i++
} console.log(sum);

// #13
console.log("Task 13");

for (a2 = 10; a2 <= 20; a2++) {
    console.log(a2 * a2)
}