define('gameStateViewModel', ['dataAccessor'], function (dataAccessor) {
    
    var getGameState = function() {
        dataAccessor.getGameState(
            function(data) {
                state.Options = data.GameOptions;
                state.HasOptions = true;
                state.History = data.History;
                state.DeathlyDeathText = data.DeathlyDeathText;
            }
        )
    };

    var state = {
        Options: [],
        HasOptions: false,
        History: "",
        DeathlyDeathText: ""
    };
    
    var timer = setInterval(getGameState, 1000);

    return state;

});