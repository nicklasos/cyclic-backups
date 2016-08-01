const child_process = require('child_process');
const fs = require('fs');

/**
 * mysqldump -u [name] -p[pass] [dbname] | gzip -9 > [backupfile.sql.gz]
 * gunzip < [backupfile.sql.gz] | mysql -u [name] -p[pass] [dbname]
 * mysqlimport -u [name] -p[pass] [dbname] [backupfile.sql]
 */
module.exports.create = function ({user, password, db}, callback) {
  const file = 'mysql_backup_' + Date.now() + '.sql.gz';

  child_process.exec(`mysqldump -u ${user} -p${password} ${db} | gzip -9 > ${file}`, () => {
    callback(file);
  });
};

module.exports.clear = function (file) {
  fs.unlink(file);
};
