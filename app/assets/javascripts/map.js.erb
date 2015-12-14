$( document ).ready(function() {

    var directionsDisplay = new google.maps.DirectionsRenderer({
        suppressMarkers : true,
        polylineOptions: { strokeColor: "#EF9024", strokeWeight: 5 }
    });
    var directionsService = new google.maps.DirectionsService();

    var rentifyOffice = {lat:51.519974, lng: -0.098398};
    var destinationPos = {lat: 51.520535, lng: -0.098430};
    var destination;

    map = new google.maps.Map(document.getElementById('map'), {
        center: rentifyOffice,
        zoom: 15
    });

    directionsDisplay.setMap(map);

    var home = new google.maps.Marker({
            position: rentifyOffice,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Rentify Office',
            icon: "<%= asset_path('marker.png') %>"
    });
    home.addListener('click', toggleBounce);

    function createMarker(pos) {
        if (destination) {
            destination.setPosition(pos);
        } else {
            destination = new google.maps.Marker({
                draggable: true,
                position: pos || destinationPos,
                title:"Destination",
                animation: google.maps.Animation.DROP,
                icon: "<%= asset_path('marker-go.png') %>"
            });
            destination.setMap(map);
        }

        google.maps.event.addListener(destination, 'dragend', function(event) {
            drawRoute(event.latLng);
            publish(event.latLng);
        });
    }

    function toggleBounce() {
        if (home.getAnimation() !== null) {
            home.setAnimation(null);
        } else {
             home.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    function drawRoute(endPos) {
        var end = endPos;
        var request = {
            origin: rentifyOffice,
            destination: end,
            travelMode: google.maps.TravelMode.WALKING
        };
        directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                directionsDisplay.setMap(map);
            } else {
                alert("Directions Request from " + rentifyOffice.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
            }
        });
    }

    function publish(endPos) {
        pubnub.publish({
            channel: 'SubTest',
            message: {start: rentifyOffice, end: endPos},
            callback : function(m){console.log(m)}
        });
    }

    $("#add-marker").on( "click", function() {
        createMarker();
    });

    google.maps.event.addListener(map, 'rightclick', function(event) {
        createMarker(event.latLng);
        drawRoute(event.latLng);
        publish(event.latLng);
    });



});