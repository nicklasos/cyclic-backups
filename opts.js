/**
 * @param {Array} options Command line arguments: process.argv.slice(2)
 * @return {Object}
 */
function opts(options) {
  return options.reduce((params, param) => {
    let [key, value] = param.split('=');
    key = key.replace(/^-*/, '');
    params[key] = value;

    return params;
  }, {});
}

module.exports = opts;
