

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');



    for (let i = 1; i<=100; i++) {
        if (i%3 === 0){
            if (i%5 == 0){
                console.log("FizzBuzz");
            } else if (i%7===0){
                console.log(i + ": FizzBang")
            }else{
                console.log("Fizz");
            }

        } else if (i%5 === 0){
            if (i%3 == 0){
                console.log("FizzBuzz");
            }else{
                console.log("Buzz");
            }
        } else if (i%7===0){
            console.log("Bang")
        }else{
            console.log(i)
        }
    } 
}

  


// Now we run the main function...
fizzbuzz();

