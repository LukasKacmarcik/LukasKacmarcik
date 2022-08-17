function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

// usage:
// loadScript('path/script.js', (err, script) => {...})

loadScript('test.js');

function promisifyLoadScript(src) {
  return new Promise((resolve, reject) => {
    loadScript(src, (err, script) => {
      if ()
    })
  })
}