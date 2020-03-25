function initialize() {
  var center = new google.maps.LatLng(35.308191,139.487196);
  var opts = {
  position:center,
   pov: 
   {
   heading: 278.3,
   pitch:30,
   zoom:0
   }
  };
  var myPano = new google.maps.StreetViewPanorama
   (document.getElementById("pano"),opts);
  myPano.setVisible(true);
  }