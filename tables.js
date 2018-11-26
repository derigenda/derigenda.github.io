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
function initiatetable() {
    var pps = getParameterByName('pps').split(',')
    var meanings = getParameterByName('eng')
    var pp1 = pps[0].trim()
    var pp2 = ""
    var pp3 = ""
    var pp4 = ""
    var pp5 = ""
    var pp6 = ""
    var pp7 = ""
    var pp8 = ""
    var pp9 = ""
    if(pps.length>0){
      var pp2=pps[1].trim()
    }
    if(pps.length>1){
      var pp3=pps[2].trim()
    }
    if(pps.length>2){
      var pp4=pps[3].trim()
    }
    if(pps.length>3){
      var pp5=pps[4].trim()
    }
    if(pps.length>4){
      var pp6=pps[5].trim()
    }
    if(pps.length>5){
      var pp3=pps[4].trim()
    }
    if(pps.length>6){
      var pp4=pps[5].trim()
    }
    if(pps.length>7){
      var pp9=pps[8].trim()
    }

  }


