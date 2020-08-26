function enparts(){
    word = getParameterByName('word')
    part = getParameterByName('part')
    p01 = getverbparts(word,0) 
    p02 = getverbparts(word,1) 
    p03 = getverbparts(word,2) 
    p04 = getverbparts(word,3) 
    p05 = getverbparts(word,4) 
    p06 = getverbparts(word,5) 
    p07 = getverbparts(word,6) 
    p08 = getverbparts(word,7)
    p09 = pluralize(word)
    p10 = possing(word)
    p11 = posplur(word)
    p12 = gradation(word,0)
    p13 = gradation(word,1)
    document.getElementsByTagName('body')[0].innerText = p01 + ";" + p02 + ";" + p03 + ";" + p04 + ";" + p05 + ";" + p06 + ";" + p07 + ";" + p08 + ";" + p09 + ";" + p10 + ";" + p11 + ";" + p12 + ";" + p13 
    if (part == "1") (document.getElementsByTagName('body')[0].innerText = p01)
    else if (part == "2") (document.getElementsByTagName('body')[0].innerText = p02)
    else if (part == "3") (document.getElementsByTagName('body')[0].innerText = p03)
    else if (part == "4") (document.getElementsByTagName('body')[0].innerText = p04)
    else if (part == "5") (document.getElementsByTagName('body')[0].innerText = p05)
    else if (part == "6") (document.getElementsByTagName('body')[0].innerText = p06)
    else if (part == "7") (document.getElementsByTagName('body')[0].innerText = p07)
    else if (part == "8") (document.getElementsByTagName('body')[0].innerText = p08)
    else if (part == "9") (document.getElementsByTagName('body')[0].innerText = p09)
    else if (part == "10") (document.getElementsByTagName('body')[0].innerText = p10)
    else if (part == "11") (document.getElementsByTagName('body')[0].innerText = p11)
    else if (part == "12") (document.getElementsByTagName('body')[0].innerText = p12)
    else if (part == "13") (document.getElementsByTagName('body')[0].innerText = p13)

}

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

