//Bài 1 :
const arr1 = [1,2,4,5,6];
const arr2 = [1,6,8,9,0];
const getDuplicateItems = [...arr1, ...arr2].filter
((value, index, arr) => {
    return arr.index(value) != index;
});
//Bài 2
const arr = [1,54,6,7]
const newArr = arr.map(value => value += 5 );
console.log("cau2",newArr);
//bài 3
let m = [1,2,4,5,6,7];
let n = [3,5,675,8,96];
const removeList = [1,8,10,96,7]
function removeItem(arr, arrRemove) {
    for (const e of arrRemove) {
        arr.map((value, index) => {if (value == e) delete arr[index] })
    }
    return arr.filter(Number);
}
//bài 4
// const players = [
//     { id: 11, name: 'Messi', age: 33}
//     { id: 12, name: 'Ronaldo', age: 34}
//     { id: 13, name: 'Messi', age: 33}
//     { id: 14, name: 'Messi', age: 33}
//     { id: 15, name: 'Messi', age: 33}
// ]