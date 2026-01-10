// ===========PRINT SQUARE PATTERN===========
// * * * * *
// *       *
// *       *
// *       *
// * * * * *


// let row = 5
// let colom = 1

// while(colom <= row){
//     let j = 1
//     let bag = ""
//     while(j <= row){
//         if (colom ==1 || colom == row || j == 1 || j == row){
//             bag += "* "
//         } else {
//             bag += "  "
//         }
//         j++
      
//     }
//     console.log(bag)
//     colom++
// }


// ===========PRINT A PATTERN===========


// let row = 5;
// let colom = 1;
// while (colom <= row) {
//     let j = 1;
//     let bag = "";
//     while (j <= row) {
//         if (colom == 1 || colom == 3  || j == 1|| j == 5) {
//             bag += "* ";
//         } else {
//             bag += "  ";
//         }
//         j++;
//     }
//     console.log(bag);
//     colom++;
// }


// =========Print a right-angle triangle============


// *
// * *
// * * *
// * * * *
// * * * * *


// let n = 5;
// let i = 1;
// while (i <= n) {
//     row  = "";
//     let j = 1;
//     while (j <= i) {
//         row += "* ";
//         j++;
//     }
//     console.log(row);
//     i++;
// }


// ========PRINT REVERSE PYRAMID PATTERN===========


// * * * * *
//  * * * *
//   * * *
//    * *
//     *


// let n = 5;
// let i = 1;
// while (i <= n) {
//     let j = 1;
//     let bag = "";
//     while (j <= i) {
//         bag += " ";
//         j++;
//     }
//     let k = n - i + 1;
//     while (k >= 1) {
//         bag += "* ";
//         k--;
//     }
//     console.log(bag);
//     i++;
// }


// =========PRINT DIAMOND PATTERN===========


//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *


// let n = 5;
// let i = 1;
// while (i <= n) {
//     let j = 1;
//     let row = "";
//     while (j <= n - i) {
//         row += " ";
//         j++;
//     }
//     let k = 1;
//     while (k <= i) {
//         row += "* ";
//         k++;
//     }
//     console.log(row);
//     i++;
// }
// i = n - 1;
// while (i >= 1) {
//     let j = 1;
//     let row = "";
//     while (j <= n - i) {
//         row += " ";
//         j++;
//     }
//     let k = 1;
//     while (k <= i) {
//         row += "* ";
//         k++;
//     }
//     console.log(row);
//     i--;
//     }


// =========PRINT HOLLOW PYRAMID PATTERN===========


//     *
//    * *
//   *   *
//  *     *
// * * * * * 


// let n = 5;
// let i = 1;
// while (i <= n) {
//     let j = 1;
//     let row = "";
//     while (j <= n - i) {
//         row += " ";
//         j++;
//     }
//     let k = 1;
//     while (k <= i) {
//         if (k == 1 || k == i || i == n) {
//             row += "* ";
//         } else {
//             row += "  ";
//         }
//         k++;
//     }
//     console.log(row);
//     i++;
// }


// =========PRINT NUMBER PATTERN===========


// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


// let n = 5;
// let i = 1;
// while (i <= n) {
//     let j = 1;
//     let row = "";
//     while (j <= i) {
//         row += j + " ";
//         j++;
//     }
//     console.log(row);
//     i++;
// }


// =========PRINT REVERSE NUMBER PATTERN===========


// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1


// let n = 5;
// let i = n;
// while (i >= 1) {
//     let j = i;
//     let row = "";
//     while (j >= 1) {
//         row += j + " ";
//         j--;
//     }
//     console.log(row);
//     i--;
// } 


// =========PRINT FLOYD'S TRIANGLE===========


// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15


// let n = 5;
// let i = 1;
// let count = 1;
// while (i <= n) {
//     let j = 1;
//     let row = "";
//     while (j <= i) {
//         row += count + " ";
//         count++;
//         j++;
//     }
//     console.log(row);
//     i++;
// }


// =========PRINT NUMBER PATTERN===========


// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5


// let n = 5;
// let i = 1;
// while (i <= n) {
//     let j = 1;
//     let row = "";
//     while (j <= i) {
//         row += i + " ";
//         j++;
//     }
//     console.log(row);
//     i++;
// }


// =========PRINT ALPHABET PATTERN===========


