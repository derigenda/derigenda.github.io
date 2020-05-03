function tick(){
    var myVar = setInterval(myTimer, 20000)
    function myTimer(){
        var currentdate = new Date(); 
        var mins
        mins = currentdate.getMinutes() +'' 
        if (mins.length==1){
        mins = '0' +currentdate.getMinutes()
        }
        secs = currentdate.getSeconds() +'' 
        if (secs.length==1){
        secs = '0' +currentdate.getSeconds()
        }
        var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " at "  
                + currentdate.getHours() + ":"  
                + mins + ':' + secs

        if(checkConnection()) { 
            var bodytext = document.getElementById('body').innerHTML
            bodytext = '<span style="background-color: green">' + datetime + " CONNECTED<br>" + bodytext +'</span>'
            document.getElementById('body').innerHTML = bodytext
        }else{
            var bodytext = document.getElementById('body').innerHTML
           bodytext = '<span style="background-color: red">' + datetime + " DISCONNECTED<br>" + bodytext +'</span>'
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
    
   url = '/voc-stage1.htm?' + Math.random() + '" '
  
    var xhr = new XMLHttpRequest();
    // third param = false  = synchronous request
    xhr.open('GET', url, false);
    xhr.send();
    var result = xhr.responseText;
    // do something with response (text manipulation, *whatever*)
    return result;
    
  
  }