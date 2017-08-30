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
            slova: ["ало", "алео", "алло", "да", "слушаю"],
            sound: [
                ['sounds/добрый день.mp3'],
                ['sounds/привет.mp3']
            ],
            text: ['Привет!'],
            chain: ['privet', 'atikomuzvonish'],
            w: 1.1,
            bw: 1.1
        },


        privet: {
            slova: ["привет"],
            sound: ['sounds/как дела.mp3'],
            text: ['Как дела?'],
            chain: ['atvoikak', 'aetokto', 'atikomuzvonish'],
            w: 0.95,
            bw: 0.95
        },


        atikomuzvonish: {
            slova: ["кому", "звонишь"],
            sound: ['sounds/тебе звоню.mp3'],
            text: ['Тебе звоню.'],
            chain: ['komutebe'],
            w: 0.95,
            bw: 0.95
        },


        komutebe: {
            slova: ["кому", "звонишь"],
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
            slova: ["кто", "я"],
            sound: [
                ['sounds/я хочу с тобой познакомиться.mp3', 'sounds/ты что не понял.mp3'],
                ['sounds/я тебя видела в вк.mp3'],
            ],
            text: ['Я хочу с тобой познакомиться, ты что не понял?.'],
            chain: [
                ['davaiznakomitsa', 'nehochetznakomitsa'],
                ['vk']
            ],
            w: 0.95,
            bw: 0.95
        },

        davaiznakomitsa: {
            slova: ["давай", "познакомимся"],
            sound: ['sounds/мальчик как зовут.mp3'],
            text: ['Мальчик как тебя зовут?'],
            chain: ['amenyazovut'],
            w: 0.96,
            bw: 0.96
        },

        amenyazovut: {
            slova: ["любое слово"],
            sound: [
                ['sounds/а меня зовут марина.mp3', 'sounds/очень приятно.mp3'],
                ['sounds/я кристи.mp3', 'sounds/очень приятно.mp3'],
            ],
            text: ['А меня зовут Марина, очень приятно.'],
            chain: ['skokatebelet', 'molodoyeshe'],
            w: 0.95,
            bw: 0.95
        },

        skokatebelet: {
            slova: ["любое слово"],
            sound: ['sounds/а скока тебе лет.mp3'],
            text: ['А скока тебе лет?'],
            chain: ['molodoyeshe'],
            w: 0.96,
            bw: 0.96
        },

        molodoyeshe: {
            slova: ["любое слово"],
            sound: ['sounds/ну ты молодой.mp3'],
            text: ['Ну ты молодой еще.'],
            chain: ['atebeskolkolet', 'uchus', 'rabotayu'],
            question: ['sounds/ты учишьяс или работ.mp3'],
            w: 0.95,
            bw: 0.95
        },

        atebeskolko: {
            slova: ["тебе", "сколько", "лет"],
            sound: ['sounds/не прилично возраст.mp3'],
            text: ['Не прилично возраст спрашивать у девушки.'],
            chain: ['nuskoka'],
            question: ['sounds/мне 22'],
            w: 0.95,
            bw: 0.95
        },

        nuskoka: {
            slova: ["ну", "сколько", "скажи"],
            sound: ['sounds/мне 22.mp3', 'sounds/ты учишьяс или работ.mp3'],
            text: ['Мне 22. Ты учишься или работаешь?'],
            chain: ['uchus', 'rabotayu'],
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
            sound: ['sounds/аа понятно.mp3', 'sounds/какая у тя машина.mp3'],
            text: ['А понятно, а какая у тебя машина?'],
            chain: ['funeudachnik'],
            w: 0.95,
            bw: 0.95
        },


        funeudachnik: {
            slova: ["любое слово"],
            sound: ['sounds/фу неудачник.mp3', 'sounds/а можно нескромный вопрос.mp3'],
            text: ['Фу неудачник, а можно нескромный вопрос?'],
            chain: ['davopros', 'netvopros'],
            w: 0.95,
            bw: 0.95
        },


        netvopros: {
            slova: ["нет", "нельзя"],
            sound: ['sounds/ну а почему нет то.mp3'],
            text: ['Ну а почему нет то?'],
            chain: ['poshelnahuy'],
            w: 0.95,
            bw: 0.95
        },

        davopros: {
            slova: ["да", "давай", "хорошо", "задавай"],
            sound: [
                ['sounds/у тебя есть девушка.mp3', 'sounds/тока не врать.mp3'],
                ['sounds/слушай а какой размер.mp3'],
                ['sounds/а ты девственик.mp3']

            ],
            text: ['Спрашивает какую-то хуйню ;)'],
            chain: [
                ['estdevushka', 'netdevushki'],
                ['eldakcho', 'zachemtebe','eldakrazmer','eldakbezcifr'],
                ['dadevstvennik', 'netdevstvennik', 'devstvennikcho']
            ],
            w: 0.96,
            bw: 0.96
        },
        
        eldakcho: {
            slova: ["че", "чего", "вопрос", "вопросы"],
            sound: ['sounds/ну ванька встанька.mp3'],
            text: ['Ну ванька-встанька.'],
            chain: ['eldakcho2', 'eldakrazmer','eldakbezcifr','zachemtebe','eldakbolshoy'],
            w: 0.95,
            bw: 0.95
        },
        
        eldakcho2: {
            slova: ["че", "чего", "вопрос", "вопросы"],
            sound: ['sounds/ну болт.mp3'],
            text: ['Ну болт.'],
            chain: ['eldakrazmer','eldakbezcifr','zachemtebe','eldakbolshoy'],
            w: 0.95,
            bw: 0.95
        },

        eldakbezcifr: {
            slova: ["нормальный", "хватит",  "маленький"],
            sound: ['sounds/сколько.mp3','sounds/ну подробней.mp3'],
            text: ['Ну ванька-встанька.'],
            chain: [ 'eldakrazmer','zachemtebe','eldakbolshoy'],
            w: 0.95,
            bw: 0.95
        },

        
        eldakrazmer: {
            slova: ["сантиметров", "100", "1000", "1000000", "90", "80", "70", "60", "50", "40", "30", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"],
            sound: ['sounds/ну это маленький.mp3'],
            text: ['Ну это маленький.'],
            chain: [ 'eldakkakoyest'],
            w: 0.95,
            bw: 0.95
        },
      
        eldakbolshoy: {
            slova: ["влезет", "огромный",  "большой"],
            sound: ['sounds/ну по тебе не скаж.mp3'],
            text: ['Ну по тебе не скажешь.'],
            chain: ['yatebyahochu'],
            w: 0.95,
            bw: 0.95
        },
     
        eldakkakoyest: {
            slova: ["любое слово"],
            sound: [
                ['sounds/ну блин жаль.mp3','sounds/а чем ты докажешь.mp3'],
                ['sounds/откуда ты знаешь.mp3']
            ],
            text: ['Ну блин жаль. А чем ты докажешь?'],
            chain: [
                ['yabiposmotrela'],
                ['zachemtebe']
                   ],
            w: 0.95,
            bw: 0.95
        },

        
        zachemtebe: {
            slova: ["любое слово"],
            sound: ['sounds/а что лучше дл или толщ.mp3'],
            text: ['А что лучше, длинна или толщина?'],
            chain: ['yatebyahochu'],
            w: 0.95,
            bw: 0.95
        },

        
        yatebyahochu: {
            slova: ["любое слово"],
            sound: ['sounds/я тебя хочу.mp3','sounds/котик.mp3'],
            text: ['Я тебя хочу. Котик.'],
            question: ['sounds/если ты понимаешь о чем2.mp3'],
            chain: ['nehochetsuka', 'hochettoje'],
            w: 0.95,
            bw: 0.95
        },

        
        nehochetsuka: {
            slova: ["че", "чего", "вопрос", "вопросы"],
            sound: ['sounds/что так испугался то.mp3', 'sounds/ты со скольки затвор.mp3'],
            text: ['Ты со скольки затвор передергиваешь?'],
            chain: ['zatvornedrochu', 'zatvorvozrast'],
            w: 0.95,
            bw: 0.95
        },

        yabiposmotrela: {
            slova: ["любое слово"],
            sound: ['sounds/я бы посмотрела.mp3'],
            text: ['Я бы посмотрела на это.'],
            chain: ['nupriedposmotri'],
            w: 0.95,
            bw: 0.95
        },

        netdevstvennik: {
            slova: ["нет", "не", "неа"],
            sound: ['sounds/а у тя скока девушек было.mp3'],
            text: ['А у тебя сколько девушек было?'],
            chain: ['devushekskolko'],
            w: 0.95,
            bw: 0.95
        },
        
        devushekskolko: {
            slova: ["любое слово"],
            sound: ['sounds/сколько.mp3'],
            text: ['Сколько?'],
            chain: ['devushkailidruzya'],
            w: 0.95,
            bw: 0.95
        },
        
        devushkailidruzya: {
            slova: ["любое слово"],
            sound: ['sounds/ты сможешь отказ от друз.mp3'],
            text: ['Ты сможешь отказаться от друзей ради девушки?'],
            chain: ['devushkakotenok'],
            w: 0.95,
            bw: 0.95
        },
        
        devushkakotenok: {
            slova: ["любое слово"],
            sound: ['sounds/катёнок.mp3'],
            text: ['Котенок.'],
            chain: ['devushkakotenok2'],
            w: 0.95,
            bw: 0.95
        },
        
        devushkakotenok2: {
            slova: ["любое слово"],
            sound: ['sounds/мохнатенький котеноч.mp3'],
            text: ['Мохнатенький котеночек.'],
            chain: ['podmishki'],
            w: 0.95,
            bw: 0.95
        },
        
        podmishki: {
            slova: ["любое слово"],
            sound: ['sounds/а ты бреешь подмышк.mp3'],
            text: ['А ты бреешь подмышки?.'],
            chain: ['podmishkida','podmishkinet'],
            w: 0.95,
            bw: 0.95
        },
        
        podmishkida: {
            slova: ["да","брею", "конечно"],
            sound: ['sounds/а там внизу тоже брееш.mp3'],
            text: ['А там внизу тоже бреешь?.'],
            chain: ['tamvnizuda','tamvnnizunet'],
            w: 0.95,
            bw: 0.95
        },
        
        tamvnizuda: {
            slova: ["да","конечно", "тоже"],
            sound: ['sounds/какой молодец.mp3'],
            text: ['Какой молодец.'],
            chain: ['ktebepodhoditdevushka', 'yaponyalachtonravishsa'],
            w: 0.95,
            bw: 0.95
        },
        
        
        yaponyalachtonravishsa: {
            slova: ["любое слово"],
            sound: ['sounds/я поняла что ты мне нра.mp3'],
            text: ['Я поняла что ты мне нравишься.'],
            chain: ['videlavvk', 'ayatebenrav'],
            w: 0.95,
            bw: 0.95
        },
        
        ayatebenrav: {
            slova: ["любое слово"],
            sound: ['sounds/а я те нравлюсь.mp3'],
            text: ['А я тебе нравлюсь?'],
            chain: ['tichtoblue', 'nravlusda'],
            w: 0.95,
            bw: 0.95
        },
        
        tichtoblue: {
            slova: ["нет","не"],
            sound: ['sounds/ты голубой.mp3'],
            text: ['Ты голубой?'],
            chain: ['negey', 'poshelnahuy'],
            w: 0.95,
            bw: 0.95
        },
        
        
        nravlusda: {
            slova: ["да","нравишься"],
            sound: ['sounds/а что тебе во мне нра.mp3'],
            text: ['А что тебе во мне нравится?'],
            chain: ['yatebyanevidel'],
            w: 0.95,
            bw: 0.95
        },
        
        
        tamvnizunet: {
            slova: ["нет","неа", "не", "скажу"],
            sound: ['sounds/чо ты под дибила косиш.mp3','sounds/ты скрытый гомо.mp3'],
            text: ['Чо ты под дебила косишь? Ты скрытый гомосексуалист?'],
            chain: ['ktebepodhoditdevushka'],
            w: 0.95,
            bw: 0.95
        },
        
        podmishkinet: {
            slova: ["нет","неа", "не", "скажу"],
            sound: ['sounds/чо ты под дибила косиш.mp3','sounds/ты скрытый гомо.mp3'],
            text: ['Чо ты под дебила косишь? Ты скрытый гомосексуалист?'],
            chain: ['ktebepodhoditdevushka'],
            w: 0.95,
            bw: 0.95
        },
        
        ktebepodhoditdevushka: {
            slova: ["нет","неа", "не", "скажу"],
            sound: ['sounds/к тебе подходит девушка.mp3'],
            text: ['К тебе подходит девушка и предлагает пойти с ней. Твои действия?'],
            chain: ['poydusney'],
            w: 0.95,
            bw: 0.95
        },
        
        poydusney: {
            slova: ["пойду", "с", "ней"],
            sound: ['sounds/ну можно попроб.mp3','sounds/я могу к тебе прийти.mp3'],
            text: ['Ну можно попробовать. Я могу к тебе прийти.'],
            chain: ['prihodikomne'],
            w: 0.95,
            bw: 0.95
        },
        
        devstvennikcho: {
            slova: ["че", "чего", "вопрос", "вопросы"],
            sound: ['sounds/что так испугался то.mp3', 'sounds/ты со скольки затвор.mp3'],
            text: ['Ты со скольки затвор передергиваешь?'],
            chain: ['zatvornedrochu', 'zatvorvozrast'],
            w: 0.95,
            bw: 0.95
        },

        dadevstvennik: {
            slova: ["да", "девственник", "дественник"],
            sound: ['sounds/ты со скольки затвор.mp3'],
            text: ['Ты со скольки затвор передергиваешь?'],
            chain: ['zatvormolchit', 'zatvornedrochu', 'zatvorvozrast'],
            w: 0.95,
            bw: 0.95
        },



        zatvormolchit: {
            slova: ["скажу", "дело", "важно", "кого", "чего", "что"],
            sound: ['sounds/занимаешься рукодел.mp3'],
            text: ['Занимаешься рукоделием.'],
            chain: ['zatvormolchit2', 'zatvorvozrast'],
            w: 0.95,
            bw: 0.95
        },


        zatvormolchit2: {
            slova: ["скажу", "дело", "важно", "кого", "чего", "что"],
            sound: ['sounds/ну работ над собой.mp3', 'sounds/если ты понимаешь о чем.mp3'],
            text: ['Ну работаешь над собой. Если ты понимаешь о чем я.'],
            chain: ['zatvormolchit3', 'zatvorvozrast'],
            w: 0.95,
            bw: 0.95
        },

        zatvormolchit3: {
            slova: ["скажу", "дело", "важно", "кого", "чего", "что"],
            sound: ['sounds/душишь одноглаз.mp3', 'sounds/ну теребоньк2.mp3'],
            text: ['Занимаешься рукоделием.'],
            chain: ['zatvorvozrast'],
            w: 0.95,
            bw: 0.95
        },


        zatvornedrochu: {
            slova: ["не", "дрочу"],
            sound: ['sounds/ну по тебе не скаж.mp3'],
            text: ['Ну по тебе не скажешь.'],
            chain: ['yatebyahochu'],
            w: 0.95,
            bw: 0.95
        },

        zatvorvozrast: {
            slova: ["с", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"],
            sound: ['sounds/а как часто ты это.mp3'],
            text: ['А как часто ты это делаешь?'],
            chain: ['yabiposmotrela'],
            w: 0.95,
            bw: 0.95
        },

        estdevushka: {
            slova: ["да", "есть"],
            sound: ['sounds/ну так я она и есть.mp3', 'sounds/а что тебе во мне нра.mp3'],
            text: ['Ну так я она и есть. А что тебе во мне нравится?'],
            chain: ['yatebyanevidel'],
            w: 0.95,
            bw: 0.95
        },

        yatebyanevidel: {
            slova: ["не", "знаю", "видел", "никогда", "незнакомы"],
            sound: ['sounds/увидишь меня при встрече.mp3', 'sounds/давай куда нить сходим.mp3'],
            text: ['Увидишь меня при встрече. Давай куда нить сходим.'],
            chain: ['kudanitshodim'],
            w: 0.95,
            bw: 0.95
        },


        netdevushki: {
            slova: ["нет", "нету", "неважно"],
            sound: [
                ['sounds/а какие тебе девушки нра.mp3'],
                ['sounds/ты голубой.mp3']
            ],
            text: ['А какие тебе девушки нравятся?.'],
            chain: [
                ['netinrav', 'otakyatakaya'],
                ['negey']
            ],
            w: 0.96,
            bw: 0.96
        },

        
        negey: {
            slova: ["нет", "не"],
            sound: ['sounds/ну а почему нет то.mp3'],
            text: ['Ну а почему нет то?.'],
            chain: ['nublinzhal'],
            w: 0.95,
            bw: 0.95
        },


        nublinzhal: {
            slova: ["любое слово"],
            sound: ['sounds/ну блин жаль.mp3', 'sounds/а чем ты докажеш.mp3'],
            text: ['Ну блин жаль. А чем ты докажешь?'],
            chain: ['priezhayposmotri'],
            w: 0.95,
            bw: 0.95
        },


        netinrav: {
            slova: ["не", "ты", "явно"],
            sound: ['sounds/почему.mp3', 'sounds/я нормальная.mp3'],
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
            text: ['Ну предложи ты, мужчина должен быть главным.'],
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
            slova: ["нормально", "ниче", "так", "хорошо", "пойдет"],
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



    };


    var max = 1;
    var maxflag = "aleo";

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

                            if (fraz[key].w > max && slova[0] === 'любое слово') {
                                max = fraz[key].w
                                maxflag = key;
                            }
                        }

                    }

                }


            }
            console.log(maxflag);
            var maxflagb = maxflag;
            var sonu = Math.floor(Math.random() * fraz[maxflag].sound.length);
            if (Array.isArray(fraz[maxflag].sound[sonu])) {
                console.log("признал массивом"  + fraz[maxflag].sound[sonu]);
                audio = new Audio(fraz[maxflag].sound[sonu][0]);
                audio.addEventListener("ended", function() {
                    audio.currentTime = 0;
                    audio = new Audio(fraz[maxflagb].sound[sonu][1]);
                    audio.play();
                    console.log("ended as massiv " + fraz[maxflagb].sound[sonu][1]);
                                    mainflag = 0;

                });
            } else {
                console.log("признал строкой " + fraz[maxflag].sound[sonu]);

                audio = new Audio(fraz[maxflag].sound[0]);
                audio.addEventListener("ended", function() {
                    audio.currentTime = 0;
                    audio = new Audio(fraz[maxflagb].sound[1]);
                    audio.play();
                    console.log("ended as string");
                                    mainflag = 0;

                });
            }
            audio.play();
            audio.addEventListener("ended", function() {
                console.log("ВЫБИРАЕТ ВОПРОС");
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


            fraz[maxflag].bw -= 0.15;
            fraz[maxflag].w = fraz[maxflag].bw;



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
            maxflag = pickRandomProperty(fraz);
            max = fraz[maxflag].w;

            console.log("mainflag " + mainflag);
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
