


// Method that prompts the user to rotate the smartphone if it is in a landscape mode
// if (typeof window.orientation !== 'undefined'){
//   console.log('Mobile');
//   if ((screen.orientation['angle'] === 180) || (screen.orientation['angle'] === 0 )){
//        console.log('bad');
//        document.getElementById("overlay").style.display = "block";
//        $("#overlay").delay(0).animate({"opacity":"1",}, 1300)
//        window.addEventListener("orientationchange", function() {
//          console.clear();
//          console.log('good');
//          $("#overlay p").text('Thank you!');
//          $("#overlay").delay(0).animate({"opacity":"0",}, 1500);
//          setTimeout(function() {document.getElementById("overlay").style.display = "none"}, 1500);
//        })
//   }
// } else {
//   console.log('Pc');
//   }
//
//   function off(){
//      $("#overlay").delay(0).animate({"opacity":"0",}, 1200);
//      setTimeout(function() {document.getElementById("overlay").style.display = "none"}, 1200);
//   };


// Below is a fullscreen method.
var elem = document.documentElement;
var fs = false //Fullscreen check
$('#fullscreenBtn').click(function() {
  if (fs === false){
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
    fs = true;
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
    fs = false;
  }
});

document.getElementById("btnt").disabled = true;

//This function hides the current table and displays the new one;
function tbSwitch(tableOn, tableOff, btnOn, btnOff, holdTime){
  if (btnOn === 3) {
    document.getElementById("btnt").disabled = true;
    document.getElementById("btnf").disabled = false;
  } else {
    document.getElementById("btnt").disabled = false;
    document.getElementById("btnf").disabled = true;
  }
  tableOn.css({'margin-top': '-300px'});
  setTimeout(function() {tableOn.css({"opacity":"1",
    "margin-top":"0"
  });
}, holdTime);
  tableOn.css({'display': 'block'});
  tableOff.css({"opacity":"0",
    "margin-top":"200"
  })
  setTimeout(function() {tableOff.css({'display': 'none'})});
}

var tbThree = $('.three')
var tbFour = $('.four')
var btnThree = $('#btnt')
var btnFour = $('#btnf')
tbSwitch(tbThree, tbFour, 3, 4, 0)


// Switching between 3x3 and 4x4 table
var activeTable = 3

btnFour.click(function(){
  activeTable = 4;
  tbSwitch(tbFour, tbThree, 4, 3, 600);
});

btnThree.click(function(){
  activeTable = 3;
  tbSwitch(tbThree, tbFour, 3, 4, 600);
});

// Audio Varibles:
var kick = new Audio('Sources/Audio/Kick.mp3')
    clap = new Audio('Sources/Audio/Clap.mp3')
    closedHat = new Audio('Sources/Audio/ClosedHat.mp3')
    openHat = new Audio('Sources/Audio/OpenHat.mp3')
    cymbal = new Audio('Sources/Audio/Cymbal.mp3')
    bass = new Audio('Sources/Audio/808.mp3')
    lowTom = new Audio('Sources/Audio/LowTom.mp3')
    midTom = new Audio('Sources/Audio/MidTom.mp3')
    hiTom = new Audio('Sources/Audio/HiTom.mp3')

    snare = new Audio('Sources/Audio/Additional/Snare.mp3')
    cowbell = new Audio('Sources/Audio/Additional/Cowbell.mp3')
    adLib = new Audio('Sources/Audio/Additional/AdLib.mp3')
    brass1 = new Audio('Sources/Audio/Additional/BrassF1.mp3')
    brass2 = new Audio('Sources/Audio/Additional/BrassGsharp2.mp3')
    brass3 = new Audio('Sources/Audio/Additional/BrassCsharp3.mp3')
    brass4 = new Audio('Sources/Audio/Additional/brassC4.mp3')


