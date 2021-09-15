"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
exports.__esModule = true;
exports.ConcatEmbeddingsOptions = void 0;
var flatbuffers = require("flatbuffers");
var ConcatEmbeddingsOptions = /** @class */ (function () {
    function ConcatEmbeddingsOptions() {
        this.bb = null;
        this.bb_pos = 0;
    }
    ConcatEmbeddingsOptions.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    ConcatEmbeddingsOptions.getRootAsConcatEmbeddingsOptions = function (bb, obj) {
        return (obj || new ConcatEmbeddingsOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    ConcatEmbeddingsOptions.getSizePrefixedRootAsConcatEmbeddingsOptions = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new ConcatEmbeddingsOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    ConcatEmbeddingsOptions.prototype.numChannels = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    };
    ConcatEmbeddingsOptions.prototype.numColumnsPerChannel = function (index) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readInt32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
    };
    ConcatEmbeddingsOptions.prototype.numColumnsPerChannelLength = function () {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    };
    ConcatEmbeddingsOptions.prototype.numColumnsPerChannelArray = function () {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
    };
    ConcatEmbeddingsOptions.prototype.embeddingDimPerChannel = function (index) {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.readInt32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
    };
    ConcatEmbeddingsOptions.prototype.embeddingDimPerChannelLength = function () {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    };
    ConcatEmbeddingsOptions.prototype.embeddingDimPerChannelArray = function () {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
    };
    ConcatEmbeddingsOptions.startConcatEmbeddingsOptions = function (builder) {
        builder.startObject(3);
    };
    ConcatEmbeddingsOptions.addNumChannels = function (builder, numChannels) {
        builder.addFieldInt32(0, numChannels, 0);
    };
    ConcatEmbeddingsOptions.addNumColumnsPerChannel = function (builder, numColumnsPerChannelOffset) {
        builder.addFieldOffset(1, numColumnsPerChannelOffset, 0);
    };
    ConcatEmbeddingsOptions.createNumColumnsPerChannelVector = function (builder, data) {
        builder.startVector(4, data.length, 4);
        for (var i = data.length - 1; i >= 0; i--) {
            builder.addInt32(data[i]);
        }
        return builder.endVector();
    };
    ConcatEmbeddingsOptions.startNumColumnsPerChannelVector = function (builder, numElems) {
        builder.startVector(4, numElems, 4);
    };
    ConcatEmbeddingsOptions.addEmbeddingDimPerChannel = function (builder, embeddingDimPerChannelOffset) {
        builder.addFieldOffset(2, embeddingDimPerChannelOffset, 0);
    };
    ConcatEmbeddingsOptions.createEmbeddingDimPerChannelVector = function (builder, data) {
        builder.startVector(4, data.length, 4);
        for (var i = data.length - 1; i >= 0; i--) {
            builder.addInt32(data[i]);
        }
        return builder.endVector();
    };
    ConcatEmbeddingsOptions.startEmbeddingDimPerChannelVector = function (builder, numElems) {
        builder.startVector(4, numElems, 4);
    };
    ConcatEmbeddingsOptions.endConcatEmbeddingsOptions = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    ConcatEmbeddingsOptions.createConcatEmbeddingsOptions = function (builder, numChannels, numColumnsPerChannelOffset, embeddingDimPerChannelOffset) {
        ConcatEmbeddingsOptions.startConcatEmbeddingsOptions(builder);
        ConcatEmbeddingsOptions.addNumChannels(builder, numChannels);
        ConcatEmbeddingsOptions.addNumColumnsPerChannel(builder, numColumnsPerChannelOffset);
        ConcatEmbeddingsOptions.addEmbeddingDimPerChannel(builder, embeddingDimPerChannelOffset);
        return ConcatEmbeddingsOptions.endConcatEmbeddingsOptions(builder);
    };
    return ConcatEmbeddingsOptions;
}());
exports.ConcatEmbeddingsOptions = ConcatEmbeddingsOptions;