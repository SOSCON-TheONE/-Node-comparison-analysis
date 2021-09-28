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
exports.StridedSliceOptions = void 0;
var flatbuffers = __importStar(require("flatbuffers"));
var StridedSliceOptions = /** @class */ (function () {
    function StridedSliceOptions() {
        this.bb = null;
        this.bb_pos = 0;
    }
    StridedSliceOptions.prototype.__init = function (i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    };
    StridedSliceOptions.getRootAsStridedSliceOptions = function (bb, obj) {
        return (obj || new StridedSliceOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    StridedSliceOptions.getSizePrefixedRootAsStridedSliceOptions = function (bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new StridedSliceOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    };
    StridedSliceOptions.prototype.beginMask = function () {
        var offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    };
    StridedSliceOptions.prototype.endMask = function () {
        var offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    };
    StridedSliceOptions.prototype.ellipsisMask = function () {
        var offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    };
    StridedSliceOptions.prototype.newAxisMask = function () {
        var offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    };
    StridedSliceOptions.prototype.shrinkAxisMask = function () {
        var offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
    };
    StridedSliceOptions.startStridedSliceOptions = function (builder) {
        builder.startObject(5);
    };
    StridedSliceOptions.addBeginMask = function (builder, beginMask) {
        builder.addFieldInt32(0, beginMask, 0);
    };
    StridedSliceOptions.addEndMask = function (builder, endMask) {
        builder.addFieldInt32(1, endMask, 0);
    };
    StridedSliceOptions.addEllipsisMask = function (builder, ellipsisMask) {
        builder.addFieldInt32(2, ellipsisMask, 0);
    };
    StridedSliceOptions.addNewAxisMask = function (builder, newAxisMask) {
        builder.addFieldInt32(3, newAxisMask, 0);
    };
    StridedSliceOptions.addShrinkAxisMask = function (builder, shrinkAxisMask) {
        builder.addFieldInt32(4, shrinkAxisMask, 0);
    };
    StridedSliceOptions.endStridedSliceOptions = function (builder) {
        var offset = builder.endObject();
        return offset;
    };
    StridedSliceOptions.createStridedSliceOptions = function (builder, beginMask, endMask, ellipsisMask, newAxisMask, shrinkAxisMask) {
        StridedSliceOptions.startStridedSliceOptions(builder);
        StridedSliceOptions.addBeginMask(builder, beginMask);
        StridedSliceOptions.addEndMask(builder, endMask);
        StridedSliceOptions.addEllipsisMask(builder, ellipsisMask);
        StridedSliceOptions.addNewAxisMask(builder, newAxisMask);
        StridedSliceOptions.addShrinkAxisMask(builder, shrinkAxisMask);
        return StridedSliceOptions.endStridedSliceOptions(builder);
    };
    return StridedSliceOptions;
}());
exports.StridedSliceOptions = StridedSliceOptions;
