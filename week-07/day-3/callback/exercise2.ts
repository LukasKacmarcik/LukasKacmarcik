'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds


var multipleTimeout = () => {
  console.log('apple');
  setTimeout(console.log, 1000, 'pear');
  setTimeout(console.log, 3000, 'melon');
  setTimeout(console.log, 5000, 'grapes');  
}
multipleTimeout();