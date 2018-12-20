'use strict';

/*global require*/
var createBingBaseMapOptions = require('terriajs/lib/ViewModels/createBingBaseMapOptions');
var BaseMapViewModel = require('terriajs/lib/ViewModels/BaseMapViewModel');
//var WebMapServiceCatalogItem = require('terriajs/lib/Models/WebMapServiceCatalogItem');
var OpenStreetMapCatalogItem = require('terriajs/lib/Models/OpenStreetMapCatalogItem');

var createCustomGlobalBaseMapOptions = function(terria, bingMapsKey) {
    var result = createBingBaseMapOptions(terria, bingMapsKey);

    var positron = new OpenStreetMapCatalogItem(terria);
    positron.name = 'Positron (Light)';
    positron.url = 'https://global.ssl.fastly.net/light_all/';

    // https://cartodb.com/basemaps/ gives two different attribution strings. In any case HTML gets swallowed, so we have to adapt.
    // 1 '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy;
    //   <a href="http://cartodb.com/attributions">CartoDB</a>'
    // 2 Map tiles by <a href="http://cartodb.com/attributions#basemaps">CartoDB</a>, under <a href="https://creativecommons.org/licenses/by/3.0/">
    //   CC BY 3.0</a>. Data by <a href="http://www.openstreetmap.org/">OpenStreetMap</a>, under ODbL.
    positron.attribution = '© OpenStreetMap contributors ODbL, © CartoDB CC-BY 3.0';

    positron.opacity = 1.0;
    positron.subdomains=['cartodb-basemaps-a','cartodb-basemaps-b','cartodb-basemaps-c','cartodb-basemaps-d'];
    result.push(new BaseMapViewModel({
        image: require('../../wwwroot/images/positron.png'),
        catalogItem: positron,
        contrastColor: '#000000'
    }));

    var darkMatter = new OpenStreetMapCatalogItem(terria);
    darkMatter.name = 'Dark Matter';
    darkMatter.url = 'https://global.ssl.fastly.net/dark_all/';

    darkMatter.attribution = '© OpenStreetMap contributors ODbL, © CartoDB CC-BY 3.0';

    darkMatter.opacity = 1.0;
    darkMatter.subdomains=['cartodb-basemaps-a','cartodb-basemaps-b','cartodb-basemaps-c','cartodb-basemaps-d'];
    result.push(new BaseMapViewModel({
        image: require('../../wwwroot/images/dark-matter.png'),
        catalogItem: darkMatter
    }));

    var mapnik = new OpenStreetMapCatalogItem(terria);
    mapnik.name = 'OSM Mapnik';
    mapnik.url = 'https://tiles.wmflabs.org/osm';

    mapnik.attribution = '© OpenStreetMap contributors ODbL';

    mapnik.opacity = 1.0;
    //mapnik.subdomains=['a','b','c'];
    result.push(new BaseMapViewModel({
        image: require('../../wwwroot/images/dark-matter.png'),
        catalogItem: mapnik
    }));

    var toner = new OpenStreetMapCatalogItem(terria);
    toner.name = 'Stamen Toner';
    toner.url = 'https://stamen-tiles.a.ssl.fastly.net/toner';

    toner.attribution = '© OpenStreetMap contributors ODbL, © Stamen Design CC-BY 3.0';

    toner.opacity = 1.0;
    result.push(new BaseMapViewModel({
        image: require('../../wwwroot/images/stamen-tonor.png'),
        catalogItem: toner
    }));

    var terrain = new OpenStreetMapCatalogItem(terria);
    terrain.name = 'Stamen Terrain';
    terrain.url = 'https://stamen-tiles.a.ssl.fastly.net/terrain';

    terrain.attribution = '© OpenStreetMap contributors ODbL, © Stamen Design CC-BY 3.0';

    terrain.opacity = 1.0;
    result.push(new BaseMapViewModel({
        image: require('../../wwwroot/images/stamen-terrain.png'),
        catalogItem: terrain
    }));

    var watercolour = new OpenStreetMapCatalogItem(terria);
    watercolour.name = 'Stamen Watercolour';
    watercolour.url = 'https://stamen-tiles.a.ssl.fastly.net/watercolor';

    watercolour.attribution = '© OpenStreetMap contributors ODbL, © Stamen Design CC-BY 3.0';

    watercolour.opacity = 1.0;
    result.push(new BaseMapViewModel({
        image: require('../../wwwroot/images/dark-matter.png'),
        catalogItem: watercolour
    }));

    return result;
};

module.exports = createCustomGlobalBaseMapOptions;
