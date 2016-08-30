/* options.js
- Handle optional customizations set by the user
- Allow reseting to the default settings

*/

var storage = chrome.storage.local;

var form = document.querySelector("form");
var restoreDefaultsButton = document.querySelector('button.restoreDefaults');
form.addEventListener('submit', saveSettings);
restoreDefaultsButton.addEventListener('click', restoreDefaults);

loadOptions();


function loadOptions() {
  storage.get('autosave', function(items) {
    if (items.autosave == 'yes') {
      document.getElementById('autosave').checked = true;
    } else if (items.autosave != 'yes') {
      document.getElementById('autosave').checked = false;
    }
  })
}

function restoreDefaults() {
  storage.remove('css');
  alert("Default settings restored.");
}

function saveSettings() {
  // ** Experimental: autosave
  var autosave = form.elements.autosave.value;
  var autosave = document.getElementById('autosave').checked;
  if (autosave) {
    storage.set({'autosave': 'yes'});
  } else if (!autosave) {
    storage.set({'autosave': 'no'});
  }

  // Apply a new curated theme of styles 
  var newTheme = form.elements.themeSelect.value;
  if (newTheme.length > 0) {
    switch (newTheme) {
      case 'Dark Default':
        newCSSTheme = 'background-color: #404040; color: white; font-family: monospace; font-size: 14px;';
        break;
      case 'Rosy Rose':
        newCSSTheme = 'background-color: #ffcccc; color: maroon; font-family: ; font-size: ;';
        break;
      case 'Baby Blue':
        newCSSTheme = 'background-color: #99ccff; color: navy; font-family: monospace; font-size: 14px;';
        break;
      case 'Light Lavender':
        newCSSTheme = 'background-color: #ccccff; color: purple; font-family: monospace; font-size: 14px;';
        break;
      case 'Lush Lime':
        newCSSTheme = 'background-color: #b3ffb3; color: green; font-family: monospace; font-size: 14px;';
        break;
      case 'Orange Ochre':
        newCSSTheme = 'background-color: #ffcc99; color: #b37400; font-family: monospace; font-size: 14px;';
        break;
    }
    chrome.tabs.insertCSS({code: newCSSTheme}, alert('Updated to theme: ' + newTheme));
    storage.set({'css': newCSSTheme});
  }

  // Setting variables for CSS elements; Choosing between dropdown or input where needed
  // * New background color
  var newBackgroundColor1 = form.elements.bgColorCustom.value;
  var newBackgroundColor2 = form.elements.bgColorSelect.value;
  if (newBackgroundColor1) {
    newBackgroundColor = newBackgroundColor1;
  } else {
    newBackgroundColor = newBackgroundColor2;
  }
  // * New text color
  var newTextColor1 = form.elements.textColorCustom.value;
  var newTextColor2 = form.elements.textColorSelect.value;
  if (newTextColor1) {
    newTextColor = newTextColor1;
  } else {
    newTextColor = newTextColor2;
  }
  // * New font family
  var newFontFamily1 = form.elements.fontFamilyCustom.value;
  var newFontFamily2 = form.elements.fontFamilySelect.value;
  if (newFontFamily1) {
    newFontFamily = newFontFamily1;
  } else {
    newFontFamily = newFontFamily2;
  }
  // ** Experimental: web fonts
  var webFont = document.getElementById('fontFamilyWeb').value;
  if (webFont) {
    storage.set({'webFont': webFont});
  }
  newFontFamily = webFont;

  // * New font size
  var newFontSize = form.elements.fontSize.value + "px";

  // Storing CSS option changes
  if (newBackgroundColor.length > 0
      || newTextColor.length > 0
      || newFontFamily.length > 0
      || newFontSize.length - 2 > 0
      && newTheme.length == 0) {

    // Getting existing CSS settings
    storage.get('css', function(items) {
      var existingCSS = items.css.split(';', 4); // limit to the 4 CSS options for now
      // Ex: background-color: #ffcccc, color: maroon, font-family: monospace, font-size: 14px
      var existingCSSBackgroundColor = existingCSS[0].split(':')[1];
      var existingCSSTextColor = existingCSS[1].split(':')[1];
      var existingCSSFontFamily = existingCSS[2].split(':')[1];
      var existingCSSFontSize = existingCSS[3].split(':')[1];

      // If no new value was set, preserve the existing CSS value
      if (!newBackgroundColor) {
        newBackgroundColor = existingCSSBackgroundColor;
      }

      if (!newTextColor) {
        newTextColor = existingCSSTextColor;
      }

      if (!newFontFamily) {
        newFontFamily = existingCSSFontFamily;
      }

      if (!newFontSize) {
        newFontSize = existingCSSFontSize;
      }

      // Combine all updates into single CSS statement
      var newCSS = 'background-color: ' + newBackgroundColor + '; ' + 
                   'color: ' + newTextColor + '; ' +
                   'font-family: ' + newFontFamily + '; ' +
                   'font-size: ' + newFontSize + ';';

      chrome.tabs.insertCSS({code: newCSS}, function() { 
        alert('Updated: ' + '\n' +
              '- Background Color: ' + newBackgroundColor + '\n' +
              '- Text Color: ' + newTextColor + '\n' +
              '- Font Family: ' + newFontFamily + '\n' + 
              '- Font Size: ' + form.elements.ftSize.value + '\n' +
              '- Theme: ' + newTheme + '\n'
              )});
      storage.set({'css': newCSS});
    })
  }
}
