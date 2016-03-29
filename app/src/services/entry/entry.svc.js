"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platypus_1 = require('platypus');
var base_svc_1 = require('../base/base.svc');
var EntryService = (function (_super) {
    __extends(EntryService, _super);
    function EntryService() {
        _super.apply(this, arguments);
    }
    EntryService.prototype.getRedditList = function () {
        return this.http.json({
            method: 'GET',
            url: this.host + 'Showerthoughts.json'
        }).then(function (success) {
            return success.response.data.children;
        }, function (err) {
            console.log(err);
            throw err;
        });
    };
    return EntryService;
}(base_svc_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EntryService;
platypus_1.register.injectable('entry-svc', EntryService);
