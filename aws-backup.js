const fs = require('fs');
const AWS = require('aws-sdk');

AWS.config.region = 'us-west-2';

module.exports.bucket = null;

module.exports.uploadFile = function (file, to, callback) {
  const body = fs.createReadStream(file);
  const s3obj = new AWS.S3({params: {Bucket: module.exports.bucket, Key: to}});

  s3obj.upload({Body: body}).send(callback);
};