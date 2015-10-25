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
                state.HasSkullAndCrossbones = data.Gif.length > 1 ? false : true;
                state.HasGameId = true;
                state.GifPath = 'gifs/' + data.Gif;
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
        HasSkullAndCrossbones: false,
        HasGameId: false,
        GifPath:""
    };
    
    if (window.location.hash != "") {
        var timer = setInterval(getGameState, 1000);   
    }

    console.log('has game Id: ' + state.HasGameId);
    console.log('window.location.hash: ' + window.location.hash);
    console.log('HasSkullAndCrossbones: ' + state.HasSkullAndCrossbones);

    return state;

});