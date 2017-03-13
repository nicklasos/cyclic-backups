const dumpName = require('./dump-name');
const dump = require('./mysql-dump');
const awsBackup = require('./aws-backup');

const {db, file, config, bucket} = require('./opts')(process.argv.slice(2));

awsBackup.bucket = bucket;

if (!db || !file || !config) {
  return console.error('Wrong params');
}

dump.create({db, config}, (err, dumpFile) => {
  if (err) {
    console.error(err);
    return dump.clear(dumpFile);
  }

  awsBackup.uploadFile(dumpFile, dumpName(file), (err) => {
    if (err) console.error(err);

    dump.clear(dumpFile);
  });
});
