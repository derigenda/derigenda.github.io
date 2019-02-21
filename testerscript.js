// to add vocab: create menu in htm; give it a fresh id; update menuhide routines; update function chooser(); create sheet in Mr Data Converter taking care to give cells correct class names Meaning-cell etc, using the opening of other tables and preservingonclick="changecolour(this)"> for each tr; update 2 url related bits (search for ogcse)

function luhnCheckDigit(number) {
  var validChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVYWXZ_";
  number = number.toUpperCase().trim();
  var sum = 0;
  for (var i = 0; i < number.length; i++) {
    var ch = number.charAt(number.length - i - 1);
    if (validChars.indexOf(ch) < 0) {
      alert("Invalid character(s) found!");
      return false;
    }
    var digit = ch.charCodeAt(0) - 48;
    var weight;
    if (i % 2 == 0) {
      weight = (2 * digit) - parseInt(digit / 5) * 9;
    }
    else {
      weight = digit;
    }
    sum += weight;
  }
  sum = Math.abs(sum) + 10;
  var digit = (10 - (sum % 10)) % 10;
  return digit;
}


function chooser(){
button()
resizefunction()

var reqresponses
try{
   reqresponses = localStorage.getItem("reqresponses")
}
catch(err){
  reqresponses = parseInt(document.getElementById('remembered').value)
  localStorage.setItem("reqresponses",reqresponses)
}
if (reqresponses==''||reqresponses==null){
  reqresponses =parseInt(document.getElementById('remembered').value)
  localStorage.setItem("reqresponses",reqresponses)
}

document.getElementById('remembered').value = parseInt(reqresponses)
document.getElementById('rememberedno').innerHTML = parseInt(reqresponses)

c = getParameterByName('test')
f = getParameterByName('filter')

if(c==''){}
else if(c=='stage1'){listselect('Stage 1')}
else if(c=='stage2'){listselect('Stage 2')}
else if(c=='stage3'){listselect('Stage 3')}
else if(c=='stage4'){listselect('Stage 4')}
else if(c=='stage5'){listselect('Stage 5')}
else if(c=='stage6'){listselect('Stage 6')}
else if(c=='stage7'){listselect('Stage 7')}
else if(c=='stage8'){listselect('Stage 8')}
else if(c=='stage9'){listselect('Stage 9')}
else if(c=='stage10'){listselect('Stage 10')}
else if(c=='stage11'){listselect('Stage 11')}
else if(c=='stage12'){listselect('Stage 12')}
else if(c=='stage13'){listselect('Stage 13')}
else if(c=='stage14'){listselect('Stage 14')}
else if(c=='stage15'){listselect('Stage 15')}
else if(c=='stage16'){listselect('Stage 16')}
else if(c=='stage17'){listselect('Stage 17')}
else if(c=='stage18'){listselect('Stage 18')}
else if(c=='stage19'){listselect('Stage 19')}
else if(c=='stage20'){listselect('Stage 20')}
else if(c=='ogcse'){listselect('OCR GCSE')}
else if(c=='egcse'){listselect('Eduqas GCSE')}
else if(c=='ggcse'){listselect('GCSE Greek')}
else if(c=='eg'){listselect('GCSE Eng-Greek')}
else if(c=='asgrk'){listselect('AS Greek')}
else if(c=='as'){listselect('AS Level')}
else if(c=='ovid'){listselect('Additional Ovid')}
else if(c=='livy'){listselect('Additional Livy')}
else if(c=='clc1'){listselect('All CLC 1')}
else if(c=='clc2'){listselect('All CLC 2')}
else if(c=='t1'){listselect('Chapter 1')}
else if(c=='t2'){listselect('Chapter 2')}
else if(c=='t3'){listselect('Chapter 3')}
else if(c=='t4'){listselect('Chapter 4')}
else if(c=='t5'){listselect('Chapter 5')}
else if(c=='t6'){listselect('Chapter 6')}
else if(c=='t'){listselect('All Book 1')}
else if(c=='e'){listselect('OCR GCSE Eng-Lat')}
if(c!= '' && typeof(c) !== 'undefined' && c !== null){
  document.getElementById('criteria').value = f.replace(/\+/g,',')
  if(document.getElementById('criteria').value !=''){
  filter()}
  try {
    ChangeUrl('vocabtester' + document.getElementById('urlline').innerText.split('vocabtester')[1],document.getElementById('urlline').innerText.split('vocabtester')[0]+ 'vocabtester' + document.getElementById('urlline').innerText.split('vocabtester')[1])
  }
  catch(err) {
  }
}

    if(detectmob() == true){
      document.getElementById('modal-content').style.width="100%"
      document.getElementById('modal-content').style.height="100%"
      document.getElementById('modal-content').style.padding="0px"
      document.getElementById('modal-content').style.margin ="0px"
      document.getElementById('pleasechoose').setAttribute( 'style','font-size:32px')
      document.getElementById('menuname').setAttribute( 'style','font-size:40px')
      var qq = document.getElementsByTagName('a')
      for(b=0;b<qq.length;b++){
        qq[b].setAttribute( 'style','font-size:40px')
      }
    }
resizefunction()
}

