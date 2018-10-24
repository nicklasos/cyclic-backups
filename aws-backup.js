const fs = require('fs');
const AWS = require('aws-sdk');

AWS.config.region = 'us-west-2';

const awsBackup = {
  bucket: null,

  uploadFile(file, to, callback) {
    const body = fs.createReadStream(file);
    const s3obj = new AWS.S3(
      {params: {Bucket: awsBackup.bucket, Key: to}});

    s3obj.upload({Body: body}).send(callback);
  },
};

module.exports = awsBackup;