//Cell press animation
function btnPressAnim(cell){
  console.log(cell.innerHTML + ' pressed');

  // Music
  switch (cell.id){
    case 'three1':
    case 'four1':
      kick.load();
      kick.play();
    break;

    case 'three2':
    case 'four2':
      closedHat.load();
      closedHat.play();
    break;

    case 'three3':
    case 'four3':
      openHat.load();
      openHat.play();
    break;

    case 'three4':
    case 'four5':
      bass.load();
      bass.play();
    break;

    case 'three5':
    case 'four6':
      clap.load();
      clap.play();
    break;

    case 'three6':
    case 'four7':
      cymbal.load();
      cymbal.play();
    break;

    case 'three7':
    case 'four9':
      lowTom.load();
      lowTom.play();
    break;

    case 'three8':
    case 'four10':
      midTom.load();
      midTom.play();
    break;

    case 'three9':
    case 'four11':
      hiTom.load();
      hiTom.play();
    break;

    case 'four4':
    case '56':
      if (activeTable === 4) {
        brass1.load();
        brass1.play();
      }
    break;

    case 'four8':
    case '117':
    if (activeTable === 4) {
      brass2.load();
      brass2.play();
    }
    break;

    case 'four12':
    case '106':
    if (activeTable === 4) {
      brass3.load();
      brass3.play();
    }
    break;

    case 'four13':
    case '118':
    if (activeTable === 4) {
      snare.load();
      snare.play();
    }
    break;

    case 'four14':
    case '98':
    if (activeTable === 4) {
      cowbell.load();
      cowbell.play();
    }
    break;

    case 'four15':
    case '110':
    if (activeTable === 4) {
      adLib.load();
      adLib.play();
    }
    break;

    case 'four16':
    case '109':
    if (activeTable === 4) {
      brass4.load();
      brass4.play();
    }
    break;

    }
  var animDuration = 100
  cell.animate([
    { // from
      border: 'solid 1px #515187'
    },
    { // to
      border: 'dotted 15px #9595f4'
    }
  ], animDuration);
  setTimeout(function(){cell.animate([
    { // from
      border: 'dotted 15px #9595f4'
    },
    { // to
      border: 'solid 1px black'
    }
  ], animDuration);}, animDuration)
}

// keypress check function

function checkKey(){
  var key = event.which || event.keyCode;
  console.log(key);
  switch (key){
    case 52:
    if (activeTable === 4) {
      btnPressAnim(cellFour1)
    } else {btnPressAnim(cellThree1)
    }
    break;

    case 53:
    if (activeTable === 4) {
      btnPressAnim(cellFour2)
    } else {btnPressAnim(cellThree2)
    }
    break;

    case 54:
    if (activeTable === 4) {
      btnPressAnim(cellFour3)
    } else {btnPressAnim(cellThree3)
    }
    break;

    case 114:
    case 1082:
    if (activeTable === 4) {
      btnPressAnim(cellFour5)
    } else {btnPressAnim(cellThree4)
    }
    break;

    case 116:
    case 1077:
    if (activeTable === 4) {
      btnPressAnim(cellFour6)
    } else {btnPressAnim(cellThree5)
    }
    break;

    case 121:
    case 1085:
    if (activeTable === 4) {
      btnPressAnim(cellFour7)
    } else {btnPressAnim(cellThree6)
    }
    break;

    case 102:
    case 1072:
    if (activeTable === 4) {
      btnPressAnim(cellFour9)
    } else {btnPressAnim(cellThree7)
    }
    break;

    case 103:
    case 1087:
    if (activeTable === 4) {
      btnPressAnim(cellFour10)
    } else {btnPressAnim(cellThree8)
    }
    break;

    case 104:
    case 1088:
    if (activeTable === 4) {
      btnPressAnim(cellFour11)
    } else {btnPressAnim(cellThree9)
    }
    break;

    case 55:
      btnPressAnim(cellFour4)
    break;

    case 117:
    case 1075:
      btnPressAnim(cellFour8)
    break;

    case 106:
    case 1086:
      btnPressAnim(cellFour12)
    break;

    case 118:
    case 1084:
      btnPressAnim(cellFour13)
    break;

    case 98:
    case 1080:
      btnPressAnim(cellFour14)
    break;

    case 110:
    case 1090:
      btnPressAnim(cellFour15)
    break;

    case 109:
    case 1100:
      btnPressAnim(cellFour16)
    break;
  }
}

//Cell press method

// 3x3
var cellThree1 = document.getElementById("three1");
    cellThree2 = document.getElementById("three2");
    cellThree3 = document.getElementById("three3");
    cellThree4 = document.getElementById("three4");
    cellThree5 = document.getElementById("three5");
    cellThree6 = document.getElementById("three6");
    cellThree7 = document.getElementById("three7");
    cellThree8 = document.getElementById("three8");
    cellThree9 = document.getElementById("three9");

// Click and Touch Event Listeners for 3x3

if (typeof window.orientation !== 'undefined'){
  cellThree1.addEventListener('touchstart', btnPressAnim.bind(this, cellThree1))
  cellThree2.addEventListener('touchstart', btnPressAnim.bind(this, cellThree2))
  cellThree3.addEventListener('touchstart', btnPressAnim.bind(this, cellThree3))
  cellThree4.addEventListener('touchstart', btnPressAnim.bind(this, cellThree4))
  cellThree5.addEventListener('touchstart', btnPressAnim.bind(this, cellThree5))
  cellThree6.addEventListener('touchstart', btnPressAnim.bind(this, cellThree6))
  cellThree7.addEventListener('touchstart', btnPressAnim.bind(this, cellThree7))
  cellThree8.addEventListener('touchstart', btnPressAnim.bind(this, cellThree8))
  cellThree9.addEventListener('touchstart', btnPressAnim.bind(this, cellThree9))
} else {
  cellThree1.addEventListener('click', btnPressAnim.bind(this, cellThree1))
  cellThree2.addEventListener('click', btnPressAnim.bind(this, cellThree2))
  cellThree3.addEventListener('click', btnPressAnim.bind(this, cellThree3))
  cellThree4.addEventListener('click', btnPressAnim.bind(this, cellThree4))
  cellThree5.addEventListener('click', btnPressAnim.bind(this, cellThree5))
  cellThree6.addEventListener('click', btnPressAnim.bind(this, cellThree6))
  cellThree7.addEventListener('click', btnPressAnim.bind(this, cellThree7))
  cellThree8.addEventListener('click', btnPressAnim.bind(this, cellThree8))
  cellThree9.addEventListener('click', btnPressAnim.bind(this, cellThree9))

}

