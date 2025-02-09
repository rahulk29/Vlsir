// source: tetris.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.vlsir.tetris.PrimitiveLayer');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.vlsir.tetris.Xy');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vlsir.tetris.PrimitiveLayer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vlsir.tetris.PrimitiveLayer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vlsir.tetris.PrimitiveLayer.displayName = 'proto.vlsir.tetris.PrimitiveLayer';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vlsir.tetris.PrimitiveLayer.prototype.toObject = function(opt_includeInstance) {
  return proto.vlsir.tetris.PrimitiveLayer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vlsir.tetris.PrimitiveLayer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.tetris.PrimitiveLayer.toObject = function(includeInstance, msg) {
  var f, obj = {
    pitches: (f = msg.getPitches()) && proto.vlsir.tetris.Xy.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vlsir.tetris.PrimitiveLayer}
 */
proto.vlsir.tetris.PrimitiveLayer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vlsir.tetris.PrimitiveLayer;
  return proto.vlsir.tetris.PrimitiveLayer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vlsir.tetris.PrimitiveLayer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vlsir.tetris.PrimitiveLayer}
 */
proto.vlsir.tetris.PrimitiveLayer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vlsir.tetris.Xy;
      reader.readMessage(value,proto.vlsir.tetris.Xy.deserializeBinaryFromReader);
      msg.setPitches(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vlsir.tetris.PrimitiveLayer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vlsir.tetris.PrimitiveLayer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vlsir.tetris.PrimitiveLayer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.tetris.PrimitiveLayer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPitches();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.vlsir.tetris.Xy.serializeBinaryToWriter
    );
  }
};


/**
 * optional Xy pitches = 1;
 * @return {?proto.vlsir.tetris.Xy}
 */
proto.vlsir.tetris.PrimitiveLayer.prototype.getPitches = function() {
  return /** @type{?proto.vlsir.tetris.Xy} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.tetris.Xy, 1));
};


/**
 * @param {?proto.vlsir.tetris.Xy|undefined} value
 * @return {!proto.vlsir.tetris.PrimitiveLayer} returns this
*/
proto.vlsir.tetris.PrimitiveLayer.prototype.setPitches = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.tetris.PrimitiveLayer} returns this
 */
proto.vlsir.tetris.PrimitiveLayer.prototype.clearPitches = function() {
  return this.setPitches(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.tetris.PrimitiveLayer.prototype.hasPitches = function() {
  return jspb.Message.getField(this, 1) != null;
};


