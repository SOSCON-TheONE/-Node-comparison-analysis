"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreaterOptions = void 0;
var flatbuffers = __importStar(require("flatbuffers"));
var GreaterOptions = /** @class */ (function () {
    function GreaterOptions() {
        this.bb = null;
        this.bb_pos = 0;
    }
    GreaterOptions.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    GreaterOptions.getRootAsGreaterOptions = function (bb, obj) {
        return (obj || new GreaterOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    GreaterOptions.getSizePrefixedRootAsGreaterOptions = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new GreaterOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    GreaterOptions.startGreaterOptions = function (builder) {
        builder.startObject(0);
    };
    GreaterOptions.endGreaterOptions = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    GreaterOptions.createGreaterOptions = function (builder) {
        GreaterOptions.startGreaterOptions(builder);
        return GreaterOptions.endGreaterOptions(builder);
    };
    return GreaterOptions;
}());
exports.GreaterOptions = GreaterOptions;
