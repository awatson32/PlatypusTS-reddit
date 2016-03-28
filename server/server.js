"use strict";
var express = require('express');
var path_1 = require('path');
var logger = require('morgan');
var serve = require('serve-static');
var root = path_1.join(__dirname, '../');
var port = 3000;
function isFileExt(file) {
    var len = file.length;
    if (file.indexOf('.') === -1) {
        return false;
    }
    else if (!(file[len - 5] === '.' ||
        file[len - 4] === '.' ||
        file[len - 3] === '.' ||
        file[len - 2] === '.' ||
        file[len - 1] === '.')) {
        return false;
    }
    else if (file.indexOf('/api') === 0 || file.indexOf('/?') === 0) {
        return false;
    }
    return true;
}
var app = express(), platui = '/node_modules/platypusui/dist/fonts';
app
    .use(logger('dev'))
    .use(serve(path_1.join(root, 'app')))
    .use(platui, serve(path_1.join(root, platui)))
    .get('*', function (req, res, next) {
    if (isFileExt(req.url)) {
        next();
        return;
    }
    res.sendFile(path_1.join(root, 'app/index.html'));
});
app.listen(port, function () {
    console.log("listening on port " + port + ".");
});
