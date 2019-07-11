window.onload = function() {

	// var btn = document.getElementById('fwdbtn');
	var tree = document.getElementsByClassName('x-tree-node-ct')[0];

	function getIds() {
		if (tree) {
			var children = tree.children;

			if (children) {
				if (children.length > 0) {
					for (i = 0; i < children.length; i++) {
						if (children[i].lastChild.children.length > 0) {
							var child = children[i].lastChild.children;
							for (j = 0; j < child.length; j++) {
								var ids = child[j];
								console.log(ids.firstChild.getAttribute("ext:tree-node-id"));
							}
						}
					}
				}
			}			
		}
	}

	chrome.runtime.onMessage.addListener(function(msg) {
	    if (msg.msg == "start") {
	    	getIds();	        
	        var formulier = document.getElementById('controleFormulier');

	    	if (formulier) {
		        html2canvas(document.body, {
		            onrendered: function(canvas) {        
		                var imgData = canvas.toDataURL('image/png');          
		                var doc = new jsPDF("p", "mm", "a3");
		                doc.addImage(imgData, 'PNG', 1, 1);
		                doc.save('dossier.pdf');
		            }
		        });

		        // setTimeout(function(){ btn.click(); }, 3000);
	    	}
	    }
	});
}