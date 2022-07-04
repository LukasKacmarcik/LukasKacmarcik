 export class Pirate {
  intoxication: number = 0;
  alive = true;
  public drinkSomeRum() {
    if(!this.alive) {
      console.log('he\'s dead');
    }
    this.intoxication++;
  }

  public housItGoingMate() {
    if(!this.alive) {
      console.log('he\'s dead');
    }
    if (this.intoxication < 4) {
      console.log('Pour me anudder!');
    } else {
      console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
    }
  }

  public brawl(pirateToFight: Pirate) {
    let faith: any;
    if(!this.alive) {
      console.log('he\'s dead');
    }
    if (this.alive && pirateToFight.alive) {
       faith = Math.floor(Math.random()* 100 + 1);
    }
    if (faith < 34) {
      this.alive = false;
    }
    if (faith > 33 && faith < 67) {
      pirateToFight.alive = false;
    }
    if (faith > 66) {
      console.log('both pass out');
    }
  }

  public die() {
    this.alive = false;
  }
}

export class Captain extends Pirate {

};
