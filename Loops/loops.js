

//  1.	Write a program that checks if a given element e is in the array a. 
//  Input:  e = 3, a = [5, -4.2, 3, 7]
//  Output: yes

   var a = [5, -4, 2, 3, 7];
   var e = 3;

   for (var i=0; i<a.length; i++) {

    if (e === a[i]) {

       console.log('Yes');

       }
         else {
               console.log('Nope');
           }
        }

// 2.	Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

var a = [-3, 11, 5, 3.4, -8];

for (var i=0; i<a.length; i++) {

if (a[i]>0) {

console.log(a[i]*2);
  
}
 }

// 3.	Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

var b = [4, 2, 2, -1, 6];

 for (var i=0; i<a.length; i++) 
 var minn = Math.min(...b);
 var next = minn.next()
 console.log(minn);

// //   nextval=b[b.indexOf(minn)-1]

// //   console.log(nextval);
  
//  var arr = [4,2,2,-1,6];
//  var min = arr[0];
//  var min2 = arr[0];
//  for(count=0; count<arr.length;count++){
//      if(arr[count]<min){
//          min = arr[count];
 
//      }
//  }
 
//  for(count=0; count<arr.length;count++){
//      if(arr[count]!==min && arr[count]<min2){
//          mini2 = arr[count]
//          console.log('secound smallest number',mini2);
//      }
//  }

// 4.	Write a program that finds the first element larger than minimum and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2

// var b = [4, 2, 2, -1, 6];
// var min=0;
// for(let i=0; i<b.length-1; i++) {
// // console.log(b[i]);
    

// for(let j=1; j<b.length; j++) {

//  min = b[i]<b[j] ? b[i] : b[j];
// //  console.log(b[j]);
// }
 
// }
// console.log(min);

// var b = [4, 2, 2, -1, 6];

// var min = b[0];
// var nextMin = b[0];

// for (var i = 1; i < b.length; i++) {

// if (b[i] < min) {

// nextMin = min;
// min = b[i];

// }

// }

// console.log(nextMin);