function resizefunction()
 {
  var tableheight = window.innerHeight *.8 - 400
  if(detectmob() == true){
    tableheight = window.innerHeight - 640
  }
  if(document.getElementById("tablediv")){
    document.getElementById('tablediv').style.height = tableheight
}

if(detectmob() == false){
  document.getElementById('container').style.width = window.innerWidth * .8- 40}

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
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
function button() {
    // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closer() {
    // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function countselected(){
  var selected = 0
  for(i=0;i<document.getElementById('selectionform').getElementsByTagName('tr').length;i++){
if(document.getElementById('selectionform').getElementsByTagName('tr')[i].style.backgroundColor=='yellow'){
  selected=selected+1
}
document.getElementById('numberselected').innerText = selected
  }

}

function menuhide(){
  try {
    document.getElementById('CLC1').style.display = 'none'
  }
    catch(err){  }
    try {
      document.getElementById('CLC2').style.display = 'none'
    }
      catch(err){  } 
      try {
        document.getElementById('T1').style.display = 'none'
      }
        catch(err){  } 
}
function menuhide1(){

    try {
      document.getElementById('CLC2').style.display = 'none'
    }
    catch(err){  } 
    try{
      document.getElementById('T1').style.display = 'none'
    }
    catch(err){  } 
    try{
      document.getElementById('CLC1').style.display = 'block'
    }
      catch(err){  } 
      try{
        document.getElementById('G1').style.display = 'none'
      }
      catch(err){  } 
}
function menuhide2(){

  try {
    document.getElementById('CLC1').style.display = 'none'
  }
  catch(err){  } 
  try{
    document.getElementById('T1').style.display = 'none'
  }
  catch(err){  } 
  try{
    document.getElementById('CLC2').style.display = 'block'
  }
    catch(err){  } 
    try{
      document.getElementById('G1').style.display = 'none'
    }
    catch(err){  }
}

function menuhide3(){

  try {
    document.getElementById('CLC1').style.display = 'none'
  }
  catch(err){  } 
  try{
    document.getElementById('CLC2').style.display = 'none'
  }
  catch(err){  } 
  try{
    document.getElementById('T1').style.display = 'block'
  }
    catch(err){  } 
    try{
      document.getElementById('G1').style.display = 'none'
    }
    catch(err){  }
}

function submitOnEnter(event){
  if(event.which === 13){
    event.preventDefault();
    go()
  }
}
function menuhide4(){

  try {
    document.getElementById('CLC1').style.display = 'none'
  }
  catch(err){  } 
  try{
    document.getElementById('CLC2').style.display = 'none'
  }
  catch(err){  } 
  try{
    document.getElementById('T1').style.display = 'none'
  }
    catch(err){  } 
    try{
      document.getElementById('G1').style.display = 'block'
    }
    catch(err){  }
}

function listselect(list){
 
  try {
    document.getElementById('CLC1').style.display = 'none'
  }
    catch(err){  }
    try {
      document.getElementById('CLC2').style.display = 'none'}
      catch(err){  } 

var q = list.innerText
if(typeof(q) == 'undefined'){q=list}  

var list = returnlist(q)
document.getElementById('menuname').innerHTML = q

document.getElementById('latinword').setAttribute('list',q)

var tableheight = document.getElementById('modal-content').scrollHeight - 370

if(detectmob()==true){
  tableheight = tableheight - 210
document.getElementById("selectionform").innerHTML = '<h2 id="enterfilter">Choose words</h2><p><textarea id="criteria" name="criteria" style = "overflow:hidden; height:60px; width:60%; font-size:40px;" oninput="filter()"></textarea><p><div id = "tablediv" style="overflow-y: scroll; height:' + tableheight+ 'px;">'+ list +'</div><p><div syle="bottom:5px"><td><button id="go" onclick="go()" style="width:50%;font-size:40px">Go</button></td><td><button id="selectall" onclick="selectall()" style="width:50%;font-size:40px">Select all</button><br></td><td><button id="selectnone" onclick="selectnone()" style="width:50%;font-size:40px">Clear selection</button></td><td><button id="recenterr" onclick="recenterr()" style="width:50%;font-size:40px">Past errors</button></td><td><button id="printable" onclick="printable()" style="width:50%;font-size:40px">Print test</button><button id="showurl" onclick="showurl(this)" style="width:50%;font-size:40px">Email</button></td><br><div hidden id="urlline" style="font-size:30px"></div><div style = "position:absolute; top:0px;right:15px"><h3 style="width: *;text-align: right;">Number selected: <span id = "numberselected";>0</span></h3></div><div id="tips" style = "position:absolute; top:115px; right:50px; background-color: Moccasin; border: 2px solid orange; border-radius: 5px; width:250px;height:130px; padding:10px;"></div> </div>'
var rows = document.getElementsByTagName('tr')
document.getElementById('list').setAttribute("style",'line-height:45px; font-size:30px;')
document.getElementById('list').setAttribute('border','2')
document.getElementById('runningtotal').setAttribute('style','position:fixed; top:10px; right:10px; font-size:30px;')
}
else{
  
document.getElementById("selectionform").innerHTML = '<h2 id="enterfilter">Choose words</h2><p><textarea name="criteria" id="criteria" style = "overflow:hidden; height:30px; width:60%;" oninput="filter()"></textarea><p><div id = "tablediv" style="overflow-y: scroll; height:' + tableheight+ 'px;">'+ list +'</div><p><div syle="bottom:5px"><td><button id="go" onclick="go()">Go</button></td><td><button id="selectall" onclick="selectall()">Select all</button></td><td><button id="selectnone" onclick="selectnone()">Clear selection</button></td><td><button id="recenterr" onclick="recenterr()">Past errors</button></td><td><button id="printable" onclick="printable()">Print test</button><button id="showurl" onclick="showurl(this)">Email</button></td><div hidden id="urlline"></div><div style = "position:absolute; top:50px;right:50px"><h3 style="width: *;text-align: right;">Number selected: <span id = "numberselected";>0</span></h3></div><div id="tips" style = "position:absolute; top:105px; right:50px; background-color: Moccasin; border: 2px solid orange; border-radius: 5px; width:250px;height:140px; padding:5px;"></div> </div>'
}
document.getElementById("criteria").addEventListener("keypress", submitOnEnter);
var lw = document.getElementById('list').scrollWidth +90
var cw =document.getElementById('modal-content').scrollWidth -140
if(detectmob() == false){
  document.getElementById('container').style.width = window.innerWidth * .8- 40
} 

document.getElementById('urlline').innerText = window.location.href.split('?')[0] + '?test='
var titlename
titlename = document.getElementById('menuname').innerText
if(titlename.substring(0,5)== 'Chapt'){
  titlename = 'Vocab tester for Latin to GCSE ' + titlename
} else {
  if(titlename.substring(0,5)== 'Stage'){
    titlename = 'CLC ' + titlename
  }

  titlename = titlename.replace(/All CLC/gm,'Cambridge Latin Course ')
  titlename = titlename.replace(/All Book 1/gm,'Latin to GCSE: Book 1')


  titlename = "Latin vocab tester: " + titlename
  if (titlename == 'Latin vocab tester: GCSE Greek'){titlename = 'GCSE Greek vocab tester'}

}
document.getElementsByTagName('title')[0].innerHTML= titlename.replace(/ +/gm,' ')

var testname 
if (document.getElementById('menuname').innerText == 'OCR GCSE'){
  document.getElementById('tips').innerHTML = 'Try these filters:<br><i>1-10<br>a-c,f,h<br>part:adverb</i>'
  testname = 'ogcse'
}else if (document.getElementById('menuname').innerText == 'Eduqas GCSE'){
  document.getElementById('tips').innerHTML = 'The third column gives the CLC stage.<br>Try these filters:<br><i>1-10<br>a, d, e<br>clc:01</i>'
  testname = 'egcse'
}else if (document.getElementById('menuname').innerText == 'GCSE Eng-Greek'){
  document.getElementById('tips').innerHTML = 'Try these filters:<br><i>1-10<br>a-c, f, h'
  testname = 'eg'}
else if (document.getElementById('menuname').innerText == 'GCSE Greek'){
    document.getElementById('tips').innerHTML = 'Filter by number or letter only.'
    testname = 'ggcse'
}else if (document.getElementById('menuname').innerText == 'AS Greek'){
  document.getElementById('tips').innerHTML = 'Filter by number or letter only.'
  testname = 'asgrk'
}else if (document.getElementById('menuname').innerText == 'AS Level'){
  document.getElementById('tips').innerHTML = 'Try these filters:<br><i>1-10<br>a-c, f, h<br>class:military</i>'
  testname = 'as'
}else if (document.getElementById('menuname').innerText == 'Additional Ovid'){
  document.getElementById('tips').innerHTML = '<span style="font-size:14px; text-align:justify;">These are common words from Ovid that are not in the AS list. They are numbered from 9 (most common) to 0 (least common). Try these filters:<br><i>common:9<br>a-c</i></span>'
  testname = 'ovid'
}else if (document.getElementById('menuname').innerText == 'Additional Livy'){
  document.getElementById('tips').innerHTML = '<span style="font-size:14px; text-align:justify;">These are common words from Livy that are not in the AS list. They are numbered from 9 (most common) to 0 (least common). Try these filters:<br><i>common:9<br>a-c</i></span>'
  testname = 'livy'
}
else if (document.getElementById('menuname').innerText == 'Chapter 1'){
  document.getElementById('tips').innerHTML = 'Try these filters:<br><i>1-10<br>a-c, f, h<br>1-20</i>'
  testname = 't1'
}
else if (document.getElementById('menuname').innerText == 'Chapter 2'){
  document.getElementById('tips').innerHTML = 'Try these filters:<br><i>1-10<br>a-c, f, h<br>1-20</i>'
  testname = 't2'
}
else if (document.getElementById('menuname').innerText == 'Chapter 3'){
  document.getElementById('tips').innerHTML = 'Try these filters:<br><i>1-10<br>a-c, f, h<br>1-20</i>'
  testname = 't3'
}
else if (document.getElementById('menuname').innerText == 'Chapter 4'){
  document.getElementById('tips').innerHTML = 'Try these filters:<br><i>1-10<br>a-c, f, h<br>1-20</i>'
  testname = 't4'
}
else if (document.getElementById('menuname').innerText == 'Chapter 5'){
  document.getElementById('tips').innerHTML = 'Try these filters:<br><i>1-10<br>a-c, f, h<br>1-20</i>'
  testname = 't5'
}
else if (document.getElementById('menuname').innerText == 'Chapter 6'){
  document.getElementById('tips').innerHTML = 'Try these filters:<br><i>1-10<br>a-c, f, h<br>1-20</i>'
  testname = 't6'
}
else if (document.getElementById('menuname').innerText == 'All Book 1'){
  document.getElementById('tips').innerHTML = 'Try these filters:<br><i>1-10<br>a-c, f, h<br>1-20</i>'
  testname = 't'
}
else if (document.getElementById('menuname').innerText == 'All CLC 1'){
  document.getElementById('tips').innerHTML = 'Try these filters:<br><i>1-10<br>a-c, f, h<br>stage:01, stage:02</i>'
  testname = 'clc1'
    
}else if (document.getElementById('menuname').innerText == 'All CLC 2'){
  document.getElementById('tips').innerHTML = 'Try these filters:<br><i>1-10<br>a-c, f, h<br>stage:13, stage:14</i>'
  testname = 'clc2'
}else if (document.getElementById('menuname').innerText == 'OCR GCSE Eng-Lat'){
  document.getElementById('tips').innerHTML = 'Try these filters:<br><i>1-10<br>a-c, f, h</i>'
  testname = 'e'
}
 else {
  document.getElementById('tips').innerHTML = '<span style="font-size:20px; text-align:justify;">Try these criteria:<br><i>1-10</i></span>'
  testname = 'stage' + document.getElementById('menuname').innerText.split(' ')[1]
  }


  document.getElementById('urlline').innerText = document.getElementById('urlline').innerText + testname + '&filter='
for (i=0; i<document.getElementById("selectionform").getElementsByTagName('tr').length;i++){
document.getElementById("selectionform").getElementsByTagName('tr')[i].innerHTML = '<td style="width: 40";>' + i + '</td>' + document.getElementById("selectionform").getElementsByTagName('tr')[i].innerHTML 
}
document.getElementById('selectionform').getElementsByTagName('td')[0].innerText=''
if(document.getElementById('selectionform').getElementsByTagName('tr').length<31){
selectall()
document.getElementById('enterfilter').innerText='Choose words or click "Go"'  
}
criteria.focus()
//rebuild()
try {
  ChangeUrl('vocabtester' + document.getElementById('urlline').innerText.split('vocabtester')[1],document.getElementById('urlline').innerText.split('vocabtester')[0]+ 'vocabtester' + document.getElementById('urlline').innerText.split('vocabtester')[1])
}
catch(err) {
}


window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-134670977-2');
resizefunction()
}



function filter(){
  var isgreek
isgreek = false
  if(document.getElementsByClassName('Accentless-cell').length>0){
isgreek = true
}

if (isgreek == true){
  document.getElementById('criteria').value = greekconvert(document.getElementById('criteria').value)
}



 var newurl =  document.getElementById('urlline').innerText.split('filter=')[0] + 'filter='
 newurl = newurl + document.getElementById('criteria').value.replace(/ /g,'+')
 document.getElementById('urlline').innerText = newurl
  for(i=1; i<document.getElementById('selectionform').getElementsByTagName('tr').length;i++){
    document.getElementById('selectionform').getElementsByTagName('tr')[i].setAttribute('style','background-color:white')
  }


  var filters = document.getElementById('criteria').value.split(',')
for(j=0;j<filters.length;j++){
  var filter=filters[j]
filter = filter.trim()
if (filter.substr(filter.length-1,1)=="-"){
  filter=filter.substr(0,filter.length-1)
}
var leftmost = filter.substr(0,1)
var code = filter.charCodeAt(0);
var type = ""
    if ((code >= 913 && code <= 937) || // upper alpha (A-Z)
        (code >= 945 && code <= 969)) {
var type="greek"
}else if(document.getElementById('criteria').value.trim() == ''){
type = "blank"
} else    if ((code > 64 && code < 91) || // upper alpha (A-Z)
(code > 96 && code < 123)) {
var type="alpha"
}
else {var type = "num"}
if(filter.split(':').length>1){
  type='cat'
}

if(type=='alpha'){
  var lower = filter.split('-')[0].substr(0,1)
  if(filter.split('-').length>1){
    var higher = filter.split('-')[1].trim().substr(0,1)
  }  else {var higher=lower}
lower = lower.toLowerCase()
higher = higher.toLowerCase()
var lowercode = lower.charCodeAt(0)
var highercode = higher.charCodeAt(0)
if (lowercode<=highercode){
for(i=1;i<document.getElementById('selectionform').getElementsByTagName('tr').length;i++){
  var firstletterofLatin = document.getElementById('selectionform').getElementsByTagName('tr')[i].getElementsByTagName('td')[1].innerText.substr(0,1).toLowerCase().charCodeAt(0)
if(firstletterofLatin>=lowercode && firstletterofLatin<=highercode){
  document.getElementById('selectionform').getElementsByTagName('tr')[i].setAttribute('style','background-color:yellow')
}



}

}
}// end alp \qha filtering
if(type=='greek'){
  var lower = filter.split('-')[0].substr(0,1)
  if(filter.split('-').length>1){
    var higher = filter.split('-')[1].trim().substr(0,1)
  }  else {var higher=lower}
lower = lower.toLowerCase()
higher = higher.toLowerCase()
var lowercode = lower.charCodeAt(0)
var highercode = higher.charCodeAt(0)
if (lowercode<=highercode){
for(i=1;i<document.getElementById('selectionform').getElementsByTagName('tr').length;i++){
  var firstletterofLatin = document.getElementById('selectionform').getElementsByTagName('tr')[i].getElementsByTagName('td')[document.getElementById('selectionform').getElementsByTagName('tr')[i].getElementsByTagName('td').length - 1].innerText.substr(0,1).toLowerCase().charCodeAt(0)
if(firstletterofLatin>=lowercode && firstletterofLatin<=highercode){
  document.getElementById('selectionform').getElementsByTagName('tr')[i].setAttribute('style','background-color:yellow')
}



}

}
}// end grk \qha filtering


else if(type=='num'){
var lower = Number(filter.split('-')[0].trim())
if(lower==0){
  lower=1
}
var higher = Number(filter.split('-')[filter.split('-').length-1].trim())

if(lower<=higher){
for(i=lower; i<=higher;i++){
  document.getElementById('selectionform').getElementsByTagName('tr')[i].setAttribute('style','background-color:yellow')
}}

}//end of num filtering
else if(type=='cat'){
  var catcolname = filter.split(':')[0].toLowerCase().trim()
  var catcol = 0
  var catcrit = filter.split(':')[1].toLowerCase().trim()
  for(k=0;k<document.getElementById('selectionform').getElementsByTagName('th').length;k++){
    if(catcolname== document.getElementById('selectionform').getElementsByTagName('th')[k].innerText.toLowerCase().trim()){
      catcol = k+1
    }
  }
for(i=1;i<document.getElementById('selectionform').getElementsByTagName('tr').length;i++){
  if(document.getElementById('selectionform').getElementsByTagName('tr')[i].getElementsByTagName('td')[catcol].innerText.toLowerCase().trim().indexOf(catcrit)+1){
    document.getElementById('selectionform').getElementsByTagName('tr')[i].setAttribute('style','background-color:yellow')
  }

}

}

}
countselected()
try {
  ChangeUrl('vocabtester' + document.getElementById('urlline').innerText.split('vocabtester')[1],document.getElementById('urlline').innerText.split('vocabtester')[0]+ 'vocabtester' + document.getElementById('urlline').innerText.split('vocabtester')[1])
}
catch(err) {
}
}
function changecolour(vocabrow){
  if(vocabrow.style.backgroundColor!='yellow'){
    vocabrow.setAttribute('style',"background-color: yellow;")
  }else 
  {vocabrow.setAttribute('style','')}
countselected()
compilerange()
}

function selectall(){
for(i=1;i<document.getElementById('selectionform').getElementsByTagName('tr').length;i++){
  document.getElementById('selectionform').getElementsByTagName('tr')[i].setAttribute('style',"background-color: yellow;")
}
countselected()
compilerange()
}
function selectnone(){
for(i=1;i<document.getElementById('selectionform').getElementsByTagName('tr').length;i++){
  document.getElementById('selectionform').getElementsByTagName('tr')[i].setAttribute('style','')
}
countselected()
compilerange()
}

function returnlist(q){
  var testname
  if (q == 'OCR GCSE'){
    testname = 'ogcse'
   }else if (q == 'Eduqas GCSE'){
     testname = 'egcse'
    }else if (q == 'GCSE Greek'){
       testname = 'ggcse'
      }else if (q == 'GCSE Eng-Greek'){
         testname = 'eg'
   }else if (q == 'AS Greek'){
     testname = 'asgrk'
   }else if (q == 'AS Level'){
      testname = 'as'
   }else if (q == 'Additional Ovid'){
     testname = 'ovid'
   }else if (q == 'Additional Livy'){
     testname = 'livy'
   }
   else if (q == 'Chapter 1'){
     testname = 't1'
   }
   else if (q == 'Chapter 2'){
     testname = 't2'
   }
   else if (q == 'Chapter 3'){
      testname = 't3'
   }
   else if (q == 'Chapter 4'){
     testname = 't4'
   }
   else if (q == 'Chapter 5'){
     testname = 't5'
   }
   else if (q == 'Chapter 6'){
      testname = 't6'
   }
   else if (q == 'All Book 1'){
     testname = 't'
   }
   else if (q == 'All CLC 1'){
     testname = 'clc1'
   }else if (q == 'All CLC 2'){
     testname = 'clc2'
   }else if (q == 'OCR GCSE Eng-Lat'){
       testname = 'e'
   }
    else {
     testname = 'stage' + q.split(' ')[1]
     }

  var url
 url = 'https://derigenda.co.uk/voc-' + testname + '.htm'

  var xhr = new XMLHttpRequest();
  // third param = false  = synchronous request
  xhr.open('GET', url, false);
  xhr.send();
  var result = xhr.responseText;
  // do something with response (text manipulation, *whatever*)
  return result;
  

}
function  compiledictionary(){
  var list = document.getElementById('latinword').getAttribute('list')
  if(list=='OCR GCSE'){
    var lists=returnlist('OCR GCSE')}
  else  if(list=='Eduqas GCSE'){
    var lists=returnlist('Eduqas GCSE')}
    else  if(list=='GCSE Greek'){
      var lists=returnlist('GCSE Greek')}
      else  if(list=='AS Greek'){
        var lists=returnlist('AS Greek')}
  else  if(list=='OCR GCSE Eng-Lat'){
    var lists=returnlist('OCR GCSE Eng-Lat')}
    else  if(list=='GCSE Eng-Greek'){
      var lists=returnlist('GCSE Eng-Greek')}
  else  if(list=='AS Level'){
    var lists=returnlist('AS Level')}
    else  if(list=='Additional Ovid'){
    var lists=returnlist('Additional Ovid')}
  else  if(list=='Additional Livy'){
    var lists=returnlist('Additional Livy')}
  else  if(list=='Stage 1'){
    var lists=returnlist('All CLC 1')}
  else  if(list=='Stage 2'){
    var lists=returnlist('All CLC 1')}
  else  if(list=='Stage 3'){
    var lists=returnlist('All CLC 1')}
  else  if(list=='Stage 4'){
    var lists=returnlist('All CLC 1')}
  else  if(list=='Stage 5'){
    var lists=returnlist('All CLC 1')}
  else  if(list=='Stage 6'){
    var lists=returnlist('All CLC 1')}
  else  if(list=='Stage 7'){
    var lists=returnlist('All CLC 1')}
  else  if(list=='Stage 8'){
    var lists=returnlist('All CLC 1')}
  else  if(list=='Stage 9'){
    var lists=returnlist('All CLC 1')}
  else  if(list=='Stage 10'){
    var lists=returnlist('All CLC 1')}
  else  if(list=='Stage 11'){
    var lists=returnlist('All CLC 1')}
  else  if(list=='Stage 12'){
    var lists=returnlist('All CLC 1')}
  else  if(list=='Stage 13'){
    var lists=returnlist('All CLC 2')}
  else  if(list=='Stage 14'){
    var lists=returnlist('All CLC 2')}
  else  if(list=='Stage 15'){
    var lists=returnlist('All CLC 2')}
  else  if(list=='Stage 16'){
    var lists=returnlist('All CLC 2')}
  else  if(list=='Stage 17'){
    var lists=returnlist('All CLC 2')}
  else  if(list=='Stage 18'){
    var lists=returnlist('All CLC 2')}
  else  if(list=='Stage 19'){
    var lists=returnlist('All CLC 2')}
  else  if(list=='Stage 20'){
    var lists=returnlist('All CLC 2')}
  else  if(list=='All CLC 2'){
    var lists=returnlist('All CLC 2')}
  else  if(list=='Chapter 1'){
      var lists=returnlist('All Book 1')}
  else  if(list=='Chapter 2'){
      var lists=returnlist('All Book 1')}
  else  if(list=='Chapter 3'){
      var lists=returnlist('All Book 1')}
  else  if(list=='Chapter 4'){
      var lists=returnlist('All Book 1')}
  else  if(list=='Chapter 5'){
      var lists=returnlist('All Book 1')}
  else  if(list=='Chapter 6'){
      var lists=returnlist('All Book 1')}
  else  if(list=='All Book 1'){
      var lists=returnlist('All Book 1')}
  else{lists = returnlist('All CLC 1') }
  var htmlmatches = lists.match(/\"Meaning\-cell\">.*?</g)
htmlmatches[0]=''
var englishlist = htmlmatches.join(',')
englishlist = englishlist.replace(/\"Meaning\-cell\">/g,'')
englishlist = englishlist.replace(/</g,',')
englishlist = englishlist.replace(/, /g,',')
englishlist = englishlist.replace(/ ?\(.*?\)/g,'')
englishlist = englishlist.replace(/,,/g,',')
englishlist = englishlist.replace(/^,/g,'')
var englisharray = englishlist.split(',')
englisharray = englisharray.sort(function(a,b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if( a == b) return 0;
    if( a > b) return 1;
    return -1;
});
for (i=1;i<englisharray.length;i++){
  if (englisharray[i]==englisharray[i+1]){englisharray[i]=''}
}
englishlist=englisharray.join(',')
englishlist = englishlist.replace(/,{2,}/g,',')
englishlist = englishlist.replace(/^,/g,'')
englisharray=englishlist.split(',')
dictionary = englisharray
}

function go(){

  if (document.getElementById('numberselected').innerText!='0'){

  window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-134670977-2');
  closer()
if(detectmob() == false){
$('body').append('<div id="tryarrows" style="position:absolute; right:8%; top:5%; width: 15%; background:orange"><span style="font-size:15px">Type in answers. Use the arrow keys to select words from the options below.</span></div>');}

  activeel='focus'
  var vocabteststring = ''
  for(i=1;i<document.getElementById('selectionform').getElementsByTagName('tr').length;i++){
    var latin = document.getElementById('selectionform').getElementsByTagName('tr')[i].getElementsByTagName('td')[1].innerText
 
var english = document.getElementById('selectionform').getElementsByTagName('tr')[i].getElementsByTagName('td')[document.getElementById('selectionform').getElementsByTagName('tr')[i].getElementsByTagName('td').length-1].innerText
for (taggy = 0;taggy<document.getElementById('selectionform').getElementsByTagName('tr')[i].childElementCount; taggy++ ){
  if(document.getElementById('selectionform').getElementsByTagName('tr')[i].children[taggy].className == 'Meaning-cell' ){
    english = document.getElementById('selectionform').getElementsByTagName('tr')[i].children[taggy].innerText
  }
}


if(document.getElementById('selectionform').getElementsByTagName('tr')[i].style.backgroundColor=='yellow'){
vocabteststring = vocabteststring + Math.random() + '||' + latin + "||" + english + "$$"}
  }
  vocabteststring = vocabteststring.replace(/\$\$$/g,'')
vocabtest = vocabteststring.split('$$')
vocabtest = vocabtest.sort()
compiledictionary()
testlength=document.getElementById('numberselected').innerText
document.getElementById('outof').innerText = testlength
document.getElementById('middletext').innerText = ' question out of '
fingoes = 0
document.getElementById('total').innerText = '1'
document.getElementById('input').value = ''
document.getElementById('input').focus()
startgo()} else{
  alert("Please first select some words.");
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


function predict(){
  var isgrk = getParameterByName('test')
if (isgrk=='eg'){
  document.getElementById('input').value = greekconvert(document.getElementById('input').value)
}

  
  var word=input.value
  var addition = ''
  var extend = true
  while (extend == true){
    var additionbefore = addition.length
    var dictionarymatches = ''
    for(i=0;i<dictionary.length;i++){
      var dictword
      dictword = dictionary[i].substr(0,(word+addition).length).toLowerCase()
      
      if (isgrk == 'eg'){
        document.getElementById('input').value = deaccent(document.getElementById('input').value)
        dictword = deaccent(dictword)
      }
      if(dictword==(word+addition).toLowerCase()){
        dictionarymatches=dictionarymatches+dictionary[i]+'|'
      }}
      dictionarymatches=dictionarymatches.replace(/\|$/g,'')

      var dictionarymatchlist = dictionarymatches.split('|')
      if(dictionarymatchlist.length==0){extend=false}
      var uniquenextletter = true
      var firstnextletter = deaccent(dictionarymatchlist[0].substr((word+addition).length,1))
      for(j=1;j<dictionarymatchlist.length;j++){
        if(deaccent(dictionarymatchlist[j].substr((word+addition).length,1))!=firstnextletter){
          uniquenextletter=false
        }
      }
      if(uniquenextletter==true){
        addition=addition+firstnextletter
      } else {
        extend = false
      }
      if(additionbefore==addition.length){
        extend=false
      }
  }

  
  if (detectmob() == false){
if(dictionarymatchlist.length == 1){
  addition = addition.replace(/\u03c3$/gm,'\u03c2')
}

  document.getElementById('input').value = word + addition}
  //var range = document.getElementById('input').createTextRange()
  //range.collapse(true)
  //range.moveStart('character',word.length)
  //range.moveEnd('character', (word+addition).length)
  //range.select()
  document.getElementById('input').selectionStart = word.length
  document.getElementById('input').selectionEnd = (word+addition).length
  document.getElementById('l1').innerText=''
  document.getElementById('c1').innerText=''
  document.getElementById('r1').innerText=''
  document.getElementById('l2').innerText=''
  document.getElementById('c2').innerText=''
  document.getElementById('r2').innerText=''
  if(dictionarymatchlist.length>0){
    document.getElementById('c1').innerText = dictionarymatchlist[0]
   }
  if(dictionarymatchlist.length>1){
    document.getElementById('c2').innerText = dictionarymatchlist[1]
   }
  if(dictionarymatchlist.length>2){
    document.getElementById('l1').innerText = dictionarymatchlist[2]
   }
  if(dictionarymatchlist.length>3){
    document.getElementById('r1').innerText = dictionarymatchlist[3]
   }
  if(dictionarymatchlist.length>4){
    document.getElementById('l2').innerText = dictionarymatchlist[4]
   }
  if(dictionarymatchlist.length>5){
    document.getElementById('r2').innerText = dictionarymatchlist[5]
   }
   
  }

  window.addEventListener("keydown", function(e){
/*
keyCode: 8
keyIdentifier: "U+0008"
*/
try {
    document.getElementById("tryarrows").outerHTML="";
}
catch(err) {
}

    if(e.keyCode === 8 && document.activeElement.id == 'input') {
        e.preventDefault();
    if(document.getElementById('input').selectionStart>0){
      document.getElementById('input').selectionStart = document.getElementById('input').selectionStart-1
      var selstart = document.getElementById('input').selectionStart
      //document.getElementById('input').innerText = document.getElementById('input').innerText.substr(0,selstart)+document.getElementById('input').innerText.substr(document.getElementById('input').selectionEnd,document.getElementById('input').length)
      var startofstring = document.getElementById('input').value.substr(0,selstart)
      var endofstring = document.getElementById('input').value.substr(document.getElementById('input').selectionEnd,document.getElementById('input').value.length)
      document.getElementById('input').value = startofstring + endofstring
      
      document.getElementById('input').selectionStart = selstart
      document.getElementById('input').selectionEnd = selstart
      predict()
      
    }    
    } else if ( e.keyCode === 40 && activeel == 'focus'){
        e.preventDefault();
     selectcell(document.getElementById('c1'))
    } else if ( e.keyCode === 40 && activeel == 'l1'){
        e.preventDefault();
     selectcell(document.getElementById('l2'))
    } else if ( e.keyCode === 40 && activeel == 'c1'){
        e.preventDefault();
     selectcell(document.getElementById('c2'))}
      else if ( e.keyCode === 40 && activeel == 'r1'){
        e.preventDefault();
     selectcell(document.getElementById('r2'))}
      else if ( e.keyCode === 37 && activeel == 'c1'){
        e.preventDefault();
     selectcell(document.getElementById('l1'))}
      else if ( e.keyCode === 37 && activeel == 'r1'){
        e.preventDefault();
     selectcell(document.getElementById('c1'))}
      else if ( e.keyCode === 37 && activeel == 'c2'){
        e.preventDefault();
     selectcell(document.getElementById('l2'))}
      else if ( e.keyCode === 37 && activeel == 'r2'){
        e.preventDefault();
     selectcell(document.getElementById('c2'))}
      else if ( e.keyCode === 38 && activeel == 'l1'){
        e.preventDefault();
      removesel()
      document.getElementById('input').focus()}
      else if ( e.keyCode === 38 && activeel == 'c1'){
        e.preventDefault();
      removesel()
      document.getElementById('input').focus()}
      else if ( e.keyCode === 38 && activeel == 'r1'){
        e.preventDefault();
      removesel()
      document.getElementById('input').focus()}
      else if ( e.keyCode === 38 && activeel == 'l2'){
        e.preventDefault();
     selectcell(document.getElementById('l1'))}
      else if ( e.keyCode === 38 && activeel == 'c2'){
        e.preventDefault();
     selectcell(document.getElementById('c1'))}
      else if ( e.keyCode === 38 && activeel == 'r2'){
        e.preventDefault();
     selectcell(document.getElementById('r1'))}
      else if ( e.keyCode === 39 && activeel == 'l1'){
        e.preventDefault();
     selectcell(document.getElementById('c1'))}
      else if ( e.keyCode === 39 && activeel == 'l2'){
        e.preventDefault();
     selectcell(document.getElementById('c2'))}
      else if ( e.keyCode === 39 && activeel == 'c1'){
        e.preventDefault();
     selectcell(document.getElementById('r1'))}
      else if ( e.keyCode === 39 && activeel == 'c2'){
        e.preventDefault();
     selectcell(document.getElementById('r2'))}
     else if(e.keyCode === 13  && activeel == 'focus'){
        e.preventDefault();
       submitanswer(document.getElementById('input').value)
     }
     else if(e.keyCode === 13 && document.activeElement.id=='criteria'){
        e.preventDefault();
       go()
     }
     else if(e.keyCode === 13 && activeel != 'focus' && document.getElementById(activeel).innerText!=''){
       submitanswer(document.getElementById(activeel).innerText)
        e.preventDefault();
     }
});
function selectcell(cell){
  document.getElementById('l1').setAttribute('style',"cursor:pointer; width: 33%; font-size:45px; text-align:center")
  document.getElementById('l2').setAttribute('style',"cursor:pointer; width: 33%; font-size:45px; text-align:center")
  document.getElementById('c1').setAttribute('style',"cursor:pointer; width: 33%; font-size:45px; text-align:center")
  document.getElementById('c2').setAttribute('style',"cursor:pointer; width: 33%; font-size:45px; text-align:center")
  document.getElementById('r1').setAttribute('style',"cursor:pointer; width: 33%; font-size:45px; text-align:center")
  document.getElementById('r2').setAttribute('style',"cursor:pointer; width: 33%; font-size:45px; text-align:center")
  cell.focus()
  cell.style.color = "white"
  cell.style.backgroundColor = "blue"
  activeel = cell.id
}
function removesel(){
  document.getElementById('l1').setAttribute('style',"cursor:pointer; width: 33%; font-size:45px; text-align:center")
  document.getElementById('l2').setAttribute('style',"cursor:pointer; width: 33%; font-size:45px; text-align:center")
  document.getElementById('c1').setAttribute('style',"cursor:pointer; width: 33%; font-size:45px; text-align:center")
  document.getElementById('c2').setAttribute('style',"cursor:pointer; width: 33%; font-size:45px; text-align:center")
  document.getElementById('r1').setAttribute('style',"cursor:pointer; width: 33%; font-size:45px; text-align:center")
  document.getElementById('r2').setAttribute('style',"cursor:pointer; width: 33%; font-size:45px; text-align:center")
  activeel = 'focus'
}

function Show_Countdown(counter, latin, meaning) {

    var countDown_overlay = 'position:absolute;' +
        'top:50%;' +
        'left:50%;' +
        'background-color: #E6E6FA;' +
        'border: 2px solid blue;' +
        'border-radius: 5px;' +
        'z-index:1002;' +
        'overflow:auto;' +
        'width:400px;' +
        'text-align:center;' +
        'height:400px;' +
        'margin-left:-200px;' +
        'margin-top:-200px';
    $('body').append('<div id="overLay" style="' + countDown_overlay + '"><span style="font-size:70px"; id="time">3</span><p><h1>' + latin + '</h1><p><h1>' + meaning + '</h1></div>');

    var timer = setInterval(function () {
        document.getElementById("time").innerHTML = counter;
        counter = (counter - 1);

        if (counter < 0) 
        {            
            clearInterval(timer);
            document.getElementById("overLay").outerHTML='';
        }

    }, 1000);
}

function setCookie(cname, cvalue, exdays) {
      var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
} 

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
     var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
         }
         if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
         }
     }
    return "";
} 
function recenterr(){
  for(i=1;i<document.getElementById('selectionform').getElementsByTagName('tr').length;i++){
    var latinword = document.getElementById('selectionform').getElementsByTagName('tr')[i].getElementsByTagName('td')[1].innerText
    
    try{
    var cookievalue = localStorage.getItem(hexEncode(latinword))
    }
    catch(err){
      cookievalue = ''
    }
    if(cookievalue!='' && cookievalue!=null){
      document.getElementById('selectionform').getElementsByTagName('tr')[i].style.backgroundColor='yellow'
    }
  }
  countselected()
  compilerange()
}

function startgo(){
  document.getElementById('latinword').innerText=vocabtest[fingoes].split('||')[1]
}

function submitanswer(answer){
  var possibleanswers = vocabtest[fingoes].split('||')[2].split(',')
  var correctanswer = vocabtest[fingoes].split('||')[2]
  answer = deaccent(answer)
  answer = answer.match(/[ ]|[a-z]|[A-Z]|[α-ω]|[Α-Ω]]/g).join('').toLowerCase().replace(/ {2,}/g,' ').trim()
  var correct = false
  for(i=0;i<possibleanswers.length;i++){
    possibleanswers[i] =deaccent(possibleanswers[i])
    possibleanswers[i] = possibleanswers[i].replace(/ ?\(.*?\)/g,'').match(/[ ]|[a-z]|[A-Z]|[α-ω]|[Α-Ω]]/g).join('').toLowerCase().replace(/ {2,}/g,' ').trim()
    if(deaccent(answer) == possibleanswers[i]){ correct = true}
  }
