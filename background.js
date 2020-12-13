messenger.WindowListener.registerChromeUrl([
    ["content", "MonterailOverlay", "content/"]
]);

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/addressbook/addressbook.xhtml",
    "chrome://MonterailOverlay/content/scripts/loadAddressbook.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/addressbook/abContactsPanel.xhtml",
    "chrome://MonterailOverlay/content/scripts/loadAddressbook.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/messengercompose/messengercompose.xhtml",
    "chrome://MonterailOverlay/content/scripts/loadCompose.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/messenger.xhtml",
    "chrome://MonterailOverlay/content/scripts/loadMessenger.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/messageWindow.xhtml",
    "chrome://MonterailOverlay/content/scripts/loadMessenger.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/customizeToolbar.xhtml",
    "chrome://MonterailOverlay/content/scripts/loadMessenger.js");

messenger.WindowListener.registerWindow(
    "chrome://messenger/content/glodaFacetView.xhtml",
    "chrome://MonterailOverlay/content/scripts/loadSearch.js");

// Not working on TB 78.5 - Ubuntu 20
browser.messageDisplayScripts.register({
    css : [ { file: "/content/skin/multiMessage.css"} ],
    js: [],
})

messenger.WindowListener.startListening();
