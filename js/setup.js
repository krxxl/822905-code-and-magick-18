'use strict';

var setupBlock = document.querySelector('.setup');

setupBlock.classList.remove('hidden');

var array = [];
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomNumber = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

var createArr = function (count) {
  for (var i = 0; i < count; i++) {
    var obj = {};
    obj.name = names[getRandomNumber(0, names.length - 1)] + ' ' + surnames[getRandomNumber(0, surnames.length - 1)];
    obj.coatColor = coatColors[getRandomNumber(0, coatColors.length - 1)];
    obj.eyesColor = eyesColors[getRandomNumber(0, eyesColors.length - 1)];
    array[i] = obj;
  }
};

createArr(4);

var list = document.querySelector('.setup-similar-list');

var renderElement = function (arr) {
  var template = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
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

renderElement(array);

document.querySelector('.setup-similar').classList.remove('hidden');