function gradation(word,grade){
    var comp = ""
    var sup = ""
    if(syllablecount(word)>2||(endsWith(word,'ing')&&syllablecount(word)>1)||(endsWith(word,'ired'))||(endsWith(word,'ed')&&syllablecount(word)>1)||(endsWith(word,'ent'))||(endsWith(word,'ous'))||(endsWith(word,'ile')&&syllablecount(word)>1)||(endsWith(word,'er'))||(endsWith(word,'ic')&&syllablecount(word)>1||word.split(' ').length>1)){
    comp = "more " + word
    sup = "most " + word
    } else {
    
    if(word !== word.replace(/[bcdfghjklmnpqrstvwxyz][aeiou][bcdfgklmnprstz]$/g)){
    var wordsuffletter = word.substr(word.length-1,1)
    if(wordsuffletter == 'c'){wordsuffletter = 'k'}
    comp =  word + wordsuffletter + 'er'
    sup =  word + wordsuffletter + 'est'
    
    } else {
    if(endsWith(word,'y')){
    comp =  word.substr(0,word.length-1) + 'ier'
    sup =  word.substr(0,word.length-1) + 'iest'
    } else {
    if(endsWith(word,'e')){
    comp = word + 'r'
    sup = word + 'st'    
    } else {
    comp = word + 'er'
    sup = word + 'est'
    }}
    }
    }
    if(word == 'good'){
    comp = 'better'
    sup = 'best'
    }
    
    if(word == 'bad'){
    comp = 'worse'
    sup = 'worst'
    }
    if(word == 'much'){
    comp = 'more'
    sup = 'most'
    }
    if(word == 'many'){
    comp = 'more'
    sup = 'most'
    }
    if(endsWith(sup,'estest')){
    sup=sup.substr(0,sup.length-3)
    }
    
    if (grade == 0){return comp} else {return sup}
    }
    
    function possing(word){
    return word + "'s"
    }
    
    function posplur(word){
    if(endsWith(pluralize(word),'s')){
    return pluralize(word) + "'"
    } else { return pluralize(word) + "'s"}
    }


      function getverbparts(word,pnumber){
      if(word=="to be"){
      word = "be"
      }
      if(word=="it ought"){
        word = "ought"
        }
        if(word=="happens"){
          word = "happen"
          }
      
      word = word.replace(/^it\sis\s/g,'be ')
      
      var preword = word
      word = word.replace(/^it\s([a-zA-Z]*)s/g,'$1')
      
      if(preword != word && endsWith(word,'ie')){
        word=word.substr(0,world.length - 2)
      }
      
      if(word.length>3){
        if(word.substr(0,4) == 'not '){
          word = word.substr(4,word.length - 4) + ' not'
        }
      }
      
      var prefix=''
      
      var q = word.split(' ')
      if(/^(re|dis|over|mis|out|be|co|de|fore|inter|pre|sub|trans|under|un|up|with)/g.test(q[0])){
      prefix = /^(re|dis|over|mis|out|be|co|de|fore|inter|pre|sub|trans|under|un|up|with)/g.exec(q[0])[0]
      if(prefix.length<q[0].length-1){
      q[0] = q[0].replace(/^(re|dis|over|mis|out|be|co|de|fore|inter|pre|sub|trans|under|un|up|with)/g,'')
      } else{prefix=''}
      }  
      word = q[0]
      var partscollection = {"lines":[{"val0":"arise","val1":"arise","val2":"arise","val3":"arises","val4":"arose","val5":"arose","val6":"arisen","val7":"arising"},
      {"val0":"awake","val1":"awake","val2":"awake","val3":"awakes","val4":"awoke","val5":"awoke","val6":"awoken","val7":"awaking"},
      {"val0":"be","val1":"am","val2":"are","val3":"is","val4":"was","val5":"were","val6":"been","val7":"being"},
      {"val0":"bear","val1":"bear","val2":"bear","val3":"bears","val4":"bore","val5":"bore","val6":"borne","val7":"bearing"},
      {"val0":"beat","val1":"beat","val2":"beat","val3":"beats","val4":"beat","val5":"beat","val6":"beaten","val7":"beating"},
      {"val0":"become","val1":"become","val2":"become","val3":"becomes","val4":"became","val5":"became","val6":"become","val7":"becoming"},
      {"val0":"beget","val1":"beget","val2":"beget","val3":"begets","val4":"begot","val5":"begot","val6":"begotten","val7":"begetting"},
      {"val0":"begin","val1":"begin","val2":"begin","val3":"begins","val4":"began","val5":"began","val6":"begun","val7":"beginning"},
      {"val0":"bend","val1":"bend","val2":"bend","val3":"bends","val4":"bent","val5":"bent","val6":"bent","val7":"bending"},
      {"val0":"beset","val1":"beset","val2":"beset","val3":"besets","val4":"beset","val5":"beset","val6":"beset","val7":"besetting"},
      {"val0":"bet","val1":"bet","val2":"bet","val3":"bets","val4":"bet","val5":"bet","val6":"bet","val7":"betting"},
      {"val0":"beware","val1":"beware","val2":"beware","val3":"is wary","val4":"was weary","val5":"were wary","val6":"been wary","val7":"being wary"},
      {"val0":"bid","val1":"bid","val2":"bid","val3":"bids","val4":"bid","val5":"bid","val6":"bid","val7":"bidding"},
      {"val0":"bind","val1":"bind","val2":"bind","val3":"binds","val4":"bound","val5":"bound","val6":"bound","val7":"binding"},
      {"val0":"bite","val1":"bite","val2":"bite","val3":"bites","val4":"bit","val5":"bit","val6":"bitten","val7":"biting"},
      {"val0":"bleed","val1":"bleed","val2":"bleed","val3":"bleeds","val4":"bled","val5":"bled","val6":"bled","val7":"bleeding"},
      {"val0":"blow","val1":"blow","val2":"blow","val3":"blows","val4":"blew","val5":"blew","val6":"blown","val7":"blowing"},
      {"val0":"break","val1":"break","val2":"break","val3":"breaks","val4":"broke","val5":"broke","val6":"broken","val7":"breaking"},
      {"val0":"breed","val1":"breed","val2":"breed","val3":"breeds","val4":"bred","val5":"bred","val6":"bred","val7":"breeding"},
      {"val0":"bring","val1":"bring","val2":"bring","val3":"brings","val4":"brought","val5":"brought","val6":"brought","val7":"bringing"},
      {"val0":"broadcast","val1":"broadcast","val2":"broadcast","val3":"broadcasts","val4":"broadcast","val5":"broadcast","val6":"broadcast","val7":"broadcasting"},
      {"val0":"build","val1":"build","val2":"build","val3":"builds","val4":"built","val5":"built","val6":"built","val7":"building"},
      {"val0":"burn","val1":"burn","val2":"burn","val3":"burns","val4":"burned","val5":"burned","val6":"burned","val7":"burning"},
      {"val0":"burst","val1":"burst","val2":"burst","val3":"bursts","val4":"burst","val5":"burst","val6":"burst","val7":"bursting"},
      {"val0":"buy","val1":"buy","val2":"buy","val3":"buies","val4":"bought","val5":"bought","val6":"bought","val7":"buying"},
      {"val0":"can","val1":"can","val2":"can","val3":"can","val4":"could","val5":"could","val6":"been able","val7":"being able"},
      {"val0":"cast","val1":"cast","val2":"cast","val3":"casts","val4":"cast","val5":"cast","val6":"cast","val7":"casting"},
      {"val0":"catch","val1":"catch","val2":"catch","val3":"catches","val4":"caught","val5":"caught","val6":"caught","val7":"catching"},
      {"val0":"choose","val1":"choose","val2":"choose","val3":"chooses","val4":"chose","val5":"chose","val6":"chosen","val7":"choosing"},
      {"val0":"cling","val1":"cling","val2":"cling","val3":"clings","val4":"clung","val5":"clung","val6":"clung","val7":"clinging"},
      {"val0":"come","val1":"come","val2":"come","val3":"comes","val4":"came","val5":"came","val6":"come","val7":"coming"},
      {"val0":"cost","val1":"cost","val2":"cost","val3":"costs","val4":"cost","val5":"cost","val6":"cost","val7":"costing"},
      {"val0":"creep","val1":"creep","val2":"creep","val3":"creeps","val4":"crept","val5":"crept","val6":"crept","val7":"creeping"},
      {"val0":"cut","val1":"cut","val2":"cut","val3":"cuts","val4":"cut","val5":"cut","val6":"cut","val7":"cutting"},
      {"val0":"deal","val1":"deal","val2":"deal","val3":"deals","val4":"dealt","val5":"dealt","val6":"dealt","val7":"dealing"},
      {"val0":"dig","val1":"dig","val2":"dig","val3":"digs","val4":"dug","val5":"dug","val6":"dug","val7":"digging"},
      {"val0":"dive","val1":"dive","val2":"dive","val3":"dives","val4":"dived","val5":"dived","val6":"dived","val7":"diving"},
      {"val0":"do","val1":"do","val2":"do","val3":"does","val4":"did","val5":"did","val6":"done","val7":"doing"},
      {"val0":"draw","val1":"draw","val2":"draw","val3":"draws","val4":"drew","val5":"drew","val6":"drawn","val7":"drawing"},
      {"val0":"dream","val1":"dream","val2":"dream","val3":"dreams","val4":"dreamed","val5":"dreamed","val6":"dreamt","val7":"dreaming"},
      {"val0":"drink","val1":"drink","val2":"drink","val3":"drinks","val4":"drank","val5":"drank","val6":"drunk","val7":"drinking"},
      {"val0":"drive","val1":"drive","val2":"drive","val3":"drives","val4":"drove","val5":"drove","val6":"driven","val7":"driving"},
      {"val0":"eat","val1":"eat","val2":"eat","val3":"eats","val4":"ate","val5":"ate","val6":"eaten","val7":"eating"},
      {"val0":"equip","val1":"equip","val2":"equip","val3":"equips","val4":"equipped","val5":"equipped","val6":"equipped","val7":"equipping"},
      {"val0":"fall","val1":"fall","val2":"fall","val3":"falls","val4":"fell","val5":"fell","val6":"fallen","val7":"falling"},
      {"val0":"feed","val1":"feed","val2":"feed","val3":"feeds","val4":"fed","val5":"fed","val6":"fed","val7":"feeding"},
      {"val0":"feel","val1":"feel","val2":"feel","val3":"feels","val4":"felt","val5":"felt","val6":"felt","val7":"feeling"},
      {"val0":"fight","val1":"fight","val2":"fight","val3":"fights","val4":"fought","val5":"fought","val6":"fought","val7":"fighting"},
      {"val0":"find","val1":"find","val2":"find","val3":"finds","val4":"found","val5":"found","val6":"found","val7":"finding"},
      {"val0":"flee","val1":"flee","val2":"flee","val3":"flees","val4":"fled","val5":"fled","val6":"fled","val7":"fleeing"},
      {"val0":"fling","val1":"fling","val2":"fling","val3":"flings","val4":"flung","val5":"flung","val6":"flung","val7":"flinging"},
      {"val0":"fly","val1":"fly","val2":"fly","val3":"flies","val4":"flew","val5":"flew","val6":"flown","val7":"flying"},
      {"val0":"forbid","val1":"forbid","val2":"forbid","val3":"forbids","val4":"forbade","val5":"forbade","val6":"forbidden","val7":"forbidding"},
      {"val0":"forget","val1":"forget","val2":"forget","val3":"forgets","val4":"forgot","val5":"forgot","val6":"forgotten","val7":"forgetting"},
      {"val0":"forego","val1":"forego","val2":"forego","val3":"foregoes","val4":"forewent","val5":"forewent","val6":"foregone","val7":"foregoing"},
      {"val0":"forgo","val1":"forgo","val2":"forgo","val3":"forgoes","val4":"forwent","val5":"forwent","val6":"forgone","val7":"forgoing"},
      {"val0":"forgive","val1":"forgive","val2":"forgive","val3":"forgives","val4":"forgave","val5":"forgave","val6":"forgiven","val7":"forgiving"},
      {"val0":"forsake","val1":"forsake","val2":"forsake","val3":"forsakes","val4":"forsook","val5":"forsook","val6":"forsaken","val7":"forsaking"},
      {"val0":"foretell","val1":"foretell","val2":"foretell","val3":"foretells","val4":"foretold","val5":"foretold","val6":"foretold","val7":"foretelling"},
      {"val0":"freeze","val1":"freeze","val2":"freeze","val3":"freezes","val4":"froze","val5":"froze","val6":"frozen","val7":"freezing"},
      {"val0":"get","val1":"get","val2":"get","val3":"gets","val4":"got","val5":"got","val6":"got","val7":"getting"},
      {"val0":"give","val1":"give","val2":"give","val3":"gives","val4":"gave","val5":"gave","val6":"given","val7":"giving"},
      {"val0":"go","val1":"go","val2":"go","val3":"goes","val4":"went","val5":"went","val6":"gone","val7":"going"},
      {"val0":"grind","val1":"grind","val2":"grind","val3":"grinds","val4":"ground","val5":"ground","val6":"ground","val7":"grinding"},
      {"val0":"grow","val1":"grow","val2":"grow","val3":"grows","val4":"grew","val5":"grew","val6":"grown","val7":"growing"},
      {"val0":"hang","val1":"hang","val2":"hang","val3":"hangs","val4":"hung","val5":"hung","val6":"hung","val7":"hanging"},
      {"val0":"have","val1":"have","val2":"have","val3":"has","val4":"had","val5":"had","val6":"had","val7":"having"},
      {"val0":"hear","val1":"hear","val2":"hear","val3":"hears","val4":"heard","val5":"heard","val6":"heard","val7":"hearing"},
      {"val0":"hide","val1":"hide","val2":"hide","val3":"hides","val4":"hid","val5":"hid","val6":"hidden","val7":"hiding"},
      {"val0":"hit","val1":"hit","val2":"hit","val3":"hits","val4":"hit","val5":"hit","val6":"hit","val7":"hitting"},
      {"val0":"hold","val1":"hold","val2":"hold","val3":"holds","val4":"held","val5":"held","val6":"held","val7":"holding"},
      {"val0":"hurt","val1":"hurt","val2":"hurt","val3":"hurts","val4":"hurt","val5":"hurt","val6":"hurt","val7":"hurting"},
      {"val0":"inhabit","val1":"inhabit","val2":"inhabit","val3":"inhabits","val4":"inhabited","val5":"inhabited","val6":"inhabited","val7":"inhabiting"},
      {"val0":"keep","val1":"keep","val2":"keep","val3":"keeps","val4":"kept","val5":"kept","val6":"kept","val7":"keeping"},
      {"val0":"kneel","val1":"kneel","val2":"kneel","val3":"kneels","val4":"knelt","val5":"knelt","val6":"knelt","val7":"kneeling"},
      {"val0":"know","val1":"know","val2":"know","val3":"knows","val4":"knew","val5":"knew","val6":"known","val7":"knowing"},
      {"val0":"lay","val1":"lay","val2":"lay","val3":"lays","val4":"laid","val5":"laid","val6":"laid","val7":"laying"},
      {"val0":"lead","val1":"lead","val2":"lead","val3":"leads","val4":"led","val5":"led","val6":"led","val7":"leading"},
      {"val0":"lean","val1":"lean","val2":"lean","val3":"leans","val4":"leaned","val5":"leaned","val6":"leant","val7":"leaning"},
      {"val0":"leap","val1":"leap","val2":"leap","val3":"leaps","val4":"leapt","val5":"leapt","val6":"leapt","val7":"leaping"},
      {"val0":"learn","val1":"learn","val2":"learn","val3":"learns","val4":"learned","val5":"learned","val6":"learnt","val7":"learning"},
      {"val0":"leave","val1":"leave","val2":"leave","val3":"leaves","val4":"left","val5":"left","val6":"left","val7":"leaving"},
      {"val0":"lend","val1":"lend","val2":"lend","val3":"lends","val4":"lent","val5":"lent","val6":"lent","val7":"lending"},
      {"val0":"let","val1":"let","val2":"let","val3":"lets","val4":"let","val5":"let","val6":"let","val7":"letting"},
      {"val0":"lie","val1":"lie","val2":"lie","val3":"lies","val4":"lay","val5":"lay","val6":"lain","val7":"lying"},
      {"val0":"light","val1":"light","val2":"light","val3":"lights","val4":"lit","val5":"lit","val6":"lit","val7":"lighting"},
      {"val0":"lose","val1":"lose","val2":"lose","val3":"loses","val4":"lost","val5":"lost","val6":"lost","val7":"losing"},
      {"val0":"make","val1":"make","val2":"make","val3":"makes","val4":"made","val5":"made","val6":"made","val7":"making"},
      {"val0":"mean","val1":"mean","val2":"mean","val3":"means","val4":"meant","val5":"meant","val6":"meant","val7":"meaning"},
      {"val0":"meet","val1":"meet","val2":"meet","val3":"meets","val4":"met","val5":"met","val6":"met","val7":"meeting"},
      {"val0":"mow","val1":"mow","val2":"mow","val3":"mows","val4":"mowed","val5":"mowed","val6":"mown","val7":"mowing"},
      {"val0":"have to","val1":"have to","val2":"have to","val3":"ought","val4":"had to","val5":"had to","val6":"had to","val7":"having to"},
      {"val0":"pay","val1":"pay","val2":"pay","val3":"pays","val4":"paid","val5":"paid","val6":"paid","val7":"paying"},
      {"val0":"plead","val1":"plead","val2":"plead","val3":"pleads","val4":"pleaded","val5":"pleaded","val6":"pleaded","val7":"pleading"},
      {"val0":"ought","val1":"ought","val2":"ought","val3":"ought","val4":"needed to","val5":"needed to","val6":"needed to","val7":"needing to"},
      {"val0":"prove","val1":"prove","val2":"prove","val3":"proves","val4":"proved","val5":"proved","val6":"proved","val7":"proving"},
      {"val0":"put","val1":"put","val2":"put","val3":"puts","val4":"put","val5":"put","val6":"put","val7":"putting"},
      {"val0":"quit","val1":"quit","val2":"quit","val3":"quits","val4":"quit","val5":"quit","val6":"quit","val7":"quitting"},
      {"val0":"read","val1":"read","val2":"read","val3":"reads","val4":"read","val5":"read","val6":"read","val7":"reading"},
      {"val0":"rid","val1":"rid","val2":"rid","val3":"rids","val4":"rid","val5":"rid","val6":"rid","val7":"ridding"},
      {"val0":"ride","val1":"ride","val2":"ride","val3":"rides","val4":"rode","val5":"rode","val6":"ridden","val7":"riding"},
      {"val0":"ring","val1":"ring","val2":"ring","val3":"rings","val4":"rang","val5":"rang","val6":"rung","val7":"ringing"},
      {"val0":"rise","val1":"rise","val2":"rise","val3":"rises","val4":"rose","val5":"rose","val6":"risen","val7":"rising"},
      {"val0":"run","val1":"run","val2":"run","val3":"runs","val4":"ran","val5":"ran","val6":"run","val7":"running"},
      {"val0":"saw","val1":"saw","val2":"saw","val3":"saws","val4":"sawed","val5":"sawed","val6":"sawn","val7":"sawing"},
      {"val0":"say","val1":"say","val2":"say","val3":"says","val4":"said","val5":"said","val6":"said","val7":"saying"},
      {"val0":"see","val1":"see","val2":"see","val3":"sees","val4":"saw","val5":"saw","val6":"seen","val7":"seeing"},
      {"val0":"seek","val1":"seek","val2":"seek","val3":"seeks","val4":"sought","val5":"sought","val6":"sought","val7":"seeking"},
      {"val0":"sell","val1":"sell","val2":"sell","val3":"sells","val4":"sold","val5":"sold","val6":"sold","val7":"selling"},
      {"val0":"send","val1":"send","val2":"send","val3":"sends","val4":"sent","val5":"sent","val6":"sent","val7":"sending"},
      {"val0":"set","val1":"set","val2":"set","val3":"sets","val4":"set","val5":"set","val6":"set","val7":"setting"},
      {"val0":"sew","val1":"sew","val2":"sew","val3":"sews","val4":"sewed","val5":"sewed","val6":"sewn","val7":"sewing"},
      {"val0":"shake","val1":"shake","val2":"shake","val3":"shakes","val4":"shook","val5":"shook","val6":"shaken","val7":"shaking"},
      {"val0":"shear","val1":"shear","val2":"shear","val3":"shears","val4":"sheared","val5":"sheared","val6":"sheared","val7":"shearing"},
      {"val0":"shed","val1":"shed","val2":"shed","val3":"sheds","val4":"shed","val5":"shed","val6":"shed","val7":"shedding"},
      {"val0":"shine","val1":"shine","val2":"shine","val3":"shines","val4":"shone","val5":"shone","val6":"shone","val7":"shining"},
      {"val0":"shoot","val1":"shoot","val2":"shoot","val3":"shoots","val4":"shot","val5":"shot","val6":"shot","val7":"shootting"},
      {"val0":"show","val1":"show","val2":"show","val3":"shows","val4":"showed","val5":"showed","val6":"shown","val7":"showing"},
      {"val0":"shrink","val1":"shrink","val2":"shrink","val3":"shrinks","val4":"shrank","val5":"shrank","val6":"shrunk","val7":"shrinking"},
      {"val0":"shut","val1":"shut","val2":"shut","val3":"shuts","val4":"shut","val5":"shut","val6":"shut","val7":"shutting"},
      {"val0":"sing","val1":"sing","val2":"sing","val3":"sings","val4":"sang","val5":"sang","val6":"sung","val7":"singing"},
      {"val0":"sink","val1":"sink","val2":"sink","val3":"sinks","val4":"sank","val5":"sank","val6":"sunk","val7":"sinking"},
      {"val0":"sit","val1":"sit","val2":"sit","val3":"sits","val4":"sat","val5":"sun","val6":"sat","val7":"sitting"},
      {"val0":"sleep","val1":"sleep","val2":"sleep","val3":"sleeps","val4":"slept","val5":"slept","val6":"slept","val7":"sleeping"},
      {"val0":"slay","val1":"slay","val2":"slay","val3":"slays","val4":"slew","val5":"slew","val6":"slain","val7":"slaying"},
      {"val0":"slide","val1":"slide","val2":"slide","val3":"slides","val4":"slid","val5":"slid","val6":"slid","val7":"sliding"},
      {"val0":"sling","val1":"sling","val2":"sling","val3":"slings","val4":"slung","val5":"slung","val6":"slung","val7":"slinging"},
      {"val0":"slit","val1":"slit","val2":"slit","val3":"slits","val4":"slit","val5":"slit","val6":"slit","val7":"slitting"},
      {"val0":"smell","val1":"smell","val2":"smell","val3":"smells","val4":"smelled","val5":"smelled","val6":"smelt","val7":"smelling"},
      {"val0":"smite","val1":"smite","val2":"smite","val3":"smites","val4":"smote","val5":"smote","val6":"smitten","val7":"smiting"},
      {"val0":"sow","val1":"sow","val2":"sow","val3":"sows","val4":"sowed","val5":"sowed","val6":"sown","val7":"sowing"},
      {"val0":"speak","val1":"speak","val2":"speak","val3":"speaks","val4":"spoke","val5":"spoke","val6":"spoken","val7":"speaking"},
      {"val0":"speed","val1":"speed","val2":"speed","val3":"speeds","val4":"sped","val5":"sped","val6":"sped","val7":"speeding"},
      {"val0":"spell","val1":"spell","val2":"spell","val3":"spells","val4":"spelt","val5":"spelt","val6":"spelt","val7":"spelling"},
      {"val0":"spend","val1":"spend","val2":"spend","val3":"spends","val4":"spent","val5":"spent","val6":"spent","val7":"spending"},
      {"val0":"spill","val1":"spill","val2":"spill","val3":"spills","val4":"spilled","val5":"spilled","val6":"spilt","val7":"spilling"},
      {"val0":"spin","val1":"spin","val2":"spin","val3":"spins","val4":"spun","val5":"spun","val6":"spun","val7":"spinning"},
      {"val0":"spit","val1":"spit","val2":"spit","val3":"spits","val4":"spat","val5":"spat","val6":"spat","val7":"spitting"},
      {"val0":"split","val1":"split","val2":"split","val3":"splits","val4":"split","val5":"split","val6":"split","val7":"splitting"},
      {"val0":"spoil","val1":"spoil","val2":"spoil","val3":"spoils","val4":"spoiled","val5":"spoiled","val6":"spoilt","val7":"spoilling"},
      {"val0":"spread","val1":"spread","val2":"spread","val3":"spreads","val4":"spread","val5":"spread","val6":"spread","val7":"spreading"},
      {"val0":"spring","val1":"spring","val2":"spring","val3":"springs","val4":"sprang","val5":"sprang","val6":"sprung","val7":"springing"},
      {"val0":"stand","val1":"stand","val2":"stand","val3":"stands","val4":"stood","val5":"stood","val6":"stood","val7":"standing"},
      {"val0":"steal","val1":"steal","val2":"steal","val3":"steals","val4":"stole","val5":"stole","val6":"stolen","val7":"stealing"},
      {"val0":"stick","val1":"stick","val2":"stick","val3":"sticks","val4":"stuck","val5":"stuck","val6":"stuck","val7":"sticking"},
      {"val0":"sting","val1":"sting","val2":"sting","val3":"stings","val4":"stung","val5":"stung","val6":"stung","val7":"stinging"},
      {"val0":"stink","val1":"stink","val2":"stink","val3":"stinks","val4":"stank","val5":"stank","val6":"stunk","val7":"stinking"},
      {"val0":"stride","val1":"stride","val2":"stride","val3":"strides","val4":"strode","val5":"strode","val6":"stridden","val7":"striding"},
      {"val0":"strike","val1":"strike","val2":"strike","val3":"strikes","val4":"struck","val5":"struck","val6":"struck","val7":"striking"},
      {"val0":"strive","val1":"strive","val2":"strive","val3":"strives","val4":"strove","val5":"strove","val6":"striven","val7":"striving"},
      {"val0":"summon","val1":"summon","val2":"summon","val3":"summons","val4":"summoned","val5":"summoned","val6":"summoned","val7":"summoning"},
      {"val0":"swear","val1":"swear","val2":"swear","val3":"swears","val4":"swore","val5":"swore","val6":"sworn","val7":"swearing"},
      {"val0":"sweep","val1":"sweep","val2":"sweep","val3":"sweeps","val4":"swept","val5":"swept","val6":"swept","val7":"sweeping"},
      {"val0":"swell","val1":"swell","val2":"swell","val3":"swells","val4":"swelled","val5":"swelled","val6":"swollen","val7":"swelling"},
      {"val0":"swim","val1":"swim","val2":"swim","val3":"swims","val4":"swam","val5":"swam","val6":"swum","val7":"swimming"},
      {"val0":"swing","val1":"swing","val2":"swing","val3":"swings","val4":"swung","val5":"swung","val6":"swung","val7":"swinging"},
      {"val0":"take","val1":"take","val2":"take","val3":"takes","val4":"took","val5":"took","val6":"taken","val7":"taking"},
      {"val0":"teach","val1":"teach","val2":"teach","val3":"teachs","val4":"taught","val5":"taught","val6":"taught","val7":"teaching"},
      {"val0":"tear","val1":"tear","val2":"tear","val3":"tears","val4":"tore","val5":"tore","val6":"torn","val7":"tearing"},
      {"val0":"tell","val1":"tell","val2":"tell","val3":"tells","val4":"told","val5":"told","val6":"told","val7":"telling"},
      {"val0":"think","val1":"think","val2":"think","val3":"thinks","val4":"thought","val5":"thought","val6":"thought","val7":"thinking"},
      {"val0":"thrive","val1":"thrive","val2":"thrive","val3":"thrives","val4":"thrived","val5":"thrived","val6":"thrived","val7":"thriving"},
      {"val0":"throw","val1":"throw","val2":"throw","val3":"throws","val4":"threw","val5":"threw","val6":"thrown","val7":"throwing"},
      {"val0":"thrust","val1":"thrust","val2":"thrust","val3":"thrusts","val4":"thrust","val5":"thrust","val6":"thrust","val7":"thrusting"},
      {"val0":"tread","val1":"tread","val2":"tread","val3":"treads","val4":"trod","val5":"trod","val6":"trodden","val7":"treading"},
      {"val0":"value","val1":"value","val2":"value","val3":"values","val4":"valued","val5":"valued","val6":"valued","val7":"valuing"},
      {"val0":"visit","val1":"visit","val2":"visit","val3":"visits","val4":"visited","val5":"visited","val6":"visited","val7":"visiting"},
      {"val0":"wake","val1":"wake","val2":"wake","val3":"wakes","val4":"woke","val5":"woke","val6":"woken","val7":"waking"},
      {"val0":"wear","val1":"wear","val2":"wear","val3":"wears","val4":"wore","val5":"wore","val6":"worn","val7":"wearing"},
      {"val0":"weave","val1":"weave","val2":"weave","val3":"weaves","val4":"wove","val5":"wove","val6":"woven","val7":"weaving"},
      {"val0":"wed","val1":"wed","val2":"wed","val3":"weds","val4":"wedded","val5":"wedded","val6":"wedded","val7":"wedding"},
      {"val0":"weep","val1":"weep","val2":"weep","val3":"weeps","val4":"wept","val5":"wept","val6":"wept","val7":"weeping"},
      {"val0":"win","val1":"win","val2":"win","val3":"wins","val4":"won","val5":"won","val6":"won","val7":"winning"},
      {"val0":"wind","val1":"wind","val2":"wind","val3":"winds","val4":"wound","val5":"wound","val6":"wound","val7":"winding"},
      {"val0":"wring","val1":"wring","val2":"wring","val3":"wrings","val4":"wrung","val5":"wrung","val6":"wrung","val7":"wringing"},
      {"val0":"write","val1":"write","val2":"write","val3":"writes","val4":"wrote","val5":"wrote","val6":"written","val7":"writing"},
      {"val0":"be","val1":"be","val2":"be","val3":"bes","val4":"#VALUE!","val5":"#VALUE!","val6":"#VALUE!","val7":"#VALUE!"}]} 
      
      b = partscollection.lines.length
      partscollection.lines[b-1].val0 = word
      partscollection.lines[b-1].val1 = word
      partscollection.lines[b-1].val2 = word
      if(word == word.replace(/[bcdefgiklmnpqrtvwy]$/g,'')){
      partscollection.lines[b-1].val3 = word + 'es'
      } else {
      partscollection.lines[b-1].val3 = word + 's'
      if(word == word.replace(/[bcdfghjklmnprstvwxz]y/g,'')){} else {
      partscollection.lines[b-1].val3 = word.substr(0,word.length-1) + 'ies'
      }
      
      }
      if(word == word.replace(/[(^)bcdfghjklmnpqrstvwxyz][aeiou][bdfgklmpstz]$/g,'')){
      partscollection.lines[b-1].val4 = word + 'ed'
      if (endsWith(word,'e')){
      partscollection.lines[b-1].val4 = word + 'd'
      }
      if(word == word.replace(/[aeiou]c$/g,'')){} else {
      partscollection.lines[b-1].val4 = word + 'ked'
      }
      } else {
      
      partscollection.lines[b-1].val4 = word + word.substr(word.length-1,1) + 'ed'
      }
      
      if(word == word.replace(/[bcdfghjklmnprstvwxz]y$/g,'')){} else {
      partscollection.lines[b-1].val4 = word.substr(0,word.length-1) + 'ied'
      }
      partscollection.lines[b-1].val5 = partscollection.lines[b-1].val4
      partscollection.lines[b-1].val6 = partscollection.lines[b-1].val5
      if(word == word.replace(/[(^)bcdfghjklmnpqrstvwxyz][aeiou][bdfgklmpstz]$/g,'')){
      if(endsWith(word,'e')){ 
      partscollection.lines[b-1].val7 = word.substr(0,word.length-1) + 'ing'
      } else {
      partscollection.lines[b-1].val7 = word + 'ing'
      
      if(word == word.replace(/[aeiou]c$/g,'')){} else {
      partscollection.lines[b-1].val7 = word + 'king'
      }
      
      }
      
      } else {
      
      partscollection.lines[b-1].val7 = word + word.substr(word.length-1,1) + 'ing'
      }
      if(word == word.replace(/[dlt]ie$/g,'')){} else {
      partscollection.lines[b-1].val7 = word.substr(0,1) + 'ying'
      }
      var addprefix = false
      var partmatched=0
      var verblinenumber
      for (var c=0;c<b-1;c++){
      if(partscollection.lines[c].val0 == prefix + word){
      if(partmatched == 0){
      partmatched= 1
      //return partscollection.lines[c].val1
      verblinenumber=c
      }
      }
      }
      if(partmatched==0)
      for(var c=0;c<b;c++){
      if(prefix+partscollection.lines[c].val0 == prefix + word){
      if(partmatched == 0){
      partmatched= 1
      //return partscollection.lines[c].val1
      verblinenumber=c
      addprefix = true
      }
      }
      
      }
      if(partscollection.lines[verblinenumber].val0 == 'can'){
        partscollection.lines[verblinenumber].val0 = 'be able'
      }
      if(partscollection.lines[verblinenumber].val0 == 'ought'){
        partscollection.lines[verblinenumber].val0 = 'need to'
      }
      if(prefix == 'de'){
      if(partscollection.lines[verblinenumber].val4 == 'lit'){
        partscollection.lines[verblinenumber].val4 = 'lighted'
      }
      
      if(partscollection.lines[verblinenumber].val5 == 'lit'){
        partscollection.lines[verblinenumber].val5 = 'lighted'
      }
      if(partscollection.lines[verblinenumber].val6 == 'lit'){
        partscollection.lines[verblinenumber].val6 = 'lighted'
      }
      }
      
      if(pnumber==0){
      q[0] = partscollection.lines[verblinenumber].val0
      }
      if(pnumber==1){
      q[0] = partscollection.lines[verblinenumber].val1
      }
      if(pnumber==2){
      q[0] = partscollection.lines[verblinenumber].val2
      }
      if(pnumber==3){
      q[0] = partscollection.lines[verblinenumber].val3
      }
      if(pnumber==4){
      q[0] = partscollection.lines[verblinenumber].val4
      }
      if(pnumber==5){
      q[0] = partscollection.lines[verblinenumber].val5
      }
      if(pnumber==6){
      q[0] = partscollection.lines[verblinenumber].val6
      }
      if(pnumber==7){
      q[0] =  partscollection.lines[verblinenumber].val7
      }
      if(addprefix == true){
      q[0] = prefix + q[0]
      }
      return q.join(" ")
      }
      function syllablecount(word){
      word = word.replace(/[^aeiouy][^aeiouy]ed$/g,'CVC')
      word = word.replace(/[^aeiouy]le$/g,'CVC')
      word = word.replace(/creat/g,"CVCVC")
      if(endsWith(word,'ted')||endsWith(word,'ded')){
      word = word.substr(0,word.length-3) + 'CVC'
      }
      if (endsWith(word, 'ed')){
      word = word.substr(0,word.length-2)
      }
      word = word.replace(/[aeiou]v[rl]y$/g,'VCV')
      word = word.replace(/[aeiou]ve[rl]y$/g,'VCV')
      word = word.replace(/[^aeiouV]ia[^aeiouV]/g,'CVCVC')
      word = word.replace(/[^aeiouV]ua[^aeiouV]/g,'CVCVC')
      word = word.replace(/[^aeiouV]y[aeiou]/g,'CVCV')
      if(endsWith(word,'e')){
      word=word.substr(0,word.length-1)
      }
      word = word.replace(/[^aeiouV]y$/g,'CV')
      word = word.replace(/[^aeiouV]y[^aeiouV]/g,'CVC')
      word = word.replace(/[aeiou]/g,'V')
      word = word.replace(/[^aeiouV]/g,'C')
      word = word.replace(/VV/g,'V')
      word = word.replace(/VV/g,'V')
      word = word.replace(/VV/g,'V')
      word = word.replace(/CC/g,'C')
      word = word.replace(/CC/g,'C')
      word = word.replace(/CC/g,'C')
      var sc = word.length - word.replace(/V/g,'').length
      if (sc==0){sc = 1}
      return sc
      }
      function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
      }

      
