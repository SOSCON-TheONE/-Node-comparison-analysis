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
exports.TransposeConvOptions = void 0;
var flatbuffers = __importStar(require("flatbuffers"));
var padding_1 = require("../circle/padding");
var TransposeConvOptions = /** @class */ (function () {
    function TransposeConvOptions() {
        this.bb = null;
        this.bb_pos = 0;
    }
    TransposeConvOptions.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    TransposeConvOptions.getRootAsTransposeConvOptions = function (bb, obj) {
        return (obj || new TransposeConvOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    TransposeConvOptions.getSizePrefixedRootAsTransposeConvOptions = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new TransposeConvOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    TransposeConvOptions.prototype.padding = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : padding_1.Padding.SAME;
    };
    TransposeConvOptions.prototype.strideW = function () {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    };
    TransposeConvOptions.prototype.strideH = function () {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    };
    TransposeConvOptions.startTransposeConvOptions = function (builder) {
        builder.startObject(3);
    };
    TransposeConvOptions.addPadding = function (builder, padding) {
        builder.addFieldInt8(0, padding, padding_1.Padding.SAME);
    };
    TransposeConvOptions.addStrideW = function (builder, strideW) {
        builder.addFieldInt32(1, strideW, 0);
    };
    TransposeConvOptions.addStrideH = function (builder, strideH) {
        builder.addFieldInt32(2, strideH, 0);
    };
    TransposeConvOptions.endTransposeConvOptions = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    TransposeConvOptions.createTransposeConvOptions = function (builder, padding, strideW, strideH) {
        TransposeConvOptions.startTransposeConvOptions(builder);
        TransposeConvOptions.addPadding(builder, padding);
        TransposeConvOptions.addStrideW(builder, strideW);
        TransposeConvOptions.addStrideH(builder, strideH);
        return TransposeConvOptions.endTransposeConvOptions(builder);
    };
    return TransposeConvOptions;
}());
exports.TransposeConvOptions = TransposeConvOptions;
