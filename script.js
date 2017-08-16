window.onload = function() {
    var zaglushki = ['sounds/white/ало.mp3', 'sounds/white/здравстуйте.mp3', 'sounds/white/я телефон нашел.mp3'];

    var timer;
    var flagpiz = 0;

    function WhenMaslenokIsSilent(arg, soun) {
        if (flagpiz == 0) {
            if (arg == 1) {
                console.log("таймер установлен");
                timer = setTimeout(function() { // init timer with 5 seconds
                    if (soun != 1) {
                        var audiosil = new Audio(soun);
                        console.log(soun);
                    } else {
                        var audiosil = new Audio(zaglushki[Math.floor(Math.random() * zaglushki.length)]);
                    }
                    audiosil.play();
                }, 5000);
            }
        }
        if (flagpiz == 1) {
            if (arg == 0) {
                console.log("таймер сброшен");
                clearTimeout(timer);
            }
        }
    };

    WhenMaslenokIsSilent(1, 1);


    var fraz = {
        nachalo: {
            slova: ["не", "хочу", "гадать", "кто", "это", "загадок", "скажи", "ты"],
            sound: [
                ['sounds/white/здравстуйте.mp3'],
                ['sounds/white/ало.mp3'],
                ['sounds/white/здравстуйте.mp3', 'sounds/white/я телефон нашел.mp3'],
                ['sounds/white/ало.mp3', 'sounds/white/я телефон нашел.mp3']
            ],
            chain: ["telefon","ktoeto","popalnetuda"],
            question: ["sounds/white/але это ты.mp3"],
            w: 1,
            bw: 1
        },
        telefon: {
            slova: ["какой", "телефон", "чей"],
            sound: [
                ['sounds/white/телефон то хароший дорого.mp3'],
            ],
            chain: [],
            question: ["sounds/white/ну смотри ебать.mp3"],
            w: 0.95,
            bw: 0.95
        },
        
        sebe: {
            slova: ["терял", "не"],
            sound: [
                ['sounds/white/я могу себе взять.mp3'],
            ],
            chain: ["sebe"],
            question: ["sounds/white/я нихуя не пойму.mp3"],
            w: 0.95,
            bw: 0.95
        },
    };


    var max = 1;
    var maxflag = "nachalo";

    var mainflag = 0;
    annyang.debug();
    annyang.setLanguage("ru");
    annyang.start({
        continuous: false
    });
    annyang.addCallback('soundstart', function() {
        console.log('sound detected!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        WhenMaslenokIsSilent(0, 0);
        flagpiz = 0;
    });
    annyang.addCallback('result', function(phrases) {
        WhenMaslenokIsSilent(0, 0);
        if (flagpiz ==0){
        flagpiz = 1;}
        else if (flagpiz == 1){
        flagpiz = 0;}
        if (mainflag == 0) {
            mainflag = 1;
            for (var i = 0; i < phrases.length; i++) {
                var words = phrases[i].split(" ");
                for (var j = 0; j < words.length; j++) {
                    console.log(words[j]);
                    for (var key in fraz) {
                        var slova = fraz[key].slova;
                        for (var m = 0; m < slova.length; m++) { //console.log(wordso[i].words[j].value);
                            if (slova[m] === words[j].toLowerCase()) {
                                fraz[key].w += 0.01 / slova.length;
                                console.log(key + " = " + fraz[key].w + "; max = " + maxflag + " " + max + "слово: " + words[j]);
                                if (fraz[key].w > max) {
                                    max = fraz[key].w
                                    maxflag = key;
                                }
                            }
                        }

                    }

                }


            }
            console.log(maxflag);
            var ai = 0;
            var maxflagb = maxflag;
            var sonu = Math.floor(Math.random() * fraz[maxflag].sound.length);
            if (Array.isArray(fraz[maxflag].sound[sonu])) {
                console.log("признал массивом");
                audio = new Audio(fraz[maxflag].sound[sonu][0]);
                audio.addEventListener("ended", function() {
                    audio.currentTime = 0;
                    ai++;
                    audio = new Audio(fraz[maxflagb].sound[sonu][ai]);
                    audio.play();
                    console.log("ended");
                });
            } else {
                console.log("признал строкой");

                audio = new Audio(fraz[maxflag].sound[ai]);
                audio.addEventListener("ended", function() {
                    audio.currentTime = 0;
                    ai++;
                    audio = new Audio(fraz[maxflagb].sound[ai]);
                    audio.play();
                    console.log("ended");
                });
            }
            audio.play();
            audio.addEventListener("ended", function() {
                mainflag = 0;
                if (fraz[maxflagb].hasOwnProperty("question")) {
                    WhenMaslenokIsSilent(1, fraz[maxflagb].question);
                } else {
                    WhenMaslenokIsSilent(1, 1);
                }
            });


            var bufmsg = maxflag;
            var leftData = "<div class='message left' style='display:none;'><div class='message-text'>" + phrases[0] +
                "</div></div>";
            $(leftData).prependTo('#phone').fadeIn('slow', function() {

                var rightData = "<div class='message right' style='display:none;'><div class='message-text'>" + bufmsg +
                    "</div></div>";
                $(rightData).prependTo('#phone').fadeIn('slow');
            });



            for (var key in fraz) {
                fraz[key].w = fraz[key].bw;
            }
            
            
            fraz[maxflag].bw = 0.95;
            fraz[maxflag].w = 0.95;
            
            if (fraz[maxflag].hasOwnProperty("chain")) {
                console.log("чейн не пустой");
                for (var i = 0; i < fraz[maxflag].chain.length; i++) {
                    console.log("перебирает чейны");
                    if (fraz[fraz[maxflag].chain]) {
                        console.log("нашел потомка чейна");
                        fraz[fraz[maxflag].chain].w += 0.2;
                        console.log(fraz[maxflag].chain + " " + fraz[fraz[maxflag].chain].w);

                    }
                }

            }

            max = 1;
            maxflag = pickRandomProperty(fraz);
            audio = zaglushki[Math.floor(Math.random() * zaglushki.length)];
        }
    });

}



function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1 / ++count)
            result = prop;
    return result;
}
