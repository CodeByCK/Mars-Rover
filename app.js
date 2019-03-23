var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};
// 1. Assigned direction to Rover through "Objects"
// 2. Assigned the position of the rover. 

// ======================

// ======================

// If the rover is facing N turning left -> W -> S -> E -> Back to N 
function turnLeft(rover) {
  console.log("turnLeft was called!");

  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
    case "E":
      rover.direction = "N";
      break;
  }
  console.log(rover);
}

// If the rover is facing N turning right -> E -> S -> W Back to N
function turnRight(rover) {
  console.log("turnRight was called!");

  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
  }
  console.log(rover);
}

function moveForward(rover) {
  console.log("moveForward was called");

  switch (rover.direction) {
    case "N":
      rover.y--;
      break;
    case "E":
      rover.x++;
      break;
    case "S":
      rover.y++;
      break;
    case "W":
      rover.x--;
  }
  console.log(rover.x)
  console.log(rover.y)
}

function moveBackward(rover) {
  console.log("moveBackward was called");

  switch (rover.direction) {
    case "N":
      rover.y++;
      break;
    case "E":
      rover.x--;
      break;
    case "S":
      rover.y--;
      break;
    case "W":
      rover.x++;
  }
  console.log(rover.x)
  console.log(rover.y)
}


//Commands 

function commands(command) {
  for (i = 0; i < command.length; i++) {

    switch (command[i]) {
      case "f":
        moveForward(rover);
        console.log("Your rover has moved forward");
        rover.travelLog.push(rover.x + " " + rover.y);
        break;
      case "b":
        moveBackward(rover);
        console.log("Your rover has moved backwards");
        rover.travelLog.push(rover.x + " " + rover.y);
        break;
      case "r":
        turnRight(rover);
        console.log("Your rover has turned right");
        rover.travelLog.push(rover.x + " " + rover.y);
        break;
      case "l":
        turnLeft(rover);
        console.log("Your rover has turned left");
        rover.travelLog.push(rover.x + " " + rover.y);
    }

    if (rover.x < 0) {
      console.log("You've Reached the border");
      rover.x = 0;
    } else if
      (rover.x > 10) {
      console.log("You've Reached the border");
      rover.x = 10;
    } else if
      (rover.y < 0) {
      console.log("You've Reached the border");
      rover.y = 0;
    } else if
      (rover.y > 10) {
      console.log("You've Reached the border");
      rover.y = 10;
    } else
      rover.travelLog.push(rover.x + " " + rover.y);
  }
}




