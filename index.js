
const uuidv4 = require("uuid/v4");
const AWS = require("aws-sdk");
AWS.config.update({region: "eu-central-1"});

const dynamodb = new AWS.DynamoDB.DocumentClient();


// //1. Organization
// const orgId = uuidv4();

// var params = {
//     TableName : 'happy-projects',
//     Item: {
//         PK: `ORG#${orgId}`,
//         SK: `#METADATA#${orgId}`,
//         name: 'Happy Inc',
//         tier: 'professional-tier'

//     }
// };

// dynamodb.put(params, function(err, data) {
//     if (err) console.log(err);
//     else console.log(data);
// });


//  //2. Project
// const happyIncOrgId = "dde19ac4-5cdc-46c0-808c-9b1a29391e75";
// const ABCIncOrgId = "bfd5497d-8b41-47ad-89c2-95bdef56a0b4";
// const projectId = uuidv4();
// var params = {
//     TableName : 'happy-projects',
//     Item: {
//         PK: `ORG#${ABCIncOrgId}`,
//         SK: `PRO#agile#${projectId}`,
//         name: 'Project Y',
//         project_id: projectId

//     }
//     };

// dynamodb.put(params, function(err, data) {
//     if (err) console.log(err);
//     else console.log(data);
// });


//  //3. Edit Organization
// const happyIncOrgId = "dde19ac4-5cdc-46c0-808c-9b1a29391e75";
// const ABCIncOrgId = "bfd5497d-8b41-47ad-89c2-95bdef56a0b4";
// var params = {
//     TableName: 'happy-projects',
//     Key: { PK : `ORG#${ABCIncOrgId}`, SK: `#METADATA#${ABCIncOrgId}` },
//     UpdateExpression: 'set #org_id = :org_id',
//     ExpressionAttributeNames: {'#org_id' : 'org_id'},
//     ExpressionAttributeValues: {
//         ':org_id' : ABCIncOrgId,
//     }
// };
    
// var documentClient = new AWS.DynamoDB.DocumentClient();
    
// documentClient.update(params, function(err, data) {
//     if (err) console.log(err);
//     else console.log(data);
// }); 

// //Get Organizaiton
// const happyIncOrgId = "dde19ac4-5cdc-46c0-808c-9b1a29391e75";
// const ABCIncOrgId = "bfd5497d-8b41-47ad-89c2-95bdef56a0b4";
// var params = {
//     TableName : 'happy-projects',
//     Key: {
//         PK: `ORG#${ABCIncOrgId}`,
//         SK: `#METADATA#${ABCIncOrgId}`
//     }
// };

// var documentClient = new AWS.DynamoDB.DocumentClient();
// documentClient.get(params, function(err, data) {
//     if (err) console.log(err);
//     else console.log(data);
// });

// // Find Projects for an organization
// var params = {
//     TableName: 'happy-projects',
//     KeyConditionExpression: "PK = :PK and begins_with(SK, :SK)",
//     //ExpressionAtrributeNames: {'#PK': 'PK', '#SK': 'SK'},
//     ExpressionAttributeValues: {
//         ":PK": "ORG#bfd5497d-8b41-47ad-89c2-95bdef56a0b4",
//         ":SK": "PRO#"
//     }
// };

// var documentClient = new AWS.DynamoDB.DocumentClient();

// documentClient.query(params, function(err, data) {
//     if (err) console.log(err);
//     else console.log(data);
// });


//  //Employees
// const happyIncOrgId = "dde19ac4-5cdc-46c0-808c-9b1a29391e75";
// const ABCIncOrgId = "bfd5497d-8b41-47ad-89c2-95bdef56a0b4";
// const employeeId = uuidv4();
// var params = {
//     TableName : 'happy-projects',
//     Item: {
//         PK: `ORG#${happyIncOrgId}`,
//         SK: `EMP#${employeeId}`,
//         name: 'Klaus Fischer',
//         email: 'Klaus@S04.de'

//     }
//     };
//     dynamodb.put(params, function(err, data) {
//     if (err) console.log(err);
//     else console.log(data);
// });

// Assign Employee to Projct
// const happyIncOrgId = "dde19ac4-5cdc-46c0-808c-9b1a29391e75";
// const ABCIncOrgId = "bfd5497d-8b41-47ad-89c2-95bdef56a0b4";

// const Stan = "f0f6cd5a-2ff7-4607-9d58-7340753f29d3";
// const Ernst = "cff55748-56eb-4b56-ad42-638fea856ed1";
// const Klaus = "c2b27324-5a68-41b4-83ff-44973621bd99";

// const projectA = "b3bea36b-f03e-42a5-bf69-1603281b5876";
// const projectB = "a5c3d0fc-3ca7-4c8d-aa07-1759152eaa0d";
// const projectX = "7360bd6e-6239-4e48-96e3-1a7e828ebedc";
// const projectY = "a6c75a1f-ebdc-4302-914f-ffc0691fd901";

// var params = {
//     TableName: "happy-projects",
//     Item: {
//         PK: `ORG#${happyIncOrgId}#PRO#${projectX}`,
//         SK: `ORG#${happyIncOrgId}#EMP#${Klaus}`,
//         name: "Klaus Fischer",
//         project: "Project X",
//         date_of_join: new Date().toUTCString()
//     }
// };
// dynamodb.put(params, function(err, data) {
//     if (err) console.log(err);
//     else console.log(data);
// });

// //Find employees assigned to Project X
// const happyIncOrgId = "dde19ac4-5cdc-46c0-808c-9b1a29391e75";
// const ABCIncOrgId = "bfd5497d-8b41-47ad-89c2-95bdef56a0b4";

// const Stan = "f0f6cd5a-2ff7-4607-9d58-7340753f29d3";
// const Ernst = "cff55748-56eb-4b56-ad42-638fea856ed1";
// const Klaus = "c2b27324-5a68-41b4-83ff-44973621bd99";

// const projectA = "b3bea36b-f03e-42a5-bf69-1603281b5876";
// const projectB = "a5c3d0fc-3ca7-4c8d-aa07-1759152eaa0d";
// const projectX = "7360bd6e-6239-4e48-96e3-1a7e828ebedc";
// const projectY = "a6c75a1f-ebdc-4302-914f-ffc0691fd901";

// var params = {
//     TableName: "happy-projects",
//     KeyConditionExpression: "PK = :PK",
//     ExpressionAttributeValues: {
//         ":PK": `ORG#${happyIncOrgId}#PRO#${projectX}`
//     }
// };
// dynamodb.query(params, function(err, data) {
//     if (err) console.log(err);
//     else console.log(data);
// });

//Find projects from Stan Libuda
const Stan = "f0f6cd5a-2ff7-4607-9d58-7340753f29d3";
const happyIncOrgId = "dde19ac4-5cdc-46c0-808c-9b1a29391e75";

var params={
    TableName: "happy-projects",
    IndexName: "Project-Employee-Index",
    KeyConditionExpression: "SK = :SK",
    ExpressionAttributeValues: {
        ":SK": `ORG#${happyIncOrgId}#EMP#${Stan}`
    }
}
dynamodb.query(params, function(err, data) {
    if (err) console.log(err);
    else console.log(data);
});
