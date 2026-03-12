// const n = (prompt("Enter number of subjects:"));
// let total = 0;

// for (let i = 1; i <= n; i++) {
//   let marks = parseFloat(prompt(`Enter marks for subject ${i}:`));
//   total += marks;
// }



// without grading
// let num1;
// let total=0;
// let count=0;
// document.getElementById(`btn`).onclick=function(){
//     num1= parseFloat(document.getElementById(`inpt`).value);
//     total +=num1;
//     count++;
//     document.getElementById('inpt').value = '';

//     if (count==3){
// console.log("average is " + total/3);
//     }
// }


//with grading
let num1;
let total = 0;
let count = 0;
let avg=0;
let grade='';

document.getElementById('btn').onclick = function() {
  num1 = parseFloat(document.getElementById('inpt').value);
  total += num1;
  count++;
  document.getElementById('inpt').value = '';

  if (count == 3) {
 avg = total / 3;
    // console.log("Average is " + avg);

    if (avg >= 90)     grade='a';  //console.log("Grade: A+");
    else if (avg >= 80) grade='b';            //console.log("Grade: A");
    else if (avg >= 70) grade='c';            //console.log("Grade: B");
    else if (avg >= 60)  grade='d';           //console.log("Grade: C");
    else if (avg >= 50)  grade='e';           //console.log("Grade: D");
    else                grade='f';            //console.log("Grade: F");
  }
}

document.getElementById('btn2').onclick = function(){
    console.log(avg, grade); 
    document.getElementById('p2').textContent=`Average is ${ avg}`;
    document.getElementById('p3').textContent=`Grade is ${grade}`;

}