vocabtest[fingoes] = vocabtest[fingoes].split('||')[1] + '|' + vocabtest[fingoes].split('||')[2] + '|' + correct + '|' + answer
if(correct==false){
  var latword = document.getElementById('latinword').innerText
  localStorage.setItem(hexEncode(document.getElementById('latinword').innerText),localStorage.getItem("reqresponses"))
  Show_Countdown(2, latword, correctanswer)
}
if(correct==true){
  var cookievalue
  try{
     cookievalue = localStorage.getItem(hexEncode(document.getElementById('latinword').innerText))
  }
  catch(err){
     cookievalue = ''
  }

if(cookievalue != ''){
if(cookievalue>localStorage.getItem("reqresponses")){
  cookievalue=localStorage.getItem("reqresponses")
}

cookievalue = cookievalue - 1
if(cookievalue>0){localStorage.setItem(hexEncode(document.getElementById('latinword').innerText),cookievalue)} else{
  localStorage.setItem(hexEncode(document.getElementById('latinword').innerText),'')
}
}
}
fingoes = fingoes+1
document.getElementById('total').innerText = fingoes + 1
document.getElementById('middletext').innerText = ' questions out of '
removesel()
document.getElementById('input').focus()
document.getElementById('input').value=''
document.getElementById('l1').innerText=''
document.getElementById('c1').innerText=''
document.getElementById('r1').innerText=''
document.getElementById('l2').innerText=''
document.getElementById('c2').innerText=''
document.getElementById('r2').innerText=''
if (fingoes>=testlength){
  finalscore()
} else {
startgo()
}
}

