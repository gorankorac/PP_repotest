

// 6.	Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *
// function draw(k,l) {


// var result = '';
// for (var i=0; i<k;i++) {

// for (var j=0; j<l;j++) {
//   if ((i===0 || i===1 || i===2) && (j===3 || j===5)){
//     result +='\n';
//   }
//   else {
//     result +='*'
// }
//  if (i>3) result += '\n';
// }
// console.log(result);
// }

// }
// console.log(draw(5,6));
// // 7.
// function d(n){
// var result = 0;
// for (var i=1; i<n; i *=10){
// if (n<10) {
//   result=1
// }
// else result+=1
// }
// return result
// }
// console.log(d(1555));


// function countDigit(n)
// {
//     let count = 0;
//     while (n != 0)
//     {
//         n = Math.floor(n / 10);
//         ++count;
//     }
//     return count;
// }
// console.log('Number of digits:' + ' ' + countDigit(1000000000));

// var a = [2, 4, 7, 8, 7, 7, 1];
// var e = 7;


// var mf = 1;
// var m = 0;
// var item;
// for (var i=0; i<a.length; i++)
// {
//         for (var j=i; j<a.length; j++)
//         {
//                 if (a[i] == a[j])
//                  m++;
//                 if (mf<m)
//                 {
//                   mf=m; 
//                   item = a[i];
//                 }
//         }
//         m=0;
// }
// console.log(item+" ( " +mf +" times ) ") ;

// let num = [1,2,3,4,5,6,7,8,9];
// console.log('even numbers are');
// for (var i=1; i<10; i+=2) {
//   console.log(i);
// }

// console.log('odd numbers are');
// for (var i=2; i<10; i+=2) {
//   console.log(i);
// }

// var sum = 0;
// for (i=4; sum<8; i++) {

// if (i==6) {
//   continue;
// }
// sum += i;

// }
// console.log(sum);

const numb = [0,1,2,3,4,5,6,7,8,9,];
let odd = [];
let even = [];
for (let i = 0; i < numb.length; i++) {
if (numb[i] % 2 === 1) {
odd.push(numb[i]);
} else {
even.push(numb[i]);
}
};
console.log(`These are your numbers: ${numb}`)
console.log(`your odd numbers are: ${odd}`);
console.log(`your even numbers are: ${even}`);

console.log( '1' + '1' );
console.log('1' + + '2');

function sum (a, b) {

var c = a + b;
return c;

}

sum(1, 2);

function args() {

return arguments;

}

args();
args(1, 2, 3, 4, true, 'ninja');

function digits(n){
  var result = 0;                           
  for (var i = 1; i < n; i *= 10){

 return result;

 }
console.log(digits(55555));

function digits(n) {

  var count=0;
  for (i=0; i<n; i++) {
    if(n>0) count++;

    
  }
  return count;
  }
  console.log(digits(123));



