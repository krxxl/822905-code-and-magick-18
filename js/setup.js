'use strict';

var setupBlock = document.querySelector('.setup');

setupBlock.classList.remove('hidden');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandomNumber = function (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

var createArr = function (count) {
  var array = [];
  for (var i = 0; i < count; i++) {
    var obj = {};
    obj.name = names[getRandomNumber(0, names.length - 1)] + ' ' + surnames[getRandomNumber(0, surnames.length - 1)];
    obj.coatColor = coatColors[getRandomNumber(0, coatColors.length - 1)];
    obj.eyesColor = eyesColors[getRandomNumber(0, eyesColors.length - 1)];
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

// document.querySelector('.setup-similar').classList.remove('hidden');


var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setup = document.querySelector('.setup');

if (!setup.classList.contains('hidden')) {
  setup.classList.add('hidden');
}

var onPopupEscPress = function (evt) {
  if (evt.keyCode === 27) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  wizardCoat.addEventListener('click', onCoatChangeColor);
  wizardEyes.addEventListener('click', onEyesChangeColor);
  wizardFireball.addEventListener('click', onfireballChangeColor);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  wizardCoat.removeEventListener('click', onCoatChangeColor);
  wizardEyes.removeEventListener('click', onEyesChangeColor);
  wizardFireball.removeEventListener('click', onfireballChangeColor);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closePopup();
  }
});

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');


var onCoatChangeColor = function () {
  var coatColor = coatColors[getRandomNumber(0, coatColors.length - 1)];
  wizardCoat.style.fill = coatColor;
  document.querySelector('#coat-color').value = coatColor;
};

var onEyesChangeColor = function () {
  var eyesColor = eyesColors[getRandomNumber(0, eyesColors.length - 1)];
  wizardEyes.style.fill = eyesColor;
  document.querySelector('#eyes-color').value = eyesColor;
};

var onfireballChangeColor = function () {
  var fireballColor = fireballColors[getRandomNumber(0, fireballColors.length - 1)];
  wizardFireball.style.backgroundColor = fireballColor;
  document.querySelector('#fireball-color').value = fireballColor;
};

