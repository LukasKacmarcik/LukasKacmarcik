import { Captain, Pirate } from "./pirates";

export class Ship {
  crew: Pirate[] = [];
  captain: Captain;
  
  public fillShip() {
    this.captain = new Captain();
    this.crew.push(this.captain);
    for (let i = 0; i < Math.floor((Math.random() * 112) + 1); i++) {
      this.crew.push(new Pirate);
    }
  }

  public state() {
    let deadOrAlive;
    if(this.captain === undefined) {
      console.log('Ship is empty!');
      return;
    }else if(this.captain.alive) {
      deadOrAlive = 'doing great';
    } else {
      deadOrAlive = 'quite dead';
    }
    let aliveLads = 0;
    for (let i = 0; i < this.crew.length; i++) {
      if (this.crew[i].alive) {
        aliveLads++;
      }
    }
    console.log(`Captain drunk ${this.captain.intoxication} shots and he is ${deadOrAlive}`);
    console.log(`Lads still alive ${aliveLads}`);
  }

  public score(): number {
    let score: number = 0;
    let alivePirates: number = 0;
    for (let i = 0; i < this.crew.length; i++) {
      if (this.crew[i].alive) {
        alivePirates++;
      }
    }
    return score = alivePirates - this.captain.intoxication;
  }

  public battle(otherShip: Ship) {
    ////Are we even winning this???\\\\\
    let wins;
    let luck:number;
    if (this.score() > otherShip.score()) {
      wins = 1;
    }else if (this.score() < otherShip.score()) {
      wins = 2;
    }
    /////They are dying there!!!\\\\\
    if(wins === 1) {
      for ( let i = 0; i < otherShip.crew.length; i++) {
        let luck:number = Math.floor((Math.random() * 2) +1);
        if (luck === 2){
          otherShip.crew[i].alive = false;
        } 
      }
    } else if (wins === 2) {
      for ( let i = 0; i < this.crew.length; i++) {
        luck = Math.floor((Math.random() * 2) +1);
        if (luck === 2){
          this.crew[i].alive = false;
        } 
      }
    }
    ////Throwing party\\\\\
    if(wins === 1) {
      for (let i = 0; i < this.crew.length; i++) {
        this.crew[i].intoxication += Math.floor((Math.random() * 98) + 1);
      }
    }else {
      for (let i = 0; i < otherShip.crew.length; i++) {
        otherShip.crew[i].intoxication += Math.floor((Math.random() * 98) + 1);
      }
    }
    return wins = 1;
  }
};