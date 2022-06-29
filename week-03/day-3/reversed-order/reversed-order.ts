import fs from 'fs';

function fixeReversedOrder(pathFile: string) {
  let message: string = fs.readFileSync(pathFile, 'utf-8');
  let orderFixArr: string[] = message.split('\n');
  orderFixArr[0] = orderFixArr[0].slice(0,-1);
  orderFixArr[orderFixArr.length -1] = orderFixArr[orderFixArr.length -1] + '\n';
  let fixedMessage: string = orderFixArr.reverse().join('');
  console.log(fixedMessage);
  fs.writeFileSync('fixed-reversed-order.txt', fixedMessage);
}
fixeReversedOrder('reversed-order.txt');