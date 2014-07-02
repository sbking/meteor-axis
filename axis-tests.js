Tinytest.add("rupture", function(test) {

  var div = document.createElement('div');
  div.className = 'test';
  document.body.appendChild(div);

  var display = getStyleProperty(div, 'display');

  test.equal(display, 'inline-block');

  document.body.removeChild(div);
});