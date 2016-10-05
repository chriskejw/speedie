$(document).ready(function() {
  //test comment
  // DECLARE THE VARIABLES
  var roundCount = 0; // define the first round
  var totalRounds = 20; // define the total no. of rounds
  var countDown;

  // SELECT DIFFICULTY
  var count = $(function() { // define the time given
    $('select').change(function() { // perform change based on selection from the dropdown
      count = $(this).val(); // get the value from the selection

      if (parseInt(count) === 350) { // if the value selected corresponds with the figure, change difficulty text
        $('.diffDisplay').text('very easy');
      } else if (parseInt(count) === 300) {
        $('.diffDisplay').text('easy');
      } else if (parseInt(count) === 250) {
        $('.diffDisplay').text('medium');
      } else if (parseInt(count) === 200) {
        $('.diffDisplay').text('hard');
      } else if (parseInt(count) === 150) {
        $('.diffDisplay').text('very hard');
      }
    }).change(); // trigger the event
  });

  // START GAME
  $('#startGame').on('click', function() { //start the game when start game button is clicked
    $('.difficulty').remove(); // remove the difficulty menu when start game button is clicked
    $(this).remove(); // remove the start button when clicked
    clockSound(); // start ticking music
    countDownTimer(); // start count down timer
    randomPosition(); // generate random positions
    randomColors(); // generate random colors
    // randomWord(); // generate random word
    checkBox(); // check if correct box is clicked
  });

  // RANDOM POSITION
  function randomPosition() {

    $('.clickBox').each(function() { // all boxes are selected
      var mHeight = parseInt($('main').css('height')); // get height of the container
      var mWidth = parseInt($('main').css("width")); // get width of the container
      var randPosY = Math.floor((Math.random() * mHeight)); // generate random number based on height
      var randPosX = Math.floor((Math.random() * mWidth)); // generate random number based on width
      $(this).css({ // apply the random numbers to the box top and left position (absolute)
        left: randPosX,
        top: randPosY
      });
    });
  }
  //function searchcolor (color string)

  // RANDOM WORD
  // function randomWord() {
  //   var wordsArray = ['red', 'green', 'blue', 'yellow', 'orange', 'violet', 'indigo'];
  //   var randomWordNumber = Math.floor(Math.random() * 7); // create a random number from 0-6
  //   wordsArray.sort(function() { // sort the array of 0-6 randomly
  //     return Math.random() - 0.5;
  //   });
  //
  //   $('.key').text(wordsArray[randomWordNumber]) // change text
  //
  //       if (($('.key').text(wordsArray[randomWordNumber])) === "red") {
  //         $('.key').css('color', 'rgb(255, 0, 0)');
  //       } else if (($('.key').text(wordsArray[randomWordNumber])) === "green") {
  //         $('.key').css('color', 'rgb(0, 128, 0)');
  //       } else if (($('.key').text(wordsArray[randomWordNumber])) === "blue") {
  //         $('.key').css('color', 'rgb(0, 0, 255)');
  //       } else if (($('.key').text(wordsArray[randomWordNumber])) === "yellow") {
  //         $('.key').css('color', 'rgb(255, 255, 0)');
  //       } else if (($('.key').text(wordsArray[randomWordNumber])) === "orange") {
  //         $('.key').css('color', 'rgb(255, 165, 0)');
  //       } else if (($('.key').text(wordsArray[randomWordNumber])) === "indigo") {
  //         $('.key').css('color', 'rgb(75, 0, 130)');
  //       } else if (($('.key').text(wordsArray[randomWordNumber])) === "violet") {
  //         $('.key').css('color', 'rgb(238, 130, 238)');
  //       }
  //     console.log($('.key').css('color'));
  // }

  // GENERATE COLORS
  function randomColors() {
    // create an array from 0-6
    var numberArray = [];
    for (var i = 0; i < 7; i++) {
      numberArray[i] = i;
    }
    // sort the array of 0-6 randomly
    numberArray.sort(function() {
      return Math.random() - 0.5;
    });
    // assign a number from the array to each box
    var shape1 = numberArray[0];
    var shape2 = numberArray[1];
    var shape3 = numberArray[2];
    var shape4 = numberArray[3];
    var shape5 = numberArray[4];
    var shape6 = numberArray[5];
    var shape7 = numberArray[6];

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

  // CHECK IF THE CORRECT BOX IS CLICKED
  function checkBox() {
    $('.clickBox').on('click', function() { // add event listener to each box
      var color = $(this).css('background-color'); // get the background color of the box
      if (($(this).css('background')) !== ($('.key').css('background'))) { // check if the background color matches the key
      // if (($(this).css('background-color')) !== ($('.key').val())) {
        wrongSound(); // if not a match, play wrong sound
          } else if (($(this).css('background')) === ($('.key').css('background'))) { // check if the background color matches the key
      // } else if (($(this).css('background-color')) === ($('.key').val())) {
        correctSound(); // if match, play correct sound
        roundCount++; // plus one to round
        randomPosition(); // generate random positions again
        randomColors(); // generate random colors again
        // randomWord(); // generate random word again
      }
      if (roundCount === totalRounds) { // if the round count reaches the total rounds, win game
        winGame();
      }
    });
  }

  // COUNTERDOWN TIMER
  function countDownTimer() {
    countDown = setInterval(counter, 100); // start countdown
  }

  function counter() {
    count--; // count down
    $('.timer').text('Score: ' + count); // update and show score
    if (count < 0) { // if score is less than 0, lose game
      loseGame();
    }
  }

  // WIN GAME
  function winGame() {
    clearInterval(countDown); // clear counter
    var winAudio = document.getElementById('win'); // play win game sound
    winAudio.play();
    stopClockSound();
    // bootbox.alert('Bravo! You did it. Your score is ' + count + '.', function() {
    bootbox.alert({ //show win message and score
      size: 'big',
      title: 'Bravo! You did it! Well done!',
      message: 'Your score is ' + count + '.',
      callback: function() {
        location.reload()
      }
    })
  };

  // LOSE GAME
  function loseGame() {
    clearInterval(countDown); // clear counter
    $('.timer').text('Score: 0'); // reset score to 0
    var booAudio = document.getElementById('boo'); // play lose game sound
    booAudio.play();
    stopClockSound();
    bootbox.confirm({ // show lose game message and give an option to restart or go back home
      message: 'Boo! You are too slow! ',
      buttons: {
        confirm: {
          label: 'Retry',
          className: 'btn-success'
        },
        cancel: {
          label: 'Give Up',
          className: 'btn-danger'
        }
      },
      callback: function(result) {
        if (result === true) {
          location.reload();
        } else {
          window.location.href = "homePage.html";
        }
      }
    });
  }

  // AUDIO
  function stopClockSound() {
    clock.pause();
    clock.currentTime = 0;
}

  function clockSound() {
    // var clock = new Audio('/audio/clock.mp3');
    clock.play(); // play sound
  }

  function correctSound() {
    var correct = new Audio('/audio/correct.mp3');
    correct.play(); // play sound
  }

  function wrongSound() {
    var wrong = new Audio('/audio/wrong.mp3');
    wrong.play(); // play sound
  }
});
