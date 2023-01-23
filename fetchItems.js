"use strict"

const { DynamoDB, DynamoDBStreams } = require("aws-sdk");
const AWS = require("aws-sdk")

const fetchItems = async (event) => {

    const dynamoDB = new AWS.DynamoDB.DocumentClient();

    let items;

    try {
        
        const results = await dynamoDB.scan({
            TableName: "ItemTableNew"
        }).promise();

        items = results.items

    } catch (error) {

        console.log(error)
        
    }

    return {
        statusCode: 200,
        body: JSON.stringify(items),
    };
}

module.exports = {
    handler: fetchItems,
};