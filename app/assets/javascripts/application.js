// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require moment
//= require bootstrap-datetimepicker
//= require_tree .


pubnub = PUBNUB({
  publish_key   : gon.pubnub_pub,
  subscribe_key : gon.pubnub_sub
});

$('.glyphicon-plus').on( "click", function(e) {
  if($('.navbar-right').find('.address').length < 7 ) {
    $('#add-address').append( "<input type='text' class='form-control address additional-address' placeholder='Address'>" );
  }
});

$('#datetimepicker1').datetimepicker();