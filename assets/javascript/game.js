// -------------------------------- //
// VARIABLES
// -------------------------------- //

// PLAYERS
var obi = $("#obi");
var ani = $("#ani");
var vader = $("#vader");
var yoda = $("#yoda");

var players = [obi, ani, vader, yoda];

// -------------------------------- //
// PLAYER DATA
// -------------------------------- //
var data = {
    obi: {
        name: "Obi-Wan Kenobi",
        health: 100,
        attack: 120,
        counter: 80,
    },
    ani: {
        name: "Anakin Skywalker",
        health: 90,
        attack: 130,
        counter: 90
    },
    vader: {
        name: "Darth Vader",
        health: 140,
        attack: 120,
        counter: 40
    },
    yoda: {
        name: "Yoda",
        health: 100,
        attack: 120,
        counter: 80
    },
    sendData: function () {
        $("#obi-hp").text(this.obi.health);
        $("#obi-atk").text(this.obi.attack);
        $("#obi-ctr").text(this.obi.counter);

        $("#ani-hp").text(this.ani.health);
        $("#ani-atk").text(this.ani.attack);
        $("#ani-ctr").text(this.ani.counter);

        $("#vader-hp").text(this.vader.health);
        $("#vader-atk").text(this.vader.attack);
        $("#vader-ctr").text(this.vader.counter);

        $("#yoda-hp").text(this.yoda.health);
        $("#yoda-atk").text(this.yoda.attack);
        $("#yoda-ctr").text(this.yoda.counter);
    }
}

data.sendData();

// -------------------------------- //
// FUNCTIONS
// -------------------------------- //

function loadData () {
    var aniHealth = data.ani.health;

    console.log(aniHealth);
}

function selectPlayer() {
    $("#obi").on("click", function() {
        obi.detach(); obi.appendTo(".selected-player");

        ani.detach(); ani.appendTo(".defenders");
        vader.detach(); vader.appendTo(".defenders");
        yoda.detach(); yoda.appendTo(".defenders");
    });
    
    $("#ani").on("click", function() {
        ani.detach(); ani.appendTo(".selected-player");

        obi.detach(); obi.appendTo(".defenders");
        vader.detach(); vader.appendTo(".defenders");
        yoda.detach(); yoda.appendTo(".defenders");
    });

    $("#vader").on("click", function() {
        vader.detach(); vader.appendTo(".selected-player");

        obi.detach(); obi.appendTo(".defenders");
        ani.detach(); ani.appendTo(".defenders");
        yoda.detach(); yoda.appendTo(".defenders");
    });
    $("#yoda").on("click", function() {
        yoda.detach(); yoda.appendTo(".selected-player");

        obi.detach(); obi.appendTo(".defenders");
        ani.detach(); ani.appendTo(".defenders");
        vader.detach(); vader.appendTo(".defenders");
    });
}

selectPlayer();


