const child_process = require('child_process');
const fs = require('fs');

/**
 * mysqldump -u [name] -p[pass] [dbname] | gzip -9 > [backupfile.sql.gz]
 * gunzip < [backupfile.sql.gz] | mysql -u [name] -p[pass] [dbname]
 * mysqlimport -u [name] -p[pass] [dbname] [backupfile.sql]
 */
module.exports.create = function ({db, config}, callback) {
  const file = 'mysql_backup_' + Date.now() + '.sql.gz';

  let command = 'mysqldump ';

  if (config) {
    command += `--defaults-file=${config} `;
  }

  command += `--single-transaction ${db} | gzip -9 > ${file}`;

  child_process.exec(command, (err) => {
    callback(err, file);
  });
};

module.exports.clear = function (file) {
  fs.unlinkSync(file);
};
