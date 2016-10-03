$(document).ready(function(){

var roundCount = 0; //define the first round
var totalRounds = 5; //define the total no. of rounds
var count = 1000; //define the time given 1000=10s * 6000=60s;
var countDown;
var colors = ["red, green, blue, yellow, black"];


//start button -> activates startGame ()
$('button').on('click', function () {
  $('button').remove();
  // startGame();
  // gameMusic();
  winnerSound();
  // countDown = setInterval(counter, 10);
});

function gameMusic () {
  var music = new Audio ('/audio/tetrisMainTheme.mp3');
  music.play();
  music.loop = true;
}

function correctSound () {
  var correct = new Audio('/audio/correct.mp3');
  correct.play();
}

function winnerSound () {
  console.log('winnerSound')
  var winwin = new Audio('/audio/win.mp3');
  winwin.play();
}

function wrongSound () {
  var wrong = new Audio('/audio/wrong.mp3');
  wrong.play();
}

function startGame () {
  console.log('startGame')
  roundCounter();
}

function roundCounter() {
  console.log('roundCounter');
  roundCount++;
  console.log(roundCount);
  if (roundCount === totalRounds) {
    winnerSound();
    clearInterval(countDown);
    winGame();
  } else {
    randomBoxColors ();
    randomKeyColor ();
  }
}

function randomBoxColors () {
  console.log('randomBoxColors')
  var ar = [];
  for (var i = 0; i < 5; i++) {
      ar[i] = i;
  }
  // randomize the array
  ar.sort(function () {
    return Math.random() - 0.5;
  });

  var box1 = ar[0];
  var box2 = ar[1];
  var box3 = ar[2];
  var box4 = ar[3];
  var box5 = ar[4];

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
}

function randomKeyColor () {
console.log('randomKeyColor');

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
correctBox()
}

function correctBox () {
  console.log('correctBox');
  $('.clickBox').on('click', function () {
  var color = $(this).css("background-color");
  if (($(this).css("background")) != ($('.key').css("background"))) {
    wrongSound();
  } else {
  if (($(this).css("background")) === ($('.key').css("background")))
    correctSound();
    startGame();
  }
})
}

function winGame() {
  console.log('winGame');
  // clearInterval(countDown);
  alert('You completed it! Good on ya!' + ' Your score is ' + count);
  location.reload();
}

function counter() {
  count--;
	$('.timer').text('Score: '+ count);
  timeOut();
}

function timeOut() {
  if (count < 0) {
    $('.timer').text('Score: 0');
    alert("You are too slow! GAME OVER!");
    clearInterval(countDown);
    location.reload();
  }
}
});
