$( document ).ready(function() {

  pubnub.subscribe({
    channel: 'SubTest',
    message: function(m){
      console.log(m)
    },
    error: function (error) {
      console.log(JSON.stringify(error));
    }
  });

});