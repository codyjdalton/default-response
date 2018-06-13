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
    });
});