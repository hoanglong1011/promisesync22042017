const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isNumber = typeof a !== 'number' || typeof b !== 'number';
            if (isNumber) reject('THAM SO PHAI CO KIEU NUMBER');
            else resolve(a + b);
        }, 250);
    });
};

const mul =(a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isNumber = typeof a !== 'number' || typeof b !== 'number';
            if (isNumber) reject('THAM SO PHAI CO KIEU NUMBER');
            else resolve(a * b);
        }, 250);
    });
};

const div = (a, b) => {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isNumber = typeof a !== 'number' || typeof b !== 'number';
            if (isNumber) reject('THAM SO PHAI CO KIEU NUMBER');
            else resolve(a / b);
        }, 250);
    });
};

const square = (a, b, h) => {
    return add(a, b)
    .then(val => mul(val, h))
    .then(val => div(val, 2));
};

// square(3, 4, 5)
// .then(val => console.log(val))
// .catch(reason => {
//     console.log(reason);
// });

async function dientich(a, b, h){
    const ab = await add(a, b);
    const abh = await mul(ab, h);
    return await div(abh, 2);
}

dientich(3, 4, 5).then(val => console.log(val));
