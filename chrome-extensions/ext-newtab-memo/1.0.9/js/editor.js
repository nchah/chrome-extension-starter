/* editor.js
- Implement the memopad functionality in a Chrome browser new tab
- Allow saving, reseting, retrieving saved text
- Update memopad size settings according to changes set in the options

*/

var storage = chrome.storage.local;
var textarea = document.querySelector('textarea');
var resetTextButton = document.querySelector('img.resetText');
var saveTextButton = document.querySelector('img.saveText');
var optionsButton = document.querySelector('img.optionsPage');

loadChanges();
loadOptionChanges();
autosaveChanges();

optionsButton.addEventListener('click', openOptions);
saveTextButton.addEventListener('click', saveChanges);
resetTextButton.addEventListener('click', resetChanges);

// Experimental: autosave
function autosaveChanges() {
  storage.get('autosave', function(items) {
    if (items.autosave == 'yes') {
      // Set time interval for autosave
      var interval = window.setInterval(function() {
        var text = textarea.value;
        if (text) {
          storage.set({'txt': text});
        } 
      }, 1000);
    }
  })
}

// Keyboard shortcut: Ctrl+Shift+S to save text
chrome.commands.onCommand.addListener(function(save_changes) {
  var text = textarea.value;
  if (!text) {
    alert("No text to save.");
  }
  else if (text) {
    storage.set({'txt': text});
  }
});

function saveChanges() {
  var text = textarea.value;

  if (!text) {
    alert("No text to save.");
  }
  else if (text) {
    storage.set({'txt': text});
  }
}

function resetChanges() {
  storage.remove('txt');
  textarea.value = '';
}

function loadChanges() {
  storage.get('txt', function(items) {
    if (items.txt) {
      textarea.value = items.txt;
    }
  });
  // adjustViewSize();
}


function openOptions() {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } 
  else {
    window.open(chrome.runtime.getURL('options.html'))
  }
}

function loadOptionChanges() {
  storage.get('css', function(items) {
    if (items.css) {
      // Load new CSS settings
      document.getElementById("text-area").style = items.css;
      document.getElementsByTagName("BODY")[0].style = items.css;
    }
    adjustViewSize();
  });

  // ** Experimental: web font
  storage.get('webFont', function(items) {
    if (items.webFont) {
      webFont = items.webFont.replace(' ', '+'); // Rough URL encoding
      document.getElementById("webFont").href = 'https://fonts.googleapis.com/css?family=' + webFont;
    }
  });
}

function adjustViewSize() {
  // Adjust the size of textarea according to Chrome window size
  var windowHeight = document.documentElement.clientHeight;
  textareaHeight = windowHeight - 70;
  textareaHeight = textareaHeight.toString() + 'px';
  document.getElementById("text-area").style.height = textareaHeight;
}
