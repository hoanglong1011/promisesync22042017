const {add, mul, div} = require('./index');

const getSquare = (a, b, h, cb) => {
    add(a, b, (err, result) => {
        if(err) return cb(err);
        mul(result, h, (err, result) => {
            if(err) return cb(err);
            div(result, 2, (err, result) => {
               if(err) return cb(err);
               cb(null, result);     
            })
        });
    });
};

getSquare(5,6,7,(err, result) => {
    if(err) console.log(err);
    else console.log(result);
});