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
  