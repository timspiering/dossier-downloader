window.onload = function() {
	chrome.runtime.onMessage.addListener(function(msg) {
		console.log(msg);

	    if (test.test == "test") {
	    	alert("Works");
	    }
	});
}