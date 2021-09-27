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
exports.SequenceRNNOptions = void 0;
var flatbuffers = __importStar(require("flatbuffers"));
var activation_function_type_1 = require("../circle/activation-function-type");
var SequenceRNNOptions = /** @class */ (function () {
    function SequenceRNNOptions() {
        this.bb = null;
        this.bb_pos = 0;
    }
    SequenceRNNOptions.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    SequenceRNNOptions.getRootAsSequenceRNNOptions = function (bb, obj) {
        return (obj || new SequenceRNNOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    SequenceRNNOptions.getSizePrefixedRootAsSequenceRNNOptions = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new SequenceRNNOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    SequenceRNNOptions.prototype.timeMajor = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    };
    SequenceRNNOptions.prototype.fusedActivationFunction = function () {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : activation_function_type_1.ActivationFunctionType.NONE;
    };
    SequenceRNNOptions.prototype.asymmetricQuantizeInputs = function () {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    };
    SequenceRNNOptions.startSequenceRNNOptions = function (builder) {
        builder.startObject(3);
    };
    SequenceRNNOptions.addTimeMajor = function (builder, timeMajor) {
        builder.addFieldInt8(0, +timeMajor, +false);
    };
    SequenceRNNOptions.addFusedActivationFunction = function (builder, fusedActivationFunction) {
        builder.addFieldInt8(1, fusedActivationFunction, activation_function_type_1.ActivationFunctionType.NONE);
    };
    SequenceRNNOptions.addAsymmetricQuantizeInputs = function (builder, asymmetricQuantizeInputs) {
        builder.addFieldInt8(2, +asymmetricQuantizeInputs, +false);
    };
    SequenceRNNOptions.endSequenceRNNOptions = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    SequenceRNNOptions.createSequenceRNNOptions = function (builder, timeMajor, fusedActivationFunction, asymmetricQuantizeInputs) {
        SequenceRNNOptions.startSequenceRNNOptions(builder);
        SequenceRNNOptions.addTimeMajor(builder, timeMajor);
        SequenceRNNOptions.addFusedActivationFunction(builder, fusedActivationFunction);
        SequenceRNNOptions.addAsymmetricQuantizeInputs(builder, asymmetricQuantizeInputs);
        return SequenceRNNOptions.endSequenceRNNOptions(builder);
    };
    return SequenceRNNOptions;
}());
exports.SequenceRNNOptions = SequenceRNNOptions;