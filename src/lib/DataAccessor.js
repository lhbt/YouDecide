define('dataAccessor', ['jquery'], function($) {
    return {
        getGameState: function(onSuccess) {
            $.ajax({
                url: 'http://youdecideapi.apphb.com/gamestate',
                type: 'get',
                dataType: 'json',
                success: onSuccess
            });
        }
    }
});