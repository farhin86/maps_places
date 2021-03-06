export class Map {
  constructor(coordinates) {
    this.render(coordinates);
  }
  render(coordinates) {
    document.getElementById("map").innerHTML = ""; // clear the <p> in the <div id="map">
    var map = new ol.Map({
      target: "map",
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM(),
        }),
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([coordinates.lng, coordinates.lat]),
        zoom: 16,
      }),
    });
    return map;
  }
}
