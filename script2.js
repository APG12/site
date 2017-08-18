window.onload = function() {

var tts = new ya.speechkit.Tts(
      // Настройки синтеза. Список доступных настроек см. в справочнике.
      {
        // API-ключ. Может быть задан глобально через объект ya.speechkit.settings.
        apikey: 'f0222399-d645-4c09-b3b7-b530c1b1e851',
        // Эмоциональная окраска: добрый голос.
        emotion: 'evil',
        // Скорость речи.
        speed: 1,
        // Имя диктора.
        speaker: 'tanya'  
      }
    );

  

        
        
        
        
                annyang.debug();
        annyang.setLanguage("ru");
        annyang.start({
            continuous: false
        });
        annyang.addCallback('soundstart', function() {});
        annyang.addCallback('result', function(phrases) {

            var words = phrases[0].split(" ");
                switch (words[words.length-1]){
                        case "google": 
                        words[words.length-1]= "гугл";
                        break;
			case "Google": 
                        words[words.length-1]= "гугл";
                        break;
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
                    words[words.length-1] = "хуй" + words[words.length-1].slice(2, 3) + "+" + words[words.length-1].slice(3, words[words.length-1].length);
                console.log(words[words.length-1]);}
         

            var leftData = "<div class='message left' id='left' style='display:none;'><div class='message-text'>" + words +
                "</div></div>";
            $(leftData).prependTo('#phone').fadeIn('slow', function() {

                var rightData = "<div class='message right' style='display:none;'><div class='message-text'>" + phrases[0] +
                    "</div></div>";
                $(rightData).prependTo('#phone').fadeIn('slow');

	    
                    
            });
		tts.speak(words[words.length-1]);

        });
	
};




