const fs = require('fs')
// fs.readFile('./test.txt', 'utf-8', (err, data) => {
//     if(err) throw err
//     console.log(data);
// })

const data = fs.readFileSync('test.txt', { encoding: 'utf-8', flag: 'r' })
console.log(data);

fs.stat('test.txt', (err, stat) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(stat.isFile());
    console.log(stat.isDirectory());
    console.log(stat.isSymbolicLink());
    console.log(stat.size);
    
})