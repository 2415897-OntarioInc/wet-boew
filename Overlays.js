 var wet_boew_geomap = {
	// OPTIONAL: note that geomap will provide a default basemap if not specified here.
	/* basemap : {
		title: 'CBMT',
		type: 'wms',
		url: 'http://geogratis.gc.ca/maps/CBMT',
		layers: 'CBMT',
		format: 'image/png',
		version: '1.1.1',
		options: { singleTile: false, ratio: 1.0, projection: 'EPSG:3978', fractionalZoom: true }
	*/
	overlays : [
		{
		    title: 'WMS Demo',
		    type: 'wms',
		    url: 'http://www2.dmsolutions.ca/cgi-bin/mswms_gmap',
		    layers: 'bathymetry,land_fn,park,drain_fn,drainage,prov_bound,fedlimit,rail,road,popplace',		   
		    format: 'image/png',
		    visible: false
		},
		{
		    title: 'KML Demo',
		    caption: 'This is a sample KML file loaded locally by Geomap.',
		    type: 'kml',
		    url: 'data/sample.kml',		   
		    visible: false,
		    attributes: {
		    	name: 'Product Title',
		    	description: 'Description'
		    },
		    style: 'null',
		    strokeColor: '#FF00FF',
		    fillColor: '#FF00FF'
		},
		{
		    title: 'ATOM Demo',
		    caption: 'This is a sample ATOM feed loaded locally by Geomap.',
		    type: 'atom',
		    url: 'data/sample.atom',
		    attributes: {
		    	title: 'Title',
		    	summary: 'About this dataset'
		    },
		    visible: false
		},
		{
			title: 'GeoRSS Demo',
			caption: 'This is a sample GeoRSS feed loaded locally by Geomap.',
			type: 'georss',
			url: 'data/sample.rss',	
			attributes: {
				title: 'Title',
				description: 'Description',
				link: 'More Info'
			},
			visible: false,
			strokeColor: '#000000',
			fillColor: '#999999'
		},
		{
			title: 'JSON (GeoGratis)',
			caption: 'This is a sample dataset loaded from a remote JSON resource, in this case the GeoGratis API.',
			type: 'json',					
			url: 'http://geogratis.gc.ca/api/en/nrcan-rncan/ess-sst',
			params: {
				'alt': 'json',
				'q': 'alluvial'
			},
			visible: false,
			root: 'products',			
			attributes: {
				title: 'Title',
				summary: 'Abstract',				
				author: 'Author'
			},
			strokeColor: '#336600',
			fillColor: '#00CC00'
		},
		{
			title: 'GeoJSON (CartoDB)',
			caption: 'This is a sample dataset loaded from a remote GeoJSON resource, in this case traffic cameras in the city of Ottawa from the CartoDB API.',
			type: 'geojson',					
			url: 'http://stephenott.cartodb.com/api/v2/sql',
			params: {
				'format': 'GeoJSON',
				'q': 'SELECT * FROM traffic_cameras LIMIT 10'
			},
			attributes: {				
				location_desc: 'Location',
				longitude: 'Latitude',
				latitude: 'Longitude',				
				updated_at: 'Last updated'
			},
			visible: true,
			zoom:  true,			
			// default style			
			// style: {
				// type: 'symbol',
				// init: {'pointRadius': '10', 'externalGraphic': '../../OverIcon.png','label': "${Location}",'fontSize': '12px'}, 
				// select: {'pointRadius': '30', 'externalGraphic': '../../OverIcon.png', 'label': "Selected", 'fillOpacity': 0.90}
			// }
		    // unique value style
			// style: {
				// type: 'unique',
				// field: 'Location',
				// init: {'Bayshore & Richmond': {'pointRadius':'25', 'strokeWidth':'20', 'strokeColor': '#800080'},'Baseline & Greenbank': {'pointRadius':'25', 'strokeWidth':'10', 'fillColor': '#800080'}},
				// select: {'pointRadius': 30, 'externalGraphic': '../../OverIcon.png', 'label': "Selected", 'fillOpacity': 0.90} 
			// }
			// rule style
			style: {
				type: 'rule',
				rule: [{
						field: 'Longitude',
						value: [45.36],
						filter: 'LESS_THAN',
						init: {'pointRadius': '15', 'strokeColor': '#800000','fillColor': '#FFFFFF', 'fillOpacity': 0.90}
				},
						{
						field: 'Longitude',
						value: [45.37, 45.42],
						filter: 'BETWEEN',
						init: {'pointRadius': '25', 'strokeColor': '#000000','fillColor': '#222222', 'fillOpacity': 0.90}
				},
						{
						field: 'Longitude',
						value: [45.42],
						filter: 'GREATER_THAN',
						init: {'pointRadius': '10', 'strokeColor': '#800080','fillColor': '#800080'}
				}],
				select: {'pointRadius': '30', 'externalGraphic': '../../OverIcon.png', 'label': "Selected", 'fillOpacity': 0.90}
			}
		}		
	]
};