function finalscore(){
  document.getElementById('total').innerText = fingoes
  var numcorrect = 0
  var numtotal = 0
 var finalscore_overlay = 'position:absolute;' +
        'top:50%;' +
        'left:50%;' +
        'background-color: #E6E6FA;' +
        'border: 2px solid red;' +
        'border-radius: 5px;' +
        'z-index:1002;' +
        'overflow:auto;' +
        'width:60%;' +
        'text-align:center;' +
        'height:400px;' +
        'margin-left:-30%;' +
        'margin-top:-200px';

    $('body').append('<div id="overLay" style="' + finalscore_overlay + '"><span style="font-size:30px"; id="time">Results</span><p><h4><ol id="test" style="text-align:left"></ol></h4></div>');
    var d
    for(i=0;i<vocabtest.length;i++){
      var node = document.createElement("LI");                 // Create a <li> node
      var latinelement = document.createElement("B");                 // Create a <li> node
      var latinnode = document.createTextNode(vocabtest[i].split('|')[0] + ' ');         // Create a text node
      latinelement.appendChild(latinnode)
      var answerelement = document.createElement("U");                 // Create a <li> node
      d = vocabtest[i].split('|')[3] + ' '
      d=d.replace(/\u03c3 /gm,'\u03c2 ')
      var answernode = document.createTextNode(d);         // Create a text node
      answerelement.appendChild(answernode)
      var tickelement=document.createElement('font')
      if(vocabtest[i].split('|')[2]=='true'){
        numcorrect = numcorrect + 1
        numtotal = numtotal + 1
        tickelement.style.color = 'green'
        var ticknode = document.createTextNode('')
        tickelement.appendChild(ticknode)
        tickelement.innerHTML = '&#x2714;'
        tickelement.style.color='green'
      } else {
        numtotal = numtotal + 1
        tickelement.style.color = 'red'
        var ticknode = document.createTextNode('')
        tickelement.appendChild(ticknode)
        tickelement.innerHTML = '&#x2715; ' + vocabtest[i].split('|')[1]
        tickelement.style.color='red'
      }
      node.appendChild(latinelement);                              // Append the text to <li>
      node.appendChild(answerelement);                              // Append the text to <li>
      node.appendChild(tickelement);                              // Append the text to <li>

      document.getElementById("test").appendChild(node);     // Append <li> to <ul> with id="myList" 
    }
    var buttonnode = document.createElement('button')
    buttonnode.innerText = 'Restart'
    buttonnode.setAttribute('onclick','restart()')
    buttonnode.setAttribute('style', 'position: absolute; right: 5%; bottom: 50%;')
    document.getElementById('test').appendChild(buttonnode)

    var emnode = document.createElement('button')
    emnode.innerText = 'Email result'
    emnode.id = "theemailingbutton"
    emnode.setAttribute('onclick','emailResult()')
    emnode.setAttribute('style', 'position: absolute; right: 5%; bottom: 35%;')
    document.getElementById('test').appendChild(emnode)


//'<button onclick="sendemail()">Email result</button>'
    var scorenode = document.createElement('div')
    scorenode.id = 'score'
    scorenode.innerHTML = '<table style = "border-collapse: collapse; border-style: hidden; font-size:45px; padding: 15px;"><tr><td id="numcorrect" style = "color: red; border: 5px solid red; font-size:45px; text-align: center;">' + numcorrect + '</td></tr><tr><td id="numtotal" style = "color: red; border: 5px solid red;">' + numtotal + '</td></tr></table>'
    scorenode.setAttribute('style', 'position: absolute; right: 10; top: 10;')
    document.getElementById('test').appendChild(scorenode)
}
function restart(){
  document.getElementById('overLay').outerHTML = ''
  button()
}
function clicksubmit(element){
  if(element.innerText!=''){
  submitanswer(element.innerText)}
}

