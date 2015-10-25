define('dataAccessor', ['jquery'], function($) {
    return {
        getGameState: function(onSuccess) {

            var gameId = window.location.hash.substring(1, window.location.hash.length);
            //var gameStateBaseEndpoint = 'http://youdecide.local/gamestate';
            var gameStateBaseEndpoint = 'http://youdecideapi.apphb.com/gamestate';
            var gameStateFullEndpoint = gameStateBaseEndpoint + '/' + gameId;

            $.ajax({
                url: gameStateFullEndpoint,
                type: 'get',
                dataType: 'json',
                success: onSuccess
            });
        }
    }
});