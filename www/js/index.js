var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        new FastClick(document.body);
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {}
};

app.initialize();

function ups(){ 
    alert("Ups!, no hay menú :("); 
}

function openOptions(){
    document.getElementById("containerShare").className = "centerContent transition";
}

function closeOptions(){
    document.getElementById("containerShare").className = "bottomContent transition";
}

function share(expr){ 
    switch (expr) {
      case "Twitter":
        window.plugins.socialsharing.shareViaTwitter('Message and link via Twitter', null /* img */, 'http://www.phonegapspain.com');
            closeOptions();
        break;
      case "Facebook":
        window.plugins.socialsharing.shareViaFacebook('Message via Facebook', null /* img */, null /* url */, function() {console.log('share ok')}, function(errormsg){console.log(errormsg)});
            closeOptions();
        break;
      case "WhatsApp":
            window.plugins.socialsharing.shareViaWhatsApp('Message via WhatsApp', null /* img */, null /* url */, function() {console.log('share ok')}, function(errormsg){console.log(errormsg)});
            closeOptions();
        break;
      default:
        console.log("");
    }
}