Package.describe({
  summary: "send email via Mandrill"
});

Package.on_use(function(api) {
  api.use(['email', 'http', 'underscore'], ['server']);
  api.add_files('mandrill.js', 'server');
  api.add_files('templates.js', 'server');
});
