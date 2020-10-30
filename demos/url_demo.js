const url = require("url");

const myUrl = new URL("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

// serialized url
console.log(myUrl.href);
// or
console.log(myUrl.toString());

// host name
console.log(myUrl.hostname);
// host name with port
//console.log(myUrl.host);

// path name
console.log(myUrl.pathname);

// serialized query
console.log(myUrl.search);
// serialized query into param object
console.log(myUrl.searchParams);

// add param
myUrl.searchParams.append("test", 123);
console.log(myUrl.searchParams);

// loop param
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
