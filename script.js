document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.

  let button = document.querySelector(".submit");
  let displayResult = document.querySelector(".displayResult");
  let q1 = document.querySelector(".q1");
  let q2 = document.querySelector(".q2");
  let q3 = document.querySelector(".q3");

  
  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.
  let imgSrc;
  let character;
  let q1Score;
  let q2Score;
  let q3Score;



  button.onclick = function() {

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question.
let q1Answer = q1.value.toLowerCase();
let q2Answer = q2.value.toLowerCase();
let q3Answer = q3.value.toLowerCase();



    // task 7: create a conditional statement for the responses to Question 1 based on the user input.
if(q1Answer==="yes"){
 q1Score === 3  
}else{
  q1Score === 1
} 



    // task 8: create a conditional statement for the responses to Question 2 based on the user input.
if(q2Answer==="power"){
  q2Score === 3
}else if(q2Answer==="knowledge"){
  q2Score === 1 
}else{
  q2Score === 0
}
    // task 9: create a conditional statement for the responses to Question 3 based on the user input.
if(q3Answer==="yes"){
  q3Score === 1
}else if(q3Answer==="no"){
  q3Score === 2
}else{
  q3Score === 3
}


    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.
let totalScore = q1Score + q2Score + q3Score



    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.
if (totalScore===9){
  body.innerHTML="You are Ned Stark"
}


  };
}