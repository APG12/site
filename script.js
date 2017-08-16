window.onload = function() {
    var zaglushki = ['sounds/white/ало.mp3'];

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
            slova: ["ало", "да", "слушаю", "кто"],
            sound: [
                ['sounds/white/ало это ты.mp3', 'sounds/white/придурок хуле писдел.mp3'],
                ['sounds/white/ало это ты.mp3','sounds/white/разбираца будем.mp3']
            ],
            chain: ["kto", "oshiblis","naglymaslenok"],
            question: ["sounds/white/гандон ебать.mp3"],
            w: 1,
            bw: 1
        },
        nachalo: {
            slova: ["писдел", "пиздел", "п*****", "кого","кто","за","что"],
            sound: [
                ['sounds/white/за что это ты писдеть начал.mp3'],
                ['sounds/white/да ну нахуй ебать.mp3']
            ],
            chain: ["kto", "oshiblis","naglymaslenok"],
            question: ["sounds/white/гандон ебать.mp3"],
            w: 1,
            bw: 1
        },
         naglymaslenok: {
            slova: ["е****","о****","б****","у****","гандон","п****", "сука", "н****","х****","х**"],
            sound: [
                ['sounds/white/слушай ты чо ублюдок чтоли.mp3'],
            ],
            chain: [],
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
        flagpiz = 0;
        WhenMaslenokIsSilent(0, 0);
    });
    annyang.addCallback('result', function(phrases) {
        flagpiz = 1;
        WhenMaslenokIsSilent(0, 0);
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
                    if (fraz[fraz[maxflag].chain[i]]) {
                        console.log("нашел потомка чейна");
                        fraz[fraz[maxflag].chain[i]].w += 0.2;
                        console.log(fraz[maxflag].chain + " " + fraz[fraz[maxflag].chain[i]].w);

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
