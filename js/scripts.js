var numberOfPlayers = 1;
var currentPlayer = 1;
function Player(name, id) {
    this.id = id;
    this.name = name;
    this.score = 0;
}
var players = [];

$(document).ready(function() {
    //ADD PLAYERS
    $("#addplayer").click(function() {
        numberOfPlayers++;
        if (numberOfPlayers <= 6) {
            $("div#playerlist form input").last().after(
                "<label for='player"+numberOfPlayers+"name'>Player "+numberOfPlayers+" Name:</label><input class='form-control'type='text' id='player"+numberOfPlayers+"name'name='player"+numberOfPlayers+"name' placeholder='  -- Enter your name --'>"
            )
        } else {
            $(".maxplayers").show();
            $("#addplayer").hide();
        }
    })

    //START GAME
    $("form#listofplayers").submit(function(event) {
        event.preventDefault();
        for (var i = 1; i <= numberOfPlayers ; i++) {
            var newPlayer = new Player($("#player"+i+"name").val(), i);
            players.push(newPlayer);
        }
        $(".signup").hide();
        $(".tabletop").show();
    })
})
