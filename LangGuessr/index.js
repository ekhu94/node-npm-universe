const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

const str = process.argv.slice(2).join(' ');
const langCode = franc(str);

try {
    const printLang = langs.where("3", langCode);
    console.log(printLang.name.green);
} catch {
    console.log("Oops, something went wrong. This could be a problem with langs.".red);
}