/* editor.js
- Implement the memopad functionality in a Chrome browser new tab
- Allow saving, reseting, retrieving saved text
- Update memopad size settings according to changes set in the options

*/

var storage = chrome.storage.local;

var optionsButton2 = document.querySelector('img.optionsPage2');

optionsButton2.addEventListener('click', openOptions);


function openOptions() {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } 
  else {
    window.open(chrome.runtime.getURL('options.html'))
  }
}

