const child_process = require('child_process');
const fs = require('fs');

/**
 * mysqldump -u [name] -p[pass] [dbname] | gzip -9 > [backupfile.sql.gz]
 * gunzip < [backupfile.sql.gz] | mysql -u [name] -p[pass] [dbname]
 * mysqlimport -u [name] -p[pass] [dbname] [backupfile.sql]
 */
module.exports.create = function ({db, config}, callback) {
  const file = 'mysql_backup_' + Date.now() + '.sql.gz';

  child_process.exec(`mysqldump --defaults-file=${config} ${db} | gzip -9 > ${file}`, (error) => {
    console.log(error);
    callback(file);
  });
};

module.exports.clear = function (file) {
  fs.unlink(file);
};
