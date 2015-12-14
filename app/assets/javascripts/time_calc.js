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
      var time = parseInt($('.glyphicon-time p').html()) || 0;
      var total = time += msg;

      console.log(total);

      $('.glyphicon-time p').html(total + ' min');
      $('.glyphicon-time').addClass('time-alert');
    });

    request.fail(function( jqXHR, textStatus ) {
      alert( "Sorry we couldn't complete your request" );
    });
  }

});