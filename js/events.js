// Events occur throughout the game.
class Event {
    constructor(description, option1, option2) {
      this.description = description;
      this.option1 = option1;
      this.option2 = option2;
      // methods
      this.checkRoninCanDoOption = function(ronin, option) {
        if (ronin[option.neededSkill] > option.neededSkillValue) {
          return true;
        }
        return false;
      }
    }


}

// Options are attributes of Events, where a ronin can select an option when
// presented with an event.
class Option {
    constructor(description, neededSkill, neededSkillValue) {
      this.description = description;
      this.neededSkill = neededSkill;
      this.neededSkillValue = neededSkillValue;
    }
}
