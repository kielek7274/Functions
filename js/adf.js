function pow(x, y){
    if ( y == 0 ) {
        return 1;
        }
        return x * pow(x, y - 1)
    }
    
2
    function concatenateWords() {
      return Array.from(arguments).join(' ');
    }
    

    function performOperation(num1, num2, operationCallback) {
      return operationCallback(num1, num2);
    }