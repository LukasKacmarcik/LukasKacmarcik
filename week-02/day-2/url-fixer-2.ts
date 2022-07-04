let url: string = 'https//www.reddit.com/r/nevertellmethebots';

let newArr = url.split('');
newArr.splice(5,0,':');
url = newArr.join('').replace('bots','odds');
console.log(url);