(function (root, pluralize) {
    /* istanbul ignore else */
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
      // Node.
      module.exports = pluralize();
    } else if (typeof define === 'function' && define.amd) {
      // AMD, registers as an anonymous module.
      define(function () {
        return pluralize();
      });
    } else {
      // Browser global.
      root.pluralize = pluralize();
    }
    })(this, function () {
    // Rule storage - pluralize and singularize need to be run sequentially,
    // while other rules can be optimized using an object for instant lookups.
    var pluralRules = [];
    var singularRules = [];
    var uncountables = {};
    var irregularPlurals = {};
    var irregularSingles = {};
    
    /**
     * Title case a string.
     *
     * @param  {string} str
     * @return {string}
     */
    function toTitleCase (str) {
      return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    }
    
    /**
     * Sanitize a pluralization rule to a usable regular expression.
     *
     * @param  {(RegExp|string)} rule
     * @return {RegExp}
     */
    function sanitizeRule (rule) {
      if (typeof rule === 'string') {
        return new RegExp('^' + rule + '$', 'i');
      }
    
      return rule;
    }
    
    /**
     * Pass in a word token to produce a function that can replicate the case on
     * another word.
     *
     * @param  {string}   word
     * @param  {string}   token
     * @return {Function}
     */
    function restoreCase (word, token) {
      // Tokens are an exact match.
      if (word === token) {
        return token;
      }
    
      // Upper cased words. E.g. "HELLO".
      if (word === word.toUpperCase()) {
        return token.toUpperCase();
      }
    
      // Title cased words. E.g. "Title".
      if (word[0] === word[0].toUpperCase()) {
        return toTitleCase(token);
      }
    
      // Lower cased words. E.g. "test".
      return token.toLowerCase();
    }
    
    /**
     * Interpolate a regexp string.
     *
     * @param  {string} str
     * @param  {Array}  args
     * @return {string}
     */
    function interpolate (str, args) {
      return str.replace(/\$(\d{1,2})/g, function (match, index) {
        return args[index] || '';
      });
    }
    
    /**
     * Sanitize a word by passing in the word and sanitization rules.
     *
     * @param  {string}   token
     * @param  {string}   word
     * @param  {Array}    collection
     * @return {string}
     */
    function sanitizeWord (token, word, collection) {
      // Empty string or doesn't need fixing.
      if (!token.length || uncountables.hasOwnProperty(token)) {
        return word;
      }
    
      var len = collection.length;
    
      // Iterate over the sanitization rules and use the first one to match.
      while (len--) {
        var rule = collection[len];
    
        // If the rule passes, return the replacement.
        if (rule[0].test(word)) {
          return word.replace(rule[0], function (match, index, word) {
            var result = interpolate(rule[1], arguments);
    
            if (match === '') {
              return restoreCase(word[index - 1], result);
            }
    
            return restoreCase(match, result);
          });
        }
      }
    
      return word;
    }
    
    /**
     * Replace a word with the updated word.
     *
     * @param  {Object}   replaceMap
     * @param  {Object}   keepMap
     * @param  {Array}    rules
     * @return {Function}
     */
    function replaceWord (replaceMap, keepMap, rules) {
      return function (word) {
        // Get the correct token and case restoration functions.
        var token = word.toLowerCase();
    
        // Check against the keep object map.
        if (keepMap.hasOwnProperty(token)) {
          return restoreCase(word, token);
        }
    
        // Check against the replacement map for a direct word replacement.
        if (replaceMap.hasOwnProperty(token)) {
          return restoreCase(word, replaceMap[token]);
        }
    
        // Run all the rules against the word.
        return sanitizeWord(token, word, rules);
      };
    }
    
    /**
     * Pluralize or singularize a word based on the passed in count.
     *
     * @param  {string}  word
     * @param  {number}  count
     * @param  {boolean} inclusive
     * @return {string}
     */
    function pluralize (word, count, inclusive) {
      var pluralized = count === 1
        ? pluralize.singular(word) : pluralize.plural(word);
    
      return (inclusive ? count + ' ' : '') + pluralized;
    }
    
    /**
     * Pluralize a word.
     *
     * @type {Function}
     */
    pluralize.plural = replaceWord(
      irregularSingles, irregularPlurals, pluralRules
    );
    
    /**
     * Singularize a word.
     *
     * @type {Function}
     */
    pluralize.singular = replaceWord(
      irregularPlurals, irregularSingles, singularRules
    );
    
    /**
     * Add a pluralization rule to the collection.
     *
     * @param {(string|RegExp)} rule
     * @param {string}          replacement
     */
    pluralize.addPluralRule = function (rule, replacement) {
      pluralRules.push([sanitizeRule(rule), replacement]);
    };
    
    /**
     * Add a singularization rule to the collection.
     *
     * @param {(string|RegExp)} rule
     * @param {string}          replacement
     */
    pluralize.addSingularRule = function (rule, replacement) {
      singularRules.push([sanitizeRule(rule), replacement]);
    };
    
    /**
     * Add an uncountable word rule.
     *
     * @param {(string|RegExp)} word
     */
    pluralize.addUncountableRule = function (word) {
      if (typeof word === 'string') {
        uncountables[word.toLowerCase()] = true;
        return;
      }
    
      // Set singular and plural references for the word.
      pluralize.addPluralRule(word, '$0');
      pluralize.addSingularRule(word, '$0');
    };
    
    /**
     * Add an irregular word definition.
     *
     * @param {string} single
     * @param {string} plural
     */
    pluralize.addIrregularRule = function (single, plural) {
      plural = plural.toLowerCase();
      single = single.toLowerCase();
    
      irregularSingles[single] = plural;
      irregularPlurals[plural] = single;
    };
    
    /**
     * Irregular rules.
     */
    [
      // Pronouns.
      ['I', 'we'],
      ['me', 'us'],
      ['he', 'they'],
      ['she', 'they'],
      ['them', 'them'],
      ['myself', 'ourselves'],
      ['yourself', 'yourselves'],
      ['itself', 'themselves'],
      ['herself', 'themselves'],
      ['himself', 'themselves'],
      ['themself', 'themselves'],
      ['is', 'are'],
      ['was', 'were'],
      ['has', 'have'],
      ['this', 'these'],
      ['that', 'those'],
      // Words ending in with a consonant and `o`.
      ['echo', 'echoes'],
      ['dingo', 'dingoes'],
      ['volcano', 'volcanoes'],
      ['tornado', 'tornadoes'],
      ['torpedo', 'torpedoes'],
      // Ends with `us`.
      ['genus', 'genera'],
      ['viscus', 'viscera'],
      // Ends with `ma`.
      ['stigma', 'stigmata'],
      ['stoma', 'stomata'],
      ['dogma', 'dogmata'],
      ['lemma', 'lemmata'],
      ['schema', 'schemata'],
      ['anathema', 'anathemata'],
      // Other irregular rules.
      ['ox', 'oxen'],
      ['axe', 'axes'],
      ['die', 'dice'],
      ['yes', 'yeses'],
      ['foot', 'feet'],
      ['eave', 'eaves'],
      ['goose', 'geese'],
      ['tooth', 'teeth'],
      ['quiz', 'quizzes'],
      ['human', 'humans'],
      ['Roman', 'Romans'],
      ['proof', 'proofs'],
      ['carve', 'carves'],
      ['valve', 'valves'],
      ['looey', 'looies'],
      ['thief', 'thieves'],
      ['groove', 'grooves'],
      ['pickaxe', 'pickaxes'],
      ['whiskey', 'whiskies']
    ].forEach(function (rule) {
      return pluralize.addIrregularRule(rule[0], rule[1]);
    });
    
    /**
     * Pluralization rules.
     */
    [
      [/s?$/i, 's'],
      [/([^aeiou]ese)$/i, '$1'],
      [/(ax|test)is$/i, '$1es'],
      [/(alias|[^aou]us|tlas|gas|ris)$/i, '$1es'],
      [/(e[mn]u)s?$/i, '$1s'],
      [/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i, '$1'],
      [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'],
      [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
      [/(seraph|cherub)(?:im)?$/i, '$1im'],
      [/(her|at|gr)o$/i, '$1oes'],
      [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'],
      [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'],
      [/sis$/i, 'ses'],
      [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
      [/([^aeiouy]|qu)y$/i, '$1ies'],
      [/([^ch][ieo][ln])ey$/i, '$1ies'],
      [/(x|ch|ss|sh|zz)$/i, '$1es'],
      [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
      [/(m|l)(?:ice|ouse)$/i, '$1ice'],
      [/(pe)(?:rson|ople)$/i, '$1ople'],
      [/(child)(?:ren)?$/i, '$1ren'],
      [/eaux$/i, '$0'],
      [/m[ae]n$/i, 'men'],
      ['thou', 'you']
    ].forEach(function (rule) {
      return pluralize.addPluralRule(rule[0], rule[1]);
    });
    
    /**
     * Singularization rules.
     */
    [
      [/s$/i, ''],
      [/(ss)$/i, '$1'],
      [/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(?:sis|ses)$/i, '$1sis'],
      [/(^analy)(?:sis|ses)$/i, '$1sis'],
      [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'],
      [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
      [/ies$/i, 'y'],
      [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, '$1ie'],
      [/\b(mon|smil)ies$/i, '$1ey'],
      [/(m|l)ice$/i, '$1ouse'],
      [/(seraph|cherub)im$/i, '$1'],
      [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i, '$1'],
      [/(e[mn]u)s?$/i, '$1'],
      [/(movie|twelve)s$/i, '$1'],
      [/(cris|test|diagnos)(?:is|es)$/i, '$1is'],
      [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'],
      [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'],
      [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'],
      [/(alumn|alg|vertebr)ae$/i, '$1a'],
      [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
      [/(matr|append)ices$/i, '$1ix'],
      [/(pe)(rson|ople)$/i, '$1rson'],
      [/(child)ren$/i, '$1'],
      [/(eau)x?$/i, '$1'],
      [/men$/i, 'man']
    ].forEach(function (rule) {
      return pluralize.addSingularRule(rule[0], rule[1]);
    });
    
    /**
     * Uncountable rules.
     */
    [
      // Singular words with no plurals.
      'advice',
      'adulthood',
      'agenda',
      'aid',
      'alcohol',
      'ammo',
      'athletics',
      'bison',
      'blood',
      'bream',
      'buffalo',
      'butter',
      'carp',
      'cash',
      'chassis',
      'chess',
      'clothing',
      'commerce',
      'cod',
      'cooperation',
      'corps',
      'digestion',
      'debris',
      'diabetes',
      'energy',
      'equipment',
      'elk',
      'excretion',
      'expertise',
      'flounder',
      'fun',
      'gallows',
      'garbage',
      'graffiti',
      'headquarters',
      'health',
      'herpes',
      'highjinks',
      'homework',
      'housework',
      'information',
      'jeans',
      'justice',
      'kudos',
      'labour',
      'literature',
      'machinery',
      'mackerel',
      'mail',
      'media',
      'mews',
      'more',
      'moose',
      'music',
      'news',
      'pike',
      'plankton',
      'pliers',
      'pollution',
      'premises',
      'rain',
      'research',
      'rice',
      'salmon',
      'scissors',
      'series',
      'sewage',
      'shambles',
      'shrimp',
      'species',
      'staff',
      'swine',
      'trout',
      'traffic',
      'transporation',
      'tuna',
      'wealth',
      'welfare',
      'whiting',
      'wildebeest',
      'wildlife',
      'you',
      // Regexes.
      /pox$/i, // "chickpox", "smallpox"
      /ois$/i,
      /deer$/i, // "deer", "reindeer"
      /fish$/i, // "fish", "blowfish", "angelfish"
      /sheep$/i,
      /measles$/i,
      /[^aeiou]ese$/i // "chinese", "japanese"
    ].forEach(pluralize.addUncountableRule);
    
    return pluralize;
    });