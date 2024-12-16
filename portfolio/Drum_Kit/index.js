var soundMap = {
  w: "tom-1.mp3",
  a: "tom-2.mp3",
  s: "tom-3.mp3",
  d: "tom-4.mp3",
  j: "snare.mp3",
  k: "crash.mp3",
  l: "kick-bass.mp3",
};

$(".drum").mouseover(function () {
  var buttonClass = $(this).attr("class").split(" ")[0]; // Get the first class name
  var soundFile = soundMap[buttonClass];
  playAudio(soundFile);
  buttonAnimation(buttonClass);
});

// Add keydown event listener
$(document).keydown(function (event) {
  var soundFile = soundMap[event.key];
  playAudio(soundFile);
  buttonAnimation(event.key);
});

function playAudio(file) {
  if (file) {
    var audio = new Audio(`./sounds/${file}`);
    audio.play();
  } else {
    console.error("No sound mapped for key");
  }
}

function buttonAnimation(key) {
  var button = $("." + key);
  button.addClass("pressed");
  setTimeout(function () {
    button.removeClass("pressed");
  }, 100);
}