function hexEncode(value){
    var hex, i;

    var result = "";
    for (i=0; i<value.length; i++) {
        hex = value.charCodeAt(i).toString(16);
        result += ("000"+hex).slice(-4);
    }

    return result
}

function hexDecode(value){
    var j;
    var hexes = value.match(/.{1,4}/g) || [];
    var back = "";
    for(j = 0; j<hexes.length; j++) {
        back += String.fromCharCode(parseInt(hexes[j], 16));
    }

    return back;
}

function compilerange(){
  var rangestring = '-'
  for(i=0;i<document.getElementById('selectionform').getElementsByTagName('tr').length;i++){
if(document.getElementById('selectionform').getElementsByTagName('tr')[i].style.backgroundColor=='yellow'){
  rangestring = rangestring + i + '-'
} else {
  rangestring =rangestring + '--'}
  }
rangestring = rangestring.replace(/^-*/g,'')
rangestring = rangestring.replace(/--+/g,',')
rangestring = rangestring.replace(/-[0-9]*(?=-[^$])/g,'')
rangestring = rangestring.replace(/,$/g,'')
rangestring = rangestring.replace(/-$/g,'')
document.getElementById('criteria').value = rangestring

var newurl =  document.getElementById('urlline').innerText.split('filter=')[0] + 'filter='
 newurl = newurl + document.getElementById('criteria').value.replace(/ /g,'+')
 document.getElementById('urlline').innerText = newurl
 try {
  ChangeUrl('vocabtester' + document.getElementById('urlline').innerText.split('vocabtester')[1],document.getElementById('urlline').innerText.split('vocabtester')[0]+ 'vocabtester' + document.getElementById('urlline').innerText.split('vocabtester')[1])
}
catch(err) {
}

}
function printable(){
  if (document.getElementById('criteria').value!=''){
  //create random sorted array of selected words
  var test = ''
  for(i=1;i<document.getElementById('selectionform').getElementsByTagName('tr').length;i++){
    if(document.getElementById('selectionform').getElementsByTagName('tr')[i].style.backgroundColor=='yellow'){
      test = test + Math.random() + '||' + document.getElementById('selectionform').getElementsByTagName('tr')[i].getElementsByTagName('td')[1].innerText + '$'
    }

  }
//turn the list into an element string
  test = test.substr(0,test.length-1)
      var testarray = test.split('$')
      testarray = testarray.sort()
      for(j=0;j<testarray.length;j++){
         testarray[j] = '<li style="line-height:10px;"><table style= "font-size:10px; display:inline-table; border-bottom: solid 1px; width:100%"><tr ><td style = "width:100%">'+testarray[j].split('||')[1]+'</td></tr></table></li>'
      }
      test = '<div>Name:<div><table style="border-bottom: solid 1px; width:100%"><tr><td style = "width:100%"></td></tr></table></div><ol>'+testarray.join('')+'</ol>'
      test = '<table cellpadding="30px" style="width:100%"><tr><td style = "width:33%">' + test + '</td><td style = "width:33%">' + test + '</td><td style = "width:33%">' +test+'</td></table>'
//create a print window
        var mywindow = window.open('', 'Test', 'height=400,width=600');
        mywindow.document.write('<html><style src="print.css">@media print{@page {size: landscape}}</style><head><title>Test</title>');
        mywindow.document.write('</head><body class="Landscape">');
        mywindow.document.write(test);
        mywindow.document.write('</body></html>');
        //mywindow.focus();
        //print(mywindow);
        mywindow.print();
        //mywindow.close();

        return true;
    } else {
      alert("Please first select some words.");
    }
}

