const fetcher = (loc) => {
  const fs = require('fs');
  const request = require('request');
  
  // Use npm package called request to make HTTP requests
  request(loc[0], (error, response, content) => {
    const size = content.length;

    fs.writeFile(loc[1], content, err => {
      if (err) {
        console.error(err)
        return
      } else {
        console.log(`Downloaded and saved ${size} bytes to ${loc[1]}`);
      }
    });
  });
};


let locations = process.argv.slice(2);

fetcher(locations);