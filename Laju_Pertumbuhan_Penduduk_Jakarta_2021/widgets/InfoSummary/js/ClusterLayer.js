// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/array dojo/_base/event dojo/_base/lang dojo/_base/Color dojo/_base/html dojo/DeferredList dojo/dom-class dojo/dom dojox/gfx/fx dojo/on dojo/Evented jimu/utils esri/layers/GraphicsLayer esri/graphic esri/geometry/Extent esri/geometry/Point esri/symbols/PictureMarkerSymbol esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/TextSymbol esri/symbols/Font esri/renderers/SimpleRenderer esri/tasks/query esri/tasks/QueryTask esri/tasks/FeatureSet esri/symbols/jsonUtils esri/renderers/jsonUtils esri/layers/FeatureLayer".split(" "),
function(K,z,L,l,u,A,M,I,N,O,P,Q,E,R,h,S,B,F,p,q,T,U,V,C,G,W,D,H,X){return K("ClusterLayer",[R,Q],{constructor:function(a){this.clusterGraphics=[];this.cancelRequest=!1;this.clusterSize=120;this._singles=[];this._showSingles=!0;this.updateFeatures=void 0;this.hidePanel=a.hidePanel;this._parent=a._parent;this._parentLayer=a.parentLayer;this.layerDefinition=a.layerDefinition;this._parentLayer&&(this.objectIdField=this._parentLayer.objectIdField,this.fields=this._parentLayer.fields);this.name=a.name;
this._map=a.map;this.color=u.fromString(a.color||"#ff0000");this._styleColor=a._styleColor;this.symbolData=a.lyrInfo.symbolData;this.countColor=this.symbolData._highLightColor;this.itemId=a.lyrInfo.itemId;this.refresh=a.lyrInfo.refresh;this.displayFeatureCount=this.symbolData.displayFeatureCount;this.node=a.node;this.countEnabled=a.countEnabled;this.legendNode=a.legendNode;this.id=a.id;this.infoTemplate=a.infoTemplate;this.url=a.lyrInfo.url;this._testRenderer=a.lyrInfo.renderer;(this.originOperLayer=
a.originOperLayer)&&this._getInfoTemplate(this.originOperLayer);this.lyrInfo=a.lyrInfo;this.lyrType=a.lyrType;this.filter=a.filter;this.showAllFeatures=a.showAllFeatures;this.listDisabled=a.listDisabled;this.selfType=a.selfType;this.staticLayers=a.staticLayers;this._setupSymbols();this._setFieldNames();this.countFeatures(this._parentLayer);0<this._parentLayer.refreshInterval&&setInterval(l.hitch(this,this._updateEnd),6E4*this._parentLayer.refreshInterval)},countFeatures:function(a){var b=new C;b.geometry=
this.showAllFeatures?a.fullExtent:this._map.extent;a.queryCount?a.queryCount(b,l.hitch(this,function(c){if(0<c)this.hidePanel||(this.nodeCount=c),this._initFeatures(this._parentLayer);else if(!this.hidePanel)if(this.nodeCount=0,a.url){var d=new X(a.url);P(d,"load",l.hitch(this,function(){this.countFeatures(d)}))}else this._initFeatures(this._parentLayer)})):this._initFeatures(this._parentLayer)},_initFeatures:function(a){this._features=[];var b=!0,c=new C;(-1<this.staticLayers.indexOf(this.lyrType)||
!this.url)&&a.graphics?(this._getSourceFeatures(a.graphics),this.clusterFeatures()):"undefined"!==typeof this.url?this.loadData(this.url):(c.where=!this.showAllFeatures&&this.filter?this.filter:"1\x3d1",c.outFields=["*"],c.returnGeometry=!0,a.queryFeatures?a.queryFeatures(c).then(l.hitch(this,function(d){d.features&&(this._getSourceFeatures(d.features),this.clusterFeatures())})):b="error");"error"!==b&&(this.extentChangeSignal||(this.extentChangeSignal=this._map.on("extent-change",l.hitch(this,this.handleMapExtentChange))),
this.clickSignal||(this.clickSignal=this.on("click",l.hitch(this,this.handleClick))))},_getSourceFeatures:function(a){this._features=[];for(var b=0;b<a.length;b++){var c=a[b];c.geometry&&(this.preFormatDomain(c),this._features.push(c))}},_getInfoTemplate:function(a){a=a.parentLayerInfo?a.parentLayerInfo:a;if(a.controlPopupInfo&&(a=a.controlPopupInfo.infoTemplates)){if(this.url){var b=this.url.split("/").pop();b&&(a.indexOf?-1<a.indexOf(b)&&(this.infoTemplate=a[b].infoTemplate):a.hasOwnProperty(b)&&
(this.infoTemplate=a[b].infoTemplate))}this.setInfoTemplate(this.infoTemplate)}},_setFieldNames:function(){this._fieldNames=[];if(this.infoTemplate&&"undefined"!==typeof this.infoTemplate.info){var a=this.infoTemplate.info.fieldInfos;if(a)for(var b=0;b<a.length;b++)a[b].visible&&this._fieldNames.push(a[b].fieldName)}if(this.symbolData.featureDisplayOptions&&0<this.symbolData.featureDisplayOptions.fields.length)for(a=0;a<this.symbolData.featureDisplayOptions.fields.length;a++)b=this.symbolData.featureDisplayOptions.fields[a],
-1===this._fieldNames.indexOf(b.name)&&this._fieldNames.push(b.name);1>this._fieldNames.length&&(this._fieldNames=["*"])},setLayerInfo:function(a){this.lyrInfo=a},clearSingles:function(a){z.forEach(a||this._singles,function(b){this.remove(b)},this);this._singles.length=0},_getSingleGraphic:function(a){a=new h(new B(a.geometry.x,a.geometry.y,this._map.spatialReference),null,a.attributes);a.setSymbol(this._singleSym);return a},_addSingles:function(a){z.forEach(a,function(b){b=this._getSingleGraphic(b);
this._singles.push(b);this._showSingles&&this.add(b)},this);this._map.infoWindow.setFeatures(this._singles)},initalCount:function(a){if(!this.hidePanel){var b=new C;b.returnGeometry=!1;b.geometry=this.showAllFeatures?null:this._map.extent;b.where=!this.showAllFeatures&&this.filter?this.filter:"1\x3d1";(new G(a)).executeForIds(b).then(l.hitch(this,function(c){if(this.node){I.contains(this.node,"searching")&&I.remove(this.node,"searching");this.node.innerHTML=c?E.localizeNumber(c.length):0;var d=this.node.parentNode}else this.legendNode&&
(d=this.legendNode.previousSibling);this.updateExpand(d,c?!1:!0)}))}},updateExpand:function(a,b){if(!this.hidePanel&&"undefined"!==typeof a){if(-1<a.id.indexOf("rec_")){var c=a.id.replace("rec_","");c=N.byId("exp_"+c)}b?(a&&(A.addClass(a,"recDefault"),A.addClass(a,"inActive")),c&&A.addClass(c,"expandInActive")):this.visible&&(a&&(A.removeClass(a,"recDefault"),A.removeClass(a,"inActive")),c&&A.removeClass(c,"expandInActive"))}},loadData:function(a){if(0<a.length){this.initalCount(a);var b=new C;b.where=
"1\x3d1";this.filter&&(b.where=this.filter);b.returnGeometry=!1;this.queryPending=!0;(new G(a)).executeForIds(b).then(l.hitch(this,function(c){var d=this._parentLayer&&this._parentLayer.maxRecordCount?this._parentLayer.maxRecordCount:1E3;if(c){this.queryIDs=c;c=[];var e;var m=0;for(e=this.queryIDs.length;m<e;m+=d){var r=this.queryIDs.slice(m,m+d),f=new C;f.outFields=["*"];f.objectIds=r;f.returnGeometry=!0;f.outSpatialReference=this._map.spatialReference;r=new G(a);c.push(r.execute(f))}this._features=
[];this.cancelRequest?console.log("Cancelled ClusterLayer 1"):(new M(c)).then(l.hitch(this,function(g){this.queryPending=!1;if(this.cancelRequest)console.log("Cancelled ClusterLayer 2");else if(g){for(var k=this._map.spatialReference,y=[],t=0;t<g.length;t++)if(g[t][1].features)for(var v=0;v<g[t][1].features.length;v++){var n=g[t][1].features[v];if("undefined"!==typeof n.geometry&&null!==n.geometry&&n.geometry){var x=new B(n.geometry.x,n.geometry.y,k);x=new h(x);x.setAttributes(n.attributes);this.infoTemplate&&
x.setInfoTemplate(this.infoTemplate);this.preFormatDomain(x);y.push(x)}}g=!0;1E4>y&&(g=JSON.stringify(this._features)!==JSON.stringify(y));g&&(this.requiresReload=!0,this._features=y,this.clusterFeatures(),this.emit("update-end",{bubbles:!0,cancelable:!0}))}}))}}))}},preFormatDomain:function(a){z.forEach(this.fields,l.hitch(this,function(b){if(b&&b.hasOwnProperty("name")&&this._parent&&a&&a.hasOwnProperty("attributes")&&a.attributes.hasOwnProperty(b.name)){var c=this._parent._checkDomainField(b),
d=this._parent._checkDomainAndSubtype(this.layerDefinition,b.name,a.attributes,{layerObject:this._parentLayer});if(c||d)a.attributes[b.name]=this._parent.formatDomainValue(a.attributes[b.name],c,d)}}))},handleClick:function(a){var b=[];if(a.graphic&&(b=a.graphic,b.attributes)){var c=b.attributes;c.Data&&1<c.Data.length?(this.clearSingles(this._singles),b=c.Data,a.stopPropagation(),this._addSingles(b)):c.Data&&1===c.Data.length?(c.Data[0].symbol=b.symbol,this._map.infoWindow.setFeatures([c.Data[0]])):
this._map.infoWindow.setFeatures([b])}this.infoTemplate&&this._map.infoWindow.show(a.mapPoint);L.stop(a)},handleMapExtentChange:function(a){if(a.levelChange)this.clusterFeatures();else if(a.delta){a=a.delta;var b=Math.abs(a.y);(50<Math.abs(a.x)||50<b)&&this.clusterFeatures()}},refreshFeatures:function(a){if(this.itemId){var b=a.featureSet.features;a.featureSet.transform&&(b=(new W(a.featureSet)).features);"undefined"===typeof this.updateFeatures&&(this.updateFeatures=b);a=!0;1E4>b.length&&(a=JSON.stringify(this.updateFeatures)!==
JSON.stringify(b));if(a){this.requiresReload=!0;this._features=[];this._parentLayer.clear();a=this._parentLayer.spatialReference;for(var c=0;c<b.length;c++){var d=b[c];if(d.geometry){var e=new h(this.getGraphicOptions(d,a));e.setAttributes(d.attributes);this.infoTemplate&&e.setInfoTemplate(this.infoTemplate);this.preFormatDomain(e);this._parentLayer.add(e);this._features.push(e)}else console.log("Null geometry skipped")}this.clusterFeatures()}this.updateFeatures=b}else this.url&&this.loadData(this.url)},
getGraphicOptions:function(a,b){return"undefined"!==typeof a.geometry.rings?{geometry:{rings:a.geometry.rings,spatialReference:{wkid:b.wkid}}}:"undefined"!==typeof a.geometry.paths?{geometry:{paths:a.geometry.paths,spatialReference:{wkid:b.wkid}}}:"undefined"!==typeof a.geometry.points?{geometry:{points:a.geometry.points,spatialReference:{wkid:b.wkid}}}:{geometry:new B(a.geometry.x,a.geometry.y,a.geometry.spatialReference)}},flashFeatures:function(){this._map.graphics.clear();this.flashGraphics(this.graphics)},
flashSingle:function(a){if("undefined"===typeof a.symbol){var b=new q(q.STYLE_NULL,new u(0,0,0,0),0),c=this.color.toRgb();a.setSymbol(new p(p.STYLE_CIRCLE,9,b,new u([c[0],c[1],c[2],.5])))}this.flashGraphics([a])},flashGraphics:function(a){for(var b=0;b<a.length;b++)this._flashFeature(a[b]);setTimeout(l.hitch(this,this._clearFeatures),1100)},_flashFeature:function(a){if(a.geometry){var b=u.fromHex(this._styleColor),c=l.clone(b);c.a=.4;var d=this._getSymbolSize(a);b=new p(p.STYLE_CIRCLE,d,new q(q.STYLE_SOLID,
b,1),c);a=new h(a.geometry,b);this._map.graphics.add(a);if(b=a.getDojoShape())O.animateStroke({shape:b,duration:700,color:{start:b.strokeStyle.color,end:b.strokeStyle.color},width:{start:18,end:0}}).play(),setTimeout(this._clearFeature,850,a)}},_getSymbolSize:function(a){var b=a.getSourceLayer?a.getSourceLayer():void 0;return a.symbol&&a.symbol.size?a.symbol.size:b&&b.renderer&&b.renderer.symbol&&b.renderer.symbol.size?b.renderer.symbol.size:16},_clearFeatures:function(){this._map.graphics.clear()},
_clearFeature:function(a){a.getLayer().remove(a)},setColor:function(a){this.color=a},setStyleColor:function(a){this._styleColor=a},cancelPendingRequests:function(){console.log("Cancel Query...");this.queryPending&&(this.cancelRequest=!0);this.removeEventListeners()},removeEventListeners:function(){this.extentChangeSignal&&(this.extentChangeSignal.remove(),this.extentChangeSignal=null);this.clickSignal&&(this.clickSignal.remove(),this.clickSignal=null)},isLayerClusterEnabled:function(a){var b=!1;z.some(this._parent.config.layerInfos,
l.hitch(this,function(c){if(a===c.layer+this._parent.UNIQUE_APPEND_VAL_CL&&c.symbolData.clusteringEnabled)return b=!0}));return b},clusterFeatures:function(){var a=!0;this.clear();null===this._map&&(this._map=this._parent.map);this._map.infoWindow.isShowing&&(z.some(this._map.infoWindow.features,l.hitch(this,function(J){if(J._layer&&this.isLayerClusterEnabled(J._layer.id))return a=!1,!0})),!a&&this._parent.isOpen?this._map.infoWindow.hide():this._parent.config.hasOwnProperty("displayClusterLayer")&&
!0===this._parent.config.displayClusterLayer&&!a&&this._map.infoWindow.hide());var b=this._features,c=0;if("undefined"!==typeof b){if(0<b.length&&(this.visible||this.requiresReload)){var d=this.clusterSize;this.clusterGraphics=[];var e=this._map.spatialReference,m=this._map.extent,r=new B(m.xmin,m.ymax,e),f=Math.ceil(this._map.height/d),g=Math.ceil(this._map.width/d),k=m.getWidth()/this._map.width*d;d*=m.getHeight()/this._map.height;for(m=0;m<f;m++)for(var y=0;y<g;y++){var t=r.x+k*y,v=r.y-d*m;v=new S(t,
v-d,t+k,v,e);t=[];for(var n in b){var x=b[n];v.contains(x.geometry)&&(c+=1,t.push(x))}0<t.length&&(v=this.getClusterCenter(t),this.clusterGraphics.push({center:v,graphics:t}))}for(var Y in this.clusterGraphics){e=this.clusterGraphics[Y];r=e.graphics.length;f=e.graphics;n=E.localizeNumber(r);k=g=19*n.length;g+=5;d=new U;d.family="Arial";d.size="16px";n=new T(n,d,this.countColor);n.setOffset(0,-4);if(this.symbolData&&this.symbolData.symbol)if(this.symbolData.symbol.size)var w=this.symbolData.symbol.size;
else this.symbolData.symbol.width&&(w=this.symbolData.symbol.width,d=this.symbolData.symbol.height,w=w>=d?w:d);else this.icon.width?(g=this.icon.width>=g?this.icon.width+5:g,g=this.icon.height>=g?this.icon.height+5:g,k=this.icon.width>=k?this.icon.width+1:k,k=this.icon.height>=k?this.icon.height+1:k):this.icon.size&&(w=this.icon.size);w&&(g=w>=g?w+5:g,k=w>=k?w+1:k);k>=g&&(g+=0===k-g?4:k-g+5);this._setSymbols(g+15,g);f={Count:r,Data:f};1<r?"undefined"!==typeof this.symbolData?"CustomSymbol"!==this.symbolData.symbolType?
(this.add(new h(e.center,this.csym,f)),this.displayFeatureCount?this.add(new h(e.center,n,f)):this.add(new h(e.center,this.csym3,f))):(this.add(new h(e.center,this.csym,f)),this.displayFeatureCount?this.add(new h(e.center,n,f)):this.add(new h(e.center,this.psym,f))):(this.add(new h(e.center,this.csym,f)),this.displayFeatureCount?this.add(new h(e.center,n,f)):this.add(new h(e.center,this.psym,f))):(e=e.graphics[0].geometry,this.renderer&&(e=(this.renderer.hasOwnProperty("getSymbol")||this.renderer.hasOwnProperty("symbol"))&&
"LayerSymbol"===this.symbolData.symbolType?new h(e,null,f.Data[0].attributes,this.infoTemplate):"EsriSymbol"===this.symbolData.symbolType?new h(e,D.fromJson(this.symbolData.symbol),f,this.infoTemplate):"LayerSymbol"!==this.symbolData.symbolType?new h(e,this.psym,f,this.infoTemplate):this.renderer.symbol?new h(e,null,f,this.infoTemplate):new h(e,this.psym,f,this.infoTemplate),"undefined"!==typeof e&&this.add(e)))}}this._updateNode(this.showAllFeatures?b.length:c)}},_updateNode:function(a){if(!this.hidePanel){if(this.node){this.node.innerHTML=
E.localizeNumber(a?a:0);var b=this.node.parentNode}else this.legendNode&&(b=this.legendNode.previousSibling);this.updateExpand(b,a&&0<a&&this.visible?!1:!0)}},_setSymbols:function(a,b){var c=this.color.toRgb();if("undefined"!==typeof this.symbolData){if("custom"===this.backgroundClusterSymbol)var d=c;else{var e=D.fromJson(this.backgroundClusterSymbol);if(0===e.outline.color.a||0===e.outline.width){var m=q.STYLE_NULL;var r=0}else m=q.STYLE_SOLID,r=e.outline.width}e?(c=q(m,e.outline.color,r),d=e.color.toRgb(),
this.csym=new p(p.STYLE_CIRCLE,a,c,new u([d[0],d[1],d[2],.75]))):this.csym=new p(p.STYLE_CIRCLE,a,null,new u([d[0],d[1],d[2],.75]));(a=this.symbolData.s)&&-1<a.indexOf("${appPath}")?(a=window.location.pathname.replace("index.html",""),a=this.symbolData.s.replace("${appPath}",window.location.origin+a)):a=this.symbolData.s?this.symbolData.s:this.icon.imageData;if(a&&"CustomIcon"===this.symbolData.iconType){if(this.symbolData.symbol&&this.symbolData.symbol.height)var f=this.symbolData.symbol.height;
if(this.symbolData.symbol&&this.symbolData.symbol.width)var g=this.symbolData.symbol.width;f&&g?g=f=g>f?g:f:(f=this.symbolData.icon.height?this.symbolData.icon.height:b,g=this.symbolData.icon.width?this.symbolData.icon.width:b);this.psym=new F(a,f,g)}else a&&"LayerIcon"===this.symbolData.iconType?this.psym=D.fromJson(this.symbolData.symbol):"esriPMS"===this.icon.type?this.psym=this.icon:(b=q(this.icon.outline.style,this.icon.outline.color,this.icon.outline.width),this.psym=new p(this.icon.style,this.icon.size,
b,this.icon.color));this.csym2=l.clone(this.psym);this.csym3=l.clone(this.csym2);"undefined"!==typeof this.csym2.xoffset&&(this.csym3.xoffset=0);"undefined"!==typeof this.csym2.yoffset&&(this.csym3.yoffset=0)}else f=new q(q.STYLE_NULL,new u(0,0,0,0),0),this.csym=new p(p.STYLE_CIRCLE,a,f,new u([c[0],c[1],c[2],.5])),this.psym=new F(this.icon.url,a-10,a-10),this.psym2=new F(this.icon.url,b-7,b-7),f=new q(q.STYLE_NULL,new u(0,0,0,0),0),this.csym2=new p(p.STYLE_CIRCLE,b,f,new u([c[0],c[1],c[2],.5]))},
_setupSymbols:function(){if("undefined"!==typeof this.symbolData){this.countColor=this.symbolData._highLightColor;this.backgroundClusterSymbol=this.symbolData.clusterSymbol;this.icon=this.symbolData.icon;"LayerSymbol"===this.symbolData.symbolType?this._parentLayer.renderer?this.renderer=this._parentLayer.renderer.toJson?this._parentLayer.renderer:H.fromJson(this._parentLayer.renderer):this._testRenderer?this.renderer=H.fromJson(this._testRenderer):this.symbolData.renderer&&(this.renderer=this.symbolData.renderer.toJson?
this.symbolData.renderer:H.fromJson(this.symbolData.renderer)):this.renderer=new V(D.fromJson(this.symbolData.symbol));var a=this.color.toRgb(),b=new q(q.STYLE_NULL,new u(0,0,0,0),0);this._singleSym=new p(p.STYLE_CIRCLE,9,b,new u([a[0],a[1],a[2],.5]))}},getLayer:function(){return this},getClusterCenter:function(a){var b=0,c=0,d=a.length;z.forEach(a,function(e){b+=e.geometry.x;c+=e.geometry.y},this);return new B(b/d,c/d,a[0].geometry.spatialReference)},destroy:function(){this._clear();this.removeEventListeners()},
_clear:function(){this.clear();this._features=[]},_updateEnd:function(){this.url&&this.loadData(this.url)}})});