const child_process = require('child_process');
const fs = require('fs');

module.exports.create = function (dir, callback) {
  const file = 'files_backup_' + Date.now() + '.tar.gz';

  child_process.exec(`tar -zcvf ${file} ${dir} >> /dev/null 2>&1`, (err) => {
    callback(err, file);
  });
};

module.exports.clear = function (file) {
  fs.unlinkSync(file);
};
