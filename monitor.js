function tick(){
    var myVar = setInterval(myTimer, 20000)
    function myTimer(){
        if(window.navigator.onLine) { 
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


