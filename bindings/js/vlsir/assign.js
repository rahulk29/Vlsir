// source: tetris.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.vlsir.tetris.Assign');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.vlsir.tetris.TrackCross');

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
proto.vlsir.tetris.Assign = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vlsir.tetris.Assign, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vlsir.tetris.Assign.displayName = 'proto.vlsir.tetris.Assign';
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
proto.vlsir.tetris.Assign.prototype.toObject = function(opt_includeInstance) {
  return proto.vlsir.tetris.Assign.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vlsir.tetris.Assign} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.tetris.Assign.toObject = function(includeInstance, msg) {
  var f, obj = {
    net: jspb.Message.getFieldWithDefault(msg, 1, ""),
    at: (f = msg.getAt()) && proto.vlsir.tetris.TrackCross.toObject(includeInstance, f)
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
 * @return {!proto.vlsir.tetris.Assign}
 */
proto.vlsir.tetris.Assign.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vlsir.tetris.Assign;
  return proto.vlsir.tetris.Assign.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vlsir.tetris.Assign} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vlsir.tetris.Assign}
 */
proto.vlsir.tetris.Assign.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNet(value);
      break;
    case 2:
      var value = new proto.vlsir.tetris.TrackCross;
      reader.readMessage(value,proto.vlsir.tetris.TrackCross.deserializeBinaryFromReader);
      msg.setAt(value);
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
proto.vlsir.tetris.Assign.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vlsir.tetris.Assign.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vlsir.tetris.Assign} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.tetris.Assign.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNet();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.vlsir.tetris.TrackCross.serializeBinaryToWriter
    );
  }
};


/**
 * optional string net = 1;
 * @return {string}
 */
proto.vlsir.tetris.Assign.prototype.getNet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vlsir.tetris.Assign} returns this
 */
proto.vlsir.tetris.Assign.prototype.setNet = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TrackCross at = 2;
 * @return {?proto.vlsir.tetris.TrackCross}
 */
proto.vlsir.tetris.Assign.prototype.getAt = function() {
  return /** @type{?proto.vlsir.tetris.TrackCross} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.tetris.TrackCross, 2));
};


/**
 * @param {?proto.vlsir.tetris.TrackCross|undefined} value
 * @return {!proto.vlsir.tetris.Assign} returns this
*/
proto.vlsir.tetris.Assign.prototype.setAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.tetris.Assign} returns this
 */
proto.vlsir.tetris.Assign.prototype.clearAt = function() {
  return this.setAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.tetris.Assign.prototype.hasAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


