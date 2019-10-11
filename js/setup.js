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


  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  window.renderElement = function (elem) {
    var element = template.cloneNode(true);
    element.querySelector('.setup-similar-label').textContent = elem.name;
    element.querySelector('.wizard-coat').style.fill = elem.colorCoat;
    element.querySelector('.wizard-eyes').style.fill = elem.colorEyes;
    return element;
  };

})();
