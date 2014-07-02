Package.describe({
  summary: 'A terse, feature-rich css library built on top of stylus.'
});

Package.on_test(function (api) {
  api.use(['tinytest', 'stylus', 'axis', 'test-helpers', 'templating']);
  api.add_files([
    'axis-tests.js',
    'axis-tests.styl'
  ],'client');
});
