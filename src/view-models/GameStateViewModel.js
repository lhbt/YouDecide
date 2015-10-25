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
                state.HasSailorMoon = data.DeathlyDeathText.indexOf("Sailor Moon") > -1 ? true : false;
                state.HasSkullAndCrossbones = state.HasDeathlyDeathText && !state.HasSailorMoon;
                state.HasGameId = true;
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
        HasSailorMoon: false,
        HasSkullAndCrossbones: false,
        HasGameId: false
    };
    
    if (window.location.hash != "") {
        var timer = setInterval(getGameState, 1000);   
    }

    console.log('has game Id: ' + state.HasGameId);
    console.log('window.location.hash: ' + window.location.hash);

    return state;

});