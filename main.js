var map;
var drivers = {};

$(document).ready(function(){

  var booleanConnection = new WebSocket('ws://159.89.213.199:8100');
  booleanConnection.onmessage = function(event){
    var date = JSON.parse(event.data);
    // console.log(date);
    if(drivers[date.driver_id]){
      drivers[date.driver_id].setMap(null);
    }

    var marker = new google.maps.Marker({
      map: map,
      position: {lat : date.lat, lng : date.lng},
      title: 'DRIVER ' + date.driver_id + date.status,
      icon: 'marker.png'
    });

    drivers[date.driver_id] = marker;

  };


});

function initMap() {
    var latitudine = 45.4642700;
    var longitudine = 9.1895100;

    map = new google.maps.Map(document.getElementById('myMap'), {
      center: {lat : latitudine, lng : longitudine},
      zoom: 13,
    });

  }
