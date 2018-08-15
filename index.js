var upperCase = 'Hello'
var lowercase = 'hello'
var mixedcase = 'I love you, Grandma!'


function shout(string) {
  return string.toUpperCase()
}

function Whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase)
}

function logWhisper(string) {
  console.log(string.toLowerCase)
}

function sayHiToGrandma(string) {
  if (string.toLowerCase === string) {
    console.log("I can't hear you!");
  } else if (string.toUpperCase === string) {
    console.log("YES INDEED!");
  } else {
    console.log("I love you, too.");
  }
}

