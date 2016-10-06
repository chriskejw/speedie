$(document).ready(function() {

  // DECLARE THE VARIABLES
  var roundCount = 0;
  var totalRounds = 20;
  var countDown;

  // SELECT DIFFICULTY
  var count = $(function() {
    $('select').change(function() {
      count = $(this).val();

      // if the value selected corresponds with the figure, change difficulty text
      if (parseInt(count) === 350) {
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
      // trigger the event
    }).change();
  });

  // START GAME AND REMOVE THE MENU
  $('#startGame').on('click', function() {
    $('.difficulty').remove();
    $(this).remove();
    // START MUSIC, TIMER, RANDOM POSITION, RANDOM COLORS, CHECK BOX
    clockSound();
    countDownTimer();
    randomPosition();
    randomColors();
    checkBox();
  });

  // RANDOM POSITION
  function randomPosition() {

    $('.clickBox').each(function() {
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

  // GENERATE RANDOM COLORS
  function randomColors() {
    // sort the 7 colors randomly
    var colorsArray = ["red", "green", "blue", "yellow", "orange", "indigo", "violet"]
    colorsArray.sort(function() {
      return Math.random() - 0.5;
    });
    // assign a color to each of the 7 shapes
    $('#shape1').css("background-color", colorsArray[0]);
    $('#shape2').css("background-color", colorsArray[1]);
    $('#shape3').css("background-color", colorsArray[2]);
    $('#shape4').css("background-color", colorsArray[3]);
    $('#shape5').css("background-color", colorsArray[4]);
    $('#shape6').css("background-color", colorsArray[5]);
    $('#shape7').css("background-color", colorsArray[6]);

    // assign a random word to the key
    var randomWord = Math.floor((Math.random() * 7));
    $('.key').text(colorsArray[randomWord]);

    // assign a random color to the key
    var randomWordColor = Math.floor((Math.random() * 7));
    $('.key').css('color', colorsArray[randomWordColor]).change('class', colorsArray[randomWordColor]);
  }

  // CHECK IF THE CORRECT BOX IS CLICKED
  function checkBox() {
    $('.clickBox').on('click', function() { // add event listener to each box
      var color = $(this).css('background-color'); // get the background color of the box
  if (($(this).css('background-color')) !== ($('.key').css('color'))) { // check if the background color matches the key
        wrongSound(); // if not a match, play wrong sound
  } else if (($(this).css('background-color')) === ($('.key').css('color'))) { // check if the background color matches the key
        correctSound(); // if match, play correct sound
        roundCount++; // plus one to round
        randomPosition(); // generate random positions again
        randomColors(); // generate random colors again
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
          window.location.href = "index.html";
        }
      }
    });
  }

  // AUDIO
  function stopClockSound() {
    clock.pause(); // pause sound
    clock.currentTime = 0; // return soundtrack to 0
  }

  function clockSound() {
    clock.play(); // play sound
  }

  function correctSound() {
    var correct = new Audio('audio/correct.mp3');
    correct.play(); // play sound
  }

  function wrongSound() {
    var wrong = new Audio('audio/wrong.mp3');
    wrong.play(); // play sound
  }
});
