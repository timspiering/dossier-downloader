window.onload = function() {
	chrome.runtime.onMessage.addListener(function(msg) {
	    if (msg.msg == "start") {
	        html2canvas(document.body, {
	            onrendered: function(canvas) {        
	                var imgData = canvas.toDataURL('image/png');          
	                var doc = new jsPDF("p", "mm", "a2");
	                doc.addImage(imgData, 'PNG', 1, 1);
	                doc.save('sample-file.pdf');
	            }
	        });
	    }
	});
}