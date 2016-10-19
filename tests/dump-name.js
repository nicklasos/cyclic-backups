const assert = require('chai').assert;
const os = require('os');
const dumpName = require('../dump-name');

describe('dump name', () => {
  it('should replace placeholders with actual values', () => {

    dumpName.date = new Date(2016, 7, 1, 3, 9, 5);

    const testName = [
      'backup',
      os.hostname(),
      '2016',
      '08',
      '01',
      'mon',
      '03',
      '09',
      '05',
    ].join('/');

    const actual = dumpName('backup/{host}/{year}/{month}/{day}/{week}/{hours}/{minutes}/{seconds}');

    assert.equal(testName, actual);

  });
});