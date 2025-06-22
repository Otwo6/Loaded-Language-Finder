chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "neutralizeSelectedText",
    title: "Neutralize Selected Text",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "neutralizeSelectedText") {
    // Save user selected text
    await chrome.storage.local.set({ selectedText: info.selectionText });

    // Open popup
    chrome.action.openPopup();
  }
});
