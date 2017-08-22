function initialize_gmaps() {
    // initialize new google maps LatLng object
    var myLatlng = new google.maps.LatLng(40.705189,-74.009209);
    // set the map options hash
    var mapOptions = {
        center: myLatlng,
        zoom: 16,
        styles: [
          {     // land building color
            "elementType": "geometry", 
            "stylers": [
              {
                "color": "#242f3e"
              }
            ]
          },
          {
            "elementType": "labels.text.fill", 
            "stylers": [
              {
                "color": "#746855"
              }
            ]
          },
          { 
            "elementType": "labels.text.stroke", 
            "stylers": [
              {
                "color": "#242f3e"
              }
            ]
          },
          {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#d59563"
              }
            ]
          },
          {     // landmark name text
            "featureType": "poi", 
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#FDE311"
              }
            ]
          },
          {     // park color
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#263c3f"
              }
            ]
          },
          {   // park name text color
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#6b9a76"
              }
            ]
          },
          {    // street colors
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#484848"
              }
            ]
          },
          {     //street outline color
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#212a37"
              }
            ]
          },
          {     //street name color
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9ca5b3"
              }
            ]
          },
          {     //highway color
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {     //highway outline color  
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#746855"
              }
            ]
          },
          {     //highway name text color
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#f3d19c"
              }
            ]
          },
          {     //subway train line color
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#2f3948"
              }
            ]
          },
          {     //subway train station text color
            "featureType": "transit.station",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#d59563"
              }
            ]
          },
          {     // water ocean lake river color
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#0060A8"
              }
            ]
          },
          {     // water ocean lake river name color
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#515c6d"
              }
            ]
          },
          {     // water ocean lake ricer outline color
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#17263c"
              }
            ]
          }
        ]
        // mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    // get the maps div's HTML obj
    var map_canvas_obj = document.getElementById("map-canvas");
    // initialize a new Google Map with the options
    var map = new google.maps.Map(map_canvas_obj, mapOptions);
    // use custom image for location marker
    var image = 'https://www.easyicon.net/api/resizeApi.php?id=1094745&size=45';
    // Add the marker to the map
    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Hello World!",
        icon: image,
        draggable: true,
    });
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">I\'M BATMAN !!!</h1>'+
      '<div id="bodyContent">'+
      '<p>Batman, Batman, Batman<br>'+
      'Da da da da da da<br>'+
      'Batman, Batman, Batman, Batman<br>'+
      'da da da da da da<br>'+
      '<b>BATMAN !!!</b></p>'
      '</div>'+
      '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
        
    // Add the marker to the map by calling setMap()
    marker.setMap(map);
}

$(document).ready(function() {
    initialize_gmaps();
});
