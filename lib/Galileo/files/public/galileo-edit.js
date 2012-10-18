function sendViaWS (url, payload) {
  var serialized = JSON.stringify(payload);
  // ws = new WebSocket(url);
  var ws = $.gracefulWebSocket(url, {fallbackSendMethod: 'POST'});
  ws.onmessage = function (event) {
    var message = event.data;
    //console.log( message );
    humane.log( message );
  };
  ws.onopen = function () {
    //console.log( "Sending ==> " + serialized );
    ws.send( serialized );
  };
}

// open socket using standard syntax
// var ws = $.gracefulWebSocket("ws://127.0.0.1:8080/");

// Sending

// send message to server using standard syntax
// ws.send("message to server");

// Receiving

// listen for messages from server using standard syntax
// ws.onmessage = function (event) {
//    var messageFromServer = event.data;   
// };
