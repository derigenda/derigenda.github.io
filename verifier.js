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

function hexDecode(value){
    var j;
    var hexes = value.match(/.{1,4}/g) || [];
    var back = "";
    for(j = 0; j<hexes.length; j++) {
        back += String.fromCharCode(parseInt(hexes[j], 16));
    }

    return back;
}

function verify (){
var hexstring = getParameterByName('str')
hexstring = hexstring.replace(/u/gm,'7C')
hexstring = hexstring.replace(/v/gm,'31')
hexstring = hexstring.replace(/w/gm,'36')
hexstring = hexstring.replace(/x/gm,'32')
hexstring = hexstring.replace(/y/gm,'00')
hexstring = hexstring.replace(/z/gm,'000')

var check = hexstring.replace(/.*(.)$/gm,'$1')
var hexstring = hexstring.substring(0,hexstring.length-1)
var truecheck = luhnCheckDigit(hexstring) + ''

if (check == truecheck){
document.getElementById('verified').innerHTML = "YES"
document.getElementById('verified').style.backgroundColor = 'green'
} else {
    document.getElementById('verified').innerHTML = "NO"
    document.getElementById('verified').style.backgroundColor = 'pink'
    

}


var str= hexDecode(hexstring)
var properties = str.split('|')

if(properties[1]=='STAGE1'){properties[1]=('Stage 1')}
if(properties[1]=='STAGE2'){properties[1]=('Stage 2')}
if(properties[1]=='STAGE3'){properties[1]=('Stage 3')}
if(properties[1]=='STAGE4'){properties[1]=('Stage 4')}
if(properties[1]=='STAGE5'){properties[1]=('Stage 5')}
if(properties[1]=='STAGE6'){properties[1]=('Stage 6')}
if(properties[1]=='STAGE7'){properties[1]=('Stage 7')}
if(properties[1]=='STAGE8'){properties[1]=('Stage 8')}
if(properties[1]=='STAGE9'){properties[1]=('Stage 9')}
if(properties[1]=='STAGE10'){properties[1]=('Stage 10')}
if(properties[1]=='STAGE11'){properties[1]=('Stage 11')}
if(properties[1]=='STAGE12'){properties[1]=('Stage 12')}
if(properties[1]=='STAGE13'){properties[1]=('Stage 13')}
if(properties[1]=='STAGE14'){properties[1]=('Stage 14')}
if(properties[1]=='STAGE15'){properties[1]=('Stage 15')}
if(properties[1]=='STAGE16'){properties[1]=('Stage 16')}
if(properties[1]=='STAGE17'){properties[1]=('Stage 17')}
if(properties[1]=='STAGE18'){properties[1]=('Stage 18')}
if(properties[1]=='STAGE19'){properties[1]=('Stage 19')}
if(properties[1]=='STAGE20'){properties[1]=('Stage 20')}
if(properties[1]=='OGCSE'){properties[1]=('OCR GCSE')}
if(properties[1]=='EGCSE'){properties[1]=('Eduqas GCSE')}
if(properties[1]=='AS'){properties[1]=('AS Level')}
if(properties[1]=='OVID'){properties[1]=('Additional Ovid')}
if(properties[1]=='LIVY'){properties[1]=('Additional Livy')}
if(properties[1]=='CLC1'){properties[1]=('All CLC 1')}
if(properties[1]=='CLC2'){properties[1]=('All CLC 2')}
if(properties[1]=='T1'){properties[1]=('Chapter 1')}
if(properties[1]=='T2'){properties[1]=('Chapter 2')}
if(properties[1]=='T3'){properties[1]=('Chapter 3')}
if(properties[1]=='T4'){properties[1]=('Chapter 4')}
if(properties[1]=='T5'){properties[1]=('Chapter 5')}
if(properties[1]=='T6'){properties[1]=('Chapter 6')}
if(properties[1]=='T'){properties[1]=('All Book 1')}
if(properties[1]=='E'){properties[1]=('OCR GCSE Eng-Lat')}

document.getElementById('initials').innerHTML = properties[0]
document.getElementById('test').innerHTML = properties[1]
document.getElementById('range').innerHTML = properties[2]
document.getElementById('score').innerHTML = properties[3]
document.getElementById('total').innerHTML = properties[4]
document.getElementById('time').innerHTML = properties[5]
}

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
  