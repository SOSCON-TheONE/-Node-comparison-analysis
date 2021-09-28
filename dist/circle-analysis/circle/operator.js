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
exports.Operator = void 0;
var flatbuffers = __importStar(require("flatbuffers"));
var builtin_options_1 = require("../circle/builtin-options");
var custom_options_format_1 = require("../circle/custom-options-format");
var Operator = /** @class */ (function () {
    function Operator() {
        this.bb = null;
        this.bb_pos = 0;
    }
    Operator.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    Operator.getRootAsOperator = function (bb, obj) {
        return (obj || new Operator()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    Operator.getSizePrefixedRootAsOperator = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new Operator()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    Operator.prototype.opcodeIndex = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readUint32(this.bb_pos + offset) : 0;
    };
    Operator.prototype.inputs = function (index) {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readInt32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
    };
    Operator.prototype.inputsLength = function () {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    };
    Operator.prototype.inputsArray = function () {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
    };
    Operator.prototype.outputs = function (index) {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.readInt32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
    };
    Operator.prototype.outputsLength = function () {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    };
    Operator.prototype.outputsArray = function () {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
    };
    Operator.prototype.builtinOptionsType = function () {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.readUint8(this.bb_pos + offset) : builtin_options_1.BuiltinOptions.NONE;
    };
    Operator.prototype.builtinOptions = function (obj) {
        var offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
    };
    Operator.prototype.customOptions = function (index) {
        var offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? this.bb.readUint8(this.bb.__vector(this.bb_pos + offset) + index) : 0;
    };
    Operator.prototype.customOptionsLength = function () {
        var offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    };
    Operator.prototype.customOptionsArray = function () {
        var offset = this.bb.__offset(this.bb_pos, 14);
        return offset ? new Uint8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
    };
    Operator.prototype.customOptionsFormat = function () {
        var offset = this.bb.__offset(this.bb_pos, 16);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : custom_options_format_1.CustomOptionsFormat.FLEXBUFFERS;
    };
    Operator.prototype.mutatingVariableInputs = function (index) {
        var offset = this.bb.__offset(this.bb_pos, 18);
        return offset ? !!this.bb.readInt8(this.bb.__vector(this.bb_pos + offset) + index) : false;
    };
    Operator.prototype.mutatingVariableInputsLength = function () {
        var offset = this.bb.__offset(this.bb_pos, 18);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    };
    Operator.prototype.mutatingVariableInputsArray = function () {
        var offset = this.bb.__offset(this.bb_pos, 18);
        return offset ? new Int8Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
    };
    Operator.prototype.intermediates = function (index) {
        var offset = this.bb.__offset(this.bb_pos, 20);
        return offset ? this.bb.readInt32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
    };
    Operator.prototype.intermediatesLength = function () {
        var offset = this.bb.__offset(this.bb_pos, 20);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    };
    Operator.prototype.intermediatesArray = function () {
        var offset = this.bb.__offset(this.bb_pos, 20);
        return offset ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
    };
    Operator.startOperator = function (builder) {
        builder.startObject(9);
    };
    Operator.addOpcodeIndex = function (builder, opcodeIndex) {
        builder.addFieldInt32(0, opcodeIndex, 0);
    };
    Operator.addInputs = function (builder, inputsOffset) {
        builder.addFieldOffset(1, inputsOffset, 0);
    };
    Operator.createInputsVector = function (builder, data) {
        builder.startVector(4, data.length, 4);
        for (var i = data.length - 1; i >= 0; i--) {
            builder.addInt32(data[i]);
        }
        return builder.endVector();
    };
    Operator.startInputsVector = function (builder, numElems) {
        builder.startVector(4, numElems, 4);
    };
    Operator.addOutputs = function (builder, outputsOffset) {
        builder.addFieldOffset(2, outputsOffset, 0);
    };
    Operator.createOutputsVector = function (builder, data) {
        builder.startVector(4, data.length, 4);
        for (var i = data.length - 1; i >= 0; i--) {
            builder.addInt32(data[i]);
        }
        return builder.endVector();
    };
    Operator.startOutputsVector = function (builder, numElems) {
        builder.startVector(4, numElems, 4);
    };
    Operator.addBuiltinOptionsType = function (builder, builtinOptionsType) {
        builder.addFieldInt8(3, builtinOptionsType, builtin_options_1.BuiltinOptions.NONE);
    };
    Operator.addBuiltinOptions = function (builder, builtinOptionsOffset) {
        builder.addFieldOffset(4, builtinOptionsOffset, 0);
    };
    Operator.addCustomOptions = function (builder, customOptionsOffset) {
        builder.addFieldOffset(5, customOptionsOffset, 0);
    };
    Operator.createCustomOptionsVector = function (builder, data) {
        builder.startVector(1, data.length, 1);
        for (var i = data.length - 1; i >= 0; i--) {
            builder.addInt8(data[i]);
        }
        return builder.endVector();
    };
    Operator.startCustomOptionsVector = function (builder, numElems) {
        builder.startVector(1, numElems, 1);
    };
    Operator.addCustomOptionsFormat = function (builder, customOptionsFormat) {
        builder.addFieldInt8(6, customOptionsFormat, custom_options_format_1.CustomOptionsFormat.FLEXBUFFERS);
    };
    Operator.addMutatingVariableInputs = function (builder, mutatingVariableInputsOffset) {
        builder.addFieldOffset(7, mutatingVariableInputsOffset, 0);
    };
    Operator.createMutatingVariableInputsVector = function (builder, data) {
        builder.startVector(1, data.length, 1);
        for (var i = data.length - 1; i >= 0; i--) {
            builder.addInt8(+data[i]);
        }
        return builder.endVector();
    };
    Operator.startMutatingVariableInputsVector = function (builder, numElems) {
        builder.startVector(1, numElems, 1);
    };
    Operator.addIntermediates = function (builder, intermediatesOffset) {
        builder.addFieldOffset(8, intermediatesOffset, 0);
    };
    Operator.createIntermediatesVector = function (builder, data) {
        builder.startVector(4, data.length, 4);
        for (var i = data.length - 1; i >= 0; i--) {
            builder.addInt32(data[i]);
        }
        return builder.endVector();
    };
    Operator.startIntermediatesVector = function (builder, numElems) {
        builder.startVector(4, numElems, 4);
    };
    Operator.endOperator = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    Operator.createOperator = function (builder, opcodeIndex, inputsOffset, outputsOffset, builtinOptionsType, builtinOptionsOffset, customOptionsOffset, customOptionsFormat, mutatingVariableInputsOffset, intermediatesOffset) {
        Operator.startOperator(builder);
        Operator.addOpcodeIndex(builder, opcodeIndex);
        Operator.addInputs(builder, inputsOffset);
        Operator.addOutputs(builder, outputsOffset);
        Operator.addBuiltinOptionsType(builder, builtinOptionsType);
        Operator.addBuiltinOptions(builder, builtinOptionsOffset);
        Operator.addCustomOptions(builder, customOptionsOffset);
        Operator.addCustomOptionsFormat(builder, customOptionsFormat);
        Operator.addMutatingVariableInputs(builder, mutatingVariableInputsOffset);
        Operator.addIntermediates(builder, intermediatesOffset);
        return Operator.endOperator(builder);
    };
    return Operator;
}());
exports.Operator = Operator;
