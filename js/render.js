'use strict';
(function () {
  // добавление из JSON


  window.list = document.querySelector('.setup-similar-list');

  window.renderWizard = function (wizards) {
    window.list.innerHTML = '';

    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(window.renderElement(wizards[i]));
    }
    window.list.appendChild(fragment);

    document.querySelector('.setup-similar').classList.remove('hidden');
  };
})();
