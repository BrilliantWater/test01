// 实现数据交换的几种方式

let a = 1;
let b = 2;
a = a ^ b; // a => 3
b = a ^ b; // b => 1
a = a ^ b; // a => 2
console.log(a,b)// a=>2 b=>1


// ES6语法
let c = 1;
let d = 2;
[c,d] = [d,c];
console.log(c,d); // c=>2 d=>1

let e = 1;
let f = 2;
e = e + f;
f = e - f;
e = e - f;
console.log(e,f); // e=>2 f=>1


let g = 1;
let h = 2;
let temp = g;
g = h;
h = temp;
console.log(g,h); // g=>2 h=>1

