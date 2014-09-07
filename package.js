Package.describe({
  summary: "send email via Mandrill"
});

Package.on_use(function(api) {
  api.use(['email', 'http', 'underscore'], ['server']);

  api.add_files(['mandrill.js',
                 'messages.js',
                 'subaccounts.js',
                 'templates.js'],
                'server');
});

Package.on_test(function(api) {
  api.use(['coffeescript', 'email', 'tinytest', 'test-helpers']);
  api.use('mandrill', 'server');

  api.add_files('tests/mocks.coffee', 'server');
  api.add_files(['tests/messages.coffee',
                 'tests/subaccounts.coffee'],
                'server');
});
