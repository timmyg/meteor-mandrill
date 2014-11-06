Package.describe({
  summary: "send email via Mandrill"
  git: "https://github.com/timmyg/meteor-mandrill.git",
});

Package.on_use(function(api) {
  api.use(['email', 'http'], ['server']);
  api.add_files('mandrill.js', 'server');
});
