$(document).ready(function() {

  var roundCount = 0; // define the first round
  var totalRounds = 10; // define the total no. of rounds
  var count = 100; // define the time given 1000=10s * 6000=60s;
  var countDown;
  var colors = ["red, green, blue, yellow, orange, indigo, violet"]; // define the colors

  // #1 START GAME
$('#startGame').on('click', function() {
  $('.difficulty').remove();
  $(this).remove();
  countDownTimer(); // timer starts
  randomPosition(); // generate positions
  randomColors(); // generate colors
  checkBox(); // check if correct box is clicked
});

  // RANDOM POSITION
function randomPosition() {

$('.clickBox').each(function(){
  var mHeight = parseInt($('main').css('height'));
  var mWidth = parseInt($('main').css("width"));
  var randPosY = Math.floor((Math.random() * mHeight));
  var randPosX = Math.floor((Math.random() * mWidth));
    $(this).css({
      left: randPosX,
      top: randPosY
    });
  });
}
  // #2 GENERATE COLORS
  function randomColors() {
    // create an array from 0-6
    var ar = [];
    for (var i = 0; i<7; i++) {
      ar[i] = i;
    }
    // sort the array of 0-4 randomly
    ar.sort(function() {
      return Math.random() - 0.5;
    });
    // assign a number from the array to each box
    var shape1 = ar[0];
    var shape2 = ar[1];
    var shape3 = ar[2];
    var shape4 = ar[3];
    var shape5 = ar[4];
    var shape6 = ar[5];
    var shape7 = ar[6];

    // assign a color to each box based on the number
    if (shape1 === 0) {
      $('#shape1').css("background-color", "red");
    } else if (shape1 === 1) {
      $('#shape1').css("background-color", "green");
    } else if (shape1 === 2) {
      $('#shape1').css("background-color", "blue");
    } else if (shape1 === 3) {
      $('#shape1').css("background-color", "yellow");
    } else if (shape1 === 4) {
      $('#shape1').css("background-color", "orange");
    } else if (shape1 === 5) {
      $('#shape1').css("background-color", "indigo");
    } else if (shape1 === 6) {
      $('#shape1').css("background-color", "violet");
    }
    if (shape2 === 0) {
      $('#shape2').css("background-color", "red");
    } else if (shape2 === 1) {
      $('#shape2').css("background-color", "green");
    } else if (shape2 === 2) {
      $('#shape2').css("background-color", "blue");
    } else if (shape2 === 3) {
      $('#shape2').css("background-color", "yellow");
    } else if (shape2 === 4) {
      $('#shape2').css("background-color", "orange");
    } else if (shape2 === 5) {
      $('#shape2').css("background-color", "indigo");
    } else if (shape2 === 6) {
      $('#shape2').css("background-color", "violet");
    }
    if (shape3 === 0) {
      $('#shape3').css("background-color", "red");
    } else if (shape3 === 1) {
      $('#shape3').css("background-color", "green");
    } else if (shape3 === 2) {
      $('#shape3').css("background-color", "blue");
    } else if (shape3 === 3) {
      $('#shape3').css("background-color", "yellow");
    } else if (shape3 === 4) {
      $('#shape3').css("background-color", "orange");
    } else if (shape3 === 5) {
      $('#shape3').css("background-color", "indigo");
    } else if (shape3 === 6) {
      $('#shape3').css("background-color", "violet");
    }
    if (shape4 === 0) {
      $('#shape4').css("background-color", "red");
    } else if (shape4 === 1) {
      $('#shape4').css("background-color", "green");
    } else if (shape4 === 2) {
      $('#shape4').css("background-color", "blue");
    } else if (shape4 === 3) {
      $('#shape4').css("background-color", "yellow");
    } else if (shape4 === 4) {
      $('#shape4').css("background-color", "orange");
    } else if (shape4 === 5) {
      $('#shape4').css("background-color", "indigo");
    } else if (shape4 === 6) {
      $('#shape4').css("background-color", "violet");
    }
    if (shape5 === 0) {
      $('#shape5').css("background-color", "red");
    } else if (shape5 === 1) {
      $('#shape5').css("background-color", "green");
    } else if (shape5 === 2) {
      $('#shape5').css("background-color", "blue");
    } else if (shape5 === 3) {
      $('#shape5').css("background-color", "yellow");
    } else if (shape5 === 4) {
      $('#shape5').css("background-color", "orange");
    } else if (shape5 === 5) {
      $('#shape5').css("background-color", "indigo");
    } else if (shape5 === 6) {
      $('#shape5').css("background-color", "violet");
    }
    if (shape6 === 0) {
      $('#shape6').css("background-color", "red");
    } else if (shape6 === 1) {
      $('#shape6').css("background-color", "green");
    } else if (shape6 === 2) {
      $('#shape6').css("background-color", "blue");
    } else if (shape6 === 3) {
      $('#shape6').css("background-color", "yellow");
    } else if (shape6 === 4) {
      $('#shape6').css("background-color", "orange");
    } else if (shape6 === 5) {
      $('#shape6').css("background-color", "indigo");
    } else if (shape6 === 6) {
      $('#shape6').css("background-color", "violet");
    }
    if (shape7 === 0) {
      $('#shape7').css("background-color", "red");
    } else if (shape7 === 1) {
      $('#shape7').css("background-color", "green");
    } else if (shape7 === 2) {
      $('#shape7').css("background-color", "blue");
    } else if (shape7 === 3) {
      $('#shape7').css("background-color", "yellow");
    } else if (shape7 === 4) {
      $('#shape7').css("background-color", "orange");
    } else if (shape7 === 5) {
      $('#shape7').css("background-color", "indigo");
    } else if (shape7 === 6) {
      $('#shape7').css("background-color", "violet");
    }

    var randomNumber = Math.floor((Math.random() * 7) + 1);
    if (randomNumber === 1) {
      $('.key').css("background-color", "red");
    } else if (randomNumber === 2) {
      $('.key').css("background-color", "green");
    } else if (randomNumber === 3) {
      $('.key').css("background-color", "blue");
    } else if (randomNumber === 4) {
      $('.key').css("background-color", "yellow");
    } else if (randomNumber === 5) {
      $('.key').css("background-color", "orange");
    } else if (randomNumber === 6) {
      $('.key').css("background-color", "indigo");
    } else if (randomNumber === 7) {
      $('.key').css("background-color", "violet");
    }
  }

  // #3 CHECK IF THE CORRECT BOX IS CLICKED
  function checkBox() {
    $('.clickBox').on('click', function() {
      var color = $(this).css('background-color');
      if (($(this).css('background')) !== ($('.key').css('background'))) {
        wrongSound();
      } else if (($(this).css('background')) === ($('.key').css('background'))) {
        correctSound();
        roundCount++;
        console.log(roundCount);
        randomPosition();
        randomColors();
        console.log('randomColors');
      }
      if (roundCount === totalRounds) {
        winGame();
      }
    });
  }

  // #5 COUNTERDOWN TIMER
  function countDownTimer() {
    countDown = setInterval(counter, 100); // start countdown
  }

  function counter () {
    count--; //count down
    $('.timer').text('Score: '+ count); // show score
    if (count < 0) { // if score is less than 0
      loseGame();
    }
  }

  // WIN GAME
  function winGame() {
    clearInterval(countDown); // clear counter
    var winAudio = document.getElementById('win');
    winAudio.play();
    alert('YOU DID IT! Your score is ' + count + '.'); // win game!
    location.reload(); // reload page
  };

  // LOSE GAME
  function loseGame() {
    booSound();
    clearInterval(countDown); // clear counter
    var booAudio = document.getElementById('boo');
    booAudio.play();
    $('.timer').text('Score: 0'); // reset score to 0
    alert("YOU'RE TOO SLOW! GAME OVER!"); // lose game!
    location.reload(); // reload page
  }

  // SOUND
  function correctSound() {
    var correct = new Audio('/audio/correct.mp3');
    correct.play();
  }

  function wrongSound() {
    var wrong = new Audio('/audio/wrong.mp3');
    wrong.play();
  }

  function booSound() {
    var boo = new Audio('/audio/boo.mp3');
    boo.play();
  }

});
