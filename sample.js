
var AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});

var dataexchange = new AWS.DataExchange();

// more details can be found here  : https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DataExchange.html

var params = {
  DataSetId: '<Place dataSetId here>' /* required */
};
dataexchange.getDataSet(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});