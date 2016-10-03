$(document).ready(function() {

  var roundCount = 0; // define the first round
  var totalRounds = 3; // define the total no. of rounds
  var count = 100; // define the time given 1000=10s * 6000=60s;
  var countDown;
  var colors = ["red, green, blue, yellow, black"]; // define the colors


  // #1 START GAME
  $('button').on('click', function() {
    $(this).remove(); // removes start button once it is clicked
    countDownTimer(); // timer starts
    gameMusic(); // start music
    randomColors(); // generate colors
    checkBox(); // check if correct box is clicked
    // winnerSound();
  });

  // #2 GENERATE COLORS
  function randomColors() {
    // create an array from 0-4
    var ar = [];
    for (var i = 0; i<5; i++) {
      ar[i] = i;
    }
    // sort the array of 0-4 randomly
    ar.sort(function() {
      return Math.random() - 0.5;
    });
    // assign a number from the array to each box
    var box1 = ar[0];
    var box2 = ar[1];
    var box3 = ar[2];
    var box4 = ar[3];
    var box5 = ar[4];
    // assign a color to each box based on the number
    if (box1 === 0) {
      $('main div #box1').css("background-color", "red");
    } else if (box1 === 1) {
      $('main div #box1').css("background-color", "green");
    } else if (box1 === 2) {
      $('main div #box1').css("background-color", "blue");
    } else if (box1 === 3) {
      $('main div #box1').css("background-color", "yellow");
    } else if (box1 === 4) {
      $('main div #box1').css("background-color", "black");
    }
    if (box2 === 0) {
      $('main div #box2').css("background-color", "red");
    } else if (box2 === 1) {
      $('main div #box2').css("background-color", "green");
    } else if (box2 === 2) {
      $('main div #box2').css("background-color", "blue");
    } else if (box2 === 3) {
      $('main div #box2').css("background-color", "yellow");
    } else if (box2 === 4) {
      $('main div #box2').css("background-color", "black");
    }
    if (box3 === 0) {
      $('main div #box3').css("background-color", "red");
    } else if (box3 === 1) {
      $('main div #box3').css("background-color", "green");
    } else if (box3 === 2) {
      $('main div #box3').css("background-color", "blue");
    } else if (box3 === 3) {
      $('main div #box3').css("background-color", "yellow");
    } else if (box3 === 4) {
      $('main div #box3').css("background-color", "black");
    }
    if (box4 === 0) {
      $('main div #box4').css("background-color", "red");
    } else if (box4 === 1) {
      $('main div #box4').css("background-color", "green");
    } else if (box4 === 2) {
      $('main div #box4').css("background-color", "blue");
    } else if (box4 === 3) {
      $('main div #box4').css("background-color", "yellow");
    } else if (box4 === 4) {
      $('main div #box4').css("background-color", "black");
    }
    if (box5 === 0) {
      $('main div #box5').css("background-color", "red");
    } else if (box5 === 1) {
      $('main div #box5').css("background-color", "green");
    } else if (box5 === 2) {
      $('main div #box5').css("background-color", "blue");
    } else if (box5 === 3) {
      $('main div #box5').css("background-color", "yellow");
    } else if (box5 === 4) {
      $('main div #box5').css("background-color", "black");
    }

    var randomNumber = Math.floor((Math.random() * 5) + 1);
    if (randomNumber === 1) {
      $('.key').css("background-color", "red");
    } else if (randomNumber === 2) {
      $('.key').css("background-color", "green");
    } else if (randomNumber === 3) {
      $('.key').css("background-color", "blue");
    } else if (randomNumber === 4) {
      $('.key').css("background-color", "yellow");
    } else if (randomNumber === 5) {
      $('.key').css("background-color", "black");
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
        randomColors();
        console.log('randomColors');
      }
      if (roundCount === totalRounds) {
        winGame();
      }
    });
  }

  // #4 WIN GAME MESSAGE
  function winGame() {
    clearInterval(countDown);
    var winAudio = document.getElementById('win');
    winAudio.play();
    alert('You completed it! Good on ya!' + ' Your score is ' + count + '.');
    location.reload();
  };

  // #5 COUNTERDOWN TIMER
  function countDownTimer() {
    countDown = setInterval(counter, 100); // start countdown
  }

  function counter () {
    count--; //count down
    $('.timer').text('Score: '+ count); // show score
    if (count < 0) { // if score is less than 0
      $('.timer').text('Score: 0'); // reset score to 0
      clearInterval(countDown); // clear counter
      loseGame();
    }
  }

  // LOSE GAME MESSAGE
  function loseGame() {
    alert("YOU'RE TOO SLOW! GAME OVER!"); // game over!
    location.reload(); // reload page
  }

  // MUSIC & SOUND
  function gameMusic() {
    var music = new Audio ('/audio/tetrisMainTheme.mp3');
    music.play();
    music.loop = true;
  }

  function correctSound() {
    var correct = new Audio('/audio/correct.mp3');
    correct.play();
  }

  function wrongSound() {
    var wrong = new Audio('/audio/wrong.mp3');
    wrong.play();
  }

});
