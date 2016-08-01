const dump = require('./mysql-dump');
const awsBackup = require('./aws-backup');
const dumpName = require('./dump-name');

awsBackup.bucket = 'mysql-dump-backup-us-west-2';

const {user, password, db, file} = require('./opts')(process.argv.slice(2));

if (!user || !password || !db || !file) {
  return console.error('Wrong params');
}

dump.create({user, password, db}, (dumpFile) => {
  awsBackup.uploadFile(dumpFile, dumpName(file), (err) => {
    if (err) console.error(err);

    dump.clear(dumpFile);
  });
});



