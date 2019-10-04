'use strict';

(function () {
  window.backend = {
    load: function (url, onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        switch (xhr.status) {
          case 200:
            onLoad(xhr.response);
            break;

          default:
            onError(xhr.status);
        }
      });

      xhr.open('GET', url);
      xhr.send();
    },
    save: function (url, data, onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        switch (xhr.status) {
          case 200:
            onLoad(xhr.response);
            break;

          default:
            onError(xhr.status);
        }
      });

      xhr.open('POST', url);
      xhr.send(data);
    }
  };
})();

// window.save('https://js.dump.academy/code-and-magick', data, onLoad, onError);

