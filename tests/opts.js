const assert = require('chai').assert;

const opts = require('../opts');

describe('opts', () => {
  describe('parse', () => {
    it('should parse options', () => {

      const options = opts(['--foo=foo', '--bar=bar baz qux']);

      const {foo, bar} = options;

      assert.equal('foo', foo);
      assert.equal('bar baz qux', bar);

    });
  });
});