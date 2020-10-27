
const uuidv4 = require("uuid/v4");
const AWS = require("aws-sdk");
AWS.config.update({region: "eu-central-1"});

const dynamodb = new AWS.DynamoDB.DocumentClient();

const orgId = uuidv4();

var params = {
    TableName : 'happy-projects',
    Item: {
        PK: `ORG#${orgId}`,
        SK: `#METADATA#${orgId}`,
        name: 'Happy Inc',
        tier: 'free-tier'

    }
    };

dynamodb.put(params, function(err, data) {
    if (err) console.log(err);
    else console.log(data);
});

