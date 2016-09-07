const dumpName = require('./dump-name');
const dump = require('./files-dump');
const awsBackup = require('./aws-backup');

awsBackup.bucket = 'mysql-dump-backup-us-west-2';

const {dir, file} = require('./opts')(process.argv.slice(2));

if (!dir || !file) {
  return console.error('Wrong params');
}

dump.create(dir, (dumpFile) => {
  awsBackup.uploadFile(dumpFile, dumpName(file), (err) => {
    if (err) console.error(err);

    dump.clear(dumpFile);
  });
});
