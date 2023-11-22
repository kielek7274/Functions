
let age1 = prompt("Input age")

if (14<=age1<=90){
	console.log("age is between 14 and 90!");
};


if (14<=!age1 || age1<=!90){
console.log("age is NOT between 14 and 90");
}   else {console.log("error")};

if (14>=age1 || 90<=age1){
	console.log("age is NOT between 14 and 90");
} else {
    console.log("error");
};




            let name1 = prompt("Login")
            

            if (name1 == "Admin"){
          
            } else if (name1 == "" || name1 == null){
                alert("Cancelled!");
                exit();
            } else {;
                alert("I dont know you");
                exit();
            };
            
        let pass = prompt("Password");
            if (pass == "TheMaster") {
                alert("Welcome!");
            } else if (pass == "" || pass == null){
                alert("Cancelled!");
            } else{
                alert("Wrong password!")
            };