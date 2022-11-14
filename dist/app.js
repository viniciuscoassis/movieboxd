"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var server = (0, express_1["default"])();
server.get("/status", function (req, res) {
    res.send("ok");
});
server.listen(4000, function () { return console.log("listening..."); });
