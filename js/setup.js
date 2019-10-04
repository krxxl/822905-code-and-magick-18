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

  // var createArr = function (count) {
  //   var array = [];
  //   for (var i = 0; i < count; i++) {
  //     var obj = {};
  //     obj.name = window.wizzardSettings.names[window.getRandomNumber(0, window.wizzardSettings.names.length - 1)] + ' ' + window.wizzardSettings.surnames[window.getRandomNumber(0, window.wizzardSettings.surnames.length - 1)];
  //     obj.coatColor = window.wizzardSettings.coatColors[window.getRandomNumber(0, window.wizzardSettings.coatColors.length - 1)];
  //     obj.eyesColor = window.wizzardSettings.eyesColors[window.getRandomNumber(0, window.wizzardSettings.eyesColors.length - 1)];
  //     array[i] = obj;
  //   }
  //   return array;
  // };


  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderElement = function (elem) {
    // var fragment = document.createDocumentFragment();

    // for (var i = 0; i < arr.length; i++) {
    var element = template.cloneNode(true);
    element.querySelector('.setup-similar-label').textContent = elem.name;
    element.querySelector('.wizard-coat').style.fill = elem.colorCoat;
    element.querySelector('.wizard-eyes').style.fill = elem.colorEyes;
    return element;
    // fragment.appendChild(element);
    // }
    // list.appendChild(fragment);
  };


  // добавление из JSON

  window.list = document.querySelector('.setup-similar-list');

  window.successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderElement(wizards[window.getRandomNumber(0, wizards.length - 1)]));
    }
    window.list.appendChild(fragment);

    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.errorHandler = function (errorMessage) {
    var error;
    switch (errorMessage) {
      case 400:
        error = 'Неверный запрос';
        break;
      case 401:
        error = 'Пользователь не авторизован';
        break;
      case 404:
        error = 'Ничего не найдено';
        break;

      default:
        error = 'Cтатус ответа: : ' + errorMessage;
    }
    var node = document.createElement('div');
    node.className = 'error-message';
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.top = '50%';
    node.style.fontSize = '30px';
    node.textContent = error;
    document.body.insertAdjacentElement('afterbegin', node);

    var errorElement = document.querySelector('.error-message');
    var onDocClick = function () {
      errorElement.remove();
      document.removeEventListener('click', onDocClick);
    };

    document.addEventListener('click', onDocClick);
  };

  // renderElement(createArr(4));
})();
