Mandrill = {};
_.extend(Mandrill, {
  apiUrl: "https://mandrillapp.com/api/1.0/",
  config: function (options) {
    var host, key, port, username;
    username = options["username"];
    key = options["key"];
    host = "smtp.mandrillapp.com";
    port = "587";
    process.env.MAIL_URL =
      "smtp://" + username + ":" + key + "@" + host + ":" + port + "/";
  },
  submitRequest: function (url, options, callback) {
    try {
      // if a callback is provided do an async call
      if (!! callback) HTTP.post(url, { data: options }, callback);
      // if no callback do a synchronous call and return the result
      else return HTTP.post(url, { data: options });
    } catch (e) {
        console.log(e.stack);
    }
  }
});
