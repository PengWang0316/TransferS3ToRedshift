'use strict';

const aws = require('aws-sdk');

aws.config.update({ region: process.env.region });

const s3 = new aws.S3();
const firehose = new aws.Firehose();

const parseContent = require('./libs/parse-content');
const getRecords = require('./libs/get-records');

exports.handler = async (event, context) => {
  // Get the object from the event and show its content type
  const bucket = event.Records[0].s3.bucket.name;
  const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
  const s3Params = {
    Bucket: bucket,
    Key: key,
  };

  let data;
  try {
    data = await s3.getObject(s3Params).promise();
  } catch (err) {
    console.error(err);
    const message = `Error getting object ${key} from bucket ${bucket}.`;
    console.error(message);
    throw new Error(message);
  }

  const records = getRecords(parseContent(data.Body));

  try {
    for (let i = 0; i < records.length; i++) {
      const params = {
        DeliveryStreamName: process.env.deliverStreamName,
        Records: records[i],
      };
      await firehose.putRecordBatch(params).promise();
    }
  } catch (err) {
    console.error('Kinesis Firehose had a problem.');
    console.error(err);
    throw new Error(`Error Firehose putRecord: ${key} from bucket ${bucket}.`);
  }

  return { status: 200 };
};
