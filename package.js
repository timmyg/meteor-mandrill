Package.describe({
  summary: 'send email via Mandrill'
});

Package.on_use(function(api) {
  api.use(['coffeescript', 'email', 'http', 'underscore'], 'server');
  api.export(['Mandrill'], 'server');
  api.add_files(['mandrill.coffee',
                 'messages.coffee',
                 'subaccounts.coffee',
                 'templates.coffee'],
                'server');
});

Package.on_test(function(api) {
  api.use(['coffeescript', 'email', 'tinytest', 'test-helpers'], 'server');
  api.use(['mandrill'], 'server');

  api.add_files(['tests/mocks.coffee'], 'server');
  api.add_files(['tests/messages.coffee',
                 'tests/subaccounts.coffee'],
                'server');
});
