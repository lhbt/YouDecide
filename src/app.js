require.config({
    baseUrl: '../',
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        jquery: 'bower_components/jquery/dist/jquery.min',
        sightglass: 'bower_components/sightglass/index',
        gameStateViewModel: 'src/view-models/GameStateViewModel',
        dataAccessor: 'src/lib/DataAccessor',
        rivets: 'bower_components/rivets/dist/rivets.min',
        watch: 'bower_components/Watch.JS/src/watch.min',
        json: 'bower_components/requirejs-plugins/src/json',
        text: 'bower_components/requirejs-plugins/lib/text'
    },
    shim: {
        sightglass: {
            exports: 'sightglass'
        },
        rivets: {
            deps: ['sightglass'],
            exports: 'rivets'
        }
    }
});

require([
    'jquery',
    'rivets', 
    'watch',
    'gameStateViewModel'], 
  function ($, rivets, watch, gameStateViewModel) {
    
    rivets.adapters[':'] = {
        observe: function (obj, keypath, callback) {
            watch.watch(obj, keypath, callback);
        },
        unobserve: function (obj, keypath, callback) {
            watch.unwatch(obj, keypath, callback);
        },
        get: function (obj, keypath) {
            return obj[keypath];
        },
        set: function (obj, keypath, value) {
            obj['Set' + keypath](value);
        }
    };

    rivets.binders.src = function(el, value) {
        el.src = value;
    };

    rivets.bind($("#leContainer"), { viewModel: gameStateViewModel });
});