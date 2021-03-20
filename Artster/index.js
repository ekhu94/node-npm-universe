const figlet = require('figlet');
const colors = require('colors');
const word = process.argv[2];

figlet(word, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data.rainbow);
});