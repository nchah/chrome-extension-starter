/* options.js
- Handle optional customizations set by the user
- Allow reseting to the default settings

*/

var storage = chrome.storage.local;

var form = document.querySelector("form");
var restoreDefaultsButton = document.querySelector('button.restoreDefaults');

form.addEventListener('submit', saveSettings);
restoreDefaultsButton.addEventListener('click', restoreDefaults);


function restoreDefaults() {
  storage.remove('css');
  alert("Default settings restored.");
}

function saveSettings() {
  // Setting variables for CSS elements
  // Choosing between the drop down or the custom input where needed
  var newBackgroundColor1 = form.elements.bgColorCustom.value;
  var newBackgroundColor2 = form.elements.bgColorSelect.value;
  if (newBackgroundColor1) {
    newBackgroundColor = newBackgroundColor1;
  } else {
    newBackgroundColor = newBackgroundColor2;
  }

  var newTextColor1 = form.elements.textColorCustom.value;
  var newTextColor2 = form.elements.textColorSelect.value;
  if (newTextColor1) {
    newTextColor = newTextColor1;
  } else {
    newTextColor = newTextColor2;
  }

  var newFontFamily1 = form.elements.ftFamilyCustom.value;
  var newFontFamily2 = form.elements.ftFamilySelect.value;
  if (newFontFamily1) {
    newFontFamily = newFontFamily1;
  } else {
    newFontFamily = newFontFamily2;
  }

  var newFontSize = form.elements.ftSize.value + "px";

  // Combine into single CSS statement
  var newCSS = 'background-color: ' + newBackgroundColor + ';' + 
               'color: ' + newTextColor + ';' +
               'font-family: ' + newFontFamily + ';' +
               'font-size: ' + newFontSize + ';';

  // Storing CSS options
  if (newBackgroundColor.length > 0
      || newTextColor.length > 0
      || newFontFamily.length > 0
      || newFontSize.length - 2 > 0) {
    chrome.tabs.insertCSS({code: newCSS}, function() { 
      alert('Updated: ' + '\n' +
            '- Background Color: ' + newBackgroundColor + '\n' +
            '- Text Color: ' + newTextColor + '\n' +
            '- Font Family: ' + newFontFamily + '\n' + 
            '- Font Size: ' + form.elements.ftSize.value + '\n'
            )});
    storage.set({'css': newCSS});
  }
}





