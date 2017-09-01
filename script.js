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
            chain: ['privet', 'atikomuzvonish', 'aetokto'],
            w: 1.1,
            bw: 1.1
        },


        privet: {
            slova: ["привет"],
            sound: ['sounds/как дела.mp3'],
            text: ['Как дела?'],
            chain: ['atvoikak', 'aetokto', 'atikomuzvonish','delatakto'],
            w: 0.95,
            bw: 0.95
        },

        

        aetokto: {
            slova: ["это","кто","ты","такая"],
            sound: [
                ['sounds/ну это я.mp3'],
                ['sounds/узнаешь кто я.mp3']
            ],
            text: ['Ну это я'],
            chain: [
                ['ktoya1'], 
                ['neuznauyu','ugadalblin']
            ],
            w: 0.95,
            bw: 0.95
        },
        
        
        neuznauyu: {
            slova: ["нет","узнаю","не"],
            sound: ['sounds/ты чо не узнал чтоль.mp3','sounds/ну это я.mp3'],
            text: ['Ты че не узнал чтоли?'],
            chain: ['ktoya1'],
            w: 0.95,
            bw: 0.95
        },

        ktoya1: {
            slova: ["кто","я","ты"],
            sound: [
                ['sounds/а угадай.mp3'],
                ['sounds/так я твоя новая девушка.mp3'],
                ['sounds/это кристина не узнал.mp3','sounds/я помню мы хорошо провел.mp3']
             ],
            text: ['А угадай.'],
            chain: [
                ['ugadalname','nehochetugadat'],
                ['taktoyatvoya'],
                ['etokristina']
                   ],
            w: 0.95,
            bw: 0.95
        },
        
        ugadalname: {
            slova: ["алёна", "алён", "алиса", "алина", "настя", "аня", "вика", "даша", "лиза", "ира",  "надя", "полина", "таня", "галя", "юля", "яна", "маша","кристина", "марина", "оля", "света", "катя", "саша", "лена", "люда", "люба", "машка", "дашка", "даша", "наташка", "наташа" ],
            sound:[
                ['sounds/угадал.mp3'],
                ['sounds/угада2.mp3']
                  ],
            text: ['Угадал блин.'],
            chain: ['ichtohochesh'],
            w: 0.95,
            bw: 0.95
        },
         
        nehochetugadat: {
            slova: ["не", "хочу","гадать","угадывать"],
            sound:['sounds/ну догадайся кто ето.mp3'],
            text: ['Ну догадайся кто ето?'],
            chain: ['dogadaysadevishka', 'dogadaysaneznayu','ugadalname', 'amenyazovut1'],
            w: 0.95,
            bw: 0.95
        },
         
           dogadaysaneznayu: {
            slova: ["не", "знаю"],
            sound:['sounds/ну подумай.mp3'],
            text: ['Ну подумай.'],
            chain: ['dogadaysauchilis','ugadalname', 'amenyazovut1'],
            w: 0.95,
            bw: 0.95
        },
        
           dogadaysauchilis: {
            slova: ["думать","говори","ну"],
            sound:['sounds/мы учились вместе.mp3'],
            text: ['Мы учились вместе.'],
            chain: ['ichtohochesh'],
            w: 0.95,
            bw: 0.95
        },
        
        dogadaysadevishka: {
            slova: ["девушка"],
            sound:['sounds/ну так то я твоя девушк.mp3'],
            text: ['Ну так то я твоя девушка.'],
            chain: ['vproshliyraz','ugadalname' ,'amenyazovut1'],
            w: 0.95,
            bw: 0.95
        },
        
        
        taktoyatvoya: {
            slova: ["любое слово"],
            sound:['sounds/ну так то я твоя девушк.mp3'],
            text: ['Ну так то я твоя девушка.'],
            chain: ['vproshliyraz'],
            w: 0.95,
            bw: 0.95
        },
         amenyazovut1: {
            slova: ["имя","зовут"],
            sound: [
                ['sounds/а меня зовут марина.mp3', 'sounds/очень приятно.mp3'],
                ['sounds/я кристи.mp3', 'sounds/очень приятно.mp3'],
            ],
            text: ['А меня зовут Марина, очень приятно.'],
            chain: ['skokatebelet', 'molodoyeshe'],
            w: 0.94,
            bw: 0.94
        },
        
         vproshliyraz: {
            slova: ["любое слово"],
            sound:['sounds/всымсле в прошлый раз.mp3'],
            text: ['Всмысле, в прошлый раз ты себя иначе вел.'],
            chain: ['tambivshayaryadom'],
            w: 0.95,
            bw: 0.95
        },
        
        tambivshayaryadom: {
            slova: ["любое слово"],
            sound:['sounds/там бывшая рядом чтоль.mp3'],
            text: ['Там бывшая рядом что-ли?'],
            chain: ['umenyaestdevushka', 'ichtohochesh'],
            w: 0.95,
            bw: 0.95
        },
        
        etokristina: {
            slova: ["любое слово"],
            sound:['sounds/ну так то я твоя девушк.mp3'],
            text: ['Ну так то я твоя девушка.'],
            question: ['sounds/там бывшая рядом чтоль.mp3'],
            chain: ['umenyaestdevushka', 'ichtohochesh'],
            w: 0.95,
            bw: 0.95
        },
        
        umenyaestdevushka: {
            slova: ["есть","девушка"],
            sound:['sounds/ну так я она и есть.mp3'],
            text: ['Ну так я она и есть.'],
            chain: ['ichtohochesh',],
            w: 0.95,
            bw: 0.95
        },
        
        ichtohochesh: {
            slova: ["любое слово"],
            sound:[
                ['sounds/я хочу с тобой познакомиться.mp3', 'sounds/ты что не понял.mp3'],
                ['sounds/предлагаю заняца.mp3','sounds/хочешь попроб.mp3']    
            ],
            text: ['Я хочу с тобой познакомиться. Ты что не понял?'],
            question: ['sounds/я не шучу серьёзно.mp3'],
            chain:   [
                ['davaiznakomitsa', 'nehochetznakomitsa'],
                ['davaisekas','nehochetznakomitsa']
            ],
            w: 0.95,
            bw: 0.95
        },
        
          davaisekas: {
            slova: ["да","давай","попробуем"],
            sound:['sounds/какие ты позы.mp3'],
            text: ['А какие ты позы предпочитаешь?'],
            chain: ['sekaspozi',],
            w: 0.95,
            bw: 0.95
        },
        
        nehochetznakomitsa: {
            slova: ["нет","не","хочу"],
            sound:['sounds/почему не хочеш знаком.mp3','sounds/ты чо гомик.mp3'],
            text: ['Почему ты не хочешь знакомиться, ты что гомик?.'],
            chain: ['dagomikepte','netnegomikepte'],
            w: 0.95,
            bw: 0.95
        },
        
        dagomikepte: {
            slova: ["да"],
            sound:['sounds/фу неудачник.mp3'],
            text: ['Фу, неудачник.'],
            chain: ['gomikparni'],
            w: 0.95,
            bw: 0.95
        },
        
        gomikparni: {
            slova: ["любой ответ"],
            sound:['sounds/а какие парни те нравяца.mp3'],
            text: ['А какие парни тебе нравятся?'],
            chain: ['poshelnahuy'],
            w: 0.94,
            bw: 0.94
        },
        
        
        netnegomikepte: {
            slova: ["нет","не"],
            sound:['sounds/ну по тебе не скаж.mp3','sounds/а ты бы сходил на свидан.mp3'],
            text: ['Ну по тебе не скажешь, а ты бы сходил на свидание?'],
            chain: ['svidanieda','svidanienet'],
            w: 0.95,
            bw: 0.95
        },
        
          svidanienet: {
            slova: ["нет","не"],
            sound:['sounds/ты скрытый гомо.mp3'],
            text: ['Ты скрытый гомосексуалист?'],
            chain: ['neskritiygomo'],
            w: 0.95,
            bw: 0.95
        },
        
          neskritygomo: {
            slova: ["нет","не"],
            sound:['sounds/давай куда нить сходим.mp3'],
            text: ['Давай куда нить сходим.'],
            chain: ['kudanitshodim'],
            w: 0.95,
            bw: 0.95
        },
        
          svidanieda: {
            slova: ["да","можно","давай","куда"],
            sound:['sounds/ну по тебе не скаж.mp3','sounds/а ты бы сходил на свидан.mp3'],
            text: ['Ну по тебе не скажешь, а ты бы сходил на свидание?'],
            
            w: 0.95,
            bw: 0.95
        },
        
        atvoikak: {
            slova: ["твои","как","тебя"],
            sound: [
                ['sounds/та ничо так.mp3','sounds/что делаеш.mp3'],
                ['sounds/нормально.mp3','sounds/что делаеш.mp3']
            ],
            text: ['Да ниче так. Что делаешь?'],
            chain: ['chtodel-igral', 'chtodel-ostalnoe',],
            w: 0.95,
            bw: 0.95
        },


        delatakto: {
            slova: ["нормально","хорошо","пойдет","так"],
            sound: ['sounds/что делаеш.mp3'],
            text: ['Как дела?'],
            chain: ['chtodeligral', 'chtodelostalnoe', 'aetokto', 'atikomuzvonish'],
            w: 0.95,
            bw: 0.95
        },

        chtodeligral: {
            slova: ["танки","дота","играл","играю"],
            sound: [
                ['sounds/что играть не умееш.mp3'],
                ['sounds/играть не умеет.mp3']
            ],
            text: ['Что играть не умеещь? Пукан бомбанул?'],
            chain: ['chtodelostalnoe'],
            w: 0.95,
            bw: 0.95
        },
            
        
         chtodelostalnoe: {
            slova: ["любое слово"],
            sound: ['sounds/я тебя не отвлек.mp3','sounds/мож пообщаемся.mp3'],
            text: ['Я тебя не отвлекаю? Может пообщаемся?'],
            chain: ['davayobshatsa', 'netobshatsa'],
            w: 0.95,
            bw: 0.95
        },
        
        davayobshatsa: {
            slova: ["давай","нет","пообщаемся"],
            sound: [
                ['sounds/а о чем ты думаеш.mp3'],
                ['sounds/давай познакомимся.mp3']
            ],
            text: ['А о чем ты думаешь сейчас?'],
            chain: [
                ['nichegonehoshrask'],
                ['davaiznakomitsa']
            ],
            w: 0.95,
            bw: 0.95
        },
        
         nichegonehoshrask: {
            slova: ["любое слово"],
            sound: ['sounds/аа понятно.mp3','sounds/ты ничего не хочешь раск.mp3'],
            text: ['А, понятно. Ты ничего не хочешь рассказать?'],
            chain: ['rasskajichtodelalvesden'],
            w: 0.95,
            bw: 0.95
        },
        
        
         rasskajichtodelalvesden: {
            slova: ["любое слово"],
            sound: ['sounds/расскажи что делал2.mp3'],
            text: ['Расскажи что делал весь день.'],
            chain: ['rasskajiveseloe'],
            w: 0.95,
            bw: 0.95
        },
        
         rasskajiveseloe: {
            slova: ["любое слово"],
            sound: ['sounds/расскажи веселое.mp3'],
            text: ['Расскажи что-нибудь веселое.'],
            chain: ['rasskajianekdot'],
            w: 0.95,
            bw: 0.95
        },
                
         rasskajianekdot: {
            slova: ["любое слово"],
            sound: ['sounds/расскажи анекд.mp3'],
            text: ['Расскажи анекдот.'],
            chain: ['anekdot'],
            w: 0.95,
            bw: 0.95
        },
        
         netobshatsa: {
            slova: ["отвлекаешь"],
            sound: ['sounds/а ну лан не буду отвлека.mp3','sounds/расскажи анекд.mp3'],
            text: ['А ну ладно, не буду отвлекать. Расскажи анекдот? ;)'],
            chain: ['anekdot'],
            w: 0.95,
            bw: 0.95
        },
              
         anekdot: {
            slova: ["любое слово"],
            sound: ['sounds/хихи.mp3'],
            text: ['*ржет аки конь*'],
            chain: ['kakayamishca'],
            w: 0.94,
            bw: 0.94
        },
              
        kakayamishca: {
            slova: ["любое слово"],
            sound: ['sounds/какая мышца самая сильн.mp3'],
            text: ['А какая мышца в оргаизме человека самая сильная?'],
            chain: ['ikramishc'],
            w: 0.94,
            bw: 0.94
        },
        
        ikramishc: {
            slova: ["любое слово"],
            sound: ['sounds/ха икроножная мышц.mp3'],
            text: ['Ха! Икроножная мышца!'],
            chain: ['obvilavokrug'],
            w: 0.94,
            bw: 0.94
        },
              
        obvilavokrug: {
            slova: ["любое слово"],
            sound: ['sounds/я тебя обвила вокруг носа.mp3', 'sounds/а можно нескромный вопрос.mp3'],
            text: ['Я тебя обвила вокруг носа. А можно тебе задать нескромный вопрос?'],
            chain: ['davopros','netvopros'],
            w: 0.94,
            bw: 0.94
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
            w: 0.94,
            bw: 0.94
        },

        skokatebelet: {
            slova: ["любое слово"],
            sound: ['sounds/а скока тебе лет.mp3'],
            text: ['А скока тебе лет?'],
            chain: ['molodoyeshe'],
            w: 0.94,
            bw: 0.94
        },

        molodoyeshe: {
            slova: ["любое слово"],
            sound: ['sounds/ну ты молодой.mp3'],
            text: ['Ну ты молодой еще.'],
            chain: ['atebeskolkolet', 'uchus', 'rabotayu'],
            question: ['sounds/ты учишьяс или работ.mp3'],
            w: 0.94,
            bw: 0.94
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
            w: 0.94,
            bw: 0.94
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
            w: 0.94,
            bw: 0.94
        },

        kakayamashina: {
            slova: ["любое слово"],
            sound: ['sounds/аа понятно.mp3', 'sounds/какая у тя машина.mp3'],
            text: ['А понятно, а какая у тебя машина?'],
            chain: ['funeudachnik'],
            w: 0.94,
            bw: 0.94
        },


        funeudachnik: {
            slova: ["любое слово"],
            sound: ['sounds/фу неудачник.mp3', 'sounds/а можно нескромный вопрос.mp3'],
            text: ['Фу неудачник, а можно нескромный вопрос?'],
            chain: ['davopros', 'netvopros'],
            w: 0.94,
            bw: 0.94
        },


        netvopros: {
            slova: ["нет", "нельзя"],
            sound: ['sounds/ну а почему нет то.mp3'],
            text: ['Ну а почему нет то?'],
            chain: ['poshelnahuy'],
            w: 0.94,
            bw: 0.94
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
            w: 0.94,
            bw: 0.94
        },
        
        eldakcho2: {
            slova: ["че", "чего", "вопрос", "вопросы"],
            sound: ['sounds/ну болт.mp3'],
            text: ['Ну болт.'],
            chain: ['eldakrazmer','eldakbezcifr','zachemtebe','eldakbolshoy'],
            w: 0.94,
            bw: 0.94
        },

        eldakbezcifr: {
            slova: ["нормальный", "хватит",  "маленький"],
            sound: ['sounds/сколько.mp3','sounds/ну подробней.mp3'],
            text: ['Ну ванька-встанька.'],
            chain: [ 'eldakrazmer','zachemtebe','eldakbolshoy'],
            w: 0.94,
            bw: 0.94
        },

        
        eldakrazmer: {
            slova: ["сантиметров", "100", "1000", "1000000", "90", "80", "70", "60", "50", "40", "30", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40"],
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
                ['sounds/ну блин жаль.mp3','sounds/а чем ты докажеш.mp3'],
                ['sounds/откуда ты знаешь.mp3']
            ],
            text: ['Ну блин жаль. А чем ты докажешь?'],
            chain: [
                ['yabiposmotrela'],
                ['zachemtebe']
                   ],
            w: 0.94,
            bw: 0.94
        },

        
        zachemtebe: {
            slova: ["любое слово"],
            sound: ['sounds/а что лучше дл или толщ.mp3'],
            text: ['А что лучше, длинна или толщина?'],
            chain: ['yatebyahochu'],
            w: 0.94,
            bw: 0.94
        },

        
        yatebyahochu: {
            slova: ["любое слово"],
            sound: ['sounds/я тебя хочу.mp3','sounds/котик.mp3'],
            text: ['Я тебя хочу. Котик.'],
            question: ['sounds/если ты понимаешь о чем2.mp3'],
            chain: ['nehochetsuka', 'hochettoje'],
            w: 0.94,
            bw: 0.94
        },

        
        nehochetsuka: {
            slova: ["нет", "не","а"],
            sound: ['sounds/ты голубой.mp3'],
            text: ['Ты голубой?'],
            chain: ['negey', 'poshelnahuy'],
            w: 0.95,
            bw: 0.95
        },

        yabiposmotrela: {
            slova: ["любое слово"],
            sound: ['sounds/я бы посмотрела.mp3'],
            text: ['Я бы посмотрела на это.'],
            chain: ['nupriedposmotri'],
            w: 0.94,
            bw: 0.94
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
            w: 0.94,
            bw: 0.94
        },
        
        devushkailidruzya: {
            slova: ["любое слово"],
            sound: ['sounds/ты сможешь отказ от друз.mp3'],
            text: ['Ты сможешь отказаться от друзей ради девушки?'],
            chain: ['devushkakotenok'],
            w: 0.94,
            bw: 0.94
        },
        
        devushkakotenok: {
            slova: ["любое слово"],
            sound: ['sounds/катёнок.mp3'],
            text: ['Котенок.'],
            chain: ['devushkakotenok2'],
            w: 0.94,
            bw: 0.94
        },
        
        devushkakotenok2: {
            slova: ["любое слово"],
            sound: ['sounds/мохнатенький котеноч.mp3'],
            text: ['Мохнатенький котеночек.'],
            chain: ['podmishki'],
            w: 0.94,
            bw: 0.94
        },
        
        podmishki: {
            slova: ["любое слово"],
            sound: ['sounds/а ты бреешь подмышк.mp3'],
            text: ['А ты бреешь подмышки?.'],
            chain: ['podmishkida','podmishkinet'],
            w: 0.94,
            bw: 0.94
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
            w: 0.94,
            bw: 0.94
        },
        
        ayatebenrav: {
            slova: ["любое слово"],
            sound: ['sounds/а я те нравлюсь.mp3'],
            text: ['А я тебе нравлюсь?'],
            chain: ['tichtoblue', 'nravlusda'],
            w: 0.94,
            bw: 0.94
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
            sound: ['sounds/чо ты под дебила косиш.mp3','sounds/ты скрытый гомо.mp3'],
            text: ['Чо ты под дебила косишь? Ты скрытый гомосексуалист?'],
            chain: ['ktebepodhoditdevushka'],
            w: 0.95,
            bw: 0.95
        },
        
        podmishkinet: {
            slova: ["нет","неа", "не", "скажу"],
            sound: ['sounds/чо ты под дебила косиш.mp3','sounds/ты скрытый гомо.mp3'],
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
            sound: ['sounds/что так испугаелся то.mp3', 'sounds/ты со скольки затвор.mp3'],
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
            w: 0.94,
            bw: 0.94
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
            w: 0.94,
            bw: 0.94
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
            w: 0.94,
            bw: 0.94
        },

        yatebyanevidel: {
            slova: ["не", "знаю", "видел", "никогда", "незнакомы"],
            sound: ['sounds/увидишь меня при встрече.mp3', 'sounds/давай куда нить сходим.mp3'],
            text: ['Увидишь меня при встрече. Давай куда нить сходим.'],
            chain: ['kudanitshodim'],
            w: 0.955,
            bw: 0.955
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
            w: 0.95,
            bw: 0.95
        },

        
        negey: {
            slova: ["нет", "не"],
            sound: ['sounds/ну а почему нет то.mp3'],
            text: ['Ну а почему нет то?.'],
            chain: ['nublinzhal'],
            w: 0.94,
            bw: 0.94
        },


        nublinzhal: {
            slova: ["любое слово"],
            sound: ['sounds/ну блин жаль.mp3', 'sounds/а чем ты докажеш.mp3'],
            text: ['Ну блин жаль. А чем ты докажешь?'],
            chain: ['priezhayposmotri'],
            w: 0.94,
            bw: 0.94
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
            w: 0.94,
            bw: 0.94
        },


        kudanitshodim: {
            slova: ["любое слово"],
            sound: [
                ['sounds/можно в кафе.mp3'],
                ['sounds/можно в центре.mp3'],
                ['sounds/давай в тц каком нить.mp3'],
            ],
            text: ['Можно там-то.'],
            chain: [
                ['vcafe'],
                ['vcentre'],
                ['vcentre']
            ],
            w: 0.94,
            bw: 0.94
        },

        vcafe: {
            slova: ["любое слово"],
            sound: ['sounds/ну предложи ты я не оч.mp3'],
            text: ['Ну предложи ты, я не очень разбираюсь.'],
            chain: ['etov20m'],
            w: 0.94,
            bw: 0.94
        },

         vcentre: {
            slova: ["любое слово"],
            sound: ['sounds/ну предложи ты мужчина глав.mp3'],
            text: ['Ну предложи ты, мужчина должен быть главным.'],
            chain: ['etov20m'],
            w: 0.94,
            bw: 0.94
        },


        etov20m: {
            slova: ["любое слово"],
            sound: ['sounds/аа это в 20 минутах.mp3'],
            text: ['А это в 20 минутах от меня.'],
            chain: ['mogucherez30'],
            w: 0.94,
            bw: 0.94
        },


        mogucherez30: {
            slova: ["любое слово"],
            sound: ['sounds/могу через 30 мин.mp3'],
            text: ['Могу через 30 минут.'],
            chain: ['dogovorilis'],
            w: 0.94,
            bw: 0.94
        },



        dogovorilis: {
            slova: ["любое слово"],
            sound: ['sounds/договорились.mp3'],
            text: ['Договорились.'],
            chain: ['yatepozvonutogda'],
            w: 0.94,
            bw: 0.94
        },


        yatepozvonutogda: {
            slova: ["любое слово"],
            sound: ['sounds/я те позвоню тогда.mp3'],
            text: ['Я тебе позвоню тогда.'],
            chain: ['kotik'],
            w: 0.94,
            bw: 0.94
        },

        kotik: {
            slova: ["любое слово"],
            sound: ['sounds/котик.mp3'],
            text: ['Котик <3'],
            question: ['sounds/да пошел тым мудак обьеб.mp3'],
            w: 0.94,
            bw: 0.94
        },


        poshelnahuy: {
            slova: ["любое слово"],
            sound: ['sounds/да пошел ты мудак обьеб.mp3'],
            text: ['Да пошел ты нахуй, мудак объебаный.'],
            chain: ['fartmode'],
            w: 0.94,
            bw: 0.94
        },
        
        
        voprosadres: {
            slova: ["адрес"],
            sound: ['sounds/я живу на строителей.mp3'],
            text: ['Я живу на строителей.'],
            copy: 1,
            chain: ['voprosadres1','voprosadres2','voprosadresgorod'],
            w: 1.2,
            bw: 1.2
        },
        
        voprosadres1: {
            slova: ["точнее","квартира","номер"],
            sound: ['sounds/строителей 25.mp3','sounds/кв 70.mp3'],
            text: ['Строителей 25, квартира 70.'],
            copy: 1,
            chain: ['voprosadres2','voprosadresgorod'],
            w: 0.9,
            bw: 0.9
        },
        
        voprosadres2: {
            slova: ["это","строителей","где","каких","незнаю"],
            sound: ['sounds/это в центре.mp3'],
            text: ['Это в цетре.'],
            copy: 1,
            chain: ['voprosadres1','voprosadresgorod'],
            w: 0.9,
            bw: 0.9
        },
        
         fartmode: {
            slova: ["любое слово"],
            sound: [
                ['sounds/fart-01.mp3'],
                ['sounds/fart-02.mp3'],
                ['sounds/fart-03.mp3'],
                ['sounds/fart-04.mp3'],
                ['sounds/fart-05.mp3'],
                ['sounds/fart-06.mp3'],
                ['sounds/fart-07.mp3'],
                ['sounds/fart-08.mp3'],
                
                   ],
            text: ['ПЕРДЕЖНО-КАРАТЕЛЬНЫЙ РЕЖИМ АКТИВИРОВАН'],
            chain: ['fartmode'],
            w: 0,
            bw: 0
        },
        
 
     
    };

