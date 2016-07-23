// jshint devel:true
var map = L.map('map', {
    center: [-17.392579271057766, -64.86328125000001],
    zoom: 5,
    minZoom: 1,
    maxZoom: 6
});

L.control.zoom();

map.dragging.disable();


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.satellite',
    accessToken: 'pk.eyJ1IjoiZmVhcmRhcmtuZXNzIiwiYSI6ImNpcXpiaTRobTAyNmhmbmtxb2lmMDV1dXgifQ.MGL7D2cZjbH_RyIsL08AqQ'
}).addTo(map);

function getColor(val){
	return val === 2? '#d73027':
			val === 3? '#f46d43':
			val === 4? '#fdae61':
			val === 5? '#fee090':
			val === 6? '#ffffbf':
			val === 7? '#e0f3f8':
			val === 8? '#abd9e9':
			val === 9? '#74add1': '#4575b4';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.cartodb_id),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#008000',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

var geojson = L.geoJson(boliviaData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);
