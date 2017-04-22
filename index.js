// a, b, h => (a + b) * h / 2

const add = (a, b, cb) => {
    setTimeout(() => {
        const isNumber = typeof a !== 'number' || typeof b !== 'number';
        if (isNumber) return cb(new Error('THAM SO PHAI CO KIEU NUMBER'));
        cb(undefined, a + b);
    }, 500);
};

const mul = (a, b, cb) => {
    setTimeout(() => {
        const isNumber = typeof a !== 'number' || typeof b !== 'number';
        if (isNumber) return cb(new Error('THAM SO PHAI CO KIEU NUMBER'));
        cb(undefined, a * b);
    }, 500);
};

const div = (a, b, cb) => {
    setTimeout(() => {
        const isNumber = typeof a !== 'number' || typeof b !== 'number';
        if (isNumber) return cb(new Error('THAM SO PHAI CO KIEU NUMBER'));
        if (b === 0) return cb(new Error('CHIA CHO 0'));
        cb(undefined, a / b);
    }, 500);
};

module.exports = { add, mul, div };