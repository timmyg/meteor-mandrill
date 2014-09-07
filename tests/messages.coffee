testAsyncMulti 'Mandrill: messages - send', [
  (test, expect) ->
    options =
      to: 'andrew@hazlett.me'
      from: 'asdf'
      subject: 'asdf'
      html: 'asdf'
    EmailTest.hookSend expect (sendOptions) ->
      test.equal options, sendOptions, 'expected options to match'
    Mandrill.send options
]

testAsyncMulti 'Mandrill: messages - sendTemplate', [
  (test, expect) ->
    options =
      key: Mandrill.apiKey
      template_name: 'meteor-mandrill-test'
      template_content: [ name: 'SomeTemplateContent', content: 'qwer']
      message:
        global_merge_vars: [ name: 'AGlobalMergeVar', content: 'asdf']
        merge_vars: [ name: 'AMergeVar', content: 'zxcv']
        from_email: 'from@meteor-mandrill.com'
        to: [ email: 'recipient@meteor-mandrill.com' ]
      subaccount: 'meteor-mandrill-test'
    Mandrill.sendTemplate options, expect (err, res) ->
      test.isNull err, 'expected err to be null'
      test.equal res.statusCode, 200, 'expected the status code to be 200'
]
