Meteor.Mandrill = {
  config: function(options) {
    var host, key, port, username;
    username = options["username"];
    key = options["key"];
    host = "smtp.mandrillapp.com";
    port = "587";
    process.env.MAIL_URL = "smtp://" + username + ":" + key + "@"+ host + ":" + port + "/";
  },
  send: function(options) {
    Email.send(options);
  }
};
