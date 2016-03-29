"use strict";
var platypus_1 = require('platypus');
var BaseService = (function () {
    function BaseService() {
        this.host = 'https://www.reddit.com/r/';
    }
    BaseService._inject = {
        http: platypus_1.async.Http,
        Promise: platypus_1.async.IPromise,
        utils: platypus_1.Utils
    };
    return BaseService;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BaseService;
