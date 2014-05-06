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
            data: {
                key: options.key,
                template_name: options.templateSlug,
                template_content: options.templateContent,
                message: {
                    from_email: options.fromEmail,
                    to: [
                        {
                            email: options.toEmail
                        }
                    ],
                    "global_merge_vars": options.globalMergeVars,
                    "merge_vars": options.mergeVars
                },
                headers: [
                    {
                        "Content-Type": "application/json"
                    }
                ]
            }
        };

        try {
            result = HTTP.post(url, options);

        } catch (e) {
            console.log(e.stack);
        }

    }
};