// A
// B B
// C C C
// D D D D
// E E E E E


// let n = 10;
// let i = 1;
// while (i <= n) {
//     let j = 1;
//     let row = "";
//     let char = String.fromCharCode(64 + i);
//      while (j <= i) {
//         row += char + " ";
//         j++;
//     }
//     console.log(row);
//     i++;
// }


// =========PRINT ALPHABET PYRAMID PATTERN===========


//     A
//    B B
//   C C C
//  D D D D
// E E E E E


// let n = 5;
// let i = 1;
// while (i <= n) {
//     let j = 1;
//     let row = "";
//     while (j <= n - i) {
//         row += " ";
//         j++;
//     }
//     let k = 1;
//     let char = String.fromCharCode(64 + i);
//     while (k <= i) {
//         row += char + " ";
//         k++;
//     }
//     console.log(row);
//     i++;
// }


// ===========PRINT ALPHABET  PYRAMID PATTERN=============
//     A
//    B C
//   D E F
//  G H I J
// K L M N O


// let n = 5;
// let i = 1;
// let count = 1;
// while (i <= n) {
//     let j = 1;
//     let row = "";
//     while (j <= n - i) {
//         row += " ";
//         j++;
//     }
//     let k = 1;
//     while (k <= i) {
//         let char = String.fromCharCode(64 + count);
//         row += char + " ";
//         count++;
//         k++;
//     }
//     console.log(row);
//     i++;
// }




// ===========PRINT E PATTERN=============

// * * * * * 
// *         
// * * * * * 
// *         
// * * * * * 


// let n = 7;
// let i = 1;
// while (i <= n) {
//     let j = 1;
//     let row = "";
//     while (j <= n) {
//         if (i == 1 || i == n || j == 1 || i == 4) {
//             row += "* ";
//         } else {
//             row += "  ";
//         }
//         j++;
//     }
//     console.log(row);
//     i++;
// }
 
//  =============PYRAMID OF NUMBERS=============

//      1
//     121
//    12321
//   1234321
//  123454321

// let n = 5;
// let i = 1;
// while (i <= n) {
//     let j = 1;
//     let row = " ";
//     while (j <= n - i){
//         row+= " ";
//         j++;
//     }
//     let k = 1
//     while( k <= i ){
//         row += k ;
//         k++;
//     }
//    let l = i - 1;
//        while( l>=1 ){
//         row += l ;
//         l--;
//        }
//        console.log(row);
//        i++;
// }

//  =============PRINT Z PATTERN=============

// * * * * *
//       *
//     *
//   *
// * * * * *

// let n = 5;
// let i = 1;
// while (i <= n) {
//     let j = 1;
//     let row = "";
//     while (j <= n) {
//         if (i == 1 || i == n || j == n - i + 1) {
//             row += "* ";
//         } else {
//             row += "  ";
//         }
//         j++;
//     }
//     console.log(row);
//     i++;
// }

//  =============SUM OF DIGITS TILL SINGLE DIGIT=============

// let n = 678;
// while (n >=10) {
//     let sum = 0;

// while (n>0){
//         sum += n % 10;
//         n = Math.floor(n/10);
//     }
//     n = sum;
// }   
// console.log(n);

//  =============COUNT PERFECT SQUARES IN A RANGE=============


// const prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number: "));
// let sum = 0;

// for (let i = 1; i <= n / 2; i++) {
//   if (n % i === 0) {
//     sum += i;
//   }
// }

// if (sum === n) {
//   console.log("Perfect Number");
// } else {
//   console.log("Not Perfect Number");
// }

// ===========PRINT ALPHABET  PATTERN=============
// A
// B C
// D E F
// G H I J
// K L M N O    

// let n = 5;
// let i = 1;
// let count = 1;  //count variable banaya
// while (i <= n) {
//     let row = ""; //row ko empty string me set kar diya
//     let k = 1;
//     while (k <= i) {
//         let char = String.fromCharCode(64 + count); //let char to convert number to character
//         row += char + " "; //row me add char
//         count++;//count me increment
//         k++;
//     }
//     console.log(row);
//     i++;
// }

// ===========TWISTED PRIME NUMBER=============

// const prompt = require("prompt-sync")();
// let num = Number(prompt("Enter a number: "));

// let temp = num;   // original number save
// let i = 1;
// let count1 = 0;
// let count2 = 0


