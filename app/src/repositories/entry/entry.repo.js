"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platypus_1 = require('platypus');
var base_repo_1 = require('../base/base.repo');
var entry_svc_1 = require('../../services/entry/entry.svc');
var EntryRepository = (function (_super) {
    __extends(EntryRepository, _super);
    function EntryRepository(entrySvc) {
        _super.call(this);
        this.entrySvc = entrySvc;
    }
    EntryRepository.prototype.getRedditList = function () {
        return this.entrySvc.getRedditList();
    };
    return EntryRepository;
}(base_repo_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EntryRepository;
platypus_1.register.injectable('entry-repo', EntryRepository, [entry_svc_1.default]);
