define('gameStateViewModel', ['dataAccessor'], function (dataAccessor) {
    
    var getGameState = function() {
        dataAccessor.getGameState(
            function(data) {
                state.Options = data.GameOptions;
                state.HasOptions = true;
                state.History = data.History;
                state.DeathlyDeathText = data.DeathlyDeathText;
                state.NextOptions = data.DeathlyDeathText.length > 0 ? ("But it's ok, you can have another go. " + options) : options;
                state.HasDeathlyDeathText = data.DeathlyDeathText.length > 0 ? true : false;
                state.HasHistory = data.History.length > 1 ? true : false;
            }
        )
    };

    var options = "Your options now are...";

    var state = {
        Options: [],
        HasOptions: false,
        History: "",
        DeathlyDeathText: "",
        NextOptions: "",
        HasDeathlyDeathText: false,
        HasHistory: false,
    };
    
    var timer = setInterval(getGameState, 1000);

    return state;

});