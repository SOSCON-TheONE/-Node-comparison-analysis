"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
exports.__esModule = true;
exports.DivOptions = void 0;
var flatbuffers = require("flatbuffers");
var activation_function_type_1 = require("../circle/activation-function-type");
var DivOptions = /** @class */ (function () {
    function DivOptions() {
        this.bb = null;
        this.bb_pos = 0;
    }
    DivOptions.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    DivOptions.getRootAsDivOptions = function (bb, obj) {
        return (obj || new DivOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    DivOptions.getSizePrefixedRootAsDivOptions = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new DivOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    DivOptions.prototype.fusedActivationFunction = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : activation_function_type_1.ActivationFunctionType.NONE;
    };
    DivOptions.startDivOptions = function (builder) {
        builder.startObject(1);
    };
    DivOptions.addFusedActivationFunction = function (builder, fusedActivationFunction) {
        builder.addFieldInt8(0, fusedActivationFunction, activation_function_type_1.ActivationFunctionType.NONE);
    };
    DivOptions.endDivOptions = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    DivOptions.createDivOptions = function (builder, fusedActivationFunction) {
        DivOptions.startDivOptions(builder);
        DivOptions.addFusedActivationFunction(builder, fusedActivationFunction);
        return DivOptions.endDivOptions(builder);
    };
    return DivOptions;
}());
exports.DivOptions = DivOptions;