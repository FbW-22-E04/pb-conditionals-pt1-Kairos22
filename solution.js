// 1
const int1 = 66; 
const int2 = 11;

if ((int1 >= 50 && int1 <=99) || (int2 >= 50 && int2 <=99)) {
    console.log('true');
} else {
    console.log('false');
} 
console.log('------------------------------1');

// 2
const int3 = 44;

if ((int1 >= 50 && int1 <=99) || (int2 >= 50 && int2 <=99) || (int3 >= 50 && int3 <=99)) {
    console.log('true');
} else {
    console.log('false');
} 
console.log('-------------------------------2');

// 3
const a = 3;
const b = 6;
const c = 9;

if (a > b && a > c) {
    console.log('a is largest', a);
} else if (b > a && b > c) {
    console.log('b is largest', b);
} else {
    console.log('c is largest', c);
}

if (int1> int2 && int1 > int3) {
    console.log('int1 is largest', int1);
} else if (int2 > int1 && int2 > int3) {
    console.log('int2 is largest', int2);
} else {
    console.log('int3 is largest', int3);
}
console.log('-------------------------------3');

// 4
const str = 'thon';

if (str.slice(0,2) === 'Py'){
    console.log(str);
}else {
    console.log('Py' + str);
}
console.log('----------------------------4');

// 5
if (int1 + int2 >= 50 && int1 + int2 <= 80 ){
    console.log(65);
} else {
    console.log(80);
}
console.log('-------------------------------5');

// 6
const int4 = 5;
const int5 = 8;

if (int4 + int5 === 8) {
    console.log(true);
} else if (int4 - int5 === 8 || int5 - int4 === 8 ) {
    console.log(true);
} else {
    console.log(false);
}
console.log('-----------------------------------6');

// 7
if (int4 === 15 || int5 === 15) {
    console.log(true);
} else if (int4 + int5 === 15) {
    console.log(true);
} else {
    console.log(false);
}
console.log('----------------------------------7');

// 8
if (int4 % 7 === 0 || int5 % 7 === 0) {
    console.log(true);
} else if (int4 % 11 === 0 || int5 % 11 === 0){
    console.log(true);
} else {
    console.log(false);
}
console.log('--------------------------------8');

// 9
if (int4 === int5) {
    console.log((int4 + int5) *3);
} else {
    console.log(int4 + int5);
}
console.log('--------------------------------9');

// 10
if (int5 > 19) {
    console.log((int5 - 19)*2);
} else {
    console.log(int5 - 19);
}
console.log('-------------------------------10');

// 11
const firstName = 'Alan';
const age = 25;
if (age < 13) {
    console.log(firstName, 'is a child');
} else if (age >= 13 && age < 20) {
    console.log(firstName, 'is a teenager');
} else if (age >= 20 && age < 30) {
    console.log(firstName, 'is a young adult');
} else { 
    console.log(firstName, 'is a adult');
}
console.log('---------------------------------11');

// 12
switch (true) {
    case age < 13:
         console.log(firstName, 'is a child');
        break;
    case (age >= 13 && age < 20): 
        console.log(firstName, 'is a teenager');
        break;
    case age >= 20 && age < 30: 
       console.log(firstName, 'is a young adult');
        break;
    default:

       console.log(firstName, 'is a adult');
        break;
}
console.log('-------------------------------12');
