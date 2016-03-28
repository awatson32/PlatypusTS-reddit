"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platypus_1 = require('platypus');
var base_vc_1 = require('../base/base.vc');
var entry_repo_1 = require('../../repositories/entry/entry.repo');
var HomeViewControl = (function (_super) {
    __extends(HomeViewControl, _super);
    function HomeViewControl(entryRepo) {
        _super.call(this);
        this.entryRepo = entryRepo;
        this.templateString = require('./home.vc.html');
        this.context = {
            entries: [],
        };
    }
    HomeViewControl.prototype.navigatedTo = function () {
        var _this = this;
        this.entryRepo.getRedditList().then(function (success) {
            console.log("We made it to the reddit.");
            console.log(success);
            _this.context.entries = success;
        }, function (err) {
            console.log("Uh, oh. Something's not right.");
            console.log(err);
        });
    };
    return HomeViewControl;
}(base_vc_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomeViewControl;
platypus_1.register.viewControl('home-vc', HomeViewControl, [entry_repo_1.default]);
