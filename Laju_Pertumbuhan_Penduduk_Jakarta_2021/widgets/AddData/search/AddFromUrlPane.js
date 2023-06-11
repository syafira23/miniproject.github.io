// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/AddData/search/templates/AddFromUrlPane.html":'\x3cdiv class\x3d"secondary-pane add-url-pane"\x3e\r\n  \x3cdiv class\x3d"add-url-pane-container"\x3e\r\n    \x3cdiv class\x3d"add-url-pane-container--inner"\x3e\r\n      \x3clabel for\x3d"${id}_select"\x3e${i18n.addFromUrl.type}\x3c/label\x3e\r\n      \x3cselect id\x3d"${id}_select"\r\n        data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"typeSelect"\x3e\r\n        \x3coption value\x3d"ArcGIS" selected\x3d"selected"\x3e${i18n.addFromUrl.types.ArcGIS}\x3c/option\x3e\r\n        \x3coption value\x3d"WMS"\x3e${i18n.addFromUrl.types.WMS}\x3c/option\x3e\r\n        \x3coption value\x3d"WMTS"\x3e${i18n.addFromUrl.types.WMTS}\x3c/option\x3e\r\n        \x3coption value\x3d"WFS"\x3e${i18n.addFromUrl.types.WFS}\x3c/option\x3e\r\n        \x3coption value\x3d"KML"\x3e${i18n.addFromUrl.types.KML}\x3c/option\x3e\r\n        \x3coption value\x3d"GeoRSS"\x3e${i18n.addFromUrl.types.GeoRSS}\x3c/option\x3e\r\n        \x3coption value\x3d"CSV"\x3e${i18n.addFromUrl.types.CSV}\x3c/option\x3e\r\n      \x3c/select\x3e\r\n      \x3clabel for\x3d"${id}_url"\x3e${i18n.addFromUrl.url}\x3c/label\x3e\r\n      \x3cinput id\x3d"${id}_url" type\x3d"text" class\x3d"url-textbox jimu-input"\r\n          data-dojo-attach-point\x3d"urlTextBox"\r\n          data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n          data-dojo-props\x3d"\r\n            regExp: \'^(http|https):\\/\\/[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$\'\r\n          "/\x3e\r\n      \x3cdiv class\x3d"action-bar"\x3e\r\n        \x3ca class\x3d"jimu-float-leading" href\x3d"javascript:void(0)"\r\n          data-dojo-attach-point\x3d"examplesExpander"\r\n          data-dojo-attach-event\x3d"onClick: examplesExpanderClicked"\r\n          \x3e${i18n.addFromUrl.samplesHint}\x3c/a\x3e\r\n        \x3ca class\x3d"jimu-btn"\r\n          href\x3d"javascript:void(0)"\r\n          data-dojo-attach-point\x3d"addButton"\r\n          data-dojo-attach-event\x3d"onClick: addClicked"\r\n          \x3e${i18n.search.item.actions.add}\r\n        \x3c/a\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"examples" data-dojo-attach-point\x3d"examplesNode"\x3e\r\n        \x3cdiv data-examples-type\x3d"ArcGIS"\x3e\r\n          \x3cdiv\x3ehttp://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Cities/FeatureServer/0\x3c/div\x3e\r\n          \x3cdiv\x3ehttp://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Tapestry/MapServer\x3c/div\x3e\r\n          \x3cdiv\x3ehttp://imagery.arcgisonline.com/ArcGIS/rest/services/LandsatGLS/VegetationAnalysis/ImageServer\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-examples-type\x3d"WMS"\x3e\r\n          \x3cdiv\x3ehttp://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi?service\x3dWMS\x26amp;request\x3dGetCapabilities\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-examples-type\x3d"WMTS"\x3e\r\n          \x3cdiv\x3ehttps://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-examples-type\x3d"WFS"\x3e\r\n          \x3cdiv\x3ehttps://dservices.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/services/JapanPrefectures2018/WFSServer\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-examples-type\x3d"KML"\x3e\r\n          \x3cdiv\x3ehttp://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month_age_animated.kml\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-examples-type\x3d"GeoRSS"\x3e\r\n          \x3cdiv\x3ehttp://www.gdacs.org/xml/rss.xml\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-examples-type\x3d"CSV"\x3e\r\n          \x3cdiv\x3ehttp://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.csv\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/on dojo/keys dojo/Deferred dojo/promise/all dojo/dom-class dojo/window dijit/Viewport dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/AddFromUrlPane.html dojo/i18n!../nls/strings ./LayerLoader ./util esri/layers/ArcGISDynamicMapServiceLayer esri/layers/ArcGISImageServiceLayer esri/layers/ArcGISTiledMapServiceLayer esri/layers/CSVLayer esri/layers/FeatureLayer esri/layers/GeoRSSLayer esri/layers/ImageParameters esri/layers/KMLLayer esri/layers/RasterXLayer esri/layers/StreamLayer esri/layers/VectorTileLayer esri/layers/WMSLayer esri/layers/WMTSLayer esri/InfoTemplate jimu/dijit/Message dijit/form/Select dijit/form/ValidationTextBox".split(" "),
function(D,A,q,t,E,F,G,m,H,I,J,K,L,M,p,N,B,O,P,C,Q,v,R,S,T,U,V,w,W,X,x,Y){return D([J,K,L],{i18n:p,templateString:M,wabWidget:null,_dfd:null,postCreate:function(){this.inherited(arguments);this._updateExamples("ArcGIS");this.urlTextBox.set("invalidMessage",p.addFromUrl.invalidURL);var a=this;this.own(t(this.urlTextBox,"keyup",function(c){c.keyCode===E.ENTER?a.addClicked():m.contains(a.addButton,"disabled")||a._setStatus("")}));this.own(t(this.urlTextBox,"focus",function(){try{a.urlTextBox.select()}catch(c){}}));
this.own(t(this.typeSelect,"change",function(c){a._updateExamples(c)}));this.own(t(this.typeSelect.dropDown,"open",function(){var c=this.domNode.parentElement;c&&m.add(c,"add-data-widget-popup")}));this.own(I.on("resize",a.resize()))},destroy:function(){this.inherited(arguments)},addClicked:function(){var a=this,c=!1,d=this.addButton;if(!m.contains(d,"disabled")){var e=this.typeSelect.get("value"),k=A.trim(this.urlTextBox.value);0<k.length&&k&&(c=!0);c&&(m.add(d,"disabled"),a._setStatus(p.search.item.messages.adding),
c=new F,this._handleAdd(c,this.wabWidget.map,e,k),c.then(function(b){b?a._setStatus(""):a._setStatus(p.search.item.messages.addFailed);m.remove(d,"disabled")}).otherwise(function(b){"string"===typeof b&&"Unsupported"===b?(a._setStatus(p.search.item.messages.unsupported),m.remove(d,"disabled")):(console.warn("Add layer failed."),console.warn(b),a._setStatus(p.search.item.messages.addFailed),m.remove(d,"disabled"),b&&"string"===typeof b.message&&0<b.message.length&&(a._setStatus(b.message),console.log("")))}))}},
examplesExpanderClicked:function(){m.toggle(this.examplesNode,"show")},preHide:function(){},resize:function(){var a=H.getBox(this.ownerDocument);a&&"undefined"!==typeof a.w&&(600<a.w?m.add(this.urlTextBox,"url-textbox-wide"):m.remove(this.urlTextBox,"url-textbox-wide"))},_handleAdd:function(a,c,d,e){e=B.checkMixedContent(e);var k=e.toLowerCase(),b=new N,h=b._generateLayerId(),n=this,f=null;"ArcGIS"===d?0<k.indexOf("/featureserver")||0<k.indexOf("/mapserver")||0<k.indexOf("/imageserver")?b._readRestInfo(e).then(function(g){if(!g||
"string"!==typeof g.type||"Feature Layer"!==g.type&&"Table"!==g.type)if(0<k.indexOf("/featureserver")){var y=[];q.forEach(g.layers,function(l){l=new v(e+"/"+l.id,{id:b._generateLayerId(),outFields:["*"],infoTemplate:new x});y.push(b._waitForLayer(l))});q.forEach(g.tables,function(l){l=new v(e+"/"+l.id,{id:b._generateLayerId(),outFields:["*"]});y.push(b._waitForLayer(l))});G(y).then(function(l){var u=[];q.forEach(l,function(r){u.push(r)});u.reverse();q.forEach(u,function(r){b._setFeatureLayerInfoTemplate(r);
r.xtnAddData=!0;c.addLayer(r)});a.resolve(u)}).otherwise(function(l){a.reject(l)})}else if(0<k.indexOf("/mapserver")){if(g.tileInfo)f=new C(e,{id:h});else{var z={id:h};g&&g.supportedImageFormatTypes&&-1!==g.supportedImageFormatTypes.indexOf("PNG32")&&(z.imageParameters=new S,z.imageParameters.format="png32");f=new O(e,z)}n._waitThenAdd(a,c,d,b,f)}else 0<k.indexOf("/imageserver")&&(f=g&&g.tileInfo&&g.singleFusedMapCache?"Raster"===g.cacheType?new U(e,{id:h}):new C(e,{id:h}):new P(e,{id:h}),n._waitThenAdd(a,
c,d,b,f));else f=new v(e,{id:h,outFields:["*"],infoTemplate:new x}),n._waitThenAdd(a,c,d,b,f)}).otherwise(function(g){a.reject(g)}):0<k.indexOf("/vectortileserver")||0<k.indexOf("/resources/styles/root.json")?w&&w.supported()?b._checkVectorTileUrl(e,{}).then(function(g){f=new w(g,{id:h});n._waitThenAdd(a,c,d,b,f)}).otherwise(function(g){a.reject(g)}):a.reject("Unsupported"):0<k.indexOf("/streamserver")?(f=new V(e,{id:h,purgeOptions:{displayCount:1E4},infoTemplate:new x}),this._waitThenAdd(a,c,d,b,
f)):a.reject("Unsupported"):"WMS"===d?(f=new W(e,{id:h}),this._waitThenAdd(a,c,d,b,f)):"WMTS"===d?(f=new X(e,{id:h}),this._waitThenAdd(a,c,d,b,f)):"WFS"===d?B.loadWFSByUrl(a,c,b,e,h,!0):"KML"===d?(f=new T(e,{id:h}),this._waitThenAdd(a,c,d,b,f)):"GeoRSS"===d?(f=new R(e,{id:h}),this._waitThenAdd(a,c,d,b,f)):"CSV"===d&&(f=new Q(e,{id:h}),f.setInfoTemplate(b._newInfoTemplate()),this._waitThenAdd(a,c,d,b,f))},_persist:function(){try{var a=this.typeSelect.get("value"),c=A.trim(this.urlTextBox.value);this.wabWidget.xtnAddFromUrlPane=
{type:a,url:c}}catch(d){}},_restore:function(){try{var a=this.wabWidget.xtnAddFromUrlPane;a&&"string"===typeof a.type&&0<a.type.length&&this.typeSelect.set("value",a.type);a&&"string"===typeof a.url&&0<a.url.length&&(this.urlTextBox.value=a.url)}catch(c){}},_setStatus:function(a){this.wabWidget&&this.wabWidget._setStatus(a)},_showLayers:function(){this.wabWidget&&this.wabWidget.showLayers()},_updateExamples:function(a){q.forEach(this.examplesNode.children,function(c){var d=c.getAttribute("data-examples-type");
"string"===typeof d&&0<d.length&&(c.style.display=d===a?"":"none")})},_waitThenAdd:function(a,c,d,e,k){e._waitForLayer(k).then(function(b){"WMS"===d?e._setWMSVisibleLayers(b):b&&"esri.layers.ArcGISDynamicMapServiceLayer"===b.declaredClass?e._setDynamicLayerInfoTemplates(b):b&&"esri.layers.FeatureLayer"===b.declaredClass?e._setFeatureLayerInfoTemplate(b):b&&"esri.layers.CSVLayer"===b.declaredClass&&e._setFeatureLayerInfoTemplate(b);b.xtnAddData=!0;if("KML"===d){var h=c.spatialReference,n=b._outSR;
h&&n&&(h.equals(n)||h.isWebMercator()&&4326===n.wkid||n.isWebMercator()&&4326===h.wkid)?c.addLayer(b):new Y({titleLabel:p._widgetLabel,message:p.addFromFile.kmlProjectionMismatch})}else c.addLayer(b);a.resolve(b)}).otherwise(function(b){a.reject(b)})}})});