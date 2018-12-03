var timer
var remtimer
var optionselement
var tip1shown = 0
var tip2shown = 0
var tip3shown = 0
var formertip

$(function() {
  $( "#sortable" ).sortable(); 
  $( "#sortable" ).disableSelection();
  showtip(1)
});

$( window ).resize(function() {
  resizerow()
});

function updatetext(){
try{
var newtext = getParameterByName('text');
if (newtext.length>0){
document.getElementById("inputtextbox").value = newtext
document.getElementById("sortable").innerHTML = ''
document.getElementById("sentence").innerHTML = ''
input1()

} 

}
catch(err3){}

if(detectmob() == true){
  freezebutton()
}
resizerow()

}
function resizerow(){
  document.getElementById('sortable').style.height = 300
  document.getElementById('textcell').style.height = 300
  document.getElementById('words').style.height = 300
  document.getElementById('linkedtext').style.height = 300
  document.getElementById('menus').style.height = 300
  


var trueheight = document.getElementById('sortablerow').scrollHeight - 10
document.getElementById('sortable').style.height = trueheight
document.getElementById('textcell').style.height = trueheight
document.getElementById('words').style.height = trueheight
document.getElementById('linkedtext').style.height = trueheight
document.getElementById('menus').style.height = trueheight

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

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, false);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url, false);
  } else {
    // CORS not supported.
    return null;
  }
  xhr.setRequestHeader(
    'x-api-key',
    'POIvgqk2ee2GFYC8WAPDU23u8qGLKOeXad6vQo2q')
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.



function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
  
  function clearContents(element) {
    if(document.getElementById("inputtextbox").getAttribute("clicked")=="no"){
      
    element.value = '';
    document.getElementById("inputtextbox").setAttribute("clicked", "yes")
  }
  }
  function detectmob() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
       return true;
     }
    else {
       return false;
     }
   }
  function input1() {
    document.getElementById('linkedtext').setAttribute('selectedsentence','none')
document.getElementById("inputtextbox").value = document.getElementById("inputtextbox").value.replace(/[0-9]/g,'')
document.getElementById("inputtextbox").value = document.getElementById("inputtextbox").value.replace(/\s[\n\r]?[^a-zA-Z][\n\r]?\s/g,'$&'.replace(/[\s\n\r]/g,'')+ ' ')


          var original_string = document.getElementById("inputtextbox").value;
          original_string = original_string.replace(/([\.?!;:]['"]|[\.?!;:])/g,'$&' + '$');
          original_string = original_string.replace(/\n/g,' ')
          original_string = original_string.replace(/[0-9]/g,'');
          original_string = original_string.replace(/\s\s+/g,' ');

          

                var original_textArr = original_string.split("$");

                // Create a sanitized version that removes all punctuation, allowing for each word to be included in an HTML tag
          var sanitized_string = original_string.replace(/[\’\‘,\/#!%\^&\*;:{}=\-_`~()"?']/g,"");
          sanitized_string = sanitized_string.toLowerCase();
          var sanitized_textArr = sanitized_string.split("$");

            var textofinal = '';
            var size = sanitized_textArr.length;

                // Print every word of the original text with a link around it that points to the glossary page for that word
                // The original text is printed to preserve capitalization and punctuation, and the sanitized version is used to build the link
          for (var m = 0; m < size; m++) 
                {
            textofinal = textofinal + '<a formerhtml="" id="sentences' + m + '" onclick="picker(this)" style="cursor:pointer;" class="lsentence">' + original_textArr[m] + '</a> ';
                
           }

          document.getElementById("linkedtext").innerHTML = textofinal
          picker(document.getElementById('sentences0'))

          };
          function picker(element) {
            if(element.parentElement.getAttribute('selectedsentence')!='none'){
              document.getElementById(document.getElementById('linkedtext').getAttribute('selectedsentence')).setAttribute('formerhtml',document.getElementById('sortable').innerHTML)
            }
                element.parentElement.setAttribute('selectedsentence',element.id)
                document.getElementById("sentence").innerHTML = element.innerHTML
lines=document.getElementsByClassName("lsentence");
for (var i = 0 ; i < lines.length; i ++)
lines.item(i).style.color='black';
element.style.color='orange';	
input2()
    };

  function input2() {
                var original_string = document.getElementById("sentence").innerHTML.replace(/^\s/g,'').replace(/\s\s/g,' ').replace(/[\u0101]/g,'a').replace(/[\u0113]/g,'e').replace(/[\u012B]/g,'i').replace(/[\u014D]/g,'o').replace(/[\u016B]/g,'u');
                
                var original_textArr = original_string.split(" ");

            var sanitized_string = original_string.replace(/[\u2018\u2019\.,\/#!$%\^&\*;:{}=\-_`~()"'\?]/g,"").replace(/^\s/g,'').replace(/^\s/g,'').replace(/\s\s/g,' ')
    
            var sanitized_textArr = sanitized_string.split(" ");
  
            var textofinal = '';
            var size = sanitized_textArr.length;

                
          for (var m = 0; m < size; m++) 
                {
              if (original_textArr[m] == "") {
                  
            } else {
             textofinal = textofinal + '<li onmouseup="updatetranslation()" id="word' + m + '" class="ui-state-default ui-sortable-handle"><a id="titleword' + m + '" style="cursor:pointer;" onclick="showoptions(event.srcElement)" parentid="word' + m + '">' + sanitized_textArr[m] + '</a></li> ';
                  
          }
               }
        document.getElementById("sortable").innerHTML = textofinal;
               
        document.getElementById("menus").innerHTML = ""

        if(document.getElementById(document.getElementById('linkedtext').getAttribute('selectedsentence')).getAttribute('formerhtml')!=''){
          document.getElementById('sortable').innerHTML = document.getElementById(document.getElementById('linkedtext').getAttribute('selectedsentence')).getAttribute('formerhtml')
        }
    };
  
function getww(element) {
  showtip(2)
  if(element.tagName.toLowerCase() == 'a' && element.children.length!=1){
    try{
      document.getElementById('selectorbox').outerHTML = ''
      optionselement = ''}
      catch(err){}
      
  document.getElementById("ww").setAttribute('selectedbox',element.getAttribute('parentid'))
  word = document.getElementById(document.getElementById("ww").getAttribute('selectedbox')).getElementsByTagName('a')[0].innerText
  var word2 =word
  if (word2=='a'){word2 = 'ab'}
  if (word2=='e'){word2 = 'ex'}
if (word2=='o'){word2 = 'oh'}
var xhr = createCORSRequest('GET', 'https://y83fv41ys4.execute-api.eu-west-2.amazonaws.com/default/words/' + word2);
if (!xhr) {
  alert('CORS not supported');
  return;
}

// Response handlers.
xhr.onreadystatechange = function() {
   if(xhr.readyState === 4)
      {
          if(xhr.status === 200 || xhr.status == 0)
          {
  var text = xhr.responseText;
  //var title = getTitle(text);
  //alert('Response from CORS request to ' + url + ': ' + title);
  document.getElementById("ww").setAttribute('returnedtext',text)
      }}
};

xhr.send(null);
  
  allText = document.getElementById("ww").getAttribute('returnedtext')
  var wlines = allText.split('\n');
  document.getElementById("ww").innerHTML = ""
  document.getElementById("ww").setAttribute('selectedbox',element.getAttribute('parentid'))
  var index;
  for (index = 2; index < wlines.length; ++index) {
     document.getElementById("ww").innerHTML = document.getElementById("ww").innerHTML + wlines[index] + "<br>";
  }
document.getElementById("ww").innerText = sanitise(word)
document.getElementById("ww").innerHTML = document.getElementById("ww").innerHTML.replace(/\<br\>.?\<br\>/g,'<br>')
try{
  document.getElementById('selectorbox').outerHTML = ''
  optionselement = ''
  }
  catch(err){}
interpretww()}

}


function interpretww() {
try{
var xx = document.getElementById("ww").innerText
xx = xx.replace(/^PACKON.*?;\s*$/gm,'PRON')
document.getElementById("ww").setAttribute("tackon","no")
var wlines = xx.split(/\r?\n/);

var arrayLength = wlines.length;
for (var i = 0; i < arrayLength; i++) {
wlines[i]=wlines[i].replace(/(\[[A-Z]{5}\])\s*(NeoLatin\s*|uncommon\s*|Medieval\s*|Later\s*|Late\s*|veryrare\s*|Archaic\s*|Pliny\s*|rare\s*|uncommon\s*|lesser\s*|Classic\s*|Early\s*)*/g,'$1\n').replace('  ',' ').replace('  ',' ').replace('  ',' ').trim()

}

var wlinetext = wlines.join("$").split("$");



for (var i = 0; i < arrayLength; i++) {
if (typeof wlines[i] === 'string'){
if (wlines[i] !== wlines[i].replace(/;/g,'') )
{
wlines[i] = "3"	
}

}
}


for (var i = 0; i < arrayLength; i++) {
wlines[i] = wlines[i].trim()
wlinetext[i] = wlinetext[i].trim()
if (typeof wlines[i] === 'string'){
if (endsWith(wlines[i],"X]")|| endsWith(wlines[i],"A]")|| endsWith(wlines[i],"B]")|| endsWith(wlines[i],"C]")|| endsWith(wlines[i],"D]")|| endsWith(wlines[i],"E]")|| endsWith(wlines[i],"F]")|| endsWith(wlines[i],"G]")|| endsWith(wlines[i],"H]")|| endsWith(wlines[i],"I]")|| endsWith(wlines[i],"J]")|| endsWith(wlines[i],"K]")|| endsWith(wlines[i],"L]")|| endsWith(wlines[i],"M]")|| endsWith(wlines[i],"N]")|| endsWith(wlines[i],"O]")|| endsWith(wlines[i],"P]")|| endsWith(wlines[i],"Q]")|| endsWith(wlines[i],"R]")|| endsWith(wlines[i],"S]")|| endsWith(wlines[i],"T]")|| endsWith(wlines[i],"U]")|| endsWith(wlines[i],"V]")|| endsWith(wlines[i],"W]")|| endsWith(wlines[i],"Y]")|| endsWith(wlines[i],"Z]"))
{
wlines[i] = "2"	
}
}
}

for (var i = 1; i < arrayLength; i++) {
if (typeof wlines[i] === 'string'){
if (wlines[i-1]=="2" && wlines[i]!== "2" && wlines[i]!== "")
{
wlines[i] = "3"	
}
if (wlines[i]=="*"||wlines[i]=="")
{
wlines[i] = "0"	
}
}
}

for (var i = 0; i < arrayLength; i++) {
if (wlines[i]!="0" && wlines[i]!="2" && wlines[i]!="3"){
wlines[i] = "1"	
}
if(endsWith(wlinetext[i],"TACKON")){
document.getElementById("ww").setAttribute("tackon","yes")
wlines[i]="0"
wlines[i+1]="0"
//Syncop
}
if(wlinetext[i].replace("SUFFIX",'') !== wlinetext[i]){
wlines[i]="0"
}
if(wlinetext[i].replace("Two words",'') !== wlinetext[i]){
wlines[i]="0"
}
if(wlinetext[i].replace("makes SUPER",'') !== wlinetext[i]){
wlines[i]="0"
}
if(wlinetext[i].replace("Converting ADJ to ADV",'') !== wlinetext[i]){
wlines[i]="0"
wlines[i+1] = "1"
wlinetext[i + 1] = wlinetext[i + 1] + ' (from adj)'
}


if(wlinetext[i].substr(0,6)=='Syncop'){
wlines[i]="0"	
}
}

for (var i = 1; i < arrayLength; i++) {
if (wlines[i]=="3" && wlines[i-1]=="3"){
wlines[i] = "0";
wlinetext[i-1] = wlinetext[i-1]	+ ';' + wlinetext[i];
wlinetext[i-1]=wlinetext[i-1].replace(';;',';')
wlinetext[i]="0"
}
}
document.getElementById("menus").innerHTML=''
document.getElementById("menus").innerHTML=document.getElementById("menus").innerHTML + '<table id="menutable"></table>'
for (var i = 0; i < arrayLength; i++) {
if (wlines[i] == "2"){
if (endsWith(wlinetext[i],']')){
wlinetext[i] = wlinetext[i].substr(0,wlinetext[i].length-7)
if(wlinetext[i]==" "){

wlinetext[i]="RELAT"
}
}
document.getElementById("menutable").innerHTML = document.getElementById("menutable").innerHTML +'<tr><td class="entry">' + 'Entry</td><td><wline wtype="entry">' + wlinetext[i] + '</wline></td></tr>'

} 
if (wlines[i] == "3"){
wlinetext[i] = wlinetext[i].replace(/\[.*?\]/g, "", ' ').trim();
wlinetext[i] = wlinetext[i].replace(',',';');
var wlss = wlinetext[i].split(";");
var a = wlss.length
for(var j = 0;j<a;j++){
if (wlss[j].search('/')>-1){
wlss[j] = wlss[j].substr(0,wlss[j].search('/'))
}
}
wlinetext[i] = wlss.join(', ')
if(endsWith(wlinetext[i],', ')){
wlinetext[i] = wlinetext[i].substr(0,wlinetext[i].length-2)

}

document.getElementById("menutable").innerHTML = document.getElementById("menutable").innerHTML +'<tr><td>' + 'Definition</td><td><i><wline wtype="definition">' + wlinetext[i] + '</wline></i></td></tr>'

} 
if (wlines[i] == "1"){
if (endsWith(wlinetext[i],']')){
wlinetext[i] = wlinetext[i].substr(0,wlinetext[i].length-7)
}

document.getElementById("menutable").innerHTML = document.getElementById("menutable").innerHTML +'<tr><td></td><td style="color:blue"><button onclick="selectform(this)" style="background-color:#ffd000; -moz-border-radius:28px; -webkit-border-radius:28px; border-radius:28px; border:1px solid #faaf00; display:inline-block; cursor:pointer; color:#008800; font-family:Arial; font-size:17px; padding:10px 10px; width:160px;	text-decoration:none; text-shadow:0px 1px 0px #00FF00"><wline wtype = "form">' + wlinetext[i] + '</wline></button></td></tr>'

} 

}
document.getElementById("ww").innerHTML = ""

var formnumber = 0
for (var k = 0; k<document.getElementsByTagName("wline").length;k++) {
var ddd = k.toString
document.getElementsByTagName("wline").item(k).setAttribute("linenumber", k)
document.getElementsByTagName("wline").item(k).setAttribute("linenumber", k)
if(document.getElementsByTagName("wline")[k].getAttribute("wtype")=="form") {
  document.getElementsByTagName("wline")[k].setAttribute("formnumber",formnumber)

}
  if(document.getElementsByTagName("wline")[k].getAttribute("wtype")=="form") {
  document.getElementsByTagName("wline")[k].setAttribute("formnumber",formnumber)
  }
  if(document.getElementsByTagName("wline")[k].getAttribute("wtype")=="entry") {
  document.getElementsByTagName("wline")[k].id = "e" + formnumber
  }
  if(document.getElementsByTagName("wline")[k].getAttribute("wtype")=="definition") {
  document.getElementsByTagName("wline")[k].id = "d" + formnumber
  formnumber = formnumber +1
  }

}

for (k = 0; k<document.getElementsByTagName("wline").length;k++){
if(document.getElementsByTagName("wline")[k].getAttribute("wtype")=="form") {
document.getElementsByTagName("wline")[k].setAttribute("definition", document.getElementById('d' + document.getElementsByTagName('wline')[k].getAttribute('formnumber')).innerText)
try{
document.getElementsByTagName("wline")[k].setAttribute("entry", document.getElementById('e' + document.getElementsByTagName('wline')[k].getAttribute('formnumber')).innerText)
}
catch(err) {
document.getElementsByTagName("wline")[k].setAttribute("entry",'')
}
//simplify forms and add grammar attributes
var formwords = document.getElementsByTagName("wline")[k].innerText.split(" ")
for (m=0; m<formwords.length;m++){
if (m==0){
document.getElementsByTagName("wline")[k].setAttribute('word',formwords[m].replace('.','').replace('j','i'))
formwords[m] = ''
}
if (m==1){
document.getElementsByTagName("wline")[k].setAttribute('pos',formwords[m])
if(formwords[m] == 'SUPINE'){
document.getElementsByTagName("wline")[k].setAttribute('mood',formwords[m])
formwords[m] = 'supine'
}
if(formwords[m] == 'GERUNDIVE'){
document.getElementsByTagName("wline")[k].setAttribute('mood',formwords[m])
formwords[m] = 'gerundive'
}
if(formwords[m] == 'GERUND'){
document.getElementsByTagName("wline")[k].setAttribute('mood',formwords[m])
formwords[m] = 'gerund'
}
if(formwords[m] == 'V'){formwords[m] = 'verb'}
if(formwords[m] == 'N'){formwords[m] = 'noun'}
if(formwords[m] == 'ADJ'){formwords[m] = 'adj'}
if(formwords[m] == 'ADV'){formwords[m] = 'adv'}
if(formwords[m] == 'INTERJ'){formwords[m] = 'interjection'}
if(formwords[m] == 'CONJ'){formwords[m] = 'conj'}
if(formwords[m] == 'PRON'){formwords[m] = 'pron'}
if(formwords[m] == 'NUM'){formwords[m] = 'number'}
if(formwords[m] == 'PREP'){formwords[m] = 'preposition'}
if(formwords[m] == 'VPAR'){formwords[m] = 'participle'}
}
if (m==2||m==3){
if(formwords[1] == 'preposition'){
  if(formwords[m] == 'ACC'){formwords[m] = '+acc'}
  if(formwords[m] == 'GEN'){formwords[m] = '+gen'}
  if(formwords[m] == 'DAT'){formwords[m] = '+dat'}
  if(formwords[m] == 'ABL'){formwords[m] = '+abl'}
}
if(formwords[m] == '0'){formwords[m] = ''}
if(formwords[m] == '1'){formwords[m] = ''}
if(formwords[m] == '2'){formwords[m] = ''}
if(formwords[m] == '3'){formwords[m] = ''}
if(formwords[m] == '4'){formwords[m] = ''}
if(formwords[m] == '5'){formwords[m] = ''}
if(formwords[m] == '6'){formwords[m] = ''}
if(formwords[m] == '7'){formwords[m] = ''}
if(formwords[m] == '8'){formwords[m] = ''}
if(formwords[m] == '9'){formwords[m] = ''}
if(formwords[m] == 'POS'){
document.getElementsByTagName("wline")[k].setAttribute('gradation',formwords[m])
formwords[m] = ''
}
if(formwords[m] == 'COMP'){
document.getElementsByTagName("wline")[k].setAttribute('gradation',formwords[m])
formwords[m] = 'comparative'
}
if(formwords[m] == 'SUPER'){
document.getElementsByTagName("wline")[k].setAttribute('gradation',formwords[m])
formwords[m] = 'superlative'
}


}
if (m>3){
if(formwords[m] == '0'){
formwords[m] = ''
document.getElementsByTagName("wline")[k].setAttribute('case',formwords[m])
}
if(formwords[m] == 'NOM'){
formwords[m] = 'nom'
document.getElementsByTagName("wline")[k].setAttribute('case',formwords[m])
}
if(formwords[m] == 'VOC'){
formwords[m] = 'voc'
document.getElementsByTagName("wline")[k].setAttribute('case',formwords[m])
}
if(formwords[m] == 'LOC'){
formwords[m] = 'loc'
document.getElementsByTagName("wline")[k].setAttribute('case',formwords[m])
}
if(formwords[m] == 'NOM'){
formwords[m] = 'nom'
document.getElementsByTagName("wline")[k].setAttribute('case',formwords[m])
}
if(formwords[m] == 'ACC'){
document.getElementsByTagName("wline")[k].setAttribute('case',formwords[m])
formwords[m] = 'acc'
}
if(formwords[m] == 'GEN'){
document.getElementsByTagName("wline")[k].setAttribute('case',formwords[m])
formwords[m] = 'gen'
  }
if(formwords[m] == 'DAT'){
formwords[m] = 'dat'
document.getElementsByTagName("wline")[k].setAttribute('case',formwords[m])
}
if(formwords[m] == 'ABL'){
document.getElementsByTagName("wline")[k].setAttribute('case',formwords[m])
formwords[m] = 'abl'
}	
if(formwords[m] == 'SUPINE'){
document.getElementsByTagName("wline")[k].setAttribute('case',formwords[m])
formwords[m] = 'supine'
}	
if(formwords[m] == 'S'){
document.getElementsByTagName("wline")[k].setAttribute('number',formwords[m])
formwords[m] = 'sing'
}
if(formwords[m] == 'P'){
document.getElementsByTagName("wline")[k].setAttribute('number',formwords[m])
formwords[m] = 'plur'
}
if(formwords[m] == 'PRES'){
document.getElementsByTagName("wline")[k].setAttribute('tense',formwords[m])
formwords[m] = 'pres'
}
if(formwords[m] == 'IMP'){
document.getElementsByTagName("wline")[k].setAttribute('mood',formwords[m])
formwords[m] = 'impv'
}
if(formwords[m] == 'IMPF'){
document.getElementsByTagName("wline")[k].setAttribute('tense',formwords[m])
formwords[m] = 'impf'
}
if(formwords[m] == 'INTERJ'){
document.getElementsByTagName("wline")[k].setAttribute('tense',formwords[m])
formwords[m] = 'interj'
}
if(formwords[m] == 'FUT'){
document.getElementsByTagName("wline")[k].setAttribute('tense',formwords[m])
formwords[m] = 'fut'
}
if(formwords[m] == 'PERF'){
document.getElementsByTagName("wline")[k].setAttribute('tense',formwords[m])
formwords[m] = 'perf'
}
if(formwords[m] == 'PLUP'){
document.getElementsByTagName("wline")[k].setAttribute('tense',formwords[m])
formwords[m] = 'plup'
}
if(formwords[m] == 'FUTP'){
document.getElementsByTagName("wline")[k].setAttribute('tense',formwords[m])
formwords[m] = 'futp'
}
if(formwords[m] == 'ACTIVE'){
document.getElementsByTagName("wline")[k].setAttribute('voice',formwords[m])
formwords[m] = ''
}
if(formwords[m] == 'PASSIVE'&& endsWith(document.getElementsByTagName("wline")[k].getAttribute('entry').trim(),'DEP')==false){
document.getElementsByTagName("wline")[k].setAttribute('voice',formwords[m])
formwords[m] = 'passive'
}
if(formwords[m] == 'PASSIVE'&& endsWith(document.getElementsByTagName("wline")[k].getAttribute('entry').trim(),'DEP')==true){
formwords[m] = ''
}
if(formwords[m] == 'IND'){
document.getElementsByTagName("wline")[k].setAttribute('mood',formwords[m])
formwords[m] = ''
}
if(formwords[m] == 'SUBJ'){
document.getElementsByTagName("wline")[k].setAttribute('mood',formwords[m])
formwords[m] = 'subj'
}
if(formwords[m] == 'SUB'){
document.getElementsByTagName("wline")[k].setAttribute('mood',formwords[m])
formwords[m] = 'subj'
}
if(formwords[m] == 'IMPV'){
document.getElementsByTagName("wline")[k].setAttribute('mood',formwords[m])
formwords[m] = 'imperative'
}
if(formwords[m] == 'INF'){
document.getElementsByTagName("wline")[k].setAttribute('mood',formwords[m])
formwords[m] = 'infinitive'
}
if(formwords[m] == 'VPAR'){
document.getElementsByTagName("wline")[k].setAttribute('mood',PPL)
formwords[m] = 'ppl'
}
if(formwords[m] == 'SUPINE'){
document.getElementsByTagName("wline")[k].setAttribute('mood',formwords[m])
formwords[m] = 'supine'
}
if(formwords[m] == '1'){
document.getElementsByTagName("wline")[k].setAttribute('person',formwords[m])
formwords[m] = '1st'
}
if(formwords[m] == '2'){
document.getElementsByTagName("wline")[k].setAttribute('person',formwords[m])
formwords[m] = '2nd'
}
if(formwords[m] == '3'){
document.getElementsByTagName("wline")[k].setAttribute('person',formwords[m])
formwords[m] = '3rd'
}
if(formwords[m] == 'POS'){
document.getElementsByTagName("wline")[k].setAttribute('gradation',formwords[m])
formwords[m] = ''
}
if(formwords[m] == 'SUPER'){
document.getElementsByTagName("wline")[k].setAttribute('gradation',formwords[m])
formwords[m] = 'superlative'
}
if(formwords[m] == 'COMP'){
document.getElementsByTagName("wline")[k].setAttribute('gradation',formwords[m])
formwords[m] = 'comparative'
}
if(formwords[m] == 'M'){
document.getElementsByTagName("wline")[k].setAttribute('gender',formwords[m])
formwords[m] = 'masc'
}
if(formwords[m] == 'F'){
document.getElementsByTagName("wline")[k].setAttribute('gender',formwords[m])
formwords[m] = 'fem'
}
if(formwords[m] == 'N'){
document.getElementsByTagName("wline")[k].setAttribute('gender',formwords[m])
formwords[m] = 'neut'
}
if(formwords[m] == 'C'){
document.getElementsByTagName("wline")[k].setAttribute('gender',formwords[m])
formwords[m] = 'masc/fem'
}
if(formwords[m] == 'X'){
document.getElementsByTagName("wline")[k].setAttribute('gender',formwords[m])
formwords[m] = ''
}
if(formwords[m] == 'Early'){
formwords[m] = ''
}
if(formwords[m] == 'PP'){
formwords[m] = ''
}
if(formwords[m] == 'PPL'){
formwords[m] = ''
}
}
}


document.getElementsByTagName("wline")[k].innerText = formwords.join(' ').replace('  ',' ').replace('  ',' ').replace('  ',' ').replace('  ',' ').replace(' pres infinitive',' infinitive')
if(document.getElementsByTagName("wline")[k].getAttribute('pos')=='VPAR'){
if(document.getElementsByTagName("wline")[k].getAttribute('tense')=='FUT'){
document.getElementsByTagName("wline")[k].setAttribute('pos','FUTPPL')
document.getElementsByTagName("wline")[k].innerText = document.getElementsByTagName("wline")[k].innerText.replace(' fut',' ')
document.getElementsByTagName("wline")[k].innerText = document.getElementsByTagName("wline")[k].innerText.replace('participle','fut participle')
}
if(document.getElementsByTagName("wline")[k].getAttribute('tense')=='PRES'){
document.getElementsByTagName("wline")[k].setAttribute('pos','PRPPL')
document.getElementsByTagName("wline")[k].innerText = document.getElementsByTagName("wline")[k].innerText.replace(' pres',' ')
document.getElementsByTagName("wline")[k].innerText = document.getElementsByTagName("wline")[k].innerText.replace('participle','pres participle')
}
if(document.getElementsByTagName("wline")[k].getAttribute('tense')=='PERF'){
if(endsWith(document.getElementsByTagName("wline")[k].getAttribute('entry'),"V DEP")||endsWith(document.getElementsByTagName("wline")[k].getAttribute('entry'),"V DEP ")){
document.getElementsByTagName("wline")[k].setAttribute('pos','PAP')
document.getElementsByTagName("wline")[k].innerText = document.getElementsByTagName("wline")[k].innerText.replace(' perf',' ')
document.getElementsByTagName("wline")[k].innerText = document.getElementsByTagName("wline")[k].innerText.replace('participle','PAP')
} else {
document.getElementsByTagName("wline")[k].setAttribute('pos','PPP')
document.getElementsByTagName("wline")[k].innerText = document.getElementsByTagName("wline")[k].innerText.replace(' perf',' ')
document.getElementsByTagName("wline")[k].innerText = document.getElementsByTagName("wline")[k].innerText.replace(' passive',' ')
document.getElementsByTagName("wline")[k].innerText = document.getElementsByTagName("wline")[k].innerText.replace('participle','PPP')

}
}
}
if(document.getElementsByTagName("wline")[k].getAttribute('pos')=='PRON'){
if(document.getElementsByTagName("wline")[k].getAttribute('word')=='is'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ea'||
  document.getElementsByTagName("wline")[k].getAttribute('word')=='id'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='eum'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='eam'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='eius'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ei'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ii'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='eo'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='eae'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='eos'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='eas'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='eorum'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='earum'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ille'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='illa'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='illud'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='illum'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='illam'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='illius'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='illi'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='illo'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='illae'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='illos'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='illas'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='illorum'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='illarum'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='illis'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='olle'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='olla'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ollud'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ollum'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ollam'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ollius'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='olli'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ollo'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ollae'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ollos'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ollas'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ollorum'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ollarum'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ollis'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='iste'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ista'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='istud'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='istum'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='istam'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='istius'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='isti'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='isto'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='istae'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='istos'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='istas'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='istorum'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='istarum'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='istis'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='eis'
){
  document.getElementsByTagName("wline")[k].setAttribute('pos','FDEM')
  document.getElementsByTagName("wline")[k].innerText = document.getElementsByTagName("wline")[k].innerText.replace('pron ','demons ')
}
if(document.getElementsByTagName("wline")[k].getAttribute('word')=='hic'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='haec'||
  document.getElementsByTagName("wline")[k].getAttribute('word')=='hoc'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='hunc'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='hanc'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='huius'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='huic'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='hac'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='hi'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='hae'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='hos'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='has'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='horum'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='harum'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='his'
){
  document.getElementsByTagName("wline")[k].setAttribute('pos','NDEM')
  document.getElementsByTagName("wline")[k].innerText = document.getElementsByTagName("wline")[k].innerText.replace('pron ','demons (this) ')
}

if(document.getElementsByTagName("wline")[k].getAttribute('word')=='quis'||document.getElementsByTagName("wline")[k].getAttribute('word')=='quid'){
      document.getElementsByTagName("wline")[k].setAttribute('pos','INTERROG')
      document.getElementsByTagName("wline")[k].innerText = document.getElementsByTagName("wline")[k].innerText.replace('pron ','interrogative ')
}
if(document.getElementsByTagName("wline")[k].getAttribute('word')=='qui'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='quae'||
  document.getElementsByTagName("wline")[k].getAttribute('word')=='quod'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='quem'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='quam'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='cuius'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='cui'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='quo'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='qua'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='quos'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='quas'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='quorum'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='quarum'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='quibus'
){
  document.getElementsByTagName("wline")[k].setAttribute('pos','RELAT')
  document.getElementsByTagName("wline")[k].innerText = document.getElementsByTagName("wline")[k].innerText.replace('pron ','relative ')
}
if(document.getElementsByTagName("wline")[k].getAttribute('word')=='ipse'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ipsa'||
  document.getElementsByTagName("wline")[k].getAttribute('word')=='ipsud'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ipsum'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ipsam'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ipsius'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ipsi'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ipso'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ipsa'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ipsae'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ipsos'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ipsas'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ipsorum'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ipsarum'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='ipsis'
){
  document.getElementsByTagName("wline")[k].setAttribute('pos','INTENS')
  document.getElementsByTagName("wline")[k].innerText = document.getElementsByTagName("wline")[k].innerText.replace('pron ','intensive ')
}
if(document.getElementsByTagName("wline")[k].getAttribute('word')=='idem'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='eadem'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='eundem'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='eandem'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='eiusdem'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='eidem'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='eodem'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='eadem'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='eaedem'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='eosdem'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='easdem'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='eorundem'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='earundem'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='eisdem'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='isdem'
){
  document.getElementsByTagName("wline")[k].setAttribute('pos','SDEM')
  document.getElementsByTagName("wline")[k].innerText = document.getElementsByTagName("wline")[k].innerText.replace('pron ','demons (same) ')
}
if(document.getElementsByTagName("wline")[k].getAttribute('word')=='ego'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='me'||
  document.getElementsByTagName("wline")[k].getAttribute('word')=='mei'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='mihi'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='mi'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='nos'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='nostrum'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='nobis'
){
  document.getElementsByTagName("wline")[k].setAttribute('pos','perspron')
  document.getElementsByTagName("wline")[k].innerText = document.getElementsByTagName("wline")[k].innerText.replace('pron ','1st pron ')
}
if(document.getElementsByTagName("wline")[k].getAttribute('word')=='tu'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='te'||
  document.getElementsByTagName("wline")[k].getAttribute('word')=='tui'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='tibi'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='vos'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='vestrum'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='vobis'
){
  document.getElementsByTagName("wline")[k].setAttribute('pos','perspron')
  document.getElementsByTagName("wline")[k].innerText = document.getElementsByTagName("wline")[k].innerText.replace('pron ','2nd pron ')
}
if(document.getElementsByTagName("wline")[k].getAttribute('word')=='se'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='sui'||
  document.getElementsByTagName("wline")[k].getAttribute('word')=='sibi'||
  document.getElementsByTagName("wline")[k].getAttribute('word')=='sese'||
document.getElementsByTagName("wline")[k].getAttribute('word')=='se'
){
  document.getElementsByTagName("wline")[k].setAttribute('pos','refpron')
  document.getElementsByTagName("wline")[k].innerText = document.getElementsByTagName("wline")[k].innerText.replace('pron ','reflex pron ')
}

}
document.getElementsByTagName("wline")[k].innerText=document.getElementsByTagName("wline")[k].innerText.replace(/^\s/g,'')
document.getElementsByTagName("wline")[k].innerText=document.getElementsByTagName("wline")[k].innerText.replace(/\s$/g,'')
}
}


var q = 1

if(document.getElementsByTagName("wline")[0].getAttribute('word')=='is'||
document.getElementsByTagName("wline")[0].getAttribute('word')=='ea'||
document.getElementsByTagName("wline")[0].getAttribute('word')=='id'||
document.getElementsByTagName("wline")[0].getAttribute('word')=='eum'||
document.getElementsByTagName("wline")[0].getAttribute('word')=='eam'||
document.getElementsByTagName("wline")[0].getAttribute('word')=='id'||
document.getElementsByTagName("wline")[0].getAttribute('word')=='eius'||
document.getElementsByTagName("wline")[0].getAttribute('word')=='ei'||
document.getElementsByTagName("wline")[0].getAttribute('word')=='eo'||
document.getElementsByTagName("wline")[0].getAttribute('word')=='ea'||
document.getElementsByTagName("wline")[0].getAttribute('word')=='eae'||
document.getElementsByTagName("wline")[0].getAttribute('word')=='eos'||
document.getElementsByTagName("wline")[0].getAttribute('word')=='eas'||
document.getElementsByTagName("wline")[0].getAttribute('word')=='ea'||
document.getElementsByTagName("wline")[0].getAttribute('word')=='eorum'||
document.getElementsByTagName("wline")[0].getAttribute('word')=='earum'||
document.getElementsByTagName("wline")[0].getAttribute('word')=='eis'){
var deleting = false
for (yy = document.getElementById('menutable').childElementCount-1; yy>0; yy--){
if(document.getElementsByTagName("wline")[yy].getAttribute('wtype')=='definition'){deleting = false}
if(document.getElementsByTagName("wline")[yy].innerText.substr(0,4) == 'same'){
deleting = true
}
if(deleting == true){
  document.getElementsByTagName("wline")[yy].parentElement.parentElement.parentElement.parentElement.removeChild(document.getElementsByTagName("wline")[yy].parentElement.parentElement.parentElement)
}
}
}}
catch(err1){
if(document.getElementById('menutable').innerText.replace('UNKNOWN','') !== document.getElementById('menutable').innerText){
document.getElementById('menutable').innerHTML = 'Unknown name<br><textarea id="unknownword">' + word + '</textarea><button onclick="adder()">Update</button>'
document.getElementById("unknownword").value = document.getElementById("unknownword").value.replace(/um$/g,'us')
  document.getElementById("unknownword").value = document.getElementById("unknownword").value.replace(/o$/g,'us')
    document.getElementById("unknownword").value = document.getElementById("unknownword").value.replace(/um$/g,'us')
      document.getElementById("unknownword").value = document.getElementById("unknownword").value.replace(/am$/g,'a')
        document.getElementById("unknownword").value = document.getElementById("unknownword").value.replace(/ae$/g,'a')
          document.getElementById("unknownword").value = document.getElementById("unknownword").value.replace(/cem$/g,'x')
            document.getElementById("unknownword").value = document.getElementById("unknownword").value.replace(/gem$/g,'x')
              document.getElementById("unknownword").value = document.getElementById("unknownword").value.replace(/onem$/g,'o')
                document.getElementById("unknownword").value = document.getElementById("unknownword").value.replace(/em$/g,'')
                  document.getElementById("unknownword").value = document.getElementById("unknownword").value.replace(/cis$/g,'x')
                    document.getElementById("unknownword").value = document.getElementById("unknownword").value.replace(/gis$/g,'x')
                      document.getElementById("unknownword").value = document.getElementById("unknownword").value.replace(/onis$/g,'o')
                          document.getElementById("unknownword").value = document.getElementById("unknownword").value.replace(/ci$/g,'x')
                            document.getElementById("unknownword").value = document.getElementById("unknownword").value.replace(/gi$/g,'x')
                              document.getElementById("unknownword").value = document.getElementById("unknownword").value.replace(/oni$/g,'o')
                                document.getElementById("unknownword").value = document.getElementById("unknownword").value.replace(/i$/g,'')
                                  document.getElementById("unknownword").value = document.getElementById("unknownword").value.replace(/ce$/g,'x')
                                    document.getElementById("unknownword").value = document.getElementById("unknownword").value.replace(/ge$/g,'x')
                                      document.getElementById("unknownword").value = document.getElementById("unknownword").value.replace(/one$/g,'o')
                                        document.getElementById("unknownword").value = document.getElementById("unknownword").value.replace(/e$/g,'')

}}
var definitionentries = document.getElementsByTagName('wline')

for(var ccc=0; ccc<definitionentries.length;ccc++){
 if(definitionentries[ccc].getAttribute('wtype')=='definition'){
    var ds = definitionentries[ccc].innerText.split(',')
    for(var cccc = 0;cccc<ds.length;cccc++){
      ds[cccc] = '<inddef onclick="selectdef(this)">' + ds[cccc] +'</inddef>'
      if(cccc != ds.length-1){
        ds[cccc] = ds[cccc]+', '
        }
    }
    definitionentries[ccc].innerHTML = ds.join('')
    definitionentries[ccc].innerHTML = definitionentries[ccc].innerHTML + '<editdef onclick="editdef(this)" style="cursor:pointer;">&#9998;</editdef>'
 }
}

//start table addition

var entrycount = document.getElementsByClassName('entry').length
for (iii=0;iii<entrycount;iii++){
  var typenode = document.getElementsByClassName('entry')[iii].parentElement.childNodes[1].innerText.trim()
  var entrytype = typenode.split(' ')[typenode.split(' ').length-1]
  var pps = document.getElementsByClassName('entry')[iii].parentElement.childNodes[1].innerText
  var eng = document.getElementsByClassName('entry')[iii].parentElement.parentElement.nextSibling.firstChild.childNodes[1].innerText
  eng = eng.substr(0,eng.length-1)
  
  if(pps.split('abb.').length==1 &&pps.split(' ').length>2 && pps.split(', -, - ').length==1 && (entrytype=='V'||entrytype=='C'||entrytype=='X'||entrytype=='M'||entrytype=='F'||entrytype=='N'||entrytype=='V'||entrytype=='ADJ'||entrytype=='PRON'||entrytype=='INTRANS'||entrytype=='TRANS'||entrytype=='DEP'||entrytype=='SEMIDEP'||entrytype=='PERFDEF'||entrytype=='IMPERS')){
  document.getElementsByClassName('entry')[iii].innerHTML = document.getElementsByClassName('entry')[iii].innerHTML + '<button onclick="javascript:popout(&quot;' + pps + '&quot;,&quot;' + eng + '&quot;)"><img alt="Vector toolbar insert table button.png" src="Vector_toolbar_insert_table_button.png" width="28" height="28" data-file-width="28" data-file-height="28"></button>'
  }
  if(pps=='eodem X'||pps=='qu.a PRON'||pps=='t.e PRON'||pps=='tu PRON'||pps=='t.ui PRON'||pps=='t.ibi PRON'||pps=='s.e PRON'||pps=='s.ui PRON'||pps=='s.ibi PRON'||pps=='ego PRON'||pps=='m.e PRON'||pps=='m.ei PRON'||pps=='m.ihi PRON'||pps=='v.os PRON'||pps=='vestr.um PRON'||pps=='vestr.i PRON'||pps=='v.obis PRON'||pps=='n.os PRON'||pps=='n.os PRON'||pps=='nostr.um PRON'||pps=='nostr.i'||pps=='n.obis PRON'){
    document.getElementsByClassName('entry')[iii].innerHTML = document.getElementsByClassName('entry')[iii].innerHTML + '<button onclick="javascript:popout(&quot;' + pps + '&quot;,&quot;' + eng + '&quot;)"><img alt="Vector toolbar insert table button.png" src="/Vector_toolbar_insert_table_button.png" width="28" height="28" data-file-width="28" data-file-height="28"></button>'
  }
}

}
function adder(){
var targetid = document.getElementById("ww").getAttribute("selectedbox")
var qq = document.getElementById(targetid).getElementsByTagName('A')[0].outerHTML
document.getElementById(targetid).innerHTML = qq
document.getElementById(targetid).innerHTML = document.getElementById(targetid).innerHTML + '<br><meaning id="meaning' + targetid + '"></meaning>'

document.getElementById('meaning' + targetid).innerText = document.getElementById("unknownword").value
document.getElementById('meaning' + targetid).setAttribute('style','color:DarkOrange; font-size:70%; large;')
updatetranslation()
try{document.getElementById('selectorbox').outerHTML = ''
optionselement = ''
  clearTimeout(timer)
  clearTimeout(remtimer)
}
catch(err){}

}
function adder2(){
  var newvalue =  document.getElementById("unknownword2").value
  var targetid = document.getElementById("selectorbox").parentElement.parentElement.id
  var qq = document.getElementById(targetid).getElementsByTagName('A')[0].outerHTML
  document.getElementById(targetid).innerHTML = qq
  document.getElementById(targetid).innerHTML = document.getElementById(targetid).innerHTML + '<br><meaning id="meaning' + targetid + '"></meaning>'
  
  document.getElementById('meaning' + targetid).innerText =newvalue
  document.getElementById('meaning' + targetid).setAttribute('style','color:DarkOrange; font-size:70%; large;')
  updatetranslation()
  try{document.getElementById('selectorbox').outerHTML = ''
  optionselement = ''
    clearTimeout(timer)
    clearTimeout(remtimer)
  }
  catch(err){}
  
  }



function selectform(element){
showtip(3)
  try{document.getElementById('selectorbox').outerHTML = ''
optionselement = ''
  clearTimeout(timer)
  clearTimeout(remtimer)
}
catch(err){}


var targetid = document.getElementById("ww").getAttribute("selectedbox")

//var newelement = document.createElement("li")
var rr = document.getElementById(targetid).getElementsByTagName('recreate')
for(var ss=0; ss<rr.length; ss++){
var newelement = document.createElement("li")
newelement.setAttribute('id',rr[ss].getAttribute('formerid'))
//newelement.setAttribute('onmouseover','selboxdel()')
newelement.innerHTML = '<a id="titleword' + rr[ss].getAttribute('formerid') + ' onclick="getww(this);showoptions(event.srcElement)" style="cursor:pointer;" parentid="' + rr[ss].getAttribute('formerid') + '">' + rr[ss].innerHTML + '</a>'
newelement.setAttribute('class','ui-state-default ui-sortable-handle')
document.getElementById(targetid).parentElement.insertBefore(newelement,document.getElementById(targetid))

}

var qq = document.getElementById(targetid).getElementsByTagName('A')[0].outerHTML
document.getElementById(targetid).innerHTML = qq

document.getElementById(targetid).innerHTML = document.getElementById(targetid).innerHTML + '<splitjoin></splitjoin><br\><def style="line-height: 90%;color:red; font-size:50%; cursor:pointer;" id="def'+ targetid + '"></def> '
document.getElementById(targetid).getElementsByTagName('splitjoin')[0].setAttribute('id','splitjoin'+ targetid)
var selecteddef = element.firstChild.getAttribute('definition').replace(', ',',').split(',')[0]
var defs = '%' + element.firstChild.getAttribute('definition').split(', ').join('$')
defs = defs.replace(/\$[^\$]*[A-Z]{3,}[^\$]*/,'')
document.getElementById('def' + targetid).innerText = selecteddef
document.getElementById(targetid).setAttribute('def',defs)
document.getElementById('def' + targetid).setAttribute('onclick','chooser(event.srcElement); build(' + '"' + targetid + '"' + ')')
document.getElementById('def' + targetid).setAttribute('onmouseover','selector(event.srcElement);')
document.getElementById('def' + targetid).setAttribute('parentid',targetid)
var grammar = element.firstChild
grammar.id = 'gramm' + targetid
document.getElementById(targetid).innerHTML = document.getElementById(targetid).innerHTML + grammar.outerHTML
document.getElementById('gramm' + targetid).setAttribute('style','color:navy; font-size:50%; line-height: 90%;')
document.getElementById('gramm' + targetid).setAttribute('parentid','targetid')
document.getElementById('gramm' + targetid).outerHTML = document.getElementById('gramm' + targetid).outerHTML.replace('<wline','<grammar').replace('<\wline','<\grammar')
document.getElementById(targetid).innerHTML =  document.getElementById(targetid).innerHTML + '<br><meaning id="meaning' + targetid + '"></meaning>'
var meaning = getparts()
if(word=='eram' && document.getElementById('gramm' + targetid).getAttribute('tense')=='IMPF'){ meaning = "%^II ^spast ^neg$^II was ^neg ^prpl$^II used ^neg to ^inf$^II would ^neg ^inf$"}
if(word=='eras' && document.getElementById('gramm' + targetid).getAttribute('tense')=='IMPF'){ meaning = "%^you ^plpast ^neg$^you were ^neg ^prpl$^you used ^neg to ^inf$^you would ^neg ^inf$"}
if(word=='erat' && document.getElementById('gramm' + targetid).getAttribute('tense')=='IMPF'){ meaning = "%^he ^spast ^neg$^he was ^neg ^prpl$^he used ^neg to ^inf$^he would ^neg ^inf$"}
if(word=='eramus' && document.getElementById('gramm' + targetid).getAttribute('tense')=='IMPF'){ meaning = "%^we ^plpast ^neg$^we were ^neg ^prpl$^we used ^neg to ^inf$^we would ^neg ^inf$"}
if(word=='eratis' && document.getElementById('gramm' + targetid).getAttribute('tense')=='IMPF'){ meaning = "%^you ^plpast ^neg$^you were ^neg ^prpl$^you used ^neg to ^inf$^you would ^neg ^inf$"}
if(word=='erant' && document.getElementById('gramm' + targetid).getAttribute('tense')=='IMPF'){ meaning = "%^they ^plpast ^neg$^they were ^neg ^prpl$^they used ^neg to ^inf$^they would ^neg ^inf$"}



if(endsWith(meaning,'$')){
meaning = meaning.substr(0,meaning.length-1)
}
document.getElementById(targetid).setAttribute('meaning',meaning)
document.getElementById('meaning' + targetid).setAttribute('style','color:DarkOrange; font-size:70%; large;')
document.getElementById('meaning' + targetid).setAttribute('onclick','chooser(event.srcElement); build(' + '"' + targetid + '"' + ')')
document.getElementById('meaning' + targetid).setAttribute('onmouseover','selector(event.srcElement);')
document.getElementById('meaning' + targetid).setAttribute('parentid',targetid)
document.getElementById(targetid).setAttribute('sart',"%the$a$&#11034;$his$her$its$your$my$their$our$")
if(/^[A-Z]/g.test(document.getElementById(targetid).getElementsByTagName('a')[0].innerText)){document.getElementById(targetid).setAttribute('sart',"%&#11034;$the$a$his$her$its$your$my$their$our$")}
document.getElementById(targetid).setAttribute('plart',"%the$&#11034;$some$his$her$its$your$my$their$our$")
document.getElementById(targetid).setAttribute('II','%I$&#11034;$')
document.getElementById(targetid).setAttribute('you','%you$&#11034;$')
document.getElementById(targetid).setAttribute('he','%&#11034;$he$she$it$there$')
document.getElementById(targetid).setAttribute('we','%we$&#11034;$')
document.getElementById(targetid).setAttribute('they','%&#11034;$they$there$')
document.getElementById(targetid).setAttribute('man','%&#11034;$one$man$person$thing$')
document.getElementById(targetid).setAttribute('woman','%&#11034;$one$woman$person$thing$')
document.getElementById(targetid).setAttribute('thing','%&#11034;$thing$')
document.getElementById(targetid).setAttribute('msnoun','%he$him$one$&#11034;$')
document.getElementById(targetid).setAttribute('nsnoun','%it$that$&#11034;$')
document.getElementById(targetid).setAttribute('fsnoun','%she$her$one$&#11034;$')
document.getElementById(targetid).setAttribute('mthey','%they$ones$those$&#11034;$')
document.getElementById(targetid).setAttribute('fthey','%they$ones$those$&#11034;$')
document.getElementById(targetid).setAttribute('things','%things$&#11034;$')
document.getElementById(targetid).setAttribute('men','%&#11034;$men$people$things$ones$')
document.getElementById(targetid).setAttribute('women','%&#11034;$women$people$things$ones$')
document.getElementById(targetid).setAttribute('is','%is$am$are$&#11034;$')
document.getElementById(targetid).setAttribute('of','%of$&#11034;$')
document.getElementById(targetid).setAttribute('to','%to$for$from$&#11034;$')
document.getElementById(targetid).setAttribute('by','%&#11034;$by$with$from$in$on$than$')
document.getElementById(targetid).setAttribute('at','%at$in$&#11034;$')
document.getElementById(targetid).setAttribute('person','%&#11034;$person$one$man$woman$someone$thing$')
document.getElementById(targetid).setAttribute('people','%&#11034;$people$ones$men$women$those$things$')
document.getElementById(targetid).setAttribute('him','%him$her$it$&#11034;$')
document.getElementById(targetid).setAttribute('word',document.getElementById('def' + targetid).innerText)
document.getElementById(targetid).setAttribute('sing',document.getElementById('def' + targetid).innerText)
document.getElementById(targetid).setAttribute('neg','')
document.getElementById(targetid).setAttribute('adj','')
document.getElementById(targetid).setAttribute('who','%who$which$that$')
document.getElementById(targetid).setAttribute('which','%that$which$')
document.getElementById(targetid).setAttribute('has','%has$had$have$')
document.getElementById(targetid).setAttribute('have','%had$have$')
build(targetid)


if(document.getElementById('gramm' + targetid).getAttribute('pos') == 'adv'||document.getElementById('def'+targetid).innerText == "not"){
document.getElementById(targetid).getElementsByTagName('splitjoin')[0].innerHTML = document.getElementById(targetid).getElementsByTagName('splitjoin')[0].innerHTML+ '<button style="background:#ffe6e6" style="cursor:pointer;" onclick="nonjoiner(this)" parentid =' + targetid + '>&#x2192;|</button>'
}
if(document.getElementById('gramm' + targetid).getAttribute('pos') == 'adv'||document.getElementById('def'+targetid).innerText == "never"){
  document.getElementById(targetid).getElementsByTagName('splitjoin')[0].innerHTML = document.getElementById(targetid).getElementsByTagName('splitjoin')[0].innerHTML+ '<button style="background:#ffe6e6" style="cursor:pointer;" onclick="nonjoiner(this)" parentid =' + targetid + '>&#x2192;|</button>'
  }
if(document.getElementById('gramm'+targetid).getAttribute('mood') == 'IND'||document.getElementById('gramm'+targetid).getAttribute('mood') == 'SUB'){
addquestionbutton(targetid)
}
if(document.getElementById('gramm' + targetid).innerText == 'supine acc sing neut'){
document.getElementById(targetid).getElementsByTagName('splitjoin')[0].innerHTML = document.getElementById(targetid).getElementsByTagName('splitjoin')[0].innerHTML+ '<button style="background:#ffe6e6"  style="cursor:pointer;" onclick="supinejoiner(this)" parentid =' + targetid + '>&#x2192;iri</button>'
}

if(document.getElementById('gramm' + targetid).getAttribute('pos') == 'ADJ'){
document.getElementById(targetid).getElementsByTagName('splitjoin')[0].innerHTML = '<button style="background:#e5ffff"  style="cursor:pointer;" onclick="adjjoiner2(this)" parentid =' + targetid + '>|&#x2190;</button>' + document.getElementById(targetid).getElementsByTagName('splitjoin')[0].innerHTML+'<button style="background:#e5ffff"  style="cursor:pointer;" onclick="adjjoiner(this)" parentid =' + targetid + '>&#x2192;|</button>'
}
if(document.getElementById('gramm' + targetid).getAttribute('pos') == 'N' && document.getElementById('gramm' + targetid).getAttribute('case') == 'nom' ){
document.getElementById(targetid).getElementsByTagName('splitjoin')[0].innerHTML = document.getElementById(targetid).getElementsByTagName('splitjoin')[0].innerHTML+'<button style="background:#e5ffff"  style="cursor:pointer;" onclick="nounjoiner(this)" parentid =' + targetid + '>&#x2192;VERB</button>'
}

if(document.getElementById('gramm' + targetid).getAttribute('pos') == 'PAP'||document.getElementById('gramm' + targetid).getAttribute('pos') == 'PPP'||document.getElementById('gramm' + targetid).getAttribute('pos') == 'FUTPPL'){
document.getElementById(targetid).getElementsByTagName('splitjoin')[0].innerHTML = document.getElementById(targetid).getElementsByTagName('splitjoin')[0].innerHTML+'<button style="background:##ffe6e6"  style="cursor:pointer;" onclick="verbjoiner(this)" parentid =' + targetid + '>&#x2192;SUM</button>'

}
if(document.getElementById("ww").getAttribute("tackon") == "yes")
{
document.getElementById(targetid).getElementsByTagName('splitjoin')[0].innerHTML = document.getElementById(targetid).getElementsByTagName('splitjoin')[0].innerHTML+'<button style="background:#fff7e6"  style="cursor:pointer;" onclick="tackonsplitter(this)" parentid =' + targetid + '>&#x2190;|&#x2192;</button>'
}
var pos = document.getElementById('gramm' + targetid).getAttribute('pos')
if(pos == 'V'){
document.getElementById(targetid).setAttribute('style','background:#ffe6e6')
}
if(pos == 'INTERJ'){
  document.getElementById(targetid).setAttribute('style','background:#ffe6e6')
  }
if(pos == 'N'|pos == 'GERUND'){
document.getElementById(targetid).setAttribute('style','background:#e5ffff')
}
if(pos == 'GERUNDIVE'||pos == 'VPAR'||pos == 'PPP'||pos == 'FUTPPL'||pos=='PRPPL'||pos == 'PAP'||pos == 'SUPINE'){
document.getElementById(targetid).setAttribute('style','background:#ffe5ff')
}
if(pos == 'ADJ'){
document.getElementById(targetid).setAttribute('style','background:#ffe6cc')
}
if(pos == 'ADV'){
document.getElementById(targetid).setAttribute('style','background:#d9ffcc')
}
if(pos == 'CONJ'){
document.getElementById(targetid).setAttribute('style','background:#fff7e6')
}
if(pos == 'PREP'){
document.getElementById(targetid).setAttribute('style','background:#ffff99')
}
if(pos == 'NUM'){
document.getElementById(targetid).setAttribute('style','background:#AA88ff')
}
if(pos == 'PRON'||pos == 'refpron'||pos == 'perspron'||pos == 'SD'||pos == 'INT'||pos == 'RELAT'||pos == 'FDEM'||pos == 'NDEM'||pos == 'SDEM'||pos == 'INTERROG'||pos == 'INTENS'){
document.getElementById(targetid).setAttribute('style','background:#e5ffff')
}

// refpron perspron perspron SDEM INTENS RELAT FDEM

try{document.getElementById('selectorbox').outerHTML = ''}
catch(err){}
}

function chooser(element){
  try{
var q = document.getElementById(element.getAttribute('parentid')).getAttribute(element.tagName.toLowerCase()) + '$'
q=q.replace(/\$\$/g,'$')
q=q.replace(/\$\$/g,'$')
var choices = q.split('$')
var currentchoice = 0
var changed = 0
for(n=0;n<choices.length;n++) {

if(choices[n].substr(0,1)=="%"&& changed == 0){
choices[n] =choices[n].replace("%","")
currentchoice = n+1
if(currentchoice>choices.length-2){currentchoice = 0}
element.innerText = choices[currentchoice]
choices[currentchoice] = '%' + choices[currentchoice] 
document.getElementById(element.getAttribute('parentid')).setAttribute(element.tagName,choices.join('$').replace('$$','$'))
changed = 1
}

}
  }
  catch(err){}
}

function getparts(){
var partscollection = {"lines":[{"val0":"verb pres 1st sing","val1":"%^II ^pres1 ^neg$^II am ^neg ^prpl$^II do ^neg ^inf$"},
{"val0":"verb pres 2nd sing","val1":"%^you ^plpres ^neg$^you are ^neg ^prpl$^you do ^neg ^inf$"},
{"val0":"verb pres 3rd sing","val1":"%^he ^pres3 ^neg$^he is ^neg ^prpl$^he does ^neg ^inf$"},
{"val0":"verb pres 1st plur","val1":"%^we ^plpres ^neg$^we are ^neg ^prpl$^we do ^neg ^inf$"},
{"val0":"verb pres 2nd plur","val1":"%^you ^plpres ^neg$^you are ^neg ^prpl$^you do ^neg ^inf$"},
{"val0":"verb pres 3rd plur","val1":"%^they ^plpres ^neg$^they are ^neg ^prpl$^they do ^neg ^inf$"},
{"val0":"verb impf 1st sing","val1":"%^II was ^neg ^prpl$^II ^spast ^neg$^II used ^neg to ^inf$^II would ^neg ^inf$"},
{"val0":"verb impf 2nd sing","val1":"%^you were ^neg ^prpl$^you ^plpast ^neg$^you used ^neg to ^inf$^you would ^neg ^inf$"},
{"val0":"verb impf 3rd sing","val1":"%^he was ^neg ^prpl$^he ^spast ^neg$^he used ^neg to ^inf$^he would ^neg ^inf$"},
{"val0":"verb impf 1st plur","val1":"%^we were ^neg ^prpl$^we ^plpast ^neg$^we used ^neg to ^inf$^II would ^neg ^inf$"},
{"val0":"verb impf 2nd plur","val1":"%^you were ^neg ^prpl$^you ^plpast ^neg$^you used ^neg to ^inf$^you would ^neg ^inf$"},
{"val0":"verb impf 3rd plur","val1":"%^they were ^neg ^prpl$^they ^plpast ^neg$^they used ^neg to ^inf$^they would ^neg ^inf$"},
{"val0":"verb fut 1st sing","val1":"%^II shall ^neg ^inf$^II will ^neg ^inf$^II am ^neg going to ^inf$"},
{"val0":"verb fut 2nd sing","val1":"%^you will ^neg ^inf$^you shall ^neg ^inf$^you are ^neg going to ^inf$"},
{"val0":"verb fut 3rd sing","val1":"%^he will ^neg ^inf$^he shall ^neg ^inf$^he is ^neg going to ^inf$"},
{"val0":"verb fut 1st plur","val1":"%^we shall ^neg ^inf$^we will ^neg ^inf$^we are ^neg going to ^inf$"},
{"val0":"verb fut 2nd plur","val1":"%^you will ^neg ^inf$^you shall ^neg  ^inf$^you are ^neg going to ^inf$"},
{"val0":"verb fut 3rd plur","val1":"%^they will ^neg ^inf$^they shall ^neg ^inf$^they are ^neg going to ^inf$"},
{"val0":"verb perf 1st sing","val1":"%^II ^spast ^neg$^II have ^neg ^papl$^II did ^neg ^inf$"},
{"val0":"verb perf 2nd sing","val1":"%^you ^plpast ^neg$^you have ^neg  ^papl$^you did ^neg ^inf$"},
{"val0":"verb perf 3rd sing","val1":"%^he ^spast ^neg$^he has ^neg  ^papl$^he did ^neg ^inf$"},
{"val0":"verb perf 1st plur","val1":"%^we ^plpast ^neg$^we have ^neg ^papl$^we did ^neg ^inf$"},
{"val0":"verb perf 2nd plur","val1":"%^you ^plpast ^neg$^you have ^neg  ^papl$^you did ^neg ^inf$"},
{"val0":"verb perf 3rd plur","val1":"%^they ^plpast ^neg$^they have ^neg  ^papl$^they did ^neg ^inf$"},
{"val0":"verb plup 1st sing","val1":"%^II had ^neg ^papl$^II had ^neg been ^prpl$"},
{"val0":"verb plup 2nd sing","val1":"%^you had ^neg ^papl$^you had ^neg been ^prpl$"},
{"val0":"verb plup 3rd sing","val1":"%^he had ^neg ^papl$^he had ^neg been ^prpl$"},
{"val0":"verb plup 1st plur","val1":"%^we had ^neg ^papl$^we had ^neg been ^prpl$"},
{"val0":"verb plup 2nd plur","val1":"%^you had ^neg ^papl$^you had ^neg been ^prpl$"},
{"val0":"verb plup 3rd plur","val1":"%^they had ^neg ^papl$^they had ^neg been ^prpl$"},
{"val0":"verb futp 1st sing","val1":"%^II shall ^neg have ^papl$^II ^pres1 ^neg$^II do ^neg ^inf$"},
{"val0":"verb futp 2nd sing","val1":"%^you will ^neg have ^papl$^you ^plpres ^neg$^you do ^neg ^inf$"},
{"val0":"verb futp 3rd sing","val1":"%^he will ^neg have ^papl$^he ^pres3 ^neg$^he does ^neg ^inf$"},
{"val0":"verb futp 1st plur","val1":"%^we shall ^neg have ^papl$^we ^plpres ^neg$^we do ^neg ^inf$"},
{"val0":"verb futp 2nd plur","val1":"%^you will ^neg have ^papl$^you ^plpres ^neg$^you do ^neg ^inf$"},
{"val0":"verb futp 3rd plur","val1":"%^they will ^neg have ^papl$^they ^plpres ^neg$^they do ^neg ^inf$"},
{"val0":"verb pres subj 1st sing","val1":"%^II ^pres1 ^neg$^II am ^neg ^prpl$^II do ^neg ^inf$^II would ^neg ^inf$^II may ^neg ^inf$may ^II ^inf"},
{"val0":"verb pres subj 2nd sing","val1":"%^you ^plpres ^neg$^you are ^neg ^prpl$^you do ^neg ^inf$^you would ^neg ^inf$^you may ^neg ^inf$may ^you ^inf$do ^inf"},
{"val0":"verb pres subj 3rd sing","val1":"%^he ^pres3 ^neg$^he is ^neg ^prpl$^he does ^neg ^inf$^he would ^neg ^inf$^he may ^neg ^inf$may ^he ^inf"},
{"val0":"verb pres subj 1st plur","val1":"%^we ^plpres ^neg$^we are ^neg ^prpl$^we do ^neg ^inf$^we would ^neg ^inf$^we may ^neg ^inf$may ^we ^inf"},
{"val0":"verb pres subj 2nd plur","val1":"%^you ^plpres ^neg$^you are ^neg ^prpl$^you do ^neg ^inf$^you would ^neg ^inf$^you may ^neg ^inf$may ^you ^inf$do ^inf"},
{"val0":"verb pres subj 3rd plur","val1":"%^they ^plpres ^neg$^they are ^neg ^prpl$^they do ^neg ^inf$^they would ^neg ^inf$^they may ^neg ^inf$may ^they ^inf"},
{"val0":"verb impf subj 1st sing","val1":"%^II might ^neg ^inf$^II ^spast ^neg$^II was ^neg ^prpl$^II were ^neg to ^inf$"},
{"val0":"verb impf subj 2nd sing","val1":"%^you might ^neg ^inf$^you ^plpast ^neg$^you were ^neg ^prpl$^you were ^neg to ^inf$"},
{"val0":"verb impf subj 3rd sing","val1":"%^he might ^neg ^inf$^he ^spast ^neg$^he was ^neg ^prpl$^he were ^neg to ^inf$"},
{"val0":"verb impf subj 1st plur","val1":"%^we might ^neg ^inf$^we ^plpast ^neg$^we were ^neg ^prpl$^we were ^neg to ^inf$"},
{"val0":"verb impf subj 2nd plur","val1":"%^you might ^neg ^inf$^you ^plpast ^neg$^you were ^neg ^prpl$^you were ^neg to ^inf$"},
{"val0":"verb impf subj 3rd plur","val1":"%^they might ^neg ^inf$^they ^plpast ^neg$^they were ^neg ^prpl$^they were ^neg to ^inf$"},
{"val0":"verb perf subj 1st sing","val1":"%^II ^spast ^neg$^II ^pres1 ^neg$^II may ^neg ^inf$^II did ^neg ^inf$"},
{"val0":"verb perf subj 2nd sing","val1":"%^you ^plpast ^neg$^you ^plpres ^neg$^you may ^neg ^inf$^you did ^neg ^inf$"},
{"val0":"verb perf subj 3rd sing","val1":"%^he ^spast ^neg$^he ^pres3 ^neg$^he may ^neg ^inf$^he did ^neg ^inf$"},
{"val0":"verb perf subj 1st plur","val1":"%^we ^plpast ^neg$^we ^plpres ^neg$^we may ^neg ^inf$^we did ^neg ^inf$"},
{"val0":"verb perf subj 2nd plur","val1":"%^you ^plpast ^neg$^you ^plpres ^neg$^you may ^neg ^inf$^you did ^neg ^inf$"},
{"val0":"verb perf subj 3rd plur","val1":"%^they ^plpast ^neg$^they ^plpres ^neg$^they may ^neg ^inf$^they did ^neg ^inf$"},
{"val0":"verb plup subj 1st sing","val1":"%^II had ^papl$^II ^spast ^neg$^II might ^neg have ^papl$"},
{"val0":"verb plup subj 2nd sing","val1":"%^you had ^papl$^you ^plpast ^neg$^you might ^neg have ^papl$"},
{"val0":"verb plup subj 3rd sing","val1":"%^he had ^papl$^he ^spast ^neg$^he might ^neg have ^papl$"},
{"val0":"verb plup subj 1st plur","val1":"%^we had ^papl$^we ^plpast ^neg$^we might ^neg have ^papl$"},
{"val0":"verb plup subj 2nd plur","val1":"%^you had ^papl$^you ^plpast ^neg$^you might ^neg have ^papl$"},
{"val0":"verb plup subj 3rd plur","val1":"%^they had ^papl$^they ^plpast ^neg$^they might ^neg have ^papl$"},
{"val0":"verb pres passive 1st sing","val1":"%^II am ^neg ^papl$^II am ^neg being ^papl$"},
{"val0":"verb pres passive 2nd sing","val1":"%^you are ^neg ^papl$^you are ^neg being ^papl$"},
{"val0":"verb pres passive 3rd sing","val1":"%^he is ^neg ^papl$^he is ^neg being ^papl$"},
{"val0":"verb pres passive 1st plur","val1":"%^we are ^neg ^papl$^we are ^neg being ^papl$"},
{"val0":"verb pres passive 2nd plur","val1":"%^you are ^neg ^papl$^you are ^neg being ^papl$"},
{"val0":"verb pres passive 3rd plur","val1":"%^they are ^neg ^papl$^they are ^neg being ^papl$"},
{"val0":"verb impf passive 1st sing","val1":"%^II was being ^neg ^papl$^II was ^neg ^papl$"},
{"val0":"verb impf passive 2nd sing","val1":"%^you were being ^neg ^papl$^you were ^neg ^papl$"},
{"val0":"verb impf passive 3rd sing","val1":"%^he was being ^neg ^papl$^he was ^neg ^papl$"},
{"val0":"verb impf passive 1st plur","val1":"%^we were being ^neg ^papl$^we were ^neg ^papl$"},
{"val0":"verb impf passive 2nd plur","val1":"%^you were being ^neg ^papl$^you were ^neg ^papl$"},
{"val0":"verb impf passive 3rd plur","val1":"%^they were being ^neg ^papl$^they were ^neg ^papl$"},
{"val0":"verb fut passive 1st sing","val1":"%^II shall ^neg be ^papl$^II will ^neg be ^papl$^II am ^neg going to be ^papl$"},
{"val0":"verb fut passive 2nd sing","val1":"%^you will ^neg be ^papl$^you shall ^neg be ^papl$^you are ^neg going to be ^papl$"},
{"val0":"verb fut passive 3rd sing","val1":"%^he will ^neg be ^papl$^he shall ^neg be ^papl$^he is ^neg going to be ^papl$"},
{"val0":"verb fut passive 1st plur","val1":"%^we shall ^neg be ^papl$^we will ^neg be ^papl$^we are ^neg going to be ^papl$"},
{"val0":"verb fut passive 2nd plur","val1":"%^you will ^neg be ^papl$^you shall ^neg be ^papl$^you are ^neg going to be ^papl$"},
{"val0":"verb fut passive 3rd plur","val1":"%^they will ^neg be ^papl$^they shall ^neg be ^papl$^they are ^neg going to be ^papl$"},
{"val0":"verb perf passive 1st sing","val1":"%^II was ^neg ^papl$^II have ^neg been ^papl$"},
{"val0":"verb perf passive 2nd sing","val1":"%^you were ^neg ^papl$^you have ^neg been ^papl$"},
{"val0":"verb perf passive 3rd sing","val1":"%^he was ^neg ^papl$^he has ^neg been ^papl$"},
{"val0":"verb perf passive 1st plur","val1":"%^we were ^neg ^papl$^we have ^neg been ^papl$"},
{"val0":"verb perf passive 2nd plur","val1":"%^you were ^neg ^papl$^you have ^neg been ^papl$"},
{"val0":"verb perf passive 3rd plur","val1":"%^they were ^neg ^papl$^they have ^neg been ^papl$"},
{"val0":"verb plup passive 1st sing","val1":"%^II had ^neg been ^papl$"},
{"val0":"verb plup passive 2nd sing","val1":"%^you had ^neg been ^papl$"},
{"val0":"verb plup passive 3rd sing","val1":"%^he had ^neg been ^papl$"},
{"val0":"verb plup passive 1st plur","val1":"%^we had ^neg been ^papl$"},
{"val0":"verb plup passive 2nd plur","val1":"%^you had ^neg been ^papl$"},
{"val0":"verb plup passive 3rd plur","val1":"%^they had ^neg been ^papl$"},
{"val0":"verb futp passive 1st sing","val1":"%^II shall ^neg have been ^papl$^II am ^neg ^papl$"},
{"val0":"verb futp passive 2nd sing","val1":"%^you have been ^neg be ^papl$^you are ^neg ^papl$"},
{"val0":"verb futp passive 3rd sing","val1":"%^he will ^neg have been ^papl$^he is ^neg ^papl$"},
{"val0":"verb futp passive 1st plur","val1":"%^we shall ^neg have been ^papl$^we are ^neg ^papl$"},
{"val0":"verb futp passive 2nd plur","val1":"%^you will ^neg have been ^papl$^you are ^neg ^papl$"},
{"val0":"verb futp passive 3rd plur","val1":"%^they will ^neg have been ^papl$^they are ^neg ^papl$"},
{"val0":"verb pres passive subj 1st sing","val1":"%^II am ^neg ^papl$^II am ^neg being ^papl$^II were ^neg ^papl$may ^II be ^papl$"},
{"val0":"verb pres passive subj 2nd sing","val1":"%^you are ^neg ^papl$^you are ^neg being ^papl$^you were ^neg ^papl$may ^you be ^papl$"},
{"val0":"verb pres passive subj 3rd sing","val1":"%^he is ^neg ^papl$^he is ^neg being ^papl$^he were ^neg ^papl$may ^he be ^papl$"},
{"val0":"verb pres passive subj 1st plur","val1":"%^we are ^neg ^papl$^we are ^neg being ^papl$^we were ^neg ^papl$may ^we be ^papl$"},
{"val0":"verb pres passive subj 2nd plur","val1":"%^you are ^neg ^papl$^you are ^neg being ^papl$^you were ^neg ^papl$may ^you be ^papl$"},
{"val0":"verb pres passive subj 3rd plur","val1":"%^they are ^neg ^papl$^they are ^neg being ^papl$^they were ^neg ^papl$may ^they be ^papl$"},
{"val0":"verb impf passive subj 1st sing","val1":"%^II was ^neg ^papl$^II was ^neg being ^papl$^II might ^neg be ^papl$"},
{"val0":"verb impf passive subj 2nd sing","val1":"%^you were ^neg ^papl$^you were ^neg being ^papl$^you might ^neg be ^papl$"},
{"val0":"verb impf passive subj 3rd sing","val1":"%^he was ^neg ^papl$^he was ^neg being ^papl$^he might ^neg be ^papl$"},
{"val0":"verb impf passive subj 1st plur","val1":"%^we were ^neg ^papl$^we were ^neg being ^papl$^we might ^neg be ^papl$"},
{"val0":"verb impf passive subj 2nd plur","val1":"%^you were ^neg ^papl$^you were ^neg being ^papl$^you might ^neg be ^papl$"},
{"val0":"verb impf passive subj 3rd plur","val1":"%^they were ^neg ^papl$^they were ^neg being ^papl$^they might ^neg be ^papl$"},
{"val0":"verb perf passive subj 1st sing","val1":"%^II was ^neg ^papl$^II was ^neg ^papl$^II have ^neg been ^papl$^II may ^neg have been ^papl$"},
{"val0":"verb perf passive subj 2nd sing","val1":"%^you were ^neg ^papl$^you were ^neg ^papl$^you have ^neg been ^papl$^you may ^neg have been ^papl$"},
{"val0":"verb perf passive subj 3rd sing","val1":"%^he was ^neg ^papl$^he was ^neg ^papl$^he has ^neg been ^papl$^he may ^neg have been ^papl$"},
{"val0":"verb perf passive subj 1st plur","val1":"%^we were ^neg ^papl$^we were ^neg ^papl$^we have ^neg been ^papl$^we may ^neg have been ^papl$"},
{"val0":"verb perf passive subj 2nd plur","val1":"%^you were ^neg ^papl$^you were ^neg ^papl$^you have ^neg been ^papl$^you may ^neg have been ^papl$"},
{"val0":"verb perf passive subj 3rd plur","val1":"%^they were ^neg ^papl$^they were ^neg ^papl$^they have ^neg been ^papl$^they may ^neg have been ^papl$"},
{"val0":"verb plup passive subj 1st sing","val1":"%^II might ^neg have been ^papl$^II had ^neg been ^papl$"},
{"val0":"verb plup passive subj 2nd sing","val1":"%^you might ^neg have been ^papl$^you had ^neg been ^papl$"},
{"val0":"verb plup passive subj 3rd sing","val1":"%^he might ^neg have been ^papl$^he had ^neg been ^papl$"},
{"val0":"verb plup passive subj 1st plur","val1":"%^we might ^neg have been ^papl$^we had ^neg been ^papl$"},
{"val0":"verb plup passive subj 2nd plur","val1":"%^you might ^neg have been ^papl$^you had ^neg been ^papl$"},
{"val0":"verb plup passive subj 3rd plur","val1":"%^they might ^neg have been ^papl$^they had ^neg been ^papl$"},
{"val0":"adv","val1":"%^word$"},
{"val0":"interjection","val1":"%^word$"},
{"val0":"noun masc","val1":"%^word$"},
{"val0":"noun fem","val1":"%^word$"},
{"val0":"noun","val1":"%^word$"},
{"val0":"noun masc/fem","val1":"%^word$"},
{"val0":"noun nom sing masc","val1":"%^sart ^adj ^sing$as ^sart ^adj ^sing$"},
{"val0":"noun nom sing fem","val1":"%^sart ^adj ^sing$as ^sart ^adj ^sing$"},
{"val0":"noun nom sing neut","val1":"%^sart ^adj ^sing$as ^sart ^adj ^sing$"},
{"val0":"noun acc sing masc","val1":"%^sart ^adj ^sing$as ^sart ^adj ^sing$"},
{"val0":"noun acc sing fem","val1":"%^sart ^adj ^sing$as ^sart ^adj ^sing$"},
{"val0":"noun acc sing neut","val1":"%^sart ^adj ^sing$as ^sart ^adj ^sing$"},
{"val0":"noun voc sing masc","val1":"%^adj ^sing$as ^sart ^adj ^sing$"},
{"val0":"noun voc sing fem","val1":"%^adj ^sing$as ^sart ^adj ^sing$"},
{"val0":"noun voc sing neut","val1":"%^adj ^sing$as ^sart ^adj ^sing$"},
{"val0":"noun gen sing masc","val1":"%^sart ^adj ^possing$of ^sart ^adj ^sing$^sart ^adj ^sing$"},
{"val0":"noun gen sing fem","val1":"%^sart ^adj ^possing$of ^sart ^adj ^sing$^sart ^adj ^sing$"},
{"val0":"noun gen sing neut","val1":"%^sart ^adj ^possing$of ^sart ^adj ^sing$^sart ^adj ^sing$"},
{"val0":"noun dat sing masc","val1":"%^to ^sart ^adj ^sing$"},
{"val0":"noun dat sing fem","val1":"%^to ^sart ^adj ^sing$"},
{"val0":"noun dat sing neut","val1":"%^to ^sart ^adj ^sing$"},
{"val0":"noun abl sing masc","val1":"%^by ^sart ^adj ^sing$"},
{"val0":"noun abl sing fem","val1":"%^by ^sart ^adj ^sing$"},
{"val0":"noun abl sing neut","val1":"%^by ^sart ^adj ^sing$"},
{"val0":"noun loc sing masc","val1":"%^at ^sart ^adj ^sing$"},
{"val0":"noun loc sing fem","val1":"%^at ^sart ^adj ^sing$"},
{"val0":"noun loc sing neut","val1":"%^at ^sart ^adj ^sing$"},
{"val0":"noun nom plur masc","val1":"%^plart ^adj ^plur$as ^plart ^adj ^plur$"},
{"val0":"noun nom plur fem","val1":"%^plart ^adj ^plur$as ^plart ^adj ^plur$"},
{"val0":"noun nom plur neut","val1":"%^plart ^adj ^plur$as ^plart ^adj ^plur$"},
{"val0":"noun voc plur masc","val1":"%^adj ^plur$as ^plart ^adj ^plur$"},
{"val0":"noun voc plur fem","val1":"%^adj ^plur$as ^plart ^adj ^plur$"},
{"val0":"noun voc plur neut","val1":"%^adj ^plur$as ^plart ^adj ^plur$"},
{"val0":"noun acc plur masc","val1":"%^plart ^adj ^plur$as ^plart ^adj ^plur$"},
{"val0":"noun acc plur neut","val1":"%^plart ^adj ^plur$as ^plart ^adj ^plur$"},
{"val0":"noun acc plur fem","val1":"%^plart ^adj ^plur$as ^plart ^adj ^plur$"},
{"val0":"noun gen plur masc","val1":"%^plart ^adj ^posplur$^of ^plart ^adj ^plur$"},
{"val0":"noun gen plur fem","val1":"%^plart ^adj ^posplur$^of ^plart ^adj ^plur$"},
{"val0":"noun gen plur neut","val1":"%^plart ^adj ^posplur$^of ^plart ^adj ^plur$"},
{"val0":"noun dat plur masc","val1":"%^to ^plart ^adj ^plur$"},
{"val0":"noun dat plur fem","val1":"%^to ^plart ^adj ^plur$"},
{"val0":"noun dat plur neut","val1":"%^to ^plart ^adj ^plur$"},
{"val0":"noun abl plur masc","val1":"%^by ^plart ^adj ^plur$"},
{"val0":"noun abl plur fem","val1":"%^by ^plart ^adj ^plur$"},
{"val0":"noun abl plur neut","val1":"%^by ^plart ^adj ^plur$"},
{"val0":"noun loc plur masc","val1":"%^at ^plart ^adj ^plur$"},
{"val0":"noun loc plur fem","val1":"%^at ^plart ^adj ^plur$"},
{"val0":"noun loc plur neut","val1":"%^at ^plart ^adj ^plur$"},
{"val0":"noun nom sing masc/fem","val1":"%^sart ^adj ^sing$as ^sart ^adj ^sing$"},
{"val0":"noun acc sing masc/fem","val1":"%^sart ^adj ^sing$as ^sart ^adj ^sing$"},
{"val0":"noun voc sing masc/fem","val1":"%^adj ^sing$as ^sart ^adj ^sing$"},
{"val0":"noun gen sing masc/fem","val1":"%^of ^sart ^adj ^possing$of ^sart ^adj ^sing$"},
{"val0":"noun dat sing masc/fem","val1":"%^to ^sart ^adj ^sing$"},
{"val0":"noun abl sing masc/fem","val1":"%^by ^sart ^adj ^sing$"},
{"val0":"noun loc sing masc/fem","val1":"%^at ^sart ^adj ^sing$"},
{"val0":"noun nom plur masc/fem","val1":"%^plart ^adj ^plur$as ^plart ^adj ^plur$"},
{"val0":"noun voc plur masc/fem","val1":"%^adj ^plur$as ^plart ^adj ^plur$"},
{"val0":"noun acc plur masc/fem","val1":"%^plart ^adj ^plur$as ^plart ^adj ^plur$"},
{"val0":"noun gen plur masc/fem","val1":"%^plart ^adj ^posplur$^of ^plart ^adj ^plur$"},
{"val0":"noun dat plur masc/fem","val1":"%^to ^plart ^adj ^plur$"},
{"val0":"noun abl plur masc/fem","val1":"%^by ^plart ^adj ^plur$"},
{"val0":"noun loc plur masc/fem","val1":"%^at ^plart ^adj ^plur$"},
{"val0":"noun nom sing","val1":"%^sart ^adj ^sing$as ^sart ^adj ^sing$"},
{"val0":"noun acc sing","val1":"%^sart ^adj ^sing$as ^sart ^adj ^sing$"},
{"val0":"noun voc sing","val1":"%^adj ^sing$as ^sart ^adj ^sing$"},
{"val0":"noun gen sing","val1":"%^of ^sart ^adj ^possing$of ^sart ^adj ^sing$"},
{"val0":"noun dat sing","val1":"%^to ^sart ^adj ^sing$"},
{"val0":"noun abl sing","val1":"%^by ^sart ^adj ^sing$"},
{"val0":"noun loc sing","val1":"%^at ^sart ^adj ^sing$"},
{"val0":"noun nom plur","val1":"%^plart ^adj ^plur$as ^plart ^adj ^plur$"},
{"val0":"noun voc plur","val1":"%^adj ^plur$as ^plart ^adj ^plur$"},
{"val0":"noun acc plur","val1":"%^plart ^adj ^plur$as ^plart ^adj ^plur$"},
{"val0":"noun gen plur","val1":"%^of ^plart ^adj ^posplur$^of ^plart ^adj ^plur$"},
{"val0":"noun dat plur","val1":"%^to ^plart ^adj ^plur$"},
{"val0":"noun loc plur","val1":"%^at ^plart ^adj ^plur$"},
{"val0":"noun abl plur","val1":"%^by ^plart ^adj ^plur$"},
{"val0":"noun neut","val1":"%^adj ^word$"},
{"val0":"conj","val1":"%^word$"},
{"val0":"preposition +acc","val1":"%^word$"},
{"val0":"preposition +abl","val1":"%^word$"},
{"val0":"preposition +gen","val1":"%^word$"},
{"val0":"PPP nom sing masc","val1":"%having ^neg been ^papl$^neg ^papl$^who ^has ^neg been ^papl$^msnoun ^who ^has ^neg been ^papl$^neg ^papl ^man$"},
{"val0":"PPP nom sing neut","val1":"%having ^neg been ^papl$^neg ^papl$^which ^has ^neg been ^papl$^nsnoun ^which ^has ^neg been ^papl$^neg ^papl ^thing$"},
{"val0":"PPP nom sing fem","val1":"%having ^neg been ^papl$^neg ^papl$^who ^has ^neg been ^papl$^fsnoun ^who ^has ^neg been ^papl$^neg ^papl ^woman$"},
{"val0":"PPP voc sing masc","val1":"%having ^neg been ^papl$^neg ^papl$^who ^has ^neg been ^papl$you ^who ^have ^neg been ^papl$"},
{"val0":"PPP voc sing fem","val1":"%having ^neg been ^papl$^neg ^papl$^who ^has ^neg been ^papl$you ^who ^have ^neg been ^papl$"},
{"val0":"PPP voc sing neut","val1":"%having ^neg been ^papl$^neg ^papl$^which ^has ^neg been ^papl$you ^who ^have ^neg been ^papl$^neg ^papl ^thing$"},
{"val0":"PPP acc sing masc","val1":"%having ^neg been ^papl$^neg ^papl$^who ^has ^neg been ^papl$^has ^neg been ^papl$^msnoun ^who ^has ^neg been ^papl$^neg ^papl ^man$"},
{"val0":"PPP acc sing fem","val1":"%having ^neg been ^papl$^neg ^papl$^who ^has ^neg been ^papl$^fsnoun ^who ^has ^neg been ^papl$^neg ^papl ^woman$"},
{"val0":"PPP acc sing neut","val1":"%having ^neg been ^papl$^neg ^papl$^which ^has ^neg been ^papl$^nsnoun ^which ^has ^neg been ^papl$^neg ^papl ^thing$"},
{"val0":"PPP gen sing masc","val1":"%having ^neg been ^papl$^neg ^papl$^who ^has ^neg been ^papl$^of ^msnoun ^who ^has ^neg been ^papl$^of ^sart ^neg ^papl ^man$"},
{"val0":"PPP gen sing neut","val1":"%having ^neg been ^papl$^neg ^papl$^which ^has ^neg been ^papl$^of ^nsnoun ^which ^has ^neg been ^papl$^of ^sart ^neg ^papl ^thing$"},
{"val0":"PPP gen sing fem","val1":"%having ^neg been ^papl$^neg ^papl$^who ^has ^neg been ^papl$^of ^fsnoun ^who ^has ^neg been ^papl$^of ^sart ^neg ^papl ^woman$"},
{"val0":"PPP dat sing masc","val1":"%having ^neg been ^papl$^neg ^papl$^who ^has ^neg been ^papl$^to ^msnoun ^who ^has ^neg been ^papl$^to ^sart ^neg ^papl ^man$"},
{"val0":"PPP dat sing fem","val1":"%having ^neg been ^papl$^neg ^papl$^who ^has ^neg been ^papl$^to ^fsnoun ^who ^has ^neg been ^papl$^to ^sart ^neg ^papl ^woman$"},
{"val0":"PPP dat sing neut","val1":"%having ^neg been ^papl$^neg ^papl$^which ^has ^neg been ^papl$^to ^nsnoun ^which ^has ^neg been ^papl$^to ^sart ^neg ^papl ^thing$"},
{"val0":"PPP abl sing masc","val1":"%having ^neg been ^papl$^neg ^papl$^who ^has ^neg been ^papl$^by ^msnoun ^who ^has ^neg been ^papl$^by ^sart ^neg ^papl ^man$"},
{"val0":"PPP abl sing fem","val1":"%having ^neg been ^papl$^neg ^papl$^who ^has ^neg been ^papl$^by ^fsnoun ^who ^has ^neg been ^papl$^by ^neg ^papl ^woman$"},
{"val0":"PPP abl sing neut","val1":"%having ^neg been ^papl$^neg ^papl$^which ^has ^neg been ^papl$^by ^nsnoun ^which ^has ^neg been ^papl$^by ^sart ^neg ^papl ^thing$"},
{"val0":"PPP nom plur masc","val1":"%having ^neg been ^papl$^neg ^papl$^who ^have ^neg been ^papl$^neg ^papl ^men$^mthey ^who ^have been ^papl$"},
{"val0":"PPP nom plur fem","val1":"%having ^neg been ^papl$^neg ^papl$^who ^have ^neg been ^papl$^neg ^papl ^women$^fthey ^who ^have been ^papl$"},
{"val0":"PPP nom plur neut","val1":"%having ^neg been ^papl$^neg ^papl$^which ^have ^neg been ^papl$^things that ^have been ^papl$"},
{"val0":"PPP voc plur masc","val1":"%having ^neg been ^papl$^neg ^papl$^who ^have ^neg been ^papl$^neg ^papl ^men$you ^who ^have been ^papl$^things that ^have been ^papl$"},
{"val0":"PPP voc plur fem","val1":"%having ^neg been ^papl$^neg ^papl$^who ^have ^neg been ^papl$^neg ^papl ^women$^fthey ^who ^have been ^papl$^things that ^have been ^papl$"},
{"val0":"PPP voc plur neut","val1":"%having ^neg been ^papl$^neg ^papl$^which ^have ^neg been ^papl$^things ^which ^have been ^papl$"},
{"val0":"PPP acc plur masc","val1":"%having ^neg been ^papl$^neg ^papl$^who ^have ^neg been ^papl$^neg ^papl ^men$^mthey ^who ^have been ^papl$"},
{"val0":"PPP acc plur fem","val1":"%having ^neg been ^papl$^neg ^papl$^who ^have ^neg been ^papl$^neg ^papl ^women$^fthey ^who ^have been ^papl$"},
{"val0":"PPP acc plur neut","val1":"%having ^neg been ^papl$^neg ^papl$^which ^have ^neg been ^papl$^things that ^have been ^papl$"},
{"val0":"PPP gen plur masc","val1":"%having ^neg been ^papl$^neg ^papl$^who ^have ^neg been ^papl$^of ^plart ^neg ^papl ^men$^of ^mthey ^who ^have been ^papl$"},
{"val0":"PPP gen plur fem","val1":"%having ^neg been ^papl$^neg ^papl$^who ^have ^neg been ^papl$^of ^plart ^neg ^papl ^women$^of ^fthey ^who ^have been ^papl$"},
{"val0":"PPP gen plur neut","val1":"%having ^neg been ^papl$^neg ^papl$^which ^have ^neg been ^papl$^of ^plart ^things ^which ^have been ^papl$^of those that ^have been ^papl$"},
{"val0":"PPP dat plur","val1":"%having ^neg been ^papl$^neg ^papl$^who ^have ^neg been ^papl$^to ^plart ^people ^who ^have ^neg been ^papl$^to ^plart ^neg ^papl ^people$"},
{"val0":"PPP abl plur","val1":"%having ^neg been ^papl$^neg ^papl$^who ^have ^neg been ^papl$^by ^plart ^people ^who ^have ^neg been ^papl$^to ^plart ^neg ^papl ^people$"},
{"val0":"pres participle nom sing","val1":"%^neg ^prpl$^who ^is ^neg ^prpl$^sart ^person ^who is ^neg ^prpl$that ^is ^neg ^prpl$^he ^who is ^prpl$"},
{"val0":"pres participle voc sing","val1":"%^neg ^prpl$^who ^is ^neg ^prpl$^sart ^person ^who is ^neg ^prpl$that ^is ^neg ^prpl$^he ^who is ^prpl$"},
{"val0":"pres participle acc sing masc/fem","val1":"%^neg ^prpl$^who ^is ^neg ^prpl$^sart ^person ^who is ^neg ^prpl$that ^is ^neg ^prpl$^him ^who is ^prpl$"},
{"val0":"pres participle acc sing neut","val1":"%^neg ^prpl$^who ^is ^neg ^prpl$^sart ^thing that is ^neg ^prpl$that ^is ^neg ^prpl$^him ^who is ^prpl$"},
{"val0":"pres participle gen sing","val1":"%^neg ^prpl$^who ^is ^neg ^prpl$^of ^sart ^person ^who is ^neg ^prpl$^of ^sart ^person ^neg ^prpl$^of ^sart ^neg ^prpl ^person$that ^is ^neg ^prpl$"},
{"val0":"pres participle dat sing","val1":"%^neg ^prpl$^who ^is ^neg ^prpl$^to ^sart ^person ^who is ^neg ^prpl$^to ^sart ^person ^neg ^prpl$^to ^sart ^neg ^prpl ^person$that ^is ^neg ^prpl$"},
{"val0":"pres participle abl sing","val1":"%^neg ^prpl$^who ^is ^neg ^prpl$^by ^sart ^person ^who is ^neg ^prpl$^by ^sart ^person ^neg ^prpl$^by ^sart ^neg ^prpl ^person$that ^is ^neg ^prpl$"},
{"val0":"pres participle nom plur masc/fem","val1":"%^neg ^prpl$^who are ^neg ^prpl$^people ^who are ^prpl$"},
{"val0":"pres participle voc plur masc/fem","val1":"%^neg ^prpl$^who are ^neg ^prpl$^people ^who are ^prpl$"},
{"val0":"pres participle acc plur masc/fem","val1":"%^neg ^prpl$^who are ^neg ^prpl$^people ^who are ^prpl$"},
{"val0":"pres participle nom plur neut","val1":"%^neg ^prpl$^who are ^neg ^prpl$^things that are ^prpl$"},
{"val0":"pres participle voc plur neut","val1":"%^neg ^prpl$^who are ^neg ^prpl$^things that are ^prpl$"},
{"val0":"pres participle acc plur neut","val1":"%^neg ^prpl$^who are ^neg ^prpl$^things that are ^prpl$"},
{"val0":"pres participle gen plur","val1":"%^neg ^prpl$^who are ^neg ^prpl$^of ^plart ^people ^who are ^prpl$"},
{"val0":"pres participle gen plur masc/fem","val1":"%^neg ^prpl$^who are ^neg ^prpl$^of ^plart ^people ^who are ^prpl$"},
{"val0":"pres participle dat plur","val1":"%^neg ^prpl$^who are ^neg ^prpl$^to ^plart ^people ^who are ^prpl$"},
{"val0":"pres participle abl plur","val1":"%^neg ^prpl$^who are ^neg ^prpl$^by ^plart ^people ^who are ^prpl$"},
{"val0":"adj nom sing","val1":"%^word$^sart ^word ^person$"},
{"val0":"adj nom sing masc","val1":"%^word$^sart ^word ^man$"},
{"val0":"adj nom sing fem","val1":"%^word$^sart ^word ^woman$"},
{"val0":"adj nom sing neut","val1":"%^word$^sart ^word ^thing$"},
{"val0":"adj nom sing masc/fem","val1":"%^word$^sart ^word ^person$"},
{"val0":"adj acc sing","val1":"%^word$^sart ^word ^person$"},
{"val0":"adj acc sing masc","val1":"%^word$^sart ^word ^man$"},
{"val0":"adj acc sing fem","val1":"%^word$^sart ^word ^woman$"},
{"val0":"adj acc sing neut","val1":"%^word$^sart ^word ^thing$"},
{"val0":"adj acc sing masc/fem","val1":"%^word$^sart ^word ^person$"},
{"val0":"adj voc sing","val1":"%^word$^word ^person$"},
{"val0":"adj voc sing masc","val1":"%^word$^word ^man$"},
{"val0":"adj voc sing fem","val1":"%^word$^word ^woman$"},
{"val0":"adj voc sing neut","val1":"%^word$^word ^thing$"},
{"val0":"adj voc sing masc/fem","val1":"%^word$^word ^person$"},
{"val0":"adj gen sing","val1":"%^word$^of ^sart ^word ^person$"},
{"val0":"adj gen sing masc","val1":"%^word$^of ^sart ^word ^man$"},
{"val0":"adj gen sing fem","val1":"%^word$^of ^sart ^word ^woman$"},
{"val0":"adj gen sing neut","val1":"%^word$^of ^sart ^word ^thing$"},
{"val0":"adj gen sing masc/fem","val1":"%^word$^of ^sart ^word ^person$"},
{"val0":"adj dat sing","val1":"%^word$^to ^sart ^word ^person$"},
{"val0":"adj dat sing masc","val1":"%^word$^to ^sart ^word ^man$"},
{"val0":"adj dat sing fem","val1":"%^word$^to ^sart ^word ^woman$"},
{"val0":"adj dat sing neut","val1":"%^word$^to ^sart ^word ^thing$"},
{"val0":"adj dat sing masc/fem","val1":"%^word$^to ^sart ^word ^person$"},
{"val0":"adj abl sing","val1":"%^word$^by ^sart ^word ^person$"},
{"val0":"adj abl sing masc","val1":"%^word$^by ^sart ^word ^man$"},
{"val0":"adj abl sing fem","val1":"%^word$^by ^sart ^word ^woman$"},
{"val0":"adj abl sing neut","val1":"%^word$^by ^sart ^word ^thing$"},
{"val0":"adj abl sing masc/fem","val1":"%^word$^by ^sart ^word ^person$"},
{"val0":"adj nom plur","val1":"%^word$^plart ^word ^people$"},
{"val0":"adj nom plur masc","val1":"%^word$^plart ^word ^men$"},
{"val0":"adj nom plur fem","val1":"%^word$^plart ^word ^women$"},
{"val0":"adj nom plur neut","val1":"%^word$^plart ^word ^things$"},
{"val0":"adj nom plur masc/fem","val1":"%^word$^plart ^word ^people$"},
{"val0":"adj acc plur","val1":"%^word$^plart ^word ^people$"},
{"val0":"adj acc plur masc","val1":"%^word$^plart ^word ^men$"},
{"val0":"adj acc plur fem","val1":"%^word$^plart ^word ^women$"},
{"val0":"adj acc plur neut","val1":"%^word$^plart ^word ^things$"},
{"val0":"adj acc plur masc/fem","val1":"%^word$^plart ^word ^people$"},
{"val0":"adj voc plur","val1":"%^word$^word ^people$"},
{"val0":"adj voc plur masc","val1":"%^word$^word ^men$"},
{"val0":"adj voc plur fem","val1":"%^word$^word ^women$"},
{"val0":"adj voc plur neut","val1":"%^word$^word ^things$"},
{"val0":"adj voc plur masc/fem","val1":"%^word$^word ^people$"},
{"val0":"adj gen plur","val1":"%^word$^of ^plart ^word ^people$"},
{"val0":"adj gen plur masc","val1":"%^word$^of ^plart ^word ^men$"},
{"val0":"adj gen plur fem","val1":"%^word$^of ^plart ^word ^women$"},
{"val0":"adj gen plur neut","val1":"%^word$^of ^plart ^word ^things$"},
{"val0":"adj gen plur masc/fem","val1":"%^word$^of ^plart ^word ^people$"},
{"val0":"adj dat plur","val1":"%^word$^to ^plart ^word ^people$"},
{"val0":"adj dat plur masc","val1":"%^word$^to ^plart ^word ^men$"},
{"val0":"adj dat plur fem","val1":"%^word$^to ^plart ^word ^women$"},
{"val0":"adj dat plur neut","val1":"%^word$^to ^plart ^word ^things$"},
{"val0":"adj dat plur masc/fem","val1":"%^word$^to ^plart ^word ^people$"},
{"val0":"adj abl plur","val1":"%^word$^by ^plart ^word ^people$"},
{"val0":"adj abl plur masc","val1":"%^word$^by ^plart ^word ^men$"},
{"val0":"adj abl plur fem","val1":"%^word$^by ^plart ^word ^women$"},
{"val0":"adj abl plur neut","val1":"%^word$^by ^plart ^word ^things$"},
{"val0":"adj abl plur masc/fem","val1":"%^word$^by ^plart ^word ^people$"},
{"val0":"verb pres passive infinitive","val1":"%^neg to be ^papl$^neg be ^papl$^neg being ^papl$"},
{"val0":"verb perf infinitive","val1":"%^neg to have ^papl$"},
{"val0":"verb infinitive","val1":"%^neg to ^inf$^neg ^inf$^neg ^prpl$^neg to be ^prpl$"},
{"val0":"verb perf passive infinitive","val1":"%^neg to have been ^papl$"},
{"val0":"verb future infinitive","val1":"%^neg to be about to ^inf$^neg to be going to ^inf$"},
{"val0":"verb fut passive infinitive","val1":"%^neg to be about to be ^papl$^neg to be going to be ^papl$"},
{"val0":"demons nom sing masc","val1":"%he$it$that$that ^man$"},
{"val0":"demons nom sing fem","val1":"%she$it$that$that ^woman$"},
{"val0":"demons nom sing acc","val1":"%it$that$that ^thing$"},
{"val0":"demons acc sing masc","val1":"%him$it$that$that ^man$"},
{"val0":"demons acc sing fem","val1":"%her$it$that$that ^woman$"},
{"val0":"demons acc sing neut","val1":"%it$that$that ^thing$"},
{"val0":"demons gen sing","val1":"%his$her$its$^of that$^of that ^person$"},
{"val0":"demons dat sing","val1":"%^to him$^to her$^to it$^to that$^to that ^person$"},
{"val0":"demons abl sing masc","val1":"%^by him$^by it$^by that$^by that ^person$"},
{"val0":"demons abl sing fem","val1":"%^by her$^by it$^by that$^by that ^person$"},
{"val0":"demons abl sing neut","val1":"%^by it$^by that$^by that ^thing$"},
{"val0":"demons nom plur masc","val1":"%they$those$those ^men$"},
{"val0":"demons nom plur fem","val1":"%they$those$those ^women$"},
{"val0":"demons nom plur neut","val1":"%those$they$those ^things$"},
{"val0":"demons acc plur masc","val1":"%them$those$those ^men$"},
{"val0":"demons acc plur fem","val1":"%them$those$those ^women$"},
{"val0":"demons acc plur neut","val1":"%those$them$those ^things$"},
{"val0":"demons gen plur masc","val1":"%their$^of them$^of those$^of those ^men$"},
{"val0":"demons gen plur fem","val1":"%their$^of them$^of those$^of those ^women$"},
{"val0":"demons gen plur neut","val1":"%their$^of them$^of those$^of those ^things$"},
{"val0":"demons dat plur","val1":"%^to them$^to those$^to those ^people$"},
{"val0":"demons abl plur","val1":"%^by them$^by those$^by those ^people$"},
{"val0":"relative nom sing masc","val1":"%who$which$^sart ^man who$^sart ^man which$what$this$"},
{"val0":"relative nom sing fem","val1":"%who$which$^sart ^woman who$^sart ^woman which$what$this$"},
{"val0":"relative nom sing neut","val1":"%which$^sart ^thing which$what$^sart ^thing that$this$"},
{"val0":"relative acc sing masc","val1":"%whom$which$who$^sart ^man whom$^sart ^man which$this$"},
{"val0":"relative acc sing fem","val1":"%whom$which$who$^sart ^woman whom$^sart ^woman which$what$this"},
{"val0":"relative acc sing neut","val1":"%which$^sart ^thing which$what$this$"},
{"val0":"relative gen sing","val1":"%whose$^of whom$^of which$^sart ^person whose$^plart ^person of whom$^of this$"},
{"val0":"relative dat sing","val1":"%^to whom$^to which$^to ^sart ^person whom$^to ^sart ^thing which$^to this$"},
{"val0":"relative abl sing masc","val1":"%^by whom$^by which$^by ^sart ^man whom$^by ^sart ^thing which$^by this$"},
{"val0":"relative abl sing fem","val1":"%^by whom$^by which$^by ^sart ^woman whom$^by ^sart ^thing which$^by this$"},
{"val0":"relative abl sing neut","val1":"%^by which$^by ^sart ^thing which$^by this$"},
{"val0":"relative nom plur masc","val1":"%who$which$^plart ^men who$^plart ^men which$these$"},
{"val0":"relative nom plur fem","val1":"%who$which$^plart women who$^plart ^women which$these$"},
{"val0":"relative nom plur neut","val1":"%which$^plart ^things which$these$"},
{"val0":"relative acc plur masc","val1":"%whom$which$who$^plart ^men ^whom$^sart ^men which$these$"},
{"val0":"relative acc plur fem","val1":"%whom$which$who$^plart ^women ^whom$^sart ^women which$these$"},
{"val0":"relative acc plur neut","val1":"%which$^plart ^things which$these$"},
{"val0":"relative gen plur masc","val1":"%whose$^of whom$^of which$^plart ^men whose$^plart ^men ^of whom$^of these$"},
{"val0":"relative gen plur fem","val1":"%whose$^of whom$^of which$^plart ^women whose$^plart ^women ^of whom$^of these$"},
{"val0":"relative gen plur neut","val1":"%^of which$^plart ^things of which$^plart ^things whose$which$^of these$"},
{"val0":"relative dat plur","val1":"%^to whom$^to which$^to ^plart ^people whom$^to ^plart ^things which$^to these$"},
{"val0":"relative abl plur","val1":"%^by whom$^by which$^by ^plart ^people whom$^by these$"},
{"val0":"demons (this) nom sing masc","val1":"%this$this ^man$"},
{"val0":"demons (this) nom sing fem","val1":"%this$this ^woman$"},
{"val0":"demons (this) nom sing neut","val1":"%this$this ^thing$"},
{"val0":"demons (this) acc sing masc","val1":"%this$this ^man$"},
{"val0":"demons (this) acc sing fem","val1":"%this$this ^woman$"},
{"val0":"demons (this) acc sing neut","val1":"%this$this ^thing$"},
{"val0":"demons (this) gen sing","val1":"%this$of this ^person$"},
{"val0":"demons (this) dat sing","val1":"%this$^to this ^person$"},
{"val0":"demons (this) abl sing masc","val1":"%this$^by this ^man$"},
{"val0":"demons (this) abl sing fem","val1":"%this$^by this ^woman$"},
{"val0":"demons (this) abl sing neut","val1":"%this$^by this ^thing$"},
{"val0":"demons (this) nom plur masc","val1":"%these$these ^men$"},
{"val0":"demons (this) nom plur fem","val1":"%these$these ^women$"},
{"val0":"demons (this) nom plur neut","val1":"%these$these ^things$"},
{"val0":"demons (this) acc plur masc","val1":"%these$these ^men$"},
{"val0":"demons (this) acc plur fem","val1":"%these$these ^women$"},
{"val0":"demons (this) acc plur neut","val1":"%these$these ^things$"},
{"val0":"demons (this) gen plur masc","val1":"%these$^of these ^men$"},
{"val0":"demons (this) gen plur fem","val1":"%these$^of these ^women$"},
{"val0":"demons (this) gen plur neut","val1":"%these$^of these ^things$"},
{"val0":"demons (this) dat plur","val1":"%these$^to these ^people$"},
{"val0":"demons (this) abl plur","val1":"%these$^by these ^people$"},
{"val0":"1st pron nom sing masc/fem","val1":"%I$me$"},
{"val0":"1st pron acc sing masc/fem","val1":"%me$"},
{"val0":"1st pron gen sing masc/fem","val1":"%my$of me$me$"},
{"val0":"1st pron dat sing masc/fem","val1":"%^to me$me$"},
{"val0":"1st pron abl sing masc/fem","val1":"%^by me$me$"},
{"val0":"1st pron nom plur masc/fem","val1":"%we$us$I$"},
{"val0":"1st pron acc plur masc/fem","val1":"%us$me$"},
{"val0":"1st pron gen plur masc/fem","val1":"%our$of us$us$my$"},
{"val0":"1st pron dat plur masc/fem","val1":"%^to us$us$^to me$"},
{"val0":"1st pron abl plur masc/fem","val1":"%^by us$us$^by me$"},
{"val0":"2nd pron nom sing masc/fem","val1":"%you$"},
{"val0":"2nd pron acc sing masc/fem","val1":"%you$"},
{"val0":"2nd pron gen sing masc/fem","val1":"%your$of you$you$"},
{"val0":"2nd pron dat sing masc/fem","val1":"%^to you$you$"},
{"val0":"2nd pron abl sing masc/fem","val1":"%^by you$you$"},
{"val0":"2nd pron nom plur masc/fem","val1":"%you$"},
{"val0":"2nd pron acc plur masc/fem","val1":"%you$"},
{"val0":"2nd pron gen plur masc/fem","val1":"%your$of you$you$"},
{"val0":"2nd pron dat plur masc/fem","val1":"%^to you$you$"},
{"val0":"2nd pron abl plur masc/fem","val1":"%^by you$you$"},
{"val0":"reflex pron acc masc/fem","val1":"%himself$herself$itself$themselves$him$her$it"},
{"val0":"reflex pron gen masc/fem","val1":"%of himself$of herself$of themselves$of itself$his$her$its"},
{"val0":"reflex pron dat masc/fem","val1":"%^to himself$^to herself$^to themselves$^to itself$him$her$it"},
{"val0":"reflex pron abl masc/fem","val1":"%^by himself$^by herself$^by itself$^by themselves$him$her$it"},
{"val0":"verb pres impv 2nd sing","val1":"%^inf$do ^inf"},
{"val0":"verb pres impv 2nd plur","val1":"%^inf$do ^inf"},
{"val0":"verb pres passive impv 2nd sing","val1":"%be ^papl$"},
{"val0":"verb pres passive impv 2nd plur","val1":"%be ^papl$"},
{"val0":"verb fut impv 3rd sing","val1":"%^inf$do ^inf"},
{"val0":"verb fut impv 3rd plur","val1":"%^inf$do ^inf"},
{"val0":"verb fut impv 2nd sing","val1":"%^inf$do ^inf"},
{"val0":"verb fut impv 2nd plur","val1":"%^inf$do ^inf"},
{"val0":"fut participle nom sing masc","val1":"%about to ^inf$going to ^inf$^sart ^man who^ ^is about to ^inf$"},
{"val0":"fut participle nom sing fem","val1":"%about to ^inf$going to ^inf$^sart ^woman who^ ^is about to ^inf$"},
{"val0":"fut participle nom sing neut","val1":"%about to ^inf$going to ^inf$^sart ^thing which^ ^is about to ^inf$"},
{"val0":"fut participle voc sing masc","val1":"%about to ^inf$going to ^inf$^you who^ are about to ^inf$"},
{"val0":"fut participle voc sing fem","val1":"%about to ^inf$going to ^inf$^you who^ are about to ^inf$"},
{"val0":"fut participle voc sing neut","val1":"%about to ^inf$going to ^inf$^you who^ are about to ^inf$"},
{"val0":"fut participle acc sing masc","val1":"%about to ^inf$going to ^inf$^sart ^man who^ ^is about to ^inf$"},
{"val0":"fut participle acc sing fem","val1":"%about to ^inf$going to ^inf$^sart ^woman who^  ^is about to ^inf$"},
{"val0":"fut participle acc sing neut","val1":"%about to ^inf$going to ^inf$^sart ^thing whixh ^is about to ^inf$"},
{"val0":"fut participle gen sing masc","val1":"%about to ^inf$going to ^inf$^of ^sart ^man who^ ^is about to ^inf$"},
{"val0":"fut participle gen sing fem","val1":"%about to ^inf$going to ^inf$^of ^sart ^woman who^ ^is about to ^inf$"},
{"val0":"fut participle gen sing neut","val1":"%about to ^inf$going to ^inf$^of ^sart ^thing which^ ^is about to ^inf$"},
{"val0":"fut participle dat sing masc","val1":"%about to ^inf$going to ^inf$^to ^sart ^man who^ ^is about to ^inf$"},
{"val0":"fut participle dat sing fem","val1":"%about to ^inf$going to ^inf$^to ^sart ^woman who^ ^is about to ^inf$"},
{"val0":"fut participle dat sing neut","val1":"%about to ^inf$going to ^inf$^to ^sart ^thing which^ ^is about to ^inf$"},
{"val0":"fut participle abl sing masc","val1":"%about to ^inf$going to ^inf$^by ^sart ^man who^ ^is about to ^inf$"},
{"val0":"fut participle abl sing fem","val1":"%about to ^inf$going to ^inf$^by ^sart ^woman who^ ^is about to ^inf$"},
{"val0":"fut participle abl sing neut","val1":"%about to ^inf$going to ^inf$^by ^sart ^thing which^ ^is about to ^inf$"},
{"val0":"fut participle nom plur masc","val1":"%about to ^inf$going to ^inf$^plart ^men who^ are about to ^inf$"},
{"val0":"fut participle nom plur fem","val1":"%about to ^inf$going to ^inf$^plart ^women who^ are about to ^inf$"},
{"val0":"fut participle nom plur neut","val1":"%about to ^inf$going to ^inf$^plart ^things which^ are about to ^inf$"},
{"val0":"fut participle voc plur masc","val1":"%about to ^inf$going to ^inf$^you who^ are about to ^inf$"},
{"val0":"fut participle voc plur fem","val1":"%about to ^inf$going to ^inf$^you who^ are about to ^inf$"},
{"val0":"fut participle voc plur neut","val1":"%about to ^inf$going to ^inf$^you who^ are about to ^inf$"},
{"val0":"fut participle acc plur masc","val1":"%about to ^inf$going to ^inf$^plart ^men who^ are about to ^inf$"},
{"val0":"fut participle acc plur fem","val1":"%about to ^inf$going to ^inf$^plart ^women who^  are about to ^inf$"},
{"val0":"fut participle acc plur neut","val1":"%about to ^inf$going to ^inf$^plart ^things which^ are about to ^inf$"},
{"val0":"fut participle gen plur masc","val1":"%about to ^inf$going to ^inf$^of ^plart ^men who^ are about to ^inf$"},
{"val0":"fut participle gen plur fem","val1":"%about to ^inf$going to ^inf$^of ^plart ^women who^  are about to ^inf$"},
{"val0":"fut participle gen plur neut","val1":"%about to ^inf$going to ^inf$^of ^plart ^things which^ are about to ^inf$"},
{"val0":"fut participle dat plur","val1":"%about to ^inf$going to ^inf$^to ^plart ^people who^ are about to ^inf$"},
{"val0":"fut participle abl plur","val1":"%about to ^inf$going to ^inf$^by ^plart ^people who^ are about to ^inf$"},
{"val0":"gerund acc sing neut","val1":"%^prpl$^inf$"},
{"val0":"gerund gen sing neut","val1":"%^of ^prpl$^inf$"},
{"val0":"gerund dat sing neut","val1":"%^to ^prpl$^inf$"},
{"val0":"gerund abl sing neut","val1":"%^by ^prpl$^inf$"},
{"val0":"gerundive nom sing masc","val1":"%to be ^papl$needing to be ^papl$^sart ^man ^who ^is to be ^papl$"},
{"val0":"gerundive nom sing fem","val1":"%to be ^papl$needing to be ^papl$^sart ^woman ^who ^is to be ^papl$"},
{"val0":"gerundive nom sing neut","val1":"%to be ^papl$needing to be ^papl$^sart ^thing ^which ^is to be ^papl$"},
{"val0":"gerundive voc sing masc","val1":"%to be ^papl$needing to be ^papl$you ^who are to be ^papl$"},
{"val0":"gerundive voc sing fem","val1":"%to be ^papl$needing to be ^papl$you ^who are to be ^papl$"},
{"val0":"gerundive voc sing neut","val1":"%to be ^papl$needing to be ^papl$you ^who are to be ^papl$"},
{"val0":"gerundive acc sing masc","val1":"%to be ^papl$needing to be ^papl$^sart ^man ^who ^is to be ^papl$"},
{"val0":"gerundive acc sing fem","val1":"%to be ^papl$needing to be ^papl$^sart ^woman ^who ^is to be ^papl$"},
{"val0":"gerundive acc sing neut","val1":"%to be ^papl$needing to be ^papl$^sart ^thing ^which ^is to be ^papl$"},
{"val0":"gerundive gen sing masc","val1":"%to be ^papl$needing to be ^papl$^of ^sart ^man ^who ^is to be ^papl$"},
{"val0":"gerundive gen sing fem","val1":"%to be ^papl$needing to be ^papl$^of ^sart ^woman ^who ^is to be ^papl$"},
{"val0":"gerundive gen sing neut","val1":"%to be ^papl$needing to be ^papl$^of ^sart ^thing ^which ^is to be ^papl$"},
{"val0":"gerundive dat sing masc","val1":"%to be ^papl$needing to be ^papl$^to ^sart ^man ^who ^is to be ^papl$"},
{"val0":"gerundive dat sing fem","val1":"%to be ^papl$needing to be ^papl$^to ^sart ^woman ^who ^is to be ^papl$"},
{"val0":"gerundive dat sing neut","val1":"%to be ^papl$needing to be ^papl$^to ^sart ^thing ^which ^is to be ^papl$"},
{"val0":"gerundive abl sing masc","val1":"%to be ^papl$needing to be ^papl$^by ^sart ^man ^who ^is to be ^papl$"},
{"val0":"gerundive abl sing fem","val1":"%to be ^papl$needing to be ^papl$^by ^sart ^woman ^who ^is to be ^papl$"},
{"val0":"gerundive abl sing neut","val1":"%to be ^papl$needing to be ^papl$^by ^sart ^thing ^which ^is to be ^papl$"},
{"val0":"gerundive nom plur masc","val1":"%to be ^papl$needing to be ^papl$^plart ^men ^who are to be ^papl$"},
{"val0":"gerundive nom plur fem","val1":"%to be ^papl$needing to be ^papl$^plart ^women ^who are to be ^papl$"},
{"val0":"gerundive nom plur neut","val1":"%to be ^papl$needing to be ^papl$^plart ^things ^which are to be ^papl$"},
{"val0":"gerundive voc plur masc","val1":"%to be ^papl$needing to be ^papl$you ^who are to be ^papl$"},
{"val0":"gerundive voc plur fem","val1":"%to be ^papl$needing to be ^papl$you ^who are to be ^papl$"},
{"val0":"gerundive voc plur neut","val1":"%to be ^papl$needing to be ^papl$you ^who are to be ^papl$"},
{"val0":"gerundive acc plur masc","val1":"%to be ^papl$needing to be ^papl$^plart ^men ^who are to be ^papl$"},
{"val0":"gerundive acc plur fem","val1":"%to be ^papl$needing to be ^papl$^plart ^women ^who are to be ^papl$"},
{"val0":"gerundive acc plur neut","val1":"%to be ^papl$needing to be ^papl$^plart ^things ^which are to be ^papl$"},
{"val0":"gerundive gen plur masc","val1":"%to be ^papl$needing to be ^papl$^of ^plart ^men ^who are to be ^papl$"},
{"val0":"gerundive gen plur fem","val1":"%to be ^papl$needing to be ^papl$^of ^plart ^women ^who are to be ^papl$"},
{"val0":"gerundive gen plur neut","val1":"%to be ^papl$needing to be ^papl$^of ^plart ^things ^which are to be ^papl$"},
{"val0":"gerundive dat plur","val1":"%to be ^papl$needing to be ^papl$^to ^plart ^people ^who are to be ^papl$"},
{"val0":"gerundive abl plur","val1":"%to be ^papl$needing to be ^papl$^by ^plart ^people ^who are to be ^papl$"},
{"val0":"PAP nom sing masc","val1":"%having ^papl$^who ^has ^papl$^sart ^man ^who ^has ^papl$"},
{"val0":"PAP nom sing fem","val1":"%having ^papl$^who ^has ^papl$^sart ^woman ^who ^has ^papl$"},
{"val0":"PAP nom sing neut","val1":"%having ^papl$^which ^has ^papl$^sart ^thing ^which ^has ^papl$"},
{"val0":"PAP voc sing masc","val1":"%having ^papl$^who ^has ^papl$you ^who ^have ^papl$"},
{"val0":"PAP voc sing fem","val1":"%having ^papl$^who ^has ^papl$you ^who ^have ^papl$"},
{"val0":"PAP voc sing neut","val1":"%having ^papl$^which ^has ^papl$you ^who ^have ^papl$"},
{"val0":"PAP acc sing masc","val1":"%having ^papl$^who ^has ^papl$^sart ^man ^who ^has ^papl$"},
{"val0":"PAP acc sing fem","val1":"%having ^papl$^who ^has ^papl$^sart ^woman ^who ^has ^papl$"},
{"val0":"PAP acc sing neut","val1":"%having ^papl$^which ^has ^papl$^sart ^thing ^which ^has ^papl$"},
{"val0":"PAP gen sing masc","val1":"%having ^papl$^who ^has ^papl$^of ^sart ^man ^who ^has ^papl$"},
{"val0":"PAP gen sing fem","val1":"%having ^papl$^who ^has ^papl$^of ^sart ^woman ^who ^has ^papl$"},
{"val0":"PAP gen sing neut","val1":"%having ^papl$^which ^has ^papl$^of ^sart ^thing ^which ^has ^papl$"},
{"val0":"PAP dat sing masc","val1":"%having ^papl$^who ^has ^papl$^to ^sart ^man ^who ^has ^papl$"},
{"val0":"PAP dat sing fem","val1":"%having ^papl$^who ^has ^papl$^to ^sart ^woman ^who ^has ^papl$"},
{"val0":"PAP dat sing neut","val1":"%having ^papl$^which ^has ^papl$^to ^sart ^thing ^which ^has ^papl$"},
{"val0":"PAP abl sing masc","val1":"%having ^papl$^who ^has ^papl$^by ^sart ^man ^who ^has ^papl$"},
{"val0":"PAP abl sing fem","val1":"%having ^papl$^who ^has ^papl$^by ^sart ^woman ^who ^has ^papl$"},
{"val0":"PAP abl sing neut","val1":"%having ^papl$^which ^has ^papl$^by ^sart ^thing ^which ^has ^papl$"},
{"val0":"PAP nom plur masc","val1":"%having ^papl$^who ^have ^papl$^plart ^men ^who ^have ^papl$"},
{"val0":"PAP nom plur fem","val1":"%having ^papl$^who ^have ^papl$^plart ^women ^who ^have ^papl$"},
{"val0":"PAP nom plur neut","val1":"%having ^papl$^which ^have ^papl$^plart ^things ^which ^have ^papl$"},
{"val0":"PAP voc plur masc","val1":"%having ^papl$^who ^have ^papl$you ^who ^have ^papl$"},
{"val0":"PAP voc plur fem","val1":"%having ^papl$^who ^have ^papl$you ^who ^have ^papl$"},
{"val0":"PAP voc plur neut","val1":"%having ^papl$^which ^have ^papl$you ^who ^have ^papl$"},
{"val0":"PAP acc plur masc","val1":"%having ^papl$^who ^have ^papl$^plart ^men ^who ^have ^papl$"},
{"val0":"PAP acc plur fem","val1":"%having ^papl$^who ^have ^papl$^plart ^women ^who ^have ^papl$"},
{"val0":"PAP acc plur neut","val1":"%having ^papl$^which ^have ^papl$^plart ^things ^which ^have ^papl$"},
{"val0":"PAP gen plur masc","val1":"%having ^papl$^who ^have ^papl$^of ^plart ^men ^who ^have ^papl$"},
{"val0":"PAP gen plur fem","val1":"%having ^papl$^who ^have ^papl$^of ^plart ^women ^who ^have ^papl$"},
{"val0":"PAP gen plur neut","val1":"%having ^papl$^which ^have ^papl$^of ^plart ^things ^which ^have ^papl$"},
{"val0":"PAP dat plur","val1":"%having ^papl$^who ^have ^papl$^to ^plart ^people ^who ^have ^papl$"},
{"val0":"PAP abl plur","val1":"%having ^papl$^who ^have ^papl$^by ^plart ^people ^who ^have ^papl$"},
{"val0":"adj nom sing masc superlative","val1":"%^sup$very ^word$^sart most ^word ^man$^sart ^sup ^man$^sart very ^word ^man$"},
{"val0":"adj nom sing fem superlative","val1":"%^sup$very ^word$^sart most ^word ^woman$^sart ^sup ^woman$^sart very ^word ^woman$"},
{"val0":"adj nom sing neut superlative","val1":"%^sup$very ^word$^sart most ^word ^thing$^sart ^sup ^thing$^sart very ^word ^thing$"},
{"val0":"adj voc sing masc superlative","val1":"%^sup$very ^word$you most ^word ^man$you ^sup ^man$you very ^word ^man$"},
{"val0":"adj voc sing fem superlative","val1":"%^sup$very ^word$you most ^word ^woman$you ^sup ^woman$you very ^word ^woman$"},
{"val0":"adj voc sing neut superlative","val1":"%^sup$very ^word$you most ^word ^thing$you ^sup ^thing$you very ^word ^thing$"},
{"val0":"adj acc sing masc superlative","val1":"%^sup$very ^word$^sart most ^word ^man$^sart ^sup ^man$^sart very ^word ^man$"},
{"val0":"adj acc sing fem superlative","val1":"%^sup$very ^word$^sart most ^word ^woman$^sart ^sup ^woman$^sart very ^word ^woman$"},
{"val0":"adj acc sing neut superlative","val1":"%^sup$very ^word$^sart most ^word ^thing$^sart ^sup ^thing$^sart very ^word ^thing$"},
{"val0":"adj gen sing masc superlative","val1":"%^sup$very ^word$^of ^sart most ^word ^man$^of ^sart ^sup ^man$^of ^sart very ^word ^man$"},
{"val0":"adj gen sing fem superlative","val1":"%^sup$very ^word$^of ^sart most ^word ^woman$^of ^sart ^sup ^woman$^of ^sart very ^word ^woman$"},
{"val0":"adj gen sing neut superlative","val1":"%^sup$very ^word$^of ^sart most ^word ^thing$^of ^sart ^sup ^thing$^of ^sart very ^word ^thing$"},
{"val0":"adj dat sing masc superlative","val1":"%^sup$very ^word$^to ^sart most ^word ^man$^to ^sart ^sup ^man$^to ^sart very ^word ^man$"},
{"val0":"adj dat sing fem superlative","val1":"%^sup$very ^word$^to ^sart most ^word ^woman$^to ^sart ^sup ^woman$^to ^sart very ^word ^woman$"},
{"val0":"adj dat sing neut superlative","val1":"%^sup$very ^word$^to ^sart most ^word ^thing$^to ^sart ^sup ^thing$^to ^sart very ^word ^thing$"},
{"val0":"adj abl sing masc superlative","val1":"%^sup$very ^word$^by ^sart most ^word ^man$^by ^sart ^sup ^man$^by ^sart very ^word ^man$"},
{"val0":"adj abl sing fem superlative","val1":"%^sup$very ^word$^by ^sart most ^word ^woman$^by ^sart ^sup ^woman$^by ^sart very ^word ^woman$"},
{"val0":"adj abl sing neut superlative","val1":"%^sup$very ^word$^by ^sart most ^word ^thing$^by ^sart ^sup ^thing$^by ^sart very ^word ^thing$"},
{"val0":"adj nom plur masc superlative","val1":"%^sup$very ^word$^plart most ^word ^men$^plart ^sup ^men$^plart very ^word ^men$"},
{"val0":"adj nom plur fem superlative","val1":"%^sup$very ^word$^plart most ^word ^woman$^plart ^sup ^woman$^plart very ^word ^woman$"},
{"val0":"adj nom plur neut superlative","val1":"%^sup$very ^word$^plart most ^word ^things$^plart ^sup ^things$^plart very ^word ^things$"},
{"val0":"adj voc plur masc superlative","val1":"%^sup$very ^word$you most ^word  ^men$you ^sup  ^men$you very ^word  ^men$"},
{"val0":"adj voc plur fem superlative","val1":"%^sup$very ^word$you most ^word  ^women$you ^sup  ^women$you very ^word  ^women$"},
{"val0":"adj voc plur neut superlative","val1":"%^sup$very ^word$you most ^word  ^things$you ^sup  ^things$you very ^word  ^things$"},
{"val0":"adj acc plur masc superlative","val1":"%^sup$very ^word$^plart most ^word ^men$^plart ^sup ^men$^plart very ^word ^men$"},
{"val0":"adj acc plur fem superlative","val1":"%^sup$very ^word$^plart most ^word ^woman$^plart ^sup ^woman$^plart very ^word ^woman$"},
{"val0":"adj acc plur neut superlative","val1":"%^sup$very ^word$^plart most ^word ^things$^plart ^sup ^things$^plart very ^word ^things$"},
{"val0":"adj gen plur masc superlative","val1":"%^sup$very ^word$^of ^plart most ^word ^men$^of ^plart ^sup ^men$^of ^plart very ^word ^men$"},
{"val0":"adj gen plur fem superlative","val1":"%^sup$very ^word$^of ^plart most ^word ^woman$^of ^plart ^sup ^woman$^of ^plart very ^word ^woman$"},
{"val0":"adj gen plur neut superlative","val1":"%^sup$very ^word$^of ^plart most ^word ^things$^of ^plart ^sup ^things$^of ^plart very ^word ^things$"},
{"val0":"adj dat plur superlative","val1":"%^sup$very ^word$^to ^plart most ^word ^people$^to ^plart ^sup ^people$^to ^plart very ^word ^people$"},
{"val0":"adj abl plur superlative","val1":"%^sup$very ^word$^by ^plart most ^word ^people$^by ^plart ^sup ^people$^by ^plart very ^word ^people$"},
{"val0":"adj nom sing masc/fem comparative","val1":"%^comp$quite ^word$^sart more ^word ^person$^sart ^comp ^person$"},
{"val0":"adj nom sing neut comparative","val1":"%^comp$quite ^word$^sart more ^word ^thing$^sart ^comp ^thing$"},
{"val0":"adj voc sing masc/fem comparative","val1":"%^comp$quite ^word$more ^word ^person$^comp ^person$"},
{"val0":"adj voc sing neut comparative","val1":"%^comp$quite ^word$more ^word ^thing$^comp ^thing$"},
{"val0":"adj acc sing masc/fem comparative","val1":"%^comp$quite ^word$^sart more ^word ^person$^sart ^comp ^person$"},
{"val0":"adj acc sing neut comparative","val1":"%^comp$quite ^word$^sart more ^word ^thing$^sart ^comp ^thing$"},
{"val0":"adj gen sing comparative","val1":"%^comp$quite ^word$^of ^sart more ^word ^person$^of ^sart ^comp ^person$"},
{"val0":"adj gen sing masc/fem comparative","val1":"%^comp$quite ^word$^of ^sart more ^word ^person$^of ^sart ^comp ^person$"},
{"val0":"adj gen sing neut comparative","val1":"%^comp$quite ^word$^of ^art more ^word ^thing$^of ^art ^comp ^thing$"},
{"val0":"adj dat sing comparative","val1":"%^comp$quite ^word$^to ^sart more ^word ^person$^to ^sart ^comp ^person$"},
{"val0":"adj abl sing comparative","val1":"%^comp$quite ^word$^by ^sart more ^word ^person$^by ^sart ^comp ^person$"},
{"val0":"adj nom plur masc/fem comparative","val1":"%^comp$quite ^word$^plart more ^word ^people$^plart ^comp ^people$"},
{"val0":"adj nom plur neut comparative","val1":"%^comp$quite ^word$^plart more ^word ^things$^plart ^comp ^things$"},
{"val0":"adj voc plur masc/fem comparative","val1":"%^comp$quite ^word$more ^word ^people$^comp ^people$"},
{"val0":"adj voc plur neut comparative","val1":"%^comp$quite ^word$more ^word ^things$^comp ^things$"},
{"val0":"adj acc plur masc/fem comparative","val1":"%^comp$quite ^word$^plart more ^word ^people$^plart ^comp ^people$"},
{"val0":"adj acc plur neut comparative","val1":"%^comp$quite ^word$^plart more ^word ^things$^plart ^comp ^things$"},
{"val0":"adj gen plur comparative","val1":"%^comp$quite ^word$^of ^plart more ^word ^people$^of ^plart ^comp ^people$"},
{"val0":"adj dat plur comparative","val1":"%^comp$quite ^word$^to ^plart more ^word ^people$^to ^plart ^comp ^people$"},
{"val0":"adj abl plur comparative","val1":"%^comp$quite ^word$^by ^plart more ^word ^people$^by ^plart ^comp ^people$"},
{"val0":"intensive nom sing masc","val1":"%himself$itself$myself$yourself$the very$him$it"},
{"val0":"intensive nom sing fem","val1":"%herself$itself$myself$yourself$the very$her$it"},
{"val0":"intensive nom sing neut","val1":"%itself$the very$"},
{"val0":"intensive voc sing masc","val1":"%yourself$you yourself$"},
{"val0":"intensive voc sing fem","val1":"%yourself$you yourself$"},
{"val0":"intensive voc sing neut","val1":"%yourself$you yourself$"},
{"val0":"intensive acc sing masc","val1":"%himself$itself$myself$yourself$the very$him$it"},
{"val0":"intensive acc sing fem","val1":"%herself$itself$myself$yourself$the very$her$it"},
{"val0":"intensive acc sing neut","val1":"%itself$the very$"},
{"val0":"intensive gen sing","val1":"%himself$herself$myself$itself$^of him$^of her$^of it"},
{"val0":"intensive dat sing","val1":"%himself$herself$myself$itself$^to him$^to her$^to it"},
{"val0":"intensive abl sing masc","val1":"%himself$myself$yourself$^by him$^by her$^by it$"},
{"val0":"intensive abl sing fem","val1":"%herself$myself$yourself$^by him$^by her$^by it$"},
{"val0":"intensive abl sing neut","val1":"%itself$^by it$"},
{"val0":"intensive nom plur masc","val1":"%themselves$them$ourselves$yourselves$"},
{"val0":"intensive nom plur fem","val1":"%themselves$them$ourselves$yourselves$"},
{"val0":"intensive nom plur neut","val1":"%themselves$them$"},
{"val0":"intensive voc plur masc","val1":"%themselves$them$ourselves$yourselves$"},
{"val0":"intensive voc plur fem","val1":"%themselves$them$ourselves$yourselves$"},
{"val0":"intensive voc plur neut","val1":"%themselves$them$"},
{"val0":"intensive acc plur masc","val1":"%themselves$them$ourselves$yourselves$"},
{"val0":"intensive acc plur fem","val1":"%themselves$them$ourselves$yourselves$"},
{"val0":"intensive acc plur neut","val1":"%themselves$them$"},
{"val0":"intensive gen plur","val1":"%themselves$themselves$ourselves$yourselves$"},
{"val0":"intensive dat plur","val1":"%themselves$themselves$ourselves$yourselves$"},
{"val0":"intensive abl plur","val1":"%themselves$themselves$ourselves$yourselves$"},
{"val0":"supine abl sing neut","val1":"%to ^inf$"},
{"val0":"supine acc sing neut","val1":"%to ^inf$in order to ^inf$"},
{"val0":"adv comparative","val1":"%more ^word$quite ^word$"},
{"val0":"adv superlative","val1":"%very ^word$most ^word$^word as possible$"},
{"val0":"adv (from adj)","val1":"%^adv$in ^sart ^word way$"},
{"val0":"adv comparative (from adj)","val1":"%more ^adv$in a more ^word way$"},
{"val0":"adv superlative (from adj)","val1":"%most ^adv$very ^adv$^adv as possible$in a very ^word way$"},
{"val0":"demons (same) nom sing masc","val1":"%the same$the same ^man$"},
{"val0":"demons (same) nom sing fem","val1":"%the same$the same ^woman$"},
{"val0":"demons (same) nom sing neut","val1":"%the same$the same ^thing$"},
{"val0":"demons (same) acc sing masc","val1":"%the same$the same ^man$"},
{"val0":"demons (same) acc sing fem","val1":"%the same$the same ^woman$"},
{"val0":"demons (same) acc sing neut","val1":"%the same$the same ^thing$"},
{"val0":"demons (same) gen sing","val1":"%the same$of the same ^person$"},
{"val0":"demons (same) dat sing","val1":"%the same$^to the same ^person$"},
{"val0":"demons (same) abl sing masc","val1":"%the same$^by the same ^man$"},
{"val0":"demons (same) abl sing fem","val1":"%the same$^by the same ^woman$"},
{"val0":"demons (same) abl sing neut","val1":"%the same$^by the same ^thing$"},
{"val0":"demons (same) nom plur masc","val1":"%the same$the same ^men$"},
{"val0":"demons (same) nom plur fem","val1":"%the same$the same ^women$"},
{"val0":"demons (same) nom plur neut","val1":"%the same$the same ^things$"},
{"val0":"demons (same) acc plur masc","val1":"%the same$the same ^men$"},
{"val0":"demons (same) acc plur fem","val1":"%the same$the same ^women$"},
{"val0":"demons (same) acc plur neut","val1":"%the same$the same ^things$"},
{"val0":"demons (same) gen plur masc","val1":"%the same$^of the same ^men$"},
{"val0":"demons (same) gen plur fem","val1":"%the same$^of the same ^women$"},
{"val0":"demons (same) gen plur neut","val1":"%the same$^of the same ^things$"},
{"val0":"demons (same) dat plur","val1":"%the same$^to the same ^people$"},
{"val0":"demons (same) abl plur","val1":"%the same$^by the same ^people$"},
{"val0":"interrogative nom sing masc/fem","val1":"%who$which ^person$"},
{"val0":"interrogative nom sing neut","val1":"%what$what ^thing$which ^thing$"},
{"val0":"interrogative acc sing neut","val1":"%what$what ^thing$which ^thing$"},
{"val0":"adj","val1":"%^word$"}]}
b = partscollection.lines.length
var targetid = document.getElementById("ww").getAttribute("selectedbox")
var grammar = document.getElementById('gramm' + targetid).innerText.trim()
for (var c=0;c<b;c++){
if(partscollection.lines[c].val0 == grammar){
return partscollection.lines[c].val1
}


var e = 0

  }
}

function build(targetid){
var meaning = document.getElementById(targetid).getAttribute('meaning')


meaning = meaning + '$'
meaning = meaning.match(/\%(.*?)\$/g)[0]
var wordy = document.getElementById(targetid).getAttribute('def')
wordy = wordy + '$' 
var word = wordy.match(/\%(.*?)\$/g)[0].replace('$',"").replace('%','').replace(',','')
document.getElementById(targetid).setAttribute('inf',getverbparts(word,0))
//document.getElementById(targetid).setAttribute('neg',document.getElementById('gramm' + targetid).getAttribute('neg'))
document.getElementById(targetid).setAttribute('plpast',getverbparts(word,5))
document.getElementById(targetid).setAttribute('spast',getverbparts(word,4))
document.getElementById(targetid).setAttribute('prpl',getverbparts(word,7))
document.getElementById(targetid).setAttribute('papl',getverbparts(word,6))
document.getElementById(targetid).setAttribute('pres3',getverbparts(word,3))
document.getElementById(targetid).setAttribute('pres1',getverbparts(word,1))
document.getElementById(targetid).setAttribute('plpres',getverbparts(word,2))
document.getElementById(targetid).setAttribute('sing',word)
document.getElementById(targetid).setAttribute('word',word)
document.getElementById(targetid).setAttribute('plur',pluralize(word))
document.getElementById(targetid).setAttribute('comp',gradation(word,0))
document.getElementById(targetid).setAttribute('sup',gradation(word,1))
document.getElementById(targetid).setAttribute('posplur',posplur(word))
document.getElementById(targetid).setAttribute('possing',possing(word))
document.getElementById(targetid).setAttribute('adv',adv(word))




meaning=meaning.replace('$','').replace('%','')

var meaningparts = meaning.split(' ')
for (var b=0;b<meaningparts.length; b++){
if(meaningparts[b].substr(0,1) == '^'){
var tagger = meaningparts[b].replace('^','')
meaningparts[b] = document.getElementById(targetid).getAttribute(meaningparts[b].replace('^',''))
if (meaningparts[b].split('$').length>1) {
var meaningpart = meaningparts[b].match(/\%(.*?)\$/g)[0]
if(meaningpart == 0){
}{
meaningparts[b] = '<' + tagger + '>' + meaningpart.replace('%','').replace('$','') + '</' +tagger + '>'
}
}
}	
}
meaning = meaningparts.join(' ')
document.getElementById('meaning' + targetid).innerHTML=meaning
document.getElementById('def'+ targetid).innerHTML = word
for(var c=0; c<document.getElementById('meaning' + targetid).childElementCount; c++) {
document.getElementById('meaning' + targetid).children[c].setAttribute('onclick','chooser(event.srcElement); build(' + '"' +  targetid + '");)' )
document.getElementById('meaning' + targetid).children[c].setAttribute("style","cursor:pointer;")
document.getElementById('meaning' + targetid).children[c].setAttribute('parentid', targetid)
document.getElementById('meaning' + targetid).children[c].setAttribute('onmouseover', 'selector(event.srcElement);')
}
document.getElementById('meaning' + targetid).setAttribute('style','cursor:pointer; color:DarkOrange; font-size:70%;')
updatetranslation()
if(/(^|\s)a\s([aeiouAEIOU]|hono)/g.test(document.getElementById('meaning' + targetid).innerText)){
try{
document.getElementById('meaning' + targetid).getElementsByTagName('sart')[0].innerText = 'an'}
catch(err2){}
}
}

/* global define */

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
function sanitise(originalword) {
var text = document.getElementById("ww").getAttribute('returnedtext')
if(originalword == 'diu'){
  text = text.replace(/^(diu, diutius)/gm,'\r\ndiu ADV POS\r\n$1')
  text = text.replace(/\(for\).*?\];/gm,'for a long time;')
}
if(originalword == 'diutissime'||originalword == 'diutius'){
  text = text.replace(/\(for\).*?\];/gm,'for a long time;')
}

text = text.replace(/  +Late *$/gm,'')
text = text.replace(/(^)(\s*)(\[[A-Z]{5}\]\s*\nwho)/gm,'qui, quae, quod PRON $3')
text = text.replace(/([\.a-z]*)(\s*PRON[A-Z0-9\s]*\s*^)(\s*\[[A-Z]{5}\])/gm,'$1$2$1 PRON$3')
text= text.replace('drive/urge/conduct/act;', 'drive, act, do, spend;')
text = text.replace('keep back; recover;','keep back; receive; recover;')
text = text.replace('terrace; archive;','terrace; study;')
text = text.replace('fall; catastrophe;','fall; ruin; catastrophe;')
text = text.replace(/\n.*?MORE.*?RETURN.*?\nUnexpected.*?(?=\n)/g,'')
text = text.replace(/ \(1st\)/g,'')
text = text.replace(/ \(2nd\)/g,'')
text = text.replace(/ \(3rd\)/g,'')
text = text.replace(/ \(4th\)/g,'')
text = text.replace(/ \(5th\)/g,'')
text = text.replace(/ \(6th\)/g,'')
text = text.replace(/ \(7th\)/g,'')
text = text.replace(/ \(8th\)/g,'')
text = text.replace(/the_/g,'the ')

text = text.replace(/[\u0020]/g,'$')
text = text.replace(/\$\$/g,'$')
text = text.replace(/\$\$/g,'$')
text = text.replace(/\$\$/g,'$')
text = text.replace(/\$\$/g,'$')
text = text.replace(/\$\$/g,'$')
text = text.replace(/\$/g,' ')
text = text.replace(/NUM 1 [0-9] X X X ADVERB/g,'ADV')
text = text.replace(/\sor\s/g,'; ')
text = text.replace(/1 times/g,'once')
text = text.replace(/2 times/g,'twice')
text = text.replace(/3 times/g,'three times')
text = text.replace(/4 times/g,'four times')
text = text.replace(/5 times/g,'five times')
text = text.replace(/6 times/g,'six times')
text = text.replace(/7 times/g,'seven times')
text = text.replace(/8 times/g,'eight times')
text = text.replace(/9 times/g,'nine times')
text = text.replace(/10 times/g,'ten times')
text = text.replace(/on 1 occasions -/g,'on one occasion' )
text = text.replace(/on ([0-9]) occasions -/g,'on $1 occasions' )
text = text.replace('farm/country home/estate', 'villa, house, farm')
text = text.replace('stretch, draw tight', 'hurry, make for')
text = text.replace('drive, urge, conduct', 'drive, act, do, urge, conduct')
text = text.replace('lookout for', 'wait, wait for, look out for')


if(/\sNUM\s/g.test(text)){
text = text.replace('1 -','one')
text = text.replace('2 -','two')
text = text.replace('3 -','three')
text = text.replace('4 -','four')
text = text.replace('5 -','five')
text = text.replace('6 -','six')
text = text.replace('7 -','seven')
text = text.replace('8 -','eight')
text = text.replace('9 -','nine')
text = text.replace('10 -','ten')
text = text.replace('11 -','eleven')
text = text.replace('12 -','twelve')
text = text.replace('13 -','thirteen')
text = text.replace('14 -','fourteen')
text = text.replace('15 -','fifteen')
text = text.replace('16 -','sixteen')
text = text.replace('17 -','seventeen')
text = text.replace('18 -','eighteen')
text = text.replace('19 -','nineteen')
text = text.replace('20 -','twenty')
text = text.replace('30 -','thirty')
text = text.replace('40 -','forty')
text = text.replace('1th -','first')
text = text.replace('2th -','second')
text = text.replace('3th -','third')
text = text.replace('4th -','fourth')
text = text.replace('5th -','fifth')
text = text.replace('6th -','sixth')
text = text.replace('7th -','seventh')
text = text.replace('8th -','eighth')
text = text.replace('9th -','ninth')
text = text.replace('10th -','tenth')
text = text.replace('11th -','eleventh')
text = text.replace('12th -','twelfth')
text = text.replace('20th -','twentieth')
text = text.replace('30th -','thirtieth')
text = text.replace('40th -','fortieth')
text = text.replace('50th -','fiftieth')
text = text.replace('60th -','sixtieth')
}
text = text.replace('in the mist of','in the midst of')
text = text.replace(/\ ?\(.*?\)/g,'')
text = text.replace('some ... others', 'some, others')
text=text.replace(/(((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))(((\r?\n)((?!;|\r?\n).)*;((?!\r?\n).)*(?=$|\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))/g,'$1$7$11\n$1$16')
text=text.replace(/(((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))(((\r?\n)((?!;|\r?\n).)*;((?!\r?\n).)*(?=$|\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))/g,'$1$7$11\n$1$16')
text=text.replace(/(((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))/g,'$1$7\n$1$11')
text=text.replace(/(((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))/g,'$1$7\n$1$11')
text=text.replace(/(((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))(((\r?\n)((?!;|\r?\n).)*;((?!\r?\n).)*(?=$|\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))/g,'$1$7$11\n$1$16')
text=text.replace(/(((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))(((\r?\n)((?!;|\r?\n).)*;((?!\r?\n).)*(?=$|\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))/g,'$1$7$11\n$1$16')
text=text.replace(/((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))(((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))(((\r?\n)((?!;|\r?\n).)*;((?!\r?\n).)*(?=$|\r?\n))+)/g,'$1$15$5$11$15')
text=text.replace(/((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))(((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))(((\r?\n)((?!;|\r?\n).)*;((?!\r?\n).)*(?=$|\r?\n))+)/g,'$1$15$5$11$15')
text = text.replace(/(((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))(((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))(((\r?\n)((?!;|\r?\n).)*;((?!\r?\n).)*(?=$|\r?\n))+)/g,'$1$7$21$$11$17$21')
text = text.replace(/(((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))(((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))(((\r?\n)((?!;|\r?\n).)*;((?!\r?\n).)*(?=$|\r?\n))+)/g,'$1$7$21$$11$17$21')
text = text.replace(/((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))/g,'$1$10$6')

text=text.replace(/(((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))(((\r?\n)((?!;|\r?\n).)*;((?!\r?\n).)*(?=$|\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))/g,'$1$7$11\n$1$16')
text=text.replace(/(((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))(((\r?\n)((?!;|\r?\n).)*;((?!\r?\n).)*(?=$|\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))/g,'$1$7$11\n$1$16')
text=text.replace(/(((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))/g,'$1$7\n$1$11')
text=text.replace(/(((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))/g,'$1$7\n$1$11')
text=text.replace(/(((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))(((\r?\n)((?!;|\r?\n).)*;((?!\r?\n).)*(?=$|\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))/g,'$1$7$11\n$1$16')
text=text.replace(/(((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))(((\r?\n)((?!;|\r?\n).)*;((?!\r?\n).)*(?=$|\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))/g,'$1$7$11\n$1$16')
text=text.replace(/((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))(((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))(((\r?\n)((?!;|\r?\n).)*;((?!\r?\n).)*(?=$|\r?\n))+)/g,'$1$15$5$11$15')
text=text.replace(/((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))(((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))(((\r?\n)((?!;|\r?\n).)*;((?!\r?\n).)*(?=$|\r?\n))+)/g,'$1$15$5$11$15')
text = text.replace(/(((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))(((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))(((\r?\n)((?!;|\r?\n).)*;((?!\r?\n).)*(?=$|\r?\n))+)/g,'$1$7$21$$11$17$21')
text = text.replace(/(((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))(((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))+)((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))(((\r?\n)((?!;|\r?\n).)*;((?!\r?\n).)*(?=$|\r?\n))+)/g,'$1$7$21$$11$17$21')
text = text.replace(/((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))((\r?\n)((?!\[[A-Z]{5}\]|\r?\n).)*\[[A-Z]{5}\]((?!\r?\n).)*(?=$|\r?\n))((^|\r?\n)(((?!(\[[A-Z]{5}\]|;|\r?\n))).)*(?=\r?\n))/g,'$1$10$6')


var texts = text.split(/\r?\n/)
for(var x = texts.length - 1; x > 0; x--){
if(texts[x].replace(';','')!==texts[x] && texts[x-1].replace(';','')!==texts[x-1]) {
texts[x-1] = texts[x-1] + texts[x] 
texts[x] = ''
}
}

text = texts.join('\r\n')
if(originalword == "a"|| originalword=="ab"){
text = text.replace("by", "by, from")
}
if(originalword=='quid'){
text = text.replace('[XXXAO]','INTERROG [XXXAO]')
text = text.replace(', what','')  
text = text.replace('anyone','what')
text = text.replace(' whoever you pick;','')
}
if(originalword=='quis'){
text="quis PRON 0 nom S C \r\nquis, interrogative PRON [XXXXX] \r\nwho, what, which, someone, anyone;\r\n\r\nqui.s V 6 1 PRES ACTIVE IND 2 S \r\nqueo, quire, quivi, quitus V [XXXBX] \r\nbe able;"
}
if(originalword == "Caecilium"){
text = "UNKNOWN"
}

if(originalword == "Felix"){
text = text + ' \r\nFelix N 2 1 NOM S M \r\nFelix N 2 1 VOC S M \r\nFelix, Felicis N M [XXXAX] \r\nFelix;'
}
if(originalword == "inquit"){
text = "inqu.it V 7 2 PRES ACTIVE IND 3 S \r\ninqu.it V 7 2 PERF ACTIVE IND 3 S \r\nV IMPERS [XXXCX] \r\nsay;"
}
if(originalword == "inquiunt"){
text = "inqu.it V 7 2 PRES ACTIVE IND 3 P \r\ninqu.it V 7 2 PERF ACTIVE IND 3 P \r\nV IMPERS [XXXCX] \r\nsay;"
}
if(originalword == "Felicem"){
text = text + ' \r\nFelix N 2 1 ACC S M \r\nFelix, Felicis N M [XXXAX] \r\nFelix;'
}
if(originalword == "Felici"){
text = text + ' \r\nFelix N 2 1 DAT S M \r\nFelix, Felicis N M [XXXAX] \r\nFelix;'
}
if(originalword == "Felicis"){
text = text + ' \r\nFelix N 2 1 GEN S M \r\nFelix, Felicis N M [XXXAX] \r\nFelix;'
}
if(originalword == "Felice"){
text = text + ' \r\nFelix N 2 1 ABL S M \r\nFelix, Felicis N M [XXXAX] \r\nFelix;'
}
if(originalword == "Paris"){
text = text + ' \r\nParis N 2 1 NOM S M \r\nParis N 2 1 VOC S M \r\nParis, Paridis N M [XXXAX] \r\nParis;'
}
if(originalword == "Paridem"){
text = text + ' \r\nParis N 2 1 ACC S M \r\nParis, Paridis N M [XXXAX] \r\nParis;'
}
if(originalword == "Paridis"){
text = text + ' \r\nParis N 2 1 GEN S M \r\nParis, Paridis N M [XXXAX] \r\nParis;'
}
if(originalword == "Paridi"){
text = text + ' \r\nParis N 2 1 DAT S M \r\nParis, Paridis N M [XXXAX] \r\nParis;'
}
if(originalword == "Paride"){
text = text + ' \r\nParis N 2 1 ABL S M \r\nParis, Paridis N M [XXXAX] \r\nParis;'
}
if(originalword == "Salvius"){
text = text + ' \r\nSalvius N 2 1 NOM S M \r\nSavlius, Salvii N M [XXXAX] \r\nSalvius;'
}
if(originalword == "Salvi"){
text = text + ' \r\nSalvius N 2 1 VOC S M \r\nSavlius, Salvii N M [XXXAX] \r\nSalvius;'
}
if(originalword == "Salvium"){
text = text + ' \r\nSalvius N 2 1 ACC S M \r\nSavlius, Salvii N M [XXXAX] \r\nSalvius;'
}
if(originalword == "Salvii"){
text = text + ' \r\nSalvius N 2 1 GEN S M \r\nSavlius, Salvii N M [XXXAX] \r\nSalvius;'
}
if(originalword == "Salvio"){
text = text + ' \r\nSalvio N 2 1 DAT S M \r\nSalvio N 2 1 ABL S M \r\nSavlius, Salvii N M [XXXAX] \r\nSalvius;'
}
if(originalword == "Clemens"){
text = text + ' \r\nClemens N 2 1 NOM S M \r\nClemens, Clementis N M [XXXAX] \r\nClemens;'
}
if(originalword == "Clementem"){
text = text + ' \r\nClemens N 2 1 ACC S M \r\nClemens, Clementis N M [XXXAX] \r\nClemens;'
}
if(originalword == "Clementis"){
text = text + ' \r\nClemens N 2 1 GEN S M \r\nClemens, Clementis N M [XXXAX] \r\nClemens;'
}
if(originalword == "Clementi"){
text = text + ' \r\nClemens N 2 1 DAT S M \r\nClemens, Clementis N M [XXXAX] \r\nClemens;'
}
if(originalword == "Clemente"){
text = text + ' \r\nClemens N 2 1 ABL S M \r\nClemens, Clementis N M [XXXAX] \r\nClemens;'
}

if(originalword == "Memor"){
text = text + ' \r\nMemor N 2 1 NOM S M \r\nMemor, Memor N M [XXXAX] \r\nMemor;'
}
if(originalword == "Memorem"){
text = text + ' \r\nMemorem N 2 1 ACC S M \r\nMemor, Memoris N M [XXXAX] \r\nMemor;'
}
if(originalword == "Memoris"){
text = text + ' \r\nMemor N 2 1 GEN S M \r\nMemor, Memoris N M [XXXAX] \r\nMemor;'
}
if(originalword == "Memori"){
text = text + ' \r\nMemor N 2 1 DAT S M \r\nMemor, Memoris N M [XXXAX] \r\nMemor;'
}
if(originalword == "Clemente"){
text = text + ' \r\nClemens N 2 1 ABL S M \r\nClemens, Clementis N M [XXXAX] \r\nMemor;'
}
if(originalword == "Metella"){
text = text + ' \r\nMetella N 1 1 NOM S F \r\nMetella, Metellae N F [XXXAX] \r\nMetella;'
}
if(originalword == "Metellam"){
text = text + ' \r\nMetellam N 1 1 ACC S F \r\nMetella, Metellae N F [XXXAX] \r\nMetella;'
}
if(originalword == "Metellae"){
text = text + ' \r\nMetellae N 1 1 GEN S F \r\nMetellae N 1 1 DAT S F \r\nMetella, Metellae N F [XXXAX] \r\nMetella;'
}
if(originalword == "et"){
text = text.replace("and", "and, both")
}
if(originalword == "ut"){
text = text.replace("to,", "to, that,")
}
if(originalword == "ne"){
text = text.replace(/not.{1,70}assuredly;/g, "?;can it be that?")
}
if(originalword == "quoque"){
text = text.replace("likewise", "also, likewise")
}
if(originalword == "cinis"){
text = text.replace("ashes", "ash")
}
if(originalword == "tamen"){
text = text.replace("yet", "however, yet")
}
if(originalword == "que"){
text = text.replace("and", "and, both")
}
text = text.replace("laugh aloud or boisterously", "laugh, cackle, jeer")
text = text.replace("fighter with wild beasts at public shows","bestiarius, beast-fighter")
text = text.replace("gladiator who wore Gallic armor and fish-topped helmet","murmillo,	gladiator who wore Gallic armor and fish-topped helmet")
text = text.replace("net-fighter in the arena","net-fighter")
if(originalword == "sicut"){
text = text.replace("sicut ADV POS \r\nsicut ADV [XXXAX] \r\n", '')
}
if(originalword == "esse"){
text = ".esse V 5 1 PRES ACTIVE INF 0 X \r\nsum, esse, fui, futurus V [XXXAX] \r\nto be, exist; also used to form verb perfect passive tenses with NOM PERF PPL"
}
if(originalword == "es"){
text = ".es V 5 1 PRES ACTIVE IND 2 S \r\n.es V 5 1 PRES ACTIVE IMP 2 S \r\nsum, esse, fui, futurus V [XXXAX] \r\nto be, exist; also used to form verb perfect passive tenses with NOM PERF PPL"
}
if(originalword == "est"){
text = ".est V 5 1 PRES ACTIVE IND 3 S \r\nsum, esse, fui, futurus V [XXXAX] \r\nto be, exist; also used to form verb perfect passive tenses with NOM PERF PPL"
}
if(originalword.substr(0,2) == "su"){
text = text.replace('theirs','her, its, their, his own, her own, its own, their own')
}
if(originalword == "canis"){
text = "canis N 3 3 NOM S C \r\ncanis N 3 3 VOC S C \r\ncan.is N 3 3 GEN S C \r\ncan.is N 3 3 ACC P C Early \r\ncanis, canis N C [XAXAO] \r\ndog; hound; subordinate; \jackal\; dog-star/fish; lowest dice throw; clamp;\r\ncan.is N 2 1 LOC P M \r\ncan.is N 2 1 DAT P M \r\ncan.is N 2 1 ABL P M \r\ncanus, cani N M [XBXCO] \r\ngray hairs; old age;\r\ncan.is N 2 2 LOC P N \r\ncan.is N 2 2 DAT P N \r\ncan.is N 2 2 ABL P N \r\ncanum, cani N N [XXXFS] veryrare\r\nwicker basket;\r\ncan.is ADJ 1 1 DAT P X POS \r\ncan.is ADJ 1 1 ABL P X POS \r\ncanus, cana, canum ADJ [XXXBO] \r\nwhite, gray; aged, old, wise; hoary; foamy, white-capped; white w/snow/frost;\r\ncan.is V 3 1 PRES ACTIVE IND 2 S \r\ncano, canere, cani, canitus V [EXXFS] Later veryrare\r\ncano, canere, cecini, cantus V [XXXAO] \r\nsing, celebrate, chant; crow; recite; play; foretell;\r\n"}

if(text !== text.replace("FUT PASSIVE PPL","")){
text=text.replace(/(FUT PASSIVE PPL).{1,10}(\r\n)/g,'$1$2')
for(var bb=0;bb<text.match(/VPAR.*FUT PASSIVE PPL/g).length;bb++){
text =  text.replace(text.match(/VPAR .*FUT PASSIVE PPL/g)[bb], 'GERUNDIVE ' + text.match(/VPAR .*FUT PASSIVE PPL/g)[bb])
texts = text.split('\r\n')
for(var cc=0; cc< texts.length;cc++){
if(texts[cc] !== texts[cc].replace("GERUNDIVE",'')){
texts[cc] = texts[cc].replace("VPAR ", '')
  texts[cc] = texts[cc].replace(" FUT PASSIVE PPL", '')
  texts[cc] = texts[cc].replace(/GERUNDIVE\s[0-9]\s[0-9]\s/g,'GERUNDIVE 1 1 ')
  if(endsWith(texts[cc],"GERUNDIVE 1 1 ACC S N")||endsWith(texts[cc],"GERUNDIVE 1 1 GEN S N")||endsWith(texts[cc],"GERUNDIVE 1 1 DAT S N")||endsWith(texts[cc],"GERUNDIVE 1 1 ABL S N")){
    texts[cc] = texts[cc] + '\r\n' + texts[cc].replace('GERUNDIVE','GERUND')
  }

}

}
}
text = texts.join('\r\n')

}
//\r\nhistorici.us ADJ 0 0 ACC S N COMP \r\n
text = text.replace(originalword.substr(0,originalword.length-2)+ ".us ADJ 0 0 ACC S N COMP ", originalword.substr(0,originalword.length-2)+ ".us ADJ 0 0 ACC S N COMP \r\n" + originalword.substr(0,originalword.length-2)+ ".us ADV 0 0 COMP (from adj)")

if(originalword == 'idem'){text="i.dem PRON 4 1 NOM S M \r\ni.dem PRON 4 1 NOM S N \r\ni.dem PRON 4 1 ACC S N \r\ni.dem PRON 4 1 NOM P M \r\nidem, eadem, idem PRON [XXXAX] \r\nsame, the same, the very same, also;"}
if(originalword == 'eadem'){text="e.adem PRON 4 2 NOM S F \r\ne.adem PRON 4 2 ABL S F \r\ne.adem PRON 4 2 NOM P N \r\ne.adem PRON 4 2 ACC P N \r\nidem, eadem, idem PRON [XXXAX] \r\nsame, the same, the very same, also;"}
if(originalword == 'eundem'){text="eun.dem PRON 4 1 ACC S M \r\nidem, eadem, idem PRON [XXXAX] \r\nsame, the same, the very same, also;"}
if(originalword == 'eandem'){text="ean.dem PRON 4 1 ACC S F \r\nidem, eadem, idem PRON [XXXAX] \r\nsame, the same, the very same, also;"}
if(originalword == 'eiusdem'){text="eius.dem PRON 4 1 GEN S X \r\nidem, eadem, idem PRON [XXXAX] \r\nsame, the same, the very same, also;"}
if(originalword == 'eidem'){text="ei.dem PRON 4 1 DAT S X \r\nei.dem PRON 4 1 NOM P M \r\nidem, eadem, idem PRON [XXXAX] \r\nsame, the same, the very same, also;"}
if(originalword == 'eosdem'){text="eos.dem PRON 4 1 ACC P M \r\nidem, eadem, idem PRON [XXXAX] \r\nsame, the same, the very same, also;"}
if(originalword == 'easdem'){text="eas.dem PRON 4 1 ACC P F \r\nidem, eadem, idem PRON [XXXAX] \r\nsame, the same, the very same, also;"}
if(originalword == 'eaedem'){text="eas.dem PRON 4 1 NOM P F \r\nidem, eadem, idem PRON [XXXAX] \r\nsame, the same, the very same, also;"}
if(originalword == 'eorundem'){text="eorun.dem PRON 4 1 GEN P M \r\neorun.dem PRON 4 1 GEN P N \r\nidem, eadem, idem PRON [XXXAX] \r\nsame, the same, the very same, also;"}
if(originalword == 'earundem'){text="earun.dem PRON 4 1 GEN P F \r\nidem, eadem, idem PRON [XXXAX] \r\nsame, the same, the very same, also;"}
if(originalword == 'eisdem'){text="eis.dem PRON 4 1 DAT P X \r\neis.dem PRON 4 1 ABL P X \r\nidem, eadem, idem PRON [XXXAX] \r\nsame, the same, the very same, also;"}
if(originalword == 'isdem'){text="is.dem PRON 4 1 DAT P X \r\nis.dem PRON 4 1 ABL P X \r\nidem, eadem, idem PRON [XXXAX] \r\nsame, the same, the very same, also;"}


if(originalword == 'quisquam'){text="quis.quam N 1 1 NOM S C \r\nquisquam PRON [XXXXX] \r\nanyone, anyone at all;\r\n"}
if(originalword == 'quemquam'){text="quem.quam N 2 1 ACC S C \r\nquisquam PRON [XXXXX] \r\nanyone, anyone at all;\r\n"}
if(originalword == 'quidquam'){text="quid.quam N 3 1 NOM S C \r\nquisquam PRON [XXXXX] \r\nanyone, anyone at all;\r\n"}
if(originalword == 'quicquam'){text="quic.quam N 4 1 NOM S N \r\n quic.quam N 4 1 ACC S N \r\nquisquam PRON [XXXXX] \r\nanyone, anyone at all;\r\n"}
if(originalword == 'quicquam'){text="quic.quam N 5 1 NOM S N \r\n quic.quam N 5 1 ACC S N \r\nquisquam PRON [XXXXX] \r\nanyone, anyone at all;\r\n"}
if(originalword == 'quicumque'){text="quae.cumque N 1 1 NOM S M \r\n qui.cumque N 1 1 NOM P M \r\nquicumque PRON [XXXXX] \r\nwhosoever, whatsoever"}
if(originalword == 'quaecumque'){text="quae.cumque N 1 1 NOM S F \r\n quae.cumque N 1 1 NOM P F \r\n quae.cumque N 1 1 NOM P N \r\nquicumque PRON [XXXXX] \r\nwhosoever, whatsoever"}
if(originalword == 'quodcumque'){text="quod.cumque ADJ 1 1 NOM S N \r\nquicumque PRON [XXXXX] \r\nwhosoever, whatsoever; \r\n"}
if(originalword == 'quemcumque'){text="quem.cumque ADJ 1 1 ACC S M \r\nquicumque PRON [XXXXX] \r\nwhosoever, whatsoever; \r\n"}
if(originalword == 'quamcumque'){text="quam.cumque ADJ 1 1 ACC S F \r\nquicumque PRON [XXXXX] \r\nwhosoever, whatsoever; \r\n"}
if(originalword == 'cuiuscumque'){text="cuius.cumque ADJ 1 1 GEN S X \r\nquicumque PRON [XXXXX] \r\nwhosoever, whatsoever; \r\n"}
if(originalword == 'cuicumque'){text="cui.cumque ADJ 1 1 DAT S X \r\nquicumque PRON [XXXXX] \r\nwhosoever, whatsoever; \r\n"}
if(originalword == 'quocumque'){text="quo.cumque ADJ 1 1 ABL S M \r\n quo.cumque ADJ 1 1 ABL S N \r\nquicumque PRON [XXXXX] \r\nwhosoever, whatsoever; \r\n"}
if(originalword == 'quacumque'){text="qua.cumque ADJ 1 1 ABL S F \r\nquicumque PRON [XXXXX] \r\nwhosoever, whatsoever; \r\n"}
if(originalword == 'quisquis'){text="quis.quis ADJ 1 1 NOM S C \r\nquisquis PRON [XXXXX] \r\nwhosoever, whatsoever; \r\n"}
if(originalword == 'quidquid'){text="quid.quid ADJ 1 1 NOM S N \r\nquisquis PRON [XXXXX] \r\nwhosoever, whatsoever; \r\n"}
if(originalword == 'aliquis'){text="ali.quis N 1 1 NOM S M \r\naliquis PRON [XXXXX] \r\nsomeone, something"}
if(originalword == 'aliqua'){text="ali.qua N 1 1 NOM S F \r\naliquis PRON [XXXXX] \r\nsomeone, something"}
if(originalword == 'aliquid'){text="ali.quid N 1 1 NOM S N \r\naliquis PRON [XXXXX] \r\nsomeone, something"}
if(originalword == 'aliqui'){text="ali.qui N 1 1 NOM S M \r\naliquis PRON [XXXXX] \r\nsomeone, something"}
if(originalword == 'aliquod'){text="ali.quod N 1 1 NOM S N \r\naliquis PRON [XXXXX] \r\nsomeone, something"}
if(originalword == 'quispiam'){text="quis.piam N 1 1 NOM S M \r\nquispiam PRON [XXXXX] \r\nsomeone, something"}
if(originalword == 'quaepiam'){text="quae.piam N 1 1 NOM S F \r\nquispiam PRON [XXXXX] \r\nsomeone, something"}
if(originalword == 'quippiam'){text="quip.piam N 1 1 NOM S N \r\nquispiam PRON [XXXXX] \r\nsomeone, something"}
if(originalword == 'quodlibet'){text="quod.libet N 1 1 NOM S N \r\nquilibet PRON [XXXXX] \r\nanything, anything you like; \r\n"}
if(originalword == 'quilibet'){text="qui.libet N 1 1 NOM S M \r\nquilibet PRON [XXXXX] \r\nanyone, anyone you like; \r\n"}
if(originalword == 'quaelibet'){text="quae.libet N 1 1 NOM S F \r\nquilibet PRON [XXXXX] \r\nanyone, anyone you like; \r\n"}
if(originalword == 'quidlibet'){text="quid.libet N 1 1 NOM S N \r\nquilibet PRON [XXXXX] \r\nanyone, anyone you like; \r\n"}
if(originalword == 'quodlibet'){text="quod.libet N 1 1 NOM S N \r\nquilibet PRON [XXXXX] \r\nanything, anything you like; \r\n"}
if(originalword == 'quivis'){text="qui.vis N 1 1 NOM S M \r\nquivis PRON [XXXXX] \r\nanyone, anyone you like; \r\n"}
if(originalword == 'quaevis'){text="quae.vis N 1 1 NOM S F \r\nquivis PRON [XXXXX] \r\nanyone, anyone you like; \r\n"}
if(originalword == 'quidvis'){text="quid.vis N 1 1 NOM S N \r\nquivis PRON [XXXXX] \r\nanyone, anyone you like; \r\n"}
if(originalword == 'quodvis'){text="quod.vis N 1 1 NOM S N \r\nquivis PRON [XXXXX] \r\nanyone, anyone you like; \r\n"}
if(originalword == 'quisque'){text="quis.que ADJ 1 1 NOM S F \r\nquisque PRON [XXXXX] \r\neach; \r\n"}
if(originalword == 'quaeque'){text="quae.que ADJ 1 1 NOM S F \r\n quae.que ADJ 1 1 NOM P N \r\n quae.que ADJ 1 1 ACC P N \r\nquisque PRON [XXXXX] \r\neach; \r\n"}
if(originalword == 'quodque'){text="quod.que ADJ 1 1 NOM S N \r\n quod.que ADJ 1 1 ACC S N \r\nquisque PRON [XXXXX] \r\neach; \r\n"}
if(originalword == 'quidque'){text="quid.que ADJ 1 1 NOM S N \r\n quid.que ADJ 1 1 ACC S N \r\nquisque PRON [XXXXX] \r\neach; \r\n"}
if(originalword == 'quemque'){text="quem.que ADJ 1 1 ACC S M \r\nquisque PRON [XXXXX] \r\neach; \r\n"}
if(originalword == 'quamque'){text="quam.que ADJ 1 1 ACC S F \r\nquisque PRON [XXXXX] \r\neach; \r\n"}
if(originalword == 'cuiusque'){text="cuius.que ADJ 1 1 GEN S X \r\nquisque PRON [XXXXX] \r\neach; \r\n"}
if(originalword == 'cuique'){text="cui.que ADJ 1 1 DAT S X \r\nquisque PRON [XXXXX] \r\neach; \r\n"}
if(originalword == 'unusquisque'){text="unusquis.que ADJ 1 1 NOM S M \r\nunusquisque PRON [XXXXX] \r\neach, each individual; \r\n"}
if(originalword == 'unaquaeque'){text="unaquae.que ADJ 1 1 NOM S F \r\nunusquisque PRON [XXXXX] \r\neach, each individual; \r\n"}
if(originalword == 'unumquidque'){text="unumquid.que ADJ 1 1 NOM S N \r\nunusquisque PRON [XXXXX] \r\neach, each individual; \r\n"}
if(originalword == 'unumquodque'){text="unumquod.que ADJ 1 1 NOM S N \r\nunusquisque PRON [XXXXX] \r\neach, each individual; \r\n"}
if(originalword == 'ecquis'){text="ec.quis ADV \r\necquis PRON [XXXXX] \r\nis there anyone who; \r\n"}
if(originalword == 'ecqua'){text="ec.qua ADV \r\necquis PRON [XXXXX] \r\nis there anyone who; \r\n"}
if(originalword == 'ecquod'){text="ec.quod ADV \r\necquis PRON [XXXXX] \r\nis there anything that; \r\n"}
if(originalword == 'ecquid'){text="ec.quid ADV \r\necquis PRON [XXXXX] \r\nis there anything that; \r\n"}
if(originalword == 'quisnam'){text="quis.nam ADV \r\necquis PRON [XXXXX] \r\nwho pray?; \r\n"}
if(originalword == 'quaenam'){text="quae.nam ADV \r\necquis PRON [XXXXX] \r\nwho pray?; \r\n"}
if(originalword == 'quidnam'){text="quid.nam ADV \r\necquis PRON [XXXXX] \r\nwhat pray?; \r\n"}
if(originalword == 'quodnam'){text="quod.nam ADV ecquis PRON [XXXXX] \r\nwhat pray?; \r\n"}
if(originalword == 'quidam'){text="qui.dam N 1 1 NOM S M \r\nquidam, quaedam, quoddam PRON [XXXXX] \r\ncertain; some; \r\n"}
if(originalword == 'quaedam'){text="quae.dam N 1 1 NOM S F \r\nquidam, quaedam, quoddam PRON [XXXXX] \r\ncertain; some; \r\n"}
if(originalword == 'quoddam'){text="quod.dam ADJ 1 1 NOM S N \r\nquidam, quaedam, quoddam PRON [XXXXX] \r\ncertain; some; \r\n"}
if(originalword == 'quendam'){text="quen.dam ADJ 1 1 ACC S M \r\nquidam, quaedam, quoddam PRON [XXXXX] \r\ncertain; some; \r\n"}
if(originalword == 'quosdam'){text="quos.dam ADJ 1 1 ACC P M \r\nquidam, quaedam, quoddam PRON [XXXXX] \r\ncertain; some; \r\n"}
if(originalword == 'quadam'){text="qua.dam ADJ 1 1 ABL S F \r\nquidam, quaedam, quoddam PRON [XXXXX] \r\ncertain; some; \r\n"}
if(originalword == 'quasdam'){text="quas.dam ADJ 1 1 ACC P F \r\nquidam, quaedam, quoddam PRON [XXXXX] \r\ncertain; some; \r\n"}
if(originalword == 'quarundam'){text="quarun.dam ADJ 1 1 GEN P F \r\nquidam, quaedam, quoddam PRON [XXXXX] \r\ncertain; some; \r\n"}
if(originalword == 'quandam'){text="quam.dam ADJ 1 1 ACC S F \r\nquidam, quaedam, quoddam PRON [XXXXX] \r\ncertain; some; \r\n"}
if(originalword == 'cuiusdam'){text="cuius.dam ADJ 1 1 GEN S X \r\nquidam, quaedam, quoddam PRON [XXXXX] \r\ncertain; some; \r\n"}
if(originalword == 'quibusdam'){text="quibus.dam ADJ 1 1 DAT P X \r\nquibus.dam ADJ 1 1 ABL P X \r\nquidam, quaedam, quoddam PRON [XXXXX] \r\ncertain; some; \r\n"}
if(originalword == 'cuidam'){text="cui.dam ADJ 1 1 DAT S X \r\nquidam, quaedam, quoddam PRON [XXXXX] \r\ncertain; some; \r\n"}
if(originalword == 'quodam'){text="quo.dam ADJ 1 1 ABL S M \r\n quo.dam ADJ 1 1 ABL S N \r\nquidam, quaedam, quoddam PRON [XXXXX] \r\ncertain; some; \r\n"}
if(originalword == 'quorundam'){text="quorum.dam ADJ 1 1 GEN P M \r\n quorun.dam ADJ 1 1 GEN P N \r\nquidam, quaedam, quoddam PRON [XXXXX] \r\ncertain; some; \r\n"}


text = text.replace(/NUM(.{1,20})ORD/g,'ADJ$1')
text = text.replace(/NUM(.{1,20})CARD/g,'ADJ$1')
return text
}

function updatetranslation(){
document.getElementById("finalsentence").innerText = ""  
var meanings = document.getElementsByTagName("meaning")
var textstring = ''
for(var a = 0; a<meanings.length; a++){
textstring = textstring + meanings[a].innerHTML.replace(/\<div.*?\>.*?\<\/div\>/g,'').replace(/\<.*?\>/g,'') + ' '
}
textstring = textstring.replace(/[\u2B1a]/g,' ').replace(/ +/g,' ').replace(/^\ /g,'')
document.getElementById("finalsentence").innerText = textstring

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

function tackonsplitter(element){
var word = element.parentElement.parentElement.firstChild.innerText
var tackon = ""
if(endsWith(word,'ue')||endsWith(word,'ve')){
  tackon ="ve"
}
  if(endsWith(word,'que')){
  tackon ="que"
}
    if(endsWith(word,'ne')){
  tackon ="ne"
}
    if(endsWith(word,'pte')){
  tackon ="pte"
}
      if(endsWith(word,'cum')){
  tackon ="cum"
}
var newelement = document.createElement("li") 
newelement.innerText = tackon
element.parentElement.parentElement.parentElement.insertBefore(newelement,element.parentElement.parentElement)
newelement.innerHTML = '<a  id="titleword' + element.getAttribute('parentid') + 'a" onclick="getww(this);showoptions(event.srcElement)" style="cursor:pointer;"  parentid="' + element.getAttribute('parentid') + 'a">' +  tackon + '</a>'
newelement.setAttribute('onmouseup', 'updatetranslation()')
newelement.setAttribute('id',element.getAttribute('parentid')+'a')
newelement.setAttribute('class','ui-state-default ui-sortable-handle')
element.parentElement.parentElement.firstChild.innerHTML = word.substr(0,word.length-tackon.length)
element.parentElement.removeChild(element)
//element.parent.insertBefore("li",element)
}
function adv(word){
var adv = word
if(word.replace(/[bdfghiklmnopqrstuvwxz]$/g,'') !== word){
adv = adv + 'ly'
}
if (endsWith(word,'c')){
adv = adv + 'ally'
}
if (endsWith(word,'e')){
adv = adv.replace(/le$/g,'ly')
adv = adv.replace(/e$/g,'ely')

}
if(endsWith(word,'y')){
adv = word.substr(0,word.length-1) + 'ily'
}
return adv
}

function nonjoiner(element){
var nonbox = element.parentElement.parentElement
if(nonbox !== nonbox.parentElement.lastChild){
if(document.getElementById('gramm' + nonbox.nextElementSibling.id).getAttribute('pos')=='V'){
nonbox.nextElementSibling.setAttribute('neg',document.getElementById('def' + nonbox.id).innerText)
nonbox.nextElementSibling.innerHTML = '<recreate formerid="' + nonbox.id +'">' + nonbox.getElementsByTagName('a')[0].innerText + '</recreate> ' + nonbox.nextElementSibling.innerHTML 
build(nonbox.nextElementSibling.id)
nonbox.parentElement.removeChild(nonbox)
}
}
}
function nounjoiner(element){
var nounbox = element.parentElement.parentElement
var nounboxgrammar = document.getElementById('gramm' + nounbox.id)
var nounboxnumber = nounboxgrammar.getAttribute('number')
var nounboxcase = nounboxgrammar.getAttribute('case')
var verbbox = nounbox.nextElementSibling
var verbboxgrammar = document.getElementById('gramm' + verbbox.id)
var verbboxperson = verbboxgrammar.getAttribute('person')
var verbboxnumber = verbboxgrammar.getAttribute ('number')
var verbboxpos = verbboxgrammar.getAttribute('pos')
if(verbboxpos == 'V' && verbboxnumber == nounboxnumber && verbboxperson == 3){
verbbox.innerHTML = verbbox.innerHTML.replace('<a','<recreate formerid="' + nounbox.id +'">' + nounbox.getElementsByTagName('a')[0].innerHTML + '</recreate> <a')
if(nounbox.getElementsByTagName('recreate').length>0){
for (var ll=0; ll<nounbox.getElementsByTagName('recreate').length>0; ll++){
  verbbox.innerHTML = verbbox.innerHTML.replace('<recreate',nounbox.getElementsByTagName('recreate')[ll].outerHTML + ' <recreate')
}
}
verbbox.setAttribute('he', nounbox.getElementsByTagName('meaning')[0].innerText)
verbbox.setAttribute('they', nounbox.getElementsByTagName('meaning')[0].innerText)
build(verbbox.id)
nounbox.parentElement.removeChild(nounbox)
}
}

function supinejoiner(element){
var nonbox = element.parentElement.parentElement
if(nonbox !== nonbox.parentElement.lastChild){
if(nonbox.nextElementSibling.getElementsByTagName('A')[0].innerText=='iri'){
nonbox.innerHTML = nonbox.innerHTML.replace('</a>','</a> <recreate formerid="' + nonbox.id +'">iri</recreate>')  
nonbox.getElementsByTagName('grammar')[0].innerText = 'verb fut passive infinitive'
  document.getElementById("ww").setAttribute("selectedbox",nonbox.id)
nonbox.setAttribute('meaning',getparts())
build(nonbox.id)
nonbox.nextElementSibling.parentElement.removeChild(nonbox.nextElementSibling)
 nonbox.setAttribute('style','background:#ffe6e6')
}
}
}

function adjjoiner (element){
var adjbox = element.parentElement.parentElement
var adjboxgramm = document.getElementById('gramm' + adjbox.id)
var nounbox = adjbox.nextElementSibling
var nounboxgrammar = document.getElementById('gramm' + nounbox.id)
var adjboxcase = adjboxgramm.getAttribute('case')
var nounboxcase = nounboxgrammar.getAttribute('case')
var nounboxnumber = nounboxgrammar.getAttribute('number')
var adjboxnumber = adjboxgramm.getAttribute('number')

if(adjbox !== adjbox.parentElement.lastChild && document.getElementById('gramm' + nounbox.id).getAttribute('pos')=='N'&&nounboxnumber==adjboxnumber&&nounboxcase==adjboxcase){
if(document.getElementById('gramm' + adjbox.id).getAttribute('gradation')=='POS'){
nounbox.setAttribute('adj',nounbox.getAttribute('adj') + ' ' + adjbox.getAttribute('inf'))}
if(document.getElementById('gramm' + adjbox.id).getAttribute('gradation')=='COMP'){
nounbox.setAttribute('adj',nounbox.getAttribute('adj') + ' ' + adjbox.getAttribute('comp'))}
if(document.getElementById('gramm' + adjbox.id).getAttribute('gradation')=='SUPER'){
nounbox.setAttribute('adj',nounbox.getAttribute('adj') + ' ' + adjbox.getAttribute('sup'))}
nounbox.innerHTML = '<recreate formerid="' + adjbox.id +'">' + adjbox.getElementsByTagName('a')[0].innerText + '</recreate> ' + nounbox.innerHTML 
build(nounbox.id)
adjbox.parentElement.removeChild(adjbox)
}
}

function adjjoiner2 (element){
  var adjbox = element.parentElement.parentElement
  var adjboxgramm = document.getElementById('gramm' + adjbox.id)
  var nounbox = adjbox.previousElementSibling
  var nounboxgrammar = document.getElementById('gramm' + nounbox.id)
  var adjboxcase = adjboxgramm.getAttribute('case')
  var nounboxcase = nounboxgrammar.getAttribute('case')
  var nounboxnumber = nounboxgrammar.getAttribute('number')
  var adjboxnumber = adjboxgramm.getAttribute('number')
  
  if(adjbox !== adjbox.parentElement.firstChild && document.getElementById('gramm' + nounbox.id).getAttribute('pos')=='N'&&nounboxnumber==adjboxnumber&&nounboxcase==adjboxcase){
  if(document.getElementById('gramm' + adjbox.id).getAttribute('gradation')=='POS'){
  nounbox.setAttribute('adj',nounbox.getAttribute('adj') + ' ' + adjbox.getAttribute('inf'))}
  if(document.getElementById('gramm' + adjbox.id).getAttribute('gradation')=='COMP'){
  nounbox.setAttribute('adj',nounbox.getAttribute('adj') + ' ' + adjbox.getAttribute('comp'))}
  if(document.getElementById('gramm' + adjbox.id).getAttribute('gradation')=='SUPER'){
  nounbox.setAttribute('adj',nounbox.getAttribute('adj') + ' ' + adjbox.getAttribute('sup'))}
  nounbox.innerHTML = '<recreate formerid="' + adjbox.id +'">' + adjbox.getElementsByTagName('a')[0].innerText + '</recreate> ' + nounbox.innerHTML 
  build(nounbox.id)
  adjbox.parentElement.removeChild(adjbox)
  }
  }

function verbjoiner(element){
var changed = false
var PLbox = element.parentElement.parentElement
var PLgrammar = PLbox.getElementsByTagName('grammar')[0]
var sumbox = PLbox.nextElementSibling
var partofsum = false
if(sumbox.getElementsByTagName("A")[0].innerText == 'sum'||sumbox.getElementsByTagName("A")[0].innerText == 'es'||sumbox.getElementsByTagName("A")[0].innerText == 'est'||sumbox.getElementsByTagName("A")[0].innerText == 'sumus'||sumbox.getElementsByTagName("A")[0].innerText == 'estis'||sumbox.getElementsByTagName("A")[0].innerText == 'sunt'||sumbox.getElementsByTagName("A")[0].innerText == 'eram'||sumbox.getElementsByTagName("A")[0].innerText == 'eras'||sumbox.getElementsByTagName("A")[0].innerText == 'erat'||sumbox.getElementsByTagName("A")[0].innerText == 'eramus'||sumbox.getElementsByTagName("A")[0].innerText == 'eratis'||sumbox.getElementsByTagName("A")[0].innerText == 'erant'||sumbox.getElementsByTagName("A")[0].innerText == 'sim'||sumbox.getElementsByTagName("A")[0].innerText == 'sis'||sumbox.getElementsByTagName("A")[0].innerText == 'sit'||sumbox.getElementsByTagName("A")[0].innerText == 'simus'||sumbox.getElementsByTagName("A")[0].innerText == 'sitis'||sumbox.getElementsByTagName("A")[0].innerText == 'sint'||sumbox.getElementsByTagName("A")[0].innerText == 'essem'||sumbox.getElementsByTagName("A")[0].innerText == 'esses'||sumbox.getElementsByTagName("A")[0].innerText == 'esset'||sumbox.getElementsByTagName("A")[0].innerText == 'essemus'||sumbox.getElementsByTagName("A")[0].innerText == 'essetis'||sumbox.getElementsByTagName("A")[0].innerText == 'essent'||sumbox.getElementsByTagName("A")[0].innerText == 'ero'||sumbox.getElementsByTagName("A")[0].innerText == 'eris'||sumbox.getElementsByTagName("A")[0].innerText == 'erit'||sumbox.getElementsByTagName("A")[0].innerText == 'erimus'||sumbox.getElementsByTagName("A")[0].innerText == 'eritis'||sumbox.getElementsByTagName("A")[0].innerText == 'erunt'||sumbox.getElementsByTagName("A")[0].innerText == 'esse'){
partofsum = true
}
var sumgrammar = sumbox.getElementsByTagName('grammar')[0]
var PLnumber = PLgrammar.getAttribute('number')
var PLtype = PLgrammar.getAttribute('pos')
var PLgender = PLgrammar.getAttribute('gender')
var PLcase = PLgrammar.getAttribute('case')
var PLvoice = PLgrammar.getAttribute('voice')
var summood = sumgrammar.getAttribute('mood')
var sumtext = sumbox.getElementsByTagName('A')[0].innerText
if(summood!=='INF'){
var sumperson = sumgrammar.getAttribute('person')
var sumnumber = sumgrammar.getAttribute('number')
var sumtense = sumgrammar.getAttribute('tense')
}
var newgrammartext = ''
if((PLtype == 'PAP'||PLtype == 'PPP')&& partofsum == true && PLnumber== sumnumber && PLcase == 'nom' && summood !== 'inf'){
extrahtml = '<recreate formerid="' + sumbox.id + '">' + sumtext + '</recreate>'
PLbox.innerHTML = PLbox.innerHTML.replace('</a>','</a> ' + extrahtml)
newgrammartext = 'verb '
if(sumtense == 'PRES'){newgrammartext = newgrammartext +'perf ' }
if(sumtense == 'IMPF'){newgrammartext = newgrammartext +'plup ' }
if(sumtense == 'FUT'){newgrammartext = newgrammartext +'futp ' }
if (PLvoice == 'PASSIVE'){newgrammartext = newgrammartext +'passive ' }
if (sumperson == '1'){newgrammartext= newgrammartext +'1st ' }
if (sumperson == '2'){newgrammartext = newgrammartext +'2nd ' }
if (sumperson == '3'){newgrammartext = newgrammartext +'3rd ' }
if (sumnumber == 'S'){newgrammartext = newgrammartext +'sing' }
if (sumnumber == 'P'){newgrammartext= newgrammartext +'plur' }
newgrammartext = newgrammartext.trim()
changed = true
}
if(partofsum == true && sumtext == 'esse'){
extrahtml = '<recreate formerid="' + sumbox.id + '">' + sumtext + '</recreate>'
PLbox.innerHTML = PLbox.innerHTML.replace('</a>','</a> ' + extrahtml)
if(PLtype == 'PPP'){newgrammartext = 'verb perf passive infinitive'}
if(PLtype == 'FUTPPL'){newgrammartext = 'verb future infinitive'}
if(PLtype == 'PAP'){newgrammartext = 'verb perf infinitive'}
changed = true
}
if (changed = true){
document.getElementById('gramm' + PLbox.id).innerText = newgrammartext
if(summood=='SUB'|summood=='IND'){addquestionbutton(PLbox.id)}
sumbox.parentElement.removeChild(sumbox)
PLbox.getElementsByTagName('splitjoin')[0].innerHTML = ""
document.getElementById("ww").setAttribute("selectedbox",PLbox.id)
PLbox.setAttribute('meaning',getparts())
build(PLbox.id)
 PLbox.setAttribute('style','background:#ffe6e6')
}
}
function addquestionbutton(targetid){
document.getElementById(targetid).getElementsByTagName('splitjoin')[0].innerHTML =document.getElementById(targetid).getElementsByTagName('splitjoin')[0].innerHTML +' <button style="background:#e5ffff"  style="cursor:pointer;" onclick="questioninvert(this)" parentid =' + targetid + '>&#x2192;?</button>'
}
function questioninvert(element){
meaning = element.parentElement.parentElement.getAttribute('meaning')

var meanings = meaning.split('$')
var selectedmeaning = false
for(var ee =0;ee<meanings.length;ee ++){
if(meanings[ee].substr(0,1) == '%'){selectedmeaning = true}
meanings[ee] = meanings[ee].replace('%','')
  var meaningelements = meanings[ee].split(' ')
  var firstword = meaningelements[0]
  var secondword = meaningelements[1]
  meaningelements[0] = secondword
  meaningelements[1] = firstword
  meanings[ee] = meaningelements.join(' ')
  if(selectedmeaning == true){meanings[ee] = '%' + meanings[ee]}
  selectedmeaning = false
}

meaning = meanings.join('$').trim()

element.parentElement.parentElement.setAttribute('meaning',meaning)
build(element.parentElement.parentElement.id)
}
function selectdef(element){
var targetid = document.getElementById("ww").getAttribute("selectedbox")
var defno1 = document.getElementById('gramm'+targetid).getAttribute('formnumber')
var defno2 = element.parentElement.id.substr(1,element.parentElement.id.length-1)
var lll= '$' + document.getElementById(targetid).getAttribute('def') + '$'
lll = lll.replace(/\$\$/g,'$')
var replaceable= false
var me = '$'+element.innerText.trim()+'$'
if(lll.replace(me,'')!=lll){replaceable = true}

if(replaceable==true && defno1 == defno2){
lll = lll.replace('%','')
lll= lll.replace(me, '$%' + element.innerText.trim() + '$')
lll = lll.substr(1,lll.length-1)
document.getElementById(targetid).setAttribute('def',lll)
build(targetid)
}

}
function editdef(element){
var newdef = prompt("Enter your preferred definition:", "");
var targetid = document.getElementById("ww").getAttribute("selectedbox")
defno = element.parentElement.id.substr(1,element.parentElement.id.length-1)
var q = document.getElementsByTagName('wline')
for(a=0;a<q.length;a++){
  if(defno == q[a].getAttribute('formnumber')){q[a].setAttribute('definition',newdef)}
}
element.parentElement.innerHTML = '<editdef onclick="editdef(this)" style="cursor:pointer">' + newdef + '</editdef>'
}

function freezebutton(){
  document.getElementById('spare').innerHTML = '<button class = "stopButton" onclick="freeze()"><font  id="stopButton" style="font-size: 5em;"><b>ll</b></font></button>'
}

function freeze(){
  var q = document.getElementById('sortable').tagName
  if(document.getElementById('sortable').tagName == 'UL') {
    document.getElementById('sortable').outerHTML = document.getElementById('sortable').outerHTML.replace(/^(<)[uU][lL](.*)[uU][lL](>)$/g,'$1div$2div$3')
    document.getElementById('stopButton').innerHTML = '&#9654;'
  }
  else
  {
    document.getElementById('sortable').outerHTML = document.getElementById('sortable').outerHTML.replace(/^(<)[dD][iI][vV](.*)[dD][iI][vV](>)$/g,'$1ul$2ul$3')
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
    document.getElementById('stopButton').innerHTML = '<b>ll</b>'
    }
  
}
function closer() {
  // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

  modal.style.display = "none";
}

function popout(pps,eng){
    // Get the modal
    var modal = document.getElementById('myModal');
    
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    modal.style.display = "block";
    
    document.getElementById('pronountitle').innerText = ''

    document.getElementById('website').setAttribute('style','overflow-y:scroll; overflow-x:hidden')
     
    document.getElementById('website').innerHTML = '<div id="tablecontainervisible">' + document.getElementById('tablecontainerinvisible').innerHTML + '</div>'
    document.getElementById('modal-content').style.height = '80%'
    document.getElementById('modal-content').style.width = '80%'
    document.getElementById('website').height = document.getElementById('modal-content').offsetHeight - document.getElementById('close').offsetHeight
    initiatetable(pps,eng)
    var newwidth = document.getElementById('tablecontainervisible').children[0].offsetWidth
    document.getElementById('website').style.width = newwidth
    document.getElementById('tablecontainervisible').style.height = document.getElementById('tablecontainervisible').children[0].scrollHeight
    if(document.getElementById('website').children[0].scrollHeight < document.getElementById('modal-content').offsetHeight - document.getElementById('close').offsetHeight){
      document.getElementById('website').style.overflowY = 'hidden'
    }

    document.getElementById('modal-content').style.height = document.getElementById('website').offsetHeight + document.getElementById('close').offsetHeight+ document.getElementById('tabletitle').offsetHeight + 40
    document.getElementById('modal-content').style.width = document.getElementById('website').offsetWidth + 40
}

function identifypos(pps){
  pos = pps[pps.length-1]
  if(pos=='M'||pos=='F'||pos=='N'||pos=='C'||pos=='X'||pos=='INTRANS'||pos=='TRANS'||pos=='DEP'||pos=='SEMIDEP'||pos=='PERFDEF'||pos=='IMPERS'){
    pos = pps[pps.length-2]
  }
  return pos
} 


function noun(pps){
  var gender = pps[pps.length - 1]
  var declension = 0
  var stem = ''
  var istem = false
  pps[0] = pps[0].replace(/j/g,'i')
  pps[0] = pps[0].replace(/J/g,'I')

  pps[1] = pps[1].replace(/j/g,'i')
  pps[1] = pps[1].replace(/J/g,'I')

  if(pps[0].substr(pps[0].length-2,2) == 'es' && pps[1].substr(pps[0].length-1,1) == 'i'){
    declension = 5
    stem = pps[1].substr(0,pps[1].length-1)
  } 
  else if (pps[1].substr(pps[1].length-2,2) == 'us'){
      declension = 4
      stem = pps[1].substr(0,pps[1].length-2)
    }
  else if (pps[1].substr(pps[1].length-2,2) == 'is'){
      declension = 3
      stem = pps[1].substr(0,pps[1].length-2)
      var sylcount0 = pps[0].match(/(([bcdfghjklmnpqrstvwxz]|qu|[BCDFGHJKLMNPQRSTVWXZ]|Qu|QU|[^\na-zA-Z\u0101\u0100\u0113\u0112\u012B\u012A\u014D\u014C\u016B\u016A\u0233\u0232\u0103\u0102\u0115\u0114\u012D\u012C\u014F\u014E\u016D\u016C\u0177\u0176])*([aAeEiIoOuUyY])([bcdfghjklmnpqrstvwxz]|qu|[BCDFGHJKLMNPQRSTVWXZ]|Qu|QU|[^\na-zA-Z\u0101\u0100\u0113\u0112\u012B\u012A\u014D\u014C\u016B\u016A\u0233\u0232\u0103\u0102\u0115\u0114\u012D\u012C\u014F\u014E\u016D\u016C\u0177\u0176])*)/g).length
      var sylcount1 = pps[1].match(/(([bcdfghjklmnpqrstvwxz]|qu|[BCDFGHJKLMNPQRSTVWXZ]|Qu|QU|[^\na-zA-Z\u0101\u0100\u0113\u0112\u012B\u012A\u014D\u014C\u016B\u016A\u0233\u0232\u0103\u0102\u0115\u0114\u012D\u012C\u014F\u014E\u016D\u016C\u0177\u0176])*([aAeEiIoOuUyY])([bcdfghjklmnpqrstvwxz]|qu|[BCDFGHJKLMNPQRSTVWXZ]|Qu|QU|[^\na-zA-Z\u0101\u0100\u0113\u0112\u012B\u012A\u014D\u014C\u016B\u016A\u0233\u0232\u0103\u0102\u0115\u0114\u012D\u012C\u014F\u014E\u016D\u016C\u0177\u0176])*)/g).length

      if(sylcount0 == sylcount1 && pps[0] != 'pater' && pps[0] != 'mater' && pps[0] != 'frater' && pps[0] != 'senex' && pps[0] != 'iuvenis' && pps[0] != 'juvenis' && pps[0] != 'canis'){
        istem = true
      }
      if(pps[0] == 'animal'){istem = true}
      if(pps[0] == 'calcar'){istem = true}
    }
    else if (pps[1].substr(pps[1].length-1,1) == 'i'){
      declension = 2
      stem = pps[1].substr(0,pps[1].length-1)
      if(endsWith(pps[0],'ius')){stem = pps[0].substr(0,pps[0].length-2)}
    }
    else if (pps[1].substr(pps[1].length-2,2) == 'ae'){
      declension = 1
      stem = pps[1].substr(0,pps[1].length-2)
    }
    var nounendings = [['a','a','am','ae','ae','a','ae','ae','as','arum','is','is'],['us','e','um','i','o','o','i','i','os','orum','is','is'],['x','x','em','is','i','e','es','es','es','um','ibus','ibus'],['us','us','um','us','ui','u','us','us','us','uum','ibus','ibus'],['s','s','m','i','i','','s','s','s','rum','bus','bus']]
    var ns = (pps[0])
    var vs = pps[0]
    if(declension==2 && pps[0].substr(pps[0].length-3,3) == 'ius'){
      vs = stem
    } else if (declension==2 && pps[0].substr(pps[0].length-2,2) == 'us' && ! (endsWith(stem,'e'))){
      vs = stem + 'e'
    }
    var as = stem + nounendings[declension-1][2]
    if (gender == 'N'){as = pps[0]}
    if(pps[0] == 'sitis' && as == 'sitem'){as = 'sitim'}
    if(pps[0] == 'turris' && as == 'turrem'){as = 'turrim/em'}
    if(pps[0] == 'aer' && as == 'aerem'){as = 'aera/em'}
    if(pps[0] == 'heros' && as == 'heroem'){as = 'heroa/em'}
    if(pps[0].toLowerCase() == 'atlas' && as.toLowerCase() == 'atlantem'){as = as + '/a'}

    var gs = stem + nounendings[declension-1][3]
    var ds = stem + nounendings[declension-1][4]
    var abs = stem + nounendings[declension-1][5]
    var np = stem + nounendings[declension-1][6]
    if(pps[0] == 'Paris' && gs == 'Paridis'){gs = 'Paridis/os';ds = 'Parida/im/in'; vs='Pari/is'}
    if(pps[0] == 'Achilles' && gs == 'Achillis'){ns = 'Achillem/ea/en';ns = 'Achilles/eus';gs = 'Achillis/ei/i/eos'; vs='Achilles/e/eu'; abs='Achille/i'; }

    if(np == 'dei'){np='di'}
    if(np == 'Dei'){np='Di'}
    if (gender == 'N'){np = stem + 'a'}
    if (istem == true && gender == 'N'){np = stem + 'ia'}
    if (gender == 'N' && declension == 4){np = stem + 'ua'}
    var vp = np
    var ap = stem + nounendings[declension-1][8]
    if (gender == 'N'){ap = np}
    var gp = stem + nounendings[declension-1][9]
    if(istem == true){
      gp = stem + 'ium'
    }
    var dp = stem + nounendings[declension-1][10]
    var abp = stem + nounendings[declension-1][11]
    if(dp == 'bovibus'){dp = 'bobus/bubus'}
    if(abp == 'bovibus'){abp = 'bobus/bubus'}
    if(ns == 'filia'){abp = 'filiabus'; dp = 'filiabus'}

    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>ns</g,'>' + ns + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>vs</g,'>' + vs + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>as</g,'>' + as + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>gs</g,'>' + gs + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>ds</g,'>' + ds + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>abs</g,'>' + abs + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>np</g,'>' + np + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>vp</g,'>' + vp + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>ap</g,'>' + ap + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>gp</g,'>' + gp + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>dp</g,'>' + dp + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>abp</g,'>' + abp + '<')
    
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').children[1].outerHTML
  }

  
function verb(pps){
  var conjugation
  var deponent = false
  var semidep = false
  var impers = false
if(endsWith(pps[0],'t')){
  impers = true
  if(endsWith(pps[0],'at')){
    pps[0] = pps[0].substr(0,pps[0].length-2) + 'o'
  }
  else if(endsWith(pps[0],'t')){
    pps[0] = pps[0].substr(0,pps[0].length-1) + 'o'
  }

  if(endsWith(pps[2],'t')){
    pps[2] = pps[2].substr(0,pps[2].length - 1)
  } 
  document.getElementById('tablecontainervisible').getElementsByTagName('tr')[3].getElementsByTagName('td')[4].innerHTML = document.getElementById('tablecontainervisible').getElementsByTagName('tr')[5].getElementsByTagName('td')[4].innerHTML.replace(/^he/,'I')
  document.getElementById('tablecontainervisible').innerHTML=document.getElementById('tablecontainervisible').innerHTML.replace(/>([a-z]*)1([a-z]*)</g,'>$13$2<')
  document.getElementById('tablecontainervisible').innerHTML=document.getElementById('tablecontainervisible').innerHTML.replace(/>I\s/g,'>it ')
  document.getElementById('tablecontainervisible').getElementsByTagName('tr')[4].outerHTML = ''
  document.getElementById('tablecontainervisible').getElementsByTagName('tr')[4].outerHTML = ''
  document.getElementById('tablecontainervisible').getElementsByTagName('tr')[6].outerHTML = ''
  document.getElementById('tablecontainervisible').getElementsByTagName('tr')[6].outerHTML = ''
  document.getElementById('tablecontainervisible').getElementsByTagName('tr')[8].outerHTML = ''
  document.getElementById('tablecontainervisible').getElementsByTagName('tr')[8].outerHTML = ''
  document.getElementById('tablecontainervisible').getElementsByTagName('tr')[10].outerHTML = ''
  document.getElementById('tablecontainervisible').getElementsByTagName('tr')[10].outerHTML = ''
  document.getElementById('tablecontainervisible').getElementsByTagName('tr')[12].outerHTML = ''
  document.getElementById('tablecontainervisible').getElementsByTagName('tr')[12].outerHTML = ''
  document.getElementById('tablecontainervisible').getElementsByTagName('tr')[14].outerHTML = ''
  document.getElementById('tablecontainervisible').getElementsByTagName('tr')[14].outerHTML = ''
  document.getElementById('tablecontainervisible').getElementsByTagName('tr')[18].outerHTML = ''
  document.getElementById('tablecontainervisible').getElementsByTagName('tr')[18].outerHTML = ''
  document.getElementById('tablecontainervisible').getElementsByTagName('tr')[20].outerHTML = ''
  document.getElementById('tablecontainervisible').getElementsByTagName('tr')[20].outerHTML = ''
  document.getElementById('tablecontainervisible').getElementsByTagName('tr')[22].outerHTML = ''
  document.getElementById('tablecontainervisible').getElementsByTagName('tr')[22].outerHTML = ''
  document.getElementById('tablecontainervisible').getElementsByTagName('tr')[24].outerHTML = ''
  document.getElementById('tablecontainervisible').getElementsByTagName('tr')[24].outerHTML = ''

  for(ff = 0; ff , ff<document.getElementById('tablecontainervisible').getElementsByClassName('xl8416351').length; ff++){
    document.getElementById('tablecontainervisible').getElementsByClassName('xl8416351')[ff].setAttribute('style','border-bottom:.5pt solid')
  }
  for(ff = 0; ff , ff<document.getElementById('tablecontainervisible').getElementsByClassName('xl8516351').length; ff++){
    document.getElementById('tablecontainervisible').getElementsByClassName('xl8516351')[ff].setAttribute('style','border-bottom:.5pt solid;border-right:.5pt solid')
  }
  for(ff = 0; ff , ff<document.getElementById('tablecontainervisible').getElementsByClassName('xl10216351').length; ff++){
    document.getElementById('tablecontainervisible').getElementsByClassName('xl10216351')[ff].setAttribute('style','border-right:.5pt solid')
  }
  for(ff = 0; ff , ff<document.getElementById('tablecontainervisible').getElementsByClassName('xl10516351').length; ff++){
    document.getElementById('tablecontainervisible').getElementsByClassName('xl10516351')[ff].setAttribute('style','border-right:.5pt solid')
  }
}

  if(pps[1].substr(pps[1].length-3,3) == 'are'){conjugation = '1'}
  if(pps[1].substr(pps[1].length-3,3) == 'ere' && pps[0].substr(pps[0].length-2,2) == 'eo'){conjugation = '2'}
  else if(pps[1].substr(pps[1].length-3,3) == 'ere' && pps[0].substr(pps[0].length-1,1)=='o'){conjugation = '3'}
  if(pps[1].substr(pps[1].length-3,3) == 'ire' && pps[0].substr(pps[0].length-2,2)=='io'){conjugation = '4'}
  if(pps[1].substr(pps[1].length-4,4) == 'erre'){conjugation = 'ferro'}
  if(pps[1].substr(pps[1].length-3,3) == 'ere' && pps[0].substr(pps[0].length-2,2)=='io'){conjugation = '5'}
  if(pps[1].substr(pps[1].length-4,4) == 'isse' && pps[0].substr(pps[0].length-1,1)=='i'){conjugation = 'defective'}
  if(pps[1].substr(pps[1].length-3,3) == 'lle'){conjugation = 'volo'}
  if(pps[0].substr(pps[0].length-3,3) == 'sum'){conjugation = 'sum'}
  if(pps[0]=='fio'){conjugation = 'fio'}
  if(pps[1].substr(pps[1].length-3,3) == 'ire' && pps[0].substr(pps[0].length-2,2)=='eo'){conjugation = 'eo'}
  if(pps[1].substr(pps[1].length-3,3) == 'ari'){conjugation = '1d'; deponent = true}
  else if(pps[1].substr(pps[1].length-3,3) == 'eri' && pps[0].substr(pps[0].length-3,3) == 'eor'){conjugation = '2d'; deponent = true}
  else if(pps[1].substr(pps[1].length-1,1) == 'i' && pps[0].substr(pps[0].length-2,2)=='or'){conjugation = '3d'; deponent = true}
  if(pps[1].substr(pps[1].length-3,3) == 'iri' && pps[0].substr(pps[0].length-3,3)=='ior'){conjugation = '4d'; deponent = true}
  if(pps[1].substr(pps[1].length-1,1) == 'i' && pps[0].substr(pps[0].length-3,3)=='ior'){conjugation = '5d'; deponent = true}
  if(deponent == false && pps[2].substr(pps[2].length-2,2)=='us'){semidep = true}
  var presentstem
  var perfstem
  var ppstem
  var sing1pres = pps[0]
  var presinf = pps[1]
  var sing2pres
  var sing3pres
  var plur1pres
  var plur2pres
  var plur3pres
  
  var sing1fut
  var sing2fut
  var sing3fut
  var plur1fut
  var plur2fut
  var plur3fut

  
  var sing1impf
  var sing2impf
  var sing3impf
  var plur1impf
  var plur2impf
  var plur3impf

  var sing1pressubj
  var sing2pressubj
  var sing3pressubj
  var plur1pressubj
  var plur2pressubj
  var plur3pressubj
  
  var sing1prespass
  var sing2prespass
  var sing3prespass
  var plur1prespass
  var plur2prespass
  var plur3prespass
  
  var sing1futpass
  var sing2futpass
  var sing3futpass
  var plur1futpass
  var plur2futpass
  var plur3futpass

  var sing1impfpass 
  var sing2impfpass
  var sing3impfpass
  var plur1impfpass
  var plur2impfpass
  var plur3impfpass

  var sing1pressubjpass
  var sing2pressubjpass
  var sing3pressubjpass
  var plur1pressubjpass
  var plur2pressubjpass
  var plur3pressubjpass
  
  var presinfpass

  var prespplstem
  var gerstem

  var imperativesing
  var imperativeplur
  var imperativesingpass
  var imperativeplurpass
  
  if(conjugation == '1'){
    presentstem = pps[0].substr(0,pps[0].length-1)
    perfstem = pps[2].substr(0,pps[2].length-1)
    ppstem = pps[3].substr(0,pps[3].length-2)
    sing2pres = presentstem + 'as'
    sing3pres = presentstem + 'at'
    plur1pres = presentstem + 'amus'
    plur2pres = presentstem + 'atis'
    plur3pres = presentstem + 'ant'

    presinfpass = presentstem + 'ari'

    sing1fut = presentstem + "abo"
    sing2fut = presentstem + "abis"
    sing3fut = presentstem + "abit"
    plur1fut = presentstem + "abimus"
    plur2fut = presentstem + "abitis"
    plur3fut = presentstem + "abunt"

    sing1impf = presentstem + "abam"
    sing2impf = presentstem + "abas"
    sing3impf = presentstem + "abat"
    plur1impf = presentstem + "abamus"
    plur2impf = presentstem + "abatis"
    plur3impf = presentstem + "abant"

    sing1pressubj = presentstem + 'em'
    sing2pressubj = presentstem + 'es'
    sing3pressubj = presentstem + 'et'
    plur1pressubj = presentstem + 'emus'
    plur2pressubj = presentstem + 'etis'
    plur3pressubj = presentstem + 'ent'
    
    sing1prespass = presentstem + 'or'    
    sing2prespass = presentstem + 'aris'
    sing3prespass = presentstem + 'atur'
    plur1prespass = presentstem + 'amur'
    plur2prespass = presentstem + 'amini'
    plur3prespass = presentstem + 'antur'
    
    sing1futpass = presentstem + "abor"
    sing2futpass = presentstem + "aberis"
    sing3futpass = presentstem + "abitur"
    plur1futpass = presentstem + "abimur"
    plur2futpass = presentstem + "abimini"
    plur3futpass = presentstem + "abuntur"

    sing1impfpass = presentstem + "abar"
    sing2impfpass = presentstem + "abaris"
    sing3impfpass = presentstem + "abatur"
    plur1impfpass = presentstem + "abamur"
    plur2impfpass = presentstem + "abamini"
    plur3impfpass = presentstem + "abantur"

    sing1pressubjpass = presentstem + 'er'
    sing2pressubjpass = presentstem + 'eris'
    sing3pressubjpass = presentstem + 'etur'
    plur1pressubjpass = presentstem + 'emur'
    plur2pressubjpass = presentstem + 'emini'
    plur3pressubjpass = presentstem + 'entur'

    prespplstem = presentstem + 'an'
    gerstem = prespplstem + 'd'

    imperativesing = presentstem + 'a'
    imperativeplur = imperativesing + 'te'
  }
  if(conjugation == '2'){
    presentstem = pps[0].substr(0,pps[0].length-2)
    perfstem = pps[2].substr(0,pps[2].length-1)
    ppstem = pps[3].substr(0,pps[3].length-2)
    sing2pres = presentstem + 'es'
    sing3pres = presentstem + 'et'
    plur1pres = presentstem + 'emus'
    plur2pres = presentstem + 'etis'
    plur3pres = presentstem + 'ent'

    presinfpass = presentstem + 'eri'
    
    sing1fut = presentstem + "ebo"
    sing2fut = presentstem + "ebis"
    sing3fut = presentstem + "ebit"
    plur1fut = presentstem + "ebimus"
    plur2fut = presentstem + "ebitis"
    plur3fut = presentstem + "ebunt"

    sing1impf = presentstem + "ebam"
    sing2impf = presentstem + "ebas"
    sing3impf = presentstem + "ebat"
    plur1impf = presentstem + "ebamus"
    plur2impf = presentstem + "ebatis"
    plur3impf = presentstem + "ebant"

    sing1pressubj = presentstem + 'eam'
    sing2pressubj = presentstem + 'eas'
    sing3pressubj = presentstem + 'eat'
    plur1pressubj = presentstem + 'eamus'
    plur2pressubj = presentstem + 'eatis'
    plur3pressubj = presentstem + 'eant'
    
    sing1prespass = presentstem + 'eor'    
    sing2prespass = presentstem + 'eris'
    sing3prespass = presentstem + 'etur'
    plur1prespass = presentstem + 'emur'
    plur2prespass = presentstem + 'emini'
    plur3prespass = presentstem + 'entur'
    
    sing1futpass = presentstem + "ebor"
    sing2futpass = presentstem + "eberis"
    sing3futpass = presentstem + "ebitur"
    plur1futpass = presentstem + "ebimur"
    plur2futpass = presentstem + "ebimini"
    plur3futpass = presentstem + "ebuntur"

    sing1impfpass = presentstem + "ebar"
    sing2impfpass = presentstem + "ebaris"
    sing3impfpass = presentstem + "ebatur"
    plur1impfpass = presentstem + "ebamur"
    plur2impfpass = presentstem + "ebamini"
    plur3impfpass = presentstem + "ebantur"

    sing1pressubjpass = presentstem + 'ear'
    sing2pressubjpass = presentstem + 'earis'
    sing3pressubjpass = presentstem + 'eatur'
    plur1pressubjpass = presentstem + 'eamur'
    plur2pressubjpass = presentstem + 'eamini'
    plur3pressubjpass = presentstem + 'eantur'

    prespplstem = presentstem + 'en'
    gerstem = prespplstem + 'd'

    imperativesing = presentstem + 'e'
    imperativeplur = imperativesing + 'te'
  }
  if(conjugation == '3'){
    presentstem = pps[0].substr(0,pps[0].length-1)
    perfstem = pps[2].substr(0,pps[2].length-1)
    ppstem = pps[3].substr(0,pps[3].length-2)
    sing2pres = presentstem + 'is'
    sing3pres = presentstem + 'it'
    plur1pres = presentstem + 'imus'
    plur2pres = presentstem + 'itis'
    plur3pres = presentstem + 'unt'

    presinfpass = presentstem + 'i'
    
    sing1fut = presentstem + "am"
    sing2fut = presentstem + "es"
    sing3fut = presentstem + "et"
    plur1fut = presentstem + "emus"
    plur2fut = presentstem + "etis"
    plur3fut = presentstem + "ent"

    sing1impf = presentstem + "ebam"
    sing2impf = presentstem + "ebas"
    sing3impf = presentstem + "ebat"
    plur1impf = presentstem + "ebamus"
    plur2impf = presentstem + "ebatis"
    plur3impf = presentstem + "ebant"

    sing1pressubj = presentstem + 'am'
    sing2pressubj = presentstem + 'as'
    sing3pressubj = presentstem + 'at'
    plur1pressubj = presentstem + 'amus'
    plur2pressubj = presentstem + 'atis'
    plur3pressubj = presentstem + 'ant'
    
    sing1prespass = presentstem + 'or'    
    sing2prespass = presentstem + 'eris'
    sing3prespass = presentstem + 'itur'
    plur1prespass = presentstem + 'imur'
    plur2prespass = presentstem + 'imini'
    plur3prespass = presentstem + 'untur'
    
    sing1futpass = presentstem + "ar"
    sing2futpass = presentstem + "eris"
    sing3futpass = presentstem + "etur"
    plur1futpass = presentstem + "emur"
    plur2futpass = presentstem + "emini"
    plur3futpass = presentstem + "entur"

    sing1impfpass = presentstem + "ebar"
    sing2impfpass = presentstem + "ebaris"
    sing3impfpass = presentstem + "ebatur"
    plur1impfpass = presentstem + "ebamur"
    plur2impfpass = presentstem + "ebamini"
    plur3impfpass = presentstem + "ebantur"

    sing1pressubjpass = presentstem + 'ar'
    sing2pressubjpass = presentstem + 'aris'
    sing3pressubjpass = presentstem + 'atur'
    plur1pressubjpass = presentstem + 'amur'
    plur2pressubjpass = presentstem + 'amini'
    plur3pressubjpass = presentstem + 'antur'

    prespplstem = presentstem + 'en'
    gerstem = prespplstem + 'd'

    imperativesing = presentstem + 'e'
    if(imperativesing == 'duce'){imperativesing = 'duc'}
    imperativeplur = imperativesing + 'te'
  }
  if(conjugation == 'ferro'){
    presentstem = pps[0].substr(0,pps[0].length-1)
    perfstem = pps[2].substr(0,pps[2].length-1)
    ppstem = pps[3].substr(0,pps[3].length-2)
    sing2pres = presentstem + 's'
    sing3pres = presentstem + 't'
    plur1pres = presentstem + 'imus'
    plur2pres = presentstem + 'tis'
    plur3pres = presentstem + 'unt'

    presinfpass = presentstem + 'ri'
    
    sing1fut = presentstem + "am"
    sing2fut = presentstem + "es"
    sing3fut = presentstem + "et"
    plur1fut = presentstem + "emus"
    plur2fut = presentstem + "etis"
    plur3fut = presentstem + "ent"

    sing1impf = presentstem + "ebam"
    sing2impf = presentstem + "ebas"
    sing3impf = presentstem + "ebat"
    plur1impf = presentstem + "ebamus"
    plur2impf = presentstem + "ebatis"
    plur3impf = presentstem + "ebant"

    sing1pressubj = presentstem + 'am'
    sing2pressubj = presentstem + 'as'
    sing3pressubj = presentstem + 'at'
    plur1pressubj = presentstem + 'amus'
    plur2pressubj = presentstem + 'atis'
    plur3pressubj = presentstem + 'ant'
    
    sing1prespass = presentstem + 'or'    
    sing2prespass = presentstem + 'ris'
    sing3prespass = presentstem + 'tur'
    plur1prespass = presentstem + 'imur'
    plur2prespass = presentstem + 'imini'
    plur3prespass = presentstem + 'untur'
    
    sing1futpass = presentstem + "ar"
    sing2futpass = presentstem + "eris"
    sing3futpass = presentstem + "etur"
    plur1futpass = presentstem + "emur"
    plur2futpass = presentstem + "emini"
    plur3futpass = presentstem + "entur"

    sing1impfpass = presentstem + "ebar"
    sing2impfpass = presentstem + "ebaris"
    sing3impfpass = presentstem + "ebatur"
    plur1impfpass = presentstem + "ebamur"
    plur2impfpass = presentstem + "ebamini"
    plur3impfpass = presentstem + "ebantur"

    sing1pressubjpass = presentstem + 'ar'
    sing2pressubjpass = presentstem + 'aris'
    sing3pressubjpass = presentstem + 'atur'
    plur1pressubjpass = presentstem + 'amur'
    plur2pressubjpass = presentstem + 'amini'
    plur3pressubjpass = presentstem + 'antur'

    prespplstem = presentstem + 'en'
    gerstem = prespplstem + 'd'

    imperativesing = presentstem
    imperativeplur = imperativesing + 'te'
  }
  if(conjugation == '4'){
    presentstem = pps[0].substr(0,pps[0].length-2)
    perfstem = pps[2].substr(0,pps[2].length-1)
    ppstem = pps[3].substr(0,pps[3].length-2)
    sing2pres = presentstem + 'is'
    sing3pres = presentstem + 'it'
    plur1pres = presentstem + 'imus'
    plur2pres = presentstem + 'itis'
    plur3pres = presentstem + 'iunt'

    presinfpass = presentstem + 'iri'
    
    sing1fut = presentstem + "iam"
    sing2fut = presentstem + "ies"
    sing3fut = presentstem + "iet"
    plur1fut = presentstem + "iemus"
    plur2fut = presentstem + "ietis"
    plur3fut = presentstem + "ient"

    sing1impf = presentstem + "iebam"
    sing2impf = presentstem + "iebas"
    sing3impf = presentstem + "iebat"
    plur1impf = presentstem + "iebamus"
    plur2impf = presentstem + "iebatis"
    plur3impf = presentstem + "iebant"

    sing1pressubj = presentstem + 'iam'
    sing2pressubj = presentstem + 'ias'
    sing3pressubj = presentstem + 'iat'
    plur1pressubj = presentstem + 'iamus'
    plur2pressubj = presentstem + 'iatis'
    plur3pressubj = presentstem + 'iant'
    
    sing1prespass = presentstem + 'ior'    
    sing2prespass = presentstem + 'iris'
    sing3prespass = presentstem + 'itur'
    plur1prespass = presentstem + 'imur'
    plur2prespass = presentstem + 'imini'
    plur3prespass = presentstem + 'untur'
    
    sing1futpass = presentstem + "iar"
    sing2futpass = presentstem + "ieris"
    sing3futpass = presentstem + "ietur"
    plur1futpass = presentstem + "iemur"
    plur2futpass = presentstem + "iemini"
    plur3futpass = presentstem + "ientur"

    sing1impfpass = presentstem + "iebar"
    sing2impfpass = presentstem + "iebaris"
    sing3impfpass = presentstem + "iebatur"
    plur1impfpass = presentstem + "iebamur"
    plur2impfpass = presentstem + "iebamini"
    plur3impfpass = presentstem + "iebantur"

    sing1pressubjpass = presentstem + 'iar'
    sing2pressubjpass = presentstem + 'iaris'
    sing3pressubjpass = presentstem + 'iatur'
    plur1pressubjpass = presentstem + 'iamur'
    plur2pressubjpass = presentstem + 'iamini'
    plur3pressubjpass = presentstem + 'iantur'

    prespplstem = presentstem + 'ien'
    gerstem = prespplstem + 'd'

    imperativesing = presentstem + 'i'
    imperativeplur = imperativesing + 'te'
  }
  if(conjugation == '5'){
    presentstem = pps[0].substr(0,pps[0].length-2)
    perfstem = pps[2].substr(0,pps[2].length-1)
    ppstem = pps[3].substr(0,pps[3].length-2)
    sing2pres = presentstem + 'is'
    sing3pres = presentstem + 'it'
    plur1pres = presentstem + 'imus'
    plur2pres = presentstem + 'itis'
    plur3pres = presentstem + 'iunt'

    presinfpass = presentstem + 'iri'
    
    sing1fut = presentstem + "iam"
    sing2fut = presentstem + "ies"
    sing3fut = presentstem + "iet"
    plur1fut = presentstem + "iemus"
    plur2fut = presentstem + "ietis"
    plur3fut = presentstem + "ient"

    sing1impf = presentstem + "iebam"
    sing2impf = presentstem + "iebas"
    sing3impf = presentstem + "iebat"
    plur1impf = presentstem + "iebamus"
    plur2impf = presentstem + "iebatis"
    plur3impf = presentstem + "iebant"

    sing1pressubj = presentstem + 'iam'
    sing2pressubj = presentstem + 'ias'
    sing3pressubj = presentstem + 'iat'
    plur1pressubj = presentstem + 'iamus'
    plur2pressubj = presentstem + 'iatis'
    plur3pressubj = presentstem + 'iant'
    
    sing1prespass = presentstem + 'ior'
    if(sing1prespass == 'facior'){
      sing1prespass = 'fio'
    }
    sing2prespass = presentstem + 'iris'
    if(sing2prespass == 'faciris'){
      sing2prespass == 'fis'
    }
    sing3prespass = presentstem + 'itur'
    if(sing3prespass = 'facitur'){
      sing2prespass = 'fit'
    }
    plur1prespass = presentstem + 'imur'
    if(plur1prespass == 'facimur'){
      plur1prespass = 'fimus'
    }
    plur2prespass = presentstem + 'imini'
    if(plur2prespass == 'facimini'){
      plur2prespass = 'fitis'
    }
    plur3prespass = presentstem + 'untur'
    if(plur3prespass == 'faciuntur'){
      plur3prespass = 'fiunt'
    }
    
    sing1futpass = presentstem + "iar"
    if(sing1futpass == 'faciar'){
      sing1futpass = 'fiam'
    }
    sing2futpass = presentstem + "ieris"
    if(sing2futpass == 'facieris'){
      sing2futpass = 'fies'
    }
    sing3futpass = presentstem + "ietur"
    if(sing3futpass == 'facietur'){
      sing3futpass = 'fiet'
    }
    plur1futpass = presentstem + "iemur"
    if(plur1futpass == 'faciemur'){
      plur1futpass = 'fiemus'
    }
    plur2futpass = presentstem + "iemini"
    if(plur2futpass == 'faciemini'){
      plur2futpass = 'fietis'
    }
    plur3futpass = presentstem + "ientur"
    if(plur3futpass == 'facientur'){
      plur3futpass = 'fient'
    }

    sing1impfpass = presentstem + "iebar"
    if(sing1impfpass == 'faciebar'){
      sing1impfpass = 'fiebam'
    }
    sing2impfpass = presentstem + "iebaris"
    if(sing2impfpass == 'faciebaris'){
      sing2impfpass = 'fiebas'
    }
    sing3impfpass = presentstem + "iebatur"
    if(sing3impfpass == 'faciebatur'){
      sing3impfpass = 'fiebat'
    }
    plur1impfpass = presentstem + "iebamur"
    if(plur1impfpass == 'faciebamur'){
      plur1impfpass = 'fiebamus'
    }
    plur2impfpass = presentstem + "iebamini"
    if(plur2impfpass == 'faciebamini'){
      plur2impfpass = 'fiebatis'
    }
    plur3impfpass = presentstem + "iebantur"
    if(plur3impfpass == 'faciebantur'){
      plur3impfpass = 'fiebant'
    }

    sing1pressubjpass = presentstem + 'iar'
    if(sing1pressubjpass == 'faciar'){
      sing1pressubjpass = 'fiam'
    }
    sing2pressubjpass = presentstem + 'iaris'
    if(sing2pressubjpass == 'faciaris'){
      sing2pressubjpass = 'fias'
    }
    sing3pressubjpass = presentstem + 'iatur'
    if(sing3pressubjpass == 'faciatur'){
      sing3pressubjpass = 'fiat'
    }
    plur1pressubjpass = presentstem + 'iamur'
    if(plur1pressubjpass == 'faciamur'){
      plur1pressubjpass = 'fiamus'
    }
    plur2pressubjpass = presentstem + 'iamini'
    if(plur2pressubjpass == 'faciamini'){
      plur2pressubjpass = 'fiatis'
    }
    plur3pressubjpass = presentstem + 'iantur'
    if(sing1impfpass == 'faciantur'){
      sing1impfpass = 'fiant'
    }

    prespplstem = presentstem + 'ien'
    gerstem = prespplstem + 'd'

    imperativesing = presentstem + 'i'
    if(imperativesing == 'faci'){imperativesing = 'fac'}
    imperativeplur = imperativesing + 'te'
  }
  if(semidep == true){
    ppstem = pps[2].substr(0,pps[2].length-2)
    perfstem = ''
  }
  if(conjugation == '1d'){
    presentstem = pps[0].substr(0,pps[0].length-2)
    ppstem = pps[2].substr(0,pps[2].length-2)
    sing2pres = presentstem + 'aris'
    sing3pres = presentstem + 'atur'
    plur1pres = presentstem + 'amur'
    plur2pres = presentstem + 'amini'
    plur3pres = presentstem + 'antur'
    
    sing1fut = presentstem + "abor"
    sing2fut = presentstem + "aberis"
    sing3fut = presentstem + "abitur"
    plur1fut = presentstem + "abimur"
    plur2fut = presentstem + "abimini"
    plur3fut = presentstem + "abuntur"

    sing1impf = presentstem + "abar"
    sing2impf = presentstem + "abaris"
    sing3impf = presentstem + "abatur"
    plur1impf = presentstem + "abamur"
    plur2impf = presentstem + "abamini"
    plur3impf = presentstem + "abantur"

    sing1pressubj = presentstem + 'er'
    sing2pressubj = presentstem + 'eris'
    sing3pressubj = presentstem + 'etur'
    plur1pressubj = presentstem + 'emur'
    plur2pressubj = presentstem + 'emini'
    plur3pressubj = presentstem + 'entur'

    prespplstem = presentstem + 'an'
    gerstem = prespplstem + 'd'

    imperativesing = presentstem + 'are'
    imperativeplur = plur2pres
  }
  if(conjugation == '2d'){
    presentstem = pps[0].substr(0,pps[0].length-3)
    ppstem = pps[2].substr(0,pps[2].length-2)
    sing2pres = presentstem + 'eris'
    sing3pres = presentstem + 'etur'
    plur1pres = presentstem + 'emur'
    plur2pres = presentstem + 'emini'
    plur3pres = presentstem + 'entur'
    
    sing1fut = presentstem + "ebor"
    sing2fut = presentstem + "eberis"
    sing3fut = presentstem + "ebitur"
    plur1fut = presentstem + "ebimur"
    plur2fut = presentstem + "ebimini"
    plur3fut = presentstem + "ebuntur"

    sing1impf = presentstem + "ebar"
    sing2impf = presentstem + "ebaris"
    sing3impf = presentstem + "ebatur"
    plur1impf = presentstem + "ebamur"
    plur2impf = presentstem + "ebamini"
    plur3impf = presentstem + "ebantur"

    sing1pressubj = presentstem + 'ear'
    sing2pressubj = presentstem + 'earis'
    sing3pressubj = presentstem + 'eatur'
    plur1pressubj = presentstem + 'eamur'
    plur2pressubj = presentstem + 'eamini'
    plur3pressubj = presentstem + 'eantur'

    prespplstem = presentstem + 'en'
    gerstem = prespplstem + 'd'

    imperativesing = presentstem + 'ere'
    imperativeplur = plur2pres
  }
  if(conjugation == '3d'){
    presentstem = pps[0].substr(0,pps[0].length-2)
    ppstem = pps[2].substr(0,pps[2].length-2)
    sing2pres = presentstem + 'eris'
    sing3pres = presentstem + 'itur'
    plur1pres = presentstem + 'imur'
    plur2pres = presentstem + 'imini'
    plur3pres = presentstem + 'untur'
    
    sing1fut = presentstem + "ar"
    sing2fut = presentstem + "eris"
    sing3fut = presentstem + "etur"
    plur1fut = presentstem + "emur"
    plur2fut = presentstem + "emini"
    plur3fut = presentstem + "entur"

    sing1impf = presentstem + "ebar"
    sing2impf = presentstem + "ebaris"
    sing3impf = presentstem + "ebatur"
    plur1impf = presentstem + "ebamur"
    plur2impf = presentstem + "ebamini"
    plur3impf = presentstem + "ebantur"

    sing1pressubj = presentstem + 'ar'
    sing2pressubj = presentstem + 'aris'
    sing3pressubj = presentstem + 'atur'
    plur1pressubj = presentstem + 'amur'
    plur2pressubj = presentstem + 'amini'
    plur3pressubj = presentstem + 'antur'

    prespplstem = presentstem + 'en'
    gerstem = prespplstem + 'd'

    imperativesing = presentstem + 'ere'
    imperativeplur = plur2pres
  }
  if(conjugation == '4d'){
    presentstem = pps[0].substr(0,pps[0].length-3)
    ppstem = pps[2].substr(0,pps[2].length-2)
    sing2pres = presentstem + 'ieris'
    sing3pres = presentstem + 'itur'
    plur1pres = presentstem + 'imur'
    plur2pres = presentstem + 'imini'
    plur3pres = presentstem + 'iuntur'
    
    sing1fut = presentstem + "ar"
    sing2fut = presentstem + "eris"
    sing3fut = presentstem + "etur"
    plur1fut = presentstem + "emur"
    plur2fut = presentstem + "emini"
    plur3fut = presentstem + "entur"

    sing1impf = presentstem + "iebar"
    sing2impf = presentstem + "iebaris"
    sing3impf = presentstem + "iebatur"
    plur1impf = presentstem + "iebamur"
    plur2impf = presentstem + "iebamini"
    plur3impf = presentstem + "iebantur"

    sing1pressubj = presentstem + 'iar'
    sing2pressubj = presentstem + 'iaris'
    sing3pressubj = presentstem + 'iatur'
    plur1pressubj = presentstem + 'iamur'
    plur2pressubj = presentstem + 'iamini'
    plur3pressubj = presentstem + 'iantur'

    prespplstem = presentstem + 'ien'
    gerstem = prespplstem + 'd'

    imperativesing = presentstem + 'ire'
    imperativeplur = plur2pres
  }
  if(conjugation == '5d'){
    presentstem = pps[0].substr(0,pps[0].length-3)
    ppstem = pps[2].substr(0,pps[2].length-2)
    sing2pres = presentstem + 'ieris'
    sing3pres = presentstem + 'itur'
    plur1pres = presentstem + 'imur'
    plur2pres = presentstem + 'imini'
    plur3pres = presentstem + 'iuntur'
    
    sing1fut = presentstem + "ar"
    sing2fut = presentstem + "eris"
    sing3fut = presentstem + "etur"
    plur1fut = presentstem + "emur"
    plur2fut = presentstem + "emini"
    plur3fut = presentstem + "entur"

    sing1impf = presentstem + "iebar"
    sing2impf = presentstem + "iebaris"
    sing3impf = presentstem + "iebatur"
    plur1impf = presentstem + "iebamur"
    plur2impf = presentstem + "iebamini"
    plur3impf = presentstem + "iebantur"

    sing1pressubj = presentstem + 'iar'
    sing2pressubj = presentstem + 'iaris'
    sing3pressubj = presentstem + 'iatur'
    plur1pressubj = presentstem + 'iamur'
    plur2pressubj = presentstem + 'iamini'
    plur3pressubj = presentstem + 'iantur'

    prespplstem = presentstem + 'ien'
    gerstem = prespplstem + 'd'

    imperativesing = presentstem + 'ire'
    imperativeplur = plur2pres
  }
  if(conjugation == 'sum'){
    presentstem = pps[0].substr(0,pps[0].length-3)
    if(presentstem == 'pos'){presentstem = 'pot'}
    perfstem = pps[2].substr(0,pps[2].length-1)
    sing2pres = presentstem + 'es'
    sing3pres = presentstem + 'est'
    plur1pres = presentstem + 'sumus'
    if(plur1pres == 'potsumus'){plur1pres = 'possumus'}
    plur2pres = presentstem + 'estis'
    plur3pres = presentstem + 'sunt'
    if(plur3pres == 'potsunt'){plur3pres = 'possunt'}    
    sing1fut = presentstem + "ero"
    sing2fut = presentstem + "eris"
    sing3fut = presentstem + "erit"
    plur1fut = presentstem + "erimus"
    plur2fut = presentstem + "eritis"
    plur3fut = presentstem + "erunt"

    sing1impf = presentstem + "eram"
    sing2impf = presentstem + "eras"
    sing3impf = presentstem + "erat"
    plur1impf = presentstem + "eramus"
    plur2impf = presentstem + "eratis"
    plur3impf = presentstem + "erant"

    sing1pressubj = presentstem + 'sim'
    if(sing1pressubj == 'potsim'){sing1pressubj = 'possim'}
    sing2pressubj = presentstem + 'sis'
    if(sing2pressubj == 'potsis'){sing2pressubj = 'possis'}
    sing3pressubj = presentstem + 'sit'
    if(sing3pressubj == 'potsit'){sing3pressubj = 'possit'}
    plur1pressubj = presentstem + 'simus'
    if(plur1pressubj == 'potsimus'){plur1pressubj = 'possimus'}
    plur2pressubj = presentstem + 'sitis'
    if(plur2pressubj == 'potsitis'){plur2pressubj = 'possitis'}
    plur3pressubj = presentstem + 'sint'
    if(plur3pressubj == 'potsint'){plur3pressubj = 'possint'}

    imperativesing = sing2pres
    imperativeplur = sing2pres + 'te'
  }  
  if(conjugation == 'fio'){
    presentstem = 'fi'
    perfstem = pps[2].substr(0,pps[2].length-1)
    sing2pres = presentstem + 's'
    sing3pres = presentstem + 't'
    plur1pres = presentstem + 'mus'
    plur2pres = presentstem + 'tis'
    plur3pres = presentstem + 'unt'

    sing1fut = presentstem + "am"
    sing2fut = presentstem + "es"
    sing3fut = presentstem + "et"
    plur1fut = presentstem + "emus"
    plur2fut = presentstem + "etis"
    plur3fut = presentstem + "ent"

    sing1impf = presentstem + "ebam"
    sing2impf = presentstem + "ebas"
    sing3impf = presentstem + "ebat"
    plur1impf = presentstem + "ebamus"
    plur2impf = presentstem + "ebatis"
    plur3impf = presentstem + "ebant"

    sing1pressubj = presentstem + 'am'
    sing2pressubj = presentstem + 'as'
    sing3pressubj = presentstem + 'at'
    plur1pressubj = presentstem + 'amus'
    plur2pressubj = presentstem + 'atis'
    plur3pressubj = presentstem + 'ant'
    
    prespplstem = presentstem + 'en'
    gerstem = 'faciend'

    imperativesing = presentstem
    imperativeplur = imperativesing + 'te'
  }
  if(conjugation == 'volo'){
    presentstem = pps[0].substr(0,pps[0].length-1)
    perfstem = pps[2].substr(0,pps[2].length-1)
    sing2pres = presentstem + 'is'
    if(sing2pres == 'nolis'){sing2pres = 'non vis'}
    if(sing2pres == 'malis'){sing2pres = 'mavis'}
    if(sing2pres == 'volis'){sing2pres = 'vis'}
    sing3pres = presentstem + 'it'
    if(sing3pres == 'nolit'){sing3pres = 'non vult'}
    if(sing3pres == 'malit'){sing3pres = 'mavult'}
    if(sing3pres == 'volit'){sing3pres = 'vult'}
    plur1pres = presentstem + 'imus'
    if(plur1pres == 'nolimus'){plur1pres = 'nolumus'}//////
    if(plur1pres == 'malimus'){plur1pres = 'malumus'}
    if(plur1pres == 'volimus'){plur1pres = 'volumus'}
    plur2pres = presentstem + 'itis'
    if(plur2pres == 'nolitis'){plur2pres = 'non vultis'}
    if(plur2pres == 'malitis'){plur2pres = 'mavultis'}
    if(plur2pres == 'volitis'){plur2pres = 'vultis'}
    plur3pres = presentstem + 'unt'

    sing1fut = presentstem + "am"
    sing2fut = presentstem + "es"
    sing3fut = presentstem + "et"
    plur1fut = presentstem + "emus"
    plur2fut = presentstem + "etis"
    plur3fut = presentstem + "ent"

    sing1impf = presentstem + "ebam"
    sing2impf = presentstem + "ebas"
    sing3impf = presentstem + "ebat"
    plur1impf = presentstem + "ebamus"
    plur2impf = presentstem + "ebatis"
    plur3impf = presentstem + "ebant"
var subjstem = presentstem
if(pps[0] == 'volo'){subjstem = 'vel'}
if(pps[0] == 'malo'){subjstem = 'mall'}
    sing1pressubj = subjstem + 'im'
    sing2pressubj = subjstem + 'is'
    sing3pressubj = subjstem + 'it'
    plur1pressubj = subjstem + 'imus'
    plur2pressubj = subjstem + 'itis'
    plur3pressubj = subjstem + 'int'

    prespplstem = presentstem + 'en'

    imperativesing = presentstem + 'i'
    imperativeplur = imperativesing + 'te'
  }
  if(conjugation == 'eo'){
    presentstem = pps[0].substr(0,pps[0].length-2)
    perfstem = pps[2].substr(0,pps[2].length-1)
    ppstem = pps[3].substr(0,pps[3].length-2)
    sing2pres = presentstem + 'is'
    sing3pres = presentstem + 'it'
    plur1pres = presentstem + 'imus'
    plur2pres = presentstem + 'itis'
    plur3pres = presentstem + 'eunt'

    sing1fut = presentstem + "ibo"
    sing2fut = presentstem + "ibis"
    sing3fut = presentstem + "ibit"
    plur1fut = presentstem + "ibimus"
    plur2fut = presentstem + "ibitis"
    plur3fut = presentstem + "ibunt"

    sing1impf = presentstem + "ibam"
    sing2impf = presentstem + "ibas"
    sing3impf = presentstem + "ibat"
    plur1impf = presentstem + "ibamus"
    plur2impf = presentstem + "ibatis"
    plur3impf = presentstem + "ibant"

    sing1pressubj = presentstem + 'eam'
    sing2pressubj = presentstem + 'eas'
    sing3pressubj = presentstem + 'eat'
    plur1pressubj = presentstem + 'eamus'
    plur2pressubj = presentstem + 'eatis'
    plur3pressubj = presentstem + 'eant'

    prespplstem = presentstem + 'ien'
    gerstem = presentstem + 'eund'

    imperativesing = presentstem + 'i'
    imperativeplur = imperativesing + 'te'
  }
  if(conjugation=='defective'){
    perfstem = pps[0].substr(0,pps[0].length-1)
    sing2pres = perfstem + 'isti'
    sing3pres = perfstem + 'it'
    plur1pres = perfstem + 'imus'
    plur2pres = perfstem + 'istis'
    plur3pres = perfstem + 'erunt'

    sing1fut = perfstem + "ero"
    sing2fut = perfstem + "eris"
    sing3fut = perfstem + "erit"
    plur1fut = perfstem + "erimus"
    plur2fut = perfstem + "eritis"
    plur3fut = perfstem + "erunt"

    sing1perf = perfstem + "eram"
    sing2perf = perfstem + "eras"
    sing3perf = perfstem + "erat"
    plur1perf = perfstem + "eramus"
    plur2perf = perfstem + "eratis"
    plur3perf = perfstem + "erant"

    sing1pressubj = perfstem + 'erim'
    sing2pressubj = perfstem + 'eris'
    sing3pressubj = perfstem + 'erit'
    plur1pressubj = perfstem + 'erimus'
    plur2pressubj = perfstem + 'eritis'
    plur3pressubj = perfstem + 'erint'

    sing1perfsubj = perfstem + 'issem'
    sing2perfsubj = perfstem + 'isses'
    sing3perfsubj = perfstem + 'isset'
    plur1perfsubj = perfstem + 'issemus'
    plur2perfsubj = perfstem + 'issetis'
    plur3perfsubj = perfstem + 'issent'
    delcol([10,11,12,13,14,15,16,17,18])
for(qqqqq = 0; qqqqq <4; qqqqq ++){
    document.getElementById('tablecontainervisible').children[0].children[0].getElementsByTagName('tr')[6].remove()
}
for(qqqqq = 0; qqqqq <9; qqqqq ++){
  document.getElementById('tablecontainervisible').children[0].children[0].getElementsByTagName('tr')[14].remove()
}
for(qqqqq = 0; qqqqq <4; qqqqq ++){
  document.getElementById('tablecontainervisible').children[0].children[0].getElementsByTagName('tr')[20].remove()
}
for(qqqqq = 0; qqqqq <4; qqqqq ++){
  document.getElementById('tablecontainervisible').children[0].children[0].getElementsByTagName('tr')[24].remove()
}
document.getElementById('tablecontainervisible').children[0].children[0].getElementsByTagName('tr')[30].remove()
if(pps[0]=='memini'){
  
  imperativesing = 'memento'
  imperativeplur = 'mementote'
} else {
  for(qqqqq = 0; qqqqq <4; qqqqq ++){
    document.getElementById('tablecontainervisible').children[0].children[0].getElementsByTagName('tr')[24].remove()
  }
}

  }
  var sing1impfsubj
  var sing2impfsubj
  var sing3impfsubj
  var plur1impfsubj
  var plur2impfsubj
  var plur3impfsubj

  var sing1perf
  var sing2perf
  var sing3perf
  var plur1perf
  var plur2perf
  var plur3perf

  var sing1plup
  var sing2plup
  var sing3plup
  var plur1plup
  var plur2plup
  var plur3plup

  var sing1futp
  var sing2futp
  var sing3futp
  var plur1futp
  var plur2futp
  var plur3futp

  var sing1perfsubj
  var sing2perfsubj
  var sing3perfsubj
  var plur1perfsubj
  var plur2perfsubj
  var plur3perfsubj

  var sing1plupsubj
  var sing2plupsubj
  var sing3plupsubj
  var plur1plupsubj
  var plur2plupsubj
  var plur3plupsubj

  var futinf
  var futpplstem
  var supine
  if(ppstem != '' & (conjugation=='1'||conjugation=='2'||conjugation=='3'||conjugation=='4'||conjugation=='5'||conjugation=='1d'||conjugation=='2d'||conjugation=='3d'||conjugation=='4d'||conjugation=='5d'||conjugation=="eo")){
    futinf = ppstem + 'urus, -a, -um esse'
    if(conjugation == 'fio'){futinf = 'fore/factum iri'}
    futpplstem = ppstem + 'ur'
    supine = ppstem + 'um, -u'
  }
if(conjugation=='sum'&&pps[3]!="-"){
  futinf = presentstem + 'futurus, -a, -um esse'
  futpplstem = presentstem + 'futur'
}
if(conjugation == 'fio'){
  futpplstem = 'futur'
}

var perfinf
var perfinfpass
  if(conjugation == '1'||conjugation == '2'||conjugation == '3'||conjugation == '4'||conjugation == '5'||conjugation == 'sum'||conjugation == 'eo'||conjugation == 'volo'||conjugation == 'fio'||conjugation == 'ferro'){
    sing1impfsubj = pps[1].substr(0,pps[1].length-1) + 'em'
    sing2impfsubj = pps[1].substr(0,pps[1].length-1) + 'es'
    sing3impfsubj = pps[1].substr(0,pps[1].length-1) + 'et'
    plur1impfsubj = pps[1].substr(0,pps[1].length-1) + 'emus'
    plur2impfsubj = pps[1].substr(0,pps[1].length-1) + 'etis'
    plur3impfsubj = pps[1].substr(0,pps[1].length-1) + 'ent'

    sing1perf = perfstem + 'i'
    sing2perf = perfstem + 'isti'
    sing3perf = perfstem + 'it'
    plur1perf = perfstem + 'imus'
    plur2perf = perfstem + 'istis'
    plur3perf = perfstem + 'erunt'

    sing1plup = perfstem + 'eram'
    sing2plup = perfstem + 'eras'
    sing3plup = perfstem + 'erat'
    plur1plup = perfstem + 'eramus'
    plur2plup = perfstem + 'eratis'
    plur3plup = perfstem + 'erant'

    sing1futp = perfstem + 'ero'
    sing2futp = perfstem + 'eris'
    sing3futp = perfstem + 'erit'
    plur1futp = perfstem + 'erimus'
    plur2futp = perfstem + 'eritis'
    plur3futp = perfstem + 'erint'

    sing1perfsubj = perfstem + 'erim'
    sing2perfsubj = perfstem + 'eris'
    sing3perfsubj = perfstem + 'erit'
    plur1perfsubj = perfstem + 'erimus'
    plur2perfsubj = perfstem + 'eritis'
    plur3perfsubj = perfstem + 'erint'

    sing1plupsubj = perfstem + 'issem'
    sing2plupsubj = perfstem + 'isses'
    sing3plupsubj = perfstem + 'isset'
    plur1plupsubj = perfstem + 'issemus'
    plur2plupsubj = perfstem + 'issetis'
    plur3plupsubj = perfstem + 'issent'

    perfinf = perfstem + 'isse'
    
  }
  var sing1impfsubjpass
  var sing2impfsubjpass
  var sing3impfsubjpass
  var plur1impfsubjpass 
  var plur2impfsubjpass
  var plur3impfsubjpass

  if(conjugation == '1'||conjugation == '2'||conjugation == '3'||conjugation == '4'||conjugation == '5'||conjugation == 'ferro'){
    sing1impfsubjpass = pps[1].substr(0,pps[1].length-1) + 'er'
    if(sing1impfsubjpass == 'facerer'){
      sing1impfsubjpass = 'fierem'
    }
    sing2impfsubjpass = pps[1].substr(0,pps[1].length-1) + 'eris'
    if(sing2impfsubjpass == 'facereris'){
      sing2impfsubjpass = 'fieres'
    }
    sing3impfsubjpass = pps[1].substr(0,pps[1].length-1) + 'etur'
    if(sing3impfsubjpass == 'faceretur'){
      sing3impfsubjpass = 'fieret'
    }
    plur1impfsubjpass = pps[1].substr(0,pps[1].length-1) + 'emur'
    if(plur1impfsubjpass == 'faceremur'){
      plur1impfsubjpass = 'fieremus'
    }
    plur2impfsubjpass = pps[1].substr(0,pps[1].length-1) + 'emini'
    if(plur2impfsubjpass == 'faceremini'){
      plur2impfsubjpass = 'fieretis'
    }
    plur3impfsubjpass = pps[1].substr(0,pps[1].length-1) + 'entur'
    if(plur3impfsubjpass == 'facerentur'){
      plur3impfsubjpass = 'fierent'
    }
  }

  
    if(conjugation == '1d'||conjugation == '2d'||conjugation == '3d'||conjugation == '4d'||conjugation == '5d'){
    sing1impfsubj = pps[1].substr(0,pps[1].length-1) + 'er'
    sing2impfsubj = pps[1].substr(0,pps[1].length-1) + 'eris'
    sing3impfsubj = pps[1].substr(0,pps[1].length-1) + 'etur'
    plur1impfsubj = pps[1].substr(0,pps[1].length-1) + 'emur'
    plur2impfsubj = pps[1].substr(0,pps[1].length-1) + 'emini'
    plur3impfsubj = pps[1].substr(0,pps[1].length-1) + 'entur'
  }

  var sing1perfpass
  var sing2perfpass
  var sing3perfpass
  var plur1perfpass
  var plur2perfpass
  var plur3perfpass

  var sing1pluppass
  var sing2pluppass
  var sing3pluppass
  var plur1pluppass
  var plur2pluppass
  var plur3pluppass

  var sing1futppass
  var sing2futppass
  var sing3futppass
  var plur1futppass
  var plur2futppass
  var plur3futppass

  var sing1perfsubjpass
  var sing2perfsubjpass
  var sing3perfsubjpass
  var plur1perfsubjpass
  var plur2perfsubjpass
  var plur3perfsubjpass

  var sing1plupsubjpass
  var sing2plupsubjpass
  var sing3plupsubjpass
  var plur1plupsubjpass
  var plur2plupsubjpass
  var plur3plupsubjpass

  var futinfpass
    if(ppstem != '' && semidep==false&&(conjugation=='1'||conjugation=='2'||conjugation=='3'||conjugation=='4'||conjugation=='5'||conjugation == 'ferro')){

      
    sing1perfpass = ppstem + 'us, -a, -um sum'
    sing2perfpass = ppstem + 'us, -a, -um es'
    sing3perfpass = ppstem + 'us, -a, -um est'
    plur1perfpass = ppstem + 'i, -ae, -a sumus'
    plur2perfpass = ppstem + 'i, -ae, -a estis'
    plur3perfpass = ppstem + 'i, -ae, -a sunt'

    sing1pluppass = ppstem + 'us, -a, -um eram'
    sing2pluppass = ppstem + 'us, -a, -um eras'
    sing3pluppass = ppstem + 'us, -a, -um erat'
    plur1pluppass = ppstem + 'i, -ae, -a eramus'
    plur2pluppass = ppstem + 'i, -ae, -a eratis'
    plur3pluppass = ppstem + 'i, -ae, -a erant'

    sing1futppass = ppstem + 'us, -a, -um ero'
    sing2futppass = ppstem + 'us, -a, -um eris'
    sing3futppass = ppstem + 'us, -a, -um erit'
    plur1futppass = ppstem + 'i, -ae, -a erimus'
    plur2futppass = ppstem + 'i, -ae, -a eritis'
    plur3futppass = ppstem + 'i, -ae, -a erunt'

    sing1perfsubjpass = ppstem + 'us, -a, -um sim'
    sing2perfsubjpass = ppstem + 'us, -a, -um sis'
    sing3perfsubjpass = ppstem + 'us, -a, -um sit'
    plur1perfsubjpass = ppstem + 'i, -ae, -a simus'
    plur2perfsubjpass = ppstem + 'i, -ae, -a sitis'
    plur3perfsubjpass = ppstem + 'i, -ae, -a sint'

    sing1plupsubjpass = ppstem + 'us, -a, -um essem'
    sing2plupsubjpass = ppstem + 'us, -a, -um esses'
    sing3plupsubjpass = ppstem + 'us, -a, -um esset'
    plur1plupsubjpass = ppstem + 'i, -ae, -a essemus'
    plur2plupsubjpass = ppstem + 'i, -ae, -a essetis'
    plur3plupsubjpass = ppstem + 'i, -ae, -a essent'

    futinfpass = ppstem + 'um iri'
    perfinfpass = ppstem + 'us, -a, -um esse'

    imperativesingpass = pps[1]
    if(imperativesingpass == 'facere'){
      imperativesingpass = 'fi'
    }

    imperativeplurpass = plur2prespass

    }
    if(conjugation!='defective'&&(semidep==true||deponent==true)){

      
      sing1perf = ppstem + 'us, -a, -um sum'
      sing2perf = ppstem + 'us, -a, -um es'
      sing3perf = ppstem + 'us, -a, -um est'
      plur1perf = ppstem + 'i, -ae, -a sumus'
      plur2perf = ppstem + 'i, -ae, -a estis'
      plur3perf = ppstem + 'i, -ae, -a sunt'
  
      sing1plup = ppstem + 'us, -a, -um eram'
      sing2plup = ppstem + 'us, -a, -um eras'
      sing3plup = ppstem + 'us, -a, -um erat'
      plur1plup = ppstem + 'i, -ae, -a eramus'
      plur2plup = ppstem + 'i, -ae, -a eratis'
      plur3plup = ppstem + 'i, -ae, -a erant'
  
      sing1futp = ppstem + 'us, -a, -um ero'
      sing2futp = ppstem + 'us, -a, -um eris'
      sing3futp = ppstem + 'us, -a, -um erit'
      plur1futp = ppstem + 'i, -ae, -a erimus'
      plur2futp = ppstem + 'i, -ae, -a eritis'
      plur3futp = ppstem + 'i, -ae, -a erunt'
  
      sing1perfsubj = ppstem + 'us, -a, -um sim'
      sing2perfsubj = ppstem + 'us, -a, -um sis'
      sing3perfsubj = ppstem + 'us, -a, -um sit'
      plur1perfsubj = ppstem + 'i, -ae, -a simus'
      plur2perfsubj = ppstem + 'i, -ae, -a sitis'
      plur3perfsubj = ppstem + 'i, -ae, -a sint'
  
      sing1plupsubj = ppstem + 'us, -a, -um essem'
      sing2plupsubj = ppstem + 'us, -a, -um esses'
      sing3plupsubj = ppstem + 'us, -a, -um esset'
      plur1plupsubj = ppstem + 'i, -ae, -a essemus'
      plur2plupsubj = ppstem + 'i, -ae, -a essetis'
      plur3plupsubj = ppstem + 'i, -ae, -a essent'

      perfinf = ppstem + 'us, -a, -um esse'
      }
    var prespplmsn
    var prespplfsn
    var prespplnsn
    var prespplmsv
    var prespplfsv
    var prespplnsv
    var prespplmsa
    var prespplfsa
    var prespplnsa
    var prespplmsg
    var prespplfsg
    var prespplnsg
    var prespplmsd
    var prespplfsd
    var prespplnsd
    var prespplmsab
    var prespplfsab
    var prespplnsab
    var prespplmpn
    var prespplfpn
    var prespplnpn
    var prespplmpv
    var prespplfpv
    var prespplnpv
    var prespplmpa
    var prespplfpa
    var prespplnpa
    var prespplmpg
    var prespplfpg
    var prespplnpg
    var prespplmpd
    var prespplfpd
    var prespplnpd
    var prespplmpab
    var prespplfpab
    var prespplnpab
if(typeof prespplstem != 'undefined' && conjugation!='eo'){
  prespplmsn = prespplstem + 's' 
  prespplfsn = prespplstem + 's'
  prespplnsn = prespplstem + 's'
  prespplmsv = prespplstem + 's'
  prespplfsv = prespplstem + 's'
  prespplnsv = prespplstem + 's'
  prespplmsa = prespplstem + 'tem'
  prespplfsa = prespplstem + 'tem' 
  prespplnsa = prespplstem + 's'
  prespplmsg = prespplstem + 'tis' 
  prespplfsg = prespplstem + 'tis'
  prespplnsg = prespplstem + 'tis'
  prespplmsd = prespplstem + 'ti' 
  prespplfsd = prespplstem + 'ti'
  prespplnsd = prespplstem + 'ti'
  prespplmsab = prespplstem + 'te/-i' 
  prespplfsab = prespplstem + 'te/-i'
  prespplnsab = prespplstem + 'te/-i'

  prespplmpn = prespplstem + 'tes' 
  prespplfpn = prespplstem + 'tes'
  prespplnpn = prespplstem + 'tia'
  prespplmpv = prespplstem + 'tes'
  prespplfpv = prespplstem + 'tes'
  prespplnpv = prespplstem + 'tia'
  prespplmpa = prespplstem + 'tes' 
  prespplfpa = prespplstem + 'tes'
  prespplnpa = prespplstem + 'tia'
  prespplmpg = prespplstem + 'tium' 
  prespplfpg = prespplstem + 'tium'
  prespplnpg = prespplstem + 'tium'
  prespplmpd = prespplstem + 'tibus' 
  prespplfpd = prespplstem + 'tibus'
  prespplnpd = prespplstem + 'tibus'
  prespplmpab = prespplstem + 'tibus' 
  prespplfpab = prespplstem + 'tibus'
  prespplnpab = prespplstem + 'tibus'
} else if (typeof prespplstem != 'undefined' && conjugation =='eo'){
prespplstem = presentstem
  prespplmsn = prespplstem + 'iens' 
  prespplfsn = prespplstem + 'iens'
  prespplnsn = prespplstem + 'iens'
  prespplmsv = prespplstem + 'iens'
  prespplfsv = prespplstem + 'iens'
  prespplnsv = prespplstem + 'iens'
  prespplmsa = prespplstem + 'euntem'
  prespplfsa = prespplstem + 'eutem' 
  prespplnsa = prespplstem + 'iens'
  prespplmsg = prespplstem + 'euntis' 
  prespplfsg = prespplstem + 'euntis'
  prespplnsg = prespplstem + 'euntis'
  prespplmsd = prespplstem + 'eunti' 
  prespplfsd = prespplstem + 'eunti'
  prespplnsd = prespplstem + 'eunti'
  prespplmsab = prespplstem + 'eunte/-i' 
  prespplfsab = prespplstem + 'eunte/-i'
  prespplnsab = prespplstem + 'eunte/-i'

  prespplmpn = prespplstem + 'euntes' 
  prespplfpn = prespplstem + 'euntes'
  prespplnpn = prespplstem + 'euntia'
  prespplmpv = prespplstem + 'euntes'
  prespplfpv = prespplstem + 'euntes'
  prespplnpv = prespplstem + 'euntia'
  prespplmpa = prespplstem + 'euntes' 
  prespplfpa = prespplstem + 'euntes'
  prespplnpa = prespplstem + 'euntia'
  prespplmpg = prespplstem + 'euntium' 
  prespplfpg = prespplstem + 'euntium'
  prespplnpg = prespplstem + 'euntium'
  prespplmpd = prespplstem + 'euntibus' 
  prespplfpd = prespplstem + 'euntibus'
  prespplnpd = prespplstem + 'euntibus'
  prespplmpab = prespplstem + 'euntibus' 
  prespplfpab = prespplstem + 'euntibus'
  prespplnpab = prespplstem + 'euntibus'
}



var ppmsn
var ppfsn
var ppnsn
var ppmsv
var ppfsv
var ppnsv
var ppmsa
var ppfsa
var ppnsa
var ppmsg
var ppfsg
var ppnsg
var ppmsd
var ppfsd
var ppnsd
var ppmsab
var ppfsab
var ppnsab
var ppmpn
var ppfpn
var ppnpn
var ppmpv
var ppfpv
var ppnpv
var ppmpa
var ppfpa
var ppnpa
var ppmpg
var ppfpg
var ppnpg
var ppmpd
var ppfpd
var ppnpd
var ppmpab
var ppfpab
var ppnpab
if(typeof ppstem != 'undefined' &&semidep==false && ppstem != ''){
  ppmsn = ppstem + 'us' 
  ppfsn = ppstem + 'a'
  ppnsn = ppstem + 'um'
  ppmsv = ppstem + 'e'
  ppfsv = ppstem + 'a'
  ppnsv = ppstem + 'um'
  ppmsa = ppstem + 'um'
  ppfsa = ppstem + 'am' 
  ppnsa = ppstem + 'um'
  ppmsg = ppstem + 'i' 
  ppfsg = ppstem + 'ae'
  ppnsg = ppstem + 'i'
  ppmsd = ppstem + 'o' 
  ppfsd = ppstem + 'ae'
  ppnsd = ppstem + 'o'
  ppmsab = ppstem + 'o' 
  ppfsab = ppstem + 'a'
  ppnsab = ppstem + 'o'

  ppmpn = ppstem + 'i' 
  ppfpn = ppstem + 'ae'
  ppnpn = ppstem + 'a'
  ppmpv = ppstem + 'i'
  ppfpv = ppstem + 'ae'
  ppnpv = ppstem + 'a'
  ppmpa = ppstem + 'os' 
  ppfpa = ppstem + 'as'
  ppnpa = ppstem + 'a'
  ppmpg = ppstem + 'orum' 
  ppfpg = ppstem + 'arum'
  ppnpg = ppstem + 'orum'
  ppmpd = ppstem + 'is' 
  ppfpd = ppstem + 'is'
  ppnpd = ppstem + 'is'
  ppmpab = ppstem + 'is' 
  ppfpab = ppstem + 'is'
  ppnpab = ppstem + 'is'

}

var futpmsn
var futpfsn
var futpnsn
var futpmsv
var futpfsv
var futpnsv
var futpmsa
var futpfsa
var futpnsa
var futpmsg
var futpfsg
var futpnsg
var futpmsd
var futpfsd
var futpnsd
var futpmsab
var futpfsab
var futpnsab
var futpmpn
var futpfpn
var futpnpn
var futpmpv
var futpfpv
var futpnpv
var futpmpa
var futpfpa
var futpnpa
var futpmpg
var futpfpg
var futpnpg
var futpmpd
var futpfpd
var futpnpd
var futpmpab
var futpfpab
var futpnpab

if(futpplstem!=='undefined' && futpplstem!= 'ur'){
  futpmsn = futpplstem + 'us' 
  futpfsn = futpplstem + 'a'
  futpnsn = futpplstem + 'um'
  futpmsv = futpplstem + 'e'
  futpfsv = futpplstem + 'a'
  futpnsv = futpplstem + 'um'
  futpmsa = futpplstem + 'um'
  futpfsa = futpplstem + 'am' 
  futpnsa = futpplstem + 'um'
  futpmsg = futpplstem + 'i' 
  futpfsg = futpplstem + 'ae'
  futpnsg = futpplstem + 'i'
  futpmsd = futpplstem + 'o' 
  futpfsd = futpplstem + 'ae'
  futpnsd = futpplstem + 'o'
  futpmsab = futpplstem + 'o' 
  futpfsab = futpplstem + 'a'
  futpnsab = futpplstem + 'o'

  futpmpn = futpplstem + 'i' 
  futpfpn = futpplstem + 'ae'
  futpnpn = futpplstem + 'a'
  futpmpv = futpplstem + 'i'
  futpfpv = futpplstem + 'ae'
  futpnpv = futpplstem + 'a'
  futpmpa = futpplstem + 'os' 
  futpfpa = futpplstem + 'as'
  futpnpa = futpplstem + 'a'
  futpmpg = futpplstem + 'orum' 
  futpfpg = futpplstem + 'arum'
  futpnpg = futpplstem + 'orum'
  futpmpd = futpplstem + 'is' 
  futpfpd = futpplstem + 'is'
  futpnpd = futpplstem + 'is'
  futpmpab = futpplstem + 'is' 
  futpfpab = futpplstem + 'is'
  futpnpab = futpplstem + 'is'

}

var germsn
var gerfsn
var gernsn
var germsv
var gerfsv
var gernsv
var germsa
var gerfsa
var gernsa
var germsg
var gerfsg
var gernsg
var germsd
var gerfsd
var gernsd
var germsab
var gerfsab
var gernsab
var germpn
var gerfpn
var gernpn
var germpv
var gerfpv
var gernpv
var germpa
var gerfpa
var gernpa
var germpg
var gerfpg
var gernpg
var germpd
var gerfpd
var gernpd
var germpab
var gerfpab
var gernpab
if(typeof gerstem != 'undefined'){
  germsn = gerstem + 'us' 
  gerfsn = gerstem + 'a'
  gernsn = gerstem + 'um'
  germsv = gerstem + 'e'
  gerfsv = gerstem + 'a'
  gernsv = gerstem + 'um'
  germsa = gerstem + 'um'
  gerfsa = gerstem + 'am' 
  gernsa = gerstem + 'um'
  germsg = gerstem + 'i' 
  gerfsg = gerstem + 'ae'
  gernsg = gerstem + 'i'
  germsd = gerstem + 'o' 
  gerfsd = gerstem + 'ae'
  gernsd = gerstem + 'o'
  germsab = gerstem + 'o' 
  gerfsab = gerstem + 'a'
  gernsab = gerstem + 'o'

  germpn = gerstem + 'i' 
  gerfpn = gerstem + 'ae'
  gernpn = gerstem + 'a'
  germpv = gerstem + 'i'
  gerfpv = gerstem + 'ae'
  gernpv = gerstem + 'a'
  germpa = gerstem + 'os' 
  gerfpa = gerstem + 'as'
  gernpa = gerstem + 'a'
  germpg = gerstem + 'orum' 
  gerfpg = gerstem + 'arum'
  gernpg = gerstem + 'orum'
  germpd = gerstem + 'is' 
  gerfpd = gerstem + 'is'
  gernpd = gerstem + 'is'
  germpab = gerstem + 'is' 
  gerfpab = gerstem + 'is'
  gernpab = gerstem + 'is'

}

var pamsn
var pafsn
var pansn
var pamsv
var pafsv
var pansv
var pamsa
var pafsa
var pansa
var pamsg
var pafsg
var pansg
var pamsd
var pafsd
var pansd
var pamsab
var pafsab
var pansab
var pampn
var pafpn
var panpn
var pampv
var pafpv
var panpv
var pampa
var pafpa
var panpa
var pampg
var pafpg
var panpg
var pampd
var pafpd
var panpd
var pampab
var pafpab
var panpab

var pastem = ppstem

if(deponent==true||semidep==true){
  pamsn = pastem + 'us' 
  pafsn = pastem + 'a'
  pansn = pastem + 'um'
  pamsv = pastem + 'e'
  pafsv = pastem + 'a'
  pansv = pastem + 'um'
  pamsa = pastem + 'um'
  pafsa = pastem + 'am' 
  pansa = pastem + 'um'
  pamsg = pastem + 'i' 
  pafsg = pastem + 'ae'
  pansg = pastem + 'i'
  pamsd = pastem + 'o' 
  pafsd = pastem + 'ae'
  pansd = pastem + 'o'
  pamsab = pastem + 'o' 
  pafsab = pastem + 'a'
  pansab = pastem + 'o'

  pampn = pastem + 'i' 
  pafpn = pastem + 'ae'
  panpn = pastem + 'a'
  pampv = pastem + 'i'
  pafpv = pastem + 'ae'
  panpv = pastem + 'a'
  pampa = pastem + 'os' 
  pafpa = pastem + 'as'
  panpa = pastem + 'a'
  pampg = pastem + 'orum' 
  pafpg = pastem + 'arum'
  panpg = pastem + 'orum'
  pampd = pastem + 'is' 
  pafpd = pastem + 'is'
  panpd = pastem + 'is'
  pampab = pastem + 'is' 
  pafpab = pastem + 'is'
  panpab = pastem + 'is'
document.getElementById('tablecontainervisible').getElementsByClassName('ppptable')[0].parentElement.innerHTML=document.getElementById('tablecontainervisible').getElementsByClassName('ppptable')[0].parentElement.innerHTML.replace(/Perfect passive participle/g,'Perfect active participle')
document.getElementById('tablecontainervisible').getElementsByClassName('ppptable')[0].parentElement.innerHTML=document.getElementById('tablecontainervisible').getElementsByClassName('ppptable')[0].parentElement.innerHTML.replace(/having been/g,'having')
document.getElementById('tablecontainervisible').getElementsByClassName('ppptable')[0].parentElement.innerHTML=document.getElementById('tablecontainervisible').getElementsByClassName('ppptable')[0].parentElement.innerHTML.replace(/>pp/g,'>pa')

}
var gerund
if(typeof gernsa != 'undefined'){
  gerund = gernsa + ', -i' 
}
if(pps[pps.length-1]=='SEMIDEP'){
  delcol([10,11,12,13,14,15,16,17,18],[15,16,17,18,19,20,21,22,23,24,25,26,37,38,39,40,41,42,43,44,45,46,47,48,51,53])
  document.getElementById('tablecontainervisible').children[0].children[0].getElementsByTagName('tr')[15].innerHTML = document.getElementById('tablecontainervisible').children[0].children[0].getElementsByTagName('tr')[19].innerHTML + '<td class="xl7816351">&nbsp;</td><td class="xl7816351">&nbsp;</td><td class="xl7816351">&nbsp;</td><td class="xl7816351">&nbsp;</td><td class="xl7816351">&nbsp;</td><td class="xl7816351">&nbsp;</td><td class="xl7816351">&nbsp;</td><td class="xl7816351">&nbsp;</td>'
  document.getElementById('tablecontainervisible').children[0].children[0].getElementsByTagName('tr')[37].innerHTML = document.getElementById('tablecontainervisible').children[0].children[0].getElementsByTagName('tr')[41].innerHTML + '<td class="xl7816351">&nbsp;</td><td class="xl7816351">&nbsp;</td><td class="xl7816351">&nbsp;</td><td class="xl7816351">&nbsp;</td><td class="xl7816351">&nbsp;</td><td class="xl7816351">&nbsp;</td><td class="xl7816351">&nbsp;</td><td class="xl7816351">&nbsp;</td>'
  document.getElementById('tablecontainervisible').children[0].children[0].getElementsByTagName('tr')[51].innerHTML = document.getElementById('tablecontainervisible').children[0].children[0].getElementsByTagName('tr')[51].innerHTML + '<td class="xl7816351">&nbsp;</td><td class="xl7916351">&nbsp;</td><td class="xl7916351">&nbsp;</td><td class="xl7916351">&nbsp;</td><td class="xl7916351">&nbsp;</td><td class="xl7916351">&nbsp;</td><td class="xl7916351">&nbsp;</td><td class="xl7816351">&nbsp;</td>'
  document.getElementById('tablecontainervisible').children[0].children[0].getElementsByTagName('tr')[53].innerHTML = document.getElementById('tablecontainervisible').children[0].children[0].getElementsByTagName('tr')[53].innerHTML + '<td class="xl7816351">&nbsp;</td><td class="xl7916351">&nbsp;</td><td class="xl7916351">&nbsp;</td><td class="xl7916351">&nbsp;</td><td class="xl7916351">&nbsp;</td><td class="xl7916351">&nbsp;</td><td class="xl7916351">&nbsp;</td><td class="xl7816351">&nbsp;</td>'
}
var intrans = false
if(pps.length>3){
  if(pps[3]=='-'){
    intrans = true
  }
}

if(pps[pps.length-1]=='DEP'||pps[pps.length-1]=='INTRANS'||conjugation == 'eo'||conjugation=='volo'||conjugation=='sum'||conjugation=='fio'||impers == true||intrans == true){
  delcol([10,11,12,13,14,15,16,17,18])
}
if(impers == true){
  delcol([5,6])
}

var allparts = ['sing1pres','presinf','sing2pres','sing3pres','plur1pres','plur2pres','plur3pres','sing1fut','sing2fut','sing3fut','plur1fut','plur2fut','plur3fut','sing1impf','sing2impf','sing3impf','plur1impf','plur2impf','plur3impf','sing1pressubj','sing2pressubj','sing3pressubj','plur1pressubj','plur2pressubj','plur3pressubj','sing1prespass','sing2prespass','sing3prespass','plur1prespass','plur2prespass','plur3prespass','sing1futpass','sing2futpass','sing3futpass','plur1futpass','plur2futpass','plur3futpass','sing1impfpass','sing2impfpass','sing3impfpass','plur1impfpass','plur2impfpass','plur3impfpass','sing1pressubjpass','sing2pressubjpass','sing3pressubjpass','plur1pressubjpass','plur2pressubjpass','plur3pressubjpass','presinfpass','prespplstem','gerstem','imperativesing','imperativeplur','imperativesingpass','imperativeplurpass','sing1impfsubj','sing2impfsubj','sing3impfsubj','plur1impfsubj','plur2impfsubj','plur3impfsubj','sing1perf','sing2perf','sing3perf','plur1perf','plur2perf','plur3perf','sing1plup','sing2plup','sing3plup','plur1plup','plur2plup','plur3plup','sing1futp','sing2futp','sing3futp','plur1futp','plur2futp','plur3futp','sing1perfsubj','sing2perfsubj','sing3perfsubj','plur1perfsubj','plur2perfsubj','plur3perfsubj','sing1plupsubj','sing2plupsubj','sing3plupsubj','plur1plupsubj','plur2plupsubj','plur3plupsubj','futinf','futpplstem','supine','perfinf','perfinfpass','sing1perfpass','sing2perfpass','sing3perfpass','plur1perfpass','plur2perfpass','plur3perfpass','sing1pluppass','sing2pluppass','sing3pluppass','plur1pluppass','plur2pluppass','plur3pluppass','sing1futppass','sing2futppass','sing3futppass','plur1futppass','plur2futppass','plur3futppass','sing1perfsubjpass','sing2perfsubjpass','sing3perfsubjpass','plur1perfsubjpass','plur2perfsubjpass','plur3perfsubjpass','sing1plupsubjpass','sing2plupsubjpass','sing3plupsubjpass','plur1plupsubjpass','plur2plupsubjpass','plur3plupsubjpass','futinfpass','prespplmsn','prespplfsn','prespplnsn','prespplmsv','prespplfsv','prespplnsv','prespplmsa','prespplfsa','prespplnsa','prespplmsg','prespplfsg','prespplnsg','prespplmsd','prespplfsd','prespplnsd','prespplmsab','prespplfsab','prespplnsab','prespplmpn','prespplfpn','prespplnpn','prespplmpv','prespplfpv','prespplnpv','prespplmpa','prespplfpa','prespplnpa','prespplmpg','prespplfpg','prespplnpg','prespplmpd','prespplfpd','prespplnpd','prespplmpab','prespplfpab','prespplnpab','ppmsn','ppfsn','ppnsn','ppmsv','ppfsv','ppnsv','ppmsa','ppfsa','ppnsa','ppmsg','ppfsg','ppnsg','ppmsd','ppfsd','ppnsd','ppmsab','ppfsab','ppnsab','ppmpn','ppfpn','ppnpn','ppmpv','ppfpv','ppnpv','ppmpa','ppfpa','ppnpa','ppmpg','ppfpg','ppnpg','ppmpd','ppfpd','ppnpd','ppmpab','ppfpab','ppnpab','futpmsn','futpfsn','futpnsn','futpmsv','futpfsv','futpnsv','futpmsa','futpfsa','futpnsa','futpmsg','futpfsg','futpnsg','futpmsd','futpfsd','futpnsd','futpmsab','futpfsab','futpnsab','futpmpn','futpfpn','futpnpn','futpmpv','futpfpv','futpnpv','futpmpa','futpfpa','futpnpa','futpmpg','futpfpg','futpnpg','futpmpd','futpfpd','futpnpd','futpmpab','futpfpab','futpnpab','germsn','gerfsn','gernsn','germsv','gerfsv','gernsv','germsa','gerfsa','gernsa','germsg','gerfsg','gernsg','germsd','gerfsd','gernsd','germsab','gerfsab','gernsab','germpn','gerfpn','gernpn','germpv','gerfpv','gernpv','germpa','gerfpa','gernpa','germpg','gerfpg','gernpg','germpd','gerfpd','gernpd','germpab','gerfpab','gernpab','pamsn','pafsn','pansn','pamsv','pafsv','pansv','pamsa','pafsa','pansa','pamsg','pafsg','pansg','pamsd','pafsd','pansd','pamsab','pafsab','pansab','pampn','pafpn','panpn','pampv','pafpv','panpv','pampa','pafpa','panpa','pampg','pafpg','panpg','pampd','pafpd','panpd','pampab','pafpab','panpab','gerund']
for (eachp = 0; eachp<allparts.length; eachp++){
  var command = 'document.getElementById(\'tablecontainervisible\').innerHTML = document.getElementById(\'tablecontainervisible\').innerHTML.replace(/>' + allparts[eachp] + '</g,\'>\' + ' + allparts[eachp] + ' + \'<\')'
  eval(command)
}

document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>sing1impfsubjpass</g,'>' + sing1impfsubjpass + '<')
document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>sing2impfsubjpass</g,'>' + sing2impfsubjpass + '<')
document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>sing3impfsubjpass</g,'>' + sing3impfsubjpass + '<')
document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>plur1impfsubjpass</g,'>' + plur1impfsubjpass + '<')
document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>plur2impfsubjpass</g,'>' + plur2impfsubjpass + '<')
document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>plur3impfsubjpass</g,'>' + plur3impfsubjpass + '<')

if(document.getElementById('tablecontainervisible').getElementsByClassName('gertable')[0].innerText.indexOf("undefined") != -1){document.getElementById('tablecontainervisible').getElementsByClassName('gertable')[0].parentElement.remove()}
if(document.getElementById('tablecontainervisible').getElementsByClassName('presppltable')[0].innerText.indexOf("undefined") != -1){document.getElementById('tablecontainervisible').getElementsByClassName('presppltable')[0].parentElement.remove()}
if(document.getElementById('tablecontainervisible').getElementsByClassName('ppptable')[0].innerText.indexOf("undefined") != -1){document.getElementById('tablecontainervisible').getElementsByClassName('ppptable')[0].parentElement.remove()}
if(document.getElementById('tablecontainervisible').getElementsByClassName('futptable')[0].innerText.indexOf("undefined") != -1){document.getElementById('tablecontainervisible').getElementsByClassName('futptable')[0].parentElement.remove()}

if(document.getElementById('tablecontainervisible').getElementsByClassName('gerundcell')[0].innerText == 'undefined' && document.getElementById('tablecontainervisible').getElementsByClassName('supinecell')[0].innerText == 'undefined' ){
  document.getElementById('tablecontainervisible').getElementsByClassName('gerundcell')[0].parentElement.parentElement.previousSibling.remove()
  document.getElementById('tablecontainervisible').getElementsByClassName('gerundcell')[0].parentElement.parentElement.previousSibling.remove()
  document.getElementById('tablecontainervisible').getElementsByClassName('gerundcell')[0].parentElement.parentElement.previousSibling.remove()
  document.getElementById('tablecontainervisible').getElementsByClassName('gerundcell')[0].parentElement.parentElement.previousSibling.remove()
  document.getElementById('tablecontainervisible').getElementsByClassName('gerundcell')[0].parentElement.parentElement.remove()
  document.getElementById('tablecontainervisible').getElementsByClassName('supinecell')[0].parentElement.parentElement.previousSibling.remove()
  document.getElementById('tablecontainervisible').getElementsByClassName('supinecell')[0].parentElement.parentElement.previousSibling.remove()
  document.getElementById('tablecontainervisible').getElementsByClassName('supinecell')[0].parentElement.parentElement.previousSibling.remove()
  document.getElementById('tablecontainervisible').getElementsByClassName('supinecell')[0].parentElement.parentElement.previousSibling.remove()
  document.getElementById('tablecontainervisible').getElementsByClassName('supinecell')[0].parentElement.parentElement.previousSibling.remove()
  document.getElementById('tablecontainervisible').getElementsByClassName('supinecell')[0].parentElement.parentElement.previousSibling.remove()
  document.getElementById('tablecontainervisible').getElementsByClassName('supinecell')[0].parentElement.parentElement.remove()
}
else if(document.getElementById('tablecontainervisible').getElementsByClassName('gerundcell')[0].innerText  == 'undefined'){
  document.getElementById('tablecontainervisible').getElementsByClassName('gerundcell')[0].parentElement.parentElement.remove()
}
else if(document.getElementById('tablecontainervisible').getElementsByClassName('supinecell')[0].innerText  == 'undefined'){
  document.getElementById('tablecontainervisible').getElementsByClassName('supinecell')[0].parentElement.parentElement.remove()
}
if(document.getElementById('tablecontainervisible').getElementsByClassName('futinfcell')[0].innerText  == 'undefined'){
  document.getElementById('tablecontainervisible').getElementsByClassName('futinfcell')[0].parentElement.parentElement.remove()
}

}

function meaning(meanings){
  var v0 =getverbparts(meanings[0],0)
  var v1 =getverbparts(meanings[0],1)
  var v2 =getverbparts(meanings[0],2)
  var v3 =getverbparts(meanings[0],3)
  var v4 =getverbparts(meanings[0],4)
  var v5 =getverbparts(meanings[0],5)
  var v6 =getverbparts(meanings[0],6)
  var v7 =getverbparts(meanings[0],7)
  var word = meanings[0]
  var pl = pluralize(word)
  var comp = gradation(word,0)
  var sup = gradation(word,1)
  
  
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/%0%/g,'<span class = "v0">' + v0 + '</span>')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/%1%/g,'<span class = "v1">' + v1 + '</span>')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/%2%/g,'<span class = "v2">' + v2 + '</span>')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/%3%/g,'<span class = "v3">' + v3 + '</span>')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/%4%/g,'<span class = "v4">' + v4 + '</span>')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/%5%/g,'<span class = "v5">' + v5 + '</span>')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/%6%/g,'<span class = "v6">' + v6 + '</span>')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/%7%/g,'<span class = "v7">' + v7 + '</span>')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/%comp%/g,'<span class = "comp">' + comp + '</span>')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/%superlative%/g,'<span class = "sup">' + sup + '</span>')
  
  document.getElementById('tabletitle').innerText = word
  var meaningsstring = '#£' + meanings.join('#')
  document.getElementById('tabletitle').setAttribute('meanings',meaningsstring.replace(/\#\s/g,'#'))

  try{
  var capstart = word.match(/^[A-Z]/g).length}
  catch(err){
    var capstart = 0 
  }
  if(capstart>0){document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/(^|\s)(the\s)/g,'$1')}
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/%word%/g,'<span class = "word">' + word + '</span>')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/%pl%/g,'<span class = "pl">' + pl + '</span>')
  }

  
function adj(pps){
  var declension = ''
  var amsn, afsn, ansn, amsv, afsv, ansv, amsa, afsa, ansa, amsg, afsg, ansg, amsd, afsd, ansd, amsab, afsab, ansab 
  var ampn, afpn, anpn, ampv, afpv, anpv, ampa, afpa, anpa, ampg, afpg, anpg, ampd, afpd, anpd, ampab, afpab, anpab 
  var astem
  var posendings
  if(pps.length < 5){
    astem = pps[2].substr(0,pps[2].length - 1)
    if(astem == 'AD'){astem = pps[1].substr(0,pps[1].length - 2)}
    declension = '3'
    if(astem.substr(astem.length-1,1)=='u'){
      astem = astem.substr(0,astem.length - 1)
      declension = '2'
      posendings = ['us','a','um','e','a','um','um','am','um','i','ae','i','o','ae','o','o','a','o','i','ae','a','i','ae','a','os','as','a','orum','arum','orum','is','is','is','is','is','is']

    } else {
      posendings = ['','','','','','','em','em','','is','is','is','i','i','i','e','e','e','es','es','a','es','es','a','es','es','a','um','um','um','ibus','ibus','ibus','ibus','ibus','ibus']
    }
    amsn = pps[0]
    afsn = pps[1]
    ansn = pps[2]
    if(pps.length<4){
      afsn = amsn
      ansn = amsn + 'e'
    }
    if(declension == '3'){amsv = amsn}
    else {amsv = astem + 'e'}
    afsv = afsn
    ansv = ansn
    ansa = ansn

    
  }
  else if (pps[2]== '(gen.)'||endsWith(pps[1],'is')||endsWith(pps[1],'e') ){
    astem = pps[1].substr(0,pps[1].length - 2)
    declension = '3'
    posendings = ['','','','','','','em','em','','is','is','is','i','i','i','e','e','e','es','es','a','es','es','a','es','es','a','um','um','um','ibus','ibus','ibus','ibus','ibus','ibus']
    amsn = pps[0]
    afsn = amsn
    ansn = amsn
    if(endsWith(pps[1],'e')){ansn = pps[1]; astem = pps[1].substr(0,pps[1].length - 1)}
    amsv = amsn
    afsv = afsn
    ansv = ansn
    ansa = ansn
  }
  else {
    declension = '2'
    if(pps[0].substr(pps[0].length - 2,2)=='us'){
      astem = pps[0].substr(0,pps[0].length - 2)      
    } else{
      astem = pps[1].substr(0,pps[1].length - 1)
    }
    
    posendings = ['us','a','um','e','a','um','um','am','um','i','ae','i','o','ae','o','o','a','o','i','ae','a','i','ae','a','os','as','a','orum','arum','orum','is','is','is','is','is','is']
    amsn = pps[0]
    afsn = astem + 'a'
    ansn = astem + 'um'
    amsv = astem + 'e'
    afsv = astem + 'a'
    ansv = astem + 'um'
    ansa = astem + 'um'
    if(amsv.substr(amsv.length - 2,2)=='ie'){amsv =  astem}
  }

  amsa = astem + posendings[6] 
  afsa = astem + posendings[7]
  amsg = astem + posendings[9] 
  afsg = astem + posendings[10]
  ansg = astem + posendings[11]
  amsd = astem + posendings[12] 
  afsd = astem + posendings[13]
  ansd = astem + posendings[14]
  amsab = astem + posendings[15] 
  afsab = astem + posendings[16]
  ansab = astem + posendings[17]
  ampn = astem + posendings[18] 
  afpn = astem + posendings[19]
  anpn = astem + posendings[20]
  ampv = astem + posendings[21] 
  afpv = astem + posendings[22]
  anpv = astem + posendings[23]
  ampa = astem + posendings[24] 
  afpa = astem + posendings[25]
  anpa = astem + posendings[26]
  ampg = astem + posendings[27] 
  afpg = astem + posendings[28]
  anpg = astem + posendings[29]
  ampd = astem + posendings[30] 
  afpd = astem + posendings[31]
  anpd = astem + posendings[32]
  ampab = astem + posendings[33] 
  afpab = astem + posendings[34]
  anpab = astem + posendings[35]
  if(declension=='3'&& (ansn.substr(ansn.length-1,1)=='i'||pps[0].substr(pps[0].length-2,2)=='is'||pps[0].substr(pps[0].length-2,2)=='es')){
    anpn = astem + 'i' + posendings[20]
    anpv = astem + 'i' + posendings[23]
    anpa = astem + 'i' + posendings[26]
    ampg = astem + 'ium'
    afpg = astem + 'ium'
    anpg = astem + 'ium'
  }

  var compstem 
  var compmsn, compfsn, compnsn, compmsv, compfsv, compnsv, compmsa, compfsa, compnsa, compmsg, compfsg, compnsg, compmsd, compfsd, compnsd, compmsab, compfsab, compnsab 
  var compmpn, compfpn, compnpn, compmpv, compfpv, compnpv, compmpa, compfpa, compnpa, compmpg, compfpg, compnpg, compmpd, compfpd, compnpd, compmpab, compfpab, compnpab 
  var docompar = false
  if(pps.length>3){docompar = true}
try{
  if(pps[3].substr(pps[3].length-2,2)=='or'){
    docompar = true
  } else{
    docompar = false
  }
} catch(err){docompar = false}
  if(docompar==true){
    var compstem = pps[3].substr(0,pps[3].length-2).replace(/j/g,'i')
    if(compstem.length == 1){compstem = pps[2].substr(0,pps[2].length-2).replace(/j/g,'i')}
    compendings = ['or','or','us','or','or','us','orem','orem','us','oris','oris','oris','ori','ori','ori','ore','ore','ore','ores','ores','ora','ores','ores','ora','ores','ores','ora','orum','orum','orum','oribus','oribus','oribus','oribus','oribus','oribus']
  
  compmsn = compstem + compendings[0] 
  compfsn = compstem + compendings[1]
  compnsn = compstem + compendings[2]
  compmsv = compstem + compendings[3] 
  compfsv = compstem + compendings[4]
  compnsv = compstem + compendings[5]
  compmsa = compstem + compendings[6] 
  compfsa = compstem + compendings[7]
  compnsa = compstem + compendings[8]
  compmsg = compstem + compendings[9] 
  compfsg = compstem + compendings[10]
  compnsg = compstem + compendings[11]
  compmsd = compstem + compendings[12] 
  compfsd = compstem + compendings[13]
  compnsd = compstem + compendings[14]
  compmsab = compstem + compendings[15] 
  compfsab = compstem + compendings[16]
  compnsab = compstem + compendings[17]
  compmpn = compstem + compendings[18] 
  compfpn = compstem + compendings[19]
  compnpn = compstem + compendings[20]
  compmpv = compstem + compendings[21] 
  compfpv = compstem + compendings[22]
  compnpv = compstem + compendings[23]
  compmpa = compstem + compendings[24] 
  compfpa = compstem + compendings[25]
  compnpa = compstem + compendings[26]
  compmpg = compstem + compendings[27] 
  compfpg = compstem + compendings[28]
  compnpg = compstem + compendings[29]
  compmpd = compstem + compendings[30] 
  compfpd = compstem + compendings[31]
  compnpd = compstem + compendings[32]
  compmpab = compstem + compendings[33] 
  compfpab = compstem + compendings[34]
  compnpab = compstem + compendings[35]
  }
  else {
    document.getElementById('tablecontainervisible').getElementsByClassName('comptable')[0].parentElement.parentElement.remove()
  }

  var supstem 
  var supmsn, supfsn, supnsn, supmsv, supfsv, supnsv, supmsa, supfsa, supnsa, supmsg, supfsg, supnsg, supmsd, supfsd, supnsd, supmsab, supfsab, supnsab 
  var supmpn, supfpn, supnpn, supmpv, supfpv, supnpv, supmpa, supfpa, supnpa, supmpg, supfpg, supnpg, supmpd, supfpd, supnpd, supmpab, supfpab, supnpab 
  if(pps.length>6){
  if(pps[6].substr(pps[6].length-4,4)=='imus'||pps[5].substr(pps[5].length-4,4)=='imus'){
    var supstem = pps[6].substr(0,pps[6].length-2).replace(/j/g,'i')
    if(supstem==='undefined'||supstem==''){
      var ppses = pps.join(',')
      try{
      supstem = ppses.match(/[a-z]*(issim|illim|errim)[a-z]*/)[0].substr(0,ppses.match(/[a-z]*(issim|illim|errim)[a-z]*/)[0].length-2)
      }
      catch(err){}
    }
        supendings = ['us','a','um','e','a','um','um','am','um','i','ae','i','o','ae','o','o','a','o','i','ae','a','i','ae','a','os','as','a','orum','arum','orum','is','is','is','is','is','is']
  
  supmsn = supstem + supendings[0] 
  supfsn = supstem + supendings[1]
  supnsn = supstem + supendings[2]
  supmsv = supstem + supendings[3] 
  supfsv = supstem + supendings[4]
  supnsv = supstem + supendings[5]
  supmsa = supstem + supendings[6] 
  supfsa = supstem + supendings[7]
  supnsa = supstem + supendings[8]
  supmsg = supstem + supendings[9] 
  supfsg = supstem + supendings[10]
  supnsg = supstem + supendings[11]
  supmsd = supstem + supendings[12] 
  supfsd = supstem + supendings[13]
  supnsd = supstem + supendings[14]
  supmsab = supstem + supendings[15] 
  supfsab = supstem + supendings[16]
  supnsab = supstem + supendings[17]
  supmpn = supstem + supendings[18] 
  supfpn = supstem + supendings[19]
  supnpn = supstem + supendings[20]
  supmpv = supstem + supendings[21] 
  supfpv = supstem + supendings[22]
  supnpv = supstem + supendings[23]
  supmpa = supstem + supendings[24] 
  supfpa = supstem + supendings[25]
  supnpa = supstem + supendings[26]
  supmpg = supstem + supendings[27] 
  supfpg = supstem + supendings[28]
  supnpg = supstem + supendings[29]
  supmpd = supstem + supendings[30] 
  supfpd = supstem + supendings[31]
  supnpd = supstem + supendings[32]
  supmpab = supstem + supendings[33] 
  supfpab = supstem + supendings[34]
  supnpab = supstem + supendings[35]
  }

  if(supstem===undefined||supstem==''){document.getElementById('tablecontainervisible').getElementsByClassName('suptable')[0].parentElement.parentElement.remove()}

}  else {
  document.getElementById('tablecontainervisible').getElementsByClassName('suptable')[0].parentElement.parentElement.remove()
}

  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*amsn</g,'>' + amsn + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*afsn</g,'>' + afsn + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*ansn</g,'>' + ansn + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*amsv</g,'>' + amsv + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*afsv</g,'>' + afsv + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*ansv</g,'>' + ansv + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*amsa</g,'>' + amsa + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*afsa</g,'>' + afsa + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*ansa</g,'>' + ansa + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*amsg</g,'>' + amsg + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*afsg</g,'>' + afsg + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*ansg</g,'>' + ansg + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*amsd</g,'>' + amsd + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*afsd</g,'>' + afsd + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*ansd</g,'>' + ansd + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*amsab</g,'>' + amsab + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*afsab</g,'>' + afsab + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*ansab</g,'>' + ansab + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*ampn</g,'>' + ampn + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*afpn</g,'>' + afpn + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*anpn</g,'>' + anpn + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*ampv</g,'>' + ampv + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*afpv</g,'>' + afpv + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*anpv</g,'>' + anpv + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*ampa</g,'>' + ampa + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*afpa</g,'>' + afpa + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*anpa</g,'>' + anpa + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*ampg</g,'>' + ampg + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*afpg</g,'>' + afpg + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*anpg</g,'>' + anpg + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*ampd</g,'>' + ampd + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*afpd</g,'>' + afpd + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*anpd</g,'>' + anpd + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*ampab</g,'>' + ampab + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*afpab</g,'>' + afpab + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*anpab</g,'>' + anpab + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compmsn</g,'>' + compmsn + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compfsn</g,'>' + compfsn + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compnsn</g,'>' + compnsn + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compmsv</g,'>' + compmsv + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compfsv</g,'>' + compfsv + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compnsv</g,'>' + compnsv + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compmsa</g,'>' + compmsa + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compfsa</g,'>' + compfsa + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compnsa</g,'>' + compnsa + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compmsg</g,'>' + compmsg + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compfsg</g,'>' + compfsg + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compnsg</g,'>' + compnsg + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compmsd</g,'>' + compmsd + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compfsd</g,'>' + compfsd + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compnsd</g,'>' + compnsd + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compmsab</g,'>' + compmsab + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compfsab</g,'>' + compfsab + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compnsab</g,'>' + compnsab + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compmpn</g,'>' + compmpn + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compfpn</g,'>' + compfpn + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compnpn</g,'>' + compnpn + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compmpv</g,'>' + compmpv + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compfpv</g,'>' + compfpv + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compnpv</g,'>' + compnpv + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compmpa</g,'>' + compmpa + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compfpa</g,'>' + compfpa + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compnpa</g,'>' + compnpa + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compmpg</g,'>' + compmpg + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compfpg</g,'>' + compfpg + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compnpg</g,'>' + compnpg + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compmpd</g,'>' + compmpd + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compfpd</g,'>' + compfpd + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compnpd</g,'>' + compnpd + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compmpab</g,'>' + compmpab + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compfpab</g,'>' + compfpab + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*compnpab</g,'>' + compnpab + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supmsn</g,'>' + supmsn + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supfsn</g,'>' + supfsn + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supnsn</g,'>' + supnsn + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supmsv</g,'>' + supmsv + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supfsv</g,'>' + supfsv + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supnsv</g,'>' + supnsv + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supmsa</g,'>' + supmsa + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supfsa</g,'>' + supfsa + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supnsa</g,'>' + supnsa + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supmsg</g,'>' + supmsg + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supfsg</g,'>' + supfsg + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supnsg</g,'>' + supnsg + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supmsd</g,'>' + supmsd + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supfsd</g,'>' + supfsd + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supnsd</g,'>' + supnsd + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supmsab</g,'>' + supmsab + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supfsab</g,'>' + supfsab + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supnsab</g,'>' + supnsab + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supmpn</g,'>' + supmpn + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supfpn</g,'>' + supfpn + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supnpn</g,'>' + supnpn + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supmpv</g,'>' + supmpv + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supfpv</g,'>' + supfpv + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supnpv</g,'>' + supnpv + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supmpa</g,'>' + supmpa + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supfpa</g,'>' + supfpa + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supnpa</g,'>' + supnpa + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supmpg</g,'>' + supmpg + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supfpg</g,'>' + supfpg + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supnpg</g,'>' + supnpg + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supmpd</g,'>' + supmpd + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supfpd</g,'>' + supfpd + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supnpd</g,'>' + supnpd + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supmpab</g,'>' + supmpab + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supfpab</g,'>' + supfpab + '<')
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*supnpab</g,'>' + supnpab + '<')
  
  document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').children[2].outerHTML 

  document.getElementById('tablecontainervisible').children[0].style.width = document.getElementById('tablecontainervisible').children[0].children[0].style.width
}

function pron(pps){
  
  document.getElementById('tabletitle').innerText = ''
  if(pps.length<3 && pps[0] != 'eodem' && pps[0] != 'qu.a'  ){
    var pronoun = pps[0].replace(/\./g,'')
    var ppronstr
    var pprons
    if(pronoun=='ego'||pronoun=='me'||pronoun=='mei'||pronoun=='mihi'){
      pprons = ['ego','me','mei','mihi','me']
      ppronstr = ['I','me','of me','to/for me','by/with me']
    }
    if(pronoun=='tu'||pronoun=='te'||pronoun=='tui'||pronoun=='tibi'){
      pprons = ['tu','te','tui','tibi','te']
      ppronstr = ['you','you','of you','to/for you','by/with you']
    }
    if(pronoun=='se'||pronoun=='sui'||pronoun=='sibi'){
      pprons = ['N/A','se','sui','sibi','se']
      ppronstr = ['','him-/her-/itself/themselves','of himself etc.','to/for himself etc','by/with himself etc.']
    }
    if(pronoun=='nos'||pronoun=='nostrum'||pronoun=='nostri'||pronoun=='nobis'){
      pprons = ['nos','nos','nostrum/-i','nobis','nobis']
      ppronstr = ['we','us','of us','to/for us','by/with us']
    }
    if(pronoun=='vos'||pronoun=='vestrum'||pronoun=='vestri'||pronoun=='vobis'){
      pprons = ['vos','vos','vestrum/-i','vobis','vobis']
      ppronstr = ['you','you','of you','to/for you','by/with you']
  
    }

    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*prn</g,'>' + pprons[0] + '<')   
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pra</g,'>' + pprons[1] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*prg</g,'>' + pprons[2] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*prd</g,'>' + pprons[3] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*prab</g,'>' + pprons[4] + '<')
    
  
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*prntr</g,'>' + ppronstr[0] + '<')   
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pratr</g,'>' + ppronstr[1] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*prgtr</g,'>' + ppronstr[2] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*prdtr</g,'>' + ppronstr[3] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*prabtr</g,'>' + ppronstr[4] + '<')
    
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').children[4].outerHTML
  } else {
    var pronoun = pps[0].replace(/\./g,'')
    var prons
    var pronstr
    if(pronoun == 'qui'||pronoun == 'qua'){
      prons = ['qui','quae','quod','quem','quam','quod','cuius','cuius','cuius','cui','cui','cui','quo','qua','quo','qui','quae','quae','quos','quas','quae','quorum','quarum','quorum','quibus','quibus','quibus','quibus','quibus','quibus']
      pronstr = ['who','whom','whose/of whom','to/for whom','by/with whom','who','whom','whose/of whom','to/for whom','by/with whom']
      
    }
    if(pronoun == 'quis'){
      prons = ['quis','qua','quid','quem','quam','quid','cuius','cuius','cuius','cui','cui','cui','quo','qua','quo','qui','qua/quae','qua/quae','quos','quas','quae','quorum','quarum','quorum','quibus','quibus','quibus','quibus','quibus','quibus']
      pronstr = ['who?','whom?','whose/of whom?','to/for whom?','by/with whom?','who?','whom?','whose/of whom?','to/for whom?','by/with whom?']
      
    }
    if(pronoun == 'quidam'){
      prons = ['quidam','quaedam','quoddam/quiddam','quendam','quandam','quoddam/quiddam','cuiusdam','cuiusdam','cuiusdam','cuidam','cuidam','cuidam','quodam','quadam','quodam','quidam','quaedam','quaedam','quosdam','quasdam','quaedam','quorundam','quarundam','quorundam','quibusdam','quibusdam','quibusdam','quibusdam','quibusdam','quibusdam']
      pronstr = ['','','','','','','','','','']
      document.getElementById('pronountitle').innerText = 'a certain'
      
    }
    if(pronoun == 'hic'){
      prons = ['hic','haec','hoc','hunc','hanc','hoc','huius','huius','huius','huic','huic','huic','hoc','hac','hoc','hi','hae','haec','hos','has','haec','horum','harum','horum','his','his','his','his','his','his']
      pronstr = ['this','this','of this','to/for this','by/with this','these','these','of these','to/for these','by/with these']
      
    }
    if(pronoun == 'ille'){
      prons = ['ille','illa','illud','illum','illam','illud','illius','illius','illius','illi','illi','illi','illo','illa','illo','illi','illae','illa','illos','illas','illa','illorum','illarum','illorum','illis','illis','illis','illis','illis','illis']
      pronstr = ['he, she, it, that','him, her, it that','of him; his etc.','to/for him etc','by/with him etc.','they, those','them, those','of them/those; their','to/for them/those','by/with them/those']
    }
    if(pronoun == 'ipse'){
      prons = ['ipse','ipsa','ipsud','ipsum','ipsam','ipsud','ipsius','ipsius','ipsius','ipsi','ipsi','ipsi','ipso','ipsa','ipso','ipsi','ipsae','ipsa','ipsos','ipsas','ipsa','ipsorum','ipsarum','ipsorum','ipsis','ipsis','ipsis','ipsis','ipsis','ipsis']
      pronstr = ['','','','','','','','','','']
      document.getElementById('pronountitle').innerText = 'himself, themselves, myself, yourself etc.'
    }
    if(pronoun == 'iste'){
      prons = ['iste','ista','istud','istum','istam','istud','istius','istius','istius','isti','isti','isti','isto','ista','isto','isti','istae','ista','istos','istas','ista','istorum','istarum','istorum','istis','istis','istis','istis','istis','istis']
      pronstr = ['','','','','','','','','','']
      document.getElementById('pronountitle').innerText = 'that'
    }
      if(pronoun == 'is'){
        prons = ['is','ea','id','eum','eam','id','eius','eius','eius','ei','ei','ei','eo','ea','eo','ei','eae','ea','eos','eas','ea','eorum','earum','eorum','eis','eis','eis','eis','eis','eis']
        pronstr = ['he, she, it, that','him, her, it that','of him; his etc.','to/for him etc','by/with him etc.','they, those','them, those','of them/those; their','to/for them/those','by/with them/those']
      }
      if(pronoun == 'idem'||pronoun == 'eodem'){
        prons = ['idem','eadem','idem','eundem','eandem','idem','eiusdem','eiusdem','eiusdem','eidem','eidem','eidem','eodem','eadem','eodem','eidem','eaedem','eadem','eosdem','easdem','eadem','eorundem','earundem','eorundem','eisdem/isdem','eisdem/isdem','eisdem/isdem','eisdem/isdem','eisdem/isdem','eisdem/isdem']
        pronstr = ['','','','','','','','','','']
        document.getElementById('pronountitle').innerText = 'the same'
      }
      if(pronoun == 'alius'){
        prons = ['alius','alia','aliud','alium','aliam','alium','alius','alius','alius','alii','alii','alii','alio','alia','alio','alii','aliae','alia','alios','alias','alia','aliorum','aliarum','aliorum','aliis','aliis','aliis','aliis','aliis','aliis']
        pronstr = ['','','','','','','','','','']
        document.getElementById('pronountitle').innerText = 'other'
      }
      if(pronoun == 'alius'){
        prons = ['alter','altera','alterum','alterum','alteram','alterum','alterius','alterius','alterius','alteri','alteri','alteri','altero','altera','altero','alteri','alterae','altera','alteros','alteras','altera','alterorum','alterarum','alterorum','alteris','alteris','alteris','alteris','alteris','alteris']
        pronstr = ['','','','','','','','','','']
        document.getElementById('pronountitle').innerText = 'the other'
      }

    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronmsn</g,'>' + prons[0] + '<')   
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronfsn</g,'>' + prons[1] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronnsn</g,'>' + prons[2] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronmsa</g,'>' + prons[3] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronfsa</g,'>' + prons[4] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronnsa</g,'>' + prons[5] + '<')   
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronmsg</g,'>' + prons[6] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronfsg</g,'>' + prons[7] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronnsg</g,'>' + prons[8] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronmsd</g,'>' + prons[9] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronfsd</g,'>' + prons[10] + '<')   
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronnsd</g,'>' + prons[11] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronmsab</g,'>' + prons[12] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronfsab</g,'>' + prons[13] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronnsab</g,'>' + prons[14] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronmpn</g,'>' + prons[15] + '<')   
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronfpn</g,'>' + prons[16] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronnpn</g,'>' + prons[17] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronmpa</g,'>' + prons[18] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronfpa</g,'>' + prons[19] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronnpa</g,'>' + prons[20] + '<')   
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronmpg</g,'>' + prons[21] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronfpg</g,'>' + prons[22] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronnpg</g,'>' + prons[23] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronmpd</g,'>' + prons[24] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronfpd</g,'>' + prons[25] + '<')   
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronnpd</g,'>' + prons[26] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronmpab</g,'>' + prons[27] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronfpab</g,'>' + prons[28] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronnpab</g,'>' + prons[29] + '<')

    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronnstr</g,'>' + pronstr[0] + '<')   
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronastr</g,'>' + pronstr[1] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*prongstr</g,'>' + pronstr[2] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*prondstr</g,'>' + pronstr[3] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronabstr</g,'>' + pronstr[4] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronnptr</g,'>' + pronstr[5] + '<')   
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronaptr</g,'>' + pronstr[6] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*prongptr</g,'>' + pronstr[7] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*prondptr</g,'>' + pronstr[8] + '<')
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').innerHTML.replace(/>\s*pronabptr</g,'>' + pronstr[9] + '<')

    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').children[5].outerHTML
  }
}
  
function initiatetable(ppsstring,engstring) {
  var pps = ppsstring.trim().replace(/,/g,'').split(' ')
  var meanings = engstring.trim().split(',')
  var pos = identifypos(pps)
  if((pps[0] == 'alius'||pps[0] == 'alter') && pos == "ADJ"){
    pos = "PRON"
  }
if(pos=="eodem"){
  pos = "PRON"  
}

  meaning(meanings)
  if(pos=='N'){noun(pps)}
  if(pos=='V'){
    verb(pps)
    var rescale = document.getElementById('tablecontainervisible').offsetWidth/document.getElementById('tablecontainervisible').children[0].children[0].scrollWidth
    document.getElementById('tablecontainervisible').style.height = document.getElementById('tablecontainervisible').children[0].scrollHeight * rescale
    document.getElementById('tablecontainervisible').children[0].style.transform = 'scale(' + rescale + ',' + rescale +  ')'
    document.getElementById('tablecontainervisible').innerHTML = document.getElementById('tablecontainervisible').children[0].outerHTML
    }
  if(pos=='ADJ'){adj(pps)}
  if(pos=='PRON'){pron(pps)}
}

function delcol(cols,rows){

var rowcount = document.getElementById('tablecontainervisible').children[0].children[0].getElementsByTagName('tr').length
if(rows === undefined){
  var rows = []
  for(dd = 0; dd<rowcount;dd++){
    rows.push(dd)
  }}
for(rr = rows.length-1;rr>=-1;rr--){
  var numberofrelevantrows = document.getElementById('tablecontainervisible').children[0].children[0].getElementsByTagName('tr')
  for(cc = cols.length-1;cc>=0;cc--){
    try{
    document.getElementById('tablecontainervisible').children[0].children[0].getElementsByTagName('tr')[rows[rr]].deleteCell(cols[cc])
    }
    catch(err){}
  }
}

}

function tablechanger(){
  var meanings = document.getElementById('tabletitle').getAttribute('meanings').replace(/##/g,'#')
  if(endsWith(meanings,'#')){
    meanings = meanings.substring(0,meanings.length - 1)
  }
  meanings = meanings.replace(/#[^£#]*[A-Z]{2}[^£#]/g,'')
  var premeanings = meanings
  meanings = meanings.replace(/#£([^£#]*)#/g,'#$1#£')
  if(premeanings == meanings){
    meanings = meanings.replace(/£/g,'')
    meanings = meanings.replace(/^[£#]?[£#]?/g,'')
    meanings = "#£" + meanings
  }
  var word = meanings.match(/#£([^£#]*)/g)[0].replace(/#/g,'').replace(/£/g,'')
  document.getElementById('tabletitle').innerText = word
  var meanings = document.getElementById('tabletitle').setAttribute('meanings',meanings)
  var wordparts = []
  var wordparts = [getverbparts(word,0),getverbparts(word,1),getverbparts(word,2),getverbparts(word,3),getverbparts(word,4),getverbparts(word,5),getverbparts(word,6),getverbparts(word,7),gradation(word,0),gradation(word,1),word,pluralize(word)]
  var tags = ['v0','v1','v2','v3','v4','v5','v6','v7','comp','sup','word','pl']

  for(aaa = 0; aaa<12; aaa++){
    var elcount = document.getElementById('tablecontainervisible').getElementsByClassName(tags[aaa]).length
    for(aaaa = 0; aaaa< elcount; aaaa++){
      try{
      document.getElementById('tablecontainervisible').getElementsByClassName(tags[aaa])[aaaa].innerText = wordparts[aaa]
      }
      catch(err){}
    }

  }
}

function tableprinter(){
  var test = document.getElementById('tablecontainervisible').innerHTML

  var mywindow = window.open('', 'Test', 'height=400,width=600');
  mywindow.document.write('<html><link rel="stylesheet" href="excelstyles.css"><style src="print.css">@media print{@page {size: landscape}}</style><head><title>Test</title>');
  mywindow.document.write('</head><body class="Landscape">');
  mywindow.document.write(test);
  mywindow.document.write('</body></html>');
  //mywindow.focus();
  //print(mywindow);
  mywindow.print();
  //mywindow.close();

  return true;

}

function offset(div) {
  el=document.getElementById(div)
  var rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollTop = scrollTop - document.getElementById('sortable').scrollTop
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

function selboxdel(element){
  remtimer =  setTimeout(function(){
  try{
    document.getElementById('selectorbox').outerHTML = ''
    optionselement = ''
  }
  catch(err){}
  },500)
}

function selector(e){
  if(optionselement==e.id && optionselement!=''){
    clearTimeout(remtimer)
   }
   else{
    timer =  setTimeout(function(){
  if(e.id!='selectorbox' && e.tagName.toLowerCase() != 'a'){
    try{
      document.getElementById('selectorbox').outerHTML = ''
      optionselement = ''
    } catch(err){

    }
    try{
    optionselement = e.id
e.innerHTML = e.innerHTML + '<div onmouseleave="selboxdel(event.srcElement)"  onmouseover="resettimers(event.srcElement)" style="text-align:left; position:absolute; box-shadow: rgb(159, 180, 242) 0px 1px 0px 0px inset; background: linear-gradient(rgb(120, 146, 194) 5%, rgb(71, 110, 158) 100%) rgb(120, 146, 194); border-radius: 3px; border: 1px solid rgb(0, 49, 196); display: inline-block; cursor: pointer; color: rgb(255, 255, 255); font-family: Arial; font-size: 13px; padding: 6px 24px; text-decoration: none; text-shadow: rgb(40, 57, 102) 0px 1px 0px;" id="selectorbox"></div>'
    var div = document.getElementById('selectorbox');
  var left  = offset(div.id).left-100  + "px";
  var top  = offset(div.id).top+20  + "px";

  div.style.left = left;
  div.style.top = top;
  document.getElementById("selectorbox").addEventListener("wheel", selectorboxscroll,false);
//////


var q = document.getElementById(e.getAttribute('parentid')).getAttribute(e.tagName.toLowerCase()) + '$'
q=q.replace(/\$\$/g,'$')
q=q.replace(/\$\$/g,'$')
var choices = q.split('$')
var currentchoice = 0
var changed = 0

for(var i=0;i<choices.length;i++){
  document.getElementById('selectorbox').innerHTML = document.getElementById('selectorbox').innerHTML + '<a onclick="chooser2(event.srcElement)" index=' + i +'>'+ choices[i].replace(/[,;]/g,'') +'</a><br>' 
}
document.getElementById('selectorbox').innerHTML = document.getElementById('selectorbox').innerHTML.replace(/%/g,'')
var box = document.getElementById('selectorbox').parentElement.getAttribute('parentid')
var part = document.getElementById('selectorbox').parentElement.tagName
var partlist = document.getElementById(box).getAttribute(part)
partlist = partlist.replace(/[^\$\%]/g,'')
var selectionindex = partlist.split('%')[0].length
document.getElementById('selectorbox').getElementsByTagName('a')[selectionindex].innerHTML = '&#x21D5;' + document.getElementById('selectorbox').getElementsByTagName('a')[selectionindex].innerHTML

q = document.getElementById('selectorbox').innerHTML.match(/\^[a-zA-Z0-9]*/g)

var replacement}
catch(err2){}
try{
for(var ii = 0 ;ii<q.length;ii++){
  var attr = q[ii].substr(1,q[ii].length-1)
  try{
replacement = document.getElementById('selectorbox').parentElement.parentElement.getAttribute(attr).match(/%[^$]*/)[0]}
catch(err3){replacement =  document.getElementById('selectorbox').parentElement.parentElement.getAttribute(attr)}

  try{
    document.getElementById('selectorbox').innerHTML = document.getElementById('selectorbox').innerHTML.replace('^' + attr, replacement) 
  } catch(err4){}
}
document.getElementById('selectorbox').innerHTML = document.getElementById('selectorbox').innerHTML.replace(/%/g,'')
if(document.getElementById('selectorbox').offsetWidth < 100){document.getElementById('selectorbox').style.width = 120}


}




catch(err){}
  }
}, 500)}
}

function chooser2(element){

  var attribute = element.parentElement.parentElement.tagName.toLowerCase()
  var ind = element.getAttribute('index')
  var grandnodename = element.parentElement.parentElement.parentElement.id
grandnodename = grandnodename.replace(/[^0-9]/g,'') 
var nodename = 'word' + grandnodename
  var attributestring = document.getElementById(nodename).getAttribute(attribute)
    attributestring = attributestring.replace(/%/g,'')
  var attributelist = attributestring.split('$')
  attributelist[ind] = '%' + attributelist[ind]
  attributestring = attributelist.join('$')
  document.getElementById(nodename).setAttribute(attribute,attributestring)
  build(nodename)
  try{
  document.getElementById('selectorbox').outerHTML = ''
  }
  catch(err){}
  optionselement = ''
}

function showoptions(element){
 if(optionselement==element.id){
  clearTimeout(remtimer)
 }
 else{
  timer =  setTimeout(function(){
    getww(element)
   if(element.tagName.toLowerCase() == 'a'){
 var launchedby = ''

 try{launchedby = document.getElementById('selectorbox').getAttribute('launchedby')}
catch(err){}

  if(element.parentElement.id.substr(0,4)=='word' && 'title' + element.parentElement.id != launchedby){
try{document.getElementById('selectorbox').outerHTML=''
optionselement = ''
}
catch(err){}
  optionselement = element.id
  element.id = 'title' + element.parentElement.id
  element.innerHTML = element.innerHTML + '<div  onmouseleave="selboxdel(this)" onmouseover="resettimers(event.srcElement)"  launchedby="'+ element.id +'" style="text-align:left; position:absolute; box-shadow: rgb(159, 180, 242) 0px 1px 0px 0px inset; background: linear-gradient(rgb(120, 146, 194) 5%, rgb(71, 110, 158) 100%) rgb(120, 146, 194); border-radius: 3px; border: 1px solid rgb(0, 49, 196); display: inline-block; cursor: pointer; color: rgb(255, 255, 255); font-family: Arial; font-size: 13px; padding: 6px 24px; text-decoration: none; text-shadow: rgb(40, 57, 102) 0px 1px 0px;" id="selectorbox"></div>'
  var div = document.getElementById('selectorbox')
var left  = offset(div.id).left-100  + "px";
var top  = offset(div.id).top+20  + "px";

div.style.left = left;
div.style.top = top;
document.getElementById('selectorbox').innerHTML = document.getElementById('menutable').innerHTML.replace(/((\<tbody>\<tr>\<td\>\<\/td\>\<td[^\>]*\>\<button[^\>]*>.*?\<\/button\>\<\/td\>\<\/tr\>\<\/tbody\>)+)(\<tbody\>\<tr\>\<td[^\>]*\>Entry(\<button.*?\<\/button\>)?<\/td\>\<td\>?\<wline[^\>]*>(.*?)\<\/wline\>\<\/td\>\<\/tr\>\<\/tbody\>)?(\<tbody\>\<tr\>\<td\>Definition\<\/td\>\<td\>\<i\>\<wline[^\>]*\>(.*?)\<\/wline\>\<\/i\>\<\/td\>\<\/tr\>\<\/tbody\>)/g,'<tr><td>$5$7</td><td><table>$1</table></td></tr>')
document.getElementById('selectorbox').innerHTML = document.getElementById('selectorbox').innerHTML.replace(/\sid=\"[a-zA-Z0-9]*\"/g,'')
document.getElementById('selectorbox').innerHTML = document.getElementById('selectorbox').innerHTML.replace(/\<inddef\s.*?\>(.*?)\<\/inddef\>/g,'<i>$1</i>')
document.getElementById('selectorbox').innerHTML = document.getElementById('selectorbox').innerHTML.replace(/\<editdef\s.*?\>(.*?)\<\/editdef\>/g,'')
document.getElementById('selectorbox').innerHTML = document.getElementById('selectorbox').innerHTML.replace(/onclick\=\"adder\(\)\"/g,'onclick="adder2()"')
document.getElementById('selectorbox').innerHTML = document.getElementById('selectorbox').innerHTML.replace(/\<textarea[^\>]*\>/g,'<textarea id="unknownword2">')

document.getElementById("selectorbox").addEventListener("wheel", selectorboxscroll,false);

if(document.getElementById('selectorbox').getElementsByTagName('button').length == 1&&document.getElementById('selectorbox').getElementsByTagName('textarea').length == 0){
  selectform(document.getElementById('selectorbox').getElementsByTagName('button')[0])
}
}
  }}, 5)}


}

function resettimers(element){
  if(element.id == 'selectorbox'){
    clearTimeout(remtimer)
    clearTimeout(timer)
  }
}

function selectorboxscroll(){
  var q= event.deltaY
  var box = document.getElementById('selectorbox').parentElement.getAttribute('parentid')
  var part = document.getElementById('selectorbox').parentElement.tagName
  var partlist = document.getElementById(box).getAttribute(part)
  var selectorboxcode = document.getElementById('selectorbox').outerHTML
  partlist = partlist + '$'
  partlist = partlist.replace(/\$+/g,'\$')


  if(q>0){
    partlist = partlist.replace(/(\%)([^\$]*?)(\$)/g,'$2\$\%')
    if(partlist.substr(partlist.length-1,1)=='%'){
      partlist = '%' + partlist.substr(0,partlist.length-1)
    }
  }

  if(q<0){
    if(partlist.substr(0,1)=='%'){
      partlist = partlist.substr(1,partlist.length-1)+'%'
    }
      partlist = partlist.replace(/([^\$]*)(\$)(\%)/g,'$3$1$2')
      }

  document.getElementById(box).setAttribute(part,partlist)
  build(box) 
 document.getElementById(box).getElementsByTagName(part)[0].innerHTML= document.getElementById(box).getElementsByTagName(part)[0].innerHTML + selectorboxcode
 document.getElementById("selectorbox").addEventListener("wheel", selectorboxscroll,false);
var nchoices = document.getElementById("selectorbox").getElementsByTagName('a').length
document.getElementById('selectorbox').innerHTML = document.getElementById('selectorbox').innerHTML.replace(/\u21D5/gu,'')
partlist = partlist.replace(/[^\$\%]/g,'')
selectionindex = partlist.split('%')[0].length
document.getElementById('selectorbox').getElementsByTagName('a')[selectionindex].innerHTML = '&#x21D5;' + document.getElementById('selectorbox').getElementsByTagName('a')[selectionindex].innerHTML


}

function showtip(tipnumber){

  var tip
  if (tipnumber == 1 && tip1shown == 0){
    document.getElementById('toppane').innerHTML = document.getElementById('toppane').innerHTML+ '<div id = "tip1" class = "tip" style = "background-color:orange; position: absolute; top: 8px; right: 16px; font-size: 18px; "></div>'
 
    tip = '&#x25BA;Click on a word to select a definition<br>&#x25BA;Drag a word to change the order<br>&#x25BA;Select a sentence from the pane to the left<br>&#x25BA;Enter your own text at the top left<br>'
    tip1shown = 1
  }
  if (tipnumber == 2 && tip2shown == 0){
    document.getElementById('toppane').innerHTML = document.getElementById('toppane').innerHTML+ '<div id = "tip2" class = "tip" style = "background-color:orange; position: absolute; top: 8px; right: 16px; font-size: 18px; "></div>'

    tip = '&#x25BA;Select an entry by clicking an orange button<br>'
    tip2shown = 1
  }
  if (tipnumber == 3 && tip3shown == 0){
    document.getElementById('toppane').innerHTML = document.getElementById('toppane').innerHTML+ '<div id = "tip3" class = "tip" style = "background-color:orange; position: absolute; top: 8px; right: 16px; font-size: 18px; "></div>'

    tip = '&#x25BA;The definition is shown in red and the translation in orange<br>&#x25BA;Click or hover over part of a translation or definition to see the different options<br>&#x25BA;You can use the mouse wheel to select a different option<br>&#x25BA;You can see tables for most words by clicking the buttons beside entries in the right-hand pane'
    tip3shown = 1
  }

  document.getElementById('tip' + tipnumber).innerHTML = document.getElementById('tip' + tipnumber).innerHTML + tip
  document.getElementById('tip' + tipnumber).innerHTML = document.getElementById('tip' + tipnumber).innerHTML.replace(/undefined/g,'')
  window.setTimeout(function(){
    document.getElementById('tip' + tipnumber).innerHTML = ''},20000);

}
