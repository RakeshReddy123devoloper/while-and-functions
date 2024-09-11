// // ----> For loop <-----

for (i = 1; i <= 10; i++) {
  console.log((i ** 2));
}



let add = 0;
for (i = 1; i <= 20; i++) {
  if (i % 3 == 0) add = add + i;
}
console.log( `${i} = ${add}`);



for (i = 1; i <= 15; i++) {
  console.log(i ** 3);
}



// -----> Do while loop <----


let l = 10;
do {
  console.log(l);
  l--;
} while (l >= 1);



let k = 1;
let sum = 1;
do {
  sum = sum * i;
  k++;
} while (k <= 12);
console.log(sum);



let j = 20;
do {
  console.log(j);
  j = j - 2;
} while (j >= 1);



// // -----> while loop <-----



var i = 1;
while (i <= 20) {
  if (i % 5 != 0) console.log(i);
  i++;
}



var i = 1;
var add1 = 0;
while (i <= 30) {
  if (i % 4 == 0) add1 = add1 + i;
  i++;
}
console.log(add1);



var i = 50;
while (i >= 0) {
  if (i % 3 == 0) console.log(i);
  i--;
}




// ---->Upper case letter <-----

let input="hello";
let fullname=input.toUpperCase();
console.log(fullname)


let x="world";
    y=x.charAt(0).toUpperCase();
    z=x.slice(1,5);
    console.log(y.concat(z))


// -----> remove vowels <----


let e="world";
let v=e.replace(/[aeiou]/g, '');
console.log(v)