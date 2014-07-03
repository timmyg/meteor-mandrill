Meteor.Mandrill = Meteor.Mandrill || {};
_.extend(Meteor.Mandrill, {
  /**
   * Inject content and optionally merge fields into a template, returning the
   *   HTML that results
   * @param options
   *   {string} key* A valid API key
   *   {string} template_name* The immutable name or slug of a template that
   *     exists in the user's account. For backwards-compatibility, the template
   *     name may also be used but the immutable slug is preferred. Validation:
   *     required
   *   {array} template_content* An array of template content to send. Each item
   *     in the array should be a struct with two keys - name: the name of the
   *     content block to set the content for, and content: the actual content
   *     to put into the block
   *     {struct} template_content[] The injection of a single piece of content
   *       into a single editable region
   *       {string} name* The name of the mc:edit editable region to inject into
   *       {string} content* The content to inject
   *   {array} merge_vars Per-recipient merge variables, which override global
   *     merge variables with the same name.
   *     {struct} merge_vars[] Per-recipient merge variables
   *       {string} rcpt* The email address of the recipient that the merge
   *         variables should apply to
   *       {array} vars The recipient's merge variables
   *         {struct} vars[] A single merge variable
   *         {string} name The merge variable's name. Merge variable names are
   *           case-insensitive and may not start with _
   *         {string} content The merge variable's content
   */
  renderTemplate: function (options, callback) {
      var url = this.apiUrl + "templates/render.json";
      return this.submitRequest(url, options, callback);
  }
});
