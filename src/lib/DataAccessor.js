define('dataAccessor', ['jquery'], function($) {
    return {
        getGameState: function(onSuccess, onFailure) {
            $.ajax({
                url: 'http://youdecideapi.apphb.com/gamestate',
                type: 'get',
                dataType: 'json',
                success: onSuccess,
                error: onFailure
            });
        }
    }
});