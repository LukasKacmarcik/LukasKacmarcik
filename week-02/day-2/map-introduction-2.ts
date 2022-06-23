let myMap: Record<string, string> = {
  '978-1-60309-452-8': 'A Letter to Jo',
   '978-1-60309-459-7': 'Lupus',
   '978-1-60309-444-3': 'Red Panda and Moon Bear',
   '978-1-60309-461-0': 'The Lab'};

   for(let i = 0; i < 4; i++) {
     console.log(Object.values(myMap)[i] + ' ' + '(ISBN: '+ Object.keys(myMap)[i] +')');
}
