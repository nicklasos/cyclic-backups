const child_process = require('child_process');
const fs = require('fs');

const dump = {
  /**
   * mysqldump -u [name] -p[pass] [dbname] | gzip -9 > [backupfile.sql.gz]
   * gunzip < [backupfile.sql.gz] | mysql -u [name] -p[pass] [dbname]
   * mysqlimport -u [name] -p[pass] [dbname] [backupfile.sql]
   */
  create({db, config}, callback) {
    const file = 'mysql_backup_' + Date.now() + '.sql.gz';

    let command = 'mysqldump ';

    if (config) {
      command += `--defaults-file=${config} `;
    }

    command += `--single-transaction ${db} | gzip -9 > ${file}`;

    child_process.exec(command, (err) => {
      callback(err, file);
    });
  },

  clear(file) {
    fs.unlinkSync(file);
  },
};

module.exports = dump;
