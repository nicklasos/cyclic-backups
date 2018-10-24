const child_process = require('child_process');
const fs = require('fs');

const dump = {
  create(dir, callback) {
    const file = 'files_backup_' + Date.now() + '.tar.gz';

    child_process.exec(`tar -zcvf ${file} ${dir} >> /dev/null 2>&1`, (err) => {
      callback(err, file);
    });
  },

  clear(file) {
    fs.unlinkSync(file);
  },
};

module.exports = dump;
