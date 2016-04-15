Package.describe({
  name: 'geekforbrains:tinyrouter',
  version: '0.0.1',
  summary: 'A tiny client-side router for Meteor.',
  git: 'https://github.com/geekforbrains/meteor-tinyrouter.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');
  api.use('ecmascript');
  api.use('templating');
  api.use('reactive-var');
  api.mainModule('tinyrouter.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('geekforbrains:tinyrouter');
  api.mainModule('tinyrouter-tests.js');
});
