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
var str= hexDecode(hexstring)
var properties = str.split('|')
document.getElementById('initials').innerHTML = properties[0]
document.getElementById('test').innerHTML = properties[1]
document.getElementById('range').innerHTML = properties[2]
document.getElementById('score').innerHTML = properties[3]
document.getElementById('total').innerHTML = properties[4]
document.getElementById('time').innerHTML = properties[5]
}