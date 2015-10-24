define('gameStateViewModel', ['dataAccessor'], function (dataAccessor) {
    
    var getGameState = function() {
        dataAccessor.getGameState(
            function(data) {
                state.Options = data.gameOptions;
            }, 
            function (error) {
                state.ErrorMessage = error;
            }
        )
    };

    var state = {
        ErrorMessage: "",
        Options: [],
        GameState: ""
    };
    
    getGameState();
    return state;

});