// Create IE + others compatible event handler
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent,function(e) {
  console.log('parent received message!:  ',e.data);
  if(!isNaN(e.data)){
    console.log('set ifr heigh:  ',e.data);
    document.getElementById('sec-ifr').style.height = e.data + 'px';
    document.getElementById('ht-ifr').style.height = '100%';
  }
  if(typeof e.data.fbtrack != 'undefined'){  
	fbq('track', e.data.fbtrack.type, e.data.fbtrack.order);
	window.scrollTo({top: 0, behavior: 'smooth'});
  }
  if(typeof e.data.rurl != 'undefined'){ 
	location.href = e.data.rurl;
  }
},false);