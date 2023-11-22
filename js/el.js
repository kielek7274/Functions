
for (let i = 2; i <=10; i += 2){
	console.log(i);
}



let num;
do {
number = prompt("Enter number greater than 100:","");
if (num !== null && number <=100) {
	alert("Please enter a number greater than 100.");
}
} while (number !== null && number <=100);


function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function printPrimesUpToN() {
    let n = prompt("Enter a number (n): ");
    n = parseInt(n);

    if (isNaN(n) || n < 2) {
        console.log("Please enter a valid number greater than or equal to 2.");
        return;
    }

    console.log(`Prime numbers up to ${n}:`);
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}


printPrimesUpToN();