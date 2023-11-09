var wms_layers = [];

var format_ServiceAreaRoads_NA_0 = new ol.format.GeoJSON();
var features_ServiceAreaRoads_NA_0 = format_ServiceAreaRoads_NA_0.readFeatures(json_ServiceAreaRoads_NA_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceAreaRoads_NA_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceAreaRoads_NA_0.addFeatures(features_ServiceAreaRoads_NA_0);
var lyr_ServiceAreaRoads_NA_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ServiceAreaRoads_NA_0, 
                style: style_ServiceAreaRoads_NA_0,
                interactive: true,
                title: '<img src="styles/legend/ServiceAreaRoads_NA_0.png" /> Service Area — Roads_NA'
            });
var format_ServiceAreaND_20_Roads_NA_SAI_1 = new ol.format.GeoJSON();
var features_ServiceAreaND_20_Roads_NA_SAI_1 = format_ServiceAreaND_20_Roads_NA_SAI_1.readFeatures(json_ServiceAreaND_20_Roads_NA_SAI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceAreaND_20_Roads_NA_SAI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceAreaND_20_Roads_NA_SAI_1.addFeatures(features_ServiceAreaND_20_Roads_NA_SAI_1);
var lyr_ServiceAreaND_20_Roads_NA_SAI_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ServiceAreaND_20_Roads_NA_SAI_1, 
                style: style_ServiceAreaND_20_Roads_NA_SAI_1,
                interactive: true,
                title: '<img src="styles/legend/ServiceAreaND_20_Roads_NA_SAI_1.png" /> Service Area — ND_20_Roads_NA_SAI'
            });
var format_ServiceAreaND_20_DirtyAreas_2 = new ol.format.GeoJSON();
var features_ServiceAreaND_20_DirtyAreas_2 = format_ServiceAreaND_20_DirtyAreas_2.readFeatures(json_ServiceAreaND_20_DirtyAreas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceAreaND_20_DirtyAreas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceAreaND_20_DirtyAreas_2.addFeatures(features_ServiceAreaND_20_DirtyAreas_2);
var lyr_ServiceAreaND_20_DirtyAreas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ServiceAreaND_20_DirtyAreas_2, 
                style: style_ServiceAreaND_20_DirtyAreas_2,
                interactive: true,
                title: '<img src="styles/legend/ServiceAreaND_20_DirtyAreas_2.png" /> Service Area — ND_20_DirtyAreas'
            });
var format_ServiceAreaKeputih_Dataset_ND_Junctions_3 = new ol.format.GeoJSON();
var features_ServiceAreaKeputih_Dataset_ND_Junctions_3 = format_ServiceAreaKeputih_Dataset_ND_Junctions_3.readFeatures(json_ServiceAreaKeputih_Dataset_ND_Junctions_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceAreaKeputih_Dataset_ND_Junctions_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceAreaKeputih_Dataset_ND_Junctions_3.addFeatures(features_ServiceAreaKeputih_Dataset_ND_Junctions_3);
var lyr_ServiceAreaKeputih_Dataset_ND_Junctions_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ServiceAreaKeputih_Dataset_ND_Junctions_3, 
                style: style_ServiceAreaKeputih_Dataset_ND_Junctions_3,
                interactive: true,
                title: '<img src="styles/legend/ServiceAreaKeputih_Dataset_ND_Junctions_3.png" /> Service Area — Keputih_Dataset_ND_Junctions'
            });

lyr_ServiceAreaRoads_NA_0.setVisible(true);lyr_ServiceAreaND_20_Roads_NA_SAI_1.setVisible(true);lyr_ServiceAreaND_20_DirtyAreas_2.setVisible(true);lyr_ServiceAreaKeputih_Dataset_ND_Junctions_3.setVisible(true);
var layersList = [lyr_ServiceAreaRoads_NA_0,lyr_ServiceAreaND_20_Roads_NA_SAI_1,lyr_ServiceAreaND_20_DirtyAreas_2,lyr_ServiceAreaKeputih_Dataset_ND_Junctions_3];
lyr_ServiceAreaRoads_NA_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', 'Shape_Length': 'Shape_Length', });
lyr_ServiceAreaND_20_Roads_NA_SAI_1.set('fieldAliases', {'OID': 'OID', 'SourceOID': 'SourceOID', 'TS1': 'TS1', 'TS2': 'TS2', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_ServiceAreaND_20_DirtyAreas_2.set('fieldAliases', {'ObjectID': 'ObjectID', 'IsRetired': 'IsRetired', 'DirtyArea_Length': 'DirtyArea_Length', 'DirtyArea_Area': 'DirtyArea_Area', });
lyr_ServiceAreaKeputih_Dataset_ND_Junctions_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr_ServiceAreaRoads_NA_0.set('fieldImages', {'OBJECTID': '', 'osm_id': '', 'name': '', 'highway': '', 'waterway': '', 'aerialway': '', 'barrier': '', 'man_made': '', 'railway': '', 'z_order': '', 'other_tags': '', 'Shape_Length': '', });
lyr_ServiceAreaND_20_Roads_NA_SAI_1.set('fieldImages', {'OID': '', 'SourceOID': '', 'TS1': '', 'TS2': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_ServiceAreaND_20_DirtyAreas_2.set('fieldImages', {'ObjectID': '', 'IsRetired': '', 'DirtyArea_Length': '', 'DirtyArea_Area': '', });
lyr_ServiceAreaKeputih_Dataset_ND_Junctions_3.set('fieldImages', {'OBJECTID': 'TextEdit', });
lyr_ServiceAreaRoads_NA_0.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'name': 'inline label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', 'Shape_Length': 'inline label', });
lyr_ServiceAreaND_20_Roads_NA_SAI_1.set('fieldLabels', {'OID': 'no label', 'SourceOID': 'no label', 'TS1': 'no label', 'TS2': 'no label', 'Shape_Length': 'inline label', 'Shape_Area': 'inline label', });
lyr_ServiceAreaND_20_DirtyAreas_2.set('fieldLabels', {'ObjectID': 'no label', 'IsRetired': 'no label', 'DirtyArea_Length': 'no label', 'DirtyArea_Area': 'no label', });
lyr_ServiceAreaKeputih_Dataset_ND_Junctions_3.set('fieldLabels', {'OBJECTID': 'inline label', });
lyr_ServiceAreaKeputih_Dataset_ND_Junctions_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});