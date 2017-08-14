window.onload = function () {

annyang.debug();
annyang.setLanguage("ru");
annyang.start();
annyang.addCallback('soundstart', function() {
  console.log('sound detected');
});

annyang.addCallback('result', function() {
  console.log('sound stopped');
});

annyang.addCallback('result', function(phrases) {
  console.log("I think the user said: ", phrases[0].words[0]);
  console.log("But then again, it could be any of the following: ", phrases);
});
}
