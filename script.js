window.onload = function () {

 var audio = new Audio('sounds/а во скока.mp3');
audio.play();


var zaglushki =['sounds/чо ты обзываеш.mp3','sounds/я тебя хочу.mp3'];

var fraz = {
 mat:{
      slova:["заебал", "нахуй" , "ебать", "пидарас", "сука", "выебу", "уебок", "ублюдок", "охуел", "блядь", "гандон", "ебаный"],
      sound: ['sounds/чо ты обзываеш.mp3','sounds/соси небритую жопу.mp3'],
      chain: [],
      w: 1
    },
 love:{
     slova: ["девушка","секс","елдак","сиськи","парень","парней","позы","размер", "сексом","возбуждает","возбуждают"],
     sound:  ['sounds/я тебя хочу.mp3'],
     chain: [],
     w:1
    },
  alo:{
    slova: ["але","говорите", "ало","алло","алле","слушаю","привет"],
    sound:  ['sounds/привет.mp3'],
    chain: [],
    w:1.1
     },
  vozr:{
    slova: ["лет","возраст"],
    sound:  ['sounds/мне 22.mp3'],
    chain: [],
    w:1
     },
   kakdela:{
    slova: ["как", "дела", "а", "у", "тебя", "делишки", "рассказывай"],
    sound: ['sounds/та ничо так.mp3'],
    chain: [],
    w:1
    },
    etokto:{
    slova: ["это", "кто", "ну", "кто", "а", "кто", "это", "ты", "кто",],
    sound: ['sounds/ну это я.mp3','sounds/ты чо не узнал чтоль.mp3','sounds/это кристина не узнал.mp3'],
    chain: ["nuktoetoti","ktoti"],
    w:1
    },
    nuktoetoti:{
    slova: ["ну", "кто", "это","ты", "такая", "не" ,"знаю", "таких", "что" ,"за" ,"кристина",  "не знаю"],
    sound: ['sounds/а угадай.mp3','sounds/всымсле в прошлый раз.mp3','sounds/мы учились вместе.mp3','sounds/я помню мы хорошо провел.mp3'],
    chain: ["neho4ugadat"],
    w:0.99
    },
    ktoti:{
    slova: ["кто", "ты", "не", "узнаю", "тебя", "ну", "кто", "ты", "говори", "кто", "ты"],
    sound: ['sounds/а угадай.mp3','sounds/ну подумай.mp3','sounds/ну догадайся кто ето.mp3'],
    chain: ["neho4ugadat"],
    w:0.98
    },
    neho4ugadat:{
    slova: ["не", "хочу", "гадать", "кто", "это", "не", "хочу", "загадок", "скажи", "кто", "ты"],
    sound: ['sounds/так я твоя новая девушка.mp3','sounds/ну так то я твоя девушк.mp3','sounds/всымсле в прошлый раз.mp3','sounds/я помню мы хорошо провел.mp3'],
    chain: [],
    w:0.97
    },
    adres:{
    slova: ["где","находишься","адрес","дом"],
    sound: ['sounds/я живу на строителей.mp3'],
    chain: ["adresvopr"],
    w:1
    },
   adresvopr:{
    slova: ["каких","где","строителей"],
    sound: ['sounds/это в центре.mp3'],
    question:['sounds/а где ты живеш.mp3'],
    chain: [],
    w:1
    },
    privet:{
    slova: ["привет","добрый", "день","здравствуйте","ну","слушаю","привет", "ну", "привет"],
    sound: ['sounds/как дела.mp3'],
    w:1
    },
    normalnodela:{
    slova: ["хорошо","нормально", "отлично","да","ничего","так"],
    sound: ['sounds/что делаеш.mp3'],
   w:1
    },
    chtodelaesh:{
    slova: ["ничего","спал", "только","пришел","играл","тренеровался"],
    sound: ['sounds/я тебя не отвлек.mp3','sounds/мож пообщаемся.mp3'],
    w:1
    },
    davaipoobc4aemsya:{
    slova: ["давай","пообщаемся", "хорошо","ну","давай","я", "не" ,"против"],
    sound: ['sounds/расскажи что делал2.mp3','sounds/а о чем ты думаеш.mp3'],
    w:1
    },
    rasskajichtodelal:{
    slova: ["ну","я","ничего","не","делал","не","знаю", "думал","думаю","кто","ты", "такая" ,"кто", "мне", "звонит"],
    sound: ['sounds/я тебя не отвлек.mp3','sounds/мож пообщаемся.mp3'],
    w:1
    },
    atichodelala:{
    slova: ["а","ты", "что","делала","а","теперь", "ты" ,"расскажи"],
    sound: ['sounds/ну встала почистила.mp3','sounds/а потом решила пообщаться.mp3'],
    w:1
    },
    kakdela:{
    slova: ["как", "дела", "а", "у", "тебя", "как", "как", "делишки", "рассказывай", "как", "дела"],
    sound: ['sounds/та ничо так.mp3'],
    w:1
    },

    nichegosebe:{
    slova: ["как", "дела", "а", "у", "тебя", "как", "как", "делишки", "рассказывай", "как", "дела"],
    sound: ['sounds/та ничо так.mp3','sounds/нормально.mp3'],
    w:1
    },
    kakzovut:{
    slova: ["кто", "зовут", "твое", "имя"],
    sound: ['sounds/а меня зовут марина.mp3','sounds/я кристи.mp3','sounds/ну подумай.mp3'],
    w:1
    },
    neznau:{
    slova: ["не", "знаю", "таких", "такую", "не", "знаю", "ни", "какую", "Марину", "Кристину", "Кристи"],
    sound: ['sounds/я хочу с тобой познакомиться.mp3','sounds/давай познакомимся.mp3'],
    w:1
    },
    mnelet:{
    slova: ["пятнадцать", "шестнадцать", "сменадцать", "восменадцать", "девятнадцать", "двадцать", "а", "тебе"],
    sound: ['sounds/ну ты молодой.mp3'],
    w:1
    },
    davai:{
    slova: ["давай", "ну", "давай", "познакомимся"],
    sound: ['sounds/а можно нескромный вопрос.mp3'],
   w:1
    },
    da:{
    slova: ["да", "задавай", "конечно"],
    sound: ['sounds/а скока тебе лет.mp3','sounds/слушай а какой размер.mp3','sounds/а какая пипка.mp3','sounds/а ты пукаешь при близких.mp3','sounds/ты со скольки затвор.mp3'],
    w:1
    },
    cho:{
    slova: ["как", "дела", "а", "у", "тебя", "как", "как", "делишки", "рассказывай", "как", "дела"],
    sound: ['sounds/та ничо так.mp3.mp3'],
    w:1
    }
    
   }  
  
  
  
  
  
annyang.debug();
annyang.setLanguage("ru");
annyang.start();
annyang.addCallback('soundstart', function() {
  console.log('sound detected');
});

annyang.addCallback('result', function() {
  console.log('sound stopped');
});

annyang.addCallback('result', function(phrases) {
  console.log("I think the user said: ", phrases[0].words[0]);
  console.log("But then again, it could be any of the following: ", phrases);
});
}
