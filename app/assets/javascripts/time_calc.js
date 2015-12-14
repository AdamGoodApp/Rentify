$( document ).ready(function() {

  pubnub.subscribe({
    channel: 'SubTest',
    message: function(m){
      console.log(m);
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
      $( "#log" ).html( msg );
    });

    request.fail(function( jqXHR, textStatus ) {
      alert( "Request failed: " + textStatus );
    });
  }

});