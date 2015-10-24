define('gameStateViewModel', ['dataAccessor'], function (dataAccessor) {
    
    var getGameState = function() {
        dataAccessor.getGameState(
            function(data) {
                state.Options = data.gameOptions;
                state.HasOptions = true;
            }
        )
    };

    var state = {
        Options: [],
        HasOptions: false,
        GameState: ""
    };
    
    getGameState();
    
    return state;

});