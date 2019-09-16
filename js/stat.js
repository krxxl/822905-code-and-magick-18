'use strict';

var WIDTH_WINDOW = 420;
var HEIGTH_WINDOW = 270;
var X_WINDOW = 110;
var Y_WINDOW = 10;
var X_COLUMN = X_WINDOW + 10;
var Y_COLUMN = HEIGTH_WINDOW - 20;
var MAX_HEIGTH = 150;
var WIDTH_COLUMN = 40;
var MARGIN_COLUMN = 50;
var USERCOLUMN_COLOR = 'rgba(255, 0, 0, 1)';
var TEXT_COLOR = 'black';

var renderCloud = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var getMaxTime = function (times) {
  // вычисляем максимальное время
  var maxTime = 0;

  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
    }
  }

  return maxTime;
};

window.renderStatistics = function (ctx, names, times) {

  renderCloud(ctx, X_WINDOW + 10, Y_WINDOW + 10, WIDTH_WINDOW, HEIGTH_WINDOW, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, X_WINDOW, Y_WINDOW, WIDTH_WINDOW, HEIGTH_WINDOW, 'white');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = TEXT_COLOR;
  ctx.textBaseLine = 'hanging';
  ctx.fillText('Ура вы победили!', X_COLUMN, 50);
  ctx.fillText('Список результатов:', X_COLUMN, 70);


  var maxTime = getMaxTime(times);

  // проверка на количество;
  var count = names.length;

  if (names.length > times.length) {
    count = times.length;
  }

  // рисуем график
  var xColumn = X_COLUMN;

  for (var i = 0; i < count; i++) {
    ctx.fillStyle = USERCOLUMN_COLOR;

    if (names[i] !== 'Вы') {
      var color = 50 + (Math.round(Math.random() * 100));
      ctx.fillStyle = 'hsl(240, ' + color + '%, 50%)';
    }

    var heigthColumn = Math.round(MAX_HEIGTH * times[i] / maxTime);
    ctx.fillRect(xColumn, Y_COLUMN, WIDTH_COLUMN, -heigthColumn);
    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(names[i], xColumn, HEIGTH_WINDOW);
    ctx.fillText(Math.round(times[i]), xColumn, Y_COLUMN - heigthColumn - 10);

    xColumn += WIDTH_COLUMN + MARGIN_COLUMN;

  }

};
