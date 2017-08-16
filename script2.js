window.onload = function() {
     
        var voices = speechSynthesis.getVoices()

  console.log(voices)


  

        
        
        
        
                annyang.debug();
        annyang.setLanguage("ru");
        annyang.start({
            continuous: false
        });
        annyang.addCallback('soundstart', function() {});
        annyang.addCallback('result', function(phrases) {

            var words = phrases[0].split(" ");
            for (var i = 0; i < words.length; i++) {
                switch (words[i]){
                        case "х**": 
                        words[i]= "хуй";
                        break;
                        case "б****":
                        words[i]="блядь";
                        break;
                }
  
                if (words[i].indexOf("*")!=-1){
		 words[i]="";
		};

                if (words[i]!="хуй" && words[i].length > 2){
                    words[i] = "хуй" + words[i].slice(2, words[i].length);
                console.log(words[i]);}
            };

            var leftData = "<div class='message left' id='left' style='display:none;'><div class='message-text'>" + words +
                "</div></div>";
            $(leftData).prependTo('#phone').fadeIn('slow', function() {

                var rightData = "<div class='message right' style='display:none;'><div class='message-text'>" + phrases[0] +
                    "</div></div>";
                $(rightData).prependTo('#phone').fadeIn('slow');

 var msg = new SpeechSynthesisUtterance()
msg.voice = voices[10]; // use the index from the list above to pick your voice

msg.text =  words;
msg.lang = 'ru-RU';


// or speak them all!

var currentVoice = 0;

    msg.voice = voices[currentVoice];


                    speechSynthesis.speak(msg);
	    
                    
            });

        });
	
};




