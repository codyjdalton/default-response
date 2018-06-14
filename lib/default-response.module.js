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
               messages[strCode] : {};
    }
    /**
     * @method statusMessage
     * @param {number | string} code - status code
     * @param {string} message - A developer message
     * @returns {ResponseMessage}
     */
    statusMessage(code, message) {
        
        const baseMessage = this.status(code);

        if(message) {
            baseMessage.developerMessage = message;
        }

        return baseMessage;
    }
}

module.exports = new DefaultResponse();