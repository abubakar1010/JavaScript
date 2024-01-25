console.log("hello I am Conditional tutorial");

let age = 19;

let grace = age + 7;

if (age - grace > 18) {
  console.log("true");
} else {
  console.log(false);
}

let newAge = 17;

if (newAge === 0) {
  console.log("oh are you kidding");
} else if (newAge == 18) {
  console.log("now you are 18");
} else if (newAge > 19) {
  console.log("now you are 19");
} else {
  console.log("you are under 19");
}

a = 6;
b = 8;

let c = a > b ? (a - b) : (b - a);

console.log(c);