interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

export class Reservation implements Reservationy {



  getDowBooking(): string {
    let days = ['MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT', 'SUN'];
    let rnd = Math.floor(Math.random() * 7);
    return days[rnd];
  }

  getCodeBooking(): string {
    let alphabet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    let arr: string[] = [];
    let outcome = '';
    for (let i = 0; i < 9; i++) {
      let rnd = Math.floor(Math.random() * alphabet.length);
      arr.push(alphabet[rnd]);
    }
    outcome = arr.join('');
    return outcome;
  }

  printStatus() {
    console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`);
  }
}

let reserv1 = new Reservation();
reserv1.printStatus();
