start.onclick = function() {
    start.remove()
    guess;
    gueses = 0;
    hits = 0;
    location1 = Math.floor(Math.random() * 5);
    location2 = location1 + 1;
    location3 = location2 + 1;
    isSunk == false;
    while(isSunk == false ){
        guess = prompt("Guess a number between 1 and 6")
        if (guess < 0 || guess > 6){
            alert("Please enter a valid number")
        }
        else {
            guesses = guesses + 1;
            if (guess == location1 || guess == location2 || guess == location3){
                hits = hits + 1;
                if (hits == 3){
                    isSunk = true;
                    alert("You sunk my battleship")
                    results = "You took " + guesses + " guesses to sink the battleship"
                    return results
                }
            }
        }
    }
}

alert(results);