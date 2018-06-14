/**
 * default-response.module.spec
 */
const { expect } = require("chai");

const response = require('./default-response.module');

describe('DefaultResponseModule', () => {

    it('should return a default response', () => {

        const result = response.status(404);

        expect(result.status).to.not.be.undefined;
    });

    it('should return an empty object if no status code', () => {

        const result = response.status();

        expect(result.status).to.be.undefined;
        expect(JSON.stringify(result)).to.equal("{}");
    });

    it('should allow setting a custom developer message', () => {

        const testMessage = "Hello this is some message";
        const result = response.statusMessage(
            404,
            testMessage
        );

        expect(result.developerMessage).to.equal(testMessage);
    });

    it('should set a custom developer message when one is provided', () => {

        const result = response.statusMessage(404);
        const expectedResult = response.status(404).developerMessage;

        expect(result.developerMessage).to.equal(expectedResult);
    });
});