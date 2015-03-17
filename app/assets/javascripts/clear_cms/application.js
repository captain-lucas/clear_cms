// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require jquery_nested_form
//= #require jquery-ui-1.8.16.custom.min
//= require jquery-ui
//= require twitter/bootstrap
//= #require bootstrap-button
//= #require bootstrap-wysihtml5
//= #require_tree .
//= require jquery-fileupload
//= require clear_cms/s3_direct
//= require tagmanager
//= require markitup
//= #require markitup/sets/html/set
//= require clear_cms/markitup_html_settings
//= require jquery.protectedfield.min
//= require jquery.textcount.min
//= require moment
//= require bootstrap-datetimepicker
//= require clear_cms/contents
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require clear_cms/clear_cms_ember

Ember.LOG_BINDINGS = true;

window.ClearCms = Ember.Application.create({

  LOG_TRANSITIONS: true,
  // log when Ember generates a controller or a route from a generic class
  LOG_ACTIVE_GENERATION: true,
  // log when Ember looks up a template or a view
  LOG_VIEW_LOOKUPS: true,
  // render the application in jQuery("#ember-crud-example")
  rootElement: "#ember-container",
// for more details see: http://emberjs.com/guides/application/

  ready: function() {
      // show what templates got compiled
      console.log("Ember.TEMPLATES: ", Ember.TEMPLATES);
    }
});


// remap jQuery to $
(function($){})(window.jQuery);


var scheme   = "ws://";
var uri      = scheme + window.document.location.host + "/";
var ws       = new WebSocket(uri);

ws.onmessage = function(message) {
  console.log(message);
  //var data = JSON.parse(message.data);
  console.log(message.data.toString());
};
