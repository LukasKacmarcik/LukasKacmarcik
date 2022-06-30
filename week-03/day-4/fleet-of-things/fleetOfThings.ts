import { Thing } from './thing';
import { Fleet } from './fleet';

let fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Download those, use those

//  Crete a fleet of things to have this output:
// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch
let firstThing = new Thing('Get milk');
let secondThing = new Thing('Remove the obstacle');
let thirdThing = new Thing('Stand up');
let fourthThing = new Thing('Eat lunch');
thirdThing.complete();
fourthThing.complete();
fleet.add(firstThing);
fleet.add(secondThing);
fleet.add(thirdThing);
fleet.add(fourthThing);
console.log(fleet.toString());