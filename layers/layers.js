var wms_layers = [];

var lyr_hillshadensw_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'hillshade nsw<br />\
    <img src="styles/legend/hillshadensw_0_0.png" /> 1<br />\
    <img src="styles/legend/hillshadensw_0_1.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/hillshadensw_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [16716309.599122, -4015940.425804, 16772321.251643, -3942610.455061]
        })
    });
var format_BushfireRiskIndex_1 = new ol.format.GeoJSON();
var features_BushfireRiskIndex_1 = format_BushfireRiskIndex_1.readFeatures(json_BushfireRiskIndex_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BushfireRiskIndex_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BushfireRiskIndex_1.addFeatures(features_BushfireRiskIndex_1);
var lyr_BushfireRiskIndex_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BushfireRiskIndex_1, 
                style: style_BushfireRiskIndex_1,
                popuplayertitle: 'Bushfire Risk Index',
                interactive: true,
    title: 'Bushfire Risk Index<br />\
    <img src="styles/legend/BushfireRiskIndex_1_0.png" /> Very Low<br />\
    <img src="styles/legend/BushfireRiskIndex_1_1.png" /> Low<br />\
    <img src="styles/legend/BushfireRiskIndex_1_2.png" /> Moderate<br />\
    <img src="styles/legend/BushfireRiskIndex_1_3.png" /> High<br />\
    <img src="styles/legend/BushfireRiskIndex_1_4.png" /> Very High<br />\
    <img src="styles/legend/BushfireRiskIndex_1_5.png" /> <br />' });
var format_FireHistoryNPWS_2 = new ol.format.GeoJSON();
var features_FireHistoryNPWS_2 = format_FireHistoryNPWS_2.readFeatures(json_FireHistoryNPWS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FireHistoryNPWS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FireHistoryNPWS_2.addFeatures(features_FireHistoryNPWS_2);
var lyr_FireHistoryNPWS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FireHistoryNPWS_2, 
                style: style_FireHistoryNPWS_2,
                popuplayertitle: 'Fire History (NPWS)',
                interactive: true,
    title: 'Fire History (NPWS)<br />\
    <img src="styles/legend/FireHistoryNPWS_2_0.png" /> 1957 - 1971<br />\
    <img src="styles/legend/FireHistoryNPWS_2_1.png" /> 1971 - 1984<br />\
    <img src="styles/legend/FireHistoryNPWS_2_2.png" /> 1984 - 1998<br />\
    <img src="styles/legend/FireHistoryNPWS_2_3.png" /> 1998 - 2011<br />\
    <img src="styles/legend/FireHistoryNPWS_2_4.png" /> 2011 - 2025<br />' });
var format_NSWlanduse_3 = new ol.format.GeoJSON();
var features_NSWlanduse_3 = format_NSWlanduse_3.readFeatures(json_NSWlanduse_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NSWlanduse_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NSWlanduse_3.addFeatures(features_NSWlanduse_3);
var lyr_NSWlanduse_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NSWlanduse_3, 
                style: style_NSWlanduse_3,
                popuplayertitle: 'NSW land use ',
                interactive: true,
                title: '<img src="styles/legend/NSWlanduse_3.png" /> NSW land use '
            });

lyr_hillshadensw_0.setVisible(true);lyr_BushfireRiskIndex_1.setVisible(true);lyr_FireHistoryNPWS_2.setVisible(true);lyr_NSWlanduse_3.setVisible(true);
var layersList = [lyr_hillshadensw_0,lyr_BushfireRiskIndex_1,lyr_FireHistoryNPWS_2,lyr_NSWlanduse_3];
lyr_BushfireRiskIndex_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'RISK_CLASS': 'RISK_CLASS', });
lyr_FireHistoryNPWS_2.set('fieldAliases', {'fid': 'fid', 'Label': 'Label', 'AreaHa': 'AreaHa', 'fire_year': 'fire_year', });
lyr_NSWlanduse_3.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_BushfireRiskIndex_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'RISK_CLASS': 'TextEdit', });
lyr_FireHistoryNPWS_2.set('fieldImages', {'fid': 'TextEdit', 'Label': 'TextEdit', 'AreaHa': 'TextEdit', 'fire_year': 'Range', });
lyr_NSWlanduse_3.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_BushfireRiskIndex_1.set('fieldLabels', {'fid': 'no label', 'DN': 'hidden field', 'RISK_CLASS': 'inline label - visible with data', });
lyr_FireHistoryNPWS_2.set('fieldLabels', {'fid': 'no label', 'Label': 'inline label - visible with data', 'AreaHa': 'inline label - visible with data', 'fire_year': 'inline label - visible with data', });
lyr_NSWlanduse_3.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_NSWlanduse_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});