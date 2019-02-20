// -------------------------------- //
// VARIABLES
// -------------------------------- //

// PLAYERS
var obi = $("#obi");
var ani = $("#ani");
var vader = $("#vader");
var yoda = $("#yoda");

// -------------------------------- //
// PLAYER DATA
// -------------------------------- //


// -------------------------------- //
// FUNCTIONS
// -------------------------------- //

// Move player to selected player div

function selectPlayer(selected) {
    selected.on("click", function(){
        selected.detach();
        selected.appendTo(".selected-player");
    });
}

selectPlayer(obi);
selectPlayer(ani);
selectPlayer(vader);
selectPlayer(yoda);

