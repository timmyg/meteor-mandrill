Mandrill =
  apiUrl: 'https://mandrillapp.com/api/1.0/',
  config: (options) ->
    username = options.username
    key = options.key
    host = "smtp.mandrillapp.com"
    port = "587"
    process.env.MAIL_URL = "smtp://#{username}:#{key}@#{host}:#{port}/"
  submitRequest: (url, options, callback) ->
    # if a callback is provided do an async call
    if callback? then HTTP.post url, data: options, callback
    else # if no callback do a synchronous call and return the result
      try HTTP.post url, data: options
      catch err
        console.log err.stack
