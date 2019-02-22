// -------------------------------- //
// VARIABLES
// -------------------------------- //

// PLAYERS
var obi = $("#obi");
var ani = $("#ani");
var vader = $("#vader");
var yoda = $("#yoda");

var players = [obi, ani, vader, yoda];
var selectedPlayer;

// -------------------------------- //
// PLAYER DATA
// -------------------------------- //
var data = {
  obi: {
    name: "Obi-Wan Kenobi",
    health: 100,
    attack: 8,
    attackIncrementer: 8,
    counter: 5
  },
  ani: {
    name: "Anakin Skywalker",
    health: 90,
    attack: 5,
    attackIncrementer: 5,
    counter: 6
  },
  vader: {
    name: "Darth Vader",
    health: 140,
    attack: 9,
    attackIncrementer: 9,
    counter: 6
  },
  yoda: {
    name: "Yoda",
    health: 100,
    attack: 7,
    attackIncrementer: 7,
    counter: 5
  },
  sendData: function() {
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
};

data.sendData();

// -------------------------------- //
// FUNCTIONS
// -------------------------------- //

// ADDING DOM ELEMENTS
function createAttackBtn() {
  var newBtn = $("<button>Attack</button>");
  newBtn.appendTo(".selected-player");
}

function boxDisplay() {
  $(".selected-player").css("display", "block");
  $(".defenders").css("display", "block");
  $(".all-players").css("display", "none");
}

function addAttackBtn() {
  $(".selected-player").append("<button>Attack</button>");
}

// USER ACTIONS
var selectFns = {
  obiSelected: function() {
    obi.detach();
    obi.appendTo(".selected-player");

    ani.detach();
    ani.appendTo(".defenders");
    vader.detach();
    vader.appendTo(".defenders");
    yoda.detach();
    yoda.appendTo(".defenders");

    ani.off("click");
    vader.off("click");
    yoda.off("click");
  },
  aniSelected: function() {
    ani.detach();
    ani.appendTo(".selected-player");

    obi.detach();
    obi.appendTo(".defenders");
    vader.detach();
    vader.appendTo(".defenders");
    yoda.detach();
    yoda.appendTo(".defenders");

    obi.off("click");
    vader.off("click");
    yoda.off("click");
  },
  vaderSelected: function() {
    vader.detach();
    vader.appendTo(".selected-player");

    obi.detach();
    obi.appendTo(".defenders");
    ani.detach();
    ani.appendTo(".defenders");
    yoda.detach();
    yoda.appendTo(".defenders");

    obi.off("click");
    ani.off("click");
    yoda.off("click");
  },
  yodaSelected: function() {
    yoda.detach();
    yoda.appendTo(".selected-player");

    obi.detach();
    obi.appendTo(".defenders");
    ani.detach();
    ani.appendTo(".defenders");
    vader.detach();
    vader.appendTo(".defenders");

    obi.off("click");
    ani.off("click");
    vader.off("click");
  }
};

var defendFns = {
  obiChosen: function() {
    ani.on("click", function() {
      vader.detach();
      yoda.detach();
      addAttackBtn();
    });
    vader.on("click", function() {
      ani.detach();
      yoda.detach();
      addAttackBtn();
    });
    yoda.on("click", function() {
      ani.detach();
      vader.detach();
      addAttackBtn();
    });
  },
  aniChosen: function() {
    obi.on("click", function() {
      vader.detach();
      yoda.detach();
      addAttackBtn();
    });
    vader.on("click", function() {
      obi.detach();
      yoda.detach();
      addAttackBtn();
    });
    yoda.on("click", function() {
      obi.detach();
      vader.detach();
      addAttackBtn();
    });
  },
  vaderChosen: function() {
    obi.on("click", function() {
      ani.detach();
      yoda.detach();
      addAttackBtn();
    });
    ani.on("click", function() {
      obi.detach();
      yoda.detach();
      addAttackBtn();
    });
    yoda.on("click", function() {
      obi.detach();
      ani.detach();
      addAttackBtn();
    });
  },
  yodaChosen: function() {
    obi.on("click", function() {
      ani.detach();
      vader.detach();
      addAttackBtn();
    });
    ani.on("click", function() {
      obi.detach();
      vader.detach();
      addAttackBtn();
    });
    vader.on("click", function() {
      obi.detach();
      ani.detach();
      addAttackBtn();
    });
  }
};

function selectPlayer() {
  obi.on("click", function() {
    selectFns.obiSelected();
    selectedPlayer = "obi";
    defendFns.obiChosen();
    boxDisplay();
  });

  ani.on("click", function() {
    selectFns.aniSelected();
    selectedPlayer = "ani";
    defendFns.aniChosen();
    boxDisplay();
  });

  vader.on("click", function() {
    selectFns.vaderSelected();
    selectedPlayer = "vader";
    defendFns.vaderChosen();
    boxDisplay();
  });
  yoda.on("click", function() {
    selectFns.yodaSelected();
    selectedPlayer = "yoda";
    defendFns.yodaChosen();
    boxDisplay();
  });
}

$(document).on("click", "button", function() {
  if (selectedPlayer === "obi") {
    console.log("this attack: " + data.obi.attack);
    data.obi.attackIncrementer += data.obi.attack;
    console.log("next attack: " + data.obi.attackIncrementer);
  }
});

selectPlayer();

// I ran out of time to complete the secondary challenge, but was able to get the basic structure of the RPG down for the character selection.
// What remains to be done is the application of player stats in the battle portion.

// REMAINING PSEUDO CODE //

// MAKE ATTACK BUTTON GET PLAYER ATTACK VALUE AND DEDUCT FROM DEFENDER HEALTH

// DEFENDER COUNTER ATTACK APPLIED TO USER PLAYER

// IF USER HEALTH <= 0, LOSE

// IF DEFENDER HEALTH <= 0, BRING ON NEXT DEFENDER

// IF ALL DEFENDERS HEALTH <= 0, USER WINS!
