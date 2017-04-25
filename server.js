const pg = require('pg');
const fs = require('fs');

var config = {
    host: 'localhost',
    port: 5432,
    database: 'news',
    user: 'postgres',
    password: 'D@nTh@nh1011'
};

const pool = new pg.Pool(config);

function query(sql, parameters){
    return new Promise((resolve, reject) => {
        pool.connect((err, client, done) => {
            if(err) reject(err);
            client.query(sql, parameters, (err, result) => {
                done(err); // Release connection
                if(err) reject(err);
                resolve(result);
            });
        });
    });
}

// query('SELECT * FROM users WHERE username = $1 AND password = $2', ['hoanglong1011', '123'])
// .then(result => result.rows)
// e.g param trong then tiếp theo là giá trị của then trước đó trả về
// .then(param => console.log(param.rows[0]))
// .catch(err => err)
// e.g val trong then sau catch là giá trị của catch trước đó trả về
// .then(val => console.log(val));

Promise.reject(100)
.then(
    a => console.log(a),
    err => console.log(err)
)
.catch(err => console.log(err));

function writeAsync(path, data){
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, 'utf8', err => {
            if(err) reject(err);
            resolve({path: path, data: data});
        })
    });
}

function saveAsync(sql, parameters, path){
    return query(sql, parameters)
    .then((result => writeAsync(path, JSON.stringify(result.rows))));
}

saveAsync('SELECT * FROM news', [], 'hello.txt')
.then(() => console.log('Done'))
.catch(err => console.log(err));