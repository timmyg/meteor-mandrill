Package.describe({
  summary: "send email via Mandrill"
});

Package.on_use(function(api) {
  api.add_files('mandrill.js', 'server');
});
