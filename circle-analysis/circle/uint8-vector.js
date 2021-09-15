"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
exports.__esModule = true;
exports.Uint8Vector = void 0;
var flatbuffers = require("flatbuffers");
var Uint8Vector = /** @class */ (function () {
    function Uint8Vector() {
        this.bb = null;
        this.bb_pos = 0;
    }
    Uint8Vector.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    Uint8Vector.getRootAsUint8Vector = function (bb, obj) {
        return (obj || new Uint8Vector()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    Uint8Vector.getSizePrefixedRootAsUint8Vector = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new Uint8Vector()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    Uint8Vector.prototype.values = function (index) {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
    };
    Uint8Vector.prototype.valuesLength = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    };
    Uint8Vector.prototype.valuesArray = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
    };
    Uint8Vector.startUint8Vector = function (builder) {
        builder.startObject(1);
    };
    Uint8Vector.addValues = function (builder, valuesOffset) {
        builder.addFieldOffset(0, valuesOffset, 0);
    };
    Uint8Vector.createValuesVector = function (builder, data) {
        builder.startVector(1, data.length, 1);
        for (var i = data.length - 1; i >= 0; i--) {
            builder.addInt8(data[i]);
        }
        return builder.endVector();
    };
    Uint8Vector.startValuesVector = function (builder, numElems) {
        builder.startVector(1, numElems, 1);
    };
    Uint8Vector.endUint8Vector = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    Uint8Vector.createUint8Vector = function (builder, valuesOffset) {
        Uint8Vector.startUint8Vector(builder);
        Uint8Vector.addValues(builder, valuesOffset);
        return Uint8Vector.endUint8Vector(builder);
    };
    return Uint8Vector;
}());
exports.Uint8Vector = Uint8Vector;