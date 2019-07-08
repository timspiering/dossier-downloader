window.onload = function() {
	chrome.runtime.onMessage.addListener(function(msg) {
	    if (msg.msg == "start") {
	    	var data = [];
			var tables = document.getElementsByTagName('table');

	    	for (i = 1; i <= 4; i++) {
	    		data.push(tables[i].innerHTML);
	    	}

		    var doc = new jsPDF();

		    doc.fromHTML(
		    	"<table>" + data[2] + "</table>",
		    	1,
		    	1,
		    	{
		    		'width': 180
		    	}
			);

			doc.save('doc.pdf');
	    }
	});
}