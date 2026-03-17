let ar = [1,2,3];
console.log(ar.length)

let aarr = new Array(4);
aarr[0] = 10;
aarr[4] = 10;
console.log(aarr) 
console.log(aarr.length)

let arr123 = new Array(1,2,3,"dummy");
console.log(arr123)


let tar = Array.of(1,2,3);
console.log(tar)

let arr1 = Array.from("Hello  World");
console.log(arr1)


let a = {length: 5};
console.log(a)


let arr2 = Array.from(a,(_,i)=> i+1);
console.log(arr2)

let obj = {
  0: "A",
  1: "B",
  2: "C",
};

console.log(Array.from(obj));