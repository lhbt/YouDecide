define('dataAccessor', ['jquery'], function($) {
    return {
        getGameState: function(onSuccess) {
            $.ajax({
                url: 'http://youdecideapi.apphb.com/gamestate',
                //url: 'http://youdecide.local//gamestate',
                type: 'get',
                dataType: 'json',
                success: onSuccess
            });
        }
    }
});