import { Block } from "./block";

class Mud extends Block {

  constructor( type: string = 'Mud', color: string = 'dark grey', lightTransmission: number = 0, canBecorssed: string = 'Can not be', adjecentTo: string[] = ['brick', 'air', 'lava', 'door', 'window', 'gold']) {
    super(type,color,lightTransmission,canBecorssed,adjecentTo);
  }
}

let newmud = new Mud();
newmud.printStatus();