// while (i <= num) {              // check prime for original number
//     if (num % i === 0) {
//         count1++;
//     }
//     i++;
// }

// let rev = 0;              // reverse number variable
// while (temp > 0) {
//     let digit = temp % 10;
//     rev = rev * 10 + digit;
//     temp = Math.floor(temp / 10);
// }

// i = 1;                // reset for reverse prime check 

// while (i <= rev) {                 // check prime for reversed number
//     if (rev % i === 0) {
//         count2++;
//     }
//     i++;
// }

// if (count1 === 2 || count2 == 2 ) {
//     console.log( num, rev," is twisted and prime number " );
// } else {
//     console.log(num,"is not twisted and not prime number");
// }


// ===========zig-zag PATTERN============= 
// *****
//    *****
//       *****
//         *****
//       *****
//    *****  
// *****  

// const prompt = require("prompt-sync")();
// let n = Number(prompt("Enter number of rows: "));

// let i = 1;
// let space = 0;
// let change = 1;  

// while (i <= n) {

//     let j = 1;
//     let row = "";

    
//     while (j <= space) {          
//         row += " ";
//         j++;
//     }

//     let k = 1;
   
//     while (k <= 5) {             
//         row += "*";
//         k++;
//     }

//     console.log(row);

//     if (space == n / 2) {
//         change = -1;            
//     }else if (space == 0) {
//         change = 1;              
//     }
//     space = space + change;
 
//     i++;
// }


// function findGreaterNumber(a, b) {
  
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
//  }

// ==============PRINT AMAN NAME PATTERN=============

// let i = 0;
// while (i < 5) {
//   if (i === 0) {
//     console.log("*****   *    *   *****   *    *   * * * *   *    *    *****   *     *    *    *   *****");
//   }             
//   else if (i === 1) {            
//     console.log("*   *   **  **   *   *   **   *      *      *    *    *   *   *   *      *    *   *   *");
//   }             
//   else if (i === 2) {            
//     console.log("*****   * ** *   *****   * *  *      *      ******    *****   * *        *    *   **** ");
//   }             
//   else if (i === 3) {            
//     console.log("*   *   *    *   *   *   *  * *      *      *    *    *   *   *   *      *    *   *   *");
//   }             
//   else if (i === 4) {            
//     console.log("*   *   *    *   *   *   *    *      *      *    *    *   *   *     *     ****    *    *");
//   }
//   i++;
// }

// ===========SWAP TWO NUMBERS =============
// const prompt = require("prompt-sync")();
// let a = Number(prompt("Enter first number: ")); 
// let b = Number(prompt("Enter second number: "));

// console.log("Before swapping: a =", a, ", b =", b);

// let temp = a;     // Swapping using a temporary variable
// a = b;
// b = temp;

// console.log("After swapping: a =", a, ", b =", b);   


//========== PROPEAR PRINT AMAN THAAKUR ===========
// ------------------------------------------------

// let row = 5;
// let col = 1;

// while (col <= row) {
//   let star = "";
//   let j = 1;

//   while (j <= row * 12) {

//     if (
//       j == 6  || j == 12 || j == 18 || j == 24 || j == 30 ||
//       j == 36 || j == 42 || j == 48 || j == 54 || j == 60 ||

//       /* A */
//       (col == 1 && (j == 1 || j == 5 )) ||
//       (col == 2 && (j == 2 || j == 3 || j == 4)) ||
//       (col == 4 && (j == 2 || j == 3 || j == 4)) ||
//       (col == 5 && (j == 2 || j == 3 || j == 4)) ||

//       /* M */
//       (col == 1 && (j == 8 || j == 9 || j == 10)) ||
//       (col == 2 && j == 9) ||
//       (col == 3 && (j == 8 || j == 10|| j == 12)) ||
//       (col == 4 && (j == 8 || j == 9 || j == 10)) ||
//       (col == 5 && (j == 8 || j == 9 || j == 10)) ||

//       /* A */
//       (col == 1 && (j == 13 || j == 17 )) ||
//       (col == 2 && (j == 14 || j == 15 || j == 16)) ||
//       (col == 4 && (j == 14 || j == 15 || j == 16)) ||
//       (col == 5 && (j == 14 || j == 15 || j == 16)) ||

