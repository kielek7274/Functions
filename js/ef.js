
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}



function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}


function min1(a, b) {
    return Math.min(a, b);
}


const min = function(a, b) {
    return Math.min(a, b);
}


const min2 = (a, b) => Math.min2(a, b);

            function pow(x, n) {
                return Math.pow(x, n);
            }
    
            function calculatePower() {
                var base = parseFloat(prompt("Enter the base (x):"));
                var exponent = parseInt(prompt("Enter the exponent (n):"));
    
                if (!isNaN(base) && !isNaN(exponent)) {
                    var result = pow(base, exponent);
                    alert("Result: " + result);
                } else {
                    alert("Please enter valid numbers.");
                }
            }
	

const pow1 = (x, n) => Math.pow1(x, n);



const pow2 = (x, n) => x ** n;

const ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
};

ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
);

let age = prompt("Input age")
let amountPerDay = prompt("Input amount per day")
function calculateSupply(age, amountPerDay) {
  var maxAge = 100;
  var totalNeeded = (amountPerDay * 365) * (maxAge - age);
  var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
  console.log(message);
}

calculateSupply(age, 26);
calculateSupply(age, 6.5);
calculateSupply(age, 565);