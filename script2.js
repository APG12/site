window.onload = function() {
        String.prototype.replaceAll = function(str1, str2, ignore) 
{
	return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
}
        var voices = speechSynthesis.getVoices()

voices.forEach(function(voice, index) {
  console.log(index,voice.lang,voice.name)
})

  

        
        
        
        
        
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
 
words[i].replaceAll("*","");

                if (words[i]!="хуй"){
                    words[i] = "хуе" + words[i].slice(2, words[i].length);
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




