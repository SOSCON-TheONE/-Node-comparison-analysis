"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
exports.__esModule = true;
exports.FakeQuantOptions = void 0;
var flatbuffers = require("flatbuffers");
var FakeQuantOptions = /** @class */ (function () {
    function FakeQuantOptions() {
        this.bb = null;
        this.bb_pos = 0;
    }
    FakeQuantOptions.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    FakeQuantOptions.getRootAsFakeQuantOptions = function (bb, obj) {
        return (obj || new FakeQuantOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    FakeQuantOptions.getSizePrefixedRootAsFakeQuantOptions = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new FakeQuantOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    FakeQuantOptions.prototype.min = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0.0;
    };
    FakeQuantOptions.prototype.max = function () {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0.0;
    };
    FakeQuantOptions.prototype.numBits = function () {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    };
    FakeQuantOptions.prototype.narrowRange = function () {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    };
    FakeQuantOptions.startFakeQuantOptions = function (builder) {
        builder.startObject(4);
    };
    FakeQuantOptions.addMin = function (builder, min) {
        builder.addFieldFloat32(0, min, 0.0);
    };
    FakeQuantOptions.addMax = function (builder, max) {
        builder.addFieldFloat32(1, max, 0.0);
    };
    FakeQuantOptions.addNumBits = function (builder, numBits) {
        builder.addFieldInt32(2, numBits, 0);
    };
    FakeQuantOptions.addNarrowRange = function (builder, narrowRange) {
        builder.addFieldInt8(3, +narrowRange, +false);
    };
    FakeQuantOptions.endFakeQuantOptions = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    FakeQuantOptions.createFakeQuantOptions = function (builder, min, max, numBits, narrowRange) {
        FakeQuantOptions.startFakeQuantOptions(builder);
        FakeQuantOptions.addMin(builder, min);
        FakeQuantOptions.addMax(builder, max);
        FakeQuantOptions.addNumBits(builder, numBits);
        FakeQuantOptions.addNarrowRange(builder, narrowRange);
        return FakeQuantOptions.endFakeQuantOptions(builder);
    };
    return FakeQuantOptions;
}());
exports.FakeQuantOptions = FakeQuantOptions;