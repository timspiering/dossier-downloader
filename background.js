// Send message to content.js when button is pressed.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(
    tab.id,
    {file: "content.js"}, function () {
    	chrome.tabs.sendMessage(tab.id, {msg: "start"})
    });
});