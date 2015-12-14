$( document ).ready(function() {

  pubnub.subscribe({
    channel: 'SubTest',
    message: function(m){
      calculateTime(m);
    },
    error: function (error) {
      console.log(JSON.stringify(error));
    }
  });

  function calculateTime(destination) {
    var request = $.ajax({
      url: "/time",
      method: "POST",
      data: { destination : destination }
    });

    request.done(function( msg ) {
      $('.glyphicon-time p').html(msg + ' min');
      $('.glyphicon-time').addClass('time-alert');
    });

    request.fail(function( jqXHR, textStatus ) {
      alert( "Sorry we couldn't complete your request" );
    });
  }

});