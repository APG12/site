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
                switch (words[words.length-1]){
                        case "х**": 
                        words[words.length-1]= "хуй";
                        break;
                        case "б****":
                        words[words.length-1]="блядь";
                        break;
                }
  
                if (words[words.length-1].indexOf("*")!=-1){
		 words[words.length-1]="";
		};

                if (words[words.length-1]!="хуй" && words[words.length-1].length > 2){
                    words[words.length-1] = "хуй" + words[words.length-1].slice(2, words[words.length-1].length);
                console.log(words[words.length-1]);}
         

            var leftData = "<div class='message left' id='left' style='display:none;'><div class='message-text'>" + words +
                "</div></div>";
            $(leftData).prependTo('#phone').fadeIn('slow', function() {

                var rightData = "<div class='message right' style='display:none;'><div class='message-text'>" + phrases[0] +
                    "</div></div>";
                $(rightData).prependTo('#phone').fadeIn('slow');

 var msg = new SpeechSynthesisUtterance()
msg.voice = voices[10]; // use the index from the list above to pick your voice

msg.text =  words[words.length-1];
msg.lang = 'ru-RU';


// or speak them all!

var currentVoice = 0;

    msg.voice = voices[currentVoice];


                    speechSynthesis.speak(msg);
	    
                    
            });

        });
	
};




