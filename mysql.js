const dump = require('./mysql-dump');
const awsBackup = require('./aws-backup');
const dumpName = require('./dump-name');

awsBackup.bucket = 'mysql-dump-backup-us-west-2';

const {db, file, config} = require('./opts')(process.argv.slice(2));

if (!db || !file || !config) {
  return console.error('Wrong params');
}

dump.create({db, config}, (dumpFile) => {
  awsBackup.uploadFile(dumpFile, dumpName(file), (err) => {
    if (err) console.error(err);

    dump.clear(dumpFile);
  });
});



