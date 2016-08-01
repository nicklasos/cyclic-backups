const os = require('os');

module.exports = function (name) {
  const date = module.exports.date;

  return name
    .replace('{timestamp}', Math.floor(date.getTime()))
    .replace('{rand}', randomInt())
    .replace('{host}', os.hostname())
    .replace('{week}', week(date))
    .replace('{year}', date.getFullYear())
    .replace('{month}', fmt(date.getMonth() + 1))
    .replace('{day}', date.getDay())
    .replace('{hours}', fmt(date.getHours()))
    .replace('{minutes}', fmt(date.getMinutes()))
    .replace('{seconds}', fmt(date.getSeconds()));
};

module.exports.date = new Date();

function fmt(number) {
  return ('0' + number).slice(-2);
}

function week(date) {
  return ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][date.getDay()];
}

function randomInt() {
  return Math.floor(Math.random() * 10e15);
}