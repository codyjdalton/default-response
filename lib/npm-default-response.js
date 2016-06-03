'use strict';

var mod = {};
var messages = require('./messages.json');

/**
 * Return a default response based on the status code
 */
mod.status = function(status){
    return (messages[status] || {});
};

module.exports = mod;