function ChangeUrl(page, url) {
  
          if (typeof (history.pushState) != "undefined") {
  
              var obj = { Page: page, Url: url };
  
              history.pushState(obj, obj.Page, obj.Url);
  
          } else {
  
              alert("Browser does not support HTML5.");
  
          }
  
      }
      function emailResult(){

        var email_overlay = 'position:absolute;' +
        'top:50%;' +
        'left:50%;' +
        'background-color: #FFFF00;' +
        'border: 2px solid red;' +
        'border-radius: 5px;' +
        'z-index:1002;' +
        'overflow:auto;' +
        'width:60%;' +
        'text-align:center;' +
        'height:400px;' +
        'margin-left:-30%;' +
        'margin-top:-200px';

    $('body').append('<div id="EoverLay" style="' + email_overlay + '"><span style="font-size:30px"; id="time">Email results</span><p><h4><ol id="embody" style="text-align:left"></ol></h4></div>');
document.getElementById('embody').innerHTML = document.getElementById('embody').innerHTML + '<br><textarea onInput="updateEmail()" placeholder="Enter your initials or a name." id="ininput"></textarea><br><span id="emailbody"><span id="initials">...</span> was tested on <span id="testname">...</span><span id="wasrange">, words </span><span id="testrange"></span>.<br>The score was <span id="thescore"></span>/<span id="totalqs"></span>.<br></span><button id="finalise" onclick="sendemail()">Finalise email</button><button id="cancellation" onclick="cancelemail()">Cancel</button><span id="message" style="color:red"></span><a id="verifylink"></a><div id="emailbuttons"></div>'

document.getElementById('ininput').style.width = '75%'

document.getElementById('thescore').innerHTML = document.getElementById('numcorrect').innerHTML

document.getElementById('totalqs').innerHTML = document.getElementById('numtotal').innerHTML

document.getElementById('testname').innerHTML =getParameterByName('test').toUpperCase()
document.getElementById('testname').setAttribute('test',getParameterByName('test'))
var testname = document.getElementById('testname').innerHTML.toLowerCase()

if(testname=='stage1'){testname='Stage 1'}
if(testname=='stage2'){testname='Stage 2'}
if(testname=='stage3'){testname='Stage 3'}
if(testname=='stage4'){testname='Stage 4'}
if(testname=='stage5'){testname='Stage 5'}
if(testname=='stage6'){testname='Stage 6'}
if(testname=='stage7'){testname='Stage 7'}
if(testname=='stage8'){testname='Stage 8'}
if(testname=='stage9'){testname='Stage 9'}
if(testname=='stage10'){testname='Stage 10'}
if(testname=='stage11'){testname='Stage 11'}
if(testname=='stage12'){testname='Stage 12'}
if(testname=='stage13'){testname='Stage 13'}
if(testname=='stage14'){testname='Stage 14'}
if(testname=='stage15'){testname='Stage 15'}
if(testname=='stage16'){testname='Stage 16'}
if(testname=='stage17'){testname='Stage 17'}
if(testname=='stage18'){testname='Stage 18'}
if(testname=='stage19'){testname='Stage 19'}
if(testname=='stage20'){testname='Stage 20'}
if(testname=='ogcse'){testname='OCR GCSE'}
if(testname=='egcse'){testname='Eduqas GCSE'}
if(testname=='ggcse'){testname='GCSE Greek'}
if(testname=='eg'){testname='GCSE Eng-Greek'}
if(testname=='asgrk'){testname='AS Greek'}
if(testname=='as'){testname='AS Level'}
if(testname=='ovid'){testname='Additional Ovid'}
if(testname=='livy'){testname='Additional Livy'}
if(testname=='clc1'){testname='All CLC 1'}
if(testname=='clc2'){testname='All CLC 2'}
if(testname=='t1'){testname='Chapter 1'}
if(testname=='t2'){testname='Chapter 2'}
if(testname=='t3'){testname='Chapter 3'}
if(testname=='t4'){testname='Chapter 4'}
if(testname=='t5'){testname='Chapter 5'}
if(testname=='t6'){testname='Chapter 6'}
if(testname=='t'){testname='All Book 1'}
if(testname=='e'){testname='OCR GCSE Eng-Lat'}

document.getElementById('testname').innerHTML = testname

var filter = getParameterByName('filter')
document.getElementById('testrange').innerHTML = filter
      }
      function updateEmail(){
        var p = document.getElementById('ininput').value.toUpperCase()
        p = p.replace(/[^A-Z]/gm,'')
          if (p.length >= 0){
        var q = document.getElementById('initials').innerText
        document.getElementById('initials').innerHTML = p}
      }

      function sendemail(){
if (document.getElementById('ininput').value.length>0){
document.getElementById('ininput').outerHTML = ''
document.getElementById('finalise').outerHTML = ''
document.getElementById('cancellation').outerHTML = ''
document.getElementById('message').outerHTML = ''
var currentdate = new Date(); 
var mins
mins = currentdate.getMinutes() +'' 
if (mins.length==1){
mins = '0' +currentdate.getMinutes()
}

var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " at "  
                + currentdate.getHours() + ":"  
                + mins 


var verifystring = document.getElementById('initials').innerHTML + '|' +  document.getElementById('testname').getAttribute('test').toUpperCase() + '|' + document.getElementById('testrange').innerHTML + '|' + document.getElementById('thescore').innerHTML + '|' + document.getElementById('totalqs').innerHTML + '|' + datetime

verifystring = hexEncode(verifystring)
var verifydec = luhnCheckDigit(verifystring)
verifystring = verifystring + verifydec
verifystring = verifystring.replace(/000/gm,'z')
verifystring = verifystring.replace(/00/gm,'y')
verifystring = verifystring.replace(/32/gm,'x')
verifystring = verifystring.replace(/36/gm,'w')
verifystring = verifystring.replace(/31/gm,'v')
verifystring = verifystring.replace(/7c/gm,'u')
verifystring = verifystring.replace(/35/gm,'t')
verifystring = verifystring.replace(/yuy/gm,'s')
verifystring = verifystring.replace(/fyxy/gm,'r')
verifystring = verifystring.replace(/ts/gm,'q')
verifystring = verifystring.replace(/39/gm,'p')
verifystring = verifystring.replace(/38/gm,'o')
verifystring = verifystring.replace(/33/gm,'n')
verifystring = verifystring.replace(/y2/gm,'m')
verifystring = verifystring.replace(/y3/gm,'l')
verifystring = verifystring.replace(/y4/gm,'k')
verifystring = verifystring.replace(/y5/gm,'j')
verifystring = verifystring.replace(/yvlzu/gm,'i')
verifystring = verifystring.replace(/vy/gm,'h')
verifystring = verifystring.replace(/hn/gm,'g')

var url = window.location.href
url = url.split('vocabtester.htm')[0]

document.getElementById('verifylink').setAttribute('href',url +'verifier.htm?str=' + verifystring)
document.getElementById('verifylink').innerHTML = document.getElementById('verifylink').getAttribute('href')


document.getElementById('emailbuttons').innerHTML = '<button id="gmail" onclick="gmail()">Gmail</button><button id="otheremail" onclick="otheremail()">Other Email</button><button onclick="cancelemail()">Cancel</button>'
if(detectmob() == true){document.getElementById('gmail').outerHTML=''
document.getElementById("otheremail").innerHTML = "Email"
}

} else {
document.getElementById('message').innerHTML = 'Please enter your initials or a name.'

}
      }


      function gmail(){
        var email = document.getElementById('emailbody').innerText + ' ' + document.getElementById('verifylink').getAttribute('href')
email = encodeURIComponent(email )

email = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&su=Vocab+test&body=' + email

var win = window.open(email, '_blank');
win.focus();
document.getElementById('EoverLay').outerHTML = ''
document.getElementById('theemailingbutton').outerHTML = ''
      }

      function otheremail(){
        var email = document.getElementById('emailbody').innerText + ' ' + document.getElementById('verifylink').getAttribute('href')
email = encodeURIComponent(email )

email = 'mailto:?&subject=Vocab%20test&body=' + email

var win = window.open(email, '_blank');
win.focus();
document.getElementById('EoverLay').outerHTML = ''
document.getElementById('theemailingbutton').outerHTML = ''
      }

      function cancelemail(){
        document.getElementById('EoverLay').outerHTML = ''
        document.getElementById('theemailingbutton').outerHTML = ''
      }

      function greekconvert(str){
        str = str.replace(/[aA]/g,'α')
        str = str.replace(/[bB]/g,'β')
        str = str.replace(/[cC]/g,'κ')
        str = str.replace(/[dD]/g,'δ')
        str = str.replace(/[eE]/g,'ε')
        str = str.replace(/[fF]/g,'φ')
        str = str.replace(/[gG]/g,'γ')
        str = str.replace(/[hH]/g,'η')
        str = str.replace(/[iI]/g,'ι')
        str = str.replace(/[jJ]/g,'ξ')
        str = str.replace(/[kK]/g,'κ')
        str = str.replace(/[lL]/g,'λ')
        str = str.replace(/[mM]/g,'μ')
        str = str.replace(/[nN]/g,'ν')
        str = str.replace(/[oO]/g,'ο')
        str = str.replace(/[pP]/g,'π')
        str = str.replace(/[qQ]/g,'θ')
        str = str.replace(/[rR]/g,'ρ')
        str = str.replace(/[sS]/g,'σ')
        str = str.replace(/[tT]/g,'τ')
        str = str.replace(/[uU]/g,'υ')
        str = str.replace(/[vV]/g,'ω')
        str = str.replace(/[wW]/g,'ω')
        str = str.replace(/[xX]/g,'χ')
        str = str.replace(/[yY]/g,'ψ')
        str = str.replace(/[zZ]/g,'ζ')
return str
      }