// Keypress Event Listeners for 3x3
window.addEventListener('keypress', checkKey.bind(this, ))

// 4x4
var cellFour1 = document.getElementById("four1");
    cellFour2 = document.getElementById("four2");
    cellFour3 = document.getElementById("four3");
    cellFour4 = document.getElementById("four4");
    cellFour5 = document.getElementById("four5");
    cellFour6 = document.getElementById("four6");
    cellFour7 = document.getElementById("four7");
    cellFour8 = document.getElementById("four8");
    cellFour9 = document.getElementById("four9");
    cellFour10 = document.getElementById("four10");
    cellFour11 = document.getElementById("four11");
    cellFour12 = document.getElementById("four12");
    cellFour13 = document.getElementById("four13");
    cellFour14 = document.getElementById("four14");
    cellFour15 = document.getElementById("four15");
    cellFour16 = document.getElementById("four16");

// Click and Touch Event Listeners for 4x4


if (typeof window.orientation !== 'undefined'){
  cellFour1.addEventListener('touchstart', btnPressAnim.bind(this, cellFour1))
  cellFour2.addEventListener('touchstart', btnPressAnim.bind(this, cellFour2))
  cellFour3.addEventListener('touchstart', btnPressAnim.bind(this, cellFour3))
  cellFour4.addEventListener('touchstart', btnPressAnim.bind(this, cellFour4))
  cellFour5.addEventListener('touchstart', btnPressAnim.bind(this, cellFour5))
  cellFour6.addEventListener('touchstart', btnPressAnim.bind(this, cellFour6))
  cellFour7.addEventListener('touchstart', btnPressAnim.bind(this, cellFour7))
  cellFour8.addEventListener('touchstart', btnPressAnim.bind(this, cellFour8))
  cellFour9.addEventListener('touchstart', btnPressAnim.bind(this, cellFour9))
  cellFour10.addEventListener('touchstart', btnPressAnim.bind(this, cellFour10))
  cellFour11.addEventListener('touchstart', btnPressAnim.bind(this, cellFour11))
  cellFour12.addEventListener('touchstart', btnPressAnim.bind(this, cellFour12))
  cellFour13.addEventListener('touchstart', btnPressAnim.bind(this, cellFour13))
  cellFour14.addEventListener('touchstart', btnPressAnim.bind(this, cellFour14))
  cellFour15.addEventListener('touchstart', btnPressAnim.bind(this, cellFour15))
  cellFour16.addEventListener('touchstart', btnPressAnim.bind(this, cellFour16))
} else {
  cellFour1.addEventListener('click', btnPressAnim.bind(this, cellFour1))
  cellFour2.addEventListener('click', btnPressAnim.bind(this, cellFour2))
  cellFour3.addEventListener('click', btnPressAnim.bind(this, cellFour3))
  cellFour4.addEventListener('click', btnPressAnim.bind(this, cellFour4))
  cellFour5.addEventListener('click', btnPressAnim.bind(this, cellFour5))
  cellFour6.addEventListener('click', btnPressAnim.bind(this, cellFour6))
  cellFour7.addEventListener('click', btnPressAnim.bind(this, cellFour7))
  cellFour8.addEventListener('click', btnPressAnim.bind(this, cellFour8))
  cellFour9.addEventListener('click', btnPressAnim.bind(this, cellFour9))
  cellFour10.addEventListener('click', btnPressAnim.bind(this, cellFour10))
  cellFour11.addEventListener('click', btnPressAnim.bind(this, cellFour11))
  cellFour12.addEventListener('click', btnPressAnim.bind(this, cellFour12))
  cellFour13.addEventListener('click', btnPressAnim.bind(this, cellFour13))
  cellFour14.addEventListener('click', btnPressAnim.bind(this, cellFour14))
  cellFour15.addEventListener('click', btnPressAnim.bind(this, cellFour15))
  cellFour16.addEventListener('click', btnPressAnim.bind(this, cellFour16))

}
