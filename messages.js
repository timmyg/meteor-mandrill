Meteor.Mandrill = Meteor.Mandrill || {};
_.extend(Meteor.Mandrill, {
  send: Email.send,
  /**
   * Send a new transactional message through Mandrill using a template
   * @param options Only required and common parameters listed, see
   *   https://mandrillapp.com/api/docs/messages.JSON.html#method=send-template
   *   for full documentation
   *   {string} key* A valid API key
   *   {string} template_name* The immutable name or slug of a template that
   *     exists in the user's account. For backwards-compatibility, the template
   *     name may also be used but the immutable slug is preferred. Validation:
   *     required
   *   {array} template_content* An array of template content to send.
   *     {struct} template_content[] The injection of a single piece of content
   *       into a single editable region
   *       {string} name* The name of the mc:edit editable region to inject into
   *       {string} content* The content to inject
   *   {struct} message* The other information on the message to send - same as
   *     /messages/send, but without the html content
   *     {string} subject The message subject
   *     {string} from_email The sender email address.
   *     {string} from_name Optional from name to be used
   *     {array} to An array of recipient information.
   *       {struct} to[] A single recipient's information.
   *         {string} email* The email address of the recipient
   *         {string} name The optional display name to use for the recipient
   *         {string} type The header type to use for the recipient, defaults to
   *           "to" if not provided. oneof(to, cc, bcc)
   *     {array} global_merge_vars Global merge variables to use for all
   *       recipients. You can override these per recipient.
   *       {struct} global_merge_vars[] A single global merge variable
   *         {string} name The global merge variable's name. Merge variable
   *           names are case-insensitive and may not start with _
   *         {string} content The global merge variable's content
   *     {array} merge_vars Per-recipient merge variables, which override global
   *       merge variables with the same name.
   *       {struct} merge_vars[] Per-recipient merge variables
   *         {string} rcpt* The email address of the recipient that the merge
   *           variables should apply to
   *         {array} vars The recipient's merge variables
   *           {struct} vars[] A single merge variable
   *           {string} name The merge variable's name. Merge variable names are
   *             case-insensitive and may not start with _
   *           {string} content The merge variable's content
   *   {string} subaccount The unique id of a subaccount for this message - must
   *     already exist or will fail with an error
   */
  sendTemplate: function (options, callback) {
    var url = this.apiUrl + "messages/send-template.json";
    _.extend(options, { headers: [{Content-Type: "application/json"}] });
    return this.submitRequest(url, options, callback);
  },
});
