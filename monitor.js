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
    document.getElementsByTagName('f')[0].innerHTML +=
        '<img id="testImage" style="display: none;" ' +
        'src="Vector_toolbar_insert_table_button.png?' + Math.random() + '" ' +
        'onerror="testConnectionCallback(false);" ' +
        'onload="testConnectionCallback(true);">';

    testConnectionCallback = function(result){
        callBack(result);

        var element = document.getElementById('testImage');
        element.parentNode.removeChild(element);
    }    
}