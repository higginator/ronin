// Main game loop
function gameLoop() {
  var ronin = new Ronin(1, 1, 1);
  updateAttributesDisplay(ronin);
  var events = makeEvents();
  var current_event = events[0];
}

// Updates attributes display
function updateAttributesDisplay(ronin) {
  var katana = document.getElementById("katanaValue");
  katana.innerHTML = ronin["katana"];

  var durability = document.getElementById("enduranceValue");
  durability.innerHTML = ronin["endurance"];

  var honor = document.getElementById("honorValue");
  honor.innerHTML = ronin["honor"];
}
