'use strict';

(function () {
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
    setup.style.top = '';
    setup.style.left = '';
    document.addEventListener('keydown', onPopupEscPress);
    wizardCoat.addEventListener('click', onCoatChangeColor);
    wizardEyes.addEventListener('click', onEyesChangeColor);
    wizardFireball.addEventListener('click', onfireballChangeColor);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    window.list.innerHTML = '';
    document.removeEventListener('keydown', onPopupEscPress);
    wizardCoat.removeEventListener('click', onCoatChangeColor);
    wizardEyes.removeEventListener('click', onEyesChangeColor);
    wizardFireball.removeEventListener('click', onfireballChangeColor);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
    window.backend.load(window.successHandler, window.errorHandler);
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
    var coatColor = window.wizzardSettings.coatColors[window.getRandomNumber(0, window.wizzardSettings.coatColors.length - 1)];
    wizardCoat.style.fill = coatColor;
    document.querySelector('#coat-color').value = coatColor;
  };

  var onEyesChangeColor = function () {
    var eyesColor = window.wizzardSettings.eyesColors[window.getRandomNumber(0, window.wizzardSettings.eyesColors.length - 1)];
    wizardEyes.style.fill = eyesColor;
    document.querySelector('#eyes-color').value = eyesColor;
  };

  var onfireballChangeColor = function () {
    var fireballColor = window.wizzardSettings.fireballColors[window.getRandomNumber(0, window.wizzardSettings.fireballColors.length - 1)];
    wizardFireball.style.backgroundColor = fireballColor;
    document.querySelector('#fireball-color').value = fireballColor;
  };

  // dragged popup
  var upload = document.querySelector('.upload');

  upload.addEventListener('mousedown', function (evt) {
    evt.preventDefault();


    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (dragEvt) {
          dragEvt.preventDefault();
          upload.removeEventListener('click', onClickPreventDefault);
        };
        upload.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  });

  // отправка формы
  var form = document.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), closePopup, window.errorHandler);
  });

})();
