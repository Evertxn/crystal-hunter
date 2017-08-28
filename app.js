var crystal ={
    blue:
    {
      value: 0
    },
    green:
    {
      value: 0
    },
    red:
    {
      value: 0
    },
    yellow:
    {
      value: 0
    }
};

// Scores (current & target)
var currentScore = 0;
var targetScore  = 0;

// Wins & Losses
var winCount  = 0;
var lossCount = 0;


// Functions

//Function to get random numbers
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};



// Starts & Resets The Game
var startGame = function () {

    // Reset the current score
    currentScore = 0;

    // Set a new target score (between 19-120)
    targetScore = getRandom(19, 120);

    // Set different values for each of the crystals (between 1-12)
    crystal.blue.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);

    // Update html
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);



    // Console log testing
    console.log("--------------------");
    console.log("Target Score: " + targetScore);
    console.log("Blue: " +crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value + " | Yellow: " + crystal.yellow.value);
    console.log("--------------------");
};

// Responding to the Crystal Clicks
var addValues = function (crystal) {

    // change the current score
    currentScore += crystal.value;

    // update html to currentScore
    $("#yourScore").html(currentScore);

    // Call the checkWins function
    checkWin();


    // Testing console again
    console.log("Your Score: " + currentScore);

};

// Check if user wins or loses
var checkWin = function() {

    // check if the current score is larger than the target score
    if(currentScore > targetScore) {
        alert("Oops! You Lose!");
        console.log("You lose.");

        // Add to loss counter
        lossCount++;

        // Update the loss count html
        $("#lossCount").html(lossCount);

        // Restart the game :)
        startGame();
    }
    else if (currentScore == targetScore) {
        alert("Nice! You won!");
        console.log("You win.");

        // Add to win counter
        winCount++;

        // Update the loss count html
        $("#winCount").html(winCount);

        // Restart the game :)
        startGame();
    }


};






// Main processes
$("#blue").click(function(){

    addValues(crystal.blue);

});

$("#red").click(function(){

    addValues(crystal.red);

});

$("#green").click(function(){

    addValues(crystal.green);

});

$("#yellow").click(function(){

    addValues(crystal.yellow);

});

// Starts Game
startGame();