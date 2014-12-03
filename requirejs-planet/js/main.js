require.config({
    //By default load any module IDs from js/
    baseUrl: 'js',
    //define key lib locations
    paths: {
        jquery: 'http://code.jquery.com/jquery-1.11.0.min',
        roundAbout: 'libs/jquery.roundabout.min',
        fancyBox: 'libs/jquery.fancybox', 
        domReady: 'libs/domReady'
        
    },
    shim: {
        'fancyBox': ['jquery'],
        'roundAbout': ['jquery']
    },
    waitSeconds: 15,
    //map jquery loading to internal/no-conflict cache method
    map: {
        '*': {
            'jquery': 'jquery-nc'
        },
        'jquery-nc': {
            'jquery': 'jquery'
        }
    }
});

// loader to prevent jquery from trouncing on-page jquery
define('jquery-nc', ['jquery'], function($) {
    return $.noConflict(true);
});

// cobrand init
require(['modules/carousel','domReady!'], function() {});

require(['jquery','domReady!'], function($) {

    $('#single_1').click( function(){
        event.preventDefault();
        require(['modules/lightbox'], function() {});
    })
});