alert("Welcome to 20! This is a competition to see which player gets closer to the number 20. You are going to be playing against the computer. \n You will draw numbers from 1 to 10. The computer will stop at 16. Pay attention to the screen to see what your total is, and if you need another number, press 'y'.");

alert("Now it is computer's turn");

computertotal = 0;

do {
  var computernumber = Math.floor(Math.random() * 10) + 1
  computertotal = computertotal + computernumber
  alert(`Computer drew ${computernumber} \n Computer total is ${computertotal}`);
} while (computertotal < 16)

alert(`Computer will stop at ${computertotal}`)

usertotal = 0;

do {

  var usernumber = Math.floor(Math.random() * 10) + 1

  usertotal = usertotal + usernumber

  var userquestion = prompt(`User drew ${usernumber} \n User total is ${usertotal}.\n\n Would you like to draw again? Type 'y' for yes. Any other option will stop the draw.`); 

} while ((userquestion == "y") && (usertotal < 20))

alert(`User will stop at ${usertotal}`);

