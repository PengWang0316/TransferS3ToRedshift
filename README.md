# Transfer files on the S3 to Redshift

This Lambda function will be triggered when a file was uploaded to a specific bucket and it will separate the content and push them to a Kinesis Firehose. The Firehose is setup to shift records to a Redshift table.

[![Build Status](https://travis-ci.org/PengWang0316/TransferS3ToRedshift.svg?branch=master)](https://travis-ci.org/PengWang0316/TransferS3ToRedshift) [![Coverage Status](https://coveralls.io/repos/github/PengWang0316/TransferS3ToRedshift/badge.svg?branch=master)](https://coveralls.io/github/PengWang0316/TransferS3ToRedshift?branch=master)


### Test :tada: :tada:

Test code is under the __tests__ folder
- Unit test: jest
- Unit test with coverage report: jest --coverage

# License

This function is licensed under MIT License - see the [License file](https://github.com/PengWang0316/TransferS3ToRedshift/blob/master/LICENSE).
