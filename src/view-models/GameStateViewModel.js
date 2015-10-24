define('gameStateViewModel', ['dataAccessor'], function (dataAccessor) {
    
    var getGameState = function() {
        dataAccessor.getGameState(
            function(data) {
                state.Options = data.GameOptions;
                state.History = data.History;
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