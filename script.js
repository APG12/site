window.onload = function() {
    var zaglushki = ['sounds/алё.mp3', 'sounds/алео.mp3', 'sounds/ну.mp3'];

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
        
        aleo: {
            slova: ["ало", "алео", "алло","да","слушаю"],
            sound: [
                ['sounds/добрый день.mp3'],
                ['sounds/привет.mp3']
            ],
            text: ['Привет!'],
            chain: ['privet','atikomuzvonish'],
            w: 1.1,
            bw: 1.1
        },
        
        
        privet: {
            slova: ["привет"],
            sound: ['sounds/как дела.mp3'],
            text: ['Как дела?'],
            chain: ['atvoikak','aetokto','atikomuzvonish'],
            w: 0.95,
            bw: 0.95
        },
        
        
        atikomuzvonish: {
            slova: ["кому","звонишь"],
            sound: ['sounds/тебе звоню.mp3'],
            text: ['Тебе звоню.'],
            chain: ['komutebe'],
            w: 0.95,
            bw: 0.95
        },
        
        
        komutebe: {
            slova: ["кому","звонишь"],
            sound: [
                ['sounds/ну тебе.mp3'],
                ['sounds/да мне нужен ты.mp3'],
              ],
            text: ['Ну тебе.'],
            chain: ['ktoya'],
            w: 0.95,
            bw: 0.95
        },
        
        ktoya: {
            slova: ["кто","я"],
            sound: [
                ['sounds/я хочу с тобой познакомиться.mp3','sounds/ты что не понял.mp3'],
                ['sounds/я тебя видела в вк'],
              ],
            text: ['Я хочу с тобой познакомиться, ты что не понял?.'],
            chain: [
                ['davaiznakomitsa','nehochetznakomitsa'],
                ['vk']
            ],
            w: 0.95,
            bw: 0.95
        },
        
        davaiznakomitsa: {
            slova: ["давай","познакомимся"],
            sound: ['sounds/мальчик как зовут.mp3'],
            text:  ['Мальчик как тебя зовут?'],
            chain: ['amenyazovut'],
            w: 0.95,
            bw: 0.95
        },
        
        amenyazovut: {
            slova: ["любое слово"],
            sound: [
                ['sounds/а меня зовут марина.mp3', 'sounds/очень приятно.mp3'],
                ['sounds/я кристи.mp3', 'sounds/очень приятно.mp3'],
              ],
            text: ['А меня зовут Марина, очень приятно.'],
            chain: ['skokatebelet','molodoyeshe'],
            w: 0.95,
            bw: 0.95
        },
        
        skokatebelet: {
            slova: ["любое слово"],
            sound: ['sounds/а скока тебе лет.mp3'],
            text: ['А скока тебе лет?'],
            chain:['molodoyeshe'],
            w: 0.95,
            bw: 0.95
        },
        
        molodoyeshe: {
            slova: ["любое слово"],
            sound: ['sounds/ну ты молодой.mp3'],
            text: ['Ну ты молодой еще.'],
            chain: ['atebeskolkolet','uchus','rabotayu'],
            question: ['sounds/ты учишьяс или работ.mp3'],
            w: 0.95,
            bw: 0.95
        },
            
        atebeskolko: {
            slova: ["тебе","сколько","лет"],
            sound: ['sounds/не прилично возраст.mp3'],
            text: ['Не прилично возраст спрашивать у девушки.'],
            chain: ['nuskoka'],
            question: ['sounds/мне 22'],
            w: 0.95,
            bw: 0.95
        },
    
        nuskoka: {
            slova: ["ну","сколько","скажи"],
            sound: ['sounds/мне 22.mp3','sounds/ты учишьяс или работ.mp3'],
            text: ['Мне 22. Ты учишься или работаешь?'],
            chain: ['uchus','rabotayu'],
            w: 0.95,
            bw: 0.95
        },
        
        uchus: {
            slova: ["учусь"],
            sound: ['sounds/а скока стипуха.mp3'],
            text: ['А сколько у тебя стипендия?'],
            chain: ['funeudachnik'],
            w: 0.95,
            bw: 0.95
        },
        
        rabotayu: {
            slova: ["работаю"],
            sound: ['sounds/а кем ты робиш.mp3'],
            text: ['А кем ты работаеш?'],
            chain: ['kakayazp'],
            w: 0.95,
            bw: 0.95
        },
        
        kakayazp: {
            slova: ["любое слово"],
            sound: ['sounds/и какая зарплата.mp3'],
            text: ['И какая зарплата?'],
            chain: ['kakayamashina'],
            w: 0.95,
            bw: 0.95
        },
        
        kakayamashina: {
            slova: ["любое слово"],
            sound: ['sounds/аа понятно.mp3','sounds/какая у тя машина.mp3'],
            text: ['А понятно, а какая у тебя машина?'],
            chain: ['funeudachnik'],
            w: 0.95,
            bw: 0.95
        },
        

        funeudachnik: {
            slova: ["любое слово"],
            sound: ['sounds/фу неудачник.mp3','sounds/а можно нескромный вопрос.mp3'],
            text: ['Фу неудачник, а можно нескромный вопрос?'],
            chain: ['davopros','netvopros'],
            w: 0.95,
            bw: 0.95
        },
        
        
        netvopros: {
            slova: ["нет","нельзя"],
            sound: ['sounds/ну а почему нет то.mp3'],
            text: ['Ну а почему нет то?'],
            chain: ['poshelnahuy'],
            w: 0.95,
            bw: 0.95
        },
        
        davopros: {
            slova: ["да","давай","хорошо","задавай"],
            sound: [
                    ['sounds/у тебя есть девушка.mp3','sounds/тока не врать.mp3'],
                    ['sounds/слушай а какой размер.mp3']
                    ['sounds/а ты девственик.mp3']
                   
            ],
            text: ['Спрашивает какую-то хуйню ;)'],
            chain: [
                    ['estdevushka','netdevushki'],
                    ['eldakcho','eldakzachem'],
                    ['dadevstvennik','netdevstvennik']
            ],
            w: 0.95,
            bw: 0.95
        },
       
        estdevushka: {
            slova: ["да","есть"],
            sound: ['sounds/ну так я она и есть.mp3','sounds/а что тебе во мне нра.mp3'],
            text: ['Ну так я она и есть. А что тебе во мне нравится?'],
            chain: ['yatebyanevidel'],
            w: 0.95,
            bw: 0.95
        },
        
        yatebyanevidel: {
            slova: ["не","знаю","видел","никогда","незнакомы"],
            sound: ['sounds/увидишь меня при встрече.mp3','sounds/давай куда нить сходим.mp3'],
            text: ['Увидишь меня при встрече. Давай куда нить сходим.'],
            chain: ['kudanitshodim'],
            w: 0.95,
            bw: 0.95
        },
        
        yatebyanevidel: {
            slova: ["не","знаю","видел","никогда","незнакомы"],
            sound: ['sounds/увидишь меня при встрече.mp3','sounds/давай куда нить сходим.mp3'],
            text: ['Увидишь меня при встрече. Давай куда нить сходим.'],
            chain: ['kudanitshodim'],
            w: 0.95,
            bw: 0.95
        },
        
       netdevushki: {
            slova: ["нет","нету","неважно"],
            sound: [
                ['sounds/а какие тебе девушки нра.mp3'],
                ['sounds/ты голубой.mp3']
            ],
            text: ['А какие тебе девушки нравятся?.'],
            chain: [
                ['netinrav','otakyatakaya'],
                ['negey']
            ],
            w: 0.95,
            bw: 0.95
        },
          
        netinrav: {
            slova: ["не","ты","явно"],
            sound: ['sounds/почему.mp3','sounds/я нормальная.mp3'],
            text: ['Почему? Я нормальная.'],
            chain: ['yatebyanevidel'],
            question: ['sounds/я красивая молодая.mp3'],
            w: 0.95,
            bw: 0.95
        },
        
        otakyatakaya: {
            slova: ["любое слово"],
            sound: ['sounds/о так я такая.mp3'],
            text: ['О так я именно такая.'],
            chain: ['yatebyanevidel'],
            question: ['sounds/я красивая молодая.mp3'],
            w: 0.95,
            bw: 0.95
        },
         
        
        kudanitshodim: {
            slova: ["любое слово"],
            sound: [
                ['sounds/можно в кафе.mp3'],
                ['sounds/можно в центре.mp3']
                ],
            text: ['Можно там-то.'],
            chain: [
                ['vcafe'],
                ['vcentre']
            ],
            w: 0.95,
            bw: 0.95
        },
        
        vcafe: {
            slova: ["любое слово"],
            sound: ['sounds/ну предложи ты я не оч.mp3'],
            text: ['Ну предложи ты, я не очень разбираюсь.'],
            chain: ['etov20m'],
            w: 0.95,
            bw: 0.95
        },
        
        
        vcentre: {
            slova: ["любое слово"],
            sound: ['sounds/ну предложи ты мужчина глав.mp3'],
            text: ['Ну предложи ты, мужчина должен быть главным..'],
            chain: ['etov20m'],
            w: 0.95,
            bw: 0.95
        },
        
        
        etov20m: {
            slova: ["любое слово"],
            sound: ['sounds/аа это в 20 минутах.mp3'],
            text: ['А это в 20 минутах от меня.'],
            chain: ['mogucherez30'],
            w: 0.95,
            bw: 0.95
        },
        
        
        mogucherez30: {
            slova: ["любое слово"],
            sound: ['sounds/могу через 30 мин.mp3'],
            text: ['Могу через 30 минут.'],
            chain: ['dogovorilis'],
            w: 0.95,
            bw: 0.95
        },
        
        
        
        dogovorilis: {
            slova: ["любое слово"],
            sound: ['sounds/договорились.mp3'],
            text: ['Договорились.'],
            chain: ['yatepozvonutogda'],
            w: 0.95,
            bw: 0.95
        },
        
      
       yatepozvonutogda: {
            slova: ["любое слово"],
            sound: ['sounds/я те позвоню тогда.mp3'],
            text: ['Я тебе позвоню тогда.'],
            chain: ['kotik'],
            w: 0.95,
            bw: 0.95
        },
        
        
        kotik: {
            slova: ["любое слово"],
            sound: ['sounds/котик.mp3'],
            text: ['Котик <3'],
            question: ['sounds/да пошел тым мудак обьеб.mp3'],
            w: 0.95,
            bw: 0.95
        },
        
        
        poshelnahuy: {
            slova: ["любое слово"],
            sound: ['sounds/да пошел ты мудак обьеб.mp3'],
            text: ['Да пошел ты нахуй, мудак объебаный.'],
            w: 0.95,
            bw: 0.95
        },
        
        
        
        atvoikak: {
            slova: ["нормально","ниче","так","хорошо","пойдет"],
            sound: [
                ['sounds/что делаеш.mp3'],
               ],
            text: ['Что делаешь?'],
            chain: [
                ['atvoikak'],
                ['atikomuzvonish']
            ],
            w: 0.95,
            bw: 0.95
        },
        
        
        
        
        
        
        
        
        
        
        
        mat: {
            slova: ["з*****", "н****", "е****", "п******", "сука", "в****", "у****", "у******", "о****", "б****", "г*****", "е*****"],
            sound: [
                ['sounds/чо ты обзываеш.mp3'],
                ['sounds/соси небритую жопу.mp3']
            ],
            text: ['Соси небритую жопу!'],
            chain: [
                ['love'],
                ['adres']
            ],
            w: 1,
            bw: 1
        },
        love: {
            slova: ["девушка", "секс", "елдак", "сиськи", "парень", "парней", "позы", "размер", "сексом", "возбуждает", "возбуждают"],
            sound: ['sounds/я тебя хочу.mp3'],
            text: ['Я тебя хочу!'],
            chain: [],
            w: 0.95,
            bw: 0.95
        },
        alo: {
            slova: ["але", "говорите", "ало", "алло", "алле", "слушаю", "привет"],
            sound: [
                ['sounds/привет.mp3'],
            ],
            text: ['Привет!'],
            chain: ['vozr'],
            w: 1.1,
            bw: 1.1
        },
        vozr: {
            slova: ["лет", "возраст"],
            sound: ['sounds/мне 22.mp3'],
            chain: [],
            text: ['Мне 22.'],
            question: ['sounds/чо застеснялся.mp3'],
            w: 0.95,
            bw: 0.95
        },
        kakdela: {
            slova: ["как", "дела", "у", "тебя", "делишки", "рассказывай"],
            sound: ['sounds/та ничо так.mp3'],
            text: ['Да ниче так.'],
            chain: [],
            w: 1,
            bw: 1
        },
        etokto: {
            slova: ["это", "кто", "ну", "это", "ты"],
            sound: [
                ['sounds/ну это я.mp3', 'sounds/ты чо не узнал чтоль.mp3'],
                ['sounds/ты чо не узнал чтоль.mp3'],
                ['sounds/это кристина не узнал.mp3']
            ],
            chain: ["nuktoetoti", "ktoti"],
            text: ['Ты чо не узнал чтоли?!'],
            w: 1,
            bw: 1
        },
        nuktoetoti: {
            slova: ["ну", "кто", "это", "ты", "такая", "не", "знаю", "таких", "что", "за", "кристина"],
            sound: [
                ['sounds/а угадай.mp3'],
                ['sounds/всымсле в прошлый раз.mp3'],
                ['sounds/мы учились вместе.mp3'],
                ['sounds/я помню мы хорошо провел.mp3']
            ],
            text: ['Я помню,мы хорошо провели время!'],
            chain: ["neho4ugadat"],
            w: 0.95,
            bw: 0.95
        },
        ktoti: {
            slova: ["кто", "ты", "не", "узнаю", "тебя", "ну", "говори"],
            sound: [
                ['sounds/а угадай.mp3'],
                ['sounds/ну подумай.mp3'],
                ['sounds/ну догадайся кто ето.mp3']
            ],
            text: ['Ну подумай.'],
            chain: ["neho4ugadat"],
            w: 0.95,
            bw: 0.95
        },
        neho4ugadat: {
            slova: ["не", "хочу", "гадать", "кто", "это", "загадок", "скажи", "ты"],
            sound: [
                ['sounds/так я твоя новая девушка.mp3'],
                ['sounds/ну так то я твоя девушк.mp3'],
                ['sounds/всымсле в прошлый раз.mp3'],
                ['sounds/я помню мы хорошо провел.mp3']
            ],
            text: ['Ну так то я твоя девушка.'],
            chain: [],
            w: 0.95,
            bw: 0.95
        },
        adres: {
            slova: ["любое слово"],
            sound: ['sounds/я живу на строителей.mp3'],
            chain: ["adresvopr"],
            text: ['Я живу на строителей.'],
            w: 1,
            bw: 1
        },
        adresvopr: {
            slova: ["где", "строителей"],
            sound: ['sounds/это в центре.mp3'],
            question: ['sounds/а где ты живеш.mp3'],
            text: ['Это в центре.'],
            chain: [],
            w: 0.95,
            bw: 0.95
        },
        privet: {
            slova: ["привет", "добрый", "день", "здравствуйте", "ну", "слушаю"],
            sound: ['sounds/как дела.mp3'],
            text: ['Как дела.'],
            w: 1,
            bw: 1
        },
        normalnodela: {
            slova: ["хорошо", "нормально", "отлично", "да", "ничего", "так"],
            sound: ['sounds/что делаеш.mp3'],
            text: ['Что делаешь?'],
            w: 1,
            bw: 1
        },
        chtodelaesh: {
            slova: ["ничего", "спал", "только", "пришел", "играл", "тренировался"],
            sound: [
                ['sounds/я тебя не отвлек.mp3', 'sounds/мож пообщаемся.mp3'],
                ['sounds/мож пообщаемся.mp3']
            ],
            text: ['Может пообщаемся?'],
            w: 1,
            bw: 1
        },
        davaipoobc4aemsya: {
            slova: ["давай", "пообщаемся", "хорошо", "ну", "я", "не", "против"],
            sound: [
                ['sounds/расскажи что делал2.mp3'],
                ['sounds/а о чем ты думаеш.mp3']
            ],
            text: ['А о чем ты думаеш?'],
            w: 1,
            bw: 1
        },
        rasskajichtodelal: {
            slova: ["ну", "я", "ничего", "не", "делал", "знаю", "думал", "думаю", "кто", "ты", "такая", "мне", "звонит"],
            sound: [
                ['sounds/я тебя не отвлек.mp3', 'sounds/мож пообщаемся.mp3']
            ],
            w: 1,
            bw: 1
        },
        atichodelala: {
            slova: ["а", "ты", "что", "делала", "теперь", "расскажи"],
            sound: [
                ['sounds/ну встала почистила.mp3', 'sounds/а потом решила пообщаться.mp3']
            ],
            text: ['Ну встала, почистила зубки, а потом решила пообщаться с тобой.'],
            w: 1,
            bw: 1
        },
        kakzovut: {
            slova: ["кто", "зовут", "твое", "имя"],
            sound: [
                ['sounds/а меня зовут марина.mp3'],
                ['sounds/я кристи.mp3'],
                ['sounds/ну подумай.mp3']
            ],
            text: ['А меня зовут Марина.'],
            w: 1,
            bw: 1
        },
        neznau: {
            slova: ["не", "знаю", "таких", "такую", "ни", "какую", "Марину", "Кристину", "Кристи"],
            sound: [
                ['sounds/я хочу с тобой познакомиться.mp3'],
                ['sounds/давай познакомимся.mp3']
            ],
            text: ['Давай познакомимся.'],
            w: 1,
            bw: 1
        },
        mnelet: {
            slova: ["15", "16", "17", "18", "19", "20", "21", "22"],
            sound: ['sounds/ну ты молодой.mp3'],
            text: ['Нуты молодой еще.'],
            w: 1,
            bw: 1
        },
        davai: {
            slova: ["давай", "ну", "познакомимся"],
            sound: ['sounds/а можно нескромный вопрос.mp3'],
            text: ['А можно нескромный вопрос?'],
            chain: ['da'],
            w: 1,
            bw: 1
        },
        da: {
            slova: ["давай", "да", "задавай", "конечно"],
            sound: [
                ['sounds/а скока тебе лет.mp3'],
                ['sounds/слушай а какой размер.mp3'],
                ['sounds/а какая пипка.mp3'],
                ['sounds/а ты пукаешь при близких.mp3'],
                ['sounds/ты со скольки затвор.mp3']
            ],
            text: ['А какая у тебя пипка?'],
            chain: ['mnelet'],
            w: 0.95,
            bw: 0.95
        }

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
        flagpiz = 1;
        WhenMaslenokIsSilent(0, 0);
    });
    annyang.addCallback('result', function(phrases) {
        flagpiz = 0;
        WhenMaslenokIsSilent(0, 0);
        if (mainflag == 0) {
            mainflag = 1;
            for (var i = 0; i < phrases.length; i++) {
                var words = phrases[i].split(" ");
                for (var j = 0; j < words.length; j++) {
                    console.log(words[j]);
                    for (var key in fraz) {
                        var slova = fraz[key].slova;
                        for (var m = 0; m < slova.length; m++) {
                            if (slova[m] === words[j].toLowerCase()) {
                                fraz[key].w += 0.01 / slova.length;
                                console.log(key + " = " + fraz[key].w + "; max = " + maxflag + " " + max + "слово: " + words[j]);
                                if (fraz[key].w > max) {
                                    max = fraz[key].w
                                    maxflag = key;
                                }
                                
                            }
                            
                                if (fraz[key].w > max && slova[0]==='любое слово') {
                                    max = fraz[key].w
                                    maxflag = key;
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
                console.log("ВЫБИРАЕТ ВОПРОС");
                mainflag = 0;
                if (fraz[maxflagb].hasOwnProperty("question")) {
                    console.log("ВОПРОС КАСТОМНЫЙ");
                    WhenMaslenokIsSilent(1, fraz[maxflagb].question);
                } else {
                    console.log("ВОПРОС ЗАГЛУШКА");
                    
                    WhenMaslenokIsSilent(1, 1);
                }
            });


            var bufmsg = maxflag;
            var leftData = "<div class='message left' style='display:none;'><div class='message-text'>" + phrases[0] +
                "</div></div>";
            $(leftData).prependTo('#phone').fadeIn('slow', function() {

                var rightData = "<div class='message right' style='display:none;'><div class='message-text'>" + fraz[bufmsg].text[0] +
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
                if (Array.isArray(fraz[maxflag].chain[sonu])) {
                    console.log(fraz[maxflag].chain[sonu] + " чейн конкретный под звук - " + fraz[maxflag].sound[sonu]);
                    for (var i = 0; i < fraz[maxflag].chain[sonu].length; i++) {
                        console.log("перебирает чейны");
                        if (fraz[fraz[maxflag].chain[sonu][i]]) {
                            console.log("нашел потомка чейна");
                            fraz[fraz[maxflag].chain[sonu][i]].w += 0.2;
                            console.log(fraz[maxflag].chain[sonu] + " " + fraz[fraz[maxflag].chain[sonu][i]].w);
                        }
                    }
                } else {
                    console.log("чейн общий для всех фраз");
                    for (var i = 0; i < fraz[maxflag].chain.length; i++) {
                        console.log("перебирает чейны");
                        if (fraz[fraz[maxflag].chain[i]]) {
                            console.log("нашел потомка чейна");
                            fraz[fraz[maxflag].chain[i]].w += 0.2;
                            console.log(fraz[maxflag].chain + " " + fraz[fraz[maxflag].chain[i]].w);

                        }
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
