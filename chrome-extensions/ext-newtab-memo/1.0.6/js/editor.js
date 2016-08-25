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

optionsButton.addEventListener('click', openOptions);
saveTextButton.addEventListener('click', saveChanges);
resetTextButton.addEventListener('click', resetChanges);

autosaveChanges();
// var interval = window.setInterval()

// Experimental: autosave
function autosaveChanges() {
  storage.get('autosave', function(items) {
    if (items.autosave == 'yes') {
      var interval = window.setInterval(function() {
        var text = textarea.value;
        if (!text) {
          alert("No text to save.");
        } else if (text) {
          storage.set({'txt': text});
        }
      }, 1000);
    }
  })
}

// Keyboard short: Ctrl+Shift+S to save text
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
  // storage.clear would achieve the same thing.
  storage.remove('txt');
  textarea.value = '';
}

function loadChanges() {
  storage.get('txt', function(items) {
    if (items.txt) {
      textarea.value = items.txt;
    }
  });

  adjustViewSize();
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
      
      adjustViewSize();
    }
  });
}

function adjustViewSize() {
  // Automatically adjust the textarea box depending on browser tab size
  // Get the font size used in the text box
  var textFontSizeLength = document.getElementById("text-area").style.fontSize.length;
  // Slice out the "px" portion in the tail end
  var textFontSizeRaw = document.getElementById("text-area").style.fontSize.slice(0, textFontSizeLength - 2);
  // Split by "." and use the first number value as font size
  var textFontSize = textFontSizeRaw.split(".")[0];

  // For example, for font 12 = Approximating 1 row in Text area as 15 in height; font 10 = 13
  var adjustment_array = {
    '8': 9.75,
    '9': 11,
    '10': 13,
    '11': 14,
    '12': 15,
    '13': 16,
    '14': 17,
    '15': 18,
    '16': 19.5,
    '20': 24
  }

  if (adjustment_array[textFontSize]) {
    var adjustment = adjustment_array[textFontSize];
  } else {
    // Setting this as the default
    adjustment = 15;
  }

  var height = document.documentElement.clientHeight;
  // Text box row formula; the "- 2" to leave room for Save, etc. buttons
  document.getElementById("text-area").rows = ((height / adjustment) - 2);
}



