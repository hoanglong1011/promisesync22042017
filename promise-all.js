const { add } = require('./promise-async');

Promise.all([add(1, 2), add(3, 4), add(5, 6)])
.then(result => console.log(result))
.catch(err => console.log(err));

Promise.race([add(1, 2), add(3, 4), add(5, 6)])
.then(result => console.log(result))
.catch(err => console.log(err));