const dumpName = require('./dump-name');
const dump = require('./files-dump');
const awsBackup = require('./aws-backup');

const {dir, file, bucket} = require('./opts')(process.argv.slice(2));

awsBackup.bucket = bucket;

if (!dir || !file) {
  return console.error('Wrong params');
}

dump.create(dir, (err, dumpFile) => {
  if (err) {
    console.error(err);
    return dump.clear(dumpFile);
  }

  awsBackup.uploadFile(dumpFile, dumpName(file), (err) => {
    if (err) console.error(err);

    dump.clear(dumpFile);
  });
});
