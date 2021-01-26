// chapter 31 - 34
// task 1
// var rightNow = new Date();
// document.write(rightNow);
// task 2
// var month;
// switch (new Date().getMonth()) {
//   case 0:
//     month = "January";
//     break;
//   case 1:
//     month = "Febuary";
//     break;
//   case 2:
//     month = "March";
//     break;
//   case 3:
//     month = "Aril";
//     break;
//   case 4:
//     month = "May";
//     break;
//   case 5:
//     month = "June";
//     break;
//   case 6:
//     month = "July";
//     break;
//   case 7:
//     month = "August";
//     break;
//   case 8:
//     month = "September";
//     break;
//   case 9:
//     month = "October";
//     break;
//   case 10:
//     month = "November";
//     break;
//   case 11:
//     month = "December";
// }
// document.write("Current Month : " + month);
// task 3
// var day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "SUN";
//     break;
//   case 1:
//     day = "MON";
//     break;
//   case 2:
//     day = "TUE";
//     break;
//   case 3:
//     day = "WED";
//     break;
//   case 4:
//     day = "THU";
//     break;
//   case 5:
//     day = "FRI";
//     break;
//   case 6:
//     day = "SAT";
//     break;
// }
// document.write("Today is " + day);
// task 4
// var sat = new Date().getDay();
// if (sat == 0 || sat == 6) {
//   alert("It's Fun Day");
// } else {
//   alert("It's Not A Fun Day");
// }
// task 5
// var date = prompt("Enter Date Of Month", "Enter Date");
// if (date <= 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }
// task 6
// document.write(
//   "Current Date : " +
//     new Date() +
//     "<br>" +
//     "Elapsed miliseconds since January 1, 1970 : " +
//     new Date().getTime() +
//     "<br>" +
//     "Elapsed minutes since January 1, 1970 : " +
//     new Date().getTime() / 60000
// );
// task 7
// var time = new Date().getHours();
// console.log(time);
// if (time > 12 && time < 0) {
//   alert("it's A.M");
// } else {
//   alert("It's P.M");
// }
// task 8
// var d = new Date(2020, 11, 31);
// document.write("Later Date : " + d);
// task 9
// var d = new Date(2015, 7, 18).getTime();
// var e = new Date().getTime();
// var f = e - d;
// var g = Math.round(f / (1000 * 60 * 60 * 24));
// document.write(g + " days have passed since 1<sup>st</sup> Ramadan, 2015");
// task 10
// var d = new Date();
// var e = d.getTime();
// var f = new Date(2015, 0, 1).getTime();
// var g = e - f;
// var h = g / 1000;
// document.write(
//   "On refrence Date " +
//     d +
//     ", " +
//     h +
//     "seconds had passed since beginning of 2015"
// );
// task 11
// task 12
// task 13
// var age = +prompt("Enter Your Age", "Enter Age");
// var d = new Date().getFullYear();
// var e = d - age;
// document.write("Your age is : " + age + "<br>" + "Your birh Year is : " + e);

// chapter 35-38
// task 1
// var d = new Date();
// document.write(d);
// task 2
// var firname = prompt("Enter Your First Name", "Enter Name");
// var lasname = prompt("Enter Your Last Name", "Enter Name");
// function add() {
//   var i = firname + " " + lasname;
//   alert("Good Morning " + i);
// }
// add();
// task 3
// var num1 = +prompt("Enter First Number", "Enter Number");
// var num2 = +prompt("Enter Second Number", "Enter Number");
// function foo() {
//   var foo = num1 + num2;
//   alert(foo);
// }
// foo();
// task 4
// var num1 = +prompt("Enter First Number", "Enter Number");
// var opr = prompt("Enter Operator", "Enter Operator");
// var num2 = +prompt("Enter Second Number", "Enter Number");
// if (opr === "+") {
//   alert(num1 + num2);
// } else if (opr === "-") {
//   alert(num1 - num2);
// } else if (opr === "*") {
//   alert(num1 * num2);
// } else if (opr === "/") {
//   alert(num1 / num2);
// } else if (opr === "%") {
//   alert((num2 / num1) * 100 + "%");
// } else {
//   alert("Wrong Operator");
// }
// task 5
// var arg = +prompt("Enter Any Number", "Enter Number");
// var squ = arg ** 2;
// alert(squ);
// task 6
// var fact = +prompt("Enter Any Number", "Enter Number");
// function factorial(x) {
//   if (x === 0) {
//     return 1;
//   }
//   return x * factorial(x - 1);
// }
// alert(factorial(fact));
// task 7
// task 8
// task 9
// var width = +prompt("Enter Width");
// var height = +prompt("Enter height");
// var A = width * height;
// alert(A);
// task 10
// var word = prompt("Enter Any Word", "Enter Word");
// var check = "";
// for (var i = word.length - 1; i >= 0; i--) {
//   check += word[i];
// }
// if (check === word) {
//   alert(word + " is palindrome word");
// } else {
//   alert(word + " is not a palindrome word");
// }
// task 11
// task 12

// chapter 38-42
// task 1
// function power(a, b) {
//   var result = a ** b;
//   alert(result);
// }
// power(prompt("Value of a"), prompt("Value of b"));
// task 2

// task 3
// var a = +prompt("Enter the value of first side of triangle");
// var b = +prompt("Enter the value of second side of triangle");
// var c = +prompt("Enter the value of third side of triangle");
// var s = (a + b + c) / 2;
// var area = s * (s - a) * (s - b) * (s - c);
// alert(area);
// task 4
// function marks() {
//   var sub1 = +prompt("Enter marks of first subject");
//   var sub2 = +prompt("Enter marks of second subject");
//   var sub3 = +prompt("Enter marks of third subject");
//   var total = sub1 + sub2 + sub3;
//   var ave = total / 3;
//   var per = (total * 100) / 300;
//   alert(
//     "Marks of subject 1 is " +
//       sub1 +
//       "\n" +
//       "Marks of subject 2 is " +
//       sub2 +
//       "\n" +
//       "Marks of subject 3 is " +
//       sub3 +
//       "\n" +
//       "average marks is: " +
//       ave +
//       "\n" +
//       "Your percentage is: " +
//       per
//   );
// }
// marks();
// task 5

// task 6

// task 7
