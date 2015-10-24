define('dataAccessor', ['jquery'], function($) {
    return {
        getGameState: function(criteria, onSuccess, onFailure) {
            var url = 'http://youdecideapi.apphb.com/start';
            sendAjaxRequest(url, 'get', onSuccess, onFailure);
        }
    }

    function sendAjaxRequest(url, requestType, onSuccess, onError) {
        $.ajax({
            url: url,
            type: requestType,
            dataType: 'json',
            success: onSuccess,
            error: onError
        });
    }
});