function rememberedchange(){

  localStorage.setItem("reqresponses",document.getElementById('remembered').value)
  document.getElementById('rememberedno').innerHTML = document.getElementById('remembered').value

}
function showurl(thebutton){

  var email_overlay = 'position:absolute;' +
        'top:50%;' +
        'left:50%;' +
        'background-color: #f4d742;' +
        'border: 2px solid red;' +
        'border-radius: 5px;' +
        'z-index:1002;' +
        'overflow:auto;' +
        'width:60%;' +
        'text-align:center;' +
        'height:280px;' +
        'margin-left:-30%;' +
        'margin-top:-200px';

    $('body').append('<div id="Eprompt" style="' + email_overlay + '"><span style="font-size:30px"; id="time">Email a link to this test</span><p><h4><ol id="emailbody" style="text-align:left"></ol></h4></div>');
document.getElementById('emailbody').innerHTML = document.getElementById('emailbody').innerHTML + '<table style="width:90%"><tr><td><button style="width:100%" id="gmailtest" onclick="gmailtest()">Gmail</button></tr></td><tr><td><button style="width:100%" id="emailtest" onclick="emailtest()">Other Email</button></tr></td><tr><td><span style="font-weight: bold;">Copy link:</span><textarea style="width:100%" onclick="copytext(this)" readonly="readonly" id="theurl"></textarea></td></tr><tr><td><button style="width:100%" id="cancelbutton" onclick="cancelthis()">Cancel</button></tr></td></table><tr>'
document.getElementById('theurl').value = window.location.href
var w
w = document.getElementById("Eprompt").getBoundingClientRect().width
if (w>500){
  document.getElementById("Eprompt").style.width="500px"
document.getElementById("Eprompt").style.left = (document.getElementById("myModal").getBoundingClientRect().width/2)-0 + "px"
}
}
function cancelthis(){
  document.getElementById("Eprompt").outerHTML = ""
}

