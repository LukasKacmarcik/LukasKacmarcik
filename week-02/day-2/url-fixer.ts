//url-fixer.ts


// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crucial component, find out what it is and insert it too!

// let url: string = 'https//www.reddit.com/r/nevertellmethebots';

// console.log(url);

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

console.log(url);

url = url.slice(0, 5) + ':' + url.slice(5);

console.log(url);








