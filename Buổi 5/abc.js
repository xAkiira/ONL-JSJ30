//ES6+
//----------------let/const---------------
// let dùng để thay đổi giá trị
// const dùng để làm 1 biến mới
// function sayHello() {
//     for (let index = 0; index < 5; index++) { //scope
//         console.log(index);
//     }
//     let index = 4;
//     index = 5;
//     console.log(index);
// }
// sayHello()
// //-------------------arrow functions-------------
// const square = function(num) {
//     return num*num;
// }
// const square2 = ((num) => num*num)
// //---------------Array.map()------------------
// const color = ['red','green','gray']
// color.map(function(color) {
//     return console.log(color);
// })
// color.map(color => console.log(color))
// const itemList = color.map(function(color) {
//     return `<li>${color}</li>`;
// })
// //--------------fi
// const nums= [1,5,3,9,10,0,12]
// const fil = nums.filter(function(num) {
//     return num > 3
// })
// console.log(fil)

// const students = [
//     {name: "A" , Age: 11 , subject: ['sb1','sb2','sb3']},
//     {name: "B" , Age: 12 , subject: ['sb3','sb1','sb5']},
//     {name: "C" , Age: 14 , subject: ['sb5','sb8','sb2']},
//     {name: "D" , Age: 10 , subject: ['sb2','sb4','sb1']},
//     {name: "E" , Age: 8 , subject: ['sb1','sb2','sb3']}
// ]
// const students1 = students.filter((st) => st.Age <= 11)
// console.log(students1)
// const filSB = students.map(function(student) {
//     return student.subject.filter(sb => sb == 'sb1').length != 0
// })
// console.log(filSB)
// const printAge = students.map(st => st.Age)
// console.log(printAge)
// const sumSB = students.map(st => st.subject.length);
// const sum = numSB.reduce(((total, num) => total + num), 0)
// console.log(sum)

//bài 1
const m = [1,2,3,4,5,6,"hh", "9",80,100]







//Bài 3
const arr1 = [1,2,4,5,6]; 
const arr2 = [1,6,8,9,0]




//Bài 4
const arr = [1,54,6,7]
const newArr = arr.map(nArr => arr + 5)
console.log(newArr)