for (var key in fraz) {
    for(var i=0; i<fraz[key].sound.length; i++){

      if (Array.isArray(fraz[key].sound[i])) {
            audio = new Audio();
            audio.addEventListener('canplaythrough', function(){console.log(decodeURIComponent(this.src) + " загружен");});
            audio.src= fraz[key].sound[i][0];  
          if(fraz[key].sound[i][1]){
             audio = new Audio();
             audio.addEventListener('canplaythrough', function(){console.log(decodeURIComponent(this.src) + " загружен");});
             audio.src=fraz[key].sound[i][1]; 
          }
    } else {
      audio = new Audio();
      audio.addEventListener('canplaythrough', function(){console.log(decodeURIComponent(this.src) + " загружен");});
      audio.src=fraz[key].sound[0];
     if(fraz[key].sound[1]){
       audio = new Audio();
       audio.addEventListener('canplaythrough', function(){console.log(decodeURIComponent(this.src) + " загружен");});
       audio.src=fraz[key].sound[1];
     }

    }
        
   }
}
    var chainbuf = [];
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
                   if(fraz[maxflagb].sound[sonu][1]){
                    audio1 = new Audio(fraz[maxflagb].sound[sonu][1]);
                    audio1.addEventListener("ended", function() {
                        console.log("ended as massiv " + fraz[maxflagb].sound[sonu][1]);
                        mainflag = 0;

                    });
                   audio1.play();
                   } else {
                        mainflag =0;
                    }
                    
                    
                });
            } else {
                console.log("признал строкой " + fraz[maxflag].sound[sonu]);

                audio = new Audio(fraz[maxflag].sound[0]);
                audio.addEventListener("ended", function() {
                    audio.currentTime = 0;
                   if(fraz[maxflagb].sound[1]){
                    audio1 = new Audio(fraz[maxflagb].sound[1]);
                    audio1.addEventListener("ended", function() {
                        console.log("ended as stroka " + fraz[maxflagb].sound[1]);
                        mainflag = 0;

                    });
                                       audio1.play();

                   }
                    else{
                          if (!Array.isArray(fraz[maxflagb].sound[sonu])){               
                    mainflag = 0;}
}
                    console.log("ended as string");
                    
              
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
            
            if (fraz[maxflag].hasOwnProperty("copy")){
              if (fraz[maxflag].copy==1){
                 for (var i = 0; i < chainbuf.length; i++){
                   fraz[chainbuf[i]].w += 0.2;
                 }
                 console.log("буфер чейнов - " + chainbuf);

              }
            }else{
              console.log("буфер чейнов - " + chainbuf);
              chainbuf=[];
            }
          
            if (fraz[maxflag].hasOwnProperty("chain")) {
           
                console.log("чейн не пустой");
                if (Array.isArray(fraz[maxflag].chain[sonu])) {
                    console.log(fraz[maxflag].chain[sonu] + " чейн конкретный под звук - " + fraz[maxflag].sound[sonu]);
                    for (var i = 0; i < fraz[maxflag].chain[sonu].length; i++) {
                        console.log("перебирает чейны");
                        if (fraz[fraz[maxflag].chain[sonu][i]]) {
                            console.log("нашел потомка чейна");
                            chainbuf.push(fraz[maxflag].chain[sonu][i]);
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
                            chainbuf.push(fraz[maxflag].chain[i]);
                            fraz[fraz[maxflag].chain[i]].w += 0.2;
                            console.log(fraz[maxflag].chain + " " + fraz[fraz[maxflag].chain[i]].w);

                        }
                    }
                }
                      if (fraz[maxflag].chain[0]=="fartmode")
          {
             fraz[fraz[maxflag].chain[0]].w = 1000;
             fraz[fraz[maxflag].chain[0]].bw = 1000;

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
