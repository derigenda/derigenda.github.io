function tick(){
    var myVar = setInterval(myTimer, 20000)
    function myTimer(){
        if(checkConnection()) { 
            var bodytext = document.getElementById('body').innerHTML
            var today = new Date(); 
            var date = today.getHours() + ':' + today.getMinutes() + ":" + today.getSeconds() + "  " + today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            bodytext = date + " CONNECTED<br>" + bodytext
            document.getElementById('body').innerHTML = bodytext
        }else{
            var bodytext = document.getElementById('body').innerHTML
            var today = new Date(); 
            var date = today.getHours() + ':' + today.getMinutes() + ":" + today.getSeconds() + "  " + today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            bodytext = date + " DISCONNECTED<br>" + bodytext
            document.getElementById('body').innerHTML = bodytext
        }
    }
  }


function checkConnection(){
try{
returnlist('a')
return true
}
catch (err) {
return false    
}

}

function returnlist(q){
    
   url = '/voc-stage1.htm'
  
    var xhr = new XMLHttpRequest();
    // third param = false  = synchronous request
    xhr.open('GET', url, false);
    xhr.send();
    var result = xhr.responseText;
    // do something with response (text manipulation, *whatever*)
    return result;
    
  
  }