// Events occur throughout the game.
class Event {
    constructor(description, option1, option2) {
      this.description = description;
      this.option1 = option1;
      this.option2 = option2;

      // Returns a boolean indicating if a ronin can perform an option.
      this.checkRoninCanDoOption = function(ronin, option) {
        if (ronin[option.neededSkill] > option.neededSkillValue) {
          return true;
        }
        return false;
      }

      // Updates the attribute of a ronin.
      this.updateRoninAttribute = function(ronin, skill, updateValue) {
        ronin[skill] = ronin[skill] + updateValue;
      }
    }


}

// Options are attributes of Events, where a ronin can select an option when
// presented with an event.
class Option {
    constructor(description, neededSkill, neededSkillValue, outcomeSkill, outcomeValue) {
      this.description = description;
      this.neededSkill = neededSkill;
      this.neededSkillValue = neededSkillValue;
      this.outcomeSkill = outcomeSkill;
      this.outcomeValue = outcomeValue;
    }
}

// Make events for game.
function makeEvents() {
  // make first Event
  var description = "The ronin passes a decaying robot on the street. The ronin \
  sits with the robot and converses. The robot enjoys this greatly, \
  and offers the ronin a gift - a katana."
  var option1 = new Option("Accept the katana.", "katana", 0, "katana", 5);
  var option2 = new Option("Refuse the katana.", "honor", 0, "honor", 5);
  var event1 = new Event(description, option1, option2);
  // make second Event
  // make third Event
  var events = [event1];
  return events;
}

// Generate an event from an array of events.
function generateEvent() {

}
