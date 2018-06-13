/**
 * default-response.module
 */
const messages = require('./messages.json');

/**
 * Class Declaration
 */
class DefaultResponse {
    /**
     * @method status
     * @param {number | string} code - status code
     * @returns {ResponseMessage}
     */
    status(code) {
        
        const strCode = code ? code.toString() : 0;

        return messages[strCode] ?
               messages[strCode] : {}
    }
}

module.exports = new DefaultResponse();