ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:27700").setExtent([257975.129553, 215645.540464, 309718.903582, 243207.348558]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Open Street Map ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TRIGPOINTS_1 = new ol.format.GeoJSON();
var features_TRIGPOINTS_1 = format_TRIGPOINTS_1.readFeatures(json_TRIGPOINTS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_TRIGPOINTS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRIGPOINTS_1.addFeatures(features_TRIGPOINTS_1);
var lyr_TRIGPOINTS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRIGPOINTS_1, 
                style: style_TRIGPOINTS_1,
                interactive: true,
                title: '<img src="styles/legend/TRIGPOINTS_1.png" /> TRIGPOINTS'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_TRIGPOINTS_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_TRIGPOINTS_1];
lyr_TRIGPOINTS_1.set('fieldAliases', {'NAME': 'Trig Pillar Name', 'TP No.': 'TP No.', 'MAP': 'MAP', 'LINK': 'Link to OSM', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'OS GRID RE': 'OS Grid', 'LAT': 'LAT', 'LON': 'LON', 'ELEV. (m)': 'ELEV. (m)', 'CURRENT CO': 'CURRENT CO', 'LINK TO PH': 'LINK TO PH', 'WORK UNDER': 'WORK UNDER', 'SURVEYED B': 'SURVEYED B', 'DATE': 'DATE', });
lyr_TRIGPOINTS_1.set('fieldImages', {'NAME': 'TextEdit', 'TP No.': 'Hidden', 'MAP': 'Hidden', 'LINK': 'TextEdit', 'EASTING': 'TextEdit', 'NORTHING': 'TextEdit', 'OS GRID RE': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'ELEV. (m)': 'TextEdit', 'CURRENT CO': 'Hidden', 'LINK TO PH': 'Hidden', 'WORK UNDER': 'Hidden', 'SURVEYED B': 'Hidden', 'DATE': 'Hidden', });
lyr_TRIGPOINTS_1.set('fieldLabels', {'NAME': 'inline label', 'LINK': 'inline label', 'EASTING': 'inline label', 'NORTHING': 'inline label', 'OS GRID RE': 'inline label', 'LAT': 'inline label', 'LON': 'inline label', 'ELEV. (m)': 'inline label', });
lyr_TRIGPOINTS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});