function emailtest(){
  document.getElementById("Eprompt").outerHTML = ""
  var email = window.location.href
email = encodeURIComponent(email)

email = 'mailto:?&subject=Vocab%20tester&body=' + email

var win = window.open(email, '_blank');
win.focus();
}

function gmailtest(){
  document.getElementById("Eprompt").outerHTML = ""
  var email = window.location.href
  email = encodeURIComponent(email)
  email = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&su=Vocab+tester&body=' + email

var win = window.open(email, '_blank');
win.focus();

}

function copytext(e){
  e.focus();
  e.select();
  try{    navigator.clipboard.writeText(e.value).then(function (clipboardData) {});}
  catch(err){

  }
  try{    document.execCommand('copy')}
  catch(err2){

  }
var linktext = document.getElementById('theurl').value
  document.getElementById('theurl').value = "Link copied"
document.getElementById('theurl').style.color = "red"

var timer = setInterval(function () {
  document.getElementById('theurl').value = linktext
  document.getElementById('theurl').style.color = "black"
}, 500);

}

function deaccent(strng){
var characterarray
characterarray = [
  ['\u03B1','\u03B2','\u03B3','\u03B4','\u03B5','\u03B6','\u03B7','\u03B8','\u03B9','\u03BA','\u03BB','\u03BC','\u03BD','\u03BE','\u03BF','\u03C0','\u03C1','\u03C3','\u03C4','\u03C5','\u03C6','\u03C7','\u03C8','\u03C9'],
  ['\u0391','\u0392','\u0393','\u0394','\u0395','\u0396','\u0397','\u0398','\u0399','\u039A','\u039B','\u039C','\u039D','\u039E','\u039F','\u03A0','\u03A1','\u03A3','\u03A4','\u03A5','\u03A6','\u03A7','\u03A8','\u03A9'],
  ['\u0386','\u03D0','','','\u0388','','\u0389','\u03D1','\u038A','\u03D7','','','','','\u038C','\u03D6','\u03F1','\u03C2','','\u03AB','\u03D5','','','\u038F'],
  ['\u03AC','','','','\u03AD','','\u03AE','\u03F4','\u0390','\u03F0','','','','','\u03CC','','\u1FE4','\u03F2','','\u038E','','','','\u03CE'],
  ['\u1F00','','','','\u03F5','','\u1F20','','\u03AA','','','','','','\u1F40','','\u1FE5','','','\u03B0','','','','\u1F60'],
  ['\u1F01','','','','\u1F10','','\u1F21','','\u03AF','','','','','','\u1F41','','\u1FEC','','','\u03CB','','','','\u1F61'],
  ['\u1F02','','','','\u1F11','','\u1F22','','\u03CA','','','','','','\u1F42','','','','','\u03CD','','','','\u1F62'],
  ['\u1F03','','','','\u1F12','','\u1F23','','\u1F30','','','','','','\u1F43','','','','','\u03D2','','','','\u1F63'],
  ['\u1F04','','','','\u1F13','','\u1F24','','\u1F31','','','','','','\u1F44','','','','','\u03D3','','','','\u1F64'],
  ['\u1F05','','','','\u1F14','','\u1F25','','\u1F32','','','','','','\u1F45','','','','','\u03D4','','','','\u1F65'],
  ['\u1F06','','','','\u1F15','','\u1F26','','\u1F33','','','','','','\u1F48','','','','','\u1F50','','','','\u1F66'],
  ['\u1F07','','','','\u1F18','','\u1F27','','\u1F34','','','','','','\u1F49','','','','','\u1F51','','','','\u1F67'],
  ['\u1F08','','','','\u1F19','','\u1F28','','\u1F35','','','','','','\u1F4A','','','','','\u1F52','','','','\u1F68'],
  ['\u1F09','','','','\u1F1A','','\u1F29','','\u1F36','','','','','','\u1F4B','','','','','\u1F53','','','','\u1F69'],
  ['\u1F0A','','','','\u1F1B','','\u1F2A','','\u1F37','','','','','','\u1F4C','','','','','\u1F54','','','','\u1F6A'],
  ['\u1F0B','','','','\u1F1C','','\u1F2B','','\u1F38','','','','','','\u1F4D','','','','','\u1F55','','','','\u1F6B'],
  ['\u1F0C','','','','\u1F1D','','\u1F2C','','\u1F39','','','','','','\u1F78','','','','','\u1F56','','','','\u1F6C'],
  ['\u1F0D','','','','\u1F72','','\u1F2D','','\u1F3A','','','','','','\u1F79','','','','','\u1F57','','','','\u1F6D'],
  ['\u1F0E','','','','\u1F73','','\u1F2E','','\u1F3B','','','','','','\u1FF8','','','','','\u1F59','','','','\u1F6E'],
  ['\u1F0F','','','','\u1FC8','','\u1F2F','','\u1F3C','','','','','','\u1FF9','','','','','\u1F5B','','','','\u1F6F'],
  ['\u1F70','','','','\u1FC9','','\u1F74','','\u1F3D','','','','','','','','','','','\u1F5D','','','','\u1F7C'],
  ['\u1F71','','','','','','\u1F75','','\u1F3E','','','','','','','','','','','\u1F5F','','','','\u1F7D'],
  ['\u1F80','','','','','','\u1F90','','\u1F3F','','','','','','','','','','','\u1F7A','','','','\u1FA0'],
  ['\u1F81','','','','','','\u1F91','','\u1F76','','','','','','','','','','','\u1F7B','','','','\u1FA1'],
  ['\u1F82','','','','','','\u1F92','','\u1F77','','','','','','','','','','','\u1FE0','','','','\u1FA2'],
  ['\u1F83','','','','','','\u1F93','','\u1FD0','','','','','','','','','','','\u1FE1','','','','\u1FA3'],
  ['\u1F84','','','','','','\u1F94','','\u1FD1','','','','','','','','','','','\u1FE2','','','','\u1FA4'],
  ['\u1F85','','','','','','\u1F95','','\u1FD2','','','','','','','','','','','\u1FE3','','','','\u1FA5'],
  ['\u1F86','','','','','','\u1F96','','\u1FD3','','','','','','','','','','','\u1FE6','','','','\u1FA6'],
  ['\u1F87','','','','','','\u1F97','','\u1FD6','','','','','','','','','','','\u1FE7','','','','\u1FA7'],
  ['\u1F88','','','','','','\u1F98','','\u1FD7','','','','','','','','','','','\u1FE8','','','','\u1FA8'],
  ['\u1F89','','','','','','\u1F99','','\u1FD8','','','','','','','','','','','\u1FE9','','','','\u1FA9'],
  ['\u1F8A','','','','','','\u1F9A','','\u1FD9','','','','','','','','','','','\u1FEA','','','','\u1FAA'],
  ['\u1F8B','','','','','','\u1F9B','','\u1FDA','','','','','','','','','','','\u1FEB','','','','\u1FAB'],
  ['\u1F8C','','','','','','\u1F9C','','\u1FDB','','','','','','','','','','','','','','','\u1FAC'],
  ['\u1F8D','','','','','','\u1F9D','','','','','','','','','','','','','','','','','\u1FAD'],
  ['\u1F8E','','','','','','\u1F9E','','','','','','','','','','','','','','','','','\u1FAE'],
  ['\u1F8F','','','','','','\u1F9F','','','','','','','','','','','','','','','','','\u1FAF'],
  ['\u1FB0','','','','','','\u1FC2','','','','','','','','','','','','','','','','','\u1FF2'],
  ['\u1FB1','','','','','','\u1FC3','','','','','','','','','','','','','','','','','\u1FF3'],
  ['\u1FB2','','','','','','\u1FC4','','','','','','','','','','','','','','','','','\u1FF4'],
  ['\u1FB3','','','','','','\u1FC6','','','','','','','','','','','','','','','','','\u1FF6'],
  ['\u1FB4','','','','','','\u1FC7','','','','','','','','','','','','','','','','','\u1FF7'],
  ['\u1FB6','','','','','','\u1FCA','','','','','','','','','','','','','','','','','\u1FFA'],
  ['\u1FB7','','','','','','\u1FCB','','','','','','','','','','','','','','','','','\u1FFB'],
  ['\u1FB8','','','','','','\u1FCC','','','','','','','','','','','','','','','','','\u1FFC'],
  ['\u1FB9','','','','','','','','','','','','','','','','','','','','','','',''],
  ['\u1FBA','','','','','','','','','','','','','','','','','','','','','','',''],
  ['\u1FBB','','','','','','','','','','','','','','','','','','','','','','',''],
  ['\u1FBC','','','','','','','','','','','','','','','','','','','','','','','']
]
var norows = characterarray.length
var nocols = characterarray[0].length
for (var row = 1; row < norows; row++){


  for (var col = 0; col <nocols; col++){
      if(characterarray[row][col] == ''){

      } else {
        och = characterarray[row][col]
        rch = characterarray[0][col]
        var ochr = new RegExp(och,"gm")
        strng = strng.replace(ochr,rch)
      }

  }
}

return strng
}