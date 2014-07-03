Package.describe({
  summary: "send email via Mandrill"
});

Package.on_use(function(api) {
  api.use(['email', 'http', 'underscore'], ['server']);
  api.add_files(['mandrill.js','messages.js','templates.js'], 'server');
});
