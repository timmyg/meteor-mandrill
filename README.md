Mandrill for Meteor
===============

Meteor package for sending email via Mandrill

* Add Mandrill to your project with:
```
    mrt add mandrill
```

### Usage (coffeescript)
    # in server code
    Meteor.startup ->
        Meteor.Mailgun.config
            username: "YOUR_MAILGUN_USERNAME"
            password: "YOUR_MAILGUN_PASSWORD"
            
    
    # server method to send email via mandrill        
    @sendEmail = (to, subject, htmlText) ->
        Meteor.Mandrill.send
        	to: to
    		from: fromEmail
    		#cc, bcc, replyTo 
    		subject: subject
    		html: htmlText