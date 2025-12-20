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