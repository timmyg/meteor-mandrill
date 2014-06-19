Meteor.Mandrill = {
    config: function (options) {
        var host, key, port, username;
        username = options["username"];
        key = options["key"];
        host = "smtp.mandrillapp.com";
        port = "587";
        process.env.MAIL_URL = "smtp://" + username + ":" + key + "@" + host + ":" + port + "/";
    },
    send: function (options) {
        Email.send(options);
    },
    sendTemplate: function (options) {
        var url = "https://mandrillapp.com/api/1.0/messages/send-template.json",
            result;

        options = {
            "data": {
                "key": options.key,
                "template_name": options.template_name,
                "template_content": options.template_content,
                "message": options.message,
                "headers": [{
                    "Content-Type": "application/json"
                }]
            }
        };

        try {
            result = HTTP.post(url, options);
        } catch (e) {
            console.log(e.stack);
        }

    }
};