//       /* N */
//       (col == 1 && (j == 20 || j == 21   || j == 22)) ||
//       (col == 2 && (j == 21 || j == 22)) ||
//       (col == 3 && (j == 20 || j == 22)) ||
//       (col == 4 && (j == 20 || j == 21)) ||
//       (col == 5 && (j == 20 || j == 21 || j == 22)) ||

//       /* T */
//       (col >= 2 && col <= 5 && (j == 25 || j == 26 || j == 28 || j == 29)) ||

//       /* H */
//       (col == 1 && (j == 32 || j == 33 || j == 34)) ||
//       (col == 2 && (j == 32 || j == 33 || j == 34)) ||
//       (col == 4 && (j == 32 || j == 33 || j == 34)) ||
//       (col == 5 && (j == 32 || j == 33 || j == 34)) ||

//       /* A */
//       (col == 1 && (j == 37 || j == 41 )) ||
//       (col == 2 && (j == 38 || j == 39 || j == 40)) ||
//       (col == 4 && (j == 38 || j == 39 || j == 40)) ||
//       (col == 5 && (j == 38 || j == 39 || j == 40)) ||

//       /* K */
//       (col == 1 && (j == 44 || j == 45 || j == 47)) ||
//       (col == 2 && (j == 44 || j == 46 || j == 47)) ||
//       (col == 3 && (j == 45 || j == 46 || j == 47)) || 
//       (col == 4 && (j == 44 || j == 46 || j == 47)) ||
//       (col == 5 && (j == 44 || j == 45 || j == 47)) ||

//       /* U */
//       (col == 1 && (j == 50 || j == 51 || j == 52 ))||
//       (col == 2 && (j == 50 || j == 51 || j == 52 ))||
//       (col == 3 && (j == 50 || j == 51 || j == 52 ))||
//       (col == 4 && (j == 50 || j == 51 || j == 52 ))||
//       (col == 5 && (j == 49 || j == 53))||

//       /* R */
//       (col == 1 && ((j == 59 || j == 58 || j == 52 )))||
//       (col == 2 && ((j == 56 || j == 58 || j == 59 )))||
//       (col == 3 && ((j == 58 || j == 57 || j == 59 )))||
//       (col == 4 && ((j == 56 || j == 58 || j == 59 )))||
//       (col == 5 && ((j == 56 || j == 57 || j == 59 )))) 
//       {

//       star += "  ";
//     } else {
//       star += "* ";
//     }
//     j++;
//   }

//   console.log(star);
//   col++;
// }


// ==========LEAP YEAR PRIN========== 

// const prompt = require("prompt-sync")();
// let y = Number(prompt("Enter first number: ")); 

// let y =2000
// if(y % 400 == 0){
//     console.log( y, "is leap year")
// }else if (y % 4 == 0 && y % 100 !==0){
//     console.log(y,"is leap year")
// }else{
//     console.log(y,"is not a leap year ")
// }
 
// ============= PRINT REVERSH NUMBER ==============

// let n = 12345;
// let rev = 0;
//  while ( n > 0 ){
//     let d = n % 10;
//     rev = (rev * 10) + d;
//     n  =  Math.floor(n / 10);

//  } 
//  console.log(rev);

// let arr = [10, 20, 30, 40 ];
// for (let i = 0; i <= 3; i++ ){
//     console.log(arr[i])
// }


   
// number = 1234
// rev = 0
// while ( number > 0 ){
//     digit = number % 10
//     rev = (rev * 10) + digit
//     number = Math.floor(number / 10)
// }
// console.log(rev)

// let str = "aman";
// let rev = "";
// let i = str.length - 1;
// while ( i >= 0 ){
//     rev += str[i];
//     i--;
// }
// console.log(rev);

 

// ......................................................................................
// let sum = 0;

// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
// }

// console.log("Sum:", sum);


//============= array in reverse order ============

// let L = [5, 4, 9, 2, 1, 0];

// for (let i = 5; i >= 0; i--) {
//     console.log(L[i]);
// }

// ============ PRINT MULTIPLICATION TABLE ============

// const prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number: "));

// for (let i = 1; i <= 10; i++) {
//     let result = n * i;
//     console.log(n + " x " + i + " = " + result);
// }

// ============ PRINT MULTIPLICATION TABLE IN REVERSE ORDER ============

