testAsyncMulti 'Mandrill: subaccounts - list', [
  (test, expect) ->
    options = key: Meteor.Mandrill.apiKey
    Meteor.Mandrill.list options, expect (err, res) ->
      subaccountNames = _.pluck res.data, 'name'
      test.include subaccountNames, 'meteor-mandrill-test',
        'expected it to include "meteor-mandrill-test"'
]

testAsyncMulti 'Mandrill: subaccounts - add', [
  (test, expect) ->
    options =
      key: Meteor.Mandrill.apiKey
      id: 'new-subaccount' + Random.id()
    Meteor.Mandrill.add options, expect (err, res) ->
      test.isNull err, 'expected err to be null'
      test.equal res.statusCode, 200, 'expected the status code to be 200'
]
