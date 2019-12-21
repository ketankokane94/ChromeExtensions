// event when the extension logo is Clicked
function click(e){
    chrome.tabs.query({currentWindow:true,active:true},function(tabs){
        var specTab = tabs[0];
        chrome.tabs.executeScript(specTab.id,{file:"/content.js"});
    });
}

// Listen for click events
chrome.browserAction.onClicked.addListener(click);
