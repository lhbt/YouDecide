define('gameStateViewModel', ['dataAccessor'], function (dataAccessor) {
    
    var getGameState = function() {
        dataAccessor.getGameState('hello',
            function(data) {
                state.GameState = data;
            }, 
            function (error) {
                state.ErrorMessage = error;
            }
        )
    };

    var state = {
        GameState: getGameState,
        ErrorMessage: ""
    };
    
    return state;

});