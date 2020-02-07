function favPlayer() {
    var playerOutput;
    var Players = document.getElementById("player").value;
    var playerQuote = " is my favorite player";
    switch(Players) {
        case "David Pastanak":
            playerOutput = "David Pastanak" + playerQuote;
        break;
        case "Zdeno Chara":
            playerOutput = "Zdeno Chara" + playerQuote;
        break;
        case "Brad Marchand":
            playerOutput = "Brad Marchand" + playerQuote;
        break;
        case "Charlie Coyle":
            playerOutput = "Charlie Coyle" + playerQuote;
        break;
        case "Patrice Bergeron":
            playerOutput = "Patrice Bergeron" + playerQuote;
        break;
        case "Charlie Mcavoy":
            playerOutput = "Charlie Mcavoy" + playerQuote;
        break;
        case "Jake Debrusk":
            playerOutput = "Jake Debrusk" + playerQuote;
        break;
        default:
         playerOutput = "Please enter a player name exactly as written above.";
    }
    document.getElementById("my-player").innerHTML = playerOutput;
}