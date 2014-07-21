Mandrill for Meteor
===============

Meteor package for sending email via Mandrill

### Usage for SMTP email (coffeescript)
```coffeescript
    # in server code
    Meteor.startup ->
        Meteor.Mandrill.config
            username: "YOUR_MANDRILL_USERNAME"
            key: "YOUR_MANDRILL_API_KEY"


    # server method to send email via mandrill
    @sendEmail = (to, subject, htmlText) ->
        Meteor.Mandrill.send
        	to: to
    		from: fromEmail
    		#cc, bcc, replyTo
    		subject: subject
    		html: htmlText
```

### Usage for API email (coffeescript)
```coffeescript
    # in server code
    Meteor.Mandrill.sendTemplate
        key: "YOUR_MANDRILL_API_KEY"
        # template key
        template_name: "test1"
        # template dynamic content
        # example below for when template contains
        # <div mc:edit="userFirstName"> ("content" value inserted here) </div>
        # note: you must provide a value for this field, even if it is an empty array
        template_content: [
            {
              name: "userFirstName"
              content: "Vince Carter"
            }
          ]
        # Read more on how to use merge tags in the Mandrill Docs
        # http://help.mandrill.com/entries/21678522-How-do-I-use-merge-tags-to-add-dynamic-content-
        message:
          global_merge_vars: [
              {
                  name: "var1",
                  content: "Global Value 1"
              }
          ]
          merge_vars: [
              {
                  "rcpt": "emailadress@domain.com",
                  "vars": [
                      {
                          "name": "fname",
                          "content": "John"
                      },
                      {
                          "name": "lname",
                          "content": "Smith"
                      }
                  ]
              }
          ]
          from_email: "from@email.com"
          to: [email: "to@email.com"]
```
