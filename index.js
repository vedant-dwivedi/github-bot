const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const FILE_PATH = './data.json';

// const makeCommit = (x,y) => {

// }

// makeCommit(1, 1)

const DATE = moment().subtract(2, 'd').format();

const data = {
    date: DATE
}

jsonfile.writeFile(FILE_PATH, data , () => {
    simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE }).push();

});