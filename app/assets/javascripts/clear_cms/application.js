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
//= require jquery.ui.all
//= require twitter/bootstrap
//= #require bootstrap-button
//= #require bootstrap-wysihtml5
//= #require_tree .
//= require jquery-fileupload
//= require ./contents
//= require ./s3_direct
//= require markitup
//= #require markitup/sets/xbbcode/set
//= require ./markitup_html_settings
//= require_self


// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){

  // your functions go here

});


$(document).ready(function() {
  
  $('#site_selector_id').change(function() {
    window.location.search='site_selector[id]='+$('#site_selector_id').val();
  });

});

  

$(document).ready(function()  { 
  $('textarea.markitup').markItUp(mySettings);
});




/* optional triggers

$(window).load(function() {
  
});

$(window).resize(function() {
  
});

*/