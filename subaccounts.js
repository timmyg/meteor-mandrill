Meteor.Mandrill = Meteor.Mandrill || {};
_.extend(Meteor.Mandrill, {
  /**
   * Get the list of subaccounts defined for the account, optionally filtered by
   *   a prefix
   * @param options:
   *   {string} key* A valid API key
   *   {string} q an optional prefix to filter the subaccounts' ids and names
   */
  list: function (options, callback) {
    var url = this.apiUrl + "/subaccounts/list.json";
    return this.submitRequest(url, options, callback);
  },
  /**
   * Add a new subaccount
   * @param options:
   *   {string} key* A valid API key
   *   {string} id* A unique identifier for the subaccount to be used in sending
   *     calls. Validation: required, maxlength(255)
   *   {string} name An optional display name to further identify the
   *     subaccount. Validation: maxlength(1024)
   *   {string} notes Optional extra text to associate with the subaccount
   *   {integer} custom_quota An optional manual hourly quota for the
   *     subaccount. If not specified, Mandrill will manage this based on
   *     reputation. Validation: greaterthan(0)
   */
  add: function (options, callback) {
    var url = this.apiUrl + "/subaccounts/add.json";
    return this.submitRequest(url, options, callback);
  }
});
