'use strict';

(function () {

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === window.coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === window.eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  window.updateWizards = function () {
    window.renderWizard(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.onCoatChangeWizards = window.throttle(function (color) {
    window.coatColor = color;
    window.updateWizards();
  });


  window.onEyesChangeWizards = window.throttle(function (color) {
    window.eyesColor = color;
    window.updateWizards();
  });


  var wizards = [];

  window.successHandler = function (data) {
    wizards = data;
    window.updateWizards();
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
})();
