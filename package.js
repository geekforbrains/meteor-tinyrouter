Package.describe({
  name: 'geekforbrains:pebble',
  version: '0.0.2',
  summary: 'A tiny client-side router for Meteor.',
  git: 'https://github.com/geekforbrains/meteor-pebble.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');
  api.use('ecmascript');
  api.use('templating');
  api.use('reactive-var');
  api.mainModule('pebble.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('geekforbrains:pebble');
  api.mainModule('pebble-tests.js');
});