// const prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number: "));

// for (let i = 10; i >= 1; i--) {
//     let result = n * i;
//     console.log(n + " x " + i + " = " + result);
// }

// ============ PRINT FACTORIAL OF A NUMBER ============

// const prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number: "));

// let factorial = 1;

// for (let i = 1; i <= n; i++) {
//     factorial *= i;
// }

// console.log("Factorial of " + n + " is " + factorial);   

// ============ FIND A NUMBER IN AN ARRAY ============

// let arr = [10, 20, 30, 40, 50];
// const prompt = require("prompt-sync")();
// let num = prompt("Enter number:");

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//         console.log(num, "is Found");
//         break;
//     }
// }

// ============ FIND A LARGEST NUMBER IN AN ARRAY ============

// let arr = [10, 20, 30, 40, 50];
// let largest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i];
//     }
// }

// console.log("Largest number is:", largest);

// // ============ FIND A SMALLEST NUMBER IN AN ARRAY ============

// let arr = [10, 20, 5, 40, 50];
// let smallest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//         smallest = arr[i];
//     }
// }

// console.log("Smallest number is:", smallest);

// ============ PRINT ALL EVEN NUMBERS IN AN ARRAY ============

// let arr = [10, 15, 20, 25, 30, 35, 40];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
        
//         console.log("Even numbers in the array:", arr[i]);
//     }
// }    

// ============ PRINT ALL ODD NUMBERS IN AN ARRAY ============

// let arr = [1, 2, 3, 4, 5, 6, 7];

// const prompt = require("prompt-sync")();
// let num = prompt("Enter number:");

// let found = false;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == num) {
//         found = true;
//         break;
//     }
// }

// if (found) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }


// ============ CALCULATE THE AVERAGE OF NUMBERS IN AN ARRAY ============

// let arr = [10, 20, 30, 40, 50];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// let average = sum / arr.length;

// console.log("Average is:", average); 

// ============ COUNT THE NUMBER OF EVEN AND ODD NUMBERS IN AN ARRAY ============

// let arr = [10, 15, 20, 25, 30, 35, 40];
// let evenCount = 0;
// let oddCount = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         evenCount++;
//     } else {
//         oddCount++;
//     }
// }

// console.log("Even numbers count:", evenCount);
// console.log("Odd numbers count:", oddCount);

// ============ CALCULATE THE SUM OF ALL ELEMENTS IN AN ARRAY ============

// let arr = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log("Sum is:", sum);


// print last 'i' elements of an array 

// const prompt = require("prompt-sync")();
// let i = prompt("Enter the number of elements to print from the end: ");
// let arr = [10, 12, 34, 11, 4, 5, 1];
// let result = [];

// for (let j = arr.length - i; j < arr.length; j++) {
//     result.push(arr[j]);
// }

// console.log("Last", i, "elements are:", result);



//                                  ===========================================
//                                  Array Programming – Questions Only (1 to 40)  
//                                  ===========================================

// (Array No 1)
// Write a program to print only odd numbers from the given array using a while loop.
// L = {23, 45, 32, 25, 46, 33, 71, 90}
// ......................................................................................

// const arr = [23, 45, 32, 25, 46, 33, 71, 90];
// let odd = [];
// let even = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         even.push(arr[i]);
//     } else {
//         odd.push(arr[i]);
//     }
// }

// console.log("Odd:", even);
// console.log("Even:", odd);


// (Array No 2)
// Write a program to create an array of natural numbers till 20 and print it.
// ................................................................................

//  let arr = []
//  for(let i = 0; i < 10; i++){
//      arr[i] = i + 1;
//  }   
//  console.log(arr);


// (Array No3)
// Write a program to input 5 names from the user and print them.
// ................................................................................

// let names = [];

// for (let i = 0; i < 5; i++) {
//      const prompt = require("prompt-sync")();
//      names[i] = prompt("Enter name:");
// }

// for (let i = 0; i < 5; i++) {
//     console.log("name",names[i]);
// }


// (Array No 4)
// Given an array and its size, print the array in reverse order.
// L = {5, 4, 9, 2, 1, 0}

// let arr = [];
//  const prompt = require("prompt-sync")();
// let n = Number(prompt("Enter array length"));


