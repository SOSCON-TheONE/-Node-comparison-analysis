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
exports.OneHotOptions = void 0;
var flatbuffers = __importStar(require("flatbuffers"));
var OneHotOptions = /** @class */ (function () {
    function OneHotOptions() {
        this.bb = null;
        this.bb_pos = 0;
    }
    OneHotOptions.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    OneHotOptions.getRootAsOneHotOptions = function (bb, obj) {
        return (obj || new OneHotOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    OneHotOptions.getSizePrefixedRootAsOneHotOptions = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new OneHotOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    OneHotOptions.prototype.axis = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    };
    OneHotOptions.startOneHotOptions = function (builder) {
        builder.startObject(1);
    };
    OneHotOptions.addAxis = function (builder, axis) {
        builder.addFieldInt32(0, axis, 0);
    };
    OneHotOptions.endOneHotOptions = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    OneHotOptions.createOneHotOptions = function (builder, axis) {
        OneHotOptions.startOneHotOptions(builder);
        OneHotOptions.addAxis(builder, axis);
        return OneHotOptions.endOneHotOptions(builder);
    };
    return OneHotOptions;
}());
exports.OneHotOptions = OneHotOptions;
