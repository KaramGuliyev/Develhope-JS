// Create two boolean variables called isSunnyDay and isHomeworkCompleted. 
// Assign them a value. Use the Ternary Operator in order to print Jesse can go out to play, 
// if both variables are true. If one of them or both are false print Jesse stays home.

// It was already created by using IF and Else if statements, so I just duplicated.

var isSunnyDay = true;
var isHomeworkCompleted = false;

function strictParents3000() {
    if (isSunnyDay && isHomeworkCompleted) {
        console.log("You can go to play with your friends but be at home before 6");
    }
    else if (isSunnyDay && !isHomeworkCompleted ) {
        console.log("You will fail if you continue like this!");
    }
    else if ( !isSunnyDay && !isHomeworkCompleted) {
        console.log("You should stay at home and do your homework! Look at this weather what you want to do? Be a sick and skip school?");
    }
    else if (!isSunnyDay && isHomeworkCompleted) {
        console.log("Its raining, do your next weeks homework.");
    }
}

strictParents3000();