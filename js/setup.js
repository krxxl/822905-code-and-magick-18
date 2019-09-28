'use strict';

(function () {
  var setupBlock = document.querySelector('.setup');
  setupBlock.classList.remove('hidden');

  window.wizzardSettings = {
    names: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    surnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColors: ['black', 'red', 'blue', 'yellow', 'green'],
    fireballColors: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
  };

  var createArr = function (count) {
    var array = [];
    for (var i = 0; i < count; i++) {
      var obj = {};
      obj.name = window.wizzardSettings.names[window.getRandomNumber(0, window.wizzardSettings.names.length - 1)] + ' ' + window.wizzardSettings.surnames[window.getRandomNumber(0, window.wizzardSettings.surnames.length - 1)];
      obj.coatColor = window.wizzardSettings.coatColors[window.getRandomNumber(0, window.wizzardSettings.coatColors.length - 1)];
      obj.eyesColor = window.wizzardSettings.eyesColors[window.getRandomNumber(0, window.wizzardSettings.eyesColors.length - 1)];
      array[i] = obj;
    }
    return array;
  };


  var list = document.querySelector('.setup-similar-list');
  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderElement = function (arr) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < arr.length; i++) {
      var element = template.cloneNode(true);
      element.querySelector('.setup-similar-label').textContent = arr[i].name;
      element.querySelector('.wizard-coat').style.fill = arr[i].coatColor;
      element.querySelector('.wizard-eyes').style.fill = arr[i].eyesColor;
      fragment.appendChild(element);
    }
    list.appendChild(fragment);
  };

  renderElement(createArr(4));
})();
