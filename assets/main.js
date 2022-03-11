// 1. Write a function that returns the sum of any two integers passed as arguments
function addTwoNumbers(x,y){
  let total = x+y;
  console.log(total);
  return total;
};

addTwoNumbers(123456789,9876543210);


// 2. Write a function that returns the difference of the second argument from the first
function subtractTwoNumbers(x,y){
  let total = x-y;
  console.log(total);
  return total;
};

subtractTwoNumbers(10,5);
subtractTwoNumbers(3,4);

// 3. Write a function that allows a user to enter their name as an
// argument and returns a statement greeting them like, `Hello, Homer!`
function greeting(userName) {
  const userGreeting = `Hello, ${userName}.`;
  console.log(userGreeting);
  return userGreeting;
};

greeting(`James`);

// 4. Write a function that returns the product of any argument
// multiplied by itself.
function multiplyOneNumber(x) {
  let total = x * x;
  console.log(total);
  return total;
};

multiplyOneNumber(591);


// 5. Write a  function set equal to a variable called `volume`
// that returns a value of the dimensions of a box (l*w*h) and THEN
// invoke that function in a console.log() with a message of the box's
// dimensions
// ^ 🔥 This is s-tier/big-brain work and not for the faint of heart 🔥

function dimensions(l,w,h) {
  const volume = `The dimensions of the box are ${l*w*h} cubic meters`;
  console.log(volume);
  return volume;
};

dimensions(1,2,3);



function volume (l,w,h) {
  let total = l*w*h;
  console.log (total);
  return total;
};


console.log (`The dimensions of the box are ${volume(1,2,3)} cubic meters.`)
