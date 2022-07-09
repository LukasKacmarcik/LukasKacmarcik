'use strict';
// "Please enter the number of players:
// > numberOfPlayers

function getWinningSeat(numberOfPlayers:number):number {
  let players: number[] = []
  let playerSeat = 0;
  for (let i = 0; i < numberOfPlayers; i++) {
    playerSeat += 1;
    players.push(playerSeat);
  }
  while (players.length > 1) {
    for (let i = 0; i < players.length; i++) {
      if (players[i+1] === undefined) {
        let temp = players[players.length-1];
        players.splice(players.length-1,1);
        players.unshift(temp);
      } else {
        players.splice(i+1,1);
      }
    }
  }
  return players[0];
}
console.log(`The winning seat is ${getWinningSeat(13)}`);

//export = getWinningSeat;