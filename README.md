Mandrill for Meteor
===============

Meteor package for sending email via Mandrill

### Add Mandrill to your project with:

	mrt add mandrill


### Usage for SMTP email (coffeescript)
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

### Usage for API email (coffeescript)
    # in server code
    Meteor.Mandrill.sendTemplate
        key: "YOUR_MANDRILL_API_KEY"
        # template key
        templateSlug: "test1"
        # template dynamic content
        # example below for when template contains 
        # <div mc:edit="userFirstName"> ("content" value inserted here) </div>
        templateContent: [
            {
              name: "userFirstName"
              content: "Vince Carter"
            }
          ]
        # Read more on how to use merge tags in the Mandrill Docs
        # http://help.mandrill.com/entries/21678522-How-do-I-use-merge-tags-to-add-dynamic-content-
        globalMergeVars: [
            {
                name: "var1",
                content: "Global Value 1"
            }
        ]
        mergeVars: [
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
        fromEmail: "from@email.com"
        toEmail: "to@email.com"