
 var result; 
 for(var i = 1; i < 101; i++ ) {
     result= '';
    if ( [i]%2 == 0)  {
     result+="Fizz<hr>";
    }
    if( [i]%3 == 0 ) {
    result+="Buzz<hr>";
    }
   
    if([i]%5 == 0) {
     result+="FizzBuzz<hr>";
    }
    else {
        result+=[i]+ "<hr>";
        
    }
    document.write(result);

   }