// for (let i = 0; i < n; i++) {
//      const prompt = require("prompt-sync")();
//     arr[i] = Number(prompt("Enter element "));
// }

// let start = 0;
// let end = arr.length - 1;

// while (start < end) {
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;

//     start++;
//     end--;
// }

// console.log("Reversed Array:", arr);


// .....................................................................................................................


// (Array No 5)
// Given an array [1, 2, 3, 4, 5, 6, 7], take a number from the user and check whether it exists in the array or not.
// .....................................................................................................................

// let arr = [1, 2, 3, 4, 5, 6, 7, 100];

// const prompt = require("prompt-sync")();
// let num = Number(prompt("Enter number: "));

// let colect  = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//         colect += arr[i];
        
//     }
// }

// if (colect === num) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }


// (Array No 6)
// Write a program to create an array of 7 numbers from the user and print "Yes" if the array consists of consecutive numbers, otherwise print "No".
// .....................................................................................................................

//  const prompt = require("prompt-sync")();

// let n = prompt("Kitne numbers: ");
// let arr = [];

// for (let i = 0; i < n; i++) {
//     arr[i] = Number(prompt("Number dalo: "));
// }
 
// arr.sort((a, b) => a - b);

// let flag = 1;

// for (let i = 1; i < n; i++) {
//     if (arr[i] != arr[i - 1] + 1) {
//         flag = 0;
//         break;
//     }
// }

// if (flag == 1)
//     console.log("Yes");
// else
//     console.log("No");

// (Array No 7)
// Make a flowchart to find the sum and average of elements in an array. Take elements as input from the user.
// .....................................................................................................................

// const prompt = require("prompt-sync")();
// let n = prompt("length number: ");
// let arr = [];

// for (let i = 0; i < n; i++) {
//     arr[i] = Number(prompt(" take Number : "));
// }

// let sum = 0;

// for (let i = 0; i < n; i++) {
//     sum += arr[i];
// }

// let average = sum / n;

// console.log("Sum:", sum);
// console.log("Average:", average);


// (Array No 8)
// Write a program to count the total occurrences of a number in the array. Input the elements from the user.
// .....................................................................................................................

 const prompt = require("prompt-sync")();
let n = prompt("enter the length number: ");
let arr = [];

for (let i = 0; i < n; i++) {
    arr[i] = Number(prompt("take Number: "));
}

let num = Number(prompt("Which number should I check? :"));

let count = 0;

for (let i = 0; i < n; i++) {
    if (arr[i] === num) {
        count++;
    }
}

console.log(num, "number count is :", count);    

/* =========================================================================*/




// (Array No 9 )
// Make a flowchart to count positive and negative elements in an array. Take elements as input from the user.
// .....................................................................................................................

// const prompt = require("prompt-sync")();
// let n = prompt("enter the length number: ");
// let arr = [];

// for (let i = 0; i < n; i++) {
//     arr[i] = Number(prompt("take Number: "));
// }

// let positiveCount = 0;
// let negativeCount = 0;

// for (let i = 0; i < n; i++) {
//     if (arr[i] >= 0) {
//         positiveCount++;
//     } else {
//         negativeCount++;
//     }
// }

// console.log("Positive numbers count:", positiveCount);
// console.log("Negative numbers count:", negativeCount);   


// (Array No 10 )
// Make a flowchart to print duplicate elements in an array. Create the array based on the size given by the user.
// .....................................................................................................................

// const prompt = require("prompt-sync")();
// let n = prompt("enter the length number: ");
// let arr = [];

// for (let i = 0; i < n; i++) {
//     arr[i] = Number(prompt("take Number: "));
// }

// let duplicates = [];

// for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//         if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
//             duplicates.push(arr[i]);
//         }
//     }
// }

// console.log("Duplicate elements are:", duplicates);

// (Array No 11)
// Create an array that stores the first n even numbers. Take n as input from the user.
// .....................................................................................................................

// const prompt = require("prompt-sync")();
// let n = Number(prompt("Enter the value of n: "));
// let evenNumbers = [];

// for (let i = 0; i < n; i++) {
//     evenNumbers[i] = i * 2;
// }

// console.log("First", n, "even numbers are:", evenNumbers);


// (Array No 12)
// Create an array that stores the first n odd numbers. Take n as input from the user.
// .....................................................................................................................

