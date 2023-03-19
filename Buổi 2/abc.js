//bài 1
const arr1 = [1,2,3,5]
const arr = [...arr1,...arr1]
//bài 2
const arrA = ["Hello","Xin chào"]
const arrB = ["Bonjour","Olá"]
const waytoSayHello = [...arrA, ...arrB];
//bài 3
const arrX = [0,1,2,3,4,5,6,7,8]
const arrSquare = arrX.map((num) => {
    return num*num;
})
console.log(arrSquare);
const arrOdds = arrX.filter((num) => {
    return (num %2 == 1);
})

console.log(arrOdds);
//bài 4
function filterRange(arr, a ,b) {
    return arr.filter(item => (a <= item && item <= b));
}
console.log(filterRange([1,2,3,4], 2, 4));