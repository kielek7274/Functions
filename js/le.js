      let name = prompt("Whats the 'official' name of JavaScript?")
            if (name == "ECMAScript"){
                alert("Right!");
            } else{
                alert("You dont know? 'ECMAScript!'");
            };


            let sign = prompt("Input number");
            if (sign > 0){
                alert("1");
            } else if (sign == 0){
                alert("0");
            } else{
                alert("-1")
            }

let result = (a + b < 4) ? 'Below' : 'Over'




let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';


if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}

switch (a) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 1 );
    break;

  case 2:
  case 3:
    alert( '2,3' );
    break;
}