const defaultFilters = [
    "*://*.facebook.com/*",
 "*://*.youtube.com/*",
]
chrome.webRequest.onBeforeRequest.addListener(
    function(details){ return {cancel:true}},
    { urls:defaultFilters},
    ["blocking"]
);