// const prompt = require("prompt-sync")();
// let n = Number(prompt("Enter the value of n: "));
// let oddNumbers = [];

// for (let i = 0; i < n; i++) {
//     oddNumbers[i] = i * 2 + 1;
// }

// console.log("First", n, "odd numbers are:", oddNumbers);


// (Array No 13)
// Create an array that stores all the factors of a number n. Take n as input from the user.
// .....................................................................................................................

// (Array No 14)
// Create an array that stores all the prime numbers up to n. Take n as input from the user.
// .....................................................................................................................
        
// const prompt = require("prompt-sync")();

// let num = Number(prompt("Enter the length: "));
// let arr = [];


// for (let i = 0; i < num; i++) {
//     arr[i] = Number(prompt("Take a number: "));
// }

// let prime = [];


// for (let i = 0; i < num; i++) {
//     let count = 0;

//     for (let j = 1; j <= arr[i]; j++) {
//         if (arr[i] % j === 0) {
//             count++;
//         }
//     }

//     if (count === 2) {
//         prime.push(arr[i]);
         
//     }
// }
//     console.log("Prime numbers:", prime);



// (Array No 15)
// Create an array that stores all perfect numbers up to n. Take n as input from the user.
// .....................................................................................................................



// (Array No 16)
// Create an array that stores all Armstrong numbers up to n. Take n as input from the user.
// .....................................................................................................................

// (Array No  17)
// Create an array that stores the factorial of the first n natural numbers. Take n as input from the user.
// .....................................................................................................................

// (Array No  18)
// Write a program to create an array of 10 numbers from the user and count the number of odd and even numbers.
// .....................................................................................................................

// (Array No  19)
// Write a program to create an array of 10 numbers from the user and find the sum of elements at even positions and odd positions separately.
// .....................................................................................................................

// (Array No 20)
// Write a program to create an array of n items where n is input from the user. Then input n names and store them in the array.
// .....................................................................................................................

// (Array No 21)
// In the flowchart of the above question, print the names entered by the user in reverse order.
// .....................................................................................................................

// (Array No 22)
// Write a program to show how to rearrange the elements in an array so that they appear in reverse order.
// .....................................................................................................................

// (Array No 23)
// Write a program to input n numbers from the user, store them in an array, and determine the maximum number.
// .....................................................................................................................

// (Array No 24)
// Write a program to store the first 100 natural numbers in an array and display them in reverse order.
// .....................................................................................................................

//  let num = 100;
//     let arr = [];   
//     for (let i = 0; i < num; i++) {
//         arr[i] = i + 1;
//     }   
//     console.log("Natural Numbers:", arr);
/* ============reverse array============*/

// let reversedArr = [];
// for (let i = num - 1; i >= 0; i--) {
//     reversedArr.push(arr[i]);
// }   
// console.log("Reversed Natural Numbers:", reversedArr);


// (Array No 25)
// In a hospital, the weights of newborn babies are recorded monthly. Store the weights in an array and find the mean, maximum, and minimum weight. Take n as input from the user.
// .....................................................................................................................

// let weights = [];

// const prompt = require("prompt-sync")();
// let n = Number(prompt("Enter number of babies: "));

// for (let i = 0; i < n; i++) {
//     weights[i] = Number(prompt("Enter weight of baby " + (i + 1) + ": "));
// }

// weights = [3.2, 2.8, 3.5, 2.9, 3.1]; // Example weights

// let sumWeights = 0;
// let maxWeight = weights[0];
// let minWeight = weights[0];

// for (let i = 0; i < n; i++) {
//     sumWeights += weights[i];
//     if (weights[i] > maxWeight) {
//         maxWeight = weights[i];
//     }
//     if (weights[i] < minWeight) {
//         minWeight = weights[i];
//     }
// }

// let meanWeight = sumWeights / n;

// console.log("Mean Weight:", meanWeight);
// console.log("Maximum Weight:", maxWeight);
// console.log("Minimum Weight:", minWeight);  

// (Array No 26)
// In a city, daily maximum and minimum temperatures are recorded for a month. Draw a flowchart to find mean maximum temperature, mean minimum temperature, highest maximum temperature, lowest minimum temperature, hottest day, and coldest day.
// .....................................................................................................................

// const prompt = require("prompt-sync")();

// // input
// let n = Number(prompt("Enter array size: "));
// let arr = [];

