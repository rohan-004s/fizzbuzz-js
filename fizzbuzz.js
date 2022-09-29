

// Here, we create our main function.
function fizzbuzz() {

    for (let count = 1; count<=100; count++) {
        let string = "";

        if (count%3 === 0){
            string += "Fizz";
        }
        if (count%13===0){
            string="Fezz"
        }
        if (count%11 === 0){
            string+="Bong";
        }
        if (count%5 ===0 && count%11 !=0){
            string+="Buzz";
        }
        if (count%7 === 0 && count%11 !=0 && count%5 !=0){
            string+="Bang";
        }
        if (string === ""){
            string = count;
        }
        console.log(`${string}`);
    }
}

  


// Now we run the main function...
fizzbuzz();

