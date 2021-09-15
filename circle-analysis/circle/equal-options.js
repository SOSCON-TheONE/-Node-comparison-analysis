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
exports.EqualOptions = void 0;
var flatbuffers = __importStar(require("flatbuffers"));
var EqualOptions = /** @class */ (function () {
    function EqualOptions() {
        this.bb = null;
        this.bb_pos = 0;
    }
    EqualOptions.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    EqualOptions.getRootAsEqualOptions = function (bb, obj) {
        return (obj || new EqualOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    EqualOptions.getSizePrefixedRootAsEqualOptions = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new EqualOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    EqualOptions.startEqualOptions = function (builder) {
        builder.startObject(0);
    };
    EqualOptions.endEqualOptions = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    EqualOptions.createEqualOptions = function (builder) {
        EqualOptions.startEqualOptions(builder);
        return EqualOptions.endEqualOptions(builder);
    };
    return EqualOptions;
}());
exports.EqualOptions = EqualOptions;