// for (let i = 0; i < n; i++) {
//   arr[i] = Number(prompt("Enter number: "));
// }

// // ---------- MEAN ----------
// let sum = 0;
// for (let i = 0; i < n; i++) {
//   sum = sum + arr[i];
// }
// let mean = sum / n;

// // ---------- MEDIAN ----------
// let sorted = [...arr].sort((a, b) => a - b);
// let median;

// if (n % 2 === 0) {
//   median = (sorted[n/2 - 1] + sorted[n/2]) / 2;
// } else {
//   median = sorted[Math.floor(n/2)];
// }

// // ---------- MODE ----------
// let freq = {};
// let max = 0;
// let mode = "No mode";

// for (let i = 0; i < n; i++) {
//   freq[arr[i]] = (freq[arr[i]] || 0) + 1;

//   if (freq[arr[i]] > max) {
//     max = freq[arr[i]];
//     mode = arr[i];
//   }
// }

// // ---------- OUTPUT ----------
// console.log("Array :", arr);
// console.log("Mean  :", mean);
// console.log("Median:", median);
// console.log("Mode  :", mode);


// (Array No27)
// Convert a given Roman numeral into its decimal equivalent.
// .....................................................................................................................



// (Array No 28)
// Convert a decimal number into its Roman numeral equivalent.
// .....................................................................................................................
 
// const prompt = require("prompt-sync")();
// let num = Number(prompt("Enter the number: "));

// let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// let roman  = ["M", "CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

// let result = "";

// for (let i = 0; i < values.length; i++) {
//     while (num >= values[i]) {
//         result += roman[i];
//         num -= values[i];
//     }
// }

// console.log("Roman Number:", result);


// (Array No 29)
// Take an array from the user as input and reverse it before printing.
// .....................................................................................................................



// (Array No 30)
// Take an array from the user as input and print the mean, median, and mode of the array.
// .....................................................................................................................

// (Array No 31)
// Take an array of size N and a number K from the user and print the array in a rotated manner with a gap of K.
// .....................................................................................................................

// let arr = [10, 20, 30, 40, 50];
// let k = 2;

// let r = [];

// for (let i = k; i < arr.length; i++) {
//     r.push(arr[i]);
// }

// for (let i = 0; i < k; i++) {
//     r.push(arr[i]);
// }

// console.log(r);


// (Array No 32)
// Take an array from the user as input and find duplicate elements in the array.
// .....................................................................................................................

// (Array No 33)
// Take two sorted arrays from the user and merge them into a single sorted array.
// .....................................................................................................................

// (Array No 34)
// Given an unsorted array of non-negative integers, find a contiguous subarray whose sum equals a given number S.
// .....................................................................................................................


// (Array No 35)
// Take two sorted arrays from the user and find their union and intersection.
// .....................................................................................................................

// (Array No 36)
// Take two sorted arrays of size m and n from the user and find the median of the two sorted arrays.
// .....................................................................................................................

// (Array No 37)
// Take a sorted array from the user and find a number using Binary Search.
// .....................................................................................................................

// (Array No 38)
// Learn and apply the following sorting algorithms on an unsorted array:
// Selection Sort
// Insertion Sort
// Bubble Sort
// .....................................................................................................................

// (Array No 39)
// Given an array [10, 12, 34, 11, 4, 5, 1]. Print the last ‘i’ elements of the array. ‘i’ is taken from the user.
// Example:
// If i = 3 → (4, 5, 1)
// If i = 5 → (34, 11, 4, 5, 1)arr.sort(function(a, b) {
    
// let arr = [10, 12, 34, 11, 4, 5, 1];
// const prompt = require("prompt-sync")();
// let i = Number(prompt("Enter the number of elements to print from the end: "));

// let result = [];

// for (let j = arr.length - i; j < arr.length; j++) {
//     result.push(arr[j]);
// }

// console.log("Last", i, "elements are:", result);

// (Array No 40)
// Take an array as input from the user and sort it in ascending order using the in-built sort() function.
// .....................................................................................................................









// print sorted array in ascending order (small to large)
// let arr = [10, 12, 34, 11, 4, 5, 1];
// arr.sort(function(a, b) {
//     return a - b;
// });
// console.log("Sorted array in ascending order:", arr);

// print sorted array in descending order (large to small)
