var seconds = 11
var intervalId;
var score = 0;

function scoreKeeper() {
        var scoreper = Math.round(score/numQues*100);
        $("#quiz").html("<div class='result'>" + "<h2>" + "Score: " + score + "</h2>" +"</div>");
        $(".result").append("<h2>" + scoreper + "%" + "</h2>");
      }


function timeLeft() {

	seconds--;
	$("#time-left").html("<h3>" + seconds + "</h3>");
	if (seconds === 0) {
		alert("Time uP!!");
		clearInterval(intervalId);
    scoreKeeper();
	}

}

timeLeft();

function timer() {
      intervalId = setInterval(timeLeft, 1000);
    }

timer();




var numQues = 5;
var numChoi = 3;
var answers = new Array(5);
    answers[0] = "doesn't like";
    answers[1] = "don't come";
    answers[2] = "come";
    answers[3] = "don't";
    answers[4] = "doesn't make";

    
    function getScore(from) {
      var currElt;
      var currSelection;
      for (var i = 0; i<numQues; i++) {
        currElt = i*numChoi;
        answered=false;
        for (var j = 0; j<numChoi; j++) {
          currSelection = form.elements[currElt + j];
          if (currSelection.checked) {
            answered=true;
            if (currSelection.value == answers[i]) {
              score++;
              break;
            }
          }
        }
        if (answered ===false) {
          alert("Do answer all the questions, Please");
          return false;
      }
    }
  }


    


// $("getScore").on("click", scoreper);
// $("clear").on("click", returnScore);