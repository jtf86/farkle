var numberOfPlayers = 1;

$(document).ready(function() {
    $("#addplayer").click(function() {
        numberOfPlayers++;
        if (numberOfPlayers <= 6) {
            $("div#playerlist form input").last().after(
                "<label for='player"+numberOfPlayers+"name'>Player "+numberOfPlayers+" Name:</label><input class='form-control'type='text' id='player"+numberOfPlayers+"name'name='player"+numberOfPlayers+"name' placeholder='  -- Enter your name --'>"
            )
        } else {
            $(".maxplayers").show();
        }
    })
})
