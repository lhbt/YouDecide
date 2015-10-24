define('gameStateViewModel', ['dataAccessor'], function (dataAccessor) {
    
    var getGameState = function() {
        dataAccessor.getGameState(
            function(data) {
                state.Options = data.gameOptions;
                state.History = data.history;
                state.HasOptions = true;
            }
        )
    };

    var state = {
        Options: [],
        HasOptions: false,
        History: ""
    };
    
    var timer = setInterval(getGameState, 1000);

    return state;

});