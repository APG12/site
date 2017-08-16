window.onload = function() {
        annyang.debug();
        annyang.setLanguage("ru");
        annyang.start({
            continuous: false
        });
        annyang.addCallback('soundstart', function() {});
        annyang.addCallback('result', function(phrases) {

            var words = phrases[0].split(" ");
            for (var i = 0; i < words.length; i++) {
                words[i] = "хуе" + words[i].slice(2, words[i].length);
                console.log(words[i]);
            };

            var leftData = "<div class='message left' style='display:none;'><div class='message-text'>" + words +
                "</div></div>";
            $(leftData).prependTo('#phone').fadeIn('slow', function() {

                var rightData = "<div class='message right' style='display:none;'><div class='message-text'>" + phrases[0] +
                    "</div></div>";
                $(rightData).prependTo('#phone').fadeIn('slow');
                    responsiveVoice.speak(words, "Russian Female");
responsiveVoice.speak("hello world", "UK English Male", {volume: 1});
            });

        });
};
