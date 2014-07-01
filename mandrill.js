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
    sendTemplate: function (options, callback) {
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
            // if a callback is provided do an asynch call
            if (!! callback) HTTP.post(url, options, callback);

            // if no callback do a synchronous call and store the result
            else result = HTTP.post(url, options);

        } catch (e) {
            console.log(e.stack);
        }

    },
    renderTemplate: function (options, callback) {
        var url = "https://mandrillapp.com/api/1.0/templates/render.json";

        try {
            // if a callback is provided do an asynch call
            if (!! callback) HTTP.post(url, { data: options }, callback);

            // if no callback do a synchronous call and return the result
            else return HTTP.post(url, { data: options });

        } catch (e) {
            console.log(e.stack);
        }
    }
};
