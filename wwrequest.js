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


function getww (){

    var word2 = getParameterByName("word")

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
    document.getElementsByTagName("body")[0].innerText = text
        }}
  };
  
  xhr.send(null);

  

}