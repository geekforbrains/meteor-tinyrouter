Package.describe({
  name: 'geekforbrains:tinyrouter',
  version: '0.0.2',
  summary: 'A tiny client-side router for Meteor.',
  git: 'https://github.com/geekforbrains/meteor-tinyrouter.git',
  documentation: 'README.md'
});

Npm.depends({
  'path-to-regexp': '1.2.1'
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
