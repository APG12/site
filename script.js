window.onload = function () {
var zaglushki = ['sounds/алё.mp3','sounds/алео.mp3'];

 var timer;
 function WhenMaslenokIsSilent(arg){
   if(arg == 1){
    timer = setTimeout(function() { // init timer with 5 seconds
    var audiosil = new Audio(zaglushki[Math.floor(Math.random()*zaglushki.length)]);
    audiosil.play();
   }, 5000);}
  else if (arg == 0){
   clearTimeout(timer);
  }  
 };
 
WhenMaslenokIsSilent(1);


var fraz = {
 mat:{
      slova:["з*****", "н****" , "е****", "п******", "сука", "в****", "у****", "у******", "о****", "б****", "г*****", "е*****"],
      sound: [['sounds/чо ты обзываеш.mp3'],['sounds/соси небритую жопу.mp3']],
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
    sound:  [['sounds/привет.mp3'],['sounds/соси небритую жопу.mp3']],
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
    slova: ["как", "дела", "у", "тебя", "делишки", "рассказывай"],
    sound: ['sounds/та ничо так.mp3'],
    chain: [],
    w:1
    },
    etokto:{
    slova: ["это", "кто", "ну", "это", "ты"],
    sound: [['sounds/ну это я.mp3','sounds/ты чо не узнал чтоль.mp3'],['sounds/ты чо не узнал чтоль.mp3'],['sounds/это кристина не узнал.mp3']],
    chain: ["nuktoetoti","ktoti"],
    w:1
    },
    nuktoetoti:{
    slova: ["ну", "кто", "это","ты", "такая", "не" ,"знаю", "таких", "что" ,"за" ,"кристина"],
    sound: [['sounds/а угадай.mp3'],['sounds/всымсле в прошлый раз.mp3'],['sounds/мы учились вместе.mp3'],['sounds/я помню мы хорошо провел.mp3']],
    chain: ["neho4ugadat"],
    w:0.99
    },
    ktoti:{
    slova: ["кто", "ты", "не", "узнаю", "тебя", "ну", "говори"],
    sound: [['sounds/а угадай.mp3'],['sounds/ну подумай.mp3'],['sounds/ну догадайся кто ето.mp3']],
    chain: ["neho4ugadat"],
    w:0.99
    },
    neho4ugadat:{
    slova: ["не", "хочу", "гадать", "кто", "это", "загадок", "скажи", "ты"],
    sound: [['sounds/так я твоя новая девушка.mp3'],['sounds/ну так то я твоя девушк.mp3'],['sounds/всымсле в прошлый раз.mp3'],['sounds/я помню мы хорошо провел.mp3']],
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
    slova: ["где","строителей"],
    sound: ['sounds/это в центре.mp3'],
    question:['sounds/а где ты живеш.mp3'],
    chain: [],
    w:1
    },
    privet:{
    slova: ["привет","добрый", "день","здравствуйте","ну","слушаю"],
    sound: ['sounds/как дела.mp3'],
    w:1
    },
    normalnodela:{
    slova: ["хорошо","нормально", "отлично","да","ничего","так"],
    sound: ['sounds/что делаеш.mp3'],
   w:1
    },
    chtodelaesh:{
    slova: ["ничего","спал", "только","пришел","играл","тренировался"],
    sound: [['sounds/я тебя не отвлек.mp3','sounds/мож пообщаемся.mp3'],['sounds/мож пообщаемся.mp3']],
    w:1
    },
    davaipoobc4aemsya:{
    slova: ["давай","пообщаемся", "хорошо","ну","я", "не" ,"против"],
    sound: [['sounds/расскажи что делал2.mp3'],['sounds/а о чем ты думаеш.mp3']],
    w:1
    },
    rasskajichtodelal:{
    slova: ["ну","я","ничего","не","делал","знаю", "думал","думаю","кто","ты", "такая" , "мне", "звонит"],
    sound: [['sounds/я тебя не отвлек.mp3','sounds/мож пообщаемся.mp3']],
    w:1
    },
    atichodelala:{
    slova: ["а","ты", "что","делала","теперь","расскажи"],
    sound: [['sounds/ну встала почистила.mp3','sounds/а потом решила пообщаться.mp3']],
    w:1
    },
    nichegosebe:{
    slova: ["как", "дела", "а", "у", "тебя",  "делишки", "рассказывай"],
    sound: [['sounds/та ничо так.mp3','sounds/нормально.mp3'],['sounds/та ничо так.mp3'],['sounds/нормально.mp3']],
    w:1
    },
    kakzovut:{
    slova: ["кто", "зовут", "твое", "имя"],
    sound: [['sounds/а меня зовут марина.mp3'],['sounds/я кристи.mp3'],['sounds/ну подумай.mp3']],
    w:1
    },
    neznau:{
    slova: ["не", "знаю", "таких", "такую", "ни", "какую", "Марину", "Кристину", "Кристи"],
    sound: [['sounds/я хочу с тобой познакомиться.mp3'],['sounds/давай познакомимся.mp3']],
    w:1
    },
    mnelet:{
    slova: ["15", "16", "17", "18", "19", "20","21", "22"],
    sound: ['sounds/ну ты молодой.mp3'],
    w:1
    },
    davai:{
    slova: ["давай", "ну", "познакомимся"],
    sound: ['sounds/а можно нескромный вопрос.mp3'],
   w:1
    },
    da:{
    slova: ["да", "задавай", "конечно"],
    sound: [['sounds/а скока тебе лет.mp3'],['sounds/слушай а какой размер.mp3'],['sounds/а какая пипка.mp3'],['sounds/а ты пукаешь при близких.mp3'],['sounds/ты со скольки затвор.mp3']],
    chain: ['mnelet'],
     w:
       1
    }
   };  
  
  
    var max = 1;
    var maxflag = "ktoti";
  
  
annyang.debug();
annyang.setLanguage("ru");
annyang.start({ continuous: false });
annyang.addCallback('soundstart', function() {
  console.log('sound detected!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  WhenMaslenokIsSilent(0);
});
 annyang.addCallback('result', function(phrases) {
                 
                for (var i=0; i<phrases.length;i++)
                    {
                        var words = phrases[i].split(" ");
                     for (var j=0; j<words.length;j++)
                      {
   console.log(words[j]);
                        for (var key in fraz) {
                            var slova = fraz[key].slova;
                            for(var m=0; m< slova.length;m++)
                                {   //console.log(wordso[i].words[j].value);
                                    if (slova[m]===words[j].toLowerCase())
                                        {
                                             fraz[key].w += 0.01/slova.length;
                                             console.log(key + " = " +fraz[key].w + "; max = " + maxflag + " "+  max + "слово: " + words[j]);          
                               if (fraz[key].w > max){
                                max = fraz[key].w
                                maxflag = key;
                               }
                                        }               
                                 }
                           
                    }

                               }                         
                              

                }
                                console.log(maxflag);
                                var ai =0;
                                var maxflagb = maxflag;
                                var sonu = Math.floor(Math.random()*fraz[maxflag].sound.length);
                                if (Array.isArray(fraz[maxflag].sound[sonu])){                              
                                 console.log("признал массивом");
                                 audio = new Audio(fraz[maxflag].sound[sonu][0]);
                                 audio.addEventListener("ended", function(){
                                  audio.currentTime = 0;
                                  ai++;
                                  audio = new Audio(fraz[maxflagb].sound[sonu][ai]);
                                  audio.play();
                                  console.log("ended");
                                 }); 
                                }
                                else
                                {
                                 console.log("признал строкой");
                                 
                                 audio = new Audio(fraz[maxflag].sound[ai]);
                                 audio.addEventListener("ended", function(){
                                 audio.currentTime = 0;
                                 ai++;
                                 audio = new Audio(fraz[maxflagb].sound[ai]);
                                 audio.play();
                                 console.log("ended");
                                 }); 
                                }
                                 audio.play();        
                                  audio.addEventListener("ended", function(){WhenMaslenokIsSilent(1)});                              
                                
                               
  var bufmsg = maxflag;
  var leftData = "<div class='message left' style='display:none;'><div class='message-text'>" + phrases[0] +
    "</div></div>";
      $(leftData).prependTo('#phone').fadeIn('slow', function(){
      
   var rightData = "<div class='message right' style='display:none;'><div class='message-text'>" + bufmsg +
    "</div></div>";
      $(rightData).prependTo('#phone').fadeIn('slow');
      });
                
                
                                
                               for (var key in fraz){
                                 fraz[key].w =1;
                               }
                              if (fraz[maxflag].hasOwnProperty("chain"))
                                { console.log("чейн не пустой");
                                for (var i=0; i<fraz[maxflag].chain.length; i++)
                                 { console.log("перебирает чейны");
                                    if (fraz[fraz[maxflag].chain]){
                                     console.log("нашел потомка чейна");
                                    fraz[fraz[maxflag].chain].w += 0.2;
                                    console.log(fraz[maxflag].chain + " " + fraz[fraz[maxflag].chain].w);

                                    }
                                 }

                                }
                               fraz[maxflag].w = 0.95;

                               max = 1;
                               maxflag = pickRandomProperty(fraz);
                               audio = zaglushki[Math.floor(Math.random()*zaglushki.length)];
            });
                